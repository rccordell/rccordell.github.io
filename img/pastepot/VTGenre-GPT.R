library(tidyverse)
library(httr)

# load VT cluster data

clusters <- read_csv("data/large-clusters.csv") %>%
  select(cluster, size, date, text, source, url) %>%
  arrange(desc(size))

smallClusters <- clusters %>%
  na.omit %>%
  slice_head(n = 1000)
  # sample_n(1000)
  

# create openAI function

api_key <- readLines("data/openai-key.txt", warn = F)

ask_gpt <- function(prompt) {
  response <- POST(
    url = "https://api.openai.com/v1/chat/completions", 
    verbose(),
    add_headers(Authorization = paste("Bearer", api_key)),
    content_type_json(),
    encode = "json",
    body = list(
      model = "gpt-4-turbo-2024-04-09",
      messages = list(list(
        role = "user", 
        content = prompt
      ))
    )
  )
  str_trim(content(response)$choices[[1]]$message$content)
} 

# construct the prompt

genres <- c("poem","recipe","news","opinion","religious","political","advice","anecdote","humor","literary","scientific","travel","advertisement","other")

task <- "identify the genre of"

promptText <- paste0("Please respond using the best single word from this list—", paste(unlist(genres), collapse = ", "), "—to ", task, " the following text: ")

gptProcess <- function(df, promptText) {
  cluster <- df$cluster %>% unlist()
  size <- df$size %>% unlist()
  date <- df$date %>% unlist()
  source <- df$source %>% unlist()
  url <- df$url %>% unlist()
  text <- df$text %>% unlist()
  answer <- c()
  for (i in text) {
    prompt <- paste0(promptText," ",i)
    answerI <- ask_gpt(prompt)
    if(length(answerI) > 0) {
      answerI <- answerI
    }
    else answerI <- NA
    answer <- c(answer, answerI)
    Sys.sleep(2)
  }
  a <- tibble(cluster,size,date,source,text,answer,url)
  return(a)
}  

answers <- gptProcess(smallClusters[501:1000,], promptText)

write_csv(answers, "./output/vt-genres-largeClusters.csv")

answers <- answers %>%
  mutate(answer = gsub("The genre of the provided text is best described as \"news.\"", "news", answer))

answersToPlot <- answers %>%
  group_by(answer) %>%
  summarize(count = n()) %>%
  arrange(desc(count)) %>%
  ungroup()

answersToPlot %>%
  na.omit() %>%
  top_n(14) %>%
  ggplot() +
  geom_bar(aes(y=count,
               x=reorder(answer, count),
               fill=answer),
           stat="identity") + 
  coord_flip() +
  labs(title = "Genres of 1000 Most Reprinted Selections", y = "Texts Assigned", x = "GPT4-Assigned Genre")

