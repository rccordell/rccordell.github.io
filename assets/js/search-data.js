// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "My single and co-authored publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course websites and OA teaching materials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-response-student-centered-ai-amp-dh-practices-roundtable",
        
          title: "Response: Student-Centered AI &amp; DH Practices Roundtable",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/student-centered-AI";
          
        },
      },{id: "post-making-media-manifest",
        
          title: "Making Media Manifest",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/manifest";
          
        },
      },{id: "post-surveying-the-humanities-makerlab-movement-whitepaper-published",
        
          title: "Surveying the Humanities MakerLab Movement Whitepaper Published",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/shmlm";
          
        },
      },{id: "post-the-scissors-the-paste-pot-and-the-large-language-model",
        
          title: "The Scissors, the Paste-Pot, and the Large Language Model",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/scissors-paste-LLMs";
          
        },
      },{id: "post-visualizing-historical-networks-with-gephi",
        
          title: "Visualizing Historical Networks with Gephi",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/GephiWorkshop2023/";
          
        },
      },{id: "post-towards-a-bibliography-for-ai-systems",
        
          title: "Towards a Bibliography for AI Systems",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/aibibliography/";
          
        },
      },{id: "post-collaboration-is-the-thing",
        
          title: "Collaboration is THE Thing",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/dhcollaboration/";
          
        },
      },{id: "post-new-article-newspapers-and-periodicals",
        
          title: "New Article: Newspapers and Periodicals",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/newspapersperiodicals/";
          
        },
      },{id: "post-new-article-material-cultures-of-the-digital",
        
          title: "New Article: Material Cultures of the Digital",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/materialdigital/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-dependencies-as-a-framework-for-media-history-in-information-science",
        
          title: "Dependencies as a Framework for Media History in Information Science",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/dependencies/";
          
        },
      },{id: "post-spring-2022-grad-seminar-book-lab",
        
          title: "Spring 2022 Grad Seminar: Book Lab",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/s22bl/";
          
        },
      },{id: "post-why-the-ischool",
        
          title: "Why the iSchool?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/why-iSchool/";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-imagine-a-class-in-400-years",
        
          title: "Imagine a Class in 400 Years",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/400-years/";
          
        },
      },{id: "post-tips-for-classroom-discord",
        
          title: "Tips for Classroom Discord",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/classroom-discord/";
          
        },
      },{id: "post-building-a-better-book-student-project-demos-fall-2020",
        
          title: "Building a (Better) Book Student Project Demos - Fall 2020",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/f20bbb-student-book-demos/";
          
        },
      },{id: "post-speculative-bibliography-article-in-lt-em-gt-anglia-lt-em-gt",
        
          title: "Speculative Bibliography Article in &lt;em&gt;Anglia&lt;/em&gt;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/speculative-bibliography-anglia/";
          
        },
      },{id: "post-network-analysis-workshop-2017",
        
          title: "Network Analysis Workshop 2017",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/network-analysis-workshop-2017/";
          
        },
      },{id: "post-diy-books-summer-session",
        
          title: "DIY Books Summer Session",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/accelerate2020/";
          
        },
      },{id: "post-building-a-better-book-student-project-demos",
        
          title: "Building a (Better) Book Student Project Demos",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/bbb-student-book-demos/";
          
        },
      },{id: "post-talking-about-viral-texts-failures",
        
          title: "Talking about Viral Texts Failures",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/VT-database-fail/";
          
        },
      },{id: "post-twitterbot-workshop",
        
          title: "Twitterbot Workshop",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/Twitterbot-Workshop/";
          
        },
      },{id: "post-covid-caveat",
        
          title: "COVID Caveat",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/COVID-Caveat/";
          
        },
      },{id: "post-speculative-bibliography",
        
          title: "Speculative Bibliography",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/speculative-bibliography/";
          
        },
      },{id: "post-how-i-contract-grade",
        
          title: "How I Contract Grade",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/contract-grading/";
          
        },
      },{id: "post-leaving-home",
        
          title: "Leaving Home",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/leaving-home/";
          
        },
      },{id: "post-biblical-find-amp-replace",
        
          title: "Biblical Find &amp; Replace",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/biblicalreplacement/";
          
        },
      },{id: "post-teaching-humanistic-data-analysis",
        
          title: "Teaching Humanistic Data Analysis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/teachingHDA/";
          
        },
      },{id: "post-why-you-a-humanist-should-care-about-optical-character-recognition",
        
          title: "Why You (A Humanist) Should Care About Optical Character Recognition",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/why-ocr/";
          
        },
      },{id: "post-graduate-workshop-searching-and-applying-for-fellowships",
        
          title: "Graduate Workshop: Searching and Applying for Fellowships",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/fellowships-workshop-2018/";
          
        },
      },{id: "post-workshop-building-a-website-with-jekyll-and-github-pages",
        
          title: "Workshop: Building a Website with Jekyll and GitHub Pages",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/jekyll-workshop/";
          
        },
      },{id: "post-the-truck",
        
          title: "The Truck",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/the-truck/";
          
        },
      },{id: "post-a-gun-person",
        
          title: "A Gun Person",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/a-gun-person/";
          
        },
      },{id: "post-speculative-bibliography",
        
          title: "Speculative Bibliography",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/speculative-bibliography";
          
        },
      },{id: "post-a-dh-dossier",
        
          title: "A DH Dossier",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/dh-dossier";
          
        },
      },{id: "post-title-words-in-c19-newspapers",
        
          title: "Title Words in C19 Newspapers",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/c19-newspaper-title-words";
          
        },
      },{id: "post-a-quibble-with-39-binary-39",
        
          title: "A Quibble with &#39;Binary&#39;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/binary-quibble/";
          
        },
      },{id: "post-humorless-man-yells-at-english-major-jokes",
        
          title: "Humorless Man Yells at English Major Jokes",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/english-major-jokes/";
          
        },
      },{id: "post-amp-8216-q-i-jtb-the-raven-amp-8217-taking-dirty-ocr-seriously",
        
          title: "&amp;#8216;Q i-jtb the Raven&amp;#8217;: Taking Dirty OCR Seriously",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/qijtb-the-raven/";
          
        },
      },{id: "post-programmable-type-the-craft-of-printing-the-craft-of-code",
        
          title: "Programmable Type: the Craft of Printing, the Craft of Code",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/programmabletype/";
          
        },
      },{id: "post-viral-texts-reprinting-and-circulation-in-the-data-of-historical-newspapers",
        
          title: "Viral Texts: Reprinting and Circulation in the Data of Historical Newspapers",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/unam-workshop/";
          
        },
      },{id: "post-migrating-this-blog-to-jekyll",
        
          title: "Migrating this blog to Jekyll",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/jekyll-migration/";
          
        },
      },{id: "post-abundance-amp-038-usurpation-while-building-a-dh-curriculum",
        
          title: "Abundance &amp;#038; Usurpation while Building a DH Curriculum",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/abundance/";
          
        },
      },{id: "post-growing-up-under-the-amp-8220-lost-cause-amp-8221",
        
          title: "Growing Up Under the &amp;#8220;Lost Cause&amp;#8221;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/lost-cause/";
          
        },
      },{id: "post-neatline-workshop-2017",
        
          title: "Neatline Workshop 2017",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/workshops/neatline2017/";
          
        },
      },{id: "post-what-makes-computational-evidence-significant-for-literary-historical-argument",
        
          title: "What Makes Computational Evidence Significant for Literary-Historical Argument?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/dh/computational-evidence-for-literary-historical-argument/";
          
        },
      },{id: "post-objectivity-and-distant-reading",
        
          title: "Objectivity and Distant Reading",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/objectivity-1/";
          
        },
      },{id: "post-because-survival-is-insufficient",
        
          title: "Because Survival is Insufficient",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/because-survival-is-insufficient/";
          
        },
      },{id: "post-a-larger-view-of-digital-american-studies",
        
          title: "A Larger View of Digital American Studies",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/a-larger-view-of-digital-american-studies/";
          
        },
      },{id: "post-the-sentiment-of-circulation",
        
          title: "The Sentiment of Circulation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/mla/the-sentiment-of-circulation/";
          
        },
      },{id: "post-mla-2017-session-amp-8220-allthefeels-sentimentalism-then-and-now-amp-8221",
        
          title: "MLA 2017 Session: &amp;#8220;#AllTheFeels: Sentimentalism Then and Now&amp;#8221;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/allthefeels/";
          
        },
      },{id: "post-omeka-neatline-workshop-2016",
        
          title: "Omeka-Neatline Workshop 2016",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/workshops/omeka-neatline-2016/";
          
        },
      },{id: "post-two-of-three-ways-of-looking-at-c19-newspaper-exchange-networks",
        
          title: "Two (of Three) Ways of Looking at C19 Newspaper Exchange Networks",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/two-of-three/";
          
        },
      },{id: "post-network-analysis-workshop",
        
          title: "Network Analysis Workshop",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/network-analysis-workshop/";
          
        },
      },{id: "post-what-has-the-digital-meant-to-american-periodicals-scholarship",
        
          title: "What Has the Digital Meant to American Periodicals Scholarship?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/what-has-the-digital-meant-to-american-periodicals-scholarship/";
          
        },
      },{id: "post-amp-8216-q-i-jtb-the-raven-amp-8217-taking-dirty-ocr-seriously",
        
          title: "&amp;#8216;Q i-jtb the Raven&amp;#8217;: Taking Dirty OCR Seriously",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/qijtb-the-raven-mla/";
          
        },
      },{id: "post-clouds-like-the-locusts",
        
          title: "Clouds Like the Locusts",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/clouds-like-the-locusts/";
          
        },
      },{id: "post-scale-as-deformance",
        
          title: "Scale as Deformance",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/scale-as-deformance/";
          
        },
      },{id: "post-reprinting-circulation-and-the-network-author-in-antebellum-newspapers",
        
          title: "Reprinting, Circulation, and the Network Author in Antebellum Newspapers",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/reprinting-circulation-and-the-network-author-in-antebellum-newspapers/";
          
        },
      },{id: "post-going-viral-in-nineteenth-century-newspapers",
        
          title: "Going Viral in Nineteenth-Century Newspapers",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/going-viral-in-nineteenth-century-newspapers/";
          
        },
      },{id: "post-how-not-to-teach-digital-humanities",
        
          title: "How Not to Teach Digital Humanities",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/how-not-to-teach-digital-humanities/";
          
        },
      },{id: "post-amp-8220-many-facts-in-small-compass-amp-8221-information-literature-in-c19-newspapers-mla15-talk",
        
          title: "&amp;#8220;Many Facts in Small Compass&amp;#8221;: Information Literature in C19 Newspapers (MLA15 Talk)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/mla/many-facts-in-small-compass-information-literature-in-c19-newspapers-mla15-talk/";
          
        },
      },{id: "post-amp-8220-how-not-to-teach-digital-humanities-amp-8221-keynote-freedman-center-for-digital-scholarship-pedagogy-and-practices-colloquium",
        
          title: "&amp;#8220;How Not to Teach Digital Humanities&amp;#8221; Keynote, Freedman Center for Digital Scholarship Pedagogy...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/freedman-colloquium/";
          
        },
      },{id: "post-amp-8220-viral-texts-and-the-technologies-of-authorship-amp-8221-talk-at-the-penn-humanities-forum",
        
          title: "&amp;#8220;Viral Texts and the Technologies of Authorship&amp;#8221; Talk at the Penn Humanities Forum...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/penn-talk/";
          
        },
      },{id: "post-links-from-graduate-fellowships-workshop",
        
          title: "Links from Graduate Fellowships Workshop",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/graduate-school/links-from-graduate-fellowships-workshop/";
          
        },
      },{id: "post-on-ignoring-encoding",
        
          title: "On Ignoring Encoding",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/dh/on-ignoring-encoding/";
          
        },
      },{id: "post-mr-penumbra-distant-reading-and-cheating-at-scholarship",
        
          title: "Mr. Penumbra, Distant Reading, and Cheating at Scholarship",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/mr-penumbra-distant-reading-and-cheating-at-scholarship/";
          
        },
      },{id: "post-omeka-neatline-workshop-agenda-and-links",
        
          title: "Omeka/Neatline Workshop Agenda and Links",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/spatial-humanities/omekaneatline-workshop/";
          
        },
      },{id: "post-7-reasons-19th-century-newspapers-were-actually-the-original-buzzfeed",
        
          title: "7 Reasons 19th-Century Newspapers Were Actually the Original Buzzfeed",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/7-reasons-19th-century-newspapers-were-actually-the-original-buzzfeed/";
          
        },
      },{id: "post-representing-the-amp-8220-known-unknowns-amp-8221-in-humanities-visualizations",
        
          title: "Representing the &amp;#8220;Known Unknowns&amp;#8221; in Humanities Visualizations",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/representing-the-known-unknowns-in-humanities-visualizations/";
          
        },
      },{id: "post-updated-for-2013-creating-an-online-professional-presence-storify",
        
          title: "Updated for 2013: Creating an Online Professional Presence Storify",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/graduate-school/updated-for-2013-creating-an-online-professional-presence-storify/";
          
        },
      },{id: "post-boston-dh-consortium-session-3-breakout-group-notes",
        
          title: "Boston DH Consortium Session #3 Breakout Group Notes",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/boston-dh-consortium-session-3-breakout-group-notes/";
          
        },
      },{id: "post-hawthorne-article-published-at-dhq",
        
          title: "Hawthorne Article Published at DHQ",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/hawthorne-article-published-at-dhq/";
          
        },
      },{id: "post-creating-a-historical-map-with-gis",
        
          title: "Creating a Historical Map with GIS",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/spatial-humanities/creating-a-historical-map-with-gis/";
          
        },
      },{id: "post-mea-culpa-on-conference-tweeting-politeness-and-community-building",
        
          title: "Mea Culpa: on Conference Tweeting, Politeness, and Community Building",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/academic-profession/mea-culpa-on-conference-tweeting-politeness-and-community-building/";
          
        },
      },{id: "post-grad-proseminar-guest-talk-not-reading",
        
          title: "Grad Proseminar Guest Talk: Not Reading",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/grad-proseminar-guest-talk-not-reading/";
          
        },
      },{id: "post-my-technologies-of-text-class-visits-the-printing-office-of-edes-amp-amp-gill",
        
          title: "My Technologies of Text Class Visits the Printing Office of Edes &amp;amp; Gill...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/my-technologies-of-text-class-visits-the-printing-office-of-edes-gill/";
          
        },
      },{id: "post-creating-and-maintaining-a-professional-presence-online-a-workshop-for-graduate-students",
        
          title: "Creating and Maintaining a Professional Presence Online: A Workshop for Graduate Students",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/graduate-school/creating-and-maintaining-a-professional-presence-online-a-workshop-for-graduate-students/";
          
        },
      },{id: "post-useful-resources-for-the-academic-job-market",
        
          title: "Useful Resources for the Academic Job Market",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/graduate-school/useful-resources-for-the-academic-job-market/";
          
        },
      },{id: "post-introduction-to-dh-silcs",
        
          title: "Introduction to DH @ SILCS",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/introduction-to-dh-silcs/";
          
        },
      },{id: "post-mla13-digital-roundtable-amp-8220-how-i-got-started-in-digital-humanities-a-roundtable-of-new-dh-projects-from-dhcommons-amp-8221",
        
          title: "MLA13 Digital Roundtable: &amp;#8220;How I Got Started in Digital Humanities: A Roundtable of...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/mla/mla13-digital-roundtable/";
          
        },
      },{id: "post-amp-8220-john-keats-asked-to-type-in-a-word-verification-fears-that-he-may-cease-to-be-amp-8221-by-chuck-rybak",
        
          title: "&amp;#8220;John Keats, Asked to Type in a Word Verification, Fears That He May...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/john-keats/";
          
        },
      },{id: "post-new-job-at-northeastern-university",
        
          title: "New job at Northeastern University",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/new-job-at-northeastern-university/";
          
        },
      },{id: "post-dh-interdisciplinarity-and-curricular-incursion",
        
          title: "DH, Interdisciplinarity, and Curricular Incursion",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/dh-interdisciplinarity-and-curricular-incursion/";
          
        },
      },{id: "post-mla-2012-presentation-amp-8220-mapping-the-antebellum-culture-of-reprinting-amp-8221",
        
          title: "MLA 2012 Presentation: &amp;#8220;Mapping the Antebellum Culture of Reprinting&amp;#8221;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/mla/mla-2012-presentation-mapping-the-antebellum-culture-of-reprinting/";
          
        },
      },{id: "post-dhcommons-launches-at-mla-2012",
        
          title: "DHCommons Launches at MLA 2012",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/uncategorized/dhcommons-launches-at-mla-2012/";
          
        },
      },{id: "post-teaching-dh-101-presentation",
        
          title: "Teaching DH 101 Presentation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/teaching-dh-101-presentation/";
          
        },
      },{id: "post-day-1-minus-730-rethinking-undergraduate-methodological-training",
        
          title: "Day 1 Minus 730: Rethinking Undergraduate Methodological Training",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/day-1-minus-730/";
          
        },
      },{id: "post-the-celestial-railroad-and-the-1861-railroad",
        
          title: "“The Celestial Railroad” and the 1861 Railroad",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/the-celestial-railroad-and-the-1861-railroad/";
          
        },
      },{id: "post-thanks-greg",
        
          title: "Thanks, Greg.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/thanks-greg/";
          
        },
      },{id: "post-a-c19-reprint-discovery-engine-or-where-i-think-this-hawthorne-stuff-may-eventually-go",
        
          title: "A C19 Reprint Discovery Engine (or, Where I Think This Hawthorne Stuff May...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/c19-reprint-discovery-engine/";
          
        },
      },{id: "post-new-dh-course-technologies-of-text",
        
          title: "New DH Course: Technologies of Text",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/new-dh-course-technologies-of-text/";
          
        },
      },{id: "post-ngrams-craters-and-19th-century-sectarianism",
        
          title: "nGrams, Craters, and 19th Century Sectarianism",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/ngrams-craters-and-19th-century-sectarianism/";
          
        },
      },{id: "post-mapping-hawthorne-do-i-need-gis",
        
          title: "Mapping Hawthorne: Do I Need GIS?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/mapping-hawthorne-do-i-need-gis/";
          
        },
      },{id: "post-hacking-walden-pond",
        
          title: "Hacking Walden Pond",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/hacking-walden-pond/";
          
        },
      },{id: "post-what-citation-is-amp-8230",
        
          title: "What Citation Is&amp;#8230;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/teaching/what-citation-is/";
          
        },
      },{id: "post-granny-amp-8217-s-eulogy",
        
          title: "Granny&amp;#8217;s Eulogy",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal/grannys-eulogy/";
          
        },
      },{id: "post-david-rumsey-amp-8217-s-historical-maps-in-google-earth",
        
          title: "David Rumsey&amp;#8217;s Historical Maps in Google Earth",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/david-rumseys-historical-maps-in-google-earth/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-huskiana-letterpress",
          title: 'Huskiana Letterpress',
          description: "An experiential letterpress studio I founded at Northeastern University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-skeuomorph-press-amp-booklab",
          title: 'Skeuomorph Press &amp;amp; BookLab',
          description: "An experiential studio for teaching and researching the history and art of the book at UIUC",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-viral-texts",
          title: 'Viral Texts',
          description: "Mapping Networks of Reprinting in 19th-Century Newspapers and Magazines",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-oceanic-exchanges",
          title: 'Oceanic Exchanges',
          description: "Tracing Global Information Networks In Historical Newspaper Repositories 1840-1914",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-our-marathon",
          title: 'Our Marathon',
          description: "The Boston Bombing Digital Archive",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-historical-and-multilingual-ocr",
          title: 'Historical and Multilingual OCR',
          description: "A Research Agenda for Historical and Multilingual Optical Character Recognition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-machine-learning-libraries",
          title: 'Machine Learning + Libraries',
          description: "A Report on the State of the Field",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-the-atlas",
          title: 'The Atlas',
          description: "Mapping the Histories and Data of Digitised Newspaper Collections Around the World",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-values-forward-praxis",
          title: 'Values-Forward Praxis',
          description: "Data Science, Machine Learning, &amp; AI in Cultural Heritage Organizations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-the-virality-of-racial-terror-in-us-newspapers-1863-1921",
          title: 'The Virality of Racial Terror in US Newspapers 1863-1921',
          description: "Coming soon!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-computationally-modeling-publication-format",
          title: 'Computationally Modeling Publication Format',
          description: "Coming soon!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%63%63%6F%72%64%65%6C%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rccordell", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://hcommons.social/@ryancordell", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/ryancordell.bsky.social", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4345-0533", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
