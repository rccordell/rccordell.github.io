---
title: "Biblical Find & Replace"
date: 2019-06-06
author: Ryan Cordell
permalink: /teaching/biblicalreplacement/
layout: post
---

**UPDATE:** *I have been wanting to experiment with Shiny for awhile, so I used this silly experiment as an opportunity to teach myself the basics. There's now a barebones Shiny web app at <https://ryancordell.shinyapps.io/BiblicalFindNReplace/> you can use to perform your own Biblical Substitutions*

In my post/talk ["Teaching Humanities Data Analysis"](https://ryancordell.org/research/teachingHDA/) I recommended that such instruction start with creativity, and cited as an example an exercise I do with students designing mad-libs style Twitter poetry bots. The question of teaching data analysis is very much on my mind as I prepare the code workbooks that will serve as lessons for the "Introduction to Humanities Data Analysis & Visualization in R" I will teach with [Gregory J. Palermo](https://palermog.github.io/) at the [Digital Humanities Summer Institute](http://dhsi.org/index.php) next week. 

This morning I came across a Facebook post by [Lee Skallerup Bessette](https://readywriting.org/) linking to Daniel Mallory Ortberg's hilarious ["Bible Verses Where “Behold” Has Been Replaced With “Look, Buddy”](http://the-toast.net/2016/06/06/bible-verses-where-behold-has-been-replaced-with-look-buddy/), which gave me an idea for a fun, simple, day one exercise that will teach the very basics of filtering textual data and manipulating strings. Essentially, I wrote a short R function that accepts two strings—a phrase to search, and a phrase to replace it with—searches the King James Version of the Bible for all verses including the search phrase, and creates a news version of that verse using the replacement phrase. It works just like the `find and replace` functions in a program like Word, but with the slight advantage of only outputting the verses that include the replaced phrase. The pertinent code can be found in [this Gist on Github](https://gist.github.com/rccordell/ceb46023066b632a31d2c47d4b07369f) and I've embedded it below. Feel free to experiment with it!

<script src="https://gist.github.com/rccordell/ceb46023066b632a31d2c47d4b07369f.js"></script>

To really come up with funny results, you have to be thoughtful about all of the contexts in which a given word or phrase are used, so that the substitution will be grammatically appropriate in each substitution. So, subbing "for real, dude," for "verily" works in nearly every instance:

```
Genesis 42:21 And they said one to another, We are for real, dude, guilty concerning our brother, in that we saw the anguish of his soul, when he besought us, and we would not hear; therefore is this distress come upon us.

Exodus 31:13 Speak thou also unto the children of Israel, saying, for real, dude, my sabbaths ye shall keep: for it is a sign between me and you throughout your generations; that ye may know that I am the LORD that doth sanctify you.

Judges 15:2 And her father said, I for real, dude, thought that thou hadst utterly hated her; therefore I gave her to thy companion: is not her younger sister fairer than she? take her, I pray thee, instead of her.

1 Kings 1:43 And Jonathan answered and said to Adonijah, for real, dude, our lord king David hath made Solomon king.

2 Kings 4:14 And he said, What then is to be done for her? And Gehazi answered, for real, dude, she hath no child, and her husband is old.

1 Chronicles 21:24 And king David said to Ornan, Nay; but I will for real, dude, buy it for the full price: for I will not take that which is thine for the LORD, nor offer burnt offerings without cost.

Job 19:13 He hath put my brethren far from me, and mine acquaintance are for real, dude, estranged from me.

Psalms 37:3 Trust in the LORD, and do good; so shalt thou dwell in the land, and for real, dude, thou shalt be fed.

Psalms 39:5 Behold, thou hast made my days as an handbreadth; and mine age is as nothing before thee: for real, dude, every man at his best state is altogether vanity. Selah.

Psalms 58:11 So that a man shall say, for real, dude, there is a reward for the righteous: for real, dude, he is a God that judgeth in the earth.

Psalms 66:19 But for real, dude, God hath heard me; he hath attended to the voice of my prayer.

Psalms 73:13 For real, dude, I have cleansed my heart in vain, and washed my hands in innocency.

Isaiah 45:15 For real, dude, thou art a God that hidest thyself, O God of Israel, the Saviour.

Jeremiah 15:11 The LORD said, for real, dude, it shall be well with thy remnant; for real, dude, I will cause the enemy to entreat thee well in the time of evil and in the time of affliction.

Matthew 5:18 For for real, dude, I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled.

Matthew 5:26 For real, dude, I say unto thee, Thou shalt by no means come out thence, till thou hast paid the uttermost farthing.

Matthew 6:2 Therefore when thou doest thine alms, do not sound a trumpet before thee, as the hypocrites do in the synagogues and in the streets, that they may have glory of men. For real, dude, I say unto you, They have their reward.

Matthew 6:5 And when thou prayest, thou shalt not be as the hypocrites are: for they love to pray standing in the synagogues and in the corners of the streets, that they may be seen of men. For real, dude, I say unto you, They have their reward.

Matthew 6:16 Moreover when ye fast, be not, as the hypocrites, of a sad countenance: for they disfigure their faces, that they may appear unto men to fast. For real, dude, I say unto you, They have their reward.

Matthew 8:10 When Jesus heard it, he marvelled, and said to them that followed, for real, dude, I say unto you, I have not found so great faith, no, not in Israel.

Matthew 10:15 For real, dude, I say unto you, It shall be more tolerable for the land of Sodom and Gomorrha in the day of judgment, than for that city.

Matthew 10:23 But when they persecute you in this city, flee ye into another: for for real, dude, I say unto you, Ye shall not have gone over the cities of Israel, till the Son of man be come.

Matthew 10:42 And whosoever shall give to drink unto one of these little ones a cup of cold water only in the name of a disciple, for real, dude, I say unto you, he shall in no wise lose his reward.

Matthew 11:11 For real, dude, I say unto you, Among them that are born of women there hath not risen a greater than John the Baptist: notwithstanding he that is least in the kingdom of heaven is greater than he.

Matthew 13:17 For for real, dude, I say unto you, That many prophets and righteous men have desired to see those things which ye see, and have not seen them; and to hear those things which ye hear, and have not heard them.

Matthew 16:28 For real, dude, I say unto you, There be some standing here, which shall not taste of death, till they see the Son of man coming in his kingdom.

Matthew 17:20 And Jesus said unto them, Because of your unbelief: for for real, dude, I say unto you, If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you.

Matthew 18:3 And said, for real, dude, I say unto you, Except ye be converted, and become as little children, ye shall not enter into the kingdom of heaven.

Matthew 18:13 And if so be that he find it, for real, dude, I say unto you, he rejoiceth more of that sheep, than of the ninety and nine which went not astray.

Matthew 18:18 For real, dude, I say unto you, Whatsoever ye shall bind on earth shall be bound in heaven: and whatsoever ye shall loose on earth shall be loosed in heaven.

Matthew 19:23 Then said Jesus unto his disciples, for real, dude, I say unto you, That a rich man shall hardly enter into the kingdom of heaven.

Matthew 19:28 And Jesus said unto them, for real, dude, I say unto you, That ye which have followed me, in the regeneration when the Son of man shall sit in the throne of his glory, ye also shall sit upon twelve thrones, judging the twelve tribes of Israel.

Matthew 21:21 Jesus answered and said unto them, for real, dude, I say unto you, If ye have faith, and doubt not, ye shall not only do this which is done to the fig tree, but also if ye shall say unto this mountain, Be thou removed, and be thou cast into the sea; it shall be done.

Matthew 21:31 Whether of them twain did the will of his father? They say unto him, The first. Jesus saith unto them, for real, dude, I say unto you, That the publicans and the harlots go into the kingdom of God before you.

Matthew 23:36 For real, dude, I say unto you, All these things shall come upon this generation.

Matthew 24:2 And Jesus said unto them, See ye not all these things? for real, dude, I say unto you, There shall not be left here one stone upon another, that shall not be thrown down.

Matthew 24:34 For real, dude, I say unto you, This generation shall not pass, till all these things be fulfilled.

Matthew 24:47 For real, dude, I say unto you, That he shall make him ruler over all his goods.

Matthew 25:12 But he answered and said, for real, dude, I say unto you, I know you not.

Matthew 25:40 And the King shall answer and say unto them, for real, dude, I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.

Matthew 25:45 Then shall he answer them, saying, for real, dude, I say unto you, Inasmuch as ye did it not to one of the least of these, ye did it not to me.

Matthew 26:13 For real, dude, I say unto you, Wheresoever this gospel shall be preached in the whole world, there shall also this, that this woman hath done, be told for a memorial of her.

Matthew 26:21 And as they did eat, he said, for real, dude, I say unto you, that one of you shall betray me.

Matthew 26:34 Jesus said unto him, for real, dude, I say unto thee, That this night, before the cock crow, thou shalt deny me thrice.

Mark 3:28 For real, dude, I say unto you, All sins shall be forgiven unto the sons of men, and blasphemies wherewith soever they shall blaspheme:

Mark 6:11 And whosoever shall not receive you, nor hear you, when ye depart thence, shake off the dust under your feet for a testimony against them. For real, dude, I say unto you, It shall be more tolerable for Sodom and Gomorrha in the day of judgment, than for that city.

Mark 8:12 And he sighed deeply in his spirit, and saith, Why doth this generation seek after a sign? for real, dude, I say unto you, There shall no sign be given unto this generation.

Mark 9:1 AND he said unto them, for real, dude, I say unto you, That there be some of them that stand here, which shall not taste of death, till they have seen the kingdom of God come with power.

Mark 9:12 And he answered and told them, Elias for real, dude, cometh first, and restoreth all things; and how it is written of the Son of man, that he must suffer many things, and be set at nought.

Mark 9:41 For whosoever shall give you a cup of water to drink in my name, because ye belong to Christ, for real, dude, I say unto you, he shall not lose his reward.

Mark 10:15 For real, dude, I say unto you, Whosoever shall not receive the kingdom of God as a little child, he shall not enter therein.

Mark 10:29 And Jesus answered and said, for real, dude, I say unto you, There is no man that hath left house, or brethren, or sisters, or father, or mother, or wife, or children, or lands, for my sake, and the gospel's,

Mark 11:23 For for real, dude, I say unto you, That whosoever shall say unto this mountain, Be thou removed, and be thou cast into the sea; and shall not doubt in his heart, but shall believe that those things which he saith shall come to pass; he shall have whatsoever he saith.

Mark 12:43 And he called unto him his disciples, and saith unto them, for real, dude, I say unto you, That this poor widow hath cast more in, than all they which have cast into the treasury:

Mark 13:30 For real, dude, I say unto you, that this generation shall not pass, till all these things be done.

Mark 14:9 For real, dude, I say unto you, Wheresoever this gospel shall be preached throughout the whole world, this also that she hath done shall be spoken of for a memorial of her.

Mark 14:18 And as they sat and did eat, Jesus said, for real, dude, I say unto you, One of you which eateth with me shall betray me.

Mark 14:25 For real, dude, I say unto you, I will drink no more of the fruit of the vine, until that day that I drink it new in the kingdom of God.

Mark 14:30 And Jesus saith unto him, for real, dude, I say unto thee, That this day, even in this night, before the cock crow twice, thou shalt deny me thrice.

Luke 4:24 And he said, for real, dude, I say unto you, No prophet is accepted in his own country.

Luke 11:51 From the blood of Abel unto the blood of Zacharias, which perished between the altar and the temple: for real, dude, I say unto you, It shall be required of this generation.

Luke 12:37 Blessed are those servants, whom the lord when he cometh shall find watching: for real, dude, I say unto you, that he shall gird himself, and make them to sit down to meat, and will come forth and serve them.

Luke 13:35 Behold, your house is left unto you desolate: and for real, dude, I say unto you, Ye shall not see me, until the time come when ye shall say, Blessed is he that cometh in the name of the Lord.

Luke 18:17 For real, dude, I say unto you, Whosoever shall not receive the kingdom of God as a little child shall in no wise enter therein.

Luke 18:29 And he said unto them, for real, dude, I say unto you, There is no man that hath left house, or parents, or brethren, or wife, or children, for the kingdom of God's sake,

Luke 21:32 For real, dude, I say unto you, This generation shall not pass away, till all be fulfilled.

Luke 23:43 And Jesus said unto him, for real, dude, I say unto thee, To day shalt thou be with me in paradise.

John 1:51 And he saith unto him, for real, dude, for real, dude, I say unto you, Hereafter ye shall see heaven open, and the angels of God ascending and descending upon the Son of man.

John 3:3 Jesus answered and said unto him, for real, dude, for real, dude, I say unto thee, Except a man be born again, he cannot see the kingdom of God.

John 3:5 Jesus answered, for real, dude, for real, dude, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.

John 3:11 For real, dude, for real, dude, I say unto thee, We speak that we do know, and testify that we have seen; and ye receive not our witness.

John 5:19 Then answered Jesus and said unto them, for real, dude, for real, dude, I say unto you, The Son can do nothing of himself, but what he seeth the Father do: for what things soever he doeth, these also doeth the Son likewise.

John 5:24 For real, dude, for real, dude, I say unto you, He that heareth my word, and believeth on him that sent me, hath everlasting life, and shall not come into condemnation; but is passed from death unto life.

John 5:25 For real, dude, for real, dude, I say unto you, The hour is coming, and now is, when the dead shall hear the voice of the Son of God: and they that hear shall live.

John 6:26 Jesus answered them and said, for real, dude, for real, dude, I say unto you, Ye seek me, not because ye saw the miracles, but because ye did eat of the loaves, and were filled.

John 6:32 Then Jesus said unto them, for real, dude, for real, dude, I say unto you, Moses gave you not that bread from heaven; but my Father giveth you the true bread from heaven.

John 6:47 For real, dude, for real, dude, I say unto you, He that believeth on me hath everlasting life.

John 6:53 Then Jesus said unto them, for real, dude, for real, dude, I say unto you, Except ye eat the flesh of the Son of man, and drink his blood, ye have no life in you.

John 8:34 Jesus answered them, for real, dude, for real, dude, I say unto you, Whosoever committeth sin is the servant of sin.

John 8:51 For real, dude, for real, dude, I say unto you, If a man keep my saying, he shall never see death.

John 8:58 Jesus said unto them, for real, dude, for real, dude, I say unto you, Before Abraham was, I am.

John 10:1 For real, dude, for real, dude, I say unto you, He that entereth not by the door into the sheepfold, but climbeth up some other way, the same is a thief and a robber.

John 10:7 Then said Jesus unto them again, for real, dude, for real, dude, I say unto you, I am the door of the sheep.

John 12:24 For real, dude, for real, dude, I say unto you, Except a corn of wheat fall into the ground and die, it abideth alone: but if it die, it bringeth forth much fruit.

John 13:16 For real, dude, for real, dude, I say unto you, The servant is not greater than his lord; neither he that is sent greater than he that sent him.

John 13:20 For real, dude, for real, dude, I say unto you, He that receiveth whomsoever I send receiveth me; and he that receiveth me receiveth him that sent me.

John 13:21 When Jesus had thus said, he was troubled in spirit, and testified, and said, for real, dude, for real, dude, I say unto you, that one of you shall betray me.

John 13:38 Jesus answered him, Wilt thou lay down thy life for my sake? for real, dude, for real, dude, I say unto thee, The cock shall not crow, till thou hast denied me thrice.

John 14:12 For real, dude, for real, dude, I say unto you, He that believeth on me, the works that I do shall he do also; and greater works than these shall he do; because I go unto my Father.

John 16:20 For real, dude, for real, dude, I say unto you, That ye shall weep and lament, but the world shall rejoice: and ye shall be sorrowful, but your sorrow shall be turned into joy.

John 16:23 And in that day ye shall ask me nothing. For real, dude, for real, dude, I say unto you, Whatsoever ye shall ask the Father in my name, he will give it you.

John 21:18 For real, dude, for real, dude, I say unto thee, When thou wast young, thou girdedst thyself, and walkedst whither thou wouldest: but when thou shalt be old, thou shalt stretch forth thy hands, and another shall gird thee, and carry thee whither thou wouldest not.

Acts 16:37 But Paul said unto them, They have beaten us openly uncondemned, being Romans, and have cast us into prison; and now do they thrust us out privily? nay for real, dude,; but let them come themselves and fetch us out.

Acts 19:4 Then said Paul, John for real, dude, baptized with the baptism of repentance, saying unto the people, that they should believe on him which should come after him, that is, on Christ Jesus.

Acts 22:3 I am for real, dude, a man which am a Jew, born in Tarsus, a city in Cilicia, yet brought up in this city at the feet of Gamaliel, and taught according to the perfect manner of the law of the fathers, and was zealous toward God, as ye all are this day.

Acts 26:9 I for real, dude, thought with myself, that I ought to do many things contrary to the name of Jesus of Nazareth.

Romans 2:25 For circumcision for real, dude, profiteth, if thou keep the law: but if thou be a breaker of the law, thy circumcision is made uncircumcision.

Romans 10:18 But I say, Have they not heard? Yes for real, dude, their sound went into all the earth, and their words unto the ends of the world.

Romans 15:27 It hath pleased them for real, dude,; and their debtors they are. For if the Gentiles have been made partakers of their spiritual things, their duty is also to minister unto them in carnal things.

1 Corinthians 5:3 For I for real, dude, as absent in body, but present in spirit, have judged already, as though I were present, concerning him that hath so done this deed,

1 Corinthians 9:18 What is my reward then? for real, dude, that, when I preach the gospel, I may make the gospel of Christ without charge, that I abuse not my power in the gospel.

1 Corinthians 14:17 For thou for real, dude, givest thanks well, but the other is not edified.

Galatians 3:21 Is the law then against the promises of God? God forbid: for if there had been a law given which could have given life, for real, dude, righteousness should have been by the law.

1 Thessalonians 3:4 For for real, dude, when we were with you, we told you before that we should suffer tribulation; even as it came to pass, and ye know.

Hebrews 2:16 For for real, dude, he took not on him the nature of angels; but he took on him the seed of Abraham.

Hebrews 3:5 And Moses for real, dude, was faithful in all his house, as a servant, for a testimony of those things which were to be spoken after;

Hebrews 6:16 For men for real, dude, swear by the greater: and an oath for confirmation is to them an end of all strife.

Hebrews 7:5 And for real, dude, they that are of the sons of Levi, who receive the office of the priesthood, have a commandment to take tithes of the people according to the law, that is, of their brethren, though they come out of the loins of Abraham:

Hebrews 7:18 For there is for real, dude, a disannulling of the commandment going before for the weakness and unprofitableness thereof.

Hebrews 9:1 THEN for real, dude, the first covenant had also ordinances of divine service, and a worldly sanctuary.

Hebrews 12:10 For they for real, dude, for a few days chastened us after their own pleasure; but he for our profit, that we might be partakers of his holiness.

1 Peter 1:20 Who for real, dude, was foreordained before the foundation of the world, but was manifest in these last times for you,

1 John 2:5 But whoso keepeth his word, in him for real, dude, is the love of God perfected: hereby know we that we are in him.

```


While substituting "bitch, please" for "nay" (my wife's suggestion) is hilarious when it works, but it doesn't always quite fit:

```
Genesis 18:15 Then Sarah denied, saying, I laughed not; for she was afraid. And he said, bitch, please,; but thou didst laugh.

Genesis 19:2 And he said, Behold now, my lords, turn in, I pray you, into your servant's house, and tarry all night, and wash your feet, and ye shall rise up early, and go on your ways. And they said, bitch, please,; but we will abide in the street all night.

Genesis 23:11 Bitch, please, my lord, hear me: the field give I thee, and the cave that is therein, I give it thee; in the presence of the sons of my people give I it thee: bury thy dead.

Genesis 33:10 And Jacob said, bitch, please, I pray thee, if now I have found grace in thy sight, then receive my present at my hand: for therefore I have seen thy face, as though I had seen the face of God, and thou wast pleased with me.

Genesis 42:10 And they said unto him, bitch, please, my lord, but to buy food are thy servants come.

Genesis 42:12 And he said unto them, bitch, please, but to see the nakedness of the land ye are come.

Numbers 22:30 And the ass said unto Balaam, Am not I thine ass, upon which thou hast ridden ever since I was thine unto this day? was I ever wont to do so unto thee? And he said, bitch, please,.

Joshua 5:14 And he said, bitch, please,; but as captain of the host of the LORD am I now come. And Joshua fell on his face to the earth, and did worship, and said unto him, What saith my lord unto his servant?

Joshua 24:21 And the people said unto Joshua, bitch, please,; but we will serve the LORD.

Judges 12:5 And the Gileadites took the passages of Jordan before the Ephraimites: and it was so, that when those Ephraimites which were escaped said, Let me go over; that the men of Gilead said unto him, Art thou an Ephraimite? If he said, bitch, please,;

Judges 19:23 And the man, the master of the house, went out unto them, and said unto them, bitch, please, my brethren, bitch, please, I pray you, do not so wickedly; seeing that this man is come into mine house, do not this folly.

Ruth 1:13 Would ye tarry for them till they were grown? would ye stay for them from having husbands? bitch, please, my daughters; for it grieveth me much for your sakes that the hand of the LORD is gone out against me.

1 Samuel 2:16 And if any man said unto him, Let them not fail to burn the fat presently, and then take as much as thy soul desireth; then he would answer him, bitch, please,; but thou shalt give it me now: and if not, I will take it by force.

1 Samuel 2:24 Bitch, please, my sons; for it is no good report that I hear: ye make the LORD's people to transgress.

1 Samuel 8:19 Nevertheless the people refused to obey the voice of Samuel; and they said, bitch, please,; but we will have a king over us;

1 Samuel 10:19 And ye have this day rejected your God, who himself saved you out of all your adversities and your tribulations; and ye have said unto him, bitch, please, but set a king over us. Now therefore present yourselves before the LORD by your tribes, and by your thousands.

1 Samuel 12:12 And when ye saw that Nahash the king of the children of Ammon came against you, ye said unto me, bitch, please,; but a king shall reign over us: when the LORD your God was your king.

2 Samuel 13:12 And she answered him, bitch, please, my brother, do not force me; for no such thing ought to be done in Israel: do not thou this folly.

2 Samuel 13:25 And the king said to Absalom, bitch, please, my son, let us not all now go, lest we be chargeable unto thee. And he pressed him: howbeit he would not go, but blessed him.

2 Samuel 16:18 And Hushai said unto Absalom, bitch, please,; but whom the LORD, and this people, and all the men of Israel, choose, his will I be, and with him will I abide.

2 Samuel 24:24 And the king said unto Araunah, bitch, please,; but I will surely buy it of thee at a price: neither will I offer burnt offerings unto the LORD my God of that which doth cost me nothing. So David bought the threshingfloor and the oxen for fifty shekels of silver.

1 Kings 2:17 And he said, Speak, I pray thee, unto Solomon the king, (for he will not say thee bitch, please,) that he give me Abishag the Shunammite to wife.

1 Kings 2:20 Then she said, I desire one small petition of thee; I pray thee, say me not bitch, please,. And the king said unto her, Ask on, my mother: for I will not say thee bitch, please,.

1 Kings 2:30 And Benaiah came to the tabernacle of the LORD, and said unto him, Thus saith the king, Come forth. And he said, bitch, please,; but I will die here. And Benaiah brought the king word again, saying, Thus said Joab, and thus he answered me.

1 Kings 3:22 And the other woman said, bitch, please,; but the living is my son, and the dead is thy son. And this said, No; but the dead is thy son, and the living is my son. Thus they spake before the king.

1 Kings 3:23 Then said the king, The one saith, This is my son that liveth, and thy son is the dead: and the other saith, bitch, please,; but thy son is the dead, and my son is the living.

2 Kings 3:13 And Elisha said unto the king of Israel, What have I to do with thee? get thee to the prophets of thy father, and to the prophets of thy mother. And the king of Israel said unto him, bitch, please,: for the LORD hath called these three kings together, to deliver them into the hand of Moab.

2 Kings 4:16 And he said, About this season, according to the time of life, thou shalt embrace a son. And she said, bitch, please, my lord, thou man of God, do not lie unto thine handmaid.

2 Kings 20:10 And Hezekiah answered, It is a light thing for the shadow to go down ten degrees: bitch, please, but let the shadow return backward ten degrees.

1 Chronicles 21:24 And king David said to Ornan, bitch, please,; but I will verily buy it for the full price: for I will not take that which is thine for the LORD, nor offer burnt offerings without cost.

Jeremiah 6:15 Were they ashamed when they had committed abomination? bitch, please, they were not at all ashamed, neither could they blush: therefore they shall fall among them that fall: at the time that I visit them they shall be cast down, saith the LORD.

Jeremiah 8:12 Were they ashamed when they had committed abomination? bitch, please, they were not at all ashamed, neither could they blush: therefore shall they fall among them that fall: in the time of their visitation they shall be cast down, saith the LORD.

Matthew 5:37 But let your communication be, Yea, yea; bitch, please, bitch, please,: for whatsoever is more than these cometh of evil.

Matthew 13:29 But he said, bitch, please,; lest while ye gather up the tares, ye root up also the wheat with them.

Luke 12:51 Suppose ye that I am come to give peace on earth? I tell you, bitch, please,; but rather division:

Luke 13:3 I tell you, bitch, please,: but, except ye repent, ye shall all likewise perish.

Luke 13:5 I tell you, bitch, please,: but, except ye repent, ye shall all likewise perish.

Luke 16:30 And he said, bitch, please, father Abraham: but if one went unto them from the dead, they will repent.

John 7:12 And there was much murmuring among the people concerning him: for some said, He is a good man: others said, bitch, please,; but he deceiveth the people.

Acts 16:37 But Paul said unto them, They have beaten us openly uncondemned, being Romans, and have cast us into prison; and now do they thrust us out privily? bitch, please, verily; but let them come themselves and fetch us out.

Romans 3:27 Where is boasting then? It is excluded. By what law? of works? bitch, please,: but by the law of faith.

Romans 7:7 What shall we say then? Is the law sin? God forbid. Bitch, please, I had not known sin, but by the law: for I had not known lust, except the law had said, Thou shalt not covet.

Romans 8:37 Bitch, please, in all these things we are more than conquerors through him that loved us.

Romans 9:20 Bitch, please, but, O man, who art thou that repliest against God? Shall the thing formed say to him that formed it, Why hast thou made me thus?

1 Corinthians 6:8 Bitch, please, ye do wrong, and defraud, and that your brethren.

1 Corinthians 12:22 Bitch, please, much more those members of the body, which seem to be more feeble, are necessary:

2 Corinthians 1:17 When I therefore was thus minded, did I use lightness? or the things that I purpose, do I purpose according to the flesh, that with me there should be yea yea, and bitch, please, bitch, please,?

2 Corinthians 1:18 But as God is true, our word toward you was not yea and bitch, please,.

2 Corinthians 1:19 For the Son of God, Jesus Christ, who was preached among you by us, even by me and Silvanus and Timotheus, was not yea and bitch, please, but in him was yea.

James 5:12 But above all things, my brethren, swear not, neither by heaven, neither by the earth, neither by any other oath: but let your yea be yea; and your bitch, please, bitch, please,; lest ye fall into condemnation.

```

Perhaps my single favorite experiment I tried today substitutes "it'd be great if you could" for the phrase "thou shalt," turning lots of Biblical oratory into the middle manage from *Office Space*. Enjoy! If you make any of your own let me know about them.

<iframe src="https://giphy.com/embed/PER8oVobtMcus" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

```
Genesis 2:17 But of the tree of the knowledge of good and evil, it'd be great if you could not eat of it: for in the day that thou eatest thereof it'd be great if you could surely die.

Genesis 3:15 And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and it'd be great if you could bruise his heel.

Genesis 3:16 Unto the woman he said, I will greatly multiply thy sorrow and thy conception; in sorrow it'd be great if you could bring forth children; and thy desire shall be to thy husband, and he shall rule over thee.

Genesis 3:17 And unto Adam he said, Because thou hast hearkened unto the voice of thy wife, and hast eaten of the tree, of which I commanded thee, saying, it'd be great if you could not eat of it: cursed is the ground for thy sake; in sorrow shalt thou eat of it all the days of thy life;

Genesis 3:18 Thorns also and thistles shall it bring forth to thee; and it'd be great if you could eat the herb of the field;

Genesis 4:7 If thou doest well, shalt thou not be accepted? and if thou doest not well, sin lieth at the door. And unto thee shall be his desire, and it'd be great if you could rule over him.

Genesis 6:15 And this is the fashion which it'd be great if you could make it of: The length of the ark shall be three hundred cubits, the breadth of it fifty cubits, and the height of it thirty cubits.

Genesis 6:18 But with thee will I establish my covenant; and it'd be great if you could come into the ark, thou, and thy sons, and thy wife, and thy sons' wives with thee.

Genesis 6:21 And take thou unto thee of all food that is eaten, and it'd be great if you could gather it to thee; and it shall be for food for thee, and for them.

Genesis 7:2 Of every clean beast it'd be great if you could take to thee by sevens, the male and his female: and of beasts that are not clean by two, the male and his female.

Genesis 12:2 And I will make of thee a great nation, and I will bless thee, and make thy name great; and it'd be great if you could be a blessing:

Genesis 15:15 And it'd be great if you could go to thy fathers in peace; it'd be great if you could be buried in a good old age.

Genesis 17:4 As for me, behold, my covenant is with thee, and it'd be great if you could be a father of many nations.

Genesis 17:9 And God said unto Abraham, it'd be great if you could keep my covenant therefore, thou, and thy seed after thee in their generations.

Genesis 17:15 And God said unto Abraham, As for Sarai thy wife, it'd be great if you could not call her name Sarai, but Sarah shall her name be.

Genesis 17:19 And God said, Sarah thy wife shall bear thee a son indeed; and it'd be great if you could call his name Isaac: and I will establish my covenant with him for an everlasting covenant, and with his seed after him.

Genesis 20:7 Now therefore restore the man his wife; for he is a prophet, and he shall pray for thee, and it'd be great if you could live: and if thou restore her not, know thou that it'd be great if you could surely die, thou, and all that are thine.

Genesis 20:13 And it came to pass, when God caused me to wander from my father's house, that I said unto her, This is thy kindness which it'd be great if you could shew unto me; at every place whither we shall come, say of me, He is my brother.

Genesis 21:23 Now therefore swear unto me here by God that thou wilt not deal falsely with me, nor with my son, nor with my son's son: but according to the kindness that I have done unto thee, it'd be great if you could do unto me, and to the land wherein thou hast sojourned.

Genesis 24:3 And I will make thee swear by the LORD, the God of heaven, and the God of the earth, that it'd be great if you could not take a wife unto my son of the daughters of the Canaanites, among whom I dwell:

Genesis 24:4 But it'd be great if you could go unto my country, and to my kindred, and take a wife unto my son Isaac.

Genesis 24:7 The LORD God of heaven, which took me from my father's house, and from the land of my kindred, and which spake unto me, and that sware unto me, saying, Unto thy seed will I give this land; he shall send his angel before thee, and it'd be great if you could take a wife unto my son from thence.

Genesis 24:8 And if the woman will not be willing to follow thee, then it'd be great if you could be clear from this my oath: only bring not my son thither again.

Genesis 24:37 And my master made me swear, saying, it'd be great if you could not take a wife to my son of the daughters of the Canaanites, in whose land I dwell:

Genesis 24:38 But it'd be great if you could go unto my father's house, and to my kindred, and take a wife unto my son.

Genesis 24:40 And he said unto me, The LORD, before whom I walk, will send his angel with thee, and prosper thy way; and it'd be great if you could take a wife for my son of my kindred, and of my father's house:

Genesis 24:41 Then shalt thou be clear from this my oath, when thou comest to my kindred; and if they give not thee one, it'd be great if you could be clear from my oath.

Genesis 27:10 And it'd be great if you could bring it to thy father, that he may eat, and that he may bless thee before his death.

Genesis 27:40 And by thy sword shalt thou live, and shalt serve thy brother; and it shall come to pass when it'd be great if you could have the dominion, that it'd be great if you could break his yoke from off thy neck.

Genesis 28:1 AND Isaac called Jacob, and blessed him, and charged him, and said unto him, it'd be great if you could not take a wife of the daughters of Canaan.

Genesis 28:6 When Esau saw that Isaac had blessed Jacob, and sent him away to Padan-aram, to take him a wife from thence; and that as he blessed him he gave him a charge, saying, it'd be great if you could not take a wife of the daughters of Canaan;

Genesis 28:14 And thy seed shall be as the dust of the earth, and it'd be great if you could spread abroad to the west, and to the east, and to the north, and to the south: and in thee and in thy seed shall all the families of the earth be blessed.

Genesis 28:22 And this stone, which I have set for a pillar, shall be God's house: and of all that it'd be great if you could give me I will surely give the tenth unto thee.

Genesis 29:27 Fulfil her week, and we will give thee this also for the service which it'd be great if you could serve with me yet seven other years.

Genesis 30:31 And he said, What shall I give thee? And Jacob said, it'd be great if you could not give me any thing: if thou wilt do this thing for me, I will again feed and keep thy flock.

Genesis 31:50 If it'd be great if you could afflict my daughters, or if it'd be great if you could take other wives beside my daughters, no man is with us; see, God is witness betwixt me and thee.

Genesis 31:52 This heap be witness, and this pillar be witness, that I will not pass over this heap to thee, and that it'd be great if you could not pass over this heap and this pillar unto me, for harm.

Genesis 32:18 Then it'd be great if you could say, They be thy servant Jacob's; it is a present sent unto my lord Esau: and, behold, also he is behind us.

Genesis 35:17 And it came to pass, when she was in hard labour, that the midwife said unto her, Fear not; it'd be great if you could have this son also.

Genesis 40:13 Yet within three days shall Pharaoh lift up thine head, and restore thee unto thy place: and it'd be great if you could deliver Pharaoh's cup into his hand, after the former manner when thou wast his butler.

Genesis 41:40 It'd be great if you could be over my house, and according unto thy word shall all my people be ruled: only in the throne will I be greater than thou.

Genesis 45:10 And it'd be great if you could dwell in the land of Goshen, and it'd be great if you could be near unto me, thou, and thy children, and thy children's children, and thy flocks, and thy herds, and all that thou hast:

Genesis 47:30 But I will lie with my fathers, and it'd be great if you could carry me out of Egypt, and bury me in their buryingplace. And he said, I will do as thou hast said.

Genesis 49:4 Unstable as water, it'd be great if you could not excel; because thou wentest up to thy father's bed; then defiledst thou it: he went up to my couch.

Exodus 3:18 And they shall hearken to thy voice: and it'd be great if you could come, thou and the elders of Israel, unto the king of Egypt, and ye shall say unto him, The LORD God of the Hebrews hath met with us: and now let us go, we beseech thee, three days' journey into the wilderness, that we may sacrifice to the LORD our God.

Exodus 4:9 And it shall come to pass, if they will not believe also these two signs, neither hearken unto thy voice, that it'd be great if you could take of the water of the river, and pour it upon the dry land: and the water which thou takest out of the river shall become blood upon the dry land.

Exodus 4:12 Now therefore go, and I will be with thy mouth, and teach thee what it'd be great if you could say.

Exodus 4:15 And it'd be great if you could speak unto him, and put words in his mouth: and I will be with thy mouth, and with his mouth, and will teach you what ye shall do.

Exodus 4:16 And he shall be thy spokesman unto the people: and he shall be, even he shall be to thee instead of a mouth, and it'd be great if you could be to him instead of God.

Exodus 4:17 And it'd be great if you could take this rod in thine hand, wherewith it'd be great if you could do signs.

Exodus 4:22 And it'd be great if you could say unto Pharaoh, Thus saith the LORD, Israel is my son, even my firstborn:

Exodus 7:2 It'd be great if you could speak all that I command thee: and Aaron thy brother shall speak unto Pharaoh, that he send the children of Israel out of his land.

Exodus 7:9 When Pharaoh shall speak unto you, saying, Shew a miracle for you: then it'd be great if you could say unto Aaron, Take thy rod, and cast it before Pharaoh, and it shall become a serpent.

Exodus 7:15 Get thee unto Pharaoh in the morning; lo, he goeth out unto the water; and it'd be great if you could stand by the river's brink against he come; and the rod which was turned to a serpent shalt thou take in thine hand.

Exodus 7:16 And it'd be great if you could say unto him, The LORD God of the Hebrews hath sent me unto thee, saying, Let my people go, that they may serve me in the wilderness: and, behold, hitherto thou wouldest not hear.

Exodus 7:17 Thus saith the LORD, In this it'd be great if you could know that I am the LORD: behold, I will smite with the rod that is in mine hand upon the waters which are in the river, and they shall be turned to blood.

Exodus 9:15 For now I will stretch out my hand, that I may smite thee and thy people with pestilence; and it'd be great if you could be cut off from the earth.

Exodus 10:28 And Pharaoh said unto him, Get thee from me, take heed to thyself, see my face no more; for in that day thou seest my face it'd be great if you could die.

Exodus 12:46 In one house shall it be eaten; it'd be great if you could not carry forth ought of the flesh abroad out of the house; neither shall ye break a bone thereof.

Exodus 13:5 And it shall be when the LORD shall bring thee into the land of the Canaanites, and the Hittites, and the Amorites, and the Hivites, and the Jebusites, which he sware unto thy fathers to give thee, a land flowing with milk and honey, that it'd be great if you could keep this service in this month.

Exodus 13:6 Seven days it'd be great if you could eat unleavened bread, and in the seventh day shall be a feast to the LORD.

Exodus 13:8 And it'd be great if you could shew thy son in that day, saying, This is done because of that which the LORD did unto me when I came forth out of Egypt.

Exodus 13:10 It'd be great if you could therefore keep this ordinance in his season from year to year.

Exodus 13:12 That it'd be great if you could set apart unto the LORD all that openeth the matrix, and every firstling that cometh of a beast which thou hast; the males shall be the LORD's.

Exodus 13:13 And every firstling of an ass it'd be great if you could redeem with a lamb; and if thou wilt not redeem it, then it'd be great if you could break his neck: and all the firstborn of man among thy children shalt thou redeem.

Exodus 13:14 And it shall be when thy son asketh thee in time to come, saying, What is this? that it'd be great if you could say unto him, By strength of hand the LORD brought us out from Egypt, from the house of bondage:

Exodus 15:17 It'd be great if you could bring them in, and plant them in the mountain of thine inheritance, in the place, O LORD, which thou hast made for thee to dwell in, in the Sanctuary, O Lord, which thy hands have established.

Exodus 17:6 Behold, I will stand before thee there upon the rock in Horeb; and it'd be great if you could smite the rock, and there shall come water out of it, that the people may drink. And Moses did so in the sight of the elders of Israel.

Exodus 18:20 And it'd be great if you could teach them ordinances and laws, and shalt shew them the way wherein they must walk, and the work that they must do.

Exodus 18:21 Moreover it'd be great if you could provide out of all the people able men, such as fear God, men of truth, hating covetousness; and place such over them, to be rulers of thousands, and rulers of hundreds, rulers of fifties, and rulers of tens:

Exodus 18:23 If it'd be great if you could do this thing, and God command thee so, then it'd be great if you could be able to endure, and all this people shall also go to their place in peace.

Exodus 19:6 And ye shall be unto me a kingdom of priests, and an holy nation. These are the words which it'd be great if you could speak unto the children of Israel.

Exodus 19:12 And it'd be great if you could set bounds unto the people round about, saying, Take heed to yourselves, that ye go not up into the mount, or touch the border of it: whosoever toucheth the mount shall be surely put to death:

Exodus 19:24 And the LORD said unto him, Away, get thee down, and it'd be great if you could come up, thou, and Aaron with thee: but let not the priests and the people break through to come up unto the LORD, lest he break forth upon them.

Exodus 20:3 It'd be great if you could have no other gods before me.

Exodus 20:4 It'd be great if you could not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth:

Exodus 20:5 It'd be great if you could not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me;

Exodus 20:7 It'd be great if you could not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain.

Exodus 20:10 But the seventh day is the sabbath of the LORD thy God: in it it'd be great if you could not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates:

Exodus 20:13 It'd be great if you could not kill.

Exodus 20:14 It'd be great if you could not commit adultery.

Exodus 20:15 It'd be great if you could not steal.

Exodus 20:16 It'd be great if you could not bear false witness against thy neighbour.

Exodus 20:17 It'd be great if you could not covet thy neighbour's house, it'd be great if you could not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's.

Exodus 20:22 And the LORD said unto Moses, Thus it'd be great if you could say unto the children of Israel, Ye have seen that I have talked with you from heaven.

Exodus 20:24 An altar of earth it'd be great if you could make unto me, and shalt sacrifice thereon thy burnt offerings, and thy peace offerings, thy sheep, and thine oxen: in all places where I record my name I will come unto thee, and I will bless thee.

Exodus 20:25 And if thou wilt make me an altar of stone, it'd be great if you could not build it of hewn stone: for if thou lift up thy tool upon it, thou hast polluted it.

Exodus 21:1 NOW these are the judgments which it'd be great if you could set before them.

Exodus 21:14 But if a man come presumptuously upon his neighbour, to slay him with guile; it'd be great if you could take him from mine altar, that he may die.

Exodus 21:23 And if any mischief follow, then it'd be great if you could give life for life,

Exodus 22:18 It'd be great if you could not suffer a witch to live.

Exodus 22:21 It'd be great if you could neither vex a stranger, nor oppress him: for ye were strangers in the land of Egypt.

Exodus 22:25 If thou lend money to any of my people that is poor by thee, it'd be great if you could not be to him as an usurer, neither shalt thou lay upon him usury.

Exodus 22:26 If thou at all take thy neighbour's raiment to pledge, it'd be great if you could deliver it unto him by that the sun goeth down:

Exodus 22:28 It'd be great if you could not revile the gods, nor curse the ruler of thy people.

Exodus 22:29 It'd be great if you could not delay to offer the first of thy ripe fruits, and of thy liquors: the firstborn of thy sons shalt thou give unto me.

Exodus 22:30 Likewise shalt thou do with thine oxen, and with thy sheep: seven days it shall be with his dam; on the eighth day it'd be great if you could give it me.

Exodus 23:1 It'd be great if you could not raise a false report: put not thine hand with the wicked to be an unrighteous witness.

Exodus 23:2 It'd be great if you could not follow a multitude to do evil; neither shalt thou speak in a cause to decline after many to wrest judgment:

Exodus 23:4 If thou meet thine enemy's ox or his ass going astray, it'd be great if you could surely bring it back to him again.

Exodus 23:5 If thou see the ass of him that hateth thee lying under his burden, and wouldest forbear to help him, it'd be great if you could surely help with him.

Exodus 23:6 It'd be great if you could not wrest the judgment of thy poor in his cause.

Exodus 23:8 And it'd be great if you could take no gift: for the gift blindeth the wise, and perverteth the words of the righteous.

Exodus 23:9 Also it'd be great if you could not oppress a stranger: for ye know the heart of a stranger, seeing ye were strangers in the land of Egypt.

Exodus 23:10 And six years it'd be great if you could sow thy land, and shalt gather in the fruits thereof:

Exodus 23:11 But the seventh year it'd be great if you could let it rest and lie still; that the poor of thy people may eat: and what they leave the beasts of the field shall eat. In like manner it'd be great if you could deal with thy vineyard, and with thy oliveyard.

Exodus 23:12 Six days it'd be great if you could do thy work, and on the seventh day it'd be great if you could rest: that thine ox and thine ass may rest, and the son of thy handmaid, and the stranger, may be refreshed.

Exodus 23:14 Three times it'd be great if you could keep a feast unto me in the year.

Exodus 23:15 It'd be great if you could keep the feast of unleavened bread: (it'd be great if you could eat unleavened bread seven days, as I commanded thee, in the time appointed of the month Abib; for in it thou camest out from Egypt: and none shall appear before me empty:)

Exodus 23:18 It'd be great if you could not offer the blood of my sacrifice with leavened bread; neither shall the fat of my sacrifice remain until the morning.

Exodus 23:19 The first of the firstfruits of thy land it'd be great if you could bring into the house of the LORD thy God. It'd be great if you could not seethe a kid in his mother's milk.

Exodus 23:22 But if it'd be great if you could indeed obey his voice, and do all that I speak; then I will be an enemy unto thine enemies, and an adversary unto thine adversaries.

Exodus 23:24 It'd be great if you could not bow down to their gods, nor serve them, nor do after their works: but it'd be great if you could utterly overthrow them, and quite break down their images.

Exodus 23:27 I will send my fear before thee, and will destroy all the people to whom it'd be great if you could come, and I will make all thine enemies turn their backs unto thee.

Exodus 23:31 And I will set thy bounds from the Red sea even unto the sea of the Philistines, and from the desert unto the river: for I will deliver the inhabitants of the land into your hand; and it'd be great if you could drive them out before thee.

Exodus 23:32 It'd be great if you could make no covenant with them, nor with their gods.

Exodus 25:11 And it'd be great if you could overlay it with pure gold, within and without shalt thou overlay it, and shalt make upon it a crown of gold round about.

Exodus 25:12 And it'd be great if you could cast four rings of gold for it, and put them in the four corners thereof; and two rings shall be in the one side of it, and two rings in the other side of it.

Exodus 25:13 And it'd be great if you could make staves of shittim wood, and overlay them with gold.

Exodus 25:14 And it'd be great if you could put the staves into the rings by the sides of the ark, that the ark may be borne with them.

Exodus 25:16 And it'd be great if you could put into the ark the testimony which I shall give thee.

Exodus 25:17 And it'd be great if you could make a mercy seat of pure gold: two cubits and a half shall be the length thereof, and a cubit and a half the breadth thereof.

Exodus 25:18 And it'd be great if you could make two cherubims of gold, of beaten work shalt thou make them, in the two ends of the mercy seat.

Exodus 25:21 And it'd be great if you could put the mercy seat above upon the ark; and in the ark it'd be great if you could put the testimony that I shall give thee.

Exodus 25:23 It'd be great if you could also make a table of shittim wood: two cubits shall be the length thereof, and a cubit the breadth thereof, and a cubit and a half the height thereof.

Exodus 25:24 And it'd be great if you could overlay it with pure gold, and make thereto a crown of gold round about.

Exodus 25:25 And it'd be great if you could make unto it a border of an hand breadth round about, and it'd be great if you could make a golden crown to the border thereof round about.

Exodus 25:26 And it'd be great if you could make for it four rings of gold, and put the rings in the four corners that are on the four feet thereof.

Exodus 25:28 And it'd be great if you could make the staves of shittim wood, and overlay them with gold, that the table may be borne with them.

Exodus 25:29 And it'd be great if you could make the dishes thereof, and spoons thereof, and covers thereof, and bowls thereof, to cover withal: of pure gold shalt thou make them.

Exodus 25:30 And it'd be great if you could set upon the table shewbread before me alway.

Exodus 25:31 And it'd be great if you could make a candlestick of pure gold: of beaten work shall the candlestick be made: his shaft, and his branches, his bowls, his knops, and his flowers, shall be of the same.

Exodus 25:37 And it'd be great if you could make the seven lamps thereof: and they shall light the lamps thereof, that they may give light over against it.

Exodus 26:1 MOREOVER it'd be great if you could make the tabernacle with ten curtains of fine twined linen, and blue, and purple, and scarlet: with cherubims of cunning work shalt thou make them.

Exodus 26:4 And it'd be great if you could make loops of blue upon the edge of the one curtain from the selvedge in the coupling; and likewise shalt thou make in the uttermost edge of another curtain, in the coupling of the second.

Exodus 26:6 And it'd be great if you could make fifty taches of gold, and couple the curtains together with the taches: and it shall be one tabernacle.

Exodus 26:7 And it'd be great if you could make curtains of goats' hair to be a covering upon the tabernacle: eleven curtains shalt thou make.

Exodus 26:9 And it'd be great if you could couple five curtains by themselves, and six curtains by themselves, and shalt double the sixth curtain in the forefront of the tabernacle.

Exodus 26:10 And it'd be great if you could make fifty loops on the edge of the one curtain that is outmost in the coupling, and fifty loops in the edge of the curtain which coupleth the second.

Exodus 26:11 And it'd be great if you could make fifty taches of brass, and put the taches into the loops, and couple the tent together, that it may be one.

Exodus 26:14 And it'd be great if you could make a covering for the tent of rams' skins dyed red, and a covering above of badgers' skins.

Exodus 26:15 And it'd be great if you could make boards for the tabernacle of shittim wood standing up.

Exodus 26:18 And it'd be great if you could make the boards for the tabernacle, twenty boards on the south side southward.

Exodus 26:19 And it'd be great if you could make forty sockets of silver under the twenty boards; two sockets under one board for his two tenons, and two sockets under another board for his two tenons.

Exodus 26:22 And for the sides of the tabernacle westward it'd be great if you could make six boards.

Exodus 26:26 And it'd be great if you could make bars of shittim wood; five for the boards of the one side of the tabernacle,

Exodus 26:29 And it'd be great if you could overlay the boards with gold, and make their rings of gold for places for the bars: and it'd be great if you could overlay the bars with gold.

Exodus 26:30 And it'd be great if you could rear up the tabernacle according to the fashion thereof which was shewed thee in the mount.

Exodus 26:31 And it'd be great if you could make a vail of blue, and purple, and scarlet, and fine twined linen of cunning work: with cherubims shall it be made:

Exodus 26:32 And it'd be great if you could hang it upon four pillars of shittim wood overlaid with gold: their hooks shall be of gold, upon the four sockets of silver.

Exodus 26:33 And it'd be great if you could hang up the vail under the taches, that thou mayest bring in thither within the vail the ark of the testimony: and the vail shall divide unto you between the holy place and the most holy.

Exodus 26:34 And it'd be great if you could put the mercy seat upon the ark of the testimony in the most holy place.

Exodus 26:35 And it'd be great if you could set the table without the vail, and the candlestick over against the table on the side of the tabernacle toward the south: and it'd be great if you could put the table on the north side.

Exodus 26:36 And it'd be great if you could make an hanging for the door of the tent, of blue, and purple, and scarlet, and fine twined linen, wrought with needlework.

Exodus 26:37 And it'd be great if you could make for the hanging five pillars of shittim wood, and overlay them with gold, and their hooks shall be of gold: and it'd be great if you could cast five sockets of brass for them.

Exodus 27:1 AND it'd be great if you could make an altar of shittim wood, five cubits long, and five cubits broad; the altar shall be foursquare: and the height thereof shall be three cubits.

Exodus 27:2 And it'd be great if you could make the horns of it upon the four corners thereof: his horns shall be of the same: and it'd be great if you could overlay it with brass.

Exodus 27:3 And it'd be great if you could make his pans to receive his ashes, and his shovels, and his basons, and his fleshhooks, and his firepans: all the vessels thereof it'd be great if you could make of brass.

Exodus 27:4 And it'd be great if you could make for it a grate of network of brass; and upon the net shalt thou make four brasen rings in the four corners thereof.

Exodus 27:5 And it'd be great if you could put it under the compass of the altar beneath, that the net may be even to the midst of the altar.

Exodus 27:6 And it'd be great if you could make staves for the altar, staves of shittim wood, and overlay them with brass.

Exodus 27:9 And it'd be great if you could make the court of the tabernacle: for the south side southward there shall be hangings for the court of fine twined linen of an hundred cubits long for one side:

Exodus 27:20 And it'd be great if you could command the children of Israel, that they bring thee pure oil olive beaten for the light, to cause the lamp to burn always.

Exodus 28:2 And it'd be great if you could make holy garments for Aaron thy brother for glory and for beauty.

Exodus 28:3 And it'd be great if you could speak unto all that are wise hearted, whom I have filled with the spirit of wisdom, that they may make Aaron's garments to consecrate him, that he may minister unto me in the priest's office.

Exodus 28:9 And it'd be great if you could take two onyx stones, and grave on them the names of the children of Israel:

Exodus 28:11 With the work of an engraver in stone, like the engravings of a signet, shalt thou engrave the two stones with the names of the children of Israel: it'd be great if you could make them to be set in ouches of gold.

Exodus 28:12 And it'd be great if you could put the two stones upon the shoulders of the ephod for stones of memorial unto the children of Israel: and Aaron shall bear their names before the LORD upon his two shoulders for a memorial.

Exodus 28:13 And it'd be great if you could make ouches of gold;

Exodus 28:15 And it'd be great if you could make the breastplate of judgment with cunning work; after the work of the ephod it'd be great if you could make it; of gold, of blue, and of purple, and of scarlet, and of fine twined linen, shalt thou make it.

Exodus 28:17 And it'd be great if you could set in it settings of stones, even four rows of stones: the first row shall be a sardius, a topaz, and a carbuncle: this shall be the first row.

Exodus 28:22 And it'd be great if you could make upon the breastplate chains at the ends of wreathen work of pure gold.

Exodus 28:23 And it'd be great if you could make upon the breastplate two rings of gold, and shalt put the two rings on the two ends of the breastplate.

Exodus 28:24 And it'd be great if you could put the two wreathen chains of gold in the two rings which are on the ends of the breastplate.

Exodus 28:25 And the other two ends of the two wreathen chains it'd be great if you could fasten in the two ouches, and put them on the shoulderpieces of the ephod before it.

Exodus 28:26 And it'd be great if you could make two rings of gold, and it'd be great if you could put them upon the two ends of the breastplate in the border thereof, which is in the side of the ephod inward.

Exodus 28:27 And two other rings of gold it'd be great if you could make, and shalt put them on the two sides of the ephod underneath, toward the forepart thereof, over against the other coupling thereof, above the curious girdle of the ephod.

Exodus 28:30 And it'd be great if you could put in the breastplate of judgment the Urim and the Thummim; and they shall be upon Aaron's heart, when he goeth in before the LORD: and Aaron shall bear the judgment of the children of Israel upon his heart before the LORD continually.

Exodus 28:31 And it'd be great if you could make the robe of the ephod all of blue.

Exodus 28:33 And beneath upon the hem of it it'd be great if you could make pomegranates of blue, and of purple, and of scarlet, round about the hem thereof; and bells of gold between them round about:

Exodus 28:36 And it'd be great if you could make a plate of pure gold, and grave upon it, like the engravings of a signet, HOLINESS TO THE LORD.

Exodus 28:37 And it'd be great if you could put it on a blue lace, that it may be upon the mitre; upon the forefront of the mitre it shall be.

Exodus 28:39 And it'd be great if you could embroider the coat of fine linen, and it'd be great if you could make the mitre of fine linen, and it'd be great if you could make the girdle of needlework.

Exodus 28:40 And for Aaron's sons it'd be great if you could make coats, and it'd be great if you could make for them girdles, and bonnets shalt thou make for them, for glory and for beauty.

Exodus 28:41 And it'd be great if you could put them upon Aaron thy brother, and his sons with him; and shalt anoint them, and consecrate them, and sanctify them, that they may minister unto me in the priest's office.

Exodus 28:42 And it'd be great if you could make them linen breeches to cover their nakedness; from the loins even unto the thighs they shall reach:

Exodus 29:1 AND this is the thing that it'd be great if you could do unto them to hallow them, to minister unto me in the priest's office: Take one young bullock, and two rams without blemish,

Exodus 29:3 And it'd be great if you could put them into one basket, and bring them in the basket, with the bullock and the two rams.

Exodus 29:4 And Aaron and his sons it'd be great if you could bring unto the door of the tabernacle of the congregation, and shalt wash them with water.

Exodus 29:5 And it'd be great if you could take the garments, and put upon Aaron the coat, and the robe of the ephod, and the ephod, and the breastplate, and gird him with the curious girdle of the ephod:

Exodus 29:6 And it'd be great if you could put the mitre upon his head, and put the holy crown upon the mitre.

Exodus 29:8 And it'd be great if you could bring his sons, and put coats upon them.

Exodus 29:9 And it'd be great if you could gird them with girdles, Aaron and his sons, and put the bonnets on them: and the priest's office shall be theirs for a perpetual statute: and it'd be great if you could consecrate Aaron and his sons.

Exodus 29:10 And it'd be great if you could cause a bullock to be brought before the tabernacle of the congregation: and Aaron and his sons shall put their hands upon the head of the bullock.

Exodus 29:11 And it'd be great if you could kill the bullock before the LORD, by the door of the tabernacle of the congregation.

Exodus 29:12 And it'd be great if you could take of the blood of the bullock, and put it upon the horns of the altar with thy finger, and pour all the blood beside the bottom of the altar.

Exodus 29:13 And it'd be great if you could take all the fat that covereth the inwards, and the caul that is above the liver, and the two kidneys, and the fat that is upon them, and burn them upon the altar.

Exodus 29:15 It'd be great if you could also take one ram; and Aaron and his sons shall put their hands upon the head of the ram.

Exodus 29:16 And it'd be great if you could slay the ram, and it'd be great if you could take his blood, and sprinkle it round about upon the altar.

Exodus 29:17 And it'd be great if you could cut the ram in pieces, and wash the inwards of him, and his legs, and put them unto his pieces, and unto his head.

Exodus 29:18 And it'd be great if you could burn the whole ram upon the altar: it is a burnt offering unto the LORD: it is a sweet savour, an offering made by fire unto the LORD.

Exodus 29:19 And it'd be great if you could take the other ram; and Aaron and his sons shall put their hands upon the head of the ram.

Exodus 29:21 And it'd be great if you could take of the blood that is upon the altar, and of the anointing oil, and sprinkle it upon Aaron, and upon his garments, and upon his sons, and upon the garments of his sons with him: and he shall be hallowed, and his garments, and his sons, and his sons' garments with him.

Exodus 29:22 Also it'd be great if you could take of the ram the fat and the rump, and the fat that covereth the inwards, and the caul above the liver, and the two kidneys, and the fat that is upon them, and the right shoulder; for it is a ram of consecration:

Exodus 29:24 And it'd be great if you could put all in the hands of Aaron, and in the hands of his sons; and shalt wave them for a wave offering before the LORD.

Exodus 29:25 And it'd be great if you could receive them of their hands, and burn them upon the altar for a burnt offering, for a sweet savour before the LORD: it is an offering made by fire unto the LORD.

Exodus 29:26 And it'd be great if you could take the breast of the ram of Aaron's consecration, and wave it for a wave offering before the LORD: and it shall be thy part.

Exodus 29:27 And it'd be great if you could sanctify the breast of the wave offering, and the shoulder of the heave offering, which is waved, and which is heaved up, of the ram of the consecration, even of that which is for Aaron, and of that which is for his sons:

Exodus 29:31 And it'd be great if you could take the ram of the consecration, and seethe his flesh in the holy place.

Exodus 29:34 And if ought of the flesh of the consecrations, or of the bread, remain unto the morning, then it'd be great if you could burn the remainder with fire: it shall not be eaten, because it is holy.

Exodus 29:36 And it'd be great if you could offer every day a bullock for a sin offering for atonement: and it'd be great if you could cleanse the altar, when thou hast made an atonement for it, and it'd be great if you could anoint it, to sanctify it.

Exodus 29:37 Seven days it'd be great if you could make an atonement for the altar, and sanctify it; and it shall be an altar most holy: whatsoever toucheth the altar shall be holy.

Exodus 29:38 Now this is that which it'd be great if you could offer upon the altar; two lambs of the first year day by day continually.

Exodus 29:39 The one lamb it'd be great if you could offer in the morning; and the other lamb it'd be great if you could offer at even:

Exodus 29:41 And the other lamb it'd be great if you could offer at even, and shalt do thereto according to the meat offering of the morning, and according to the drink offering thereof, for a sweet savour, an offering made by fire unto the LORD.

Exodus 30:1 AND it'd be great if you could make an altar to burn incense upon: of shittim wood shalt thou make it.

Exodus 30:3 And it'd be great if you could overlay it with pure gold, the top thereof, and the sides thereof round about, and the horns thereof; and it'd be great if you could make unto it a crown of gold round about.

Exodus 30:5 And it'd be great if you could make the staves of shittim wood, and overlay them with gold.

Exodus 30:6 And it'd be great if you could put it before the vail that is by the ark of the testimony, before the mercy seat that is over the testimony, where I will meet with thee.

Exodus 30:16 And it'd be great if you could take the atonement money of the children of Israel, and shalt appoint it for the service of the tabernacle of the congregation; that it may be a memorial unto the children of Israel before the LORD, to make an atonement for your souls.

Exodus 30:18 It'd be great if you could also make a laver of brass, and his foot also of brass, to wash withal: and it'd be great if you could put it between the tabernacle of the congregation and the altar, and it'd be great if you could put water therein.

Exodus 30:25 And it'd be great if you could make it an oil of holy ointment, an ointment compound after the art of the apothecary: it shall be an holy anointing oil.

Exodus 30:26 And it'd be great if you could anoint the tabernacle of the congregation therewith, and the ark of the testimony,

Exodus 30:29 And it'd be great if you could sanctify them, that they may be most holy: whatsoever toucheth them shall be holy.

Exodus 30:30 And it'd be great if you could anoint Aaron and his sons, and consecrate them, that they may minister unto me in the priest's office.

Exodus 30:31 And it'd be great if you could speak unto the children of Israel, saying, This shall be an holy anointing oil unto me throughout your generations.

Exodus 30:35 And it'd be great if you could make it a perfume, a confection after the art of the apothecary, tempered together, pure and holy:

Exodus 30:36 And it'd be great if you could beat some of it very small, and put of it before the testimony in the tabernacle of the congregation, where I will meet with thee: it shall be unto you most holy.

Exodus 30:37 And as for the perfume which it'd be great if you could make, ye shall not make to yourselves according to the composition thereof: it shall be unto thee holy for the LORD.

Exodus 33:21 And the LORD said, Behold, there is a place by me, and it'd be great if you could stand upon a rock:

Exodus 33:23 And I will take away mine hand, and it'd be great if you could see my back parts: but my face shall not be seen.

Exodus 34:14 For it'd be great if you could worship no other god: for the LORD, whose name is Jealous, is a jealous God:

Exodus 34:17 It'd be great if you could make thee no molten gods.

Exodus 34:18 The feast of unleavened bread shalt thou keep. Seven days it'd be great if you could eat unleavened bread, as I commanded thee, in the time of the month Abib: for in the month Abib thou camest out from Egypt.

Exodus 34:20 But the firstling of an ass it'd be great if you could redeem with a lamb: and if thou redeem him not, then shalt thou break his neck. All the firstborn of thy sons it'd be great if you could redeem. And none shall appear before me empty.

Exodus 34:21 Six days it'd be great if you could work, but on the seventh day it'd be great if you could rest: in earing time and in harvest it'd be great if you could rest.

Exodus 34:22 And it'd be great if you could observe the feast of weeks, of the firstfruits of wheat harvest, and the feast of ingathering at the year's end.

Exodus 34:24 For I will cast out the nations before thee, and enlarge thy borders: neither shall any man desire thy land, when it'd be great if you could go up to appear before the LORD thy God thrice in the year.

Exodus 34:25 It'd be great if you could not offer the blood of my sacrifice with leaven; neither shall the sacrifice of the feast of the passover be left unto the morning.

Exodus 34:26 The first of the firstfruits of thy land it'd be great if you could bring unto the house of the LORD thy God. It'd be great if you could not seethe a kid in his mother's milk.

Exodus 40:3 And it'd be great if you could put therein the ark of the testimony, and cover the ark with the vail.

Exodus 40:4 And it'd be great if you could bring in the table, and set in order the things that are to be set in order upon it; and it'd be great if you could bring in the candlestick, and light the lamps thereof.

Exodus 40:5 And it'd be great if you could set the altar of gold for the incense before the ark of the testimony, and put the hanging of the door to the tabernacle.

Exodus 40:6 And it'd be great if you could set the altar of the burnt offering before the door of the tabernacle of the tent of the congregation.

Exodus 40:7 And it'd be great if you could set the laver between the tent of the congregation and the altar, and shalt put water therein.

Exodus 40:8 And it'd be great if you could set up the court round about, and hang up the hanging at the court gate.

Exodus 40:9 And it'd be great if you could take the anointing oil, and anoint the tabernacle, and all that is therein, and shalt hallow it, and all the vessels thereof: and it shall be holy.

Exodus 40:10 And it'd be great if you could anoint the altar of the burnt offering, and all his vessels, and sanctify the altar: and it shall be an altar most holy.

Exodus 40:11 And it'd be great if you could anoint the laver and his foot, and sanctify it.

Exodus 40:12 And it'd be great if you could bring Aaron and his sons unto the door of the tabernacle of the congregation, and wash them with water.

Exodus 40:13 And it'd be great if you could put upon Aaron the holy garments, and anoint him, and sanctify him; that he may minister unto me in the priest's office.

Exodus 40:14 And it'd be great if you could bring his sons, and clothe them with coats:

Exodus 40:15 And it'd be great if you could anoint them, as thou didst anoint their father, that they may minister unto me in the priest's office: for their anointing shall surely be an everlasting priesthood throughout their generations.

Leviticus 2:6 It'd be great if you could part it in pieces, and pour oil thereon: it is a meat offering.

Leviticus 2:8 And it'd be great if you could bring the meat offering that is made of these things unto the LORD: and when it is presented unto the priest, he shall bring it unto the altar.

Leviticus 2:13 And every oblation of thy meat offering shalt thou season with salt; neither shalt thou suffer the salt of the covenant of thy God to be lacking from thy meat offering: with all thine offerings it'd be great if you could offer salt.

Leviticus 2:14 And if thou offer a meat offering of thy firstfruits unto the LORD, it'd be great if you could offer for the meat offering of thy firstfruits green ears of corn dried by the fire, even corn beaten out of full ears.

Leviticus 2:15 And it'd be great if you could put oil upon it, and lay frankincense thereon: it is a meat offering.

Leviticus 6:21 In a pan it shall be made with oil; and when it is baken, it'd be great if you could bring it in: and the baken pieces of the meat offering shalt thou offer for a sweet savour unto the LORD.

Leviticus 6:27 Whatsoever shall touch the flesh thereof shall be holy: and when there is sprinkled of the blood thereof upon any garment, it'd be great if you could wash that whereon it was sprinkled in the holy place.

Leviticus 9:3 And unto the children of Israel it'd be great if you could speak, saying, Take ye a kid of the goats for a sin offering; and a calf and a lamb, both of the first year, without blemish, for a burnt offering;

Leviticus 13:55 And the priest shall look on the plague, after that it is washed: and, behold, if the plague have not changed his colour, and the plague be not spread; it is unclean; it'd be great if you could burn it in the fire; it is fret inward, whether it be bare within or without.

Leviticus 13:57 And if it appear still in the garment, either in the warp, or in the woof, or in any thing of skin; it is a spreading plague: it'd be great if you could burn that wherein the plague is with fire.

Leviticus 13:58 And the garment, either warp, or woof, or whatsoever thing of skin it be, which it'd be great if you could wash, if the plague be departed from them, then it shall be washed the second time, and shall be clean.

Leviticus 17:8 And it'd be great if you could say unto them, Whatsoever man there be of the house of Israel, or of the strangers which sojourn among you, that offereth a burnt offering or sacrifice,

Leviticus 18:7 The nakedness of thy father, or the nakedness of thy mother, shalt thou not uncover: she is thy mother; it'd be great if you could not uncover her nakedness.

Leviticus 18:9 The nakedness of thy sister, the daughter of thy father, or daughter of thy mother, whether she be born at home, or born abroad, even their nakedness it'd be great if you could not uncover.

Leviticus 18:10 The nakedness of thy son's daughter, or of thy daughter's daughter, even their nakedness it'd be great if you could not uncover: for theirs is thine own nakedness.

Leviticus 18:11 The nakedness of thy father's wife's daughter, begotten of thy father, she is thy sister, it'd be great if you could not uncover her nakedness.

Leviticus 18:12 It'd be great if you could not uncover the nakedness of thy father's sister: she is thy father's near kinswoman.

Leviticus 18:13 It'd be great if you could not uncover the nakedness of thy mother's sister: for she is thy mother's near kinswoman.

Leviticus 18:14 It'd be great if you could not uncover the nakedness of thy father's brother, it'd be great if you could not approach to his wife: she is thine aunt.

Leviticus 18:15 It'd be great if you could not uncover the nakedness of thy daughter in law: she is thy son's wife; it'd be great if you could not uncover her nakedness.

Leviticus 18:16 It'd be great if you could not uncover the nakedness of thy brother's wife: it is thy brother's nakedness.

Leviticus 18:17 It'd be great if you could not uncover the nakedness of a woman and her daughter, neither shalt thou take her son's daughter, or her daughter's daughter, to uncover her nakedness; for they are her near kinswomen: it is wickedness.

Leviticus 18:19 Also it'd be great if you could not approach unto a woman to uncover her nakedness, as long as she is put apart for her uncleanness.

Leviticus 18:20 Moreover it'd be great if you could not lie carnally with thy neighbour's wife, to defile thyself with her.

Leviticus 18:21 And it'd be great if you could not let any of thy seed pass through the fire to Molech, neither shalt thou profane the name of thy God: I am the LORD.

Leviticus 18:22 It'd be great if you could not lie with mankind, as with womankind: it is abomination.

Leviticus 19:9 And when ye reap the harvest of your land, it'd be great if you could not wholly reap the corners of thy field, neither shalt thou gather the gleanings of thy harvest.

Leviticus 19:10 And it'd be great if you could not glean thy vineyard, neither shalt thou gather every grape of thy vineyard; it'd be great if you could leave them for the poor and stranger: I am the LORD your God.

Leviticus 19:13 It'd be great if you could not defraud thy neighbour, neither rob him: the wages of him that is hired shall not abide with thee all night until the morning.

Leviticus 19:14 It'd be great if you could not curse the deaf, nor put a stumblingblock before the blind, but shalt fear thy God: I am the LORD.

Leviticus 19:15 Ye shall do no unrighteousness in judgment: it'd be great if you could not respect the person of the poor, nor honour the person of the mighty: but in righteousness shalt thou judge thy neighbour.

Leviticus 19:16 It'd be great if you could not go up and down as a talebearer among thy people: neither shalt thou stand against the blood of thy neighbour: I am the LORD.

Leviticus 19:17 It'd be great if you could not hate thy brother in thine heart: it'd be great if you could in any wise rebuke thy neighbour, and not suffer sin upon him.

Leviticus 19:18 It'd be great if you could not avenge, nor bear any grudge against the children of thy people, but it'd be great if you could love thy neighbour as thyself: I am the LORD.

Leviticus 19:19 Ye shall keep my statutes. It'd be great if you could not let thy cattle gender with a diverse kind: it'd be great if you could not sow thy field with mingled seed: neither shall a garment mingled of linen and woollen come upon thee.

Leviticus 19:32 It'd be great if you could rise up before the hoary head, and honour the face of the old man, and fear thy God: I am the LORD.

Leviticus 19:34 But the stranger that dwelleth with you shall be unto you as one born among you, and it'd be great if you could love him as thyself; for ye were strangers in the land of Egypt: I am the LORD your God.

Leviticus 20:2 Again, it'd be great if you could say to the children of Israel, Whosoever he be of the children of Israel, or of the strangers that sojourn in Israel, that giveth any of his seed unto Molech; he shall surely be put to death: the people of the land shall stone him with stones.

Leviticus 20:16 And if a woman approach unto any beast, and lie down thereto, it'd be great if you could kill the woman, and the beast: they shall surely be put to death; their blood shall be upon them.

Leviticus 20:19 And it'd be great if you could not uncover the nakedness of thy mother's sister, nor of thy father's sister: for he uncovereth his near kin: they shall bear their iniquity.

Leviticus 21:8 It'd be great if you could sanctify him therefore; for he offereth the bread of thy God: he shall be holy unto thee: for I the LORD, which sanctify you, am holy.

Leviticus 23:22 And when ye reap the harvest of your land, it'd be great if you could not make clean riddance of the corners of thy field when thou reapest, neither shalt thou gather any gleaning of thy harvest: it'd be great if you could leave them unto the poor, and to the stranger: I am the LORD your God.

Leviticus 24:5 And it'd be great if you could take fine flour, and bake twelve cakes thereof: two tenth deals shall be in one cake.

Leviticus 24:6 And it'd be great if you could set them in two rows, six on a row, upon the pure table before the LORD.

Leviticus 24:7 And it'd be great if you could put pure frankincense upon each row, that it may be on the bread for a memorial, even an offering made by fire unto the LORD.

Leviticus 24:15 And it'd be great if you could speak unto the children of Israel, saying, Whosoever curseth his God shall bear his sin.

Leviticus 25:3 Six years it'd be great if you could sow thy field, and six years it'd be great if you could prune thy vineyard, and gather in the fruit thereof;

Leviticus 25:4 But in the seventh year shall be a sabbath of rest unto the land, a sabbath for the LORD: it'd be great if you could neither sow thy field, nor prune thy vineyard.

Leviticus 25:5 That which groweth of its own accord of thy harvest it'd be great if you could not reap, neither gather the grapes of thy vine undressed: for it is a year of rest unto the land.

Leviticus 25:8 And it'd be great if you could number seven sabbaths of years unto thee, seven times seven years; and the space of the seven sabbaths of years shall be unto thee forty and nine years.

Leviticus 25:15 According to the number of years after the jubile it'd be great if you could buy of thy neighbour, and according unto the number of years of the fruits he shall sell unto thee:

Leviticus 25:16 According to the multitude of years it'd be great if you could increase the price thereof, and according to the fewness of years it'd be great if you could diminish the price of it: for according to the number of the years of the fruits doth he sell unto thee.

Leviticus 25:17 Ye shall not therefore oppress one another; but it'd be great if you could fear thy God: for I am the LORD your God.

Leviticus 25:35 And if thy brother be waxen poor, and fallen in decay with thee; then it'd be great if you could relieve him: yea, though he be a stranger, or a sojourner; that he may live with thee.

Leviticus 25:37 It'd be great if you could not give him thy money upon usury, nor lend him thy victuals for increase.

Leviticus 25:39 And if thy brother that dwelleth by thee be waxen poor, and be sold unto thee; it'd be great if you could not compel him to serve as a bondservant:

Leviticus 25:43 It'd be great if you could not rule over him with rigour; but shalt fear thy God.

Leviticus 25:44 Both thy bondmen, and thy bondmaids, which it'd be great if you could have, shall be of the heathen that are round about you; of them shall ye buy bondmen and bondmaids.

Numbers 1:49 Only it'd be great if you could not number the tribe of Levi, neither take the sum of them among the children of Israel:

Numbers 1:50 But it'd be great if you could appoint the Levites over the tabernacle of testimony, and over all the vessels thereof, and over all things that belong to it: they shall bear the tabernacle, and all the vessels thereof; and they shall minister unto it, and shall encamp round about the tabernacle.

Numbers 3:9 And it'd be great if you could give the Levites unto Aaron and to his sons: they are wholly given unto him out of the children of Israel.

Numbers 3:10 And it'd be great if you could appoint Aaron and his sons, and they shall wait on their priest's office: and the stranger that cometh nigh shall be put to death.

Numbers 3:41 And it'd be great if you could take the Levites for me (I am the LORD) instead of all the firstborn among the children of Israel; and the cattle of the Levites instead of all the firstlings among the cattle of the children of Israel.

Numbers 3:47 It'd be great if you could even take five shekels apiece by the poll, after the shekel of the sanctuary shalt thou take them: (the shekel is twenty gerahs:)

Numbers 3:48 And it'd be great if you could give the money, wherewith the odd number of them is to be redeemed, unto Aaron and to his sons.

Numbers 4:29 As for the sons of Merari, it'd be great if you could number them after their families, by the house of their fathers;

Numbers 7:5 Take it of them, that they may be to do the service of the tabernacle of the congregation; and it'd be great if you could give them unto the Levites, to every man according to his service.

Numbers 8:9 And it'd be great if you could bring the Levites before the tabernacle of the congregation: and it'd be great if you could gather the whole assembly of the children of Israel together:

Numbers 8:10 And it'd be great if you could bring the Levites before the LORD: and the children of Israel shall put their hands upon the Levites:

Numbers 8:12 And the Levites shall lay their hands upon the heads of the bullocks: and it'd be great if you could offer the one for a sin offering, and the other for a burnt offering, unto the LORD, to make an atonement for the Levites.

Numbers 8:13 And it'd be great if you could set the Levites before Aaron, and before his sons, and offer them for an offering unto the LORD.

Numbers 8:15 And after that shall the Levites go in to do the service of the tabernacle of the congregation: and it'd be great if you could cleanse them, and offer them for an offering.

Numbers 11:23 And the LORD said unto Moses, Is the LORD's hand waxed short? it'd be great if you could see now whether my word shall come to pass unto thee or not.

Numbers 14:15 Now if it'd be great if you could kill all this people as one man, then the nations which have heard the fame of thee will speak, saying,

Numbers 15:6 Or for a ram, it'd be great if you could prepare for a meat offering two tenth deals of flour mingled with the third part of an hin of oil.

Numbers 15:7 And for a drink offering it'd be great if you could offer the third part of an hin of wine, for a sweet savour unto the LORD.

Numbers 15:10 And it'd be great if you could bring for a drink offering half an hin of wine, for an offering made by fire, of a sweet savour unto the LORD.

Numbers 17:3 And it'd be great if you could write Aaron's name upon the rod of Levi: for one rod shall be for the head of the house of their fathers.

Numbers 17:4 And it'd be great if you could lay them up in the tabernacle of the congregation before the testimony, where I will meet with you.

Numbers 17:10 And the LORD said unto Moses, Bring Aaron's rod again before the testimony, to be kept for a token against the rebels; and it'd be great if you could quite take away their murmurings from me, that they die not.

Numbers 18:17 But the firstling of a cow, or the firstling of a sheep, or the firstling of a goat, it'd be great if you could not redeem; they are holy: it'd be great if you could sprinkle their blood upon the altar, and shalt burn their fat for an offering made by fire, for a sweet savour unto the LORD.

Numbers 18:20 And the LORD spake unto Aaron, it'd be great if you could have no inheritance in their land, neither shalt thou have any part among them: I am thy part and thine inheritance among the children of Israel.

Numbers 18:30 Therefore it'd be great if you could say unto them, When ye have heaved the best thereof from it, then it shall be counted unto the Levites as the increase of the threshingfloor, and as the increase of the winepress.

Numbers 20:8 Take the rod, and gather thou the assembly together, thou, and Aaron thy brother, and speak ye unto the rock before their eyes; and it shall give forth his water, and it'd be great if you could bring forth to them water out of the rock: so it'd be great if you could give the congregation and their beasts drink.

Numbers 20:18 And Edom said unto him, it'd be great if you could not pass by me, lest I come out against thee with the sword.

Numbers 20:20 And he said, it'd be great if you could not go through. And Edom came out against him with much people, and with a strong hand.

Numbers 21:34 And the LORD said unto Moses, Fear him not: for I have delivered him into thy hand, and all his people, and his land; and it'd be great if you could do to him as thou didst unto Sihon king of the Amorites, which dwelt at Heshbon.

Numbers 22:12 And God said unto Balaam, it'd be great if you could not go with them; it'd be great if you could not curse the people: for they are blessed.

Numbers 22:35 And the angel of the LORD said unto Balaam, Go with the men: but only the word that I shall speak unto thee, that it'd be great if you could speak. So Balaam went with the princes of Balak.

Numbers 23:5 And the LORD put a word in Balaam's mouth, and said, Return unto Balak, and thus it'd be great if you could speak.

Numbers 23:13 And Balak said unto him, Come, I pray thee, with me unto another place, from whence thou mayest see them: it'd be great if you could see but the utmost part of them, and shalt not see them all: and curse me them from thence.

Numbers 26:54 To many it'd be great if you could give the more inheritance, and to few it'd be great if you could give the less inheritance: to every one shall his inheritance be given according to those that were numbered of him.

Numbers 27:7 The daughters of Zelophehad speak right: it'd be great if you could surely give them a possession of an inheritance among their father's brethren; and it'd be great if you could cause the inheritance of their father to pass unto them.

Numbers 27:8 And it'd be great if you could speak unto the children of Israel, saying, If a man die, and have no son, then ye shall cause his inheritance to pass unto his daughter.

Numbers 27:20 And it'd be great if you could put some of thine honour upon him, that all the congregation of the children of Israel may be obedient.

Numbers 28:3 And it'd be great if you could say unto them, This is the offering made by fire which ye shall offer unto the LORD; two lambs of the first year without spot day by day, for a continual burnt offering.

Numbers 28:8 And the other lamb shalt thou offer at even: as the meat offering of the morning, and as the drink offering thereof, it'd be great if you could offer it, a sacrifice made by fire, of a sweet savour unto the LORD.

Numbers 31:30 And of the children of Israel's half, it'd be great if you could take one portion of fifty, of the persons, of the beeves, of the asses, and of the flocks, of all manner of beasts, and give them unto the Levites, which keep the charge of the tabernacle of the LORD.

Deuteronomy 2:28 It'd be great if you could sell me meat for money, that I may eat; and give me water for money, that I may drink: only I will pass through on my feet;

Deuteronomy 3:2 And the LORD said unto me, Fear him not: for I will deliver him, and all his people, and his land, into thy hand; and it'd be great if you could do unto him as thou didst unto Sihon king of the Amorites, which dwelt at Heshbon.

Deuteronomy 3:27 Get thee up into the top of Pisgah, and lift up thine eyes westward, and northward, and southward, and eastward, and behold it with thine eyes: for it'd be great if you could not go over this Jordan.

Deuteronomy 3:28 But charge Joshua, and encourage him, and strengthen him: for he shall go over before this people, and he shall cause them to inherit the land which it'd be great if you could see.

Deuteronomy 4:25 When it'd be great if you could beget children, and children's children, and ye shall have remained long in the land, and shall corrupt yourselves, and make a graven image, or the likeness of any thing, and shall do evil in the sight of the LORD thy God, to provoke him to anger:

Deuteronomy 4:29 But if from thence it'd be great if you could seek the LORD thy God, it'd be great if you could find him, if thou seek him with all thy heart and with all thy soul.

Deuteronomy 4:40 It'd be great if you could keep therefore his statutes, and his commandments, which I command thee this day, that it may go well with thee, and with thy children after thee, and that thou mayest prolong thy days upon the earth, which the LORD thy God giveth thee, for ever.

Deuteronomy 5:7 It'd be great if you could have none other gods before me.

Deuteronomy 5:8 It'd be great if you could not make thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the waters beneath the earth:

Deuteronomy 5:9 It'd be great if you could not bow down thyself unto them, nor serve them: for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me,

Deuteronomy 5:11 It'd be great if you could not take the name of the LORD thy God in vain: for the LORD will not hold him guiltless that taketh his name in vain.

Deuteronomy 5:13 Six days it'd be great if you could labour, and do all thy work:

Deuteronomy 5:14 But the seventh day is the sabbath of the LORD thy God: in it it'd be great if you could not do any work, thou, nor thy son, nor thy daughter, nor thy manservant, nor thy maidservant, nor thine ox, nor thine ass, nor any of thy cattle, nor thy stranger that is within thy gates; that thy manservant and thy maidservant may rest as well as thou.

Deuteronomy 5:17 It'd be great if you could not kill.

Deuteronomy 5:31 But as for thee, stand thou here by me, and I will speak unto thee all the commandments, and the statutes, and the judgments, which it'd be great if you could teach them, that they may do them in the land which I give them to possess it.

Deuteronomy 6:5 And it'd be great if you could love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.

Deuteronomy 6:7 And it'd be great if you could teach them diligently unto thy children, and shalt talk of them when thou sittest in thine house, and when thou walkest by the way, and when thou liest down, and when thou risest up.

Deuteronomy 6:8 And it'd be great if you could bind them for a sign upon thine hand, and they shall be as frontlets between thine eyes.

Deuteronomy 6:9 And it'd be great if you could write them upon the posts of thy house, and on thy gates.

Deuteronomy 6:11 And houses full of all good things, which thou filledst not, and wells digged, which thou diggedst not, vineyards and olive trees, which thou plantedst not; when it'd be great if you could have eaten and be full;

Deuteronomy 6:13 It'd be great if you could fear the LORD thy God, and serve him, and shalt swear by his name.

Deuteronomy 6:18 And it'd be great if you could do that which is right and good in the sight of the LORD: that it may be well with thee, and that thou mayest go in and possess the good land which the LORD sware unto thy fathers,

Deuteronomy 6:21 Then it'd be great if you could say unto thy son, We were Pharaoh's bondmen in Egypt; and the LORD brought us out of Egypt with a mighty hand:

Deuteronomy 7:2 And when the LORD thy God shall deliver them before thee; it'd be great if you could smite them, and utterly destroy them; it'd be great if you could make no covenant with them, nor shew mercy unto them:

Deuteronomy 7:3 Neither shalt thou make marriages with them; thy daughter it'd be great if you could not give unto his son, nor his daughter shalt thou take unto thy son.

Deuteronomy 7:11 It'd be great if you could therefore keep the commandments, and the statutes, and the judgments, which I command thee this day, to do them.

Deuteronomy 7:14 It'd be great if you could be blessed above all people: there shall not be male or female barren among you, or among your cattle.

Deuteronomy 7:16 And it'd be great if you could consume all the people which the LORD thy God shall deliver thee; thine eye shall have no pity upon them: neither shalt thou serve their gods; for that will be a snare unto thee.

Deuteronomy 7:17 If it'd be great if you could say in thine heart, These nations are more than I; how can I dispossess them?

Deuteronomy 7:18 It'd be great if you could not be afraid of them: but shalt well remember what the LORD thy God did unto Pharaoh, and unto all Egypt;

Deuteronomy 7:21 It'd be great if you could not be affrighted at them: for the LORD thy God is among you, a mighty God and terrible.

Deuteronomy 7:24 And he shall deliver their kings into thine hand, and it'd be great if you could destroy their name from under heaven: there shall no man be able to stand before thee, until thou have destroyed them.

Deuteronomy 7:25 The graven images of their gods shall ye burn with fire: it'd be great if you could not desire the silver or gold that is on them, nor take it unto thee, lest thou be snared therein: for it is an abomination to the LORD thy God.

Deuteronomy 7:26 Neither shalt thou bring an abomination into thine house, lest thou be a cursed thing like it: but it'd be great if you could utterly detest it, and it'd be great if you could utterly abhor it; for it is a cursed thing.

Deuteronomy 8:2 And it'd be great if you could remember all the way which the LORD thy God led thee these forty years in the wilderness, to humble thee, and to prove thee, to know what was in thine heart, whether thou wouldest keep his commandments, or no.

Deuteronomy 8:5 It'd be great if you could also consider in thine heart, that, as a man chasteneth his son, so the LORD thy God chasteneth thee.

Deuteronomy 8:6 Therefore it'd be great if you could keep the commandments of the LORD thy God, to walk in his ways, and to fear him.

Deuteronomy 8:9 A land wherein it'd be great if you could eat bread without scarceness, it'd be great if you could not lack any thing in it; a land whose stones are iron, and out of whose hills thou mayest dig brass.

Deuteronomy 8:10 When thou hast eaten and art full, then it'd be great if you could bless the LORD thy God for the good land which he hath given thee.

Deuteronomy 8:18 But it'd be great if you could remember the LORD thy God: for it is he that giveth thee power to get wealth, that he may establish his covenant which he sware unto thy fathers, as it is this day.

Deuteronomy 10:2 And I will write on the tables the words that were in the first tables which thou brakest, and it'd be great if you could put them in the ark.

Deuteronomy 10:20 It'd be great if you could fear the LORD thy God; him shalt thou serve, and to him shalt thou cleave, and swear by his name.

Deuteronomy 11:1 THEREFORE it'd be great if you could love the LORD thy God, and keep his charge, and his statutes, and his judgments, and his commandments, alway.

Deuteronomy 11:20 And it'd be great if you could write them upon the door posts of thine house, and upon thy gates:

Deuteronomy 11:29 And it shall come to pass, when the LORD thy God hath brought thee in unto the land whither thou goest to possess it, that it'd be great if you could put the blessing upon mount Gerizim, and the curse upon mount Ebal.

Deuteronomy 12:5 But unto the place which the LORD your God shall choose out of all your tribes to put his name there, even unto his habitation shall ye seek, and thither it'd be great if you could come:

Deuteronomy 12:14 But in the place which the LORD shall choose in one of thy tribes, there it'd be great if you could offer thy burnt offerings, and there it'd be great if you could do all that I command thee.

Deuteronomy 12:18 But thou must eat them before the LORD thy God in the place which the LORD thy God shall choose, thou, and thy son, and thy daughter, and thy manservant, and thy maidservant, and the Levite that is within thy gates: and it'd be great if you could rejoice before the LORD thy God in all that thou puttest thine hands unto.

Deuteronomy 12:20 When the LORD thy God shall enlarge thy border, as he hath promised thee, and it'd be great if you could say, I will eat flesh, because thy soul longeth to eat flesh; thou mayest eat flesh, whatsoever thy soul lusteth after.

Deuteronomy 12:21 If the place which the LORD thy God hath chosen to put his name there be too far from thee, then it'd be great if you could kill of thy herd and of thy flock, which the LORD hath given thee, as I have commanded thee, and it'd be great if you could eat in thy gates whatsoever thy soul lusteth after.

Deuteronomy 12:22 Even as the roebuck and the hart is eaten, so it'd be great if you could eat them: the unclean and the clean shall eat of them alike.

Deuteronomy 12:24 It'd be great if you could not eat it; it'd be great if you could pour it upon the earth as water.

Deuteronomy 12:25 It'd be great if you could not eat it; that it may go well with thee, and with thy children after thee, when it'd be great if you could do that which is right in the sight of the LORD.

Deuteronomy 12:26 Only thy holy things which thou hast, and thy vows, it'd be great if you could take, and go unto the place which the LORD shall choose:

Deuteronomy 12:27 And it'd be great if you could offer thy burnt offerings, the flesh and the blood, upon the altar of the LORD thy God: and the blood of thy sacrifices shall be poured out upon the altar of the LORD thy God, and it'd be great if you could eat the flesh.

Deuteronomy 12:31 It'd be great if you could not do so unto the LORD thy God: for every abomination to the LORD, which he hateth, have they done unto their gods; for even their sons and their daughters they have burnt in the fire to their gods.

Deuteronomy 12:32 What thing soever I command you, observe to do it: it'd be great if you could not add thereto, nor diminish from it.

Deuteronomy 13:3 It'd be great if you could not hearken unto the words of that prophet, or that dreamer of dreams: for the LORD your God proveth you, to know whether ye love the LORD your God with all your heart and with all your soul.

Deuteronomy 13:8 It'd be great if you could not consent unto him, nor hearken unto him; neither shall thine eye pity him, neither shalt thou spare, neither shalt thou conceal him:

Deuteronomy 13:9 But it'd be great if you could surely kill him; thine hand shall be first upon him to put him to death, and afterwards the hand of all the people.

Deuteronomy 13:10 And it'd be great if you could stone him with stones, that he die; because he hath sought to thrust thee away from the LORD thy God, which brought thee out of the land of Egypt, from the house of bondage.

Deuteronomy 13:12 If it'd be great if you could hear say in one of thy cities, which the LORD thy God hath given thee to dwell there, saying,

Deuteronomy 13:15 It'd be great if you could surely smite the inhabitants of that city with the edge of the sword, destroying it utterly, and all that is therein, and the cattle thereof, with the edge of the sword.

Deuteronomy 13:16 And it'd be great if you could gather all the spoil of it into the midst of the street thereof, and shalt burn with fire the city, and all the spoil thereof every whit, for the LORD thy God: and it shall be an heap for ever; it shall not be built again.

Deuteronomy 13:18 When it'd be great if you could hearken to the voice of the LORD thy God, to keep all his commandments which I command thee this day, to do that which is right in the eyes of the LORD thy God.

Deuteronomy 14:3 It'd be great if you could not eat any abominable thing.

Deuteronomy 14:21 Ye shall not eat of any thing that dieth of itself: it'd be great if you could give it unto the stranger that is in thy gates, that he may eat it; or thou mayest sell it unto an alien: for thou art an holy people unto the LORD thy God. It'd be great if you could not seethe a kid in his mother's milk.

Deuteronomy 14:22 It'd be great if you could truly tithe all the increase of thy seed, that the field bringeth forth year by year.

Deuteronomy 14:23 And it'd be great if you could eat before the LORD thy God, in the place which he shall choose to place his name there, the tithe of thy corn, of thy wine, and of thine oil, and the firstlings of thy herds and of thy flocks; that thou mayest learn to fear the LORD thy God always.

Deuteronomy 14:26 And it'd be great if you could bestow that money for whatsoever thy soul lusteth after, for oxen, or for sheep, or for wine, or for strong drink, or for whatsoever thy soul desireth: and it'd be great if you could eat there before the LORD thy God, and it'd be great if you could rejoice, thou, and thine household,

Deuteronomy 14:27 And the Levite that is within thy gates; it'd be great if you could not forsake him; for he hath no part nor inheritance with thee.

Deuteronomy 14:28 At the end of three years it'd be great if you could bring forth all the tithe of thine increase the same year, and shalt lay it up within thy gates:

Deuteronomy 15:1 AT the end of every seven years it'd be great if you could make a release.

Deuteronomy 15:6 For the LORD thy God blesseth thee, as he promised thee: and it'd be great if you could lend unto many nations, but it'd be great if you could not borrow; and it'd be great if you could reign over many nations, but they shall not reign over thee.

Deuteronomy 15:7 If there be among you a poor man of one of thy brethren within any of thy gates in thy land which the LORD thy God giveth thee, it'd be great if you could not harden thine heart, nor shut thine hand from thy poor brother:

Deuteronomy 15:8 But it'd be great if you could open thine hand wide unto him, and shalt surely lend him sufficient for his need, in that which he wanteth.

Deuteronomy 15:10 It'd be great if you could surely give him, and thine heart shall not be grieved when thou givest unto him: because that for this thing the LORD thy God shall bless thee in all thy works, and in all that thou puttest thine hand unto.

Deuteronomy 15:11 For the poor shall never cease out of the land: therefore I command thee, saying, it'd be great if you could open thine hand wide unto thy brother, to thy poor, and to thy needy, in thy land.

Deuteronomy 15:12 And if thy brother, an Hebrew man, or an Hebrew woman, be sold unto thee, and serve thee six years; then in the seventh year it'd be great if you could let him go free from thee.

Deuteronomy 15:13 And when thou sendest him out free from thee, it'd be great if you could not let him go away empty:

Deuteronomy 15:14 It'd be great if you could furnish him liberally out of thy flock, and out of thy floor, and out of thy winepress: of that wherewith the LORD thy God hath blessed thee it'd be great if you could give unto him.

Deuteronomy 15:15 And it'd be great if you could remember that thou wast a bondman in the land of Egypt, and the LORD thy God redeemed thee: therefore I command thee this thing to day.

Deuteronomy 15:17 Then it'd be great if you could take an aul, and thrust it through his ear unto the door, and he shall be thy servant for ever. And also unto thy maidservant it'd be great if you could do likewise.

Deuteronomy 15:19 All the firstling males that come of thy herd and of thy flock it'd be great if you could sanctify unto the LORD thy God: it'd be great if you could do no work with the firstling of thy bullock, nor shear the firstling of thy sheep.

Deuteronomy 15:20 It'd be great if you could eat it before the LORD thy God year by year in the place which the LORD shall choose, thou and thy household.

Deuteronomy 15:21 And if there be any blemish therein, as if it be lame, or blind, or have any ill blemish, it'd be great if you could not sacrifice it unto the LORD thy God.

Deuteronomy 15:22 It'd be great if you could eat it within thy gates: the unclean and the clean person shall eat it alike, as the roebuck, and as the hart.

Deuteronomy 15:23 Only it'd be great if you could not eat the blood thereof; it'd be great if you could pour it upon the ground as water.

Deuteronomy 16:2 It'd be great if you could therefore sacrifice the passover unto the LORD thy God, of the flock and the herd, in the place which the LORD shall choose to place his name there.

Deuteronomy 16:3 It'd be great if you could eat no leavened bread with it; seven days shalt thou eat unleavened bread therewith, even the bread of affliction; for thou camest forth out of the land of Egypt in haste: that thou mayest remember the day when thou camest forth out of the land of Egypt all the days of thy life.

Deuteronomy 16:6 But at the place which the LORD thy God shall choose to place his name in, there it'd be great if you could sacrifice the passover at even, at the going down of the sun, at the season that thou camest forth out of Egypt.

Deuteronomy 16:7 And it'd be great if you could roast and eat it in the place which the LORD thy God shall choose: and it'd be great if you could turn in the morning, and go unto thy tents.

Deuteronomy 16:8 Six days it'd be great if you could eat unleavened bread: and on the seventh day shall be a solemn assembly to the LORD thy God: it'd be great if you could do no work therein.

Deuteronomy 16:10 And it'd be great if you could keep the feast of weeks unto the LORD thy God with a tribute of a freewill offering of thine hand, which it'd be great if you could give unto the LORD thy God, according as the LORD thy God hath blessed thee:

Deuteronomy 16:11 And it'd be great if you could rejoice before the LORD thy God, thou, and thy son, and thy daughter, and thy manservant, and thy maidservant, and the Levite that is within thy gates, and the stranger, and the fatherless, and the widow, that are among you, in the place which the LORD thy God hath chosen to place his name there.

Deuteronomy 16:12 And it'd be great if you could remember that thou wast a bondman in Egypt: and it'd be great if you could observe and do these statutes.

Deuteronomy 16:13 It'd be great if you could observe the feast of tabernacles seven days, after that thou hast gathered in thy corn and thy wine:

Deuteronomy 16:14 And it'd be great if you could rejoice in thy feast, thou, and thy son, and thy daughter, and thy manservant, and thy maidservant, and the Levite, the stranger, and the fatherless, and the widow, that are within thy gates.

Deuteronomy 16:15 Seven days shalt thou keep a solemn feast unto the LORD thy God in the place which the LORD shall choose: because the LORD thy God shall bless thee in all thine increase, and in all the works of thine hands, therefore it'd be great if you could surely rejoice.

Deuteronomy 16:19 It'd be great if you could not wrest judgment; it'd be great if you could not respect persons, neither take a gift: for a gift doth blind the eyes of the wise, and pervert the words of the righteous.

Deuteronomy 16:21 It'd be great if you could not plant thee a grove of any trees near unto the altar of the LORD thy God, which it'd be great if you could make thee.

Deuteronomy 17:1 It'd be great if you could not sacrifice unto the LORD thy God any bullock, or sheep, wherein is blemish, or any evilfavouredness: for that is an abomination unto the LORD thy God.

Deuteronomy 17:7 The hands of the witnesses shall be first upon him to put him to death, and afterward the hands of all the people. So it'd be great if you could put the evil away from among you.

Deuteronomy 17:9 And it'd be great if you could come unto the priests the Levites, and unto the judge that shall be in those days, and inquire; and they shall shew thee the sentence of judgment:

Deuteronomy 17:10 And it'd be great if you could do according to the sentence, which they of that place which the LORD shall choose shall shew thee; and it'd be great if you could observe to do according to all that they inform thee;

Deuteronomy 17:11 According to the sentence of the law which they shall teach thee, and according to the judgment which they shall tell thee, it'd be great if you could do: it'd be great if you could not decline from the sentence which they shall shew thee, to the right hand, nor to the left.

Deuteronomy 17:12 And the man that will do presumptuously, and will not hearken unto the priest that standeth to minister there before the LORD thy God, or unto the judge, even that man shall die: and it'd be great if you could put away the evil from Israel.

Deuteronomy 17:15 It'd be great if you could in any wise set him king over thee, whom the LORD thy God shall choose: one from among thy brethren shalt thou set king over thee: thou mayest not set a stranger over thee, which is not thy brother.

Deuteronomy 18:9 When thou art come into the land which the LORD thy God giveth thee, it'd be great if you could not learn to do after the abominations of those nations.

Deuteronomy 18:13 It'd be great if you could be perfect with the LORD thy God.

Deuteronomy 18:14 For these nations, which it'd be great if you could possess, hearkened unto observers of times, and unto diviners: but as for thee, the LORD thy God hath not suffered thee so to do.

Deuteronomy 18:22 When a prophet speaketh in the name of the LORD, if the thing follow not, nor come to pass, that is the thing which the LORD hath not spoken, but the prophet hath spoken it presumptuously: it'd be great if you could not be afraid of him.

Deuteronomy 19:2 It'd be great if you could separate three cities for thee in the midst of thy land, which the LORD thy God giveth thee to possess it.

Deuteronomy 19:3 It'd be great if you could prepare thee a way, and divide the coasts of thy land, which the LORD thy God giveth thee to inherit, into three parts, that every slayer may flee thither.

Deuteronomy 19:7 Wherefore I command thee, saying, it'd be great if you could separate three cities for thee.

Deuteronomy 19:9 If it'd be great if you could keep all these commandments to do them, which I command thee this day, to love the LORD thy God, and to walk ever in his ways; then shalt thou add three cities more for thee, beside these three:

Deuteronomy 19:13 Thine eye shall not pity him, but it'd be great if you could put away the guilt of innocent blood from Israel, that it may go well with thee.

Deuteronomy 19:14 It'd be great if you could not remove thy neighbour's landmark, which they of old time have set in thine inheritance, which it'd be great if you could inherit in the land that the LORD thy God giveth thee to possess it.

Deuteronomy 20:12 And if it will make no peace with thee, but will make war against thee, then it'd be great if you could besiege it:

Deuteronomy 20:13 And when the LORD thy God hath delivered it into thine hands, it'd be great if you could smite every male thereof with the edge of the sword:

Deuteronomy 20:14 But the women, and the little ones, and the cattle, and all that is in the city, even all the spoil thereof, shalt thou take unto thyself; and it'd be great if you could eat the spoil of thine enemies, which the LORD thy God hath given thee.

Deuteronomy 20:16 But of the cities of these people, which the LORD thy God doth give thee for an inheritance, it'd be great if you could save alive nothing that breatheth:

Deuteronomy 20:17 But it'd be great if you could utterly destroy them; namely, the Hittites, and the Amorites, the Canaanites, and the Perizzites, the Hivites, and the Jebusites; as the LORD thy God hath commanded thee:

Deuteronomy 20:19 When it'd be great if you could besiege a city a long time, in making war against it to take it, it'd be great if you could not destroy the trees thereof by forcing an axe against them: for thou mayest eat of them, and it'd be great if you could not cut them down (for the tree of the field is man's life) to employ them in the siege:

Deuteronomy 20:20 Only the trees which thou knowest that they be not trees for meat, it'd be great if you could destroy and cut them down; and it'd be great if you could build bulwarks against the city that maketh war with thee, until it be subdued.

Deuteronomy 21:9 So shalt thou put away the guilt of innocent blood from among you, when it'd be great if you could do that which is right in the sight of the LORD.

Deuteronomy 21:12 Then it'd be great if you could bring her home to thine house; and she shall shave her head, and pare her nails;

Deuteronomy 21:13 And she shall put the raiment of her captivity from off her, and shall remain in thine house, and bewail her father and her mother a full month: and after that it'd be great if you could go in unto her, and be her husband, and she shall be thy wife.

Deuteronomy 21:14 And it shall be, if thou have no delight in her, then it'd be great if you could let her go whither she will; but it'd be great if you could not sell her at all for money, it'd be great if you could not make merchandise of her, because thou hast humbled her.

Deuteronomy 21:23 His body shall not remain all night upon the tree, but it'd be great if you could in any wise bury him that day; (for he that is hanged is accursed of God;) that thy land be not defiled, which the LORD thy God giveth thee for an inheritance.

Deuteronomy 22:1 It'd be great if you could not see thy brother's ox or his sheep go astray, and hide thyself from them: it'd be great if you could in any case bring them again unto thy brother.

Deuteronomy 22:2 And if thy brother be not nigh unto thee, or if thou know him not, then it'd be great if you could bring it unto thine own house, and it shall be with thee until thy brother seek after it, and it'd be great if you could restore it to him again.

Deuteronomy 22:4 It'd be great if you could not see thy brother's ass or his ox fall down by the way, and hide thyself from them: it'd be great if you could surely help him to lift them up again.

Deuteronomy 22:6 If a bird's nest chance to be before thee in the way in any tree, or on the ground, whether they be young ones, or eggs, and the dam sitting upon the young, or upon the eggs, it'd be great if you could not take the dam with the young:

Deuteronomy 22:7 But it'd be great if you could in any wise let the dam go, and take the young to thee; that it may be well with thee, and that thou mayest prolong thy days.

Deuteronomy 22:8 When thou buildest a new house, then it'd be great if you could make a battlement for thy roof, that thou bring not blood upon thine house, if any man fall from thence.

Deuteronomy 22:9 It'd be great if you could not sow thy vineyard with divers seeds: lest the fruit of thy seed which thou hast sown, and the fruit of thy vineyard, be defiled.

Deuteronomy 22:10 It'd be great if you could not plow with an ox and an ass together.

Deuteronomy 22:11 It'd be great if you could not wear a garment of divers sorts, as of woollen and linen together.

Deuteronomy 22:12 It'd be great if you could make thee fringes upon the four quarters of thy vesture, wherewith thou coverest thyself.

Deuteronomy 22:24 Then ye shall bring them both out unto the gate of that city, and ye shall stone them with stones that they die; the damsel, because she cried not, being in the city; and the man, because he hath humbled his neighbour's wife: so it'd be great if you could put away evil from among you.

Deuteronomy 22:26 But unto the damsel it'd be great if you could do nothing; there is in the damsel no sin worthy of death: for as when a man riseth against his neighbour, and slayeth him, even so is this matter:

Deuteronomy 23:6 It'd be great if you could not seek their peace nor their prosperity all thy days for ever.

Deuteronomy 23:7 It'd be great if you could not abhor an Edomite; for he is thy brother: it'd be great if you could not abhor an Egyptian; because thou wast a stranger in his land.

Deuteronomy 23:12 It'd be great if you could have a place also without the camp, whither it'd be great if you could go forth abroad:

Deuteronomy 23:13 And it'd be great if you could have a paddle upon thy weapon; and it shall be, when thou wilt ease thyself abroad, it'd be great if you could dig therewith, and shalt turn back and cover that which cometh from thee:

Deuteronomy 23:15 It'd be great if you could not deliver unto his master the servant which is escaped from his master unto thee:

Deuteronomy 23:16 He shall dwell with thee, even among you, in that place which he shall choose in one of thy gates, where it liketh him best: it'd be great if you could not oppress him.

Deuteronomy 23:18 It'd be great if you could not bring the hire of a whore, or the price of a dog, into the house of the LORD thy God for any vow: for even both these are abomination unto the LORD thy God.

Deuteronomy 23:19 It'd be great if you could not lend upon usury to thy brother; usury of money, usury of victuals, usury of any thing that is lent upon usury:

Deuteronomy 23:20 Unto a stranger thou mayest lend upon usury; but unto thy brother it'd be great if you could not lend upon usury: that the LORD thy God may bless thee in all that thou settest thine hand to in the land whither thou goest to possess it.

Deuteronomy 23:21 When it'd be great if you could vow a vow unto the LORD thy God, it'd be great if you could not slack to pay it: for the LORD thy God will surely require it of thee; and it would be sin in thee.

Deuteronomy 23:22 But if it'd be great if you could forbear to vow, it shall be no sin in thee.

Deuteronomy 23:23 That which is gone out of thy lips it'd be great if you could keep and perform; even a freewill offering, according as thou hast vowed unto the LORD thy God, which thou hast promised with thy mouth.

Deuteronomy 23:24 When thou comest into thy neighbour's vineyard, then thou mayest eat grapes thy fill at thine own pleasure; but it'd be great if you could not put any in thy vessel.

Deuteronomy 23:25 When thou comest into the standing corn of thy neighbour, then thou mayest pluck the ears with thine hand; but it'd be great if you could not move a sickle unto thy neighbour's standing corn.

Deuteronomy 24:4 Her former husband, which sent her away, may not take her again to be his wife, after that she is defiled; for that is abomination before the LORD: and it'd be great if you could not cause the land to sin, which the LORD thy God giveth thee for an inheritance.

Deuteronomy 24:7 If a man be found stealing any of his brethren of the children of Israel, and maketh merchandise of him, or selleth him; then that thief shall die; and it'd be great if you could put evil away from among you.

Deuteronomy 24:10 When thou dost lend thy brother any thing, it'd be great if you could not go into his house to fetch his pledge.

Deuteronomy 24:11 It'd be great if you could stand abroad, and the man to whom thou dost lend shall bring out the pledge abroad unto thee.

Deuteronomy 24:12 And if the man be poor, it'd be great if you could not sleep with his pledge:

Deuteronomy 24:13 In any case it'd be great if you could deliver him the pledge again when the sun goeth down, that he may sleep in his own raiment, and bless thee: and it shall be righteousness unto thee before the LORD thy God.

Deuteronomy 24:14 It'd be great if you could not oppress an hired servant that is poor and needy, whether he be of thy brethren, or of thy strangers that are in thy land within thy gates:

Deuteronomy 24:15 At his day it'd be great if you could give him his hire, neither shall the sun go down upon it; for he is poor, and setteth his heart upon it: lest he cry against thee unto the LORD, and it be sin unto thee.

Deuteronomy 24:17 It'd be great if you could not pervert the judgment of the stranger, nor of the fatherless; nor take a widow's raiment to pledge:

Deuteronomy 24:18 But it'd be great if you could remember that thou wast a bondman in Egypt, and the LORD thy God redeemed thee thence: therefore I command thee to do this thing.

Deuteronomy 24:19 When thou cuttest down thine harvest in thy field, and hast forgot a sheaf in the field, it'd be great if you could not go again to fetch it: it shall be for the stranger, for the fatherless, and for the widow: that the LORD thy God may bless thee in all the work of thine hands.

Deuteronomy 24:20 When thou beatest thine olive tree, it'd be great if you could not go over the boughs again: it shall be for the stranger, for the fatherless, and for the widow.

Deuteronomy 24:21 When thou gatherest the grapes of thy vineyard, it'd be great if you could not glean it afterward: it shall be for the stranger, for the fatherless, and for the widow.

Deuteronomy 24:22 And it'd be great if you could remember that thou wast a bondman in the land of Egypt: therefore I command thee to do this thing.

Deuteronomy 25:4 It'd be great if you could not muzzle the ox when he treadeth out the corn.

Deuteronomy 25:12 Then it'd be great if you could cut off her hand, thine eye shall not pity her.

Deuteronomy 25:13 It'd be great if you could not have in thy bag divers weights, a great and a small.

Deuteronomy 25:14 It'd be great if you could not have in thine house divers measures, a great and a small.

Deuteronomy 25:15 But it'd be great if you could have a perfect and just weight, a perfect and just measure shalt thou have: that thy days may be lengthened in the land which the LORD thy God giveth thee.

Deuteronomy 25:19 Therefore it shall be, when the LORD thy God hath given thee rest from all thine enemies round about, in the land which the LORD thy God giveth thee for an inheritance to possess it, that it'd be great if you could blot out the remembrance of Amalek from under heaven; it'd be great if you could not forget it.

Deuteronomy 26:2 That it'd be great if you could take of the first of all the fruit of the earth, which it'd be great if you could bring of thy land that the LORD thy God giveth thee, and shalt put it in a basket, and shalt go unto the place which the LORD thy God shall choose to place his name there.

Deuteronomy 26:3 And it'd be great if you could go unto the priest that shall be in those days, and say unto him, I profess this day unto the LORD thy God, that I am come unto the country which the LORD sware unto our fathers for to give us.

Deuteronomy 26:5 And it'd be great if you could speak and say before the LORD thy God, A Syrian ready to perish was my father, and he went down into Egypt, and sojourned there with a few, and became there a nation, great, mighty, and populous:

Deuteronomy 26:10 And now, behold, I have brought the firstfruits of the land, which thou, O LORD, hast given me. And it'd be great if you could set it before the LORD thy God, and worship before the LORD thy God:

Deuteronomy 26:11 And it'd be great if you could rejoice in every good thing which the LORD thy God hath given unto thee, and unto thine house, thou, and the Levite, and the stranger that is among you.

Deuteronomy 26:13 Then it'd be great if you could say before the LORD thy God, I have brought away the hallowed things out of mine house, and also have given them unto the Levite, and unto the stranger, to the fatherless, and to the widow, according to all thy commandments which thou hast commanded me: I have not transgressed thy commandments, neither have I forgotten them:

Deuteronomy 26:16 This day the LORD thy God hath commanded thee to do these statutes and judgments: it'd be great if you could therefore keep and do them with all thine heart, and with all thy soul.

Deuteronomy 27:2 And it shall be on the day when ye shall pass over Jordan unto the land which the LORD thy God giveth thee, that it'd be great if you could set thee up great stones, and plaister them with plaister:

Deuteronomy 27:3 And it'd be great if you could write upon them all the words of this law, when thou art passed over, that thou mayest go in unto the land which the LORD thy God giveth thee, a land that floweth with milk and honey; as the LORD God of thy fathers hath promised thee.

Deuteronomy 27:4 Therefore it shall be when ye be gone over Jordan, that ye shall set up these stones, which I command you this day, in mount Ebal, and it'd be great if you could plaister them with plaister.

Deuteronomy 27:5 And there shalt thou build an altar unto the LORD thy God, an altar of stones: it'd be great if you could not lift up any iron tool upon them.

Deuteronomy 27:6 It'd be great if you could build the altar of the LORD thy God of whole stones: and it'd be great if you could offer burnt offerings thereon unto the LORD thy God:

Deuteronomy 27:7 And it'd be great if you could offer peace offerings, and shalt eat there, and rejoice before the LORD thy God.

Deuteronomy 27:8 And it'd be great if you could write upon the stones all the words of this law very plainly.

Deuteronomy 27:10 It'd be great if you could therefore obey the voice of the LORD thy God, and do his commandments and his statutes, which I command thee this day.

Deuteronomy 28:1 AND it shall come to pass, if it'd be great if you could hearken diligently unto the voice of the LORD thy God, to observe and to do all his commandments which I command thee this day, that the LORD thy God will set thee on high above all nations of the earth:

Deuteronomy 28:2 And all these blessings shall come on thee, and overtake thee, if it'd be great if you could hearken unto the voice of the LORD thy God.

Deuteronomy 28:9 The LORD shall establish thee an holy people unto himself, as he hath sworn unto thee, if it'd be great if you could keep the commandments of the LORD thy God, and walk in his ways.

Deuteronomy 28:12 The LORD shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and it'd be great if you could lend unto many nations, and it'd be great if you could not borrow.

Deuteronomy 28:13 And the LORD shall make thee the head, and not the tail; and it'd be great if you could be above only, and it'd be great if you could not be beneath; if that thou hearken unto the commandments of the LORD thy God, which I command thee this day, to observe and to do them:

Deuteronomy 28:14 And it'd be great if you could not go aside from any of the words which I command thee this day, to the right hand, or to the left, to go after other gods to serve them.

Deuteronomy 28:25 The LORD shall cause thee to be smitten before thine enemies: it'd be great if you could go out one way against them, and flee seven ways before them: and shalt be removed into all the kingdoms of the earth.

Deuteronomy 28:29 And it'd be great if you could grope at noonday, as the blind gropeth in darkness, and it'd be great if you could not prosper in thy ways: and it'd be great if you could be only oppressed and spoiled evermore, and no man shall save thee.

Deuteronomy 28:30 It'd be great if you could betroth a wife, and another man shall lie with her: it'd be great if you could build an house, and it'd be great if you could not dwell therein: it'd be great if you could plant a vineyard, and shalt not gather the grapes thereof.

Deuteronomy 28:31 Thine ox shall be slain before thine eyes, and it'd be great if you could not eat thereof: thine ass shall be violently taken away from before thy face, and shall not be restored to thee: thy sheep shall be given unto thine enemies, and it'd be great if you could have none to rescue them.

Deuteronomy 28:33 The fruit of thy land, and all thy labours, shall a nation which thou knowest not eat up; and it'd be great if you could be only oppressed and crushed alway:

Deuteronomy 28:34 So that it'd be great if you could be mad for the sight of thine eyes which it'd be great if you could see.

Deuteronomy 28:36 The LORD shall bring thee, and thy king which it'd be great if you could set over thee, unto a nation which neither thou nor thy fathers have known; and there shalt thou serve other gods, wood and stone.

Deuteronomy 28:37 And it'd be great if you could become an astonishment, a proverb, and a byword, among all nations whither the LORD shall lead thee.

Deuteronomy 28:38 It'd be great if you could carry much seed out into the field, and shalt gather but little in; for the locust shall consume it.

Deuteronomy 28:39 It'd be great if you could plant vineyards, and dress them, but shalt neither drink of the wine, nor gather the grapes; for the worms shall eat them.

Deuteronomy 28:40 It'd be great if you could have olive trees throughout all thy coasts, but it'd be great if you could not anoint thyself with the oil; for thine olive shall cast his fruit.

Deuteronomy 28:41 It'd be great if you could beget sons and daughters, but it'd be great if you could not enjoy them; for they shall go into captivity.

Deuteronomy 28:43 The stranger that is within thee shall get up above thee very high; and it'd be great if you could come down very low.

Deuteronomy 28:44 He shall lend to thee, and it'd be great if you could not lend to him: he shall be the head, and it'd be great if you could be the tail.

Deuteronomy 28:49 The LORD shall bring a nation against thee from far, from the end of the earth, as swift as the eagle flieth; a nation whose tongue it'd be great if you could not understand;

Deuteronomy 28:53 And it'd be great if you could eat the fruit of thine own body, the flesh of thy sons and of thy daughters, which the LORD thy God hath given thee, in the siege, and in the straitness, wherewith thine enemies shall distress thee:

Deuteronomy 28:64 And the LORD shall scatter thee among all people, from the one end of the earth even unto the other; and there it'd be great if you could serve other gods, which neither thou nor thy fathers have known, even wood and stone.

Deuteronomy 28:66 And thy life shall hang in doubt before thee; and it'd be great if you could fear day and night, and shalt have none assurance of thy life:

Deuteronomy 28:67 In the morning it'd be great if you could say, Would God it were even! and at even it'd be great if you could say, Would God it were morning! for the fear of thine heart wherewith it'd be great if you could fear, and for the sight of thine eyes which it'd be great if you could see.

Deuteronomy 28:68 And the LORD shall bring thee into Egypt again with ships, by the way whereof I spake unto thee, it'd be great if you could see it no more again: and there ye shall be sold unto your enemies for bondmen and bondwomen, and no man shall buy you.

Deuteronomy 30:1 AND it shall come to pass, when all these things are come upon thee, the blessing and the curse, which I have set before thee, and it'd be great if you could call them to mind among all the nations, whither the LORD thy God hath driven thee,

Deuteronomy 30:5 And the LORD thy God will bring thee into the land which thy fathers possessed, and it'd be great if you could possess it; and he will do thee good, and multiply thee above thy fathers.

Deuteronomy 30:8 And it'd be great if you could return and obey the voice of the LORD, and do all his commandments which I command thee this day.

Deuteronomy 30:10 If it'd be great if you could hearken unto the voice of the LORD thy God, to keep his commandments and his statutes which are written in this book of the law, and if thou turn unto the LORD thy God with all thine heart, and with all thy soul.

Deuteronomy 31:2 And he said unto them, I am an hundred and twenty years old this day; I can no more go out and come in: also the LORD hath said unto me, it'd be great if you could not go over this Jordan.

Deuteronomy 31:3 The LORD thy God, he will go over before thee, and he will destroy these nations from before thee, and it'd be great if you could possess them: and Joshua, he shall go over before thee, as the LORD hath said.

Deuteronomy 31:7 And Moses called unto Joshua, and said unto him in the sight of all Israel, Be strong and of a good courage: for thou must go with this people unto the land which the LORD hath sworn unto their fathers to give them; and it'd be great if you could cause them to inherit it.

Deuteronomy 31:11 When all Israel is come to appear before the LORD thy God in the place which he shall choose, it'd be great if you could read this law before all Israel in their hearing.

Deuteronomy 31:16 And the LORD said unto Moses, Behold, it'd be great if you could sleep with thy fathers; and this people will rise up, and go a whoring after the gods of the strangers of the land, whither they go to be among them, and will forsake me, and break my covenant which I have made with them.

Deuteronomy 31:23 And he gave Joshua the son of Nun a charge, and said, Be strong and of a good courage: for it'd be great if you could bring the children of Israel into the land which I sware unto them: and I will be with thee.

Deuteronomy 32:52 Yet it'd be great if you could see the land before thee; but it'd be great if you could not go thither unto the land which I give the children of Israel.

Deuteronomy 33:29 Happy art thou, O Israel: who is like unto thee, O people saved by the LORD, the shield of thy help, and who is the sword of thy excellency! and thine enemies shall be found liars unto thee; and it'd be great if you could tread upon their high places.

Deuteronomy 34:4 And the LORD said unto him, This is the land which I sware unto Abraham, unto Isaac, and unto Jacob, saying, I will give it unto thy seed: I have caused thee to see it with thine eyes, but it'd be great if you could not go over thither.

Joshua 1:8 This book of the law shall not depart out of thy mouth; but it'd be great if you could meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then it'd be great if you could make thy way prosperous, and then it'd be great if you could have good success.

Joshua 2:18 Behold, when we come into the land, it'd be great if you could bind this line of scarlet thread in the window which thou didst let us down by: and it'd be great if you could bring thy father, and thy mother, and thy brethren, and all thy father's household, home unto thee.

Joshua 3:8 And it'd be great if you could command the priests that bear the ark of the covenant, saying, When ye are come to the brink of the water of Jordan, ye shall stand still in Jordan.

Joshua 8:2 And it'd be great if you could do to Ai and her king as thou didst unto Jericho and her king: only the spoil thereof, and the cattle thereof, shall ye take for a prey unto yourselves: lay thee an ambush for the city behind it.

Joshua 11:6 And the LORD said unto Joshua, Be not afraid because of them: for to morrow about this time will I deliver them up all slain before Israel: it'd be great if you could hough their horses, and burn their chariots with fire.

Joshua 17:17 And Joshua spake unto the house of Joseph, even to Ephraim and to Manasseh, saying, Thou art a great people, and hast great power: it'd be great if you could not have one lot only:

Joshua 17:18 But the mountain shall be thine; for it is a wood, and it'd be great if you could cut it down: and the outgoings of it shall be thine: for it'd be great if you could drive out the Canaanites, though they have iron chariots, and though they be strong.

Judges 4:20 Again he said unto her, Stand in the door of the tent, and it shall be, when any man doth come and inquire of thee, and say, Is there any man here? that it'd be great if you could say, No.

Judges 6:14 And the LORD looked upon him, and said, Go in this thy might, and it'd be great if you could save Israel from the hand of the Midianites: have not I sent thee?

Judges 6:16 And the LORD said unto him, Surely I will be with thee, and it'd be great if you could smite the Midianites as one man.

Judges 6:23 And the LORD said unto him, Peace be unto thee; fear not: it'd be great if you could not die.

Judges 6:26 And build an altar unto the LORD thy God upon the top of this rock, in the ordered place, and take the second bullock, and offer a burnt sacrifice with the wood of the grove which it'd be great if you could cut down.

Judges 7:11 And it'd be great if you could hear what they say; and afterward shall thine hands be strengthened to go down unto the host. Then went he down with Phurah his servant unto the outside of the armed men that were in the host.

Judges 9:33 And it shall be, that in the morning, as soon as the sun is up, it'd be great if you could rise early, and set upon the city: and, behold, when he and the people that is with him come out against thee, then mayest thou do to them as it'd be great if you could find occasion.

Judges 11:2 And Gilead's wife bare him sons; and his wife's sons grew up, and they thrust out Jephthah, and said unto him, it'd be great if you could not inherit in our father's house; for thou art the son of a strange woman.

Judges 11:30 And Jephthah vowed a vow unto the LORD, and said, If it'd be great if you could without fail deliver the children of Ammon into mine hands,

Judges 13:3 And the angel of the LORD appeared unto the woman, and said unto her, Behold now, thou art barren, and bearest not: but it'd be great if you could conceive, and bear a son.

Judges 13:5 For, lo, it'd be great if you could conceive, and bear a son; and no razor shall come on his head: for the child shall be a Nazarite unto God from the womb: and he shall begin to deliver Israel out of the hand of the Philistines.

Judges 13:7 But he said unto me, Behold, it'd be great if you could conceive, and bear a son; and now drink no wine nor strong drink, neither eat any unclean thing: for the child shall be a Nazarite to God from the womb to the day of his death.

Ruth 2:21 And Ruth the Moabitess said, He said unto me also, it'd be great if you could keep fast by my young men, until they have ended all my harvest.

Ruth 3:4 And it shall be, when he lieth down, that it'd be great if you could mark the place where he shall lie, and it'd be great if you could go in, and uncover his feet, and lay thee down; and he will tell thee what it'd be great if you could do.

1 Samuel 2:16 And if any man said unto him, Let them not fail to burn the fat presently, and then take as much as thy soul desireth; then he would answer him, Nay; but it'd be great if you could give it me now: and if not, I will take it by force.

1 Samuel 2:32 And it'd be great if you could see an enemy in my habitation, in all the wealth which God shall give Israel: and there shall not be an old man in thine house for ever.

1 Samuel 3:9 Therefore Eli said unto Samuel, Go, lie down: and it shall be, if he call thee, that it'd be great if you could say, Speak, LORD; for thy servant heareth. So Samuel went and lay down in his place.

1 Samuel 9:16 To morrow about this time I will send thee a man out of the land of Benjamin, and it'd be great if you could anoint him to be captain over my people Israel, that he may save my people out of the hand of the Philistines: for I have looked upon my people, because their cry is come unto me.

1 Samuel 10:2 When thou art departed from me to day, then it'd be great if you could find two men by Rachel's sepulchre in the border of Benjamin at Zelzah; and they will say unto thee, The asses which thou wentest to seek are found: and, lo, thy father hath left the care of the asses, and sorroweth for you, saying, What shall I do for my son?

1 Samuel 10:3 Then shalt thou go on forward from thence, and it'd be great if you could come to the plain of Tabor, and there shall meet thee three men going up to God to Beth-el, one carrying three kids, and another carrying three loaves of bread, and another carrying a bottle of wine:

1 Samuel 10:4 And they will salute thee, and give thee two loaves of bread; which it'd be great if you could receive of their hands.

1 Samuel 10:5 After that it'd be great if you could come to the hill of God, where is the garrison of the Philistines: and it shall come to pass, when thou art come thither to the city, that it'd be great if you could meet a company of prophets coming down from the high place with a psaltery, and a tabret, and a pipe, and a harp, before them; and they shall prophesy:

1 Samuel 10:6 And the Spirit of the LORD will come upon thee, and it'd be great if you could prophesy with them, and shalt be turned into another man.

1 Samuel 10:8 And it'd be great if you could go down before me to Gilgal; and, behold, I will come down unto thee, to offer burnt offerings, and to sacrifice sacrifices of peace offerings: seven days shalt thou tarry, till I come to thee, and shew thee what it'd be great if you could do.

1 Samuel 14:44 And Saul answered, God do so and more also: for it'd be great if you could surely die, Jonathan.

1 Samuel 16:3 And call Jesse to the sacrifice, and I will shew thee what it'd be great if you could do: and it'd be great if you could anoint unto me him whom I name unto thee.

1 Samuel 16:16 Let our lord now command thy servants, which are before thee, to seek out a man, who is a cunning player on an harp: and it shall come to pass, when the evil spirit from God is upon thee, that he shall play with his hand, and it'd be great if you could be well.

1 Samuel 18:21 And Saul said, I will give him her, that she may be a snare to him, and that the hand of the Philistines may be against him. Wherefore Saul said to David, it'd be great if you could this day be my son in law in the one of the twain.

1 Samuel 19:11 Saul also sent messengers unto David's house, to watch him, and to slay him in the morning: and Michal David's wife told him, saying, If thou save not thy life to night, to morrow it'd be great if you could be slain.

1 Samuel 20:2 And he said unto him, God forbid; it'd be great if you could not die: behold, my father will do nothing either great or small, but that he will shew it me: and why should my father hide this thing from me? it is not so.

1 Samuel 20:8 Therefore it'd be great if you could deal kindly with thy servant; for thou hast brought thy servant into a covenant of the LORD with thee: notwithstanding, if there be in me iniquity, slay me thyself; for why shouldest thou bring me to thy father?

1 Samuel 20:14 And it'd be great if you could not only while yet I live shew me the kindness of the LORD, that I die not:

1 Samuel 20:15 But also it'd be great if you could not cut off thy kindness from my house for ever: no, not when the LORD hath cut off the enemies of David every one from the face of the earth.

1 Samuel 20:18 Then Jonathan said to David, To morrow is the new moon: and it'd be great if you could be missed, because thy seat will be empty.

1 Samuel 20:19 And when thou hast stayed three days, then it'd be great if you could go down quickly, and come to the place where thou didst hide thyself when the business was in hand, and shalt remain by the stone Ezel.

1 Samuel 20:31 For as long as the son of Jesse liveth upon the ground, it'd be great if you could not be established, nor thy kingdom. Wherefore now send and fetch him unto me, for he shall surely die.

1 Samuel 22:16 And the king said, it'd be great if you could surely die, Ahimelech, thou, and all thy father's house.

1 Samuel 22:23 Abide thou with me, fear not: for he that seeketh my life seeketh thy life: but with me it'd be great if you could be in safeguard.

1 Samuel 23:17 And he said unto him, Fear not: for the hand of Saul my father shall not find thee; and it'd be great if you could be king over Israel, and I shall be next unto thee; and that also Saul my father knoweth.

1 Samuel 24:20 And now, behold, I know well that it'd be great if you could surely be king, and that the kingdom of Israel shall be established in thine hand.

1 Samuel 26:25 Then Saul said to David, Blessed be thou, my son David: it'd be great if you could both do great things, and also shalt still prevail. So David went on his way, and Saul returned to his place.

1 Samuel 28:1 AND it came to pass in those days, that the Philistines gathered their armies together for warfare, to fight with Israel. And Achish said unto David, Know thou assuredly, that it'd be great if you could go out with me to battle, thou and thy men.

1 Samuel 28:2 And David said to Achish, Surely it'd be great if you could know what thy servant can do. And Achish said to David, Therefore will I make thee keeper of mine head for ever.

1 Samuel 30:8 And David inquired at the LORD, saying, Shall I pursue after this troop? shall I overtake them? And he answered him, Pursue: for it'd be great if you could surely overtake them, and without fail recover all.

2 Samuel 3:13 And he said, Well; I will make a league with thee: but one thing I require of thee, that is, it'd be great if you could not see my face, except thou first bring Michal Saul's daughter, when thou comest to see my face.

2 Samuel 5:2 Also in time past, when Saul was king over us, thou wast he that leddest out and broughtest in Israel: and the LORD said to thee, it'd be great if you could feed my people Israel, and it'd be great if you could be a captain over Israel.

2 Samuel 5:6 And the king and his men went to Jerusalem unto the Jebusites, the inhabitants of the land: which spake unto David, saying, Except thou take away the blind and the lame, it'd be great if you could not come in hither: thinking, David cannot come in hither.

2 Samuel 5:23 And when David enquired of the LORD, he said, it'd be great if you could not go up; but fetch a compass behind them, and come upon them over against the mulberry trees.

2 Samuel 5:24 And let it be, when thou hearest the sound of a going in the tops of the mulberry trees, that then it'd be great if you could bestir thyself: for then shall the LORD go out before thee, to smite the host of the Philistines.

2 Samuel 7:12 And when thy days be fulfilled, and it'd be great if you could sleep with thy fathers, I will set up thy seed after thee, which shall proceed out of thy bowels, and I will establish his kingdom.

2 Samuel 9:7 And David said unto him, Fear not: for I will surely shew thee kindness for Jonathan thy father's sake, and will restore thee all the land of Saul thy father; and it'd be great if you could eat bread at my table continually.

2 Samuel 9:10 Thou therefore, and thy sons, and thy servants, shall till the land for him, and it'd be great if you could bring in the fruits, that thy master's son may have food to eat: but Mephibosheth thy master's son shall eat bread alway at my table. Now Ziba had fifteen sons and twenty servants.

2 Samuel 10:11 And he said, If the Syrians be too strong for me, then it'd be great if you could help me: but if the children of Ammon be too strong for thee, then I will come and help thee.

2 Samuel 12:13 And David said unto Nathan, I have sinned against the LORD. And Nathan said unto David, The LORD also hath put away thy sin; it'd be great if you could not die.

2 Samuel 13:13 And I, whither shall I cause my shame to go? and as for thee, it'd be great if you could be as one of the fools in Israel. Now therefore, I pray thee, speak unto the king; for he will not withhold me from thee.

2 Samuel 15:33 Unto whom David said, If thou passest on with me, then it'd be great if you could be a burden unto me:

2 Samuel 15:35 And hast thou not there with thee Zadok and Abiathar the priests? therefore it shall be, that what thing soever it'd be great if you could hear out of the king's house, it'd be great if you could tell it to Zadok and Abiathar the priests.

2 Samuel 18:3 But the people answered, it'd be great if you could not go forth: for if we flee away, they will not care for us; neither if half of us die, will they care for us: but now thou art worth ten thousand of us: therefore now it is better that thou succour us out of the city.

2 Samuel 18:20 And Joab said unto him, it'd be great if you could not bear tidings this day, but it'd be great if you could bear tidings another day: but this day it'd be great if you could bear no tidings, because the king's son is dead.

2 Samuel 19:23 Therefore the king said unto Shimei, it'd be great if you could not die. And the king sware unto him.

2 Samuel 19:38 And the king answered, Chimham shall go over with me, and I will do to him that which shall seem good unto thee: and whatsoever it'd be great if you could require of me, that will I do for thee.

2 Samuel 21:17 But Abishai the son of Zeruiah succoured him, and smote the Philistine, and killed him. Then the men of David sware unto him, saying, it'd be great if you could go no more out with us to battle, that thou quench not the light of Israel.

1 Kings 2:37 For it shall be, that on the day thou goest out, and passest over the brook Kidron, it'd be great if you could know for certain that it'd be great if you could surely die: thy blood shall be upon thine own head.

1 Kings 2:42 And the king sent and called for Shimei, and said unto him, Did I not make thee to swear by the LORD, and protested unto thee, saying, Know for a certain, on the day thou goest out, and walkest abroad any wither, that it'd be great if you could surely die? and thou saidst unto me, The word that I have heard is good.

1 Kings 5:6 Now therefore command thou that they hew me cedar trees out of Lebanon; and my servants shall be with thy servants: and unto thee will I give hire for thy servants according to all that it'd be great if you could appoint: for thou knowest that there is not among us any that can skill to hew timber like unto the Sidonians.

1 Kings 5:9 My servants shall bring them down from Lebanon unto the sea: and I will convey them by sea in floats unto the place that it'd be great if you could appoint me, and will cause them to be discharged there, and it'd be great if you could receive them: and it'd be great if you could accomplish my desire, in giving food for my household.

1 Kings 8:19 Nevertheless it'd be great if you could not build the house; but thy son that shall come forth out of thy loins, he shall build the house unto my name.

1 Kings 8:44 If thy people go out to battle against their enemy, whithersoever it'd be great if you could send them, and shall pray unto the LORD toward the city which thou hast chosen, and toward the house that I have built for thy name:

1 Kings 11:37 And I will take thee, and it'd be great if you could reign according to all that thy soul desireth, and shalt be king over Israel.

1 Kings 13:17 For it was said to me by the word of the LORD, it'd be great if you could eat no bread nor drink water there, nor turn again to go by the way that thou camest.

1 Kings 17:4 And it shall be, that it'd be great if you could drink of the brook; and I have commanded the ravens to feed thee there.

1 Kings 20:5 And the messengers came again, and said, Thus speaketh Ben-hadad, saying, Although I have sent unto thee, saying, it'd be great if you could deliver me thy silver, and thy gold, and thy wives, and thy children;

1 Kings 20:13 And, behold, there came a prophet unto Ahab king of Israel, saying, Thus saith the LORD, Hast thou seen all this great multitude? behold, I will deliver it into thine hand this day; and it'd be great if you could know that I am the LORD.

1 Kings 20:34 And Ben-hadad said unto him, The cities, which my father took from thy father, I will restore; and it'd be great if you could make streets for thee in Damascus, as my father made in Samaria. Then said Ahab, I will send thee away with this covenant. So he made a covenant with him, and sent him away.

1 Kings 20:39 And as the king passed by, he cried unto the king: and he said, Thy servant went out into the midst of the battle; and, behold, a man turned aside, and brought a man unto me, and said, Keep this man: if by any means he be missing, then shall thy life be for his life, or else it'd be great if you could pay a talent of silver.

1 Kings 21:19 And it'd be great if you could speak unto him, saying, Thus saith the LORD, Hast thou killed, and also taken possession? And it'd be great if you could speak unto him, saying, Thus saith the LORD, In the place where dogs licked the blood of Naboth shall dogs lick thy blood, even thine.

1 Kings 22:22 And the LORD said unto him, Wherewith? And he said, I will go forth, and I will be a lying spirit in the mouth of all his prophets. And he said, it'd be great if you could persuade him, and prevail also: go forth, and do so.

1 Kings 22:25 And Micaiah said, Behold, it'd be great if you could see in that day, when it'd be great if you could go into an inner chamber to hide thyself.

2 Kings 1:4 Now therefore thus saith the LORD, it'd be great if you could not come down from that bed on which thou art gone up, but shalt surely die. And Elijah departed.

2 Kings 1:6 And they said unto him, There came a man up to meet us, and said unto us, Go, turn again unto the king that sent you, and say unto him, Thus saith the LORD, Is it not because there is not a God in Israel, that thou sendest to enquire of Baal-zebub the god of Ekron? therefore it'd be great if you could not come down from that bed on which thou art gone up, but shalt surely die.

2 Kings 1:16 And he said unto him, Thus saith the LORD, Forasmuch as thou hast sent messengers to enquire of Baal-zebub the god of Ekron, is it not because there is no God in Israel to enquire of his word? therefore it'd be great if you could not come down off that bed on which thou art gone up, but shalt surely die.

2 Kings 4:4 And when thou art come in, it'd be great if you could shut the door upon thee and upon thy sons, and shalt pour out into all those vessels, and it'd be great if you could set aside that which is full.

2 Kings 4:16 And he said, About this season, according to the time of life, it'd be great if you could embrace a son. And she said, Nay, my lord, thou man of God, do not lie unto thine handmaid.

2 Kings 5:10 And Elisha sent a messenger unto him, saying, Go and wash in Jordan seven times, and thy flesh shall come again to thee, and it'd be great if you could be clean.

2 Kings 6:22 And he answered, it'd be great if you could not smite them: wouldest thou smite those whom thou hast taken captive with thy sword and with thy bow? set bread and water before them, that they may eat and drink, and go to their master.

2 Kings 7:2 Then a lord on whose hand the king leaned answered the man of God, and said, Behold, if the LORD would make windows in heaven, might this thing be? And he said, Behold, it'd be great if you could see it with thine eyes, but shalt not eat thereof.

2 Kings 7:19 And that lord answered the man of God, and said, Now, behold, if the LORD should make windows in heaven, might such a thing be? And he said, Behold, it'd be great if you could see it with thine eyes, but shalt not eat thereof.

2 Kings 8:13 And Hazael said, But what, is thy servant a dog, that he should do this great thing? And Elisha answered, The LORD hath shewed me that it'd be great if you could be king over Syria.

2 Kings 9:7 And it'd be great if you could smite the house of Ahab thy master, that I may avenge the blood of my servants the prophets, and the blood of all the servants of the LORD, at the hand of Jezebel.

2 Kings 10:5 And he that was over the house, and he that was over the city, the elders also, and the bringers up of the children, sent to Jehu, saying, We are thy servants, and will do all that it'd be great if you could bid us; we will not make any king: do thou that which is good in thine eyes.

2 Kings 13:17 And he said, Open the window eastward. And he opened it. Then Elisha said, Shoot. And he shot. And he said, The arrow of the LORD's deliverance, and the arrow of deliverance from Syria: for it'd be great if you could smite the Syrians in Aphek, till thou have consumed them.

2 Kings 13:19 And the man of God was wroth with him, and said, Thou shouldest have smitten five or six times; then hadst thou smitten Syria till thou hadst consumed it: whereas now it'd be great if you could smite Syria but thrice.

2 Kings 20:1 IN those days was Hezekiah sick unto death. And the prophet Isaiah the son of Amoz came to him, and said unto him, Thus saith the LORD, Set thine house in order; for it'd be great if you could die, and not live.

2 Kings 20:5 Turn again, and tell Hezekiah the captain of my people, Thus saith the LORD, the God of David thy father, I have heard thy prayer, I have seen thy tears: behold, I will heal thee: on the third day it'd be great if you could go up unto the house of the LORD.

2 Kings 20:18 And of thy sons that shall issue from thee, which it'd be great if you could beget, shall they take away; and they shall be eunuchs in the palace of the king of Babylon.

2 Kings 22:20 Behold therefore, I will gather thee unto thy fathers, and it'd be great if you could be gathered into thy grave in peace; and thine eyes shall not see all the evil which I will bring upon this place. And they brought the king word again.

1 Chronicles 11:2 And moreover in time past, even when Saul was king, thou wast he that leddest out and broughtest in Israel: and the LORD thy God said unto thee, it'd be great if you could feed my people Israel, and it'd be great if you could be ruler over my people Israel.

1 Chronicles 11:5 And the inhabitants of Jebus said to David, it'd be great if you could not come hither. Nevertheless David took the castle of Zion, which is the city of David.

1 Chronicles 14:15 And it shall be, when it'd be great if you could hear a sound of going in the tops of the mulberry trees, that then it'd be great if you could go out to battle: for God is gone forth before thee to smite the host of the Philistines.

1 Chronicles 17:4 Go and tell David my servant, Thus saith the LORD, it'd be great if you could not build me an house to dwell in:

1 Chronicles 19:12 And he said, If the Syrians be too strong for me, then it'd be great if you could help me: but if the children of Ammon be too strong for thee, then I will help thee.

1 Chronicles 21:22 Then David said to Ornan, Grant me the place of this threshingfloor, that I may build an altar therein unto the LORD: it'd be great if you could grant it me for the full price: that the plague may be stayed from the people.

1 Chronicles 22:8 But the word of the LORD came to me, saying, Thou hast shed blood abundantly, and hast made great wars: it'd be great if you could not build an house unto my name, because thou hast shed much blood upon the earth in my sight.

1 Chronicles 28:3 But God said unto me, it'd be great if you could not build an house for my name, because thou hast been a man of war, and hast shed blood.

2 Chronicles 2:16 And we will cut wood out of Lebanon, as much as it'd be great if you could need: and we will bring it to thee in floats by sea to Joppa; and thou shall carry it up to Jerusalem.

2 Chronicles 6:9 Notwithstanding it'd be great if you could not build the house; but thy son which shall come forth out of thy loins, he shall build the house for my name.

2 Chronicles 6:34 If thy people go out to war against their enemies by the way that it'd be great if you could send them, and they pray unto thee toward this city which thou hast chosen, and the house which I have built for thy name;

2 Chronicles 16:9 For the eyes of the LORD run to and fro throughout the whole earth, to shew himself strong in the behalf of them whose heart is perfect toward him. Herein thou hast done foolishly: therefore from henceforth it'd be great if you could have wars.

2 Chronicles 18:10 And Zedekiah the son of Chenaanah had made him horns of iron, and said, Thus saith the LORD, With these it'd be great if you could push Syria until they be consumed.

2 Chronicles 18:21 And he said, I will go out, and be a lying spirit in the mouth of all his prophets. And the LORD said, it'd be great if you could entice him, and it'd be great if you could also prevail: go out, and do even so.

2 Chronicles 18:24 And Micaiah said, Behold, it'd be great if you could see on that day when it'd be great if you could go into an inner chamber to hide thyself.

2 Chronicles 21:15 And it'd be great if you could have great sickness by disease of thy bowels, until thy bowels fall out by reason of the sickness day by day.

2 Chronicles 34:28 Behold, I will gather thee to thy fathers, and it'd be great if you could be gathered to thy grave in peace, neither shall thine eyes see all the evil that I will bring upon this place, and upon the inhabitants of the same. So they brought the king word again.

Ezra 4:13 Be it known now unto the king, that, if this city be builded, and the walls set up again, then will they not pay toll, tribute, and custom, and so it'd be great if you could endamage the revenue of the kings.

Ezra 4:16 We certify the king that, if this city be builded again, and the walls thereof set up, by this means it'd be great if you could have no portion on this side the river.

Ezra 7:20 And whatsoever more shall be needful for the house of thy God, which it'd be great if you could have occasion to bestow, bestow it out of the king's treasure house.

Esther 4:13 Then Mordecai commanded to answer Esther, Think not with thyself that it'd be great if you could escape in the king's house, more than all the Jews.

Esther 6:13 And Haman told Zeresh his wife and all his friends every thing that had befallen him. Then said his wise men and Zeresh his wife unto him, If Mordecai be of the seed of the Jews, before whom thou hast begun to fall, it'd be great if you could not prevail against him, but shalt surely fall before him.

Job 5:21 It'd be great if you could be hid from the scourge of the tongue: neither shalt thou be afraid of destruction when it cometh.

Job 5:22 At destruction and famine it'd be great if you could laugh: neither shalt thou be afraid of the beasts of the earth.

Job 5:23 For it'd be great if you could be in league with the stones of the field: and the beasts of the field shall be at peace with thee.

Job 5:24 And it'd be great if you could know that thy tabernacle shall be in peace; and it'd be great if you could visit thy habitation, and shalt not sin.

Job 5:25 It'd be great if you could know also that thy seed shall be great, and thine offspring as the grass of the earth.

Job 5:26 It'd be great if you could come to thy grave in a full age, like as a shock of corn cometh in in his season.

Job 7:21 And why dost thou not pardon my transgression, and take away mine iniquity? for now shall I sleep in the dust; and it'd be great if you could seek me in the morning, but I shall not be.

Job 11:15 For then shalt thou lift up thy face without spot; yea, it'd be great if you could be stedfast, and shalt not fear:

Job 11:16 Because it'd be great if you could forget thy misery, and remember it as waters that pass away:

Job 11:17 And thine age shall be clearer than the noonday; it'd be great if you could shine forth, it'd be great if you could be as the morning.

Job 11:18 And it'd be great if you could be secure, because there is hope; yea, it'd be great if you could dig about thee, and it'd be great if you could take thy rest in safety.

Job 11:19 Also it'd be great if you could lie down, and none shall make thee afraid; yea, many shall make suit unto thee.

Job 14:15 It'd be great if you could call, and I will answer thee: thou wilt have a desire to the work of thine hands.

Job 22:23 If thou return to the Almighty, it'd be great if you could be built up, it'd be great if you could put away iniquity far from thy tabernacles.

Job 22:25 Yea, the Almighty shall be thy defence, and it'd be great if you could have plenty of silver.

Job 22:27 It'd be great if you could make thy prayer unto him, and he shall hear thee, and it'd be great if you could pay thy vows.

Job 22:28 It'd be great if you could also decree a thing, and it shall be established unto thee: and the light shall shine upon thy ways.

Job 22:29 When men are cast down, then it'd be great if you could say, There is lifting up; and he shall save the humble person.

Job 35:14 Although thou sayest it'd be great if you could not see him, yet judgment is before him; therefore trust thou in him.

Psalms 2:9 It'd be great if you could break them with a rod of iron; it'd be great if you could dash them in pieces like a potter's vessel.

Psalms 5:6 It'd be great if you could destroy them that speak leasing: the LORD will abhor the bloody and deceitful man.

Psalms 12:7 It'd be great if you could keep them, O LORD, it'd be great if you could preserve them from this generation for ever.

Psalms 21:9 It'd be great if you could make them as a fiery oven in the time of thine anger: the LORD shall swallow them up in his wrath, and the fire shall devour them.

Psalms 21:12 Therefore shalt thou make them turn their back, when it'd be great if you could make ready thine arrows upon thy strings against the face of them.

Psalms 31:20 It'd be great if you could hide them in the secret of thy presence from the pride of man: it'd be great if you could keep them secretly in a pavilion from the strife of tongues.

Psalms 32:7 Thou art my hiding place; it'd be great if you could preserve me from trouble; it'd be great if you could compass me about with songs of deliverance. Selah.

Psalms 32:8 I will instruct thee and teach thee in the way which it'd be great if you could go: I will guide thee with mine eye.

Psalms 36:8 They shall be abundantly satisfied with the fatness of thy house; and it'd be great if you could make them drink of the river of thy pleasures.

Psalms 37:3 Trust in the LORD, and do good; so shalt thou dwell in the land, and verily it'd be great if you could be fed.

Psalms 37:10 For yet a little while, and the wicked shall not be: yea, it'd be great if you could diligently consider his place, and it shall not be.

Psalms 37:34 Wait on the LORD, and keep his way, and he shall exalt thee to inherit the land: when the wicked are cut off, it'd be great if you could see it.

Psalms 50:15 And call upon me in the day of trouble: I will deliver thee, and it'd be great if you could glorify me.

Psalms 51:6 Behold, thou desirest truth in the inward parts: and in the hidden part it'd be great if you could make me to know wisdom.

Psalms 59:8 But thou, O LORD, shalt laugh at them; it'd be great if you could have all the heathen in derision.

Psalms 65:3 Iniquities prevail against me: as for our transgressions, it'd be great if you could purge them away.

Psalms 67:4 O let the nations be glad and sing for joy: for it'd be great if you could judge the people righteously, and govern the nations upon earth. Selah.

Psalms 71:21 It'd be great if you could increase my greatness, and comfort me on every side.

Psalms 73:20 As a dream when one awaketh; so, O Lord, when thou awakest, it'd be great if you could despise their image.

Psalms 73:24 It'd be great if you could guide me with thy counsel, and afterward receive me to glory.

Psalms 82:8 Arise, O God, judge the earth: for it'd be great if you could inherit all nations.

Psalms 91:5 It'd be great if you could not be afraid for the terror by night; nor for the arrow that flieth by day;

Psalms 91:13 It'd be great if you could tread upon the lion and adder: the young lion and the dragon shalt thou trample under feet.

Psalms 102:13 It'd be great if you could arise, and have mercy upon Zion: for the time to favour her, yea, the set time, is come.

Psalms 102:26 They shall perish, but it'd be great if you could endure: yea, all of them shall wax old like a garment; as a vesture shalt thou change them, and they shall be changed:

Psalms 119:32 I will run the way of thy commandments, when it'd be great if you could enlarge my heart.

Psalms 128:2 For it'd be great if you could eat the labour of thine hands: happy shalt thou be, and it shall be well with thee.

Psalms 128:5 The LORD shall bless thee out of Zion: and it'd be great if you could see the good of Jerusalem all the days of thy life.

Psalms 128:6 Yea, it'd be great if you could see thy children's children, and peace upon Israel.

Psalms 138:7 Though I walk in the midst of trouble, thou wilt revive me: it'd be great if you could stretch forth thine hand against the wrath of mine enemies, and thy right hand shall save me.

Psalms 142:7 Bring my soul out of prison, that I may praise thy name: the righteous shall compass me about; for it'd be great if you could deal bountifully with me.

Proverbs 3:24 When thou liest down, it'd be great if you could not be afraid: yea, it'd be great if you could lie down, and thy sleep shall be sweet.

Proverbs 4:12 When thou goest, thy steps shall not be straitened; and when thou runnest, it'd be great if you could not stumble.

Proverbs 9:12 If thou be wise, it'd be great if you could be wise for thyself: but if thou scornest, thou alone shalt bear it.

Proverbs 20:13 Love not sleep, lest thou come to poverty; open thine eyes, and it'd be great if you could be satisfied with bread.

Proverbs 22:24 Make no friendship with an angry man; and with a furious man it'd be great if you could not go:

Proverbs 23:14 It'd be great if you could beat him with the rod, and shalt deliver his soul from hell.

Proverbs 23:34 Yea, it'd be great if you could be as he that lieth down in the midst of the sea, or as he that lieth upon the top of a mast.

Proverbs 24:6 For by wise counsel it'd be great if you could make thy war: and in multitude of counsellors there is safety.

Proverbs 25:22 For it'd be great if you could heap coals of fire upon his head, and the LORD shall reward thee.

Proverbs 27:27 And it'd be great if you could have goats' milk enough for thy food, for the food of thy household, and for the maintenance for thy maidens.

Ecclesiastes 11:1 CAST thy bread upon the waters: for it'd be great if you could find it after many days.

Ecclesiastes 12:1 REMEMBER now thy Creator in the days of thy youth, while the evil days come not, nor the years draw nigh, when it'd be great if you could say, I have no pleasure in them;

Isaiah 1:26 And I will restore thy judges as at the first, and thy counsellors as at the beginning: afterward it'd be great if you could be called, The city of righteousness, the faithful city.

Isaiah 12:1 AND in that day it'd be great if you could say, O LORD, I will praise thee: though thou wast angry with me, thine anger is turned away, and thou comfortedst me.

Isaiah 14:4 That it'd be great if you could take up this proverb against the king of Babylon, and say, How hath the oppressor ceased! the golden city ceased!

Isaiah 14:15 Yet it'd be great if you could be brought down to hell, to the sides of the pit.

Isaiah 14:20 It'd be great if you could not be joined with them in burial, because thou hast destroyed thy land, and slain thy people: the seed of evildoers shall never be renowned.

Isaiah 23:12 And he said, it'd be great if you could no more rejoice, O thou oppressed virgin, daughter of Zidon: arise, pass over to Chittim; there also shalt thou have no rest.

Isaiah 25:5 It'd be great if you could bring down the noise of strangers, as the heat in a dry place; even the heat with the shadow of a cloud: the branch of the terrible ones shall be brought low.

Isaiah 29:4 And it'd be great if you could be brought down, and shalt speak out of the ground, and thy speech shall be low out of the dust, and thy voice shall be, as of one that hath a familiar spirit, out of the ground, and thy speech shall whisper out of the dust.

Isaiah 29:6 It'd be great if you could be visited of the LORD of hosts with thunder, and with earthquake, and great noise, with storm and tempest, and the flame of devouring fire.

Isaiah 30:19 For the people shall dwell in Zion at Jerusalem: it'd be great if you could weep no more: he will be very gracious unto thee at the voice of thy cry; when he shall hear it, he will answer thee.

Isaiah 30:22 Ye shall defile also the covering of thy graven images of silver, and the ornament of thy molten images of gold: it'd be great if you could cast them away as a menstruous cloth; it'd be great if you could say unto it, Get thee hence.

Isaiah 30:23 Then shall he give the rain of thy seed, that it'd be great if you could sow the ground withal; and bread of the increase of the earth, and it shall be fat and plenteous: in that day shall thy cattle feed in large pastures.

Isaiah 33:1 WOE to thee that spoilest, and thou wast not spoiled; and dealest treacherously, and they dealt not treacherously with thee! when it'd be great if you could cease to spoil, it'd be great if you could be spoiled; and when it'd be great if you could make an end to deal treacherously, they shall deal treacherously with thee.

Isaiah 33:19 It'd be great if you could not see a fierce people, a people of a deeper speech than thou canst perceive; of a stammering tongue, that thou canst not understand.

Isaiah 38:1 IN those days was Hezekiah sick unto death. And Isaiah the prophet the son of Amoz came unto him, and said unto him, Thus saith the LORD, Set thine house in order: for it'd be great if you could die, and not live.

Isaiah 39:7 And of thy sons that shall issue from thee, which it'd be great if you could beget, shall they take away; and they shall be eunuchs in the palace of the king of Babylon.

Isaiah 41:12 It'd be great if you could seek them, and shalt not find them, even them that contended with thee: they that war against thee shall be as nothing, and as a thing of nought.

Isaiah 41:15 Behold, I will make thee a new sharp threshing instrument having teeth: it'd be great if you could thresh the mountains, and beat them small, and shalt make the hills as chaff.

Isaiah 41:16 It'd be great if you could fan them, and the wind shall carry them away, and the whirlwind shall scatter them: and it'd be great if you could rejoice in the LORD, and shalt glory in the Holy One of Israel.

Isaiah 43:2 When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, it'd be great if you could not be burned; neither shall the flame kindle upon thee.

Isaiah 44:21 Remember these, O Jacob and Israel; for thou art my servant: I have formed thee; thou art my servant: O Israel, it'd be great if you could not be forgotten of me.

Isaiah 44:26 That confirmeth the word of his servant, and performeth the counsel of his messengers; that saith to Jerusalem, it'd be great if you could be inhabited; and to the cities of Judah, Ye shall be built, and I will raise up the decayed places thereof:

Isaiah 44:28 That saith of Cyrus, He is my shepherd, and shall perform all my pleasure: even saying to Jerusalem, it'd be great if you could be built; and to the temple, Thy foundation shall be laid.

Isaiah 47:1 COME down, and sit in the dust, O virgin daughter of Babylon, sit on the ground: there is no throne, O daughter of the Chaldeans: for it'd be great if you could no more be called tender and delicate.

Isaiah 47:5 Sit thou silent, and get thee into darkness, O daughter of the Chaldeans: for it'd be great if you could no more be called, The lady of kingdoms.

Isaiah 47:11 Therefore shall evil come upon thee; it'd be great if you could not know from whence it riseth: and mischief shall fall upon thee; it'd be great if you could not be able to put it off: and desolation shall come upon thee suddenly, which it'd be great if you could not know.

Isaiah 47:12 Stand now with thine enchantments, and with the multitude of thy sorceries, wherein thou hast laboured from thy youth; if so be it'd be great if you could be able to profit, if so be thou mayest prevail.

Isaiah 49:18 Lift up thine eyes round about, and behold: all these gather themselves together, and come to thee. As I live, saith the LORD, it'd be great if you could surely clothe thee with them all, as with an ornament, and bind them on thee, as a bride doeth.

Isaiah 49:20 The children which it'd be great if you could have, after thou hast lost the other, shall say again in thine ears, The place is too strait for me: give place to me that I may dwell.

Isaiah 49:23 And kings shall be thy nursing fathers, and their queens thy nursing mothers: they shall bow down to thee with their face toward the earth, and lick up the dust of thy feet; and it'd be great if you could know that I am the LORD: for they shall not be ashamed that wait for me.

Isaiah 51:22 Thus saith thy Lord the LORD, and thy God that pleadeth the cause of his people, Behold, I have taken out of thine hand the cup of trembling, even the dregs of the cup of my fury; it'd be great if you could no more drink it again:

Isaiah 53:10 Yet it pleased the LORD to bruise him; he hath put him to grief: when it'd be great if you could make his soul an offering for sin, he shall see his seed, he shall prolong his days, and the pleasure of the LORD shall prosper in his hand.

Isaiah 54:3 For it'd be great if you could break forth on the right hand and on the left; and thy seed shall inherit the Gentiles, and make the desolate cities to be inhabited.

Isaiah 54:4 Fear not; for it'd be great if you could not be ashamed: neither be thou confounded; for it'd be great if you could not be put to shame: for it'd be great if you could forget the shame of thy youth, and shalt not remember the reproach of thy widowhood any more.

Isaiah 54:14 In righteousness shalt thou be established: it'd be great if you could be far from oppression; for it'd be great if you could not fear: and from terror; for it shall not come near thee.

Isaiah 54:17 No weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment it'd be great if you could condemn. This is the heritage of the servants of the LORD, and their righteousness is of me, saith the LORD.

Isaiah 55:5 Behold, it'd be great if you could call a nation that thou knowest not, and nations that knew not thee shall run unto thee because of the LORD thy God, and for the Holy One of Israel; for he hath glorified thee.

Isaiah 58:9 Then shalt thou call, and the LORD shall answer; it'd be great if you could cry, and he shall say, Here I am. If thou take away from the midst of thee the yoke, the putting forth of the finger, and speaking vanity;

Isaiah 58:11 And the LORD shall guide thee continually, and satisfy thy soul in drought, and make fat thy bones: and it'd be great if you could be like a watered garden, and like a spring of water, whose waters fail not.

Isaiah 58:12 And they that shall be of thee shall build the old waste places: it'd be great if you could raise up the foundations of many generations; and it'd be great if you could be called, The repairer of the breach, The restorer of paths to dwell in.

Isaiah 60:5 Then it'd be great if you could see, and flow together, and thine heart shall fear, and be enlarged; because the abundance of the sea shall be converted unto thee, the forces of the Gentiles shall come unto thee.

Isaiah 60:16 It'd be great if you could also suck the milk of the Gentiles, and shalt suck the breast of kings: and it'd be great if you could know that I the LORD am thy Saviour and thy Redeemer, the mighty One of Jacob.

Isaiah 60:18 Violence shall no more be heard in thy land, wasting nor destruction within thy borders; but it'd be great if you could call thy walls Salvation, and thy gates Praise.

Isaiah 62:2 And the Gentiles shall see thy righteousness, and all kings thy glory: and it'd be great if you could be called by a new name, which the mouth of the LORD shall name.

Isaiah 62:3 It'd be great if you could also be a crown of glory in the hand of the LORD, and a royal diadem in the hand of thy God.

Isaiah 62:4 It'd be great if you could no more be termed Forsaken; neither shall thy land any more be termed Desolate: but it'd be great if you could be called Hephzi-bah, and thy land Beulah: for the LORD delighteth in thee, and thy land shall be married.

Isaiah 62:12 And they shall call them, The holy people, The redeemed of the LORD: and it'd be great if you could be called, Sought out, A city not forsaken.

Jeremiah 1:7 But the LORD said unto me, Say not, I am a child: for it'd be great if you could go to all that I shall send thee, and whatsoever I command thee it'd be great if you could speak.

Jeremiah 2:37 Yea, it'd be great if you could go forth from him, and thine hands upon thine head: for the LORD hath rejected thy confidences, and it'd be great if you could not prosper in them.

Jeremiah 3:19 But I said, How shall I put thee among the children, and give thee a pleasant land, a goodly heritage of the hosts of nations? and I said, it'd be great if you could call me, My father; and shalt not turn away from me.

Jeremiah 4:2 And it'd be great if you could swear, The LORD liveth, in truth, in judgment, and in righteousness; and the nations shall bless themselves in him, and in him shall they glory.

Jeremiah 7:27 Therefore it'd be great if you could speak all these words unto them; but they will not hearken to thee: it'd be great if you could also call unto them; but they will not answer thee.

Jeremiah 7:28 But it'd be great if you could say unto them, This is a nation that obeyeth not the voice of the LORD their God, nor receiveth correction: truth is perished, and is cut off from their mouth.

Jeremiah 8:4 Moreover it'd be great if you could say unto them, Thus saith the LORD; Shall they fall, and not arise? shall he turn away, and not return?

Jeremiah 13:12 Therefore it'd be great if you could speak unto them this word; Thus saith the LORD God of Israel, Every bottle shall be filled with wine: and they shall say unto thee, Do we not certainly know that every bottle shall be filled with wine?

Jeremiah 14:17 Therefore it'd be great if you could say this word unto them; Let mine eyes run down with tears night and day, and let them not cease: for the virgin daughter of my people is broken with a great breach, with a very grievous blow.

Jeremiah 15:2 And it shall come to pass, if they say unto thee, Whither shall we go forth? then it'd be great if you could tell them, Thus saith the LORD; Such as are for death, to death; and such as are for the sword, to the sword; and such as are for the famine, to the famine; and such as are for the captivity, to the captivity.

Jeremiah 15:19 Therefore thus saith the LORD, If thou return, then will I bring thee again, and it'd be great if you could stand before me: and if thou take forth the precious from the vile, it'd be great if you could be as my mouth: let them return unto thee; but return not thou unto them.

Jeremiah 16:2 It'd be great if you could not take thee a wife, neither shalt thou have sons or daughters in this place.

Jeremiah 16:8 It'd be great if you could not also go into the house of feasting, to sit with them to eat and to drink.

Jeremiah 16:10 And it shall come to pass, when it'd be great if you could shew this people all these words, and they shall say unto thee, Wherefore hath the LORD pronounced all this great evil against us? or what is our iniquity? or what is our sin that we have committed against the LORD our God?

Jeremiah 18:22 Let a cry be heard from their houses, when it'd be great if you could bring a troop suddenly upon them: for they have digged a pit to take me, and hid snares for my feet.

Jeremiah 20:6 And thou, Pashur, and all that dwell in thine house shall go into captivity: and it'd be great if you could come to Babylon, and there it'd be great if you could die, and shalt be buried there, thou, and all thy friends, to whom thou hast prophesied lies.

Jeremiah 21:8 And unto this people it'd be great if you could say, Thus saith the LORD; Behold, I set before you the way of life, and the way of death.

Jeremiah 23:33 And when this people, or the prophet, or a priest, shall ask thee, saying, What is the burden of the LORD? it'd be great if you could then say unto them, What burden? I will even forsake you, saith the LORD.

Jeremiah 25:27 Therefore it'd be great if you could say unto them, Thus saith the LORD of hosts, the God of Israel; Drink ye, and be drunken, and spue, and fall, and rise no more, because of the sword which I will send among you.

Jeremiah 26:4 And it'd be great if you could say unto them, Thus saith the LORD; If ye will not hearken to me, to walk in my law, which I have set before you,

Jeremiah 26:8 Now it came to pass, when Jeremiah had made an end of speaking all that the LORD had commanded him to speak unto all the people, that the priests and the prophets and all the people took him, saying, it'd be great if you could surely die.

Jeremiah 28:13 Go and tell Hananiah, saying, Thus saith the LORD; Thou hast broken the yokes of wood; but it'd be great if you could make for them yokes of iron.

Jeremiah 28:16 Therefore thus saith the LORD; Behold, I will cast thee from off the face of the earth: this year it'd be great if you could die, because thou hast taught rebellion against the LORD.

Jeremiah 31:4 Again I will build thee, and it'd be great if you could be built, O virgin of Israel: it'd be great if you could again be adorned with thy tabrets, and shalt go forth in the dances of them that make merry.

Jeremiah 31:5 It'd be great if you could yet plant vines upon the mountains of Samaria: the planters shall plant, and shall eat them as common things.

Jeremiah 34:3 And it'd be great if you could not escape out of his hand, but shalt surely be taken, and delivered into his hand; and thine eyes shall behold the eyes of the king of Babylon, and he shall speak with thee mouth to mouth, and it'd be great if you could go to Babylon.

Jeremiah 34:4 Yet hear the word of the LORD, O Zedekiah king of Judah; Thus saith the LORD of thee, it'd be great if you could not die by the sword:

Jeremiah 34:5 But it'd be great if you could die in peace: and with the burnings of thy fathers, the former kings which were before thee, so shall they burn odours for thee; and they will lament thee, saying, Ah lord! for I have pronounced the word, saith the LORD.

Jeremiah 34:14 At the end of seven years let ye go every man his brother an Hebrew, which hath been sold unto thee; and when he hath served thee six years, it'd be great if you could let him go free from thee: but your fathers hearkened not unto me, neither inclined their ear.

Jeremiah 36:6 Therefore go thou, and read in the roll, which thou hast written from my mouth, the words of the LORD in the ears of the people in the LORD's house upon the fasting day: and also it'd be great if you could read them in the ears of all Judah that come out of their cities.

Jeremiah 36:29 And it'd be great if you could say to Jehoiakim king of Judah, Thus saith the LORD; Thou hast burned this roll, saying, Why hast thou written therein, saying, The king of Babylon shall certainly come and destroy this land, and shall cause to cease from thence man and beast?

Jeremiah 37:17 Then Zedekiah the king sent, and took him out: and the king asked him secretly in his house, and said, Is there any word from the LORD? And Jeremiah said, There is: for, said he, it'd be great if you could be delivered into the hand of the king of Babylon.

Jeremiah 38:17 Then said Jeremiah unto Zedekiah, Thus saith the LORD, the God of hosts, the God of Israel; If thou wilt assuredly go forth unto the king of Babylon's princes, then thy soul shall live, and this city shall not be burned with fire; and it'd be great if you could live, and thine house:

Jeremiah 38:18 But if thou wilt not go forth to the king of Babylon's princes, then shall this city be given into the hand of the Chaldeans, and they shall burn it with fire, and it'd be great if you could not escape out of their hand.

Jeremiah 38:23 So they shall bring out all thy wives and thy children to the Chaldeans: and it'd be great if you could not escape out of their hand, but shalt be taken by the hand of the king of Babylon: and it'd be great if you could cause this city to be burned with fire.

Jeremiah 38:24 Then said Zedekiah unto Jeremiah, Let no man know of these words, and it'd be great if you could not die.

Jeremiah 38:26 Then it'd be great if you could say unto them, I presented my supplication before the king, that he would not cause me to return to Jonathan's house, to die there.

Jeremiah 39:17 But I will deliver thee in that day, saith the LORD: and it'd be great if you could not be given into the hand of the men of whom thou art afraid.

Jeremiah 39:18 For I will surely deliver thee, and it'd be great if you could not fall by the sword, but thy life shall be for a prey unto thee: because thou hast put thy trust in me, saith the LORD.

Jeremiah 40:16 But Gedaliah the son of Ahikam said unto Johanan the son of Kareah, it'd be great if you could not do this thing: for thou speakest falsely of Ishmael.

Jeremiah 46:11 Go up into Gilead, and take balm, O virgin, the daughter of Egypt: in vain shalt thou use many medicines; for it'd be great if you could not be cured.

Jeremiah 48:2 There shall be no more praise of Moab: in Heshbon they have devised evil against it; come, and let us cut it off from being a nation. Also it'd be great if you could be cut down, O Madmen; the sword shall pursue thee.

Jeremiah 48:7 For because thou hast trusted in thy works and in thy treasures, it'd be great if you could also be taken: and Chemosh shall go forth into captivity with his priests and his princes together.

Jeremiah 49:12 For thus saith the LORD; Behold, they whose judgment was not to drink of the cup have assuredly drunken; and art thou he that shall altogether go unpunished? it'd be great if you could not go unpunished, but it'd be great if you could surely drink of it.

Jeremiah 51:26 And they shall not take of thee a stone for a corner, nor a stone for foundations; but it'd be great if you could be desolate for ever, saith the LORD.

Jeremiah 51:63 And it shall be, when thou hast made an end of reading this book, that it'd be great if you could bind a stone to it, and cast it into the midst of Euphrates:

Jeremiah 51:64 And it'd be great if you could say, Thus shall Babylon sink, and shall not rise from the evil that I will bring upon her: and they shall be weary. Thus far are the words of Jeremiah.

Lamentations 4:21 Rejoice and be glad, O daughter of Edom, that dwellest in the land of Uz; the cup also shall pass through unto thee: it'd be great if you could be drunken, and shalt make thyself naked.

Ezekiel 2:4 For they are impudent children and stiffhearted. I do send thee unto them; and it'd be great if you could say unto them, Thus saith the Lord GOD.

Ezekiel 2:7 And it'd be great if you could speak my words unto them, whether they will hear, or whether they will forbear: for they are most rebellious.

Ezekiel 3:18 When I say unto the wicked, it'd be great if you could surely die; and thou givest him not warning, nor speakest to warn the wicked from his wicked way, to save his life; the same wicked man shall die in his iniquity; but his blood will I require at thine hand.

Ezekiel 3:25 But thou, O son of man, behold, they shall put bands upon thee, and shall bind thee with them, and it'd be great if you could not go out among them:

Ezekiel 3:26 And I will make thy tongue cleave to the roof of thy mouth, that it'd be great if you could be dumb, and shalt not be to them a reprover: for they are a rebellious house.

Ezekiel 3:27 But when I speak with thee, I will open thy mouth, and it'd be great if you could say unto them, Thus saith the Lord GOD; He that heareth, let him hear; and he that forbeareth, let him forbear: for they are a rebellious house.

Ezekiel 4:3 Moreover take thou unto thee an iron pan, and set it for a wall of iron between thee and the city: and set thy face against it, and it shall be besieged, and it'd be great if you could lay siege against it. This shall be a sign to the house of Israel.

Ezekiel 4:4 Lie thou also upon thy left side, and lay the iniquity of the house of Israel upon it: according to the number of the days that it'd be great if you could lie upon it it'd be great if you could bear their iniquity.

Ezekiel 4:6 And when thou hast accomplished them, lie again on thy right side, and it'd be great if you could bear the iniquity of the house of Judah forty days: I have appointed thee each day for a year.

Ezekiel 4:7 Therefore it'd be great if you could set thy face toward the siege of Jerusalem, and thine arm shall be uncovered, and it'd be great if you could prophesy against it.

Ezekiel 4:8 And, behold, I will lay bands upon thee, and it'd be great if you could not turn thee from one side to another, till thou hast ended the days of thy siege.

Ezekiel 4:9 Take thou also unto thee wheat, and barley, and beans, and lentiles, and millet, and fitches, and put them in one vessel, and make thee bread thereof, according to the number of the days that it'd be great if you could lie upon thy side, three hundred and ninety days shalt thou eat thereof.

Ezekiel 4:10 And thy meat which it'd be great if you could eat shall be by weight, twenty shekels a day: from time to time shalt thou eat it.

Ezekiel 4:11 It'd be great if you could drink also water by measure, the sixth part of an hin: from time to time shalt thou drink.

Ezekiel 4:12 And it'd be great if you could eat it as barley cakes, and it'd be great if you could bake it with dung that cometh out of man, in their sight.

Ezekiel 4:15 Then he said unto me, Lo, I have given thee cow's dung for man's dung, and it'd be great if you could prepare thy bread therewith.

Ezekiel 5:2 It'd be great if you could burn with fire a third part in the midst of the city, when the days of the siege are fulfilled: and it'd be great if you could take a third part, and smite about it with a knife: and a third part it'd be great if you could scatter in the wind; and I will draw out a sword after them.

Ezekiel 5:3 It'd be great if you could also take thereof a few in number, and bind them in thy skirts.

Ezekiel 8:6 He said furthermore unto me, Son of man, seest thou what they do? even the great abominations that the house of Israel committeth here, that I should go far off from my sanctuary? but turn thee yet again, and it'd be great if you could see greater abominations.

Ezekiel 8:13 He said also unto me, Turn thee yet again, and it'd be great if you could see greater abominations that they do.

Ezekiel 8:15 Then said he unto me, Hast thou seen this, O son of man? turn thee yet again, and it'd be great if you could see greater abominations than these.

Ezekiel 12:3 Therefore, thou son of man, prepare thee stuff for removing, and remove by day in their sight; and it'd be great if you could remove from thy place to another place in their sight: it may be they will consider, though they be a rebellious house.

Ezekiel 12:4 Then shalt thou bring forth thy stuff by day in their sight, as stuff for removing: and it'd be great if you could go forth at even in their sight, as they that go forth into captivity.

Ezekiel 12:6 In their sight shalt thou bear it upon thy shoulders, and carry it forth in the twilight: it'd be great if you could cover thy face, that thou see not the ground: for I have set thee for a sign unto the house of Israel.

Ezekiel 16:43 Because thou hast not remembered the days of thy youth, but hast fretted me in all these things; behold, therefore I also will recompense thy way upon thine head, saith the Lord GOD: and it'd be great if you could not commit this lewdness above all thine abominations.

Ezekiel 16:61 Then it'd be great if you could remember thy ways, and be ashamed, when it'd be great if you could receive thy sisters, thine elder and thy younger: and I will give them unto thee for daughters, but not by thy covenant.

Ezekiel 16:62 And I will establish my covenant with thee; and it'd be great if you could know that I am the LORD:

Ezekiel 21:7 And it shall be, when they say unto thee, Wherefore sighest thou? that it'd be great if you could answer, For the tidings; because it cometh: and every heart shall melt, and all hands shall be feeble, and every spirit shall faint, and all knees shall be weak as water: behold, it cometh, and shall be brought to pass, saith the Lord GOD.

Ezekiel 21:32 It'd be great if you could be for fuel to the fire; thy blood shall be in the midst of the land; it'd be great if you could be no more remembered: for I the LORD have spoken it.

Ezekiel 22:2 Now, thou son of man, wilt thou judge, wilt thou judge the bloody city? yea, it'd be great if you could shew her all her abominations.

Ezekiel 22:16 And it'd be great if you could take thine inheritance in thyself in the sight of the heathen, and it'd be great if you could know that I am the LORD.

Ezekiel 23:27 Thus will I make thy lewdness to cease from thee, and thy whoredom brought from the land of Egypt: so that it'd be great if you could not lift up thine eyes unto them, nor remember Egypt any more.

Ezekiel 23:32 Thus saith the Lord GOD; it'd be great if you could drink of thy sister's cup deep and large: it'd be great if you could be laughed to scorn and had in derision; it containeth much.

Ezekiel 23:33 It'd be great if you could be filled with drunkenness and sorrow, with the cup of astonishment and desolation, with the cup of thy sister Samaria.

Ezekiel 23:34 It'd be great if you could even drink it and suck it out, and it'd be great if you could break the sherds thereof, and pluck off thine own breasts: for I have spoken it, saith the Lord GOD.

Ezekiel 24:13 In thy filthiness is lewdness: because I have purged thee, and thou wast not purged, it'd be great if you could not be purged from thy filthiness any more, till I have caused my fury to rest upon thee.

Ezekiel 24:27 In that day shall thy mouth be opened to him which is escaped, and it'd be great if you could speak, and be no more dumb: and it'd be great if you could be a sign unto them; and they shall know that I am the LORD.

Ezekiel 25:7 Behold, therefore I will stretch out mine hand upon thee, and will deliver thee for a spoil to the heathen; and I will cut thee off from the people, and I will cause thee to perish out of the countries: I will destroy thee; and it'd be great if you could know that I am the LORD.

Ezekiel 26:14 And I will make thee like the top of a rock: it'd be great if you could be a place to spread nets upon; it'd be great if you could be built no more: for I the LORD have spoken it, saith the Lord GOD.

Ezekiel 26:21 I will make thee a terror, and it'd be great if you could be no more: though thou be sought for, yet shalt thou never be found again, saith the Lord GOD.

Ezekiel 27:34 In the time when it'd be great if you could be broken by the seas in the depths of the waters thy merchandise and all thy company in the midst of thee shall fall.

Ezekiel 27:36 The merchants among the people shall hiss at thee; it'd be great if you could be a terror, and never shalt be any more.

Ezekiel 28:8 They shall bring thee down to the pit, and it'd be great if you could die the deaths of them that are slain in the midst of the seas.

Ezekiel 28:9 Wilt thou yet say before him that slayeth thee, I am God? but it'd be great if you could be a man, and no God, in the hand of him that slayeth thee.

Ezekiel 28:10 It'd be great if you could die the deaths of the uncircumcised by the hand of strangers: for I have spoken it, saith the Lord GOD.

Ezekiel 28:19 All they that know thee among the people shall be astonished at thee: it'd be great if you could be a terror, and never shalt thou be any more.

Ezekiel 29:5 And I will leave thee thrown into the wilderness, thee and all the fish of thy rivers: it'd be great if you could fall upon the open fields; it'd be great if you could not be brought together, nor gathered: I have given thee for meat to the beasts of the field and to the fowls of the heaven.

Ezekiel 31:18 To whom art thou thus like in glory and in greatness among the trees of Eden? yet shalt thou be brought down with the trees of Eden unto the nether parts of the earth: it'd be great if you could lie in the midst of the uncircumcised with them that be slain by the sword. This is Pharaoh and all his multitude, saith the Lord GOD.

Ezekiel 32:28 Yea, it'd be great if you could be broken in the midst of the uncircumcised, and shalt lie with them that are slain with the sword.

Ezekiel 33:7 So thou, O son of man, I have set thee a watchman unto the house of Israel; therefore it'd be great if you could hear the word at my mouth, and warn them from me.

Ezekiel 33:8 When I say unto the wicked, O wicked man, it'd be great if you could surely die; if thou dost not speak to warn the wicked from his way, that wicked man shall die in his iniquity; but his blood will I require at thine hand.

Ezekiel 33:14 Again, when I say unto the wicked, it'd be great if you could surely die; if he turn from his sin, and do that which is lawful and right;

Ezekiel 35:4 I will lay thy cities waste, and it'd be great if you could be desolate, and it'd be great if you could know that I am the LORD.

Ezekiel 35:12 And it'd be great if you could know that I am the LORD, and that I have heard all thy blasphemies which thou hast spoken against the mountains of Israel, saying, They are laid desolate, they are given us to consume.

Ezekiel 35:15 As thou didst rejoice at the inheritance of the house of Israel, because it was desolate, so will I do unto thee: it'd be great if you could be desolate, O mount Seir, and all Idumea, even all of it: and they shall know that I am the LORD.

Ezekiel 36:12 Yea, I will cause men to walk upon you, even my people Israel; and they shall possess thee, and it'd be great if you could be their inheritance, and it'd be great if you could no more henceforth bereave them of men.

Ezekiel 36:14 Therefore it'd be great if you could devour men no more, neither bereave thy nations any more, saith the Lord GOD.

Ezekiel 38:8 After many days it'd be great if you could be visited: in the latter years it'd be great if you could come into the land that is brought back from the sword, and is gathered out of many people, against the mountains of Israel, which have been always waste: but it is brought forth out of the nations, and they shall dwell safely all of them.

Ezekiel 38:9 It'd be great if you could ascend and come like a storm, it'd be great if you could be like a cloud to cover the land, thou, and all thy bands, and many people with thee.

Ezekiel 38:10 Thus saith the Lord GOD; It shall also come to pass, that at the same time shall things come into thy mind, and it'd be great if you could think an evil thought:

Ezekiel 38:11 And it'd be great if you could say, I will go up to the land of unwalled villages; I will go to them that are at rest, that dwell safely, all of them dwelling without walls, and having neither bars nor gates,

Ezekiel 38:15 And it'd be great if you could come from thy place out of the north parts, thou, and many people with thee, all of them riding upon horses, a great company, and a mighty army:

Ezekiel 38:16 And it'd be great if you could come up against my people of Israel, as a cloud to cover the land; it shall be in the latter days, and I will bring thee against my land, that the heathen may know me, when I shall be sanctified in thee, O Gog, before their eyes.

Ezekiel 39:4 It'd be great if you could fall upon the mountains of Israel, thou, and all thy bands, and the people that is with thee: I will give thee unto the ravenous birds of every sort, and to the beasts of the field to be devoured.

Ezekiel 39:5 It'd be great if you could fall upon the open field: for I have spoken it, saith the Lord GOD.

Ezekiel 43:19 And it'd be great if you could give to the priests the Levites that be of the seed of Zadok, which approach unto me, to minister unto me, saith the Lord GOD, a young bullock for a sin offering.

Ezekiel 43:20 And it'd be great if you could take of the blood thereof, and put it on the four horns of it, and on the four corners of the settle, and upon the border round about: thus shalt thou cleanse and purge it.

Ezekiel 43:21 It'd be great if you could take the bullock also of the sin offering, and he shall burn it in the appointed place of the house, without the sanctuary.

Ezekiel 43:22 And on the second day it'd be great if you could offer a kid of the goats without blemish for a sin offering; and they shall cleanse the altar, as they did cleanse it with the bullock.

Ezekiel 43:23 When thou hast made an end of cleansing it, it'd be great if you could offer a young bullock without blemish, and a ram out of the flock without blemish.

Ezekiel 43:24 And it'd be great if you could offer them before the LORD, and the priests shall cast salt upon them, and they shall offer them up for a burnt offering unto the LORD.

Ezekiel 44:6 And it'd be great if you could say to the rebellious, even to the house of Israel, Thus saith the Lord GOD; O ye house of Israel, let it suffice you of all your abominations,

Ezekiel 45:18 Thus saith the Lord GOD; In the first month, in the first day of the month, it'd be great if you could take a young bullock without blemish, and cleanse the sanctuary:

Ezekiel 45:20 And so it'd be great if you could do the seventh day of the month for every one that erreth, and for him that is simple: so shall ye reconcile the house.

Ezekiel 46:13 It'd be great if you could daily prepare a burnt offering unto the LORD of a lamb of the first year without blemish: it'd be great if you could prepare it every morning.

Ezekiel 46:14 And it'd be great if you could prepare a meat offering for it every morning, the sixth part of an ephah, and the third part of an hin of oil, to temper with the fine flour; a meat offering continually by a perpetual ordinance unto the LORD.

Daniel 4:26 And whereas they commanded to leave the stump of the tree roots; thy kingdom shall be sure unto thee, after that it'd be great if you could have known that the heavens do rule.

Daniel 5:16 And I have heard of thee, that thou canst make interpretations, and dissolve doubts: now if thou canst read the writing, and make known to me the interpretation thereof, it'd be great if you could be clothed with scarlet, and have a chain of gold about thy neck, and shalt be the third ruler in the kingdom.

Daniel 12:13 But go thou thy way till the end be: for it'd be great if you could rest, and stand in thy lot at the end of the days.

Hosea 2:16 And it shall be at that day, saith the LORD, that it'd be great if you could call me Ishi; and shalt call me no more Baali.

Hosea 2:20 I will even betroth thee unto me in faithfulness: and it'd be great if you could know the LORD.

Hosea 3:3 And I said unto her, it'd be great if you could abide for me many days; it'd be great if you could not play the harlot, and it'd be great if you could not be for another man: so will I also be for thee.

Hosea 4:6 My people are destroyed for lack of knowledge: because thou hast rejected knowledge, I will also reject thee, that it'd be great if you could be no priest to me: seeing thou hast forgotten the law of thy God, I will also forget thy children.

Hosea 13:4 Yet I am the LORD thy God from the land of Egypt, and it'd be great if you could know no god but me: for there is no saviour beside me.

Amos 7:17 Therefore thus saith the LORD; Thy wife shall be an harlot in the city, and thy sons and thy daughters shall fall by the sword, and thy land shall be divided by line; and it'd be great if you could die in a polluted land: and Israel shall surely go into captivity forth of his land.

Obadiah 1:10 For thy violence against thy brother Jacob shame shall cover thee, and it'd be great if you could be cut off for ever.

Micah 2:5 Therefore it'd be great if you could have none that shall cast a cord by lot in the congregation of the LORD.

Micah 4:10 Be in pain, and labour to bring forth, O daughter of Zion, like a woman in travail: for now shalt thou go forth out of the city, and it'd be great if you could dwell in the field, and it'd be great if you could go even to Babylon; there shalt thou be delivered; there the LORD shall redeem thee from the hand of thine enemies.

Micah 4:13 Arise and thresh, O daughter of Zion: for I will make thine horn iron, and I will make thy hoofs brass: and it'd be great if you could beat in pieces many people: and I will consecrate their gain unto the LORD, and their substance unto the Lord of the whole earth.

Micah 5:12 And I will cut off witchcrafts out of thine hand; and it'd be great if you could have no more soothsayers:

Micah 5:13 Thy graven images also will I cut off, and thy standing images out of the midst of thee; and it'd be great if you could no more worship the work of thine hands.

Micah 6:14 It'd be great if you could eat, but not be satisfied; and thy casting down shall be in the midst of thee; and it'd be great if you could take hold, but shalt not deliver; and that which thou deliverest will I give up to the sword.

Micah 6:15 It'd be great if you could sow, but it'd be great if you could not reap; it'd be great if you could tread the olives, but it'd be great if you could not anoint thee with oil; and sweet wine, but shalt not drink wine.

Nahum 3:11 Thou also shalt be drunken: it'd be great if you could be hid, thou also shalt seek strength because of the enemy.

Habakkuk 2:7 Shall they not rise up suddenly that shall bite thee, and awake that shall vex thee, and it'd be great if you could be for booties unto them?

Zephaniah 3:11 In that day shalt thou not be ashamed for all thy doings, wherein thou hast transgressed against me: for then I will take away out of the midst of thee them that rejoice in thy pride, and it'd be great if you could no more be haughty because of my holy mountain.

Zephaniah 3:15 The LORD hath taken away thy judgments, he hath cast out thine enemy: the king of Israel, even the LORD, is in the midst of thee: it'd be great if you could not see evil any more.

Zechariah 2:11 And many nations shall be joined to the LORD in that day, and shall be my people: and I will dwell in the midst of thee, and it'd be great if you could know that the LORD of hosts hath sent me unto thee.

Zechariah 3:7 Thus saith the LORD of hosts; If thou wilt walk in my ways, and if thou wilt keep my charge, then it'd be great if you could also judge my house, and shalt also keep my courts, and I will give thee places to walk among these that stand by.

Zechariah 4:7 Who art thou, O great mountain? before Zerubbabel it'd be great if you could become a plain: and he shall bring forth the headstone thereof with shoutings, crying, Grace, grace unto it.

Zechariah 4:9 The hands of Zerubbabel have laid the foundation of this house; his hands shall also finish it; and it'd be great if you could know that the LORD of hosts hath sent me unto you.

Zechariah 13:3 And it shall come to pass, that when any shall yet prophesy, then his father and his mother that begat him shall say unto him, it'd be great if you could not live; for thou speakest lies in the name of the LORD: and his father and his mother that begat him shall thrust him through when he prophesieth.

Matthew 1:21 And she shall bring forth a son, and it'd be great if you could call his name JESUS: for he shall save his people from their sins.

Matthew 4:7 Jesus said unto him, It is written again, it'd be great if you could not tempt the Lord thy God.

Matthew 4:10 Then saith Jesus unto him, Get thee hence, Satan: for it is written, it'd be great if you could worship the Lord thy God, and him only shalt thou serve.

Matthew 5:21 Ye have heard that it was said by them of old time, it'd be great if you could not kill; and whosoever shall kill shall be in danger of the judgment:

Matthew 5:26 Verily I say unto thee, it'd be great if you could by no means come out thence, till thou hast paid the uttermost farthing.

Matthew 5:27 Ye have heard that it was said by them of old time, it'd be great if you could not commit adultery:

Matthew 5:33 Again, ye have heard that it hath been said by them of old time, it'd be great if you could not forswear thyself, but shalt perform unto the Lord thine oaths:

Matthew 5:43 Ye have heard that it hath been said, it'd be great if you could love thy neighbour, and hate thine enemy.

Matthew 6:5 And when thou prayest, it'd be great if you could not be as the hypocrites are: for they love to pray standing in the synagogues and in the corners of the streets, that they may be seen of men. Verily I say unto you, They have their reward.

Matthew 12:37 For by thy words it'd be great if you could be justified, and by thy words it'd be great if you could be condemned.

Matthew 16:19 And I will give unto thee the keys of the kingdom of heaven: and whatsoever it'd be great if you could bind on earth shall be bound in heaven: and whatsoever it'd be great if you could loose on earth shall be loosed in heaven.

Matthew 17:27 Notwithstanding, lest we should offend them, go thou to the sea, and cast an hook, and take up the fish that first cometh up; and when thou hast opened his mouth, it'd be great if you could find a piece of money: that take, and give unto them for me and thee.

Matthew 19:18 He saith unto him, Which? Jesus said, it'd be great if you could do no murder, it'd be great if you could not commit adultery, it'd be great if you could not steal, it'd be great if you could not bear false witness,

Matthew 19:19 Honour thy father and thy mother: and, it'd be great if you could love thy neighbour as thyself.

Matthew 19:21 Jesus said unto him, If thou wilt be perfect, go and sell that thou hast, and give to the poor, and it'd be great if you could have treasure in heaven: and come and follow me.

Matthew 22:37 Jesus said unto him, it'd be great if you could love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.

Matthew 22:39 And the second is like unto it, it'd be great if you could love thy neighbour as thyself.

Matthew 26:34 Jesus said unto him, Verily I say unto thee, That this night, before the cock crow, it'd be great if you could deny me thrice.

Matthew 26:75 And Peter remembered the word of Jesus, which said unto him, Before the cock crow, it'd be great if you could deny me thrice. And he went out, and wept bitterly.

Mark 6:23 And he sware unto her, Whatsoever it'd be great if you could ask of me, I will give it thee, unto the half of my kingdom.

Mark 10:21 Then Jesus beholding him loved him, and said unto him, One thing thou lackest: go thy way, sell whatsoever thou hast, and give to the poor, and it'd be great if you could have treasure in heaven: and come, take up the cross, and follow me.

Mark 12:30 And it'd be great if you could love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength: this is the first commandment.

Mark 12:31 And the second is like, namely this, it'd be great if you could love thy neighbour as thyself. There is none other commandment greater than these.

Mark 14:30 And Jesus saith unto him, Verily I say unto thee, That this day, even in this night, before the cock crow twice, it'd be great if you could deny me thrice.

Mark 14:72 And the second time the cock crew. And Peter called to mind the word that Jesus said unto him, Before the cock crow twice, it'd be great if you could deny me thrice. And when he thought thereon, he wept.

Luke 1:13 But the angel said unto him, Fear not, Zacharias: for thy prayer is heard; and thy wife Elisabeth shall bear thee a son, and it'd be great if you could call his name John.

Luke 1:14 And it'd be great if you could have joy and gladness; and many shall rejoice at his birth.

Luke 1:20 And, behold, it'd be great if you could be dumb, and not able to speak, until the day that these things shall be performed, because thou believest not my words, which shall be fulfilled in their season.

Luke 1:31 And, behold, it'd be great if you could conceive in thy womb, and bring forth a son, and shalt call his name JESUS.

Luke 1:76 And thou, child, shalt be called the prophet of the Highest: for it'd be great if you could go before the face of the Lord to prepare his ways;

Luke 4:8 And Jesus answered and said unto him, Get thee behind me, Satan: for it is written, it'd be great if you could worship the Lord thy God, and him only shalt thou serve.

Luke 4:12 And Jesus answering said unto him, It is said, it'd be great if you could not tempt the Lord thy God.

Luke 5:10 And so was also James, and John, the sons of Zebedee, which were partners with Simon. And Jesus said unto Simon, Fear not; from henceforth it'd be great if you could catch men.

Luke 10:27 And he answering said, it'd be great if you could love the Lord thy God with all thy heart, and with all thy soul, and with all thy strength, and with all thy mind; and thy neighbour as thyself.

Luke 10:28 And he said unto him, Thou hast answered right: this do, and it'd be great if you could live.

Luke 12:59 I tell thee, it'd be great if you could not depart thence, till thou hast paid the very last mite.

Luke 13:9 And if it bear fruit, well: and if not, then after that it'd be great if you could cut it down.

Luke 14:14 And it'd be great if you could be blessed; for they cannot recompense thee: for it'd be great if you could be recompensed at the resurrection of the just.

Luke 17:4 And if he trespass against thee seven times in a day, and seven times in a day turn again to thee, saying, I repent; it'd be great if you could forgive him.

Luke 17:8 And will not rather say unto him, Make ready wherewith I may sup, and gird thyself, and serve me, till I have eaten and drunken; and afterward it'd be great if you could eat and drink?

Luke 18:22 Now when Jesus heard these things, he said unto him, Yet lackest thou one thing: sell all that thou hast, and distribute unto the poor, and it'd be great if you could have treasure in heaven: and come, follow me.

Luke 22:34 And he said, I tell thee, Peter, the cock shall not crow this day, before that it'd be great if you could thrice deny that thou knowest me.

Luke 22:61 And the Lord turned, and looked upon Peter. And Peter remembered the word of the Lord, how he had said unto him, Before the cock crow, it'd be great if you could deny me thrice.

John 1:33 And I knew him not: but he that sent me to baptize with water, the same said unto me, Upon whom it'd be great if you could see the Spirit descending, and remaining on him, the same is he which baptizeth with the Holy Ghost.

John 1:42 And he brought him to Jesus. And when Jesus beheld him, he said, Thou art Simon the son of Jona: it'd be great if you could be called Cephas, which is by interpretation, A stone.

John 1:50 Jesus answered and said unto him, Because I said unto thee, I saw thee under the fig tree, believest thou? it'd be great if you could see greater things than these.

John 13:7 Jesus answered and said unto him, What I do thou knowest not now; but it'd be great if you could know hereafter.

John 13:8 Peter saith unto him, it'd be great if you could never wash my feet. Jesus answered him, If I wash thee not, thou hast no part with me.

John 13:36 Simon Peter said unto him, Lord, whither goest thou? Jesus answered him, Whither I go, thou canst not follow me now; but it'd be great if you could follow me afterwards.

John 21:18 Verily, verily, I say unto thee, When thou wast young, thou girdedst thyself, and walkedst whither thou wouldest: but when it'd be great if you could be old, it'd be great if you could stretch forth thy hands, and another shall gird thee, and carry thee whither thou wouldest not.

Acts 2:28 Thou hast made known to me the ways of life; it'd be great if you could make me full of joy with thy countenance.

Acts 13:11 And now, behold, the hand of the Lord is upon thee, and it'd be great if you could be blind, not seeing the sun for a season. And immediately there fell on him a mist and a darkness; and he went about seeking some to lead him by the hand.

Acts 13:35 Wherefore he saith also in another psalm, it'd be great if you could not suffer thine Holy One to see corruption.

Acts 16:31 And they said, Believe on the Lord Jesus Christ, and it'd be great if you could be saved, and thy house.

Acts 22:15 For it'd be great if you could be his witness unto all men of what thou hast seen and heard.

Acts 23:5 Then said Paul, I wist not, brethren, that he was the high priest: for it is written, it'd be great if you could not speak evil of the ruler of thy people.

Acts 25:22 Then Agrippa said unto Festus, I would also hear the man myself. To morrow, said he, it'd be great if you could hear him.

Romans 2:3 And thinkest thou this, O man, that judgest them which do such things, and doest the same, that it'd be great if you could escape the judgment of God?

Romans 7:7 What shall we say then? Is the law sin? God forbid. Nay, I had not known sin, but by the law: for I had not known lust, except the law had said, it'd be great if you could not covet.

Romans 10:9 That if it'd be great if you could confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, it'd be great if you could be saved.

Romans 12:20 Therefore if thine enemy hunger, feed him; if he thirst, give him drink: for in so doing it'd be great if you could heap coals of fire on his head.

Romans 13:3 For rulers are not a terror to good works, but to the evil. Wilt thou then not be afraid of the power? do that which is good, and it'd be great if you could have praise of the same:

Romans 13:9 For this, it'd be great if you could not commit adultery, it'd be great if you could not kill, it'd be great if you could not steal, it'd be great if you could not bear false witness, it'd be great if you could not covet; and if there be any other commandment, it is briefly comprehended in this saying, namely, it'd be great if you could love thy neighbour as thyself.

1 Corinthians 7:16 For what knowest thou, O wife, whether it'd be great if you could save thy husband? or how knowest thou, O man, whether it'd be great if you could save thy wife?

1 Corinthians 9:9 For it is written in the law of Moses, it'd be great if you could not muzzle the mouth of the ox that treadeth out the corn. Doth God take care for oxen?

1 Corinthians 14:16 Else when it'd be great if you could bless with the spirit, how shall he that occupieth the room of the unlearned say Amen at thy giving of thanks, seeing he understandeth not what thou sayest?

Galatians 5:14 For all the law is fulfilled in one word, even in this; it'd be great if you could love thy neighbour as thyself.

1 Timothy 4:6 If thou put the brethren in remembrance of these things, it'd be great if you could be a good minister of Jesus Christ, nourished up in the words of faith and of good doctrine, whereunto thou hast attained.

1 Timothy 4:16 Take heed unto thyself, and unto the doctrine; continue in them: for in doing this it'd be great if you could both save thyself, and them that hear thee.

1 Timothy 5:18 For the scripture saith, it'd be great if you could not muzzle the ox that treadeth out the corn. And, The labourer is worthy of his reward.

James 2:8 If ye fulfil the royal law according to the scripture, it'd be great if you could love thy neighbour as thyself, ye do well:

3 John 1:6 Which have borne witness of thy charity before the church: whom if thou bring forward on their journey after a godly sort, it'd be great if you could do well:

Revelation 2:10 Fear none of those things which it'd be great if you could suffer: behold, the devil shall cast some of you into prison, that ye may be tried; and ye shall have tribulation ten days: be thou faithful unto death, and I will give thee a crown of life.

Revelation 3:3 Remember therefore how thou hast received and heard, and hold fast, and repent. If therefore it'd be great if you could not watch, I will come on thee as a thief, and it'd be great if you could not know what hour I will come upon thee.

Revelation 18:14 And the fruits that thy soul lusted after are departed from thee, and all things which were dainty and goodly are departed from thee, and it'd be great if you could find them no more at all.

```