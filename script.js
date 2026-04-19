document.documentElement.classList.add("js");

const STORY_SUBMISSION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfCem22HQOIS5jlcQKeNLmisV8W1oXVRd6TmXMJii0-VJpMfw/viewform?usp=dialog";
const CONTACT_EMAIL = "projectsecondvoice@gmail.com";
const EXTERNAL_LINK_REL = "noopener noreferrer";
const FEATURED_STORY_PREVIEW_COUNT = 5;
const HOMEPAGE_PRIORITY_FEATURED_SLUG = "robert-vivar-story";

const stories = [
  {
    order: 1,
    slug: "liam-conejo-ramos-story",
    images: [
      "stories/liam-conejo-ramos-story/1.png",
      "stories/liam-conejo-ramos-story/2.png",
      "stories/liam-conejo-ramos-story/3.png",
      "stories/liam-conejo-ramos-story/4.png",
      "stories/liam-conejo-ramos-story/5.png",
      "stories/liam-conejo-ramos-story/6.png",
      "stories/liam-conejo-ramos-story/7.png",
      "stories/liam-conejo-ramos-story/8.png",
      "stories/liam-conejo-ramos-story/9.png",
      "stories/liam-conejo-ramos-story/10.png",
      "stories/liam-conejo-ramos-story/11.png"
    ],
    featured: true,
    isNewest: true,
    title: "Liam Conejo Ramos’s Story",
    summary: "Today, we are sharing the story of Liam Conejo Ramos. Ramos is a five-year-old child who lives in Minnesota with family. He is one of four children who have been detained in the Columbia Heights school district these past two weeks, after immigration enforcement has surged in Minnesota. Five-year-old Ramos had just been picked up from preschool by his father, Adrian Alexander Conejo Arias, when they were both apprehended by immigration officers on the freeway, searching for Ramos’s father. Arias had a pending asylum case and had no deportation order. Arias was forced to flee when immigration officers targeted him, and Ramos would be detained alongside his father later. Ramos was driven to his home, where he acted as bait, being told to knock on the front door to be let in. Adults living in Ramos’s house begged immigration officers to let Ramos go, but they denied their request and detained Ramos alongside his father. Ramos’s older brother, who was in middle school, would return home a little later and find both Ramos and his father missing. Their mother would not know Ramos and her husband's whereabouts until after 24 hours, when Ramos’s father called her in Texas, notifying the anxious mother that they were both okay. Currently, both Ramos and his father are still in detention. A GoFundMe has been set up to fund Ramos’s release: https://www.gofundme.com/f/help-bring-5yearold-liam-home. The sources used for this post include NBC News, The Guardian, Fox 9, CBS News, Wall Street Journal, ABC News, and GoFundMe. If you would like to learn more about Ramos’s story, we encourage you to read the reporting published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7600585977748327710?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#liam-conejo-ramos-story"
  },
  {
    order: 2,
    slug: "alberto-cabral-story",
    images: [
      "stories/alberto-cabral-story/1.png",
      "stories/alberto-cabral-story/2.png",
      "stories/alberto-cabral-story/3.png",
      "stories/alberto-cabral-story/4.png",
      "stories/alberto-cabral-story/5.png",
      "stories/alberto-cabral-story/6.png",
      "stories/alberto-cabral-story/7.png",
      "stories/alberto-cabral-story/8.png"
    ],
    featured: true,
    isNewest: false,
    title: "Alberto Cabral's Story",
    summary: "Today, we are sharing the story of Alberto Cabral. Cabral came to the United States when he was only 15 years old from Mexico. Coming to the United States, Cabral spoke limited English and didn't know how to properly navigate the immigration process. Cabral has worked for a landscaper in the Los Angeles area for decades and has lived in the L.A area for over 60 years. Neighbors and clients express their worry because Cabral had started suffering from health conditions in the past few years, such as heart disease and diabetes. Despite these conditions, Cabral has never once missed a job. During a job in West Hollywood, Cabral would be surrounded by immigration officers and detained. Cabral was transferred to a detention facility in Los Angeles, where he would voluntarily self-deport because of his medical conditions. Cabral was the main benefactor for his 97-year-old mother and 70-year-old long-time girlfriend. A GoFundMe has been set up to support Cabral's next chapter and to help him with his medical expenses, as well as help his family. If you would like to donate, feel free to donate here: https://www.gofundme.com/f/Alberto73 The sources we used for this post come from the organizations NBC News, GoFundMe, KTLA, and WEHO Times. If you would like to learn more about Cabral's story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7605044987629456653?is_from_webapp=1&sender_device=pc",
    link: "stories.html#alberto-cabral-story"
  },
  {
    order: 3,
    slug: "mario-guevara-story",
    images: [
      "stories/mario-guevara-story/1.png",
      "stories/mario-guevara-story/2.png",
      "stories/mario-guevara-story/3.png",
      "stories/mario-guevara-story/4.png",
      "stories/mario-guevara-story/5.png",
      "stories/mario-guevara-story/6.png",
      "stories/mario-guevara-story/7.png",
      "stories/mario-guevara-story/8.png",
      "stories/mario-guevara-story/9.png",
      "stories/mario-guevara-story/10.png",
      "stories/mario-guevara-story/11.png"
    ],
    featured: true,
    isNewest: false,
    title: "Mario Guevara's Story",
    summary: "Today, we are sharing the story of Mario Guevara, a Salvadoran journalist who was wrongfully detained in a recent protest. Guevara had been recording the whole protest and had been far away from the scene, making sure not to disrupt and get in the way of the police. Yet, he was still arrested. Guevara had fled El Salvador with his family after he had received multiple threats as a reporter. He immigrated to Georgia, where he would get a worker permit, allowing him to legally stay and work in the United States. His recent arrest has sparked outrage and nervousness as if ICE takes custody of his case, he may very well be deported, even though he is legally allowed to stay in the United States. The sources we used in this post come from Newsweek, NBC, AP, NPR, MediaMoves, and LawProfessors. If you would like to learn more about Guevara's story, we encourage you to read the stories written by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7521168613756210445?is_from_webapp=1&sender_device=pc",
    link: "stories.html#mario-guevara-story"
  },
  {
    order: 4,
    slug: "sergio-garcia-story",
    images: [
      "stories/sergio-garcia-story/1.png",
      "stories/sergio-garcia-story/2.png",
      "stories/sergio-garcia-story/3.png",
      "stories/sergio-garcia-story/4.png",
      "stories/sergio-garcia-story/5.png",
      "stories/sergio-garcia-story/6.png",
      "stories/sergio-garcia-story/7.png",
      "stories/sergio-garcia-story/8.png",
      "stories/sergio-garcia-story/9.png",
      "stories/sergio-garcia-story/10.png",
      "stories/sergio-garcia-story/11.png"
    ],
    featured: true,
    isNewest: false,
    title: "Sergio Garcia’s Story",
    summary: "Today, we are sharing the story of Sergio Garcia, a renowned and popular chef in Waco, Texas. Garcia was 29 years old, working construction in Veracruz, Mexico, when he realized that he wanted to pursue his passion in cuisine. His bosses' reluctance to give an increase in his wages solidified this decision for him. Garcia came to the United States from Mexico on a visa. Once he got to America, he started working in a riverboat restaurant, where his boss would allow him to work overtime to practice his ceviche making. During his time working at this restaurant, he would also meet his wife, Sandra. Garcia started off selling ceviche to pick-up soccer players in styrofoam cups; however, this quickly transformed into him selling it out of a van. In no time, Garcia and Sandra owned a popular restaurant that had many loyal customers. The couple would move to a bigger and better location where they would garner the attention of President Bush and the White House Press Corps. Despite the success, behind the scenes, Garcia and Sandra were battling for their citizenship. Garcia and Sandra worked for 25 years, hiring lawyers and attorneys, to try and get their citizenship; however, all their efforts were to no avail. On Tuesday, March 25, Garcia’s worst nightmare came true. He was detained by immigration officers and deported within 24 hours, leaving behind his wife and his 4 U.S.-born children. Garcia was unable to contact his family for over 36 days, and now his family is working on getting him back into the United States. Sandra is left doing what she can to fund Garcia’s legal fees and to keep making a living. The sources we used for this story come from the organizations The Texas Tribune, NY Post, Daily Mail, AOL, and Facebook. If you would like to learn more about Garcia’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7560477591384214798?is_from_webapp=1&sender_device=pc",
    link: "stories.html#sergio-garcia-story"
  },
  {
    order: 5,
    slug: "juan-francisco-mendez-story",
    images: [
      "stories/juan-francisco-mendez-story/1.png",
      "stories/juan-francisco-mendez-story/2.png",
      "stories/juan-francisco-mendez-story/3.png",
      "stories/juan-francisco-mendez-story/4.png",
      "stories/juan-francisco-mendez-story/5.png",
      "stories/juan-francisco-mendez-story/6.png",
      "stories/juan-francisco-mendez-story/7.png",
      "stories/juan-francisco-mendez-story/8.png",
      "stories/juan-francisco-mendez-story/9.png",
      "stories/juan-francisco-mendez-story/10.png",
      "stories/juan-francisco-mendez-story/11.png",
      "stories/juan-francisco-mendez-story/12.png",
      "stories/juan-francisco-mendez-story/13.png"
    ],
    featured: true,
    isNewest: false,
    title: "Juan Francisco Mendez's Story",
    summary: "Today, we are sharing the story of Juan Francisco Mendez. Mendez came to the United States 4 years ago from Guatemala due to fear of facing persecution. Mendez’s wife and 9-year-old son had already been granted asylum, so Mendez applied for derivative asylum, a type of asylum granted to individuals who already had family members who were granted asylum. Mendez worked in the seafood industry. Mendez was in the process of being granted asylum. He was going to a dental appointment when he was stopped by immigration officers. The officers broke his window and pulled both Mendez and his wife out of the car. Mendez has no criminal record or deportation orders. Mendez was detained and sent to a detention facility in New Hampshire. Thankfully, Mendez was able to be released on a bond of $1500 and was finally able to reunite with his family. The sources we used for this post come from the organizations AP News, NHPR, Rhode Island PBS, Boston Globe, Cape and Islands, New Bedford Light, WCVB, and NBC. If you would like to learn more about Mendez’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7537511161764351245?is_from_webapp=1&sender_device=pc",
    link: "stories.html#juan-francisco-mendez-story"
  },
  {
    order: 6,
    slug: "maurilio-ambrocio-story",
    images: [
      "stories/maurilio-ambrocio-story/1.png",
      "stories/maurilio-ambrocio-story/2.png",
      "stories/maurilio-ambrocio-story/3.png",
      "stories/maurilio-ambrocio-story/4.png",
      "stories/maurilio-ambrocio-story/5.png",
      "stories/maurilio-ambrocio-story/6.png",
      "stories/maurilio-ambrocio-story/7.png",
      "stories/maurilio-ambrocio-story/8.png",
      "stories/maurilio-ambrocio-story/9.png",
      "stories/maurilio-ambrocio-story/10.png",
      "stories/maurilio-ambrocio-story/11.png",
      "stories/maurilio-ambrocio-story/12.png"
    ],
    featured: true,
    isNewest: false,
    title: "Maurilio Ambrocio's Story",
    summary: "Today, we are sharing the story of Maurilio Ambrocio. He is a pastor in Florida and has been living in the United States legally for 26 years through a stay of removal contract with immigration officers. This meant that as long as he met up with immigration officers every year and had proof that he had no recent convictions or arrests, he would be able to legally stay in the United States, and immigration officers would not be allowed to deport him. That recently changed, though. A few weeks ago, immigration officers took Maurilio and detained him, putting him in immigration detention. Maurilio had been convicted for driving without a license in 2013, a very minor mistake that would cost him his life in the United States. He was stripped of his right to be here and taken away from his family, all due to a mistake he had made decades ago. Maurilio is not a criminal, nor is he contributing to the United States. He is a respected and loving pastor and father who tried his best to follow immigration rules and follow the steps in place for him to remain here legally. A GoFundMe had been set up by Maurilio’s family, and if you would like to support Maurilio’s situation, you can donate here: https://www.gofundme.com/f/help-pastor-ambrocio-ice-detention-crisis. The sources we used for this post were from NPR, GBH, and Newsweek. If you would like to learn more about Maurilio’s situation, we would encourage you to read those organizations’ stories about him. We want immigrants to get the respect they deserve and the empathy that every human should be given. Maurilio was an upstanding man in his community and was loved by his community and family. He should not be punished so harshly for a minor mistake he had made decades ago.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7520773915082280206?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#maurilio-ambrocio-story"
  },
  {
    order: 7,
    slug: "kilmar-abrego-garcia-story",
    images: [
      "stories/kilmar-abrego-garcia-story/1.png",
      "stories/kilmar-abrego-garcia-story/2.png",
      "stories/kilmar-abrego-garcia-story/3.png",
      "stories/kilmar-abrego-garcia-story/4.png",
      "stories/kilmar-abrego-garcia-story/5.png",
      "stories/kilmar-abrego-garcia-story/6.png",
      "stories/kilmar-abrego-garcia-story/7.png",
      "stories/kilmar-abrego-garcia-story/8.png",
      "stories/kilmar-abrego-garcia-story/9.png",
      "stories/kilmar-abrego-garcia-story/10.png",
      "stories/kilmar-abrego-garcia-story/11.png",
      "stories/kilmar-abrego-garcia-story/12.png",
      "stories/kilmar-abrego-garcia-story/13.png",
      "stories/kilmar-abrego-garcia-story/14.png"
    ],
    featured: false,
    isNewest: false,
    title: "Kilmar Abrego Garcia's Story",
    summary: "Today, we are sharing the story of Kilmar Abrego Garcia. Garcia came to the United States from El Salvador after repeated gang threats from infamous gangs in his home country. Garcia decided to come to the United States during his teenage years because his brother had already been a U.S resident, and Garcia believed it would be a safer place to build a life. Garcia moved to Maryland with his wife and children, who are U.S citizens. Garcia worked in construction to provide for his family, consisting of his wife, children, and stepchildren. In 2019, while waiting for a ride in a Home Depot parking lot, Garcia was picked up by police officers. Immigration officers tried to deport him in speculation that he was a part of a notorious El Salvadorian gang, not due to concrete evidence, but because of the clothes he wore. An immigration judge stopped this unlawful deportation, stating that his deportation would not be credible under the gang-threats he was facing in EL Salvador if he returned. Despite the ruling, Garcia continued to check in with immigration officers annually. In March of 2025, despite the ruling in 2019, Garcia’s lack of a criminal record, and his continuous visits with immigration officers, Garcia was deported and sent to El Salvador. Once in El Salvador, Garcia was put into an infamous maximum security prison called the CECOT. In prison, Garcia faced brutal beatings, sleep deprivation, and psychological torment. Garcia was brought back after officials realized the huge mistake they made in June of 2025. After returning, Garcia had multiple federal criminal charges filed against him. The allegations were tied to speculation back in 2016 and gang involvement, which Garcia already denied repeatedly. After returning, Garcia faced multiple arrests and detentions, even being threatened with deportation to Uganda, a country to which he had no ties. However, in December 2025, things took a turn for the better, and a judge ruled Garcia’s detention unlawful and prohibited the unnecessary detention and arrest of Garcia. Garcia was finally able to go back to his family in Maryland. The sources we used for this post come from the organizations Christian Century, Bloomberg, Maryland Matters, Tennessee Outlook, Human Rights Watch, ABC, CNN, CBS, and The New York Times. If you would like to learn more about Garcia’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7584290465344785677?is_from_webapp=1&sender_device=pc",
    link: "stories.html#kilmar-abrego-garcia-story"
  },
  {
    order: 8,
    slug: "mahdi-khanbabazadeh-story",
    images: [
      "stories/mahdi-khanbabazadeh-story/1.png",
      "stories/mahdi-khanbabazadeh-story/2.png",
      "stories/mahdi-khanbabazadeh-story/3.png",
      "stories/mahdi-khanbabazadeh-story/4.png",
      "stories/mahdi-khanbabazadeh-story/5.png",
      "stories/mahdi-khanbabazadeh-story/6.png",
      "stories/mahdi-khanbabazadeh-story/7.png",
      "stories/mahdi-khanbabazadeh-story/8.png",
      "stories/mahdi-khanbabazadeh-story/9.png",
      "stories/mahdi-khanbabazadeh-story/10.png",
      "stories/mahdi-khanbabazadeh-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Mahdi Khanbabazadeh’s Story",
    summary: "Today, we are sharing the story of Mahdi Khanbabazadeh. Mahdi came to the United States from Iran on a student visa. After marrying his wife, who is a U.S citizen, Mahdi was sponsored for a green card and had already applied and finished his interview. He and his wife had a child who was still in preschool. Mahdi would be stopped by immigration officers when he was on his way to drop off his kid at preschool. Immigration officers would forcefully break his window, even after repeated statements by Mahdi that he was already coming out. Mahdi is a 38-year-old chiropractor. Immigration officers reported that they had detained Mahdi due to his visa expiring, but close family relatives had already stated numerous times that Mahdi was awaiting his green card status. If you would like to support Mahdi’s family in this time of need, feel free to donate to their GoFundMe page here: https://www.gofundme.com/f/stand-with-mahdi-khanbabazadeh-donate-now The sources we used for this post come from the organizations The Guardian, NBC, GoFundMe, and Oregon Public Broadcasting Service. If you would like to learn more about Mahdi’s story, we encourage you to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7532699778174553399?is_from_webapp=1&sender_device=pc",
    link: "stories.html#mahdi-khanbabazadeh-story"
  },
  {
    order: 9,
    slug: "robert-vivar-story",
    images: [
      "stories/robert-vivar-story/1.png",
      "stories/robert-vivar-story/2.png",
      "stories/robert-vivar-story/3.png",
      "stories/robert-vivar-story/4.png",
      "stories/robert-vivar-story/5.png",
      "stories/robert-vivar-story/6.png",
      "stories/robert-vivar-story/7.png",
      "stories/robert-vivar-story/8.png",
      "stories/robert-vivar-story/9.png",
      "stories/robert-vivar-story/10.png",
      "stories/robert-vivar-story/11.png"
    ],
    featured: true,
    isNewest: false,
    title: "Robert Vivar's Story",
    summary: "In light of the recent protests and raids going on in Los Angeles, Project Second Voice felt that it was necessary to share some of the stories of our local San Diego community and bring awareness to the inhumane and immoral acts ICE have committed against innocent legal immigrants. We hope that everybody tries their best to advocate and share the stories they have heard and seen with others on platforms such as TikTok to spread awareness and hopefully put a stop to these unlawful acts that violate our civil rights. The resource used in this slideshow comes from a fantastic nonprofit organization called the San Diego Immigrant Rights Consortium (SDIRC), dedicated to advocating for policies that advance the human and civil rights of immigrants and refugees. If you want to learn more about Robert's story, you can find a link to the post on the last slide that brings you to the SDIRC post. We encourage you to spread the message and share your own stories with the hashtag #breakthesilence.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7518954804215811358?is_from_webapp=1&sender_device=pc",
    link: "stories.html#robert-vivar-story"
  },
  {
    order: 10,
    slug: "rodney-taylor-story",
    images: [
      "stories/rodney-taylor-story/1.png",
      "stories/rodney-taylor-story/2.png",
      "stories/rodney-taylor-story/3.png",
      "stories/rodney-taylor-story/4.png",
      "stories/rodney-taylor-story/5.png",
      "stories/rodney-taylor-story/6.png",
      "stories/rodney-taylor-story/7.png",
      "stories/rodney-taylor-story/8.png",
      "stories/rodney-taylor-story/9.png",
      "stories/rodney-taylor-story/10.png",
      "stories/rodney-taylor-story/11.png",
      "stories/rodney-taylor-story/12.png",
      "stories/rodney-taylor-story/13.png",
      "stories/rodney-taylor-story/14.png",
      "stories/rodney-taylor-story/15.png"
    ],
    featured: false,
    isNewest: false,
    title: "Rodney Taylor’s Story",
    summary: "Today, we are sharing the story of Rodney Taylor. Taylor came to the United States from Liberia with his family when he was only 2 years old. He came to the United States on a medical visa due to needing medical surgery for a condition that affected his hands and feet since he was born. Now, Taylor is a double amputee and has been thriving in the United States. Taylor had applied for a green card and was awaiting approval during his time in the United States. He was a beloved barber in his community and had built a barber shop that also acted as a way for Taylor to educate his community on lung cancer risks and screenings. Taylor had also been engaged not too long ago and believed that this was the start of a beautiful and happy life. However, he would never expect to be detained at his doorstep by immigration officers days after his engagement. They treated him like a criminal and treated him like he were not a person. The reason for his detainment was due to a burglary charge that Taylor had gotten when he was only 16 years old. Taylor had pleaded guilty, and the judge who was responsible for the case had dismissed it. Taylor was not given due process and was scheduled to be deported immediately. A GoFundMe has been set up for Taylor and his family in this time of need. If you would like to support Taylor and help in funding his legal battle, feel free to donate here: https://www.gofundme.com/f/help-bring-rodney-home-support-his-legal-defense?attribution_id=sl:2e3213d1-ed19-43c5-819a-f369024e84f1&lang=en_US&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=instagram_story The sources we used for the post come from the organizations CNN, The Dallas Examiner, The Guardian, Fox 5, and 11 Alive. If you would like to learn more about Taylor’s story, we encourage you to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7532312762131828023?is_from_webapp=1&sender_device=pc",
    link: "stories.html#rodney-taylor-story"
  },
  {
    order: 11,
    slug: "la-small-business-owners-story",
    images: [
      "stories/la-small-business-owners-story/1.png",
      "stories/la-small-business-owners-story/2.png",
      "stories/la-small-business-owners-story/3.png",
      "stories/la-small-business-owners-story/4.png",
      "stories/la-small-business-owners-story/5.png",
      "stories/la-small-business-owners-story/6.png",
      "stories/la-small-business-owners-story/7.png",
      "stories/la-small-business-owners-story/8.png",
      "stories/la-small-business-owners-story/9.png",
      "stories/la-small-business-owners-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Immigration Raids in LA Affecting Small Business Owners",
    summary: "Today, we wanted to share how immigration raids and immigration injustice have been hurting local small business owners in Los Angeles. As a lot of people already know, Los Angeles has been facing an excess deportation activity and immigrants in Los Angeles are afraid due to the situation. This has not only affected individuals and families, but Los Angeles communities. Small business owners are the heart of many communities in Los Angeles and are being affected as many of them are run by hard working immigrants looking to make a living. We wanted to spread awareness on what the recent immigration raids have done to these small business owners. This is something that not only affects immigrants, but communities as a whole. We used information from CalMatters, LAist, Eater, and Reuters. If you would like to learn more on this ongoing situation, we suggest you look into the articles by CalMatters and LAist. #breakthesilence",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7519658061863193869?is_from_webapp=1&sender_device=pc",
    link: "stories.html#la-small-business-owners-story"
  },
  {
    order: 12,
    slug: "amalias-story",
    images: [
      "stories/amalias-story/1.png",
      "stories/amalias-story/2.png",
      "stories/amalias-story/3.png",
      "stories/amalias-story/4.png",
      "stories/amalias-story/5.png",
      "stories/amalias-story/6.png",
      "stories/amalias-story/7.png",
      "stories/amalias-story/8.png",
      "stories/amalias-story/9.png",
      "stories/amalias-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Amalia's Story",
    summary: "Today, we are sharing the story of Amalia and her family. Amalia is an 18-month-old toddler who was detained with her family early in December of this year and was just released recently. Her family fled from Venezuela due to political persecution because of their opposition to the political ideas of the president. They went on a long journey to the United States, and during this journey, Amalia was born in Mexico. The family would apply for asylum through the CBP One App and would wait in El Paso for further confirmation on their status. They would go to routine immigration check-ins and follow everything they needed to do. During one of these check-ins on December 11th, the family would be detained by immigration officials and sent to a detention facility in San Antonio, 500 miles away from the place they originally lived. Once inside the facility, Amalia's health deteriorated quickly, and she had conditions such as very high fevers, vomiting, and a struggle to breathe. Her worried parents would take her to the facility's medical center as her condition worsened. Each time, the medical center would dismiss threatening conditions and only provide the family with standard fever medication. Amalia's condition would turn life-threatening as her blood oxygen levels dropped to dangerous levels, forcing the facility to allow Amalia and her mother to go to a children's hospital, while her father waited in the facility, not knowing what would happen to his wife and daughter. Even during hospitalization, immigration officials monitored Amalia and her mother closely. Amalia's mother was terrified to find out that after treatment, she and Amalia would be sent back to the detention facility. During care, doctors gave Amalia special medical interventions to treat her breathing conditions; however, after returning to detention, immigration officials stripped Amalia of her interventions, worsening her condition and putting her back right where she started. Thankfully, after persistent advocacy and battling, Amalia and her family were released on Friday evening; however, this has been a traumatic experience that they will remember forever. The sources we used for this post come from the organizations NBC LA, PBS, The People, MPR News, and Reuters. If you would like to learn more about Amalia's story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7607957632581635341?is_from_webapp=1&sender_device=pc",
    link: "stories.html#amalias-story"
  },
  {
    order: 13,
    slug: "chaofeng-ge-story",
    images: [
      "stories/chaofeng-ge-story/1.png",
      "stories/chaofeng-ge-story/2.png",
      "stories/chaofeng-ge-story/3.png",
      "stories/chaofeng-ge-story/4.png",
      "stories/chaofeng-ge-story/5.png",
      "stories/chaofeng-ge-story/6.png",
      "stories/chaofeng-ge-story/7.png",
      "stories/chaofeng-ge-story/8.png"
    ],
    featured: false,
    isNewest: false,
    title: "Chaofeng Ge's Story",
    summary: "Today, we are sharing the story of Chaofeng Ge. Chaofeng Ge came to the United States-Mexico Border when he was 32 years old, immigrating from China with his family. He was arrested for unlawful entry and had a court date scheduled for a later date. After this, Ge started living in Queens, New York, where he was charged with unauthorized use and misuse of electronic devices. Ge was convicted for these charges and was sentenced to 6-12 months, and was handed over to immigration authorities from local custody. Ge was taken to a Pennsylvania detention center, where a Mandarin interpreter ensured that Ge had no past medical problems or complications. Four days later, in detention, however, Ge would be found with his hands and ankles tied up. Resuscitation methods were used, but to no avail, and Ge sadly passed away. Ge's brother was deeply hurt by Ge's passing and demands justice for the actions that led to Ge's unfortunate passing. The sources we used for this post come from the organizations Newsweek, South China Morning Post, Reuters, and Spectrum News. If you would like to learn more about Ge's story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7577557719222127886?is_from_webapp=1&sender_device=pc",
    link: "stories.html#chaofeng-ge-story"
  },
  {
    order: 14,
    slug: "luis-fernandez-story-against-ice",
    images: [
      "stories/luis-fernandez-story-against-ice/1.png",
      "stories/luis-fernandez-story-against-ice/2.png",
      "stories/luis-fernandez-story-against-ice/3.png",
      "stories/luis-fernandez-story-against-ice/4.png",
      "stories/luis-fernandez-story-against-ice/5.png",
      "stories/luis-fernandez-story-against-ice/6.png",
      "stories/luis-fernandez-story-against-ice/7.png",
      "stories/luis-fernandez-story-against-ice/8.png",
      "stories/luis-fernandez-story-against-ice/9.png",
      "stories/luis-fernandez-story-against-ice/10.png",
      "stories/luis-fernandez-story-against-ice/11.png",
      "stories/luis-fernandez-story-against-ice/12.png",
      "stories/luis-fernandez-story-against-ice/13.png",
      "stories/luis-fernandez-story-against-ice/14.png"
    ],
    featured: false,
    isNewest: false,
    title: "Luis Fernandez's Story Against ICE",
    summary: "Today, we are sharing the story of Luis Fernandez. Fernandez came to the United States from Ecuador in 1994. In the United States, he started working at a restraunt called the Square Diner. He has a wife and two children, one of whom is 17 years old, and another who is 9 years old. Fernandez was known as a hard worker amongst his co-workers, and he would commonly work overtime to provide for his family. Fernandez had also applied for asylum and was waiting for the status. Fernandez worked hard, had been in the United States for a very long time, paid taxes, and had two U.S citizen children. Fernandez would never expect to be detained during a regular appointment regarding his status. Fernandez was detained due to two charges, one from 2003 and another from 2014. Fernandez had called his daughter when he was being detained, assuring her to stay calm and that he was going to be detained and arrested for some time. His daughter also had to take extra shifts at a retail store to provide for their family with Fernandez gone. Fernandez was released on bond, and this made the family very excited. However, when his daughter went to pay it, a judge said he was no longer eligible to be released. Right now, with the main provider of the family gone, the family needs all the help they can get. If you would like to donate, feel free to donate to the GoFundMe here:https://www.gofundme.com/f/help-bring-luis-fernandez-back-home The sources we used for this post come from the organizations CBS, The Guardian, and The Tribeca Citizen. If you would like to learn more about Fernandez’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7544571591485672734?is_from_webapp=1&sender_device=pc",
    link: "stories.html#luis-fernandez-story-against-ice"
  },
  {
    order: 15,
    slug: "junior-dioses-story-against-ice",
    images: [
      "stories/junior-dioses-story-against-ice/1.png",
      "stories/junior-dioses-story-against-ice/2.png",
      "stories/junior-dioses-story-against-ice/3.png",
      "stories/junior-dioses-story-against-ice/4.png",
      "stories/junior-dioses-story-against-ice/5.png",
      "stories/junior-dioses-story-against-ice/6.png",
      "stories/junior-dioses-story-against-ice/7.png",
      "stories/junior-dioses-story-against-ice/8.png",
      "stories/junior-dioses-story-against-ice/9.png"
    ],
    featured: false,
    isNewest: false,
    title: "Junior Dioses's Story",
    summary: "Today, we are sharing the story of Junior Dioses. Dioses came to the United States 23 years ago from Peru. He holds a valid green card and has had no deportation orders. He has two minor convictions that did not qualify as grounds for deportation. Dioses graduated from Highland High School and runs a small business in Utah. He has a family and is a father of 5 children. Dioses had been coming home from a trip to Peru, where immigration officers would detain him. He was detained due to two prior convictions that were very minor and did not qualify as grounds for deportation. The convictions that Dioses was charged with were very minor: failing to stop for a police officer, and a disorderly conduct charge, one of which was in 2006 and another in 2019, respectively. Dioses was held in detention centers for 50 days before finally being released and able to go back home. The sources we used for this post come from the organizations KSLTV, FOX 13, and WCNC. If you would like to learn more about Dioses’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7536035196093648141?is_from_webapp=1&sender_device=pc",
    link: "stories.html#junior-dioses-story-against-ice"
  },
  {
    order: 16,
    slug: "narciso-barranco-story",
    images: [
      "stories/narciso-barranco-story/1.png",
      "stories/narciso-barranco-story/2.png",
      "stories/narciso-barranco-story/3.png",
      "stories/narciso-barranco-story/4.png",
      "stories/narciso-barranco-story/5.png",
      "stories/narciso-barranco-story/6.png",
      "stories/narciso-barranco-story/7.png",
      "stories/narciso-barranco-story/8.png",
      "stories/narciso-barranco-story/9.png",
      "stories/narciso-barranco-story/10.png",
      "stories/narciso-barranco-story/11.png",
      "stories/narciso-barranco-story/12.png"
    ],
    featured: false,
    isNewest: false,
    title: "Narciso Barranco’s Story",
    summary: "Today, we are sharing the story of Narciso Barranco. Barranco is an undocumented father of three Marines and has lived in the United States for over 3 decades. He had never had a clear path to citizenship until recently, when he applied to a program called Parole in Place, which would speed up his journey to citizenship. Barranco knows the risk posed by working and living in the United States undocumented, but he feels as if he needs to support his family and work. Barranco is a landscape worker and an upstanding Samaritan and father. Barranco would be approached by immigration officers and detained. While immigration officers were approaching Barranco, the nervous Barranco instinctively defended himself from being pepper-sprayed. While being handcuffed, Barranco is seen being punched by immigration officers while already on the ground. Thankfully, Barranco is scheduled to be released soon, and a bond has been placed to get Barranco out of jail. The sources we used for this post come from NBC LA, FOX LA, and The Guardian. If you would like to learn more about Barranco’s story, we suggest you read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7526766206578117901?is_from_webapp=1&sender_device=pc",
    link: "stories.html#narciso-barranco-story"
  },
  {
    order: 17,
    slug: "ward-sakeik-story",
    images: [
      "stories/ward-sakeik-story/1.png",
      "stories/ward-sakeik-story/2.png",
      "stories/ward-sakeik-story/3.png",
      "stories/ward-sakeik-story/4.png",
      "stories/ward-sakeik-story/5.png",
      "stories/ward-sakeik-story/6.png",
      "stories/ward-sakeik-story/7.png",
      "stories/ward-sakeik-story/8.png",
      "stories/ward-sakeik-story/9.png",
      "stories/ward-sakeik-story/10.png",
      "stories/ward-sakeik-story/11.png",
      "stories/ward-sakeik-story/12.png",
      "stories/ward-sakeik-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "Ward Sakeik’s Story",
    summary: "Today, we are sharing the story of Ward Sakeik. Sakiek came to the United States with her family when she was only 8 years old. Her family had applied for asylum, but were denied. The United States government could not legally deport them due to the fact that their family was considered stateless. Instead of deportation, the family was allowed to stay in the United States as long as they checked in annually with immigration officers. Sakeik complied and graduated from UT Arlington before becoming a wedding photographer. She would meet her newlywed husband Shaikh. Despite being allowed to stay in the United States, Sakeik still went through the process of applying for permanent residency and was waiting on her green card status. She had complied with U.S immigration laws for over 14 years and had checked in annually without missing an appointment. She also did not have a criminal record. Sakeik and Shaikh would go to the U.S Virgin Islands for their honeymoon. They would never expect that Sakeik would be detained by immigration officers when they returned home after the honeymoon. Sakiek was detained for over 5 months before being released. The sources we used for this post come from the organizations NBC, News Week, Kera News,  Voyage Dallas, Dallas News, Star Telegram, ABC, and NZ Herald. If you would like to learn more about Sakeik’s story, we encourage you to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7530492480374967607?is_from_webapp=1&sender_device=pc",
    link: "stories.html#ward-sakeik-story"
  },
  {
    order: 18,
    slug: "sae-joon-park-story",
    images: [
      "stories/sae-joon-park-story/1.png",
      "stories/sae-joon-park-story/2.png",
      "stories/sae-joon-park-story/3.png",
      "stories/sae-joon-park-story/4.png",
      "stories/sae-joon-park-story/5.png",
      "stories/sae-joon-park-story/6.png",
      "stories/sae-joon-park-story/7.png",
      "stories/sae-joon-park-story/8.png",
      "stories/sae-joon-park-story/9.png",
      "stories/sae-joon-park-story/10.png",
      "stories/sae-joon-park-story/11.png",
      "stories/sae-joon-park-story/12.png",
      "stories/sae-joon-park-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "US Purple Heart Army Veteran Sae Joon Park's Story",
    summary: "Just yesterday, United States Purple Heart Army Veteran Sae Joon Park had no choice but to leave the United States due to his past drug conviction. Although his drug conviction could be argued to be entirely his fault for ignoring his PTSD, his service in the military and dedication to the country he grew up in should not be overlooked. We believe everyone should be given second chances, and Sae Joon Park is a prime example of someone who deserved the benefit of the doubt. Park didn’t know he was suffering from PTSD, and looked towards drugs in hopes of destressing and helping him calm himself. He was convicted and put into jail for 3 years, where he served 2 and a half. In that time, he completely turned away from drugs and overcame his addiction. When he came out of prison, he was a new man. He had turned his life around and had become a loving son and dad. Yet, despite all the progress and sacrifices he has shown, he was forced to self-deport himself out of the United States, never being able to come back and see his children or parents again. He will be sent to a country where he has no family and no connections. We believe Sae Joon Park deserves a second chance, and his story deserves to be shared. We encourage you to share this story in hopes of spreading awareness and giving immigrants such as Sae Joon Park the chance they deserve. In this post, we used articles from NPR, Spectrum News, Local 12, KKTV, La Voce Di New York, and HuffPost. If you want to learn more about Park’s situation and story, we encourage you to read the articles by these organizations. Thank you, everyone, for the support, and we will continue to share the voices of immigrants and give them the awareness they deserve.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7520074438830738719?is_from_webapp=1&sender_device=pc",
    link: "stories.html#sae-joon-park-story"
  },
  {
    order: 19,
    slug: "ray-anderson-story",
    images: [
      "stories/ray-anderson-story/1.png",
      "stories/ray-anderson-story/2.png",
      "stories/ray-anderson-story/3.png",
      "stories/ray-anderson-story/4.png",
      "stories/ray-anderson-story/5.png",
      "stories/ray-anderson-story/6.png",
      "stories/ray-anderson-story/7.png",
      "stories/ray-anderson-story/8.png",
      "stories/ray-anderson-story/9.png",
      "stories/ray-anderson-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Ray Anderson's Story",
    summary: "Today, we are sharing the story of Ray Anderson Avila Ramirez. Ray came to the United States in 2013, migrating from Peru. He loves to go to the gym, walk his dog, and visit various beaches and parks with his fiancée. He and his fiancée had planned a future together in the United States, hoping to get married. Ray pays taxes, works hard, and has already applied for U.S citizenship and is awaiting the approval of his status. Ray and his fiancée’s dream was shattered right in front of them when he was detained by immigration officers in New York. Ray has no criminal record. Ray’s future is filled with ambiguity and concern from his family, with a scheduled meeting in Orange County coming up soon. Ray is in dire need of legal representation, and his case is very much winnable if he gets the proper attention and help. His friends and family are worried sick for him. If you would like to support Ray’s legal fees and pay for Ray’s legal representation, feel free to donate to the GoFundMe here: https://www.gofundme.com/f/help-ray-fight-ice-detention?attribution_id=sl:1d85ec39-3c9c-4746-92db-b9df162ac593&lang=en_US&ts=1758507592&utm_campaign=fp_sharesheet&utm_content=amp13_t1-amp17_ta&utm_medium=customer&utm_source=copy_link We are very grateful to be able to share Ray’s story, and we would like to thank @savingrayavilia for contacting us and providing us with information about Ray. If you would like to learn more about Ray Avilia’s story, we encourage you to check out their page.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7555325050837126431?is_from_webapp=1&sender_device=pc",
    link: "stories.html#ray-anderson-story"
  },
  {
    order: 20,
    slug: "heidys-story",
    images: [
      "stories/heidys-story/1.png",
      "stories/heidys-story/2.png",
      "stories/heidys-story/3.png",
      "stories/heidys-story/4.png",
      "stories/heidys-story/5.png",
      "stories/heidys-story/6.png",
      "stories/heidys-story/7.png",
      "stories/heidys-story/8.png",
      "stories/heidys-story/9.png",
      "stories/heidys-story/10.png",
      "stories/heidys-story/11.png",
      "stories/heidys-story/12.png",
      "stories/heidys-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "Heidy's Story",
    summary: "Today, we are sharing the story of Heidy, a refugee from Honduras. Heidy had been studying to become a teacher in Honduras before coming to the United States. She was in a toxic marriage and was being abused by her ex-husband. Heidy could not bear to witness her two-year-old daughter grow up in such a situation and decided to flee from Honduras and escape to the United States. Heidy’s journey to the United States was treacherous, having to cross rivers even when she didn’t know how to swim. Her two-year-old daughter gave her the courage and resolve to push through, however, and she and her daughter safely escaped to the United States. They would be stopped by immigration officials, however, and be put into a detention center. Even after repeated pleading and explaining her situation, Heidy was denied asylum by immigration officials. However, thankfully, Heidy was finally freed by legal service providers that pushed for Heidy’s asylum. Heidy would then be connected to NIJC’s legal team, helping her to create an asylum case, eventually getting her asylum and even citizenship in the United States. Now, Heidy is pursuing her dream of becoming a teacher in the United States, in her second semester of university. The source we used for this post comes from the organization NIJC. If you would like to learn more about Heidy’s story, we encourage you to check out the story they posted. If you would like to help individuals such as Heidy achieve their dreams, feel free to donate to NIJC at immigrantjustice.org/Ways-to-Help.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7568341557284261175?is_from_webapp=1&sender_device=pc",
    link: "stories.html#heidys-story"
  },
  {
    order: 21,
    slug: "rosario-gonzalez-story",
    images: [
      "stories/rosario-gonzalez-story/1.png",
      "stories/rosario-gonzalez-story/2.png",
      "stories/rosario-gonzalez-story/3.png",
      "stories/rosario-gonzalez-story/4.png",
      "stories/rosario-gonzalez-story/5.png",
      "stories/rosario-gonzalez-story/6.png",
      "stories/rosario-gonzalez-story/7.png",
      "stories/rosario-gonzalez-story/8.png",
      "stories/rosario-gonzalez-story/9.png",
      "stories/rosario-gonzalez-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Rosario Gonzalez’s Story",
    summary: "Today, we are sharing the story of Rosario Gonzalez. Gonzalez had moved to the United States from Mexico and has lived in the United States for over 28 years. In that time, he has become a beloved grandfather and father of 5 children, one of which had graduated from high school the day after he was detained. Gonazalez had been trying to find work so he could provide for his family, as he was the main provider for his family. He had trouble finding construction jobs recently due to the immigration raids that were sweeping the country. The family had advised and urged Gonzalez not to try and find work near areas that had been known for immigration raids, but the desperate Gonzalez felt a need to find work and provide for his family. He would be detained near a Home Depot and transferred to an immigration facility in Texas. Gonzalez’s daughter, Yamilet, had just graduated from high school the day after he was detained. Yamilet expresses her and her families devestation from the situation and prays that her father returns back home. Gonzalez is just one of the 330 innocent immigrants detained forcefully by immigration raids all across Los Angeles. If you would like to support and help Gonzalez’s family, feel free to donate to their GoFundMe to support Gonzalez’s journey back home here:https://www.gofundme.com/f/help-bring-rosario-home-support-his-family The sources we used for this post come from the organizations NBC LA and SIG TRIB. If you would like to learn more about Gonzalez’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7527548595566955789?is_from_webapp=1&sender_device=pc",
    link: "stories.html#rosario-gonzalez-story"
  },
  {
    order: 22,
    slug: "mahmoud-khalil-story",
    images: [
      "stories/mahmoud-khalil-story/1.png",
      "stories/mahmoud-khalil-story/2.png",
      "stories/mahmoud-khalil-story/3.png",
      "stories/mahmoud-khalil-story/4.png",
      "stories/mahmoud-khalil-story/5.png",
      "stories/mahmoud-khalil-story/6.png",
      "stories/mahmoud-khalil-story/7.png",
      "stories/mahmoud-khalil-story/8.png",
      "stories/mahmoud-khalil-story/9.png",
      "stories/mahmoud-khalil-story/10.png",
      "stories/mahmoud-khalil-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Mahmoud Khalil’s Story",
    summary: "Today, we are sharing the story of Mahmoud Khalil. Khalil was born in Syria to Palestinian refugees and witnessed the mistreatment and injustice occurring from a young age. He wanted to do something about it; he wanted to advocate and bring change in the face of injustice. Khalil would work hard and earn a degree in computer science at Lebanese American University. After, he would work at Jusoor, a Syrian-American non-profit. Khalil would work in the UK Foreign Office before moving to the United States and pursuing a master’s degree at Columbia University’s School of International and Public Affairs. He would meet his soon-to-be wife and get married, expecting a child in April. Khalil played an influential role in the protests at Columbia University in 2024, acting as a mediator between university officials and student activists. Although Khalil protested, he refrained from participating in student encampments out of fear of having his student visa revoked. Khalil would also secure his green card and permanent residency, but it is unclear when he did so. Khalil would never have expected to be detained outside his house and transferred to the Louisiana Detention Facility, where he would stay in poor conditions for 104 days. He would miss his child’s birth. Thankfully, after 104 days, he was released on bail; however, Khalil’s legal battle does not end here. The sources we used for this post come from the organizations NPR, BBC, AP News, and NBC. If you would like to learn more about Khalil’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7570898620472364301?is_from_webapp=1&sender_device=pc",
    link: "stories.html#mahmoud-khalil-story"
  },
  {
    order: 23,
    slug: "george-retes-story",
    images: [
      "stories/george-retes-story/1.png",
      "stories/george-retes-story/2.png",
      "stories/george-retes-story/3.png",
      "stories/george-retes-story/4.png",
      "stories/george-retes-story/5.png",
      "stories/george-retes-story/6.png",
      "stories/george-retes-story/7.png",
      "stories/george-retes-story/8.png",
      "stories/george-retes-story/9.png",
      "stories/george-retes-story/10.png",
      "stories/george-retes-story/11.png",
      "stories/george-retes-story/12.png"
    ],
    featured: false,
    isNewest: false,
    title: "George Retes's Story",
    summary: "Today, we are sharing the story of George Retes. Retes is a U.S. citizen and an army veteran. He is a father of 2 children, one of whom had just turned 3 years old. Retes joined the military when he was only 18 years old, serving 4 years. In those 4 years, he had also been deployed to Iraq. Now 25, Retes works as a security guard at Glass House Farms in Camarillo. Retes had been driving to work when he was stopped by immigration officers. The officers would break his window, pepper-spray him, and drag him out of the car, even after Retes repeated numerous times that he was a U.S. citizen. Retes was detained and sent to a detention center in downtown Los Angeles. During this time in detainment, he would miss his 3-year-old daughter’s birthday party. Retes had no charges against him. During his time in his cell, he was not allowed to shower or change clothes, despite being pepper-sprayed and being tear-gassed. Thankfully, after 3 days, he was released without any explanation for why he was detained and locked for 3 days. The sources we used for this post come from the organizations NBC, AP News, Military Times, ABC7, Click on Detroit, and TMZ. If you would like to learn more about Retes’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7537886432342428983?is_from_webapp=1&sender_device=pc",
    link: "stories.html#george-retes-story"
  },
  {
    order: 24,
    slug: "reza-zavvar-story",
    images: [
      "stories/reza-zavvar-story/1.png",
      "stories/reza-zavvar-story/2.png",
      "stories/reza-zavvar-story/3.png",
      "stories/reza-zavvar-story/4.png",
      "stories/reza-zavvar-story/5.png",
      "stories/reza-zavvar-story/6.png",
      "stories/reza-zavvar-story/7.png",
      "stories/reza-zavvar-story/8.png",
      "stories/reza-zavvar-story/9.png",
      "stories/reza-zavvar-story/10.png",
      "stories/reza-zavvar-story/11.png",
      "stories/reza-zavvar-story/12.png"
    ],
    featured: false,
    isNewest: false,
    title: "Reza Zavvar’s Story",
    summary: "Today, we are sharing the story of Reza Zavvar. Zavvar came to the United States from Iran when he was only 12 years old. His family was seeking higher education and wanted Zavvar to have a better education, so they came to the United States to give him this opportunity. Zavvar worked hard on his legal status and eventually secured a green card. He is a very caring uncle, friend, and son. The 54-year-old Zavvar recently moved back in with his mother to take care of his 94-year-old grandmother. While he was walking the family dog, he would be stopped by immigration officers and detained. The officers would then bring the dog back on the leash to the family’s house, much to the family’s shock and horror, seeing Zavvar missing. Zavvar was detained and sent to a detention center in Texas. The reason for his deportation was because of a misdemeanor dating back in the late 1990's. Zavvar had been flagged because of this misdemeanor in 2004 and was unable to come back to the United States as he had been travelling during this time. This issue would be resolved in 2007, and Zavvar was granted a withholding of removal, which allowed him to continue working and living in the United States. Zavvar is scheduled to be deported to a country that he has never known, such as Romania or Australia. The sources we used for this post come from the organizations NBC, News Week, and ABC. If you would like to learn more about Zavvar’s story, we encourage you to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7537145410050084151?is_from_webapp=1&sender_device=pc",
    link: "stories.html#reza-zavvar-story"
  },
  {
    order: 25,
    slug: "david-valdez-story",
    images: [
      "stories/david-valdez-story/1.png",
      "stories/david-valdez-story/2.png",
      "stories/david-valdez-story/3.png",
      "stories/david-valdez-story/4.png",
      "stories/david-valdez-story/5.png",
      "stories/david-valdez-story/6.png",
      "stories/david-valdez-story/7.png",
      "stories/david-valdez-story/8.png",
      "stories/david-valdez-story/9.png",
      "stories/david-valdez-story/10.png",
      "stories/david-valdez-story/11.png",
      "stories/david-valdez-story/12.png",
      "stories/david-valdez-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "David Valdéz's Story",
    summary: "Stories like David’s emphasize a need to speak out and raise awareness on such a serious topic in the United States. Hardworking, legal immigrants shouldn't be treated without respect and without empathy. David was legally allowed to be in the United States because of the sponsorship given to him by his son, who is a U.S citizen. He was allowed to live and work in the United States till he got his green card. David was also allowed to travel. David used this opportunity to visit his mother, whom he had not visited in a long time. He was detained when he returned and deported without a trial. The sources we used in this post come from the organizations NBC and KYMA. If you would like to learn more about David’s story, we encourage you to read the stories posted by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7523436837621320991?is_from_webapp=1&sender_device=pc",
    link: "stories.html#david-valdez-story"
  },
  {
    order: 26,
    slug: "felipe-de-jesus-hernandez-marcelo-story",
    images: [
      "stories/felipe-de-jesus-hernandez-marcelo-story/1.png",
      "stories/felipe-de-jesus-hernandez-marcelo-story/2.png",
      "stories/felipe-de-jesus-hernandez-marcelo-story/3.png",
      "stories/felipe-de-jesus-hernandez-marcelo-story/4.png",
      "stories/felipe-de-jesus-hernandez-marcelo-story/5.png",
      "stories/felipe-de-jesus-hernandez-marcelo-story/6.png",
      "stories/felipe-de-jesus-hernandez-marcelo-story/7.png",
      "stories/felipe-de-jesus-hernandez-marcelo-story/8.png",
      "stories/felipe-de-jesus-hernandez-marcelo-story/9.png"
    ],
    featured: false,
    isNewest: false,
    title: "Felipe de Jesus Hernandez Marcelo’s Story",
    summary: "Today, we are sharing the story of Felipe de Jesus Hernandez Marcelo. Marcelo came to the United States from his native country, Mexico, in 2021. He came to the United States seeking a better life for himself and his 9-year-old child. After coming to the United States, Marcelo settled in Iowa, where he worked a job in construction and provided for his son as a single father. Marcelo would be mugged on June 21, surviving a fatal shootout, and fleeing by car. He would drive away before collapsing on the streets, where he would be picked up and treated. When Marcelo went to the Iowa police station to retrieve his belongings, such as his cash and car, he was denied his belongings and detained due to an unpaid traffic ticket. Marcelo would be put into a detention facility where he was denied medication for five days, putting him in excruciating pain. Marcelo would be stuck in the detention center for 3 months, denied bond, unable to visit his 9-year-old son, unable to work his construction job to pay the bills, and unable to go to medical meetings for his wounds. Marcelo’s future in the United States is ambiguous and not certain; however, he is working hard to secure a visa so he can stay in the United States. The sources we used for this post come from the organizations NBC, The Independent, AP News, and Newsweek. If you would like to learn more about Marcelo’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7573519690446769421?is_from_webapp=1&sender_device=pc",
    link: "stories.html#felipe-de-jesus-hernandez-marcelo-story"
  },
  {
    order: 27,
    slug: "nory-sontay-ramos-story",
    images: [
      "stories/nory-sontay-ramos-story/1.png",
      "stories/nory-sontay-ramos-story/2.png",
      "stories/nory-sontay-ramos-story/3.png",
      "stories/nory-sontay-ramos-story/4.png",
      "stories/nory-sontay-ramos-story/5.png",
      "stories/nory-sontay-ramos-story/6.png",
      "stories/nory-sontay-ramos-story/7.png",
      "stories/nory-sontay-ramos-story/8.png",
      "stories/nory-sontay-ramos-story/9.png",
      "stories/nory-sontay-ramos-story/10.png",
      "stories/nory-sontay-ramos-story/11.png",
      "stories/nory-sontay-ramos-story/12.png",
      "stories/nory-sontay-ramos-story/13.png",
      "stories/nory-sontay-ramos-story/14.png",
      "stories/nory-sontay-ramos-story/15.png"
    ],
    featured: false,
    isNewest: false,
    title: "Nory Sontay Ramos’s Story",
    summary: "Today, we are sharing the story of Nory Sontay Ramos. Ramos is a 17-year-old high schooler in Westlake. Like any other kid, she was excited and looking forward to the upcoming school year, where she would be graduating from high school. Ramos immigrated to the United States with her mother when she was only 6 years old. They immigrated here without documents due to a lot of gang violence back in their home country, Guatemala. Ramos explains how many gangs had threatened her mother and her family, and their family had made the choice to leave the country in hopes of making a better life in the United States. Ramos’s father did not come with them and unfortunately passed away a few weeks after Ramos and her mother made it to the United States. Ramos and her mother did not know English or Spanish at all, and had to learn English from the ground up with the help of some of her cousins. Ramos grew up like every other kid in the United States. She loved listening to music from artists such as The Weeknd, and loved to watch Netflix shows such as \"Cobra Kai\" and \"Stranger Things\". Ramos lived here for over a decade and was an honor student and athlete at her high school in Westlake. This would all change, however, when Ramos and her mother were detained during an immigration check-in. They were detained and deported to Guatemala. Ramos and her mother were not criminals and had escaped Guatemala, seeking asylum. They had no path to citizenship but still did the best they could with what they were offered. We believe immigrants deserve a chance and a pathway to citizenship should not be so inaccessible to many immigrants who seek to live in the United States. Ramos was just 17 years old when she was deported to Guatemala and separated from all her friends and the country she had grown up in. The sources we used for this post come from the organizations 19th News, NBC LA, and Teen Vogue. If you would like to learn more about Ramos’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7526032097249692958?is_from_webapp=1&sender_device=pc",
    link: "stories.html#nory-sontay-ramos-story"
  },
  {
    order: 28,
    slug: "brenda-martinez-story",
    images: [
      "stories/brenda-martinez-story/1.png",
      "stories/brenda-martinez-story/2.png",
      "stories/brenda-martinez-story/3.png",
      "stories/brenda-martinez-story/4.png",
      "stories/brenda-martinez-story/5.png",
      "stories/brenda-martinez-story/6.png",
      "stories/brenda-martinez-story/7.png",
      "stories/brenda-martinez-story/8.png",
      "stories/brenda-martinez-story/9.png",
      "stories/brenda-martinez-story/10.png",
      "stories/brenda-martinez-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Brenda Martinez’s Story",
    summary: "People like Brenda Martinez emphasize a need for immigration policies to change. Brenda was taken to the U.S. when she was just a toddler, and having to accept the fact that she isn’t like the rest of her peers is heartbreaking. Martinez is not a criminal, nor has she gotten any deportation orders, yet she still has no clear path to citizenship. The only path she was offered was due to her husband's sponsorship as an American citizen, but this can take years before being accepted, something Martinez and her family can’t risk. Martinez’s only choice is to leave the U.S. with her husband and move to a country she has hardly known, leaving everyone and everything behind. We believe there needs to be a change that better equips immigrants with the necessary tools to be able to make a path towards citizenship that doesn’t have such a length process. Martinez had no choice but to leave the place she grew up in and go to a foreign country. The sources we used for this post are from Newsbusters and CBS News. If you want to learn more about Martinez’s story, we encourage you to read the stories that were published by these organizations. If you or anyone you know, have any stories they would like to share about their experience as immigrants, we would love to hear it. If you feel comfortable, feel free to message us and we will gladly share your story to spread awareness for the millions of immigrants that deserve a change.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7522323064671980814?is_from_webapp=1&sender_device=pc",
    link: "stories.html#brenda-martinez-story"
  },
  {
    order: 29,
    slug: "jose-gregorio-gonzalez-story",
    images: [
      "stories/jose-gregorio-gonzalez-story/1.png",
      "stories/jose-gregorio-gonzalez-story/2.png",
      "stories/jose-gregorio-gonzalez-story/3.png",
      "stories/jose-gregorio-gonzalez-story/4.png",
      "stories/jose-gregorio-gonzalez-story/5.png",
      "stories/jose-gregorio-gonzalez-story/6.png",
      "stories/jose-gregorio-gonzalez-story/7.png",
      "stories/jose-gregorio-gonzalez-story/8.png",
      "stories/jose-gregorio-gonzalez-story/9.png",
      "stories/jose-gregorio-gonzalez-story/10.png",
      "stories/jose-gregorio-gonzalez-story/11.png",
      "stories/jose-gregorio-gonzalez-story/12.png",
      "stories/jose-gregorio-gonzalez-story/13.png",
      "stories/jose-gregorio-gonzalez-story/14.png"
    ],
    featured: false,
    isNewest: false,
    title: "Jose Gregorio Gonzalez's Story",
    summary: "Today, we are sharing the story of Jose Gregorio Gonzalez. Gonzalez is of Venezuelan nationality and came to the United States to accompany his sick younger brother, who is suffering from end-stage renal disease. This is a disease that affects the kidneys, and his brother is in dire need of a transplant. Gonzalez came to the United States to accompany him in his health care, while also being his kidney donor. By transplanting his kidney through a paired kidney exchange, Gonzalez would be saving both his brother’s and another person’s lives. Gonzalez’s brother has to go through multiple 4-hour dialysis appointments every week to stay alive. Gonzalez would come to the United States and apply for asylum. He would not be granted asylum due to not passing an initial interview. Gonzalez was given a deportation order. While accompanying his brother to a dialysis appointment, Gonzalez would be detained by officers and put in a detention facility to await removal orders. With the advocacy of thousands of individuals, Gonzalez would be given a temporary stay to undergo the kidney transplant procedure, saving two lives. Although Gonzalez may very well be removed this year, even though he has no criminal record, his story serves as a major step forward for immigrant justice and a major victory for humanity and compassion. The sources we used for this post come from the organizations NBC, CNN, TRP Immigrant Justice, Chicago Sun Times, Compassion Crossing, UC Davis Health, ABC 7, The DePaulia, Chicago Tribune, and USA Today. If you would like to learn more about Gonzalez’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7588349833350483214?is_from_webapp=1&sender_device=pc",
    link: "stories.html#jose-gregorio-gonzalez-story"
  },
  {
    order: 30,
    slug: "jose-manuel-ramos-bastidas-story",
    images: [
      "stories/jose-manuel-ramos-bastidas-story/1.png",
      "stories/jose-manuel-ramos-bastidas-story/2.png",
      "stories/jose-manuel-ramos-bastidas-story/3.png",
      "stories/jose-manuel-ramos-bastidas-story/4.png",
      "stories/jose-manuel-ramos-bastidas-story/5.png",
      "stories/jose-manuel-ramos-bastidas-story/6.png",
      "stories/jose-manuel-ramos-bastidas-story/7.png",
      "stories/jose-manuel-ramos-bastidas-story/8.png"
    ],
    featured: false,
    isNewest: false,
    title: "José Manuel Ramos Bastidas’s Story",
    summary: "Today, we are sharing the story of José Manuel Ramos Bastidas. Ramos came to the United States because he needed to make money for his newborn son, who had many medical problems to attend to. His meager salary as a car washer in Venezuela’s poor economy was not sufficient to pay for the medication his son needed. His son was called the family’s “milagrito,” or “little miracle.” Because of this, Ramos trekked thousands of miles, crossing numerous countries, to get to the United States border. He applied for asylum using the CBP One App, but was denied asylum. He was immediately detained due to his tattoos, which were labelled as the mark of potential gangs in Venezuela. Ramos’s family could not see him for months, until they got a phone call one day. It was Ramos, he explained that he was being deported back to Venezelua and he would be back soon. The family celebrated and prepared for his arrival back home: baking a cake, praying, and cooking his favorite chicken dish. Little did they know, this would be the last time they would talk to Ramos. Ramos and 230 other Venezuelans were sent to a maximum security prison due to the potential that they were affiliated with gangs because of their tattoos. Ramos’s family sits anxiously, waiting for any word from him. Ramos’s mother is bombarded with numerous questions, asking whether her son was okay, whether he was being fed, and if he was still alive. The sources we used for this post come from the organization The Texas Tribune and ProPublica. If you would like to learn more about Ramos’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7550114490973474062?is_from_webapp=1&sender_device=pc",
    link: "stories.html#jose-manuel-ramos-bastidas-story"
  },
  {
    order: 31,
    slug: "alfredo-lelo-juarez-zeferino-story",
    images: [
      "stories/alfredo-lelo-juarez-zeferino-story/1.png",
      "stories/alfredo-lelo-juarez-zeferino-story/2.png",
      "stories/alfredo-lelo-juarez-zeferino-story/3.png",
      "stories/alfredo-lelo-juarez-zeferino-story/4.png",
      "stories/alfredo-lelo-juarez-zeferino-story/5.png",
      "stories/alfredo-lelo-juarez-zeferino-story/6.png",
      "stories/alfredo-lelo-juarez-zeferino-story/7.png",
      "stories/alfredo-lelo-juarez-zeferino-story/8.png",
      "stories/alfredo-lelo-juarez-zeferino-story/9.png",
      "stories/alfredo-lelo-juarez-zeferino-story/10.png",
      "stories/alfredo-lelo-juarez-zeferino-story/11.png",
      "stories/alfredo-lelo-juarez-zeferino-story/12.png",
      "stories/alfredo-lelo-juarez-zeferino-story/13.png",
      "stories/alfredo-lelo-juarez-zeferino-story/14.png",
      "stories/alfredo-lelo-juarez-zeferino-story/15.png"
    ],
    featured: false,
    isNewest: false,
    title: "Alfredo “Lelo” Juarez Zeferino’s Story",
    summary: "Today, we are sharing the story of Alfredo “Lelo” Juarez Zeferino. Zeferino grew up in Mexico and came to the United States with his family when he was only a child. Once he turned 12 years old, he started working in the fields, working in Whatcom and Skagit counties. Alfredo was an activist for his people and his job, advocating for his fellow farm workers, such as advocating against exploitation, overtime labour, and also heat change. Alfredo, who is now 25 years old, had been driving his coworker to their tulip farm for work when he was stopped by an unmarked vehicle. Alfredo had pulled over and was putting his window down to ask the officer if he had a warrant and why he was being stopped. This was when the immigration officer would break Alfredo’s window, shattering it, and pulling Alfredo out of the car, detaining him. Alfredo was sent to a detention center, where he was locked up. News about Alfredo’s arrest spread like wildfire, and his community had started to step up and advocate for his release. Alfredo’s detainment was due to a traffic stop he had gotten when he had only a minor offense. Alfredo had been detained for 24 hours, but later sued due to racial discrimination. Alfredo had no idea that because of the traffic stop, he would get a deportation order mailed to his address, a letter that he never got, as it had been bounced back to the government. The sources we used for this post come from the organizations Tribuno Del Pueblo, Seattle Times, El País, King 5, The Guardian, Bellingham Herald, KUOW, Cascadia Daily News, CNN, The Northern Light, and Salish Current. If you would like to learn more about Alfredo’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7543458552313056543?is_from_webapp=1&sender_device=pc",
    link: "stories.html#alfredo-lelo-juarez-zeferino-story"
  },
  {
    order: 32,
    slug: "silverio-villegas-gonzalez-story",
    images: [
      "stories/silverio-villegas-gonzalez-story/1.png",
      "stories/silverio-villegas-gonzalez-story/2.png",
      "stories/silverio-villegas-gonzalez-story/3.png",
      "stories/silverio-villegas-gonzalez-story/4.png",
      "stories/silverio-villegas-gonzalez-story/5.png",
      "stories/silverio-villegas-gonzalez-story/6.png",
      "stories/silverio-villegas-gonzalez-story/7.png",
      "stories/silverio-villegas-gonzalez-story/8.png",
      "stories/silverio-villegas-gonzalez-story/9.png",
      "stories/silverio-villegas-gonzalez-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Silverio Villegas González's Story",
    summary: "Today, we are sharing the story of Silverio Villegas Gonzalez. Gonzalez was born in Irimbo, Mexico, and moved to the United States, living in Chicago for over twenty years. He lived with his girlfriend and two sons, one who was 3 and another who was 7 years old. Gonzalez had no criminal record, but he did have a few traffic violations, which labelled him as a “reckless driver,” which his family has come out to say is not true. Gonzalez had pleaded guilty to these violations and ensured he met all the requirements needed to make up for his mistakes. He was very compliant with athe uthorities. Gonzalez was a line cook for a restraunt in Chicago. On a Friday morning, Gonzalez was driving to work after dropping his kids off at daycare and school, respectively, when he was stopped during a traffic stop run by immigration officials. During their encounter, it is allegedly said that Gonzalez, fearing arrest, fled the scene, injuring an officer while doing so. This caused the other officers to fire at him, which eventually led to his passing. The officers, however, had not been wearing body cameras, even though they were required to do so, casting ambiguity onto the situation. Gonzalez’s passing sparked massive outrage in the Chicago community and led to protests and memorials being built in his name. The sources we used for this post come from the organizations NBC LA, Wikipedia, WTTW, Chicago Sun Times, and WBEZ. If you would like to learn more about Gonzalez’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7609106144442830093?is_from_webapp=1&sender_device=pc",
    link: "stories.html#silverio-villegas-gonzalez-story"
  },
  {
    order: 33,
    slug: "merwil-gutierrez-story",
    images: [
      "stories/merwil-gutierrez-story/1.png",
      "stories/merwil-gutierrez-story/2.png",
      "stories/merwil-gutierrez-story/3.png",
      "stories/merwil-gutierrez-story/4.png",
      "stories/merwil-gutierrez-story/5.png",
      "stories/merwil-gutierrez-story/6.png",
      "stories/merwil-gutierrez-story/7.png",
      "stories/merwil-gutierrez-story/8.png",
      "stories/merwil-gutierrez-story/9.png",
      "stories/merwil-gutierrez-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Merwil Gutiérrez's Story",
    summary: "Today, we are sharing the story of Merwil Gutiérrez. Gutiérrez came to the United States in 2023 from Venezuela, escaping economic and political turmoil and hardship that were plaguing the country. When arriving in the United States, Gutiérrez was scheduled for a court hearing in 2027 regarding his immigration situation. On February 24, 2025, officers would apprehend Gutiérrez and two of his friends despite them not being the ones they had been looking for. Gutiérrez was detained and forcefully removed under speculation that he was a part of an infamous gang in Venezuela, despite repeated insistences from his family that he was not a part of the gang. Gutiérrez had no criminal history, no ties with gangs, and no tattoos, often a sign of the notorious gang that Gutiérrez was speculated to be in. Initially, Gutiérrez had been told that he would be sent back to Venezuela, but unbeknownst to him, Gutiérrez would be sent to a country where he had no ties, El Salvador, to the CECOT, a maximum-security prison. Gutiérrez was only able to be removed without due process through the Alien Enemies Act of 179,8 which allowed for the removal of immigrants who were under suspicion of gang affiliation, even though Gutiérrez had repeatedly insisted otherwise, and there was no evidence pointing to these affiliations. His father continues to worry about Gutiérrez’s situation at the CECOT, hearing of the horrible physical conditions and the abuse suffered in the prison. He is working to get documentation on the removal and more information on Gutiérrez’s case. The sources we used for this post come from the organizations Truthout, The Guardian, Documented, Gonzalez Olivieri, ABC 7, League of United Latin American Citizens, The New York Times, and NPR. If you would like to learn more about Gutiérrez’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7586518502903778615?is_from_webapp=1&sender_device=pc",
    link: "stories.html#merwil-gutierrez-story"
  },
  {
    order: 34,
    slug: "catalina-xochitl-santiago-story",
    images: [
      "stories/catalina-xochitl-santiago-story/1.png",
      "stories/catalina-xochitl-santiago-story/2.png",
      "stories/catalina-xochitl-santiago-story/3.png",
      "stories/catalina-xochitl-santiago-story/4.png",
      "stories/catalina-xochitl-santiago-story/5.png",
      "stories/catalina-xochitl-santiago-story/6.png",
      "stories/catalina-xochitl-santiago-story/7.png",
      "stories/catalina-xochitl-santiago-story/8.png",
      "stories/catalina-xochitl-santiago-story/9.png",
      "stories/catalina-xochitl-santiago-story/10.png",
      "stories/catalina-xochitl-santiago-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Catalina \"Xochitl\" Santiago’s Story",
    summary: "Today, we are sharing the story of Catalina “Xochitl” Santiago. Catalina came to the United States from Mexico when she was just a child. She came under the Deferred Action for Childhood Arrivals Program (DACA) and was allowed to work and study in the United States. She was raised in Southern Florida, where she became very invested and passionate about advocating for undocumented immigrant rights. Catalina was a member of the group Movimiento Cosecha, which advocated for immigrant rights. Just this year, Catalina also got married to her wife, Desiree Miller. The couple owned a community garden, where they would teach kids about agriculture and the medicinal uses of plants. In August of this year, however, Catalina would never have expected that she would be detained at El Paso airport while waiting to board a domestic flight. While she was detained, she was repeatedly questioned about her work authorization. She was detained due to a trespassing conviction and allegations of substance which never amounted to anything in court. The trespassing convictions were due to being at a rally, which was not a criminal offense, but rather a civil offense. The sources we used for this post come from the organizations NBC News and The Texas Tribune. If you would like to learn more about Catalina’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7552696908557389070?is_from_webapp=1&sender_device=pc",
    link: "stories.html#catalina-xochitl-santiago-story"
  },
  {
    order: 35,
    slug: "margarita-avila-story",
    images: [
      "stories/margarita-avila-story/1.png",
      "stories/margarita-avila-story/2.png",
      "stories/margarita-avila-story/3.png",
      "stories/margarita-avila-story/4.png",
      "stories/margarita-avila-story/5.png",
      "stories/margarita-avila-story/6.png",
      "stories/margarita-avila-story/7.png",
      "stories/margarita-avila-story/8.png",
      "stories/margarita-avila-story/9.png",
      "stories/margarita-avila-story/10.png",
      "stories/margarita-avila-story/11.png",
      "stories/margarita-avila-story/12.png"
    ],
    featured: false,
    isNewest: false,
    title: "Margarita Avila’s Story",
    summary: "Today, we are sharing the story of Margarita Avila. Margartia came to the United States from Belize due to threats to her family, namely being sent a letter demanding $10,000 or her family would be hurt. Trying to escape this, Margarita and her husband, Jose, would come to the United States, requesting asylum due to fear of being hurt. Their request for asylum has been pending ever since. This did not stop Margarita and Jose from building a life in the United States; however, Margarita and Jose would buy a house in Houston and start their own landscaping business, and have five children who are all American citizens. However, they would never expect that their good life would come to an end due to a miscommunication between Margarita and a postal worker. Margarita had been using the weed clipper when a postal worker would ask her to turn it off due to the sound. Amongst the sound, Margarita did not hear the worker, and the worker started to yell at her. A situation went down, and Margarita was accused of assault, a charge that would later be dropped. Nevertheless, the damage had been done, and Margarita had been taken by immigration officers from the deputy office after seeing her Belize identification. Margarita didn’t know what to do, whether she should voluntarily deport or try her best to fight for her case. If she were to deport, her family would have ot make the tough decision of leaving behind everything, or staying behind. The source we used for this post comes from the organization The Texas Tribune. If you would like to learn more about Margarita’s story, we encourage you to check out the organization.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7557951962289868087?is_from_webapp=1&sender_device=pc",
    link: "stories.html#margarita-avila-story"
  },
  {
    order: 36,
    slug: "yessenia-ruano-story",
    images: [
      "stories/yessenia-ruano-story/1.png",
      "stories/yessenia-ruano-story/2.png",
      "stories/yessenia-ruano-story/3.png",
      "stories/yessenia-ruano-story/4.png",
      "stories/yessenia-ruano-story/5.png",
      "stories/yessenia-ruano-story/6.png",
      "stories/yessenia-ruano-story/7.png",
      "stories/yessenia-ruano-story/8.png",
      "stories/yessenia-ruano-story/9.png",
      "stories/yessenia-ruano-story/10.png",
      "stories/yessenia-ruano-story/11.png",
      "stories/yessenia-ruano-story/12.png",
      "stories/yessenia-ruano-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "Yessenia Ruano’s Story",
    summary: "Today, we are sharing the story of Yessenia Ruano. Ruano was originally born in El Salvador, but from a young age, she knew that she wanted to leave her country. Her home was filled with poverty and violence, and after many dangerous situations of theft and mugging, Ruano decided that she would go to the United States. Ruano paid a smuggler to get her into the United States; however, she would never expect to be threatened and held against her will due to a debt she had not paid. After this harrowing experience, Ruano decided to apply for a T-visa, a visa designated for individuals affected by trafficking. Ruano built a life she had always dreamed of in the United States: marrying a Salvadoran man, having two twin daughters, and buying her very own house in Milwaukee. In EL Salvador, she had never gotten the chance to pursue her dream career of being a teacher; however, in America, there was a need for teachers, and she and her husband were able to become teachers. However, due to recent immigration policy changes, Ruano’s pending status was not enough for her to stay in the United States. The fear of deportation was too much to bear for the family, and Ruano and her husband had to make the tough decision of voluntarily moving back to El Salvador. After news of her self-deportation spread, many Milwaukee residents marched and protested for Ruano. Ruano also got many letters of support from her students and co-workers. Ruano also had to sit down and tell her two daughters about the situation and the need to move to a place they had never been to. Ruano hopes that once her daughters turn 18, their family can have another chance at the American dream. The sources used for this post come from the organizations Reuters, 19thn News, Rolling Stone, and Wisconsin Examiner. If you would like to learn more about Ruano’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7563088369727638797?is_from_webapp=1&sender_device=pc",
    link: "stories.html#yessenia-ruano-story"
  },
  {
    order: 37,
    slug: "quinceanera-guests-stay-home-due-to-recent-immigration-story",
    images: [
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/1.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/2.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/3.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/4.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/5.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/6.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/7.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/8.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/9.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/10.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/11.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/12.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/13.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/14.png",
      "stories/quinceanera-guests-stay-home-due-to-recent-immigration-story/15.png"
    ],
    featured: false,
    isNewest: false,
    title: "Quinceañera Guests Stay Home Due to Recent Immigration",
    summary: "Today, we are sharing the story of a Quinceañera that was affected by recent immigration enforcement in Rowland Heights. Denise Alvarez was getting ready to celebrate her Sweet 16 through a traditional Latino party called a Quinceañera, a milestone celebration that honored her transition from girlhood into adulthood. Her family spent months preparing for the event and invested more than $15,000 to make the day as special as possible. Alvarez was excited to show off her dress to the more than 200 guests invited to celebrate with her.\n\nJust days before the Quinceañera, immigration enforcement was reported to be in the area, causing many guests to cancel. The family not only lost a significant amount of money, but also experienced emotional, mental, and cultural harm. We believe immigrants should not have to live in fear of stepping outside their homes because immigration enforcement is nearby. People should not be scared of being abducted and detained because of their race or status. The source we used for this post comes from NBC LA. If you would like to learn more about Denise Alvarez’s Quinceañera and the details of her story, we encourage you to read the reporting they published.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7526423315565645111?is_from_webapp=1&sender_device=pc",
    link: "stories.html#quinceanera-guests-stay-home-due-to-recent-immigration-story"
  },
  {
    order: 38,
    slug: "paolas-story-with-immigration-story",
    images: [
      "stories/paolas-story-with-immigration-story/1.png",
      "stories/paolas-story-with-immigration-story/2.png",
      "stories/paolas-story-with-immigration-story/3.png",
      "stories/paolas-story-with-immigration-story/4.png",
      "stories/paolas-story-with-immigration-story/5.png",
      "stories/paolas-story-with-immigration-story/6.png",
      "stories/paolas-story-with-immigration-story/7.png",
      "stories/paolas-story-with-immigration-story/8.png",
      "stories/paolas-story-with-immigration-story/9.png",
      "stories/paolas-story-with-immigration-story/10.png",
      "stories/paolas-story-with-immigration-story/11.png",
      "stories/paolas-story-with-immigration-story/12.png",
      "stories/paolas-story-with-immigration-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "Paola's Story with Immigration",
    summary: "Today, we are sharing the story of Paola and her U.S. Navy veteran husband, Adrian Clouatre. Paola immigrated to the United States as a teenager with her mother, from whom she is now very distant. After arriving in the United States, Paola faced a difficult period living in homeless shelters. During that time, a deportation order was issued without her knowledge after her mother skipped the hearing and never told her about it.\n\nPaola later married her U.S. Navy veteran husband and the couple had two children, one of whom is a toddler. This gave Paola a path to citizenship, and they still wanted to do the right thing and get her green card. During the green card interview, however, Paola was detained after a supervisor told her she had done very well and to wait in the waiting room. Adrian has described how their children cry for their mother every day. The sources we used for this post come from NBC, Newsweek, and CBS. If you would like to learn more about Paola’s story, we encourage you to read the articles published by these organizations. We believe Paola deserved empathy and a chance to fix a situation she had no control over.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7522655544184786231?is_from_webapp=1&sender_device=pc",
    link: "stories.html#paolas-story-with-immigration-story"
  },
  {
    order: 39,
    slug: "jeanette-vizguerras-story",
    images: [
      "stories/jeanette-vizguerras-story/1.png",
      "stories/jeanette-vizguerras-story/2.png",
      "stories/jeanette-vizguerras-story/3.png",
      "stories/jeanette-vizguerras-story/4.png",
      "stories/jeanette-vizguerras-story/5.png",
      "stories/jeanette-vizguerras-story/6.png",
      "stories/jeanette-vizguerras-story/7.png",
      "stories/jeanette-vizguerras-story/8.png",
      "stories/jeanette-vizguerras-story/9.png",
      "stories/jeanette-vizguerras-story/10.png",
      "stories/jeanette-vizguerras-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Jeanette Vizguerra's Story",
    summary: "Today, we are sharing the story of Jeanette Vizguerra. Vizguerra came to the United States from Mexico with her husband and daughter after being threatened. She wanted to give her daughter a safer life with more opportunities, choosing to cross the border for those chances. After coming to the United States, Vizguerra had three more children and now also has three grandchildren.\n\nAfter arriving in the United States, Vizguerra worked as a janitor before becoming a member and organizer with SEIU Local 105, where she advocated for better benefits and pay for custodial workers. She also joined Rights for All People, working to improve the relationship between immigrants and immigration officials. Vizguerra and her husband later started a moving and cleaning company. She was eventually pulled over and detained over convictions related to falsifying a Social Security number and possession of a forged instrument. Vizguerra has said she did not know the Social Security number belonged to anyone and that it was a mistake.\n\nVizguerra received a removal order based on that conviction and later applied for a stay of removal. After the stay was denied, she sought sanctuary at the First Unitarian Society Church, where she stayed for more than three months while continuing to advocate for immigrant rights. She was later named one of Time magazine’s 100 most influential people and received a two-year reprieve allowing her to remain in the United States temporarily, though her U-visa application was later denied. Vizguerra was later detained near her workplace at Target and held for over nine months before being released on bail just before Christmas. She continues to advocate for immigrant rights and has become a prominent and influential immigrant activist. The sources we used for this post come from Denver 7, Colorado Sun, Colorado Newsline, CPR, ABC, Time, RFK Human Rights, AP News, and The New York Times. If you would like to learn more about Vizguerra’s story, we encourage you to read the reporting published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7594297376290999566?is_from_webapp=1&sender_device=pc",
    link: "stories.html#jeanette-vizguerras-story"
  },
  {
    order: 40,
    slug: "francisco-galicias-story",
    images: [
      "stories/francisco-galicias-story/1.png",
      "stories/francisco-galicias-story/2.png",
      "stories/francisco-galicias-story/3.png",
      "stories/francisco-galicias-story/4.png",
      "stories/francisco-galicias-story/5.png",
      "stories/francisco-galicias-story/6.png",
      "stories/francisco-galicias-story/7.png",
      "stories/francisco-galicias-story/8.png",
      "stories/francisco-galicias-story/9.png",
      "stories/francisco-galicias-story/10.png",
      "stories/francisco-galicias-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Francisco Galicia's Story",
    summary: "Today, we are sharing the story of Francisco Galicia. Galicia is an 18-year-old U.S. citizen who was born in Dallas and lives with his mother and his 17-year-old brother, who was born in Mexico and later moved to the United States. Galicia and his brother are best friends and avid soccer players. Galicia had dreams of becoming a businessman and pursuing higher education through college. He, his brother, and their friends planned to travel to Fort Worth to meet with coaches from Ranger College and hopefully secure scholarship opportunities.\n\nWhile driving to Fort Worth, Galicia and his friends were stopped at a federal checkpoint. Galicia showed his state-issued identification, birth certificate, and Social Security number, but officers claimed the documents were fake and took both Galicia and his brother into custody. They were placed in a detention facility under poor conditions. Without their mother knowing, the brothers had no access to communication with her or a lawyer, were crowded with around 60 others, and had no proper access to necessities like a bed, toilet, or shower. They were also pressured to self-deport even though Galicia is a U.S. citizen.\n\nGalicia’s brother could no longer bear the conditions and voluntarily self-deported, later contacting their mother to tell her what had happened. After 23 days, Galicia was finally released, having lost 26 pounds in the process. Galicia and his mother continue trying to get justice for what happened and to bring his brother back home. The sources we used for this post come from ABC, The Guardian, Texas Tribune, PBS, CNN, and CBS. If you would like to learn more about Galicia’s story, we encourage you to read the reporting published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7578302177182027038?is_from_webapp=1&sender_device=pc",
    link: "stories.html#francisco-galicias-story"
  },
  {
    order: 41,
    slug: "artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story",
    images: [
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/1.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/2.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/3.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/4.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/5.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/6.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/7.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/8.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/9.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/10.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/11.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/12.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/13.png",
      "stories/artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story/14.png"
    ],
    featured: false,
    isNewest: false,
    title: "Artist in LA Creates Paintings to Protest Recent Immigration Injustice",
    summary: "Today, we are sharing the story of an artist in Los Angeles who is creating paintings to protest recent immigration injustice in his community. Lalo Alcaraz is a well-known cartoonist and painter in Los Angeles. A recent ice cream cart inspired him to create a painting reflecting the immigration injustice being faced in the city. His painting, “Summer of ICE,” shows a lone ice cream cart on the streets of Los Angeles.\n\nThe painting symbolizes both the sudden and harsh reality faced by people detained by immigration enforcement and the personal story behind the abandoned cart. The cart belonged to Enrique Lozano, an ice cream vendor in Culver City. He was reportedly taken away by force while selling ice cream, removed in an unnamed vehicle, and the only thing left behind was his cart on the side of the street.\n\nA GoFundMe has been set up for Enrique’s family, and if you would like to support them, you can donate here: https://www.gofundme.com/f/fundraiser-for-enrique-paletero-in-culver-city. The source we used for this post comes from NBC LA. If you would like to learn more about Alcaraz’s painting and Enrique’s story, we encourage you to read the reporting published by NBC LA.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7527168523609623821?is_from_webapp=1&sender_device=pc",
    link: "stories.html#artist-in-la-creates-paintings-to-protest-recent-immigration-injustice-story"
  },
  {
    order: 42,
    slug: "daniela-vargass-story",
    images: [
      "stories/daniela-vargass-story/1.png",
      "stories/daniela-vargass-story/2.png",
      "stories/daniela-vargass-story/3.png",
      "stories/daniela-vargass-story/4.png",
      "stories/daniela-vargass-story/5.png",
      "stories/daniela-vargass-story/6.png",
      "stories/daniela-vargass-story/7.png",
      "stories/daniela-vargass-story/8.png",
      "stories/daniela-vargass-story/9.png"
    ],
    featured: false,
    isNewest: false,
    title: "Daniela Vargas's Story",
    summary: "Today, we are sharing the story of Daniela Vargas. Vargas grew up in Argentina and came to the United States in 2001. Vargas came to the United States through the Deferred Action for Childhood Arrivals (DACA) program. She dreamed of continuing her education, going to college, and becoming a math teacher in the United States.\n\nVargas’s DACA status had recently expired, and she had saved enough money to renew it. She had already submitted her renewal application, and it was pending. After attending and speaking at a local press conference on undocumented immigrant rights, Vargas was detained by immigration officers. Vargas has also spoken about the fear she felt when her brother and father were detained by immigration officers.\n\nThankfully, Vargas was released after a court hearing. The sources we used for this post come from The Guardian, ABC News, BBC News, and the National Immigration Law Center. If you would like to learn more about Vargas’s story, we encourage you to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7578718250511486238?is_from_webapp=1&sender_device=pc",
    link: "stories.html#daniela-vargass-story"
  },
  {
    order: 43,
    slug: "alejandra-juarezs-story",
    images: [
      "stories/alejandra-juarezs-story/1.png",
      "stories/alejandra-juarezs-story/2.png",
      "stories/alejandra-juarezs-story/3.png",
      "stories/alejandra-juarezs-story/4.png",
      "stories/alejandra-juarezs-story/5.png",
      "stories/alejandra-juarezs-story/6.png",
      "stories/alejandra-juarezs-story/7.png",
      "stories/alejandra-juarezs-story/8.png",
      "stories/alejandra-juarezs-story/9.png",
      "stories/alejandra-juarezs-story/10.png",
      "stories/alejandra-juarezs-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Alejandra Juarez’s Story",
    summary: "Today, we are sharing the story of Alejandra Juarez. Juarez was born in Mexico and came to the United States as a teenager. While crossing the border, she was led to sign a document written in English, without fully understanding what it meant. Years later, she learned that the document had effectively signed away her right to legal status in the United States. By then, she had married her husband, Temo, and they had two daughters who were both born in the United States.\n\nTemo was also born in Mexico and came to the United States as a child. He was naturalized in 2002, shortly before serving a 16-month deployment in Iraq as a U.S. Marine Corps veteran. Juarez lived with her husband in Florida until a 2013 traffic stop exposed her undocumented status. She was then allowed to remain in the country as long as she checked in with immigration officials twice a year. In 2018, after the change in administration, Juarez chose to return to Mexico with her youngest daughter, while her husband and oldest daughter stayed in the United States so the older daughter could finish high school.\n\nAt first, the family made frequent trips to stay connected, but as finances became tighter, the visits grew less frequent. When the pandemic hit, Juarez’s work teaching English slowed down, and her youngest daughter returned to Florida. Juarez fell into a deep depression, grieving the lost time and distance from her family. After three years of separation, persistent lobbying, and advocacy, Juarez was finally allowed to return to the United States under the Protect Patriot Spouse Act, just before Mother’s Day. She is now working to make up for the time she lost with her family. The sources we used for this post come from The 74 Million, NBC News, The Guardian, Stripes, Military Times, KVUE, Orlando Sentinel, FWD, and The Ledger. If you would like to learn more about Juarez’s story, we encourage you to read the reporting published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7590193132310891790?is_from_webapp=1&sender_device=pc",
    link: "stories.html#alejandra-juarezs-story"
  },
  {
    order: 44,
    slug: "javier-diaz-santanas-story-against-ice",
    images: [
      "stories/javier-diaz-santanas-story-against-ice/1.png",
      "stories/javier-diaz-santanas-story-against-ice/2.png",
      "stories/javier-diaz-santanas-story-against-ice/3.png",
      "stories/javier-diaz-santanas-story-against-ice/4.png",
      "stories/javier-diaz-santanas-story-against-ice/5.png",
      "stories/javier-diaz-santanas-story-against-ice/6.png",
      "stories/javier-diaz-santanas-story-against-ice/7.png",
      "stories/javier-diaz-santanas-story-against-ice/8.png",
      "stories/javier-diaz-santanas-story-against-ice/9.png",
      "stories/javier-diaz-santanas-story-against-ice/10.png",
      "stories/javier-diaz-santanas-story-against-ice/11.png",
      "stories/javier-diaz-santanas-story-against-ice/12.png",
      "stories/javier-diaz-santanas-story-against-ice/13.png",
      "stories/javier-diaz-santanas-story-against-ice/14.png",
      "stories/javier-diaz-santanas-story-against-ice/15.png"
    ],
    featured: false,
    isNewest: false,
    title: "Javier Diaz Santana’s Story",
    summary: "Today, we are sharing the story of Javier Diaz Santana. Diaz was born deaf and mute, and he communicates through sign language. Wanting better opportunities and access to learning for their child, Diaz’s parents immigrated to the United States from Mexico when he was only 5 years old. Diaz was protected under the Deferred Action for Childhood Arrivals program. He attended Marlton School, a school for deaf and mute children, where he loved participating in track and soccer and graduated in 2011.\n\nAfter graduating, Diaz found work as a car washer and built a community in Temple City. By then he was 34 years old. One day, while washing his car, he saw people around him suddenly running away. His co-workers signaled for him to flee. Immigration officers were raiding his workplace. Diaz tried to run, but an ankle injury made it difficult. He also tried to communicate with officers through sign language and his cellphone, but officers took both his wallet and cellphone and handcuffed him, leaving him unable to communicate effectively.\n\nDiaz was placed into a white SUV and transferred to a detention facility, despite having no criminal record. After major efforts by lawyers and protesters, he was granted bail and released with an ankle monitor. Diaz’s story is one of many showing how disabled immigrants can be mistreated. The sources we used for this post come from the Los Angeles Times and NBCLA. If you would like to learn more about Diaz’s story, we encourage you to read the reporting published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7547145595358596407?is_from_webapp=1&sender_device=pc",
    link: "stories.html#javier-diaz-santanas-story-against-ice"
  },
  {
    order: 45,
    slug: "josue-aguilar-valles-story-against-ice",
    images: [
      "stories/josue-aguilar-valles-story-against-ice/1.png",
      "stories/josue-aguilar-valles-story-against-ice/2.png",
      "stories/josue-aguilar-valles-story-against-ice/3.png",
      "stories/josue-aguilar-valles-story-against-ice/4.png",
      "stories/josue-aguilar-valles-story-against-ice/5.png",
      "stories/josue-aguilar-valles-story-against-ice/6.png",
      "stories/josue-aguilar-valles-story-against-ice/7.png",
      "stories/josue-aguilar-valles-story-against-ice/8.png",
      "stories/josue-aguilar-valles-story-against-ice/9.png",
      "stories/josue-aguilar-valles-story-against-ice/10.png",
      "stories/josue-aguilar-valles-story-against-ice/11.png",
      "stories/josue-aguilar-valles-story-against-ice/12.png",
      "stories/josue-aguilar-valles-story-against-ice/13.png",
      "stories/josue-aguilar-valles-story-against-ice/14.png"
    ],
    featured: false,
    isNewest: false,
    title: "Josué Aguilar Valle's Story Against ICE",
    summary: "Today, we are sharing the story of Josué Aguilar Valle. Twelve years ago, when Aguilar was only 14 years old, he fled Honduras and came to the United States alone, seeking asylum from gang violence. Gangs had tried to recruit him, and out of fear he made the journey by himself. He later lived with documented relatives in Florida and built a life similar to that of many other young people in the United States. Aguilar attended Miami Beach Senior High School, played on the soccer team, later worked as a manager at a Miami Beach restaurant, and met his now beloved wife, Rodriguez. Together they have a 2-year-old son.\n\nAguilar and Rodriguez, who is a U.S. citizen, had been actively working on his path to citizenship, and his legal immigration status had been approved. The couple celebrated when they heard the news while at an immigration facility. However, Rodriguez and their son were then asked to leave the room, and Aguilar was detained because of a 2018 deportation order. Just when Aguilar believed he was entering a new chapter of his life with legal status, that hope was taken away. Aguilar had no criminal record, was law-abiding, and paid taxes.\n\nThe sources we used for this post come from WLRN, Latin Times, Parriva, and VPl TV. If you would like to learn more about Aguilar’s story, we encourage you to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7533068327732792589?is_from_webapp=1&sender_device=pc",
    link: "stories.html#josue-aguilar-valles-story-against-ice"
  },
  {
    order: 46,
    slug: "caroline-dias-goncalves-story",
    images: [
      "stories/caroline-dias-goncalves-story/1.png",
      "stories/caroline-dias-goncalves-story/2.png",
      "stories/caroline-dias-goncalves-story/3.png",
      "stories/caroline-dias-goncalves-story/4.png",
      "stories/caroline-dias-goncalves-story/5.png",
      "stories/caroline-dias-goncalves-story/6.png",
      "stories/caroline-dias-goncalves-story/7.png",
      "stories/caroline-dias-goncalves-story/8.png",
      "stories/caroline-dias-goncalves-story/9.png",
      "stories/caroline-dias-goncalves-story/10.png",
      "stories/caroline-dias-goncalves-story/11.png",
      "stories/caroline-dias-goncalves-story/12.png"
    ],
    featured: false,
    isNewest: false,
    title: "Caroline Dias Goncalves’ Story",
    summary: "Today, we are sharing the story of Caroline Dias Goncalves. Goncalves immigrated to the United States from Brazil at only 7 years old. Because of her early age, she was eligible to be under the protection of the Deferred Action for Childhood Arrivals (DACA) program. This allowed her to be safe from immigration situations. The DACA program also allowed her to get scholarships for University. Goncalves used these scholarships to fund her education at the University of Utah. Even though she was legally allowed to be in the United States, ICE agents would still arrest and detain her in June. They chained her up and sent her to a warehouse, before being transferred into a detention center. Goncalves emphasizes the harsh and brutal treatment she was subjected to and also explains how, because she knew how to speak English, she was treated better than the rest of the inmates. Thankfully, Goncalves is now safe at home. If you would like to support her cause and provide resources for her transition back to normal life, and in her journey to get a green card, you can donate to her GoFundMe here: https://www.gofundme.com/f/bring-caroline-dias-goncalves-home-safely\n\nThe sources we used for this post come from the organizations NBC, ABC4, The Salt Lake Tribune, and The Dream. If you would like to learn more about Goncalves’ story, we encourage you to check out these organizations and read the stories they published on this topic. We believe immigrants should be treated equally and given the chances and opportunities that every U.S citizen has. Stories like Goncalves emphasize a need to speak out and advocate for better immigrant policies and better pathways in getting citizenship.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7523009049269456141?is_from_webapp=1&sender_device=pc",
    link: "stories.html#caroline-dias-goncalves-story"
  },
  {
    order: 47,
    slug: "camila-munozs-story",
    images: [
      "stories/camila-munozs-story/1.png",
      "stories/camila-munozs-story/2.png",
      "stories/camila-munozs-story/3.png",
      "stories/camila-munozs-story/4.png",
      "stories/camila-munozs-story/5.png",
      "stories/camila-munozs-story/6.png",
      "stories/camila-munozs-story/7.png",
      "stories/camila-munozs-story/8.png",
      "stories/camila-munozs-story/9.png",
      "stories/camila-munozs-story/10.png",
      "stories/camila-munozs-story/11.png",
      "stories/camila-munozs-story/12.png",
      "stories/camila-munozs-story/13.png",
      "stories/camila-munozs-story/14.png",
      "stories/camila-munozs-story/15.png",
      "stories/camila-munozs-story/16.png"
    ],
    featured: false,
    isNewest: false,
    title: "Camila Muñoz’s Story",
    summary: "Today, we are sharing the story of Camila Muñoz and her husband Bartell. Camila Muñoz is a Peruvian immigrant who came to the United States in 2019 via a work-study visa. Unfortunatley, when she had wanted to leave, COVID hit and flights were canceled, making her unable to travel back home. This made her overstay her visa. During this time, she met her husband, which began an amazing relationship. During this time, Camila Muñoz and her husband also applied for her to get her green card. Due to COVID, the couple wasn’t able to have a honeymoon and were only able to have one around April of this year. When traveling back to the U.S, the couple was stopped by immigration officers who demanded to know Camila Muñoz’s legal status. She said that she was not documented, but was waiting for her green card. While Camila Muñoz was trying to explain, immigration officers detained her. A GoFundMe has been set up for Camila Muñoz and her husband. If you would like to donate and support their battle for citizenship, feel free to donate: https://www.gofundme.com/f/help-free-my-wife-legal-and-bond-support\n\nThe sources we used for this post come from the organizations USAToday and NewsWeek. If you would like to learn more about Camila Muñoz’s Story, we suggest you read the stories posted by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7524467745367330062?is_from_webapp=1&sender_device=pc",
    link: "stories.html#camila-munozs-story"
  },
  {
    order: 48,
    slug: "joseph-lodano-rodriguezs-story",
    images: [
      "stories/joseph-lodano-rodriguezs-story/1.png",
      "stories/joseph-lodano-rodriguezs-story/2.png",
      "stories/joseph-lodano-rodriguezs-story/3.png",
      "stories/joseph-lodano-rodriguezs-story/4.png",
      "stories/joseph-lodano-rodriguezs-story/5.png",
      "stories/joseph-lodano-rodriguezs-story/6.png",
      "stories/joseph-lodano-rodriguezs-story/7.png",
      "stories/joseph-lodano-rodriguezs-story/8.png"
    ],
    featured: false,
    isNewest: false,
    title: "Joseph Lodano Rodriguez's Story",
    summary: "Today, we are sharing the story of Joseph Lodano Rodriguez. Rodriguez came to the United States from Colombia with his brother and mother. His mother, Gutierrez, applied for asylum due to domestic violence. The family lived in the Bay Area for over 4 years. Rodriguez started learning American Sign Language at the California School of the Deaf in Fremont, California, 3 years ago. Now 6 years old, Rodriguez wears hearing aids and cochlear implants and is learning English. His mother works very hard, working two jobs as a cleaner and child worker to provide sufficient income for her family and also to provide for Rodriguez’s medical costs. Gutierrez has no criminal record. The family would attend a regular scheduled immigration check-in on March 3rd. Gutierrez was told ahead of time to bring her children because they allegedly needed their photos to be renewed. During the check-in, she was forced to sign documents, and also fingerprints and photos of the family were taken. The family would be put into an unmarked vehicle and sent on a flight across the country to a detention facility, where they would be deported to Colombia. Rodriguez was sent away without a medical assistant and his hearing aids. He is in a precarious and perilous situation because his condition and cochlear implant make it crucial for him to receive proper care, or he could suffer life-threatening diseases such as meningitis, which could infect his brain and cause death. Rodriguez is also forced to learn Colombian Sign Language, a sign language that is foreign to him because he had only been learning American Sign Language. Communication between him and his family has also been difficult because his mother had only just started learning sign language to communicate with Rodriguez, and Rodriguez knows little Spanish. He doesn’t have the ability to communicate with many people in Colombia. The sources we used for this post come from the organizations The Los Angeles Times, KRON 4, Ed Source, KCRA 3, ABC 7, and News Herald. If you would like to learn more about Rodriguez’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7622840645094280461?is_from_webapp=1&sender_device=pc",
    link: "stories.html#joseph-lodano-rodriguezs-story"
  },
  {
    order: 49,
    slug: "estefany-rodriguezs-story",
    images: [
      "stories/estefany-rodriguezs-story/1.png",
      "stories/estefany-rodriguezs-story/2.png",
      "stories/estefany-rodriguezs-story/3.png",
      "stories/estefany-rodriguezs-story/4.png",
      "stories/estefany-rodriguezs-story/5.png",
      "stories/estefany-rodriguezs-story/6.png",
      "stories/estefany-rodriguezs-story/7.png",
      "stories/estefany-rodriguezs-story/8.png",
      "stories/estefany-rodriguezs-story/9.png",
      "stories/estefany-rodriguezs-story/10.png",
      "stories/estefany-rodriguezs-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Estefany Rodriguez's Story",
    summary: "Today, we are sharing the story of Estefany Rodriguez. Rodriguez was born in Colombia and became a reporter, reporting on topics such as armed militia, corruption, and government authorities. These topics garnered attention from the government, causing her to be put on the radar and to receive threats sent towards her and her family. After her daughter turned one, Rodriguez moved to America to provide her daughter a safer and healthier upbringing, coming to America on a tourist visa before applying for poltiical asylum. Rodriguez would also be sponsored by her husband, who is a U.S citizen, applying for a green card.  Rodriguez would also be granted work authorization in America. She became a reporter in Nashville, covering recent topics of immigration detention and the sudden arrests of immigrants in America. This Wednesday, immigration authorities would swarm Rodriguez and her husband while they were in their car, detaining Rodriguez because she had missed two immigration appointments. This was not the case, however, as during the first of those appointments, a snowstorm had enabled the immigration office to close, and after they had rescheduled and gone to the second appointment, databases showed that they had no appointment on that date. Rodriguez had done her best to meet and follow the regulatory protocols for her immigration status. Rodriguez was held in the detention facility in Alabama before being scheduled to be sent to Louisiana. Currently, Rodriguez is in custody as her case is processed and sent through the court. The sources we used for this post come from the organizations CNN News, The New York Times, Fox 17, The People, WKRN, News Channel 5, Migrant Insider, The Guardian, WHSV, and Nashville Banner. If you would like to learn more about Rodriguez’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7615060279038070029?is_from_webapp=1&sender_device=pc",
    link: "stories.html#estefany-rodriguezs-story"
  },
  {
    order: 50,
    slug: "claudio-rojass-story",
    images: [
      "stories/claudio-rojass-story/1.png",
      "stories/claudio-rojass-story/2.png",
      "stories/claudio-rojass-story/3.png",
      "stories/claudio-rojass-story/4.png",
      "stories/claudio-rojass-story/5.png",
      "stories/claudio-rojass-story/6.png",
      "stories/claudio-rojass-story/7.png",
      "stories/claudio-rojass-story/8.png",
      "stories/claudio-rojass-story/9.png",
      "stories/claudio-rojass-story/10.png",
      "stories/claudio-rojass-story/11.png",
      "stories/claudio-rojass-story/12.png",
      "stories/claudio-rojass-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "Claudio Rojas's Story",
    summary: "Today, we are sharing the story of Claudio Rojas. Rojas was born in Argentina and came to the United States in 2000 under a 90-day visa. Rojas had two sons in the United States and lives in Florida with his wife and newborn grandson. In 2012, Rojas was detained by immigration officials in the Broward Transitional Center, a detention center for non-violent immigrants, because he had overstayed his visa. Despite his detention, Rojas had no criminal record and was expected to be released very soon under the Obama administration’s directive of only detaining and removing dangerous criminals. During his time in detention, Rojas got to know a lot of individuals who came from diverse backgrounds, but all were in the same boat as him. Rojas started to compile these stories and funnel them out to the National Immigrant Youth Alliance, an immigrants right group. His story and the story of the other underrepresented individuals became inspiring and caught the attention of film directors Alex Rivera and Christina Ibarra. His journey through immigration and detention became a part of a movie called The Infiltrators, which was set to premiere at Sundance in late Janurary and Rojas was invited to introduce the movie at the Miami Film Festival. Unexpectedly, Rojas was detained by immigration officials during a routine immigration check-in. Rojas had no criminal record and was in the process of acquiring a T-visa, a visa for individuals who have been subjected to trafficking. Rojas would be sent to Argentina. Thankfully, through the hard work and dedication of his lawyers, Rojas would be allowed to return to the United States and reunite with his family. Now, Rojas is working towards citizenship and continues to advocate for underrepresented immigrants and urge for positive changes to immigration policy. The sources we used for this post come from the organizations CBC, Iowa Public Radio, NPR, GoFundMe, Miami Herald, AP News, KPBS, Documentary, and USCitizenPod. If you would like to learn more about Rojas’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7591688298322529549?is_from_webapp=1&sender_device=pc",
    link: "stories.html#claudio-rojass-story"
  },
  {
    order: 51,
    slug: "angelica-reyes-story",
    images: [
      "stories/angelica-reyes-story/1.png",
      "stories/angelica-reyes-story/2.png",
      "stories/angelica-reyes-story/3.png",
      "stories/angelica-reyes-story/4.png",
      "stories/angelica-reyes-story/5.png",
      "stories/angelica-reyes-story/6.png",
      "stories/angelica-reyes-story/7.png",
      "stories/angelica-reyes-story/8.png",
      "stories/angelica-reyes-story/9.png",
      "stories/angelica-reyes-story/10.png",
      "stories/angelica-reyes-story/11.png",
      "stories/angelica-reyes-story/12.png"
    ],
    featured: false,
    isNewest: false,
    title: "Angélica Reyes' Story",
    summary: "Today, we are sharing the story of Angélica Reyes. Reyes was brought to the United States across the desert spanning Mexico and the U.S border when she was only 9 months old. The journey is treacherous, and many starve or get dehydrated beyond recovery during their journey. After coming to the United States, Reyes was constantly reminded by her parents that because of her undocumented status, she would have to work twice as hard as everybody else for only half the amount of respect. She would also have to be extra vigilant and careful compared to other children. As a DACA recipient, Reyes, now 32, would take those words to heart and become a history teacher for the Los Angeles Unified School District. As a teacher, she explains that her immigration status helps to inspire and encourage both her documented and undocumented students to work hard and strive for bigger and brighter. If Reyes could accomplish her dreams, despite the obstacles that present themselves in front of her, then anyone can, no matter their immigration status. Through her journey, Reyes was constantly told that she couldn’t accomplish certain things because of her status and because of the color of her skin. During her senior year of high school, she was questioned by her teacher why she would enroll for the SAT when higher education was not for “her kind,” discouraging her from applying for the SAT and missing the deadline for UC applications. She would go to community college and apply to transfer to UCLA. Her guidance counselor would tell her that she should aim for a less competitive school; however, Reyes had learned from her mistakes and wouldn’t let others’ stereotypes and biases affect her decisions. Reyes would apply to UCLA, be accepted, and pursue her Bachelor's in Sociology and Master’s in Education. As a DACA recipient, Reyes would also be given the opportunity to pursue career paths and become a career professional; however, Reyes always saw this as another extra reminder that America still saw her differently from others. Reyes would be inspired by her 2010 activist project, spearheading the Paulo Crisostomo Dream Center in Lincoln High in 2015. Reyes offered aid and resources for immigrant students and parents to succeed and prosper, expanding to several other schools. After this, she would pursue a career as a teacher in the L.A. Unified School District. She hopes that her story serves as a reminder that, despite the obstacles faced due to her immigration status, she was able to overcome them and achieve greatness. She hopes that there will be reform to immigration policies so individuals like her won’t need to feel fear and shame about their immigration status and have a clear pathway to citizenship and status. The sources we used for this post come from the organizations 19th News and the University of California. If you would like to learn more about Reyes’ story, we encourage you to check the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7626188305079618846?is_from_webapp=1&sender_device=pc",
    link: "stories.html#angelica-reyes-story"
  },
  {
    order: 52,
    slug: "andry-jose-hernandez-romeros-story",
    images: [
      "stories/andry-jose-hernandez-romeros-story/1.png",
      "stories/andry-jose-hernandez-romeros-story/2.png",
      "stories/andry-jose-hernandez-romeros-story/3.png",
      "stories/andry-jose-hernandez-romeros-story/4.png",
      "stories/andry-jose-hernandez-romeros-story/5.png",
      "stories/andry-jose-hernandez-romeros-story/6.png",
      "stories/andry-jose-hernandez-romeros-story/7.png",
      "stories/andry-jose-hernandez-romeros-story/8.png",
      "stories/andry-jose-hernandez-romeros-story/9.png",
      "stories/andry-jose-hernandez-romeros-story/10.png",
      "stories/andry-jose-hernandez-romeros-story/11.png",
      "stories/andry-jose-hernandez-romeros-story/12.png",
      "stories/andry-jose-hernandez-romeros-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "Andry José Hernández Romero's Story",
    summary: "Today, we are sharing the story of Andry José Hernández Romero. Romero is an LGBTQ+ Venezuelan makeup artist. Romero faced harassment from the government due to poltiical reasons as he tried to pursue his career in Venezuela as a government-affiliated TV program makeup artist. Romero chose to move to the United States to continue to grow his career and to be free of certain stigmas in his home country. Romero bade his mother, father, and little brother goodbye and travelled to the United States with an appointment made with the CBP One App. As soon as Romero arrived in the United States, he was detained and sent to a detention facility, even though he had no criminal history and he had an appointment. Apparently, the new administration had revoked any appointments that had been scheduled with the CBP One App, even ones that had already been scheduled a long time ago. Romero was kept in detention for several months before being forcibly removed to the maximum-security prison facility known as the CECOT in El Salvador. His family didn’t know he had been sent to the CECOT, and he thought Romero was returning home after they were called by Romero before he was removed. They only realized that Romero was not sent home after seeing pictures of Romero having his head shaved while crying and praying for his mother in prison. They were heartbroken and had no way of contacting him. Romero had been removed without due process and was not allowed to plead his case. He was removed under the Alien Enemies Act, which allowed the government to forcibly remove immigrants without due process under speculation that they were affiliated with a notorious Venezuelan gang. Romero, however, had not been affiliated and was only speculated due to a tattoo of a crown. Romero’s family has also repeatedly explained that Romero and they are not a part of any criminal gangs. Across the United States, individuals across the country protested for the release of Romero and other Venezuelan victims of the Alien Enemies Act. Thankfully, after 125 days of confinement, Romero was finally released and felt the warm embrace of family. The sources we used for this post come from the organizations The Guardian, Congressional Equality Caucus, Human Rights Campaign, Advocate, ABC 10, Business of Fashion, New Yorker, Democracy Now, 60 Minutes, and Los Angeles LGBT Center. If you would like to learn more about Romero’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7587247993431035191?is_from_webapp=1&sender_device=pc",
    link: "stories.html#andry-jose-hernandez-romeros-story"
  },
  {
    order: 53,
    slug: "benjamin-marcelo-guerrero-cruzs-story-against-ice",
    images: [
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/1.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/2.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/3.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/4.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/5.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/6.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/7.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/8.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/9.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/10.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/11.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/12.png",
      "stories/benjamin-marcelo-guerrero-cruzs-story-against-ice/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "Benjamin Marcelo Guerrero-Cruz's Story",
    summary: "Today, we are sharing the story of Benjamin Marcelo Guerrero-Cruz. Cruz came to the United States from Chile under the Visa Waiver Program, which allowed Chilean nationals to enter the United States for some time without a visa. Cruz had turned 18 years old recently and was preparing for his senior year in high school. At home, he takes care of his 6-month-old twin brothers and 6-year-old sibling. He is very active in his community and is a part of his high school soccer team. When Cruz was walking his dog in his neighborhood, he would be detained by immigration officers. The officers would also tie his dog to a nearby tree, leaving the dog out to roam by itself. Cruz was detained and transferred to a detention center. Apparently, Cruz had overstayed his visa. A GoFundMe has been set up for Cruz’s family as they face this dire situation. The money will go towards legal fees for Cruz and basic essentials that are needed as the family struggles financially. If you would like to donate, feel free to support the family here:https://www.gofundme.com/f/help-support-a-family-in-crisis-after-ice-detention\n\nThe sources we used for this post come from the organizations GoFundMe, ABC 7, and Newsweek. If you would like to learn more about Cruz’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7539740837358472462?is_from_webapp=1&sender_device=pc",
    link: "stories.html#benjamin-marcelo-guerrero-cruzs-story-against-ice"
  },
  {
    order: 54,
    slug: "hendricks-story",
    images: [
      "stories/hendricks-story/1.png",
      "stories/hendricks-story/2.png",
      "stories/hendricks-story/3.png",
      "stories/hendricks-story/4.png",
      "stories/hendricks-story/5.png",
      "stories/hendricks-story/6.png",
      "stories/hendricks-story/7.png",
      "stories/hendricks-story/8.png",
      "stories/hendricks-story/9.png",
      "stories/hendricks-story/10.png",
      "stories/hendricks-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Hendrick's Story",
    summary: "Today, we are sharing an immigration story about a 2-year-old boy who is stranded in the United States while his family is forced to leave the U.S. for Honduras. Hendrick is a 2-year-old U.S. citizen and because he lacks the proper documentation to travel, he has to be left in the United States while their family leaves indefinitely. For Hendrick to get a passport, he would need both of his parent’s signatures to be able to register for one. Unfortunately, Hendrick’s father had already been deported to Honduras 2 months ago despite lacking any criminal history. Their family has 3 children, all of whom are U.S. citizens, but Hendrick is the only one who lacks a passport. The family has no other choice but to leave Hendrick behind due to the fact that they have not been able to get him a passport by the deadline they have to deport him to Honduras. If they don’t comply with deportation orders, they run the risk of being forcefully deported to a foreign country they have never been to. Stories like Hendrick's emphasize a need for immigration policies to change. Immigrants need to be treated with humanity, compassion, and empathy. Families should not be separated permanently like this. The source we used for this post comes from the organization WTHR. If you would like to learn more about Hendrick’s story, we encourage you to check out the story they published.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7524181223317556535?is_from_webapp=1&sender_device=pc",
    link: "stories.html#hendricks-story"
  },
  {
    order: 55,
    slug: "wilfredo-jesus-riveros-story-against-ice",
    images: [
      "stories/wilfredo-jesus-riveros-story-against-ice/1.png",
      "stories/wilfredo-jesus-riveros-story-against-ice/2.png",
      "stories/wilfredo-jesus-riveros-story-against-ice/3.png",
      "stories/wilfredo-jesus-riveros-story-against-ice/4.png",
      "stories/wilfredo-jesus-riveros-story-against-ice/5.png",
      "stories/wilfredo-jesus-riveros-story-against-ice/6.png",
      "stories/wilfredo-jesus-riveros-story-against-ice/7.png",
      "stories/wilfredo-jesus-riveros-story-against-ice/8.png",
      "stories/wilfredo-jesus-riveros-story-against-ice/9.png",
      "stories/wilfredo-jesus-riveros-story-against-ice/10.png",
      "stories/wilfredo-jesus-riveros-story-against-ice/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Wilfredo Jesus Rivero's Story",
    summary: "Today, we are sharing the story of Wilfredo Jesus Rivero. Rivero came to the United States from Venezuela legally via the CBP One Mobile Application. He was seeking asylum, and his court hearing for his asylum status was scheduled for a date in 2027. In his time in the United States, Rivero worked as a car detailer and coached a local youth soccer team in his community. He also met his now fiancée, Victoria. Due to an address change, the couple went to the immigration office to request that the court hearing be held at a location closer to them. This was when immigration officers would take Rivero into a separate room, causing Victoria to start becoming suspicious. Rivero was detained due to allegedly coming to the United States illegally. Even after repeated explanations that Rivero had come legally via the CBP One App, immigration officers still continued with the arrest and set Rivero to a detention center. Victoria was heartbroken and shockingly also found out she was pregnant a few days after Rivero’s detainment. The sources we used for this post come from the organizations KRCR and ABC 10. If you would like to learn more about Rivero’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7534560598567243021?is_from_webapp=1&sender_device=pc",
    link: "stories.html#wilfredo-jesus-riveros-story-against-ice"
  },
  {
    order: 56,
    slug: "yeonsoo-gos-story-against-ice",
    images: [
      "stories/yeonsoo-gos-story-against-ice/1.png",
      "stories/yeonsoo-gos-story-against-ice/2.png",
      "stories/yeonsoo-gos-story-against-ice/3.png",
      "stories/yeonsoo-gos-story-against-ice/4.png",
      "stories/yeonsoo-gos-story-against-ice/5.png",
      "stories/yeonsoo-gos-story-against-ice/6.png",
      "stories/yeonsoo-gos-story-against-ice/7.png",
      "stories/yeonsoo-gos-story-against-ice/8.png",
      "stories/yeonsoo-gos-story-against-ice/9.png",
      "stories/yeonsoo-gos-story-against-ice/10.png",
      "stories/yeonsoo-gos-story-against-ice/11.png",
      "stories/yeonsoo-gos-story-against-ice/12.png",
      "stories/yeonsoo-gos-story-against-ice/13.png",
      "stories/yeonsoo-gos-story-against-ice/14.png"
    ],
    featured: false,
    isNewest: false,
    title: "Yeonsoo Go's Story",
    summary: "Today, we are sharing the story of Yeonsoo Go. Yeonsoo Go is a 20-year-old student at Purdue University College of Pharmacy. She came to the United States in 2021 with her mother under a Religious Worker’s Dependent visa. She was able to get this visa because her mother was a priest of a local church in their Manhattan community. After graduating from high school, Yeonsoo was able to go to college at Purdue University. Wanting to switch her visa, Yeonsoo had a routine visa hearing to switch her current visa for a student visa. After the hearing, however, immigration officers would show up and detain her on the spot, quickly transferring her to a detention center in Louisiana right after. Allegedly, Yeonsoo’s visa had expired 2 years ago, and she had overstayed her stay. This was not true, and Yeonsoo’s visa was good until December of this year. Yeonsoo’s story spread throughout her community, and protests were set up, protesting for Yeonsoo’s release. Thankfully, after 5 days of detention, Yeonsoo was finally released and able to go home. The sources we used for this post come from the organizations ABC, CNN, Washington Post, WTHR, and Episcopal News Service. If you would like to learn more about Yeonsoo’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7535660533228260621?is_from_webapp=1&sender_device=pc",
    link: "stories.html#yeonsoo-gos-story-against-ice"
  },
  {
    order: 57,
    slug: "rumeysa-ozturks-story",
    images: [
      "stories/rumeysa-ozturks-story/1.png",
      "stories/rumeysa-ozturks-story/2.png",
      "stories/rumeysa-ozturks-story/3.png",
      "stories/rumeysa-ozturks-story/4.png",
      "stories/rumeysa-ozturks-story/5.png",
      "stories/rumeysa-ozturks-story/6.png",
      "stories/rumeysa-ozturks-story/7.png",
      "stories/rumeysa-ozturks-story/8.png",
      "stories/rumeysa-ozturks-story/9.png",
      "stories/rumeysa-ozturks-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Rümeysa Öztürk's Story",
    summary: "Today, we are sharing the story of Rümeysa Öztürk. Öztürk was born in Turkey and grew up with a passion for refugee representation. She was also very passionate about pursuing education, earning a degree in Psychology and Turkish Literature at Istanbul Şehir University. She was also awarded the Fulbright Scholarship, which allowed her to pursue higher education in the United States. Öztürk came to the United States on a student visa and got her master’s degree at Columbia University. Now, she is pursuing her PhD in Child Study and Human Development and Tufts University. Öztürk would never expect, however, to be arrested while she was going to her friend's house for Iftar, the evening meal breaking for Ramadan. Öztürk was detained and transferred through many detention facilities. The detention facility's poor conditions caused an array of health conditions for Öztürk, worsening her asthma. She reported that she had multiple attacks during her stay in the detention facilities. Allegedly, Öztürk was detained because her visa had been revoked on the premise that she had affiliations with certain organizations. There was no evidence that supported or gave any link that Öztürk was affiliated with these organizations, however. Öztürk would be later released on bail on the premise that there was no sufficient evidence for detaining her, and it was a breach of her freedom of speech. The sources we used for this post come from the organizations Tufts University, Vanity Fair, and TIME. If you would like to learn more about Öztürk’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7565738833547889975?is_from_webapp=1&sender_device=pc",
    link: "stories.html#rumeysa-ozturks-story"
  },
  {
    order: 58,
    slug: "ellie-aghayevas-story",
    images: [
      "stories/ellie-aghayevas-story/1.png",
      "stories/ellie-aghayevas-story/2.png",
      "stories/ellie-aghayevas-story/3.png",
      "stories/ellie-aghayevas-story/4.png",
      "stories/ellie-aghayevas-story/5.png",
      "stories/ellie-aghayevas-story/6.png",
      "stories/ellie-aghayevas-story/7.png",
      "stories/ellie-aghayevas-story/8.png",
      "stories/ellie-aghayevas-story/9.png",
      "stories/ellie-aghayevas-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Ellie Aghayeva's Story",
    summary: "Today, we are sharing the story of Ellie Aghayeva. Aghayeva came to the United States from Azerbaijan in 2016 under a student visa. She is currently a senior at Columbia University and is double-majoring in neuroscience and political science. Aside from schoolwork, Aghayeva has amassed a large social media following, with more than 200 thousand followers across various social media platforms such as TikTok and Instagram. Aghayeva has faced legal issues with her immigration status. Allegedly, as DHS reports, Aghayeva had her student visa revoked because she had missed too many classes in 2016. On February 27th, immigration officers came searching for Aghayeva, entering her apartment complex at Columbia University by lying and misinterpreting the reason why they were there. The officers said that they were searching for a missing child, and it was only after coming in contact with Aghayeva that they revealed the real reason they were there. Aghayeva was detained by immigration officers around 6 am. Aghayeva would message her friends about her fear and distress and would also share her experience online on her various social media platforms. Widespread outrage online and in New York spread, demanding Aghayeva’s release. Thankfully, her detention was only hours before Mayor Zohran Mamdani met up with the President, and Mamdani voiced his concerns about the case of Aghayeva and also other similar cases of Colombian students being detained by immigration officers for no clear reason. Thankfully, Aghayeva was released shortly after. The sources we used for this post come from the organizations The Daily Beast, Gulf News, The People, NDTV, The Guardian, CNN, Columbia Spectator, NPR, and The New York Times. If you would like to learn more about Aghayeva’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7612425628918238477?is_from_webapp=1&sender_device=pc",
    link: "stories.html#ellie-aghayevas-story"
  },
  {
    order: 59,
    slug: "ray-andersons-story",
    images: [
      "stories/ray-andersons-story/1.png",
      "stories/ray-andersons-story/2.png",
      "stories/ray-andersons-story/3.png",
      "stories/ray-andersons-story/4.png",
      "stories/ray-andersons-story/5.png",
      "stories/ray-andersons-story/6.png",
      "stories/ray-andersons-story/7.png",
      "stories/ray-andersons-story/8.png",
      "stories/ray-andersons-story/9.png",
      "stories/ray-andersons-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Ray Anderson's Story",
    summary: "Today, we are sharing the story of Ray Anderson Avila Ramirez. Ray came to the United States in 2013, migrating from Peru. He loves to go to the gym, walk his dog, and visit various beaches and parks with his fiancée. He and his fiancée had planned a future together in the United States, hoping to get married. Ray pays taxes, works hard, and has already applied for U.S citizenship and is awaiting the approval of his status. Ray and his fiancée’s dream was shattered right in front of them when he was detained by immigration officers in New York. Ray has no criminal record. Ray’s future is filled with ambiguity and concern from his family, with a scheduled meeting in Orange County coming up soon. Ray is in dire need of legal representation, and his case is very much winnable if he gets the proper attention and help. His friends and family are worried sick for him. If you would like to support Ray’s legal fees and pay for Ray’s legal representation, feel free to donate to the GoFundMe here:\nhttps://www.gofundme.com/f/help-ray-fight-ice-detention?attribution_id=sl:1d85ec39-3c9c-4746-92db-b9df162ac593&lang=en_US&ts=1758507592&utm_campaign=fp_sharesheet&utm_content=amp13_t1-amp17_ta&utm_medium=customer&utm_source=copy_link\nWe are very grateful to be able to share Ray’s story, and we would like to thank @savingrayavilia for contacting us and providing us with information about Ray. If you would like to learn more about Ray Avilia’s story, we encourage you to check out their page.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7555325050837126431?is_from_webapp=1&sender_device=pc",
    link: "stories.html#ray-andersons-story"
  },
  {
    order: 60,
    slug: "jaime-galvan-sanchezs-story-against-ice",
    images: [
      "stories/jaime-galvan-sanchezs-story-against-ice/1.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/2.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/3.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/4.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/5.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/6.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/7.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/8.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/9.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/10.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/11.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/12.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/13.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/14.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/15.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/16.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/17.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/18.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/19.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/20.png",
      "stories/jaime-galvan-sanchezs-story-against-ice/21.png"
    ],
    featured: false,
    isNewest: false,
    title: "Jaime Galvan Sanchez's Story",
    summary: "Today, we are sharing the story of Jaime Galvan Sanchez and his daughter, Geovanna. Jaime was born in Mexico and had 5 siblings. After turning 12 years old, he would work as a seasonal agricultural worker. When he was 18 years old, he would meet his wife, and a couple of years later, they would get married and have a daughter named Geovanna. Geovanna always wished to learn English, so in order for Geovanna to get a better education and have a better opportunity in life, Jaime made the decision to bring his family to the United States. They came on a visa. Geovanna had come to the United States undocumented, but was under the protection of the Deferred Action for Childhood Arrivals program, and later got permanent residency. Jaime and his wife worked day and night to provide for their growing family, working from the crack of dawn to fund Geovanna’s education and save money to buy a plot of land and materials for a house. One of Jaime’s long-term goals was to build a house, and he was able to accomplish this with a little savings. Unfortunately, the family would never expect that Jaime would be detained by immigration officers while he was working on a tractor. Jaime was also deported without due process, but was later brought back after recognition of mistakes. Jaime’s deportation had a massive impact on the family, causing Geovanna to have to provide for the family by herself. Geovanna had initially dreamed of going to nursing school, but college financial aid wasn’t sufficient for her to pursue higher education, so she could only work in the fields with her father and mother and later get a job at a pizza restaurant. The family is now struggling to stay financially afloat, especially due to the addition of legal fees and application costs for a green card and work permit for Jaime. The sources we used for this post come from the organizations Texas Tribune, CNN, and DACA. If you would like to learn more about Jaime and Geovanna’s story, we encourage you to check out the story published by the Texas Tribune.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7538643122549460279?is_from_webapp=1&sender_device=pc",
    link: "stories.html#jaime-galvan-sanchezs-story-against-ice"
  },
  {
    order: 61,
    slug: "madonna-donna-kashanians-story-with-ice",
    images: [
      "stories/madonna-donna-kashanians-story-with-ice/1.png",
      "stories/madonna-donna-kashanians-story-with-ice/2.png",
      "stories/madonna-donna-kashanians-story-with-ice/3.png",
      "stories/madonna-donna-kashanians-story-with-ice/4.png",
      "stories/madonna-donna-kashanians-story-with-ice/5.png",
      "stories/madonna-donna-kashanians-story-with-ice/6.png",
      "stories/madonna-donna-kashanians-story-with-ice/7.png",
      "stories/madonna-donna-kashanians-story-with-ice/8.png",
      "stories/madonna-donna-kashanians-story-with-ice/9.png",
      "stories/madonna-donna-kashanians-story-with-ice/10.png",
      "stories/madonna-donna-kashanians-story-with-ice/11.png",
      "stories/madonna-donna-kashanians-story-with-ice/12.png"
    ],
    featured: false,
    isNewest: false,
    title: "Mandonna “Donna” Kashanian's Story",
    summary: "Today, we are sharing the story of Madonna Kashanian. Madonna Kashanian is an immigrant from Iran. She came to the United States through a student visa and soon after, applied for permanent residency. Due to a past marriage that the government deemed fraudulent, Kashanian was denied permanent residency. Kashanian’s husband notes how she was forced into that marriage at a very young age. Although she was not allowed to get permanent residency, Kashanian was given a stay of removal. As long as she complied with immigration rules and met up with immigration officers annually, she would be legally allowed to work and live in the United States. Even so, Kashanian was detained by immigration officers when she was gardening outside her house on Sunday. Right now, she is held in immigration detention as her family tries to get as much information about the situation as possible. Kashanian had not done anything illegal and had complied with immigration regulations, making sure to do everything they asked for. The sources we used for this post come from The Guardian, AP, and Raw Story. If you would like to learn more about Kashanian’s story, we encourage you to read the stories published by these organizations. We believe it is not fair to wrongly treat immigrants, such as Kashanian, that have done nothing wrong and have not broken any laws. Kashanian was legally allowed to remain in the United States, yet was punished even though she was following and complying with rules and regulations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7521556233384447287?is_from_webapp=1&sender_device=pc",
    link: "stories.html#madonna-donna-kashanians-story-with-ice"
  },
  {
    order: 62,
    slug: "fatima-issela-velasquez-antonios-story",
    images: [
      "stories/fatima-issela-velasquez-antonios-story/1.png",
      "stories/fatima-issela-velasquez-antonios-story/2.png",
      "stories/fatima-issela-velasquez-antonios-story/3.png",
      "stories/fatima-issela-velasquez-antonios-story/4.png",
      "stories/fatima-issela-velasquez-antonios-story/5.png",
      "stories/fatima-issela-velasquez-antonios-story/6.png",
      "stories/fatima-issela-velasquez-antonios-story/7.png",
      "stories/fatima-issela-velasquez-antonios-story/8.png",
      "stories/fatima-issela-velasquez-antonios-story/9.png",
      "stories/fatima-issela-velasquez-antonios-story/10.png",
      "stories/fatima-issela-velasquez-antonios-story/11.png",
      "stories/fatima-issela-velasquez-antonios-story/12.png"
    ],
    featured: false,
    isNewest: false,
    title: "Fatima Issela Velasquez-Antonio's Story",
    summary: "Today, we are sharing the story of Fatima Issela Velasquez-Antonio. Fatima is originally from Honduras, a country where gang violence runs rampant. Fatima always thought that Honduras was not the place for her, seeking a way out. Fatima’s mom would sadly pass away when she was only 12 years old due to cancer. Shortly after, Fatima would also lose her father due to gang violence. 14-year-old Fatima decided to run away from Honduras, traveling to the United States and seeking asylum as an unaccompanied minor. Family in The Triangle, a region in central North Carolina that is anchored by three major cities: Raleigh, Durham, and Chapel Hill, would help to take care of Fatima as she transitioned to her new life in America. Over the course of nearly a decade, Fatima would work, study, and live in North Carolina. She would graduate from Corinth Holders High School in Johnston County and started supporting herself through her job in an HVAC company. 23-year-old Fatima and her boyfriend would pool their money together to afford their first house, dreaming of starting a family in the U.S. Just around Thanksgiving of this year, Fatima would be detained by officers during an immigration sweep in Raleigh, and taken into a detention facility in Georgia. Fatima had no criminal record, only had two minor traffic violations throughout her time in the U.S. Fatima also had a work permit. Fatima and her family took her case to court and sought her release by bond, but judges would deny their request. Individuals in Wendell were furious about Fatima’s detention, advocating for her release in a rally, drawing in over 150 supporters who demanded Fatima to be released. Thankfully, after a month in detention, Fatima would be released from detention and allowed to go home. Fatima’s immigration journey is not over yet, but this is a huge step towards the right path. The sources we used for this post come from the organizations Charlotte Observer, News Observer, PBS, The Marshall Project, WRAL, ABC 11, and GoFundMe. If you would like to learn more about Fatima’s story, we encourage you to check out the stories published by these organizations. The link to Fatima’s GoFundMe page will be linked here: https://www.gofundme.com/f/support-fatimas-fight-against-deportation?attribution_id=sl%3Ad9386d8c-8b43-451a-97cb-7b5e566274a7&lang=en_US&utm_campaign=man_ss_icons&utm_medium=customer&utm_source=copy_link.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7589073748628622647?is_from_webapp=1&sender_device=pc",
    link: "stories.html#fatima-issela-velasquez-antonios-story"
  },
  {
    order: 63,
    slug: "guilherme-lemes-cardoso-e-silvas-story-against-ice",
    images: [
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/1.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/2.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/3.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/4.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/5.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/6.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/7.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/8.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/9.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/10.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/11.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/12.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/13.png",
      "stories/guilherme-lemes-cardoso-e-silvas-story-against-ice/14.png"
    ],
    featured: false,
    isNewest: false,
    title: "Guilherme Lemes Cardoso E Silva's Story",
    summary: "Today, we are sharing the story of Guilherme Lemes Cardoso E Silva. Silva came to the United States from Brazil. He is a 35-year-old visual artist in Washington State. He frequently engages in drawing murals, which are drawn all over Washington State. Silva and his wife, Rachel, are expecting a baby boy in October. Silva and Rachel are working with immigration lawyers on his green card status so he can be a permanent resident. As he was in the process of applying and waiting for approval, he had also been taking strides to renew his working visa. Silva has no criminal record and no warrant for arrest or deportation. When Silva drove to meet and pick up his daughter, whom he shares custody of with his ex-wife, he was stopped and detained by immigration officers. While being detained, Silva had tried to record the incident, but his phone was taken away by an immigration officer. The immigration agents laughed as they took away his phone, stating how they were lucky they would not be on the news this time. Silva would be detained and sent to a detention center with his soon-to-be expecting wife trying her hardest to try and get Silva out. We don’t believe families should be torn apart like this, especially if they have not done anything inherently wrong and are trying their best to make a life in the United States and get their citizenship. Immigrants should not feel fear of going outside just to be picked up by immigration officers and treated like they are not human. If you would like to support Silva and Rachel’s family and help a family in need, feel free to donate to their GoFundMe here: https://www.gofundme.com/f/legal-aid-for-gui-and-rachel\nThe sources we used for this post come from the organizations NBC, The Daily Beast, and Terra Brazil. If you would like to learn more about Silva’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7528209549912771854?is_from_webapp=1&sender_device=pc",
    link: "stories.html#guilherme-lemes-cardoso-e-silvas-story-against-ice"
  },
  {
    order: 64,
    slug: "nuvia-martinez-ventura-story",
    images: [
      "stories/nuvia-martinez-ventura-story/1.png",
      "stories/nuvia-martinez-ventura-story/2.png",
      "stories/nuvia-martinez-ventura-story/3.png",
      "stories/nuvia-martinez-ventura-story/4.png",
      "stories/nuvia-martinez-ventura-story/5.png",
      "stories/nuvia-martinez-ventura-story/6.png",
      "stories/nuvia-martinez-ventura-story/7.png",
      "stories/nuvia-martinez-ventura-story/8.png",
      "stories/nuvia-martinez-ventura-story/9.png",
      "stories/nuvia-martinez-ventura-story/10.png",
      "stories/nuvia-martinez-ventura-story/11.png",
      "stories/nuvia-martinez-ventura-story/12.png"
    ],
    featured: false,
    isNewest: false,
    title: "Nuvia Martinez Ventura Story",
    summary: "Today, we are sharing the story of Nuvia Martinez Ventura. Ventura is a 30-year-old who fled El Salvador in 2016 and came to the United States. She fled El Salvador due to gang violence, reporting that gangs had taken the life of her husband, something that would prompt her to move to the United States. Ventura had no clear path to citizenship as her asylum had been denied twice, even though she had a clear reason for applying for asylum, and she had no criminal record. She would still make the most of what she had and still worked with lawyers on getting legal status for herself. She has 5 children, ranging from 3-11 years old. Many of the children struggle with medical complications such as learning disabilities and diabetes. Ventura had already struggled with this due to their financial situation, but didn’t complain and still abided by the law. She also would check in with immigration officers routinely and never missed an appointment. This would all change, however. Ventura was detained by immigration officers during a routine check-in and put into a detention center. Immigration officers are working to deport her back to El Salvador. If you would like to support Ventura’s family in this time of need, there is a petition that is being held to help get Ventura out of the detention center and away from deportation. If you would like to sign the petition, feel free to sign here: https://www.change.org/p/free-nuvia-reunite-a-detained-mother-with-her-hospitalized-child We already have 156 signatures, and your signature would possibly be one step closer to her release. The sources we used from this post come from the organizations NBC NY, Change, Newsday, and News 12. If you would like to learn more about Ventura’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7530085732665265463?is_from_webapp=1&sender_device=pc",
    link: "stories.html#nuvia-martinez-ventura-story"
  },
  {
    order: 65,
    slug: "momodou-taals-story",
    images: [
      "stories/momodou-taals-story/1.png",
      "stories/momodou-taals-story/2.png",
      "stories/momodou-taals-story/3.png",
      "stories/momodou-taals-story/4.png",
      "stories/momodou-taals-story/5.png",
      "stories/momodou-taals-story/6.png",
      "stories/momodou-taals-story/7.png",
      "stories/momodou-taals-story/8.png",
      "stories/momodou-taals-story/9.png",
      "stories/momodou-taals-story/10.png",
      "stories/momodou-taals-story/11.png",
      "stories/momodou-taals-story/12.png",
      "stories/momodou-taals-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "Momodou Taal’s Story",
    summary: "Today, we are sharing the story of Momodou Taal. Momodou Taal is a Cornell student and pro-Palestinian activist. He is a dual citizen of the United Kingdom and Gambia. Momodou Taal is legally allowed to be in the United States through a student visa as he is a student at Cornell University. Momodou Taal had been involved in numerous protests and activism activities on campus. Recently, immigration officers showed up at his apartment and demanded to know where he was. Momodou Taal’s student-visa had also been revoked due to his protesting. During court, Momodou asked for his deportation order to be blocked but a judge declined this request. Because of this, Momodou voluntarily left the United States. We believe that immigrants, such as Momodou Taal, should not be treated this way. Immigrants and activists should be comfortable advocating for what they believe in and protesting. They should not be scared to speak their mind and share their opinions. The sources we used for this post come from the organizations CNN, NBC, The Nation, and AfricaSaCountry. If you would like to learn more about Momodou’s story, we encourage you to check out the stories posted by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7524878445113806111?is_from_webapp=1&sender_device=pc",
    link: "stories.html#momodou-taals-story"
  },
  {
    order: 66,
    slug: "yunseo-chungs-story",
    images: [
      "stories/yunseo-chungs-story/1.png",
      "stories/yunseo-chungs-story/2.png",
      "stories/yunseo-chungs-story/3.png",
      "stories/yunseo-chungs-story/4.png",
      "stories/yunseo-chungs-story/5.png",
      "stories/yunseo-chungs-story/6.png",
      "stories/yunseo-chungs-story/7.png",
      "stories/yunseo-chungs-story/8.png",
      "stories/yunseo-chungs-story/9.png",
      "stories/yunseo-chungs-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Yunseo Chung's Story",
    summary: "Thank you so much for the support on the recent post. We are very grateful to see that many of you also believe and support in fighting against immigrant injustice. to clarify, we hope to encourage others to speak up about immigrant injustice through our posts. in the future, we hope to be able to organize fundraisers (such as gofundmes) to help support inidivduals and families that have been impacted by the mass deportations recently. Yunseo Chung is a 21 year old Korean American student at columbia university who was protesting her pro-palestinian beliefs at her university. She was targetted by ICE and pursued for alleged criminal acts and was in danger of deportation. She’s lived in the U.S. since she was 7. She has no criminal record. She was standing up for what she believed in. And for that, she faced detention and deportation. The sources we used in our post are from The Guardian and CUNYClear. If you would like to learn more about Yunseo’s story, we strongly encourage you to check out the articles they have published. We will continue to share stories of individuals affected by these recent mass deportations. If you, or anyone that you know has been impacted by these deportations, please feel free to reach out and message us. We would love to hear their stories and post about it to spread awareness and potentially raise money for individuals in need. #breakthesilence",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7519348722879302943?is_from_webapp=1&sender_device=pc",
    link: "stories.html#yunseo-chungs-story"
  },
  {
    order: 67,
    slug: "johanny-lacruzs-story",
    images: [
      "stories/johanny-lacruzs-story/1.png",
      "stories/johanny-lacruzs-story/2.png",
      "stories/johanny-lacruzs-story/3.png",
      "stories/johanny-lacruzs-story/4.png",
      "stories/johanny-lacruzs-story/5.png",
      "stories/johanny-lacruzs-story/6.png",
      "stories/johanny-lacruzs-story/7.png",
      "stories/johanny-lacruzs-story/8.png",
      "stories/johanny-lacruzs-story/9.png",
      "stories/johanny-lacruzs-story/10.png",
      "stories/johanny-lacruzs-story/11.png",
      "stories/johanny-lacruzs-story/12.png",
      "stories/johanny-lacruzs-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "Johanny Lacruz's Story",
    summary: "Today, we are sharing the story of Johanny Lacruz. Lacruz came to the United States from Venezuela after suffering political threats due to her affiliation with the party Voluntad Popular, a progressive and democratic party in Venezuela. Lacruz successfully applied for asylum under the CBP One App in November of 2023 and would very quickly meet Rodriguez. Rodriguez and Lacruz quickly hit it off and started dating. The couple travels across the country together, going to Arizona, Portland, and then Rodriguez’s hometown. Lacruz quickly became a part of Rodriguez’s family and would routinely celebrate with them and host birthday parties for Rodriguez’s mother and sister. Rodriguez planned to propose to Lacruz on their trip to San Antonio on Valentine's Day at the top of the Tower of the Americas. This dream would be shattered when Lacruz and Rodriguez would be pulled over during an immigration checkpoint on their drive to San Antonio. The patrol officer asked Lacruz for identification, and she showed him her work permit, which would expire in 2030. Lacruz would be put in custody and sent to a detention facility, less than a month prior to her asylum hearing in March. Lacruz had an asylum case, had a work permit, paid taxes, and had no criminal record, and she was still detained. Lacruz has kept in contact with Rodriguez and often tells him about the poor conditions in the detention facility. They are often underfed, and medical assistance is very slow. Lacruz has thought of voluntarily departing, which would allow her to return and resume her case for asylum. Rodriguez has emphasized his frustration that cases just like his fiancée’s are dropped, and individuals are taken out of detention because of media presence. The sources we used for this post come from the organizations The Texas Tribune, KRGV, and Law Group International. If you would like to learn more about Lacruz’s story, we encourage you to check out the story published by The Texas Tribune.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7617645660099104014?is_from_webapp=1&sender_device=pc",
    link: "stories.html#johanny-lacruzs-story"
  },
  {
    order: 68,
    slug: "alfredo-linares-story",
    images: [
      "stories/alfredo-linares-story/1.png",
      "stories/alfredo-linares-story/2.png",
      "stories/alfredo-linares-story/3.png",
      "stories/alfredo-linares-story/4.png",
      "stories/alfredo-linares-story/5.png",
      "stories/alfredo-linares-story/6.png",
      "stories/alfredo-linares-story/7.png",
      "stories/alfredo-linares-story/8.png",
      "stories/alfredo-linares-story/9.png",
      "stories/alfredo-linares-story/10.png",
      "stories/alfredo-linares-story/11.png",
      "stories/alfredo-linares-story/12.png"
    ],
    featured: false,
    isNewest: false,
    title: "Alfredo Linares Story",
    summary: "Today, we are sharing the story of Alfredo Linares and his wife Raegan Klien. Alfredo Linares was an undocumented immigrant from the United States and had moved here when he was only 17 to go and be with his father. When he came to the U.S., he didn’t understand the system or the path to citizenship very well. Linares built a life in the U.S. throughout his 20 years in the country. He started off as a dishwasher and eventually became a chef for a fine dining, Michelin-starred restaurant. Linares had no path to citizenship until he married his wife, who is a U.S. citizen, last year. Still, the only path to citizenship meant going back to Mexico and living for a decade before being eligible, something that seemed impossible to do without leaving his wife behind. Linares had no criminal records and had no deportation orders, yet he was faced with only one choice: self-deporting back to Mexico. Linares and Klein made the decision to move together to Mexico in hopes of not risking the chance of immigration officers taking Linares and deporting him, or worse, detaining him and sending him to El Salvador. We believe that immigrants like Linares should have the opportunity and the path to citizenship. Linares came to the U.S. when he was only 17 years old, having no idea about the immigration rules and policies. Now, after building his whole life in the U.S., the only choice he had was to leave willingly or forcefully. In this story, we used sources from NY Times, NBC, and The Guardian. If you would like to learn more about Linares’ story, we encourage you to read the stories published by those organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7521918447454817549?is_from_webapp=1&sender_device=pc",
    link: "stories.html#alfredo-linares-story"
  },
  {
    order: 69,
    slug: "shirly-guardados-story",
    images: [
      "stories/shirly-guardados-story/1.png",
      "stories/shirly-guardados-story/2.png",
      "stories/shirly-guardados-story/3.png",
      "stories/shirly-guardados-story/4.png",
      "stories/shirly-guardados-story/5.png",
      "stories/shirly-guardados-story/6.png",
      "stories/shirly-guardados-story/7.png",
      "stories/shirly-guardados-story/8.png",
      "stories/shirly-guardados-story/9.png",
      "stories/shirly-guardados-story/10.png",
      "stories/shirly-guardados-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Shirly Guardado's Story",
    summary: "Today, we are sharing the story of Shirly Guardado, the wife of a U.S Army Sergeant. Guardado came to the United States, fleeing Honduras, when she was only 16 years old. After arriving at the border, she was apprehended and given an expedited removal order, but allowed to enter. Guardado would meet her now husband, Correa, in a coffee shop in Houston in 2020. The two would fall in love and get married in 2022, eventually having a son who is currently 10 months old. A lawyer would help with Guardado’s paperwork to be sponsored by Correa, who was a U.S citizen and also a U.S. Army sergeant, to get a green card. Correa would also be granted a work permit so long as she regularly went to immigration check-ins. Because of Correa’s military status, the couple also applied to Guardado for military parole, allowing her to stay in the U.S while she secures permanent residency. Although Guardado had no criminal record, had work authorization, and was sponsored by Correa, her military parole was denied by the military because of her expedited removal order, which was issued a decade ago. This forced her to apply for military parole through immigration officials, and her application had been pending for over a year. On a regular morning, Guardado and Correa woke up early to get their son ready for the day and also to hand him off to Guardado’s mother to take care of when they went to work. However, that day, Guardado would receive an unexpected phone call from a public service officer telling her to meet them in the parking lot. There, they would tell her that her car had been involved in an accident, and when Guardado would step closer, three men dressed in plain clothes would handcuff her and reveal that they were immigration agents who were there to detain her. Guardado was taken away, and Correa had no idea of her whereabouts for over three days before finally receiving confirmation that she was held in a cell in Conroe. Because of their situation, Correa believed that this was all a misunderstanding and that Guardado would be released very soon. Days turned into weeks, which turned into over three months. Eventually, Guardado would be deported to Honduras on her 28th birthday. Correa plans to take their 10-month-old son and move to Honduras, selling all their belongings to reunite the family. Guardado has struggled after being sent to Honduras, where she had no family left because she had left when she was so young, having to jump between hotels. The sources we used for this post come from the organizations The Texas Tribune, Newsweek, Fox 26, Latin Times, and Jonathan Mejia. If you would like to learn more about Guardado’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7620621213794176269?is_from_webapp=1&sender_device=pc",
    link: "stories.html#shirly-guardados-story"
  },
  {
    order: 70,
    slug: "carlos-garcias-story",
    images: [
      "stories/carlos-garcias-story/1.png",
      "stories/carlos-garcias-story/2.png",
      "stories/carlos-garcias-story/3.png",
      "stories/carlos-garcias-story/4.png",
      "stories/carlos-garcias-story/5.png",
      "stories/carlos-garcias-story/6.png",
      "stories/carlos-garcias-story/7.png",
      "stories/carlos-garcias-story/8.png",
      "stories/carlos-garcias-story/9.png",
      "stories/carlos-garcias-story/10.png"
    ],
    featured: false,
    isNewest: false,
    title: "Carlos Garcia's Story",
    summary: "Today, we are sharing the story of Carlos Roberto Garcia. Garcia is a former Venezuelan mayor who fled Venezuela due to tensiosn adn conflicts that arose when Garcia didn’t follow orders given by the Venezuelan President to silence the people of Venezuela who were heated due to implementations. Garica did not want to silence the voices of his people. This caused him to be politically persecuted, and Garcia and his wife would flee to Colombia, where they would apply for asylum to come to the United States. Garica and his family would be granted temporary asylum under the Biden administration in 2022, and Garcia would apply for asylum and also be granted a work permit in the U.S which would last till 2030. Garica had made sure to follow all the necessary procedures to be granted asylum. He would participate in routine immigration check-ins, participating in 28 of them. Garcia also had no criminal record. Garica worked as an Amazon delivery driver and would often work overtime so that he could donate to people in need in Venezuela. Even though he had long cut ties with Venezuela, he still cared deeply about his people and still worried for them. Garica would never expect to be detained during a routine immigration check-in. His future is still unsure; however, if Garcia is sent back to Venezuela, it could mean at minimum 15 months in prison for going against the President and could also lead to Garcia being harmed. The sources we used for this post come from the organizations CNN, WCPO, The New York Times, WLWT, and ELPAIS. If you would like to learn more about Garcia’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7610241516967103757?is_from_webapp=1&sender_device=pc",
    link: "stories.html#carlos-garcias-story"
  },
  {
    order: 71,
    slug: "keneth-mena-torress-story",
    images: [
      "stories/keneth-mena-torress-story/1.png",
      "stories/keneth-mena-torress-story/2.png",
      "stories/keneth-mena-torress-story/3.png",
      "stories/keneth-mena-torress-story/4.png",
      "stories/keneth-mena-torress-story/5.png",
      "stories/keneth-mena-torress-story/6.png",
      "stories/keneth-mena-torress-story/7.png",
      "stories/keneth-mena-torress-story/8.png",
      "stories/keneth-mena-torress-story/9.png",
      "stories/keneth-mena-torress-story/10.png",
      "stories/keneth-mena-torress-story/11.png",
      "stories/keneth-mena-torress-story/12.png",
      "stories/keneth-mena-torress-story/13.png",
      "stories/keneth-mena-torress-story/14.png"
    ],
    featured: false,
    isNewest: false,
    title: "Keneth Mena Torres's Story",
    summary: "Today, we are sharing the story of Keneth Mena Torres. Torres came to the United States from Honduras when he was only 11 years old. Growing up in Campo Cielo, a neighborhood in Honduras that was riddled by gang-violence and economic hardship, Torres really wanted to escape this nightmare. When he was only 6 years old, his mother couldn’t bear the violence and economic hardship any longer, and left for the United States. Torres would later join his mother in a treacherous journey that brought him to the U.S-Mexico Border. Torres had initially been accompanied by his uncle, who also wanted to come to the United States, but after putting Torres in line to get in, his uncle was never seen again. After coming to the United States, Torres rejoined his mother, who was granted asylum. Torres also applied for asylum, and the application had been in process. In the United States, Torres paid taxes, obeyed the laws, worked a job, and helped contribute to her mother’s mortgage. Torres had been a law-abiding individual and done everything he needed to do. Torres would never expect that, during an early summer morning, officers would swarm his house, demanding that he open his door and come outside with his mother. The officers pointed weapons at them, telling them to kneel. While they were being handcuffed, other officers stormed the house, ripping mattresses, flipping over furniture, and breaking cabinets. It turns out that they had a warrant to investigate two wanted individuals in possession of substances; however, Torres and his mother were suspects in the case. Nevertheless, Torres was detained alongside his friend, who suffered from severe intellectual and developmental disabilities. In the detention facility, Torres suffered horrible facility conditions, only being able to shower in scalding hot water, fed meager meals, sleeping on mattresses that were very thin, and living in cells that were frigid cold. Torres at times felt like voluntarily deporting due to the mental and physical burden of living in the facility. Thankfully, after 62 days of the nightmare, Torres was released and granted asylum sometime later. The sources we used for this post come from the organization San Francisco Chronicle. If you would like to learn more about Keneth Mena Torres’s story, we encourage you to check out the story published by this organization.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7582813141050887454?is_from_webapp=1&sender_device=pc",
    link: "stories.html#keneth-mena-torress-story"
  },
  {
    order: 72,
    slug: "howard-dean-baileys-story",
    images: [
      "stories/howard-dean-baileys-story/1.png",
      "stories/howard-dean-baileys-story/2.png",
      "stories/howard-dean-baileys-story/3.png",
      "stories/howard-dean-baileys-story/4.png",
      "stories/howard-dean-baileys-story/5.png",
      "stories/howard-dean-baileys-story/6.png",
      "stories/howard-dean-baileys-story/7.png",
      "stories/howard-dean-baileys-story/8.png",
      "stories/howard-dean-baileys-story/9.png",
      "stories/howard-dean-baileys-story/10.png",
      "stories/howard-dean-baileys-story/11.png",
      "stories/howard-dean-baileys-story/12.png",
      "stories/howard-dean-baileys-story/13.png"
    ],
    featured: false,
    isNewest: false,
    title: "Howard Dean Bailey’s Story",
    summary: "Today, we are sharing the story of Howard Dean Bailey. This is an old story from 2014, but it still holds a lot of value towards spreading awareness of immigrant injustice. Second Voice is a nonpartisan nonprofit organization dedicated to sharing the voices of immigrants who have been wrongly mistreated and spreading awareness. We don’t support or argue against any political party, and we are strictly here to spread awareness and try to better immigrant regulations and immigrant policies. We want to see immigrants thrive and be accpeted as Americans. Howard Dean Bailey was a U.S Navy Veteran that was sabatoged into pleeing guilty for a drug conviction decades ago after he honestly told immigration services of his crimes in the past while applying for citizenship. There was no evidence at all for his drug conviction and yet, Bailey was honest and admitted to a crime that would have never been uncovered if he kept quiet otherwise. His military service and his honest mistake meant nothing, and he was deported anyway. During the deportation, Bailey faced brutal treatment along with the other deportees. The sources we used in this post are from The Immigrants Defense Project and NPR. There is a GoFundMe up for Howard’s return to the United States if you are interested in helping.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7520445535065574711?is_from_webapp=1&sender_device=pc",
    link: "stories.html#howard-dean-baileys-story"
  },
  {
    order: 73,
    slug: "gonzalo-ladron-de-guevaras-story",
    images: [
      "stories/gonzalo-ladron-de-guevaras-story/1.png",
      "stories/gonzalo-ladron-de-guevaras-story/2.png",
      "stories/gonzalo-ladron-de-guevaras-story/3.png",
      "stories/gonzalo-ladron-de-guevaras-story/4.png",
      "stories/gonzalo-ladron-de-guevaras-story/5.png",
      "stories/gonzalo-ladron-de-guevaras-story/6.png",
      "stories/gonzalo-ladron-de-guevaras-story/7.png",
      "stories/gonzalo-ladron-de-guevaras-story/8.png",
      "stories/gonzalo-ladron-de-guevaras-story/9.png",
      "stories/gonzalo-ladron-de-guevaras-story/10.png",
      "stories/gonzalo-ladron-de-guevaras-story/11.png"
    ],
    featured: false,
    isNewest: false,
    title: "Gonzalo Ladron de Guevara’s Story",
    summary: "Today, we are sharing the story of Gonzalo Ladron de Guevara. Gonzalo came to the United States a very long time ago and had gotten his green card two over decades ago after marrying to his wife, who is a U.S citizen, Jodi. Gonzalo and Jodi have two children, a 21 year old daughter, and a 20 year old son. In May of this year, Gonzalo had travelled to Mexico to meet up with his brother to spread the ashes of their mother. Gonzalo and Jodi did not believe that Gonzalo had done anything wrong as Gonzalo had rountinely travelled and has not been marked or stopped by immigration officers. When coming back from Mexico, Gonzalo was stopped by immigration officers and detained. Gonzalo had been detained for a past felony charge over 2 decades ago that had already been dismissed. It was a non-violent charge that Gonzalo had already gotten the proper rehab for. Gonzalo was still not released and held in detention centers for over a month. During this time, Gonzalo was subjected to very poor conditions: unsanitary bathrooms, no mattresses, and cold, hard floors. A GoFundMe has been created for Gonzalo’s family. If you would like to support Gonzalo’s family in this time of need, feel free to donate here:https://www.gofundme.com/f/help-reunite-the-ladron-de-guevara-family The sources we used for this post come from the organizations News Week, Fox 32, and The Guardian. If you would like to learn more about Gonzalo’s story, we encourage you to read the articles published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7530862708481117454?is_from_webapp=1&sender_device=pc",
    link: "stories.html#gonzalo-ladron-de-guevaras-story"
  },
  {
    order: 74,
    slug: "fabian-schmidts-story",
    images: [
      "stories/fabian-schmidts-story/1.png",
      "stories/fabian-schmidts-story/2.png",
      "stories/fabian-schmidts-story/3.png",
      "stories/fabian-schmidts-story/4.png",
      "stories/fabian-schmidts-story/5.png",
      "stories/fabian-schmidts-story/6.png",
      "stories/fabian-schmidts-story/7.png",
      "stories/fabian-schmidts-story/8.png",
      "stories/fabian-schmidts-story/9.png",
      "stories/fabian-schmidts-story/10.png",
      "stories/fabian-schmidts-story/11.png",
      "stories/fabian-schmidts-story/12.png",
      "stories/fabian-schmidts-story/13.png",
      "stories/fabian-schmidts-story/14.png",
      "stories/fabian-schmidts-story/15.png",
      "stories/fabian-schmidts-story/16.png",
      "stories/fabian-schmidts-story/17.png",
      "stories/fabian-schmidts-story/18.png"
    ],
    featured: false,
    isNewest: false,
    title: "Fabian Schmidt’s Story",
    summary: "Today, we are sharing the story of Fabian Schmidt. Schmidt came to the United States when he was 16 years old with his stepfather and mother. Schmidt had been used to travelling the globe with his family, and was fluent in 4 different languages. His stepfather had come to the United States under a visa that is normally called a “genius visa.” Schmidt was granted legal entry as a dependent. Schmidt grew up like every other American kid. He loved football, he rode horses, and he loved his home and community. Schmidt would work as a bartender, where he would meet the love of his life, who was now his fiancée. Schmidt had also acquired a green card during his decades in the United States. Schmidt was living a good life with his fiancée and 8-year-old daughter when all this would change. Schmidt had been returning to the United States via airplane after visiting his father, who was in Germany, for 10 days. Suddenly, Schmidt was stopped at the border patrol and interrogated and searched. They treated him like he was less than, treating him harshly and handling him without care. They threw open his luggage and belongings without care. Schmidt was detained and was stuck in the airport, unbeknownst to his wife and daughter. He was then transferred to a detention center and left there for 60 days. It turns out, Schmidt’s green card had been flagged due to a misdemeanor in 2015. Schmidt had already finished his community service hours and also had proper rehab. The case had already been dismissed. Thankfully, Schmidt was released after 60 days and allowed to return to a sort of normal life. This experience had deeply affected him and left him with PTSD. The sources we used for this post come from the organizations WMUR, New Hampshire Bulletin, Maine Morning Star, WGBH, and The New York Times. If you would like to learn more about Schmidt’s story, we encourage you to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7534177324619648270?is_from_webapp=1&sender_device=pc",
    link: "stories.html#fabian-schmidts-story"
  }
];

stories.sort((left, right) => left.order - right.order);

function sortStoriesByOrder(left, right) {
  return left.order - right.order;
}

function getFeaturedStories() {
  return stories
    .filter((story) => story.featured)
    .sort(sortStoriesByOrder);
}

function getArchiveStories() {
  const featuredStories = getFeaturedStories();
  const archiveOnlyStories = stories
    .filter((story) => !story.featured)
    .sort(sortStoriesByOrder);

  return [...featuredStories, ...archiveOnlyStories];
}

function getHomepagePreviewStories() {
  const featuredStories = getFeaturedStories().filter((story) => !story.isNewest);
  const previewStories = featuredStories.slice(0, FEATURED_STORY_PREVIEW_COUNT);
  const priorityStory = featuredStories.find((story) => story.slug === HOMEPAGE_PRIORITY_FEATURED_SLUG);

  if (!priorityStory || previewStories.some((story) => story.slug === priorityStory.slug)) {
    return previewStories;
  }

  return [
    ...previewStories.slice(0, FEATURED_STORY_PREVIEW_COUNT - 1),
    priorityStory
  ];
}

function getExternalLinkAttributes(url) {
  if (!/^https?:\/\//.test(url)) {
    return "";
  }

  return ` target="_blank" rel="${EXTERNAL_LINK_REL}"`;
}

function validateStoriesData() {
  const seenSlugs = new Set();
  const seenOrders = new Set();
  const seenTikTokLinks = new Set();
  let newestCount = 0;

  stories.forEach((story) => {
    if (seenSlugs.has(story.slug)) {
      console.warn(`Duplicate story slug detected: ${story.slug}`);
    }
    seenSlugs.add(story.slug);

    if (seenOrders.has(story.order)) {
      console.warn(`Duplicate story order detected: ${story.order}`);
    }
    seenOrders.add(story.order);

    if (story.isNewest) {
      newestCount += 1;
    }

    if (story.tiktokLink) {
      if (seenTikTokLinks.has(story.tiktokLink)) {
        console.warn(`Duplicate TikTok link detected for ${story.title}.`);
      }
      seenTikTokLinks.add(story.tiktokLink);

      if (!/^https:\/\/www\.tiktok\.com\/@projectsecondvoice\//.test(story.tiktokLink)) {
        console.warn(`Unexpected TikTok link format for ${story.title}: ${story.tiktokLink}`);
      }
    }

    story.images.forEach((imagePath) => {
      if (!/^stories\/[^/]+\/\d+\.png$/.test(imagePath)) {
        console.warn(`Unexpected image path format for ${story.title}: ${imagePath}`);
      }
    });
  });

  if (newestCount !== 1) {
    console.warn(`Expected exactly one newest story, found ${newestCount}.`);
  }
}

function getStoryPreviewText(text, maxLength = 180) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}

function getStoryHref(story, isArchive = false) {
  if (isArchive) {
    return `#${story.slug}`;
  }

  return story.link;
}

function getStoryBadge(story) {
  if (story.isNewest) {
    return "Newest story";
  }

  if (story.featured) {
    return "Featured story";
  }

  return "";
}

function getStoryBadgeMarkup(story, className) {
  const badge = getStoryBadge(story);

  if (!badge) {
    return "";
  }

  return `<span class="${className}">${badge}</span>`;
}

function createStoryCard(story, isArchive = false) {
  const card = document.createElement("article");
  card.className = "story-card reveal";
  const storyHref = getStoryHref(story, isArchive);
  const primaryImage = story.images[0];
  const badgeMarkup = getStoryBadgeMarkup(story, "story-card-badge");
  const imageMarkup = primaryImage
    ? `<img class="story-card-image" src="${primaryImage}" alt="${story.title}" loading="lazy" decoding="async">`
    : `<div class="story-card-image story-card-image-placeholder" aria-hidden="true"></div>`;

  card.innerHTML = `
    ${imageMarkup}
    ${badgeMarkup}
    <h3>${story.title}</h3>
    <p>${getStoryPreviewText(story.summary)}</p>
    <a class="button button-secondary" href="${storyHref}" data-story-slug="${story.slug}"${getExternalLinkAttributes(storyHref)}>Read Story</a>
  `;
  return card;
}

function renderNewestStory() {
  const newestContainer = document.querySelector("[data-newest-story]");

  if (!newestContainer) {
    return;
  }

  const newestStory = stories.find((story) => story.isNewest) || stories[0];
  const newestHref = getStoryHref(newestStory);
  const primaryImage = newestStory.images[0];
  const imageMarkup = primaryImage
    ? `<img class="newest-story-image" src="${primaryImage}" alt="${newestStory.title}" loading="lazy" decoding="async">`
    : `<div class="newest-story-image newest-story-image-placeholder" aria-hidden="true"></div>`;

  newestContainer.innerHTML = `
    <article class="newest-story-card">
      <div class="newest-story-copy">
        <span class="story-focus-pill">Newest story</span>
        <h3>${newestStory.title}</h3>
        <p>${getStoryPreviewText(newestStory.summary, 260)}</p>
        <a class="button button-primary" href="${newestHref}"${getExternalLinkAttributes(newestHref)}>Read Newest Story</a>
      </div>
      <div class="newest-story-visual">
        ${imageMarkup}
      </div>
    </article>
  `;
}

function renderStoryFocus() {
  const focus = document.querySelector("[data-story-focus]");

  if (!focus) {
    return;
  }

  const activeSlug = window.location.hash.replace("#", "");
  const story = stories.find((entry) => entry.slug === activeSlug) || stories[0];
  const storyBadgeMarkup = getStoryBadgeMarkup(story, "story-focus-pill");
  const galleryMarkup = story.images.length
    ? `
      <div class="story-gallery">
        ${story.images.map((image, index) => `
          <a class="story-gallery-item" href="${image}" target="_blank" rel="${EXTERNAL_LINK_REL}" aria-label="Open ${story.title} image ${index + 1}">
            <img src="${image}" alt="${story.title} slide ${index + 1}" loading="lazy" decoding="async">
          </a>
        `).join("")}
      </div>
    `
    : "";
  const tiktokMarkup = story.tiktokLink
    ? `<a class="button button-secondary" href="${story.tiktokLink}" target="_blank" rel="${EXTERNAL_LINK_REL}">View on TikTok</a>`
    : "";
  const actionsMarkup = tiktokMarkup
    ? `<div class="story-focus-actions">${tiktokMarkup}</div>`
    : "";

  focus.innerHTML = `
    <div class="story-focus-copy">
      ${storyBadgeMarkup}
      <h2>${story.title}</h2>
      <p>${story.summary}</p>
      ${actionsMarkup}
    </div>
    <div class="story-focus-meta">
      <p>
        This archive is structured to scale as Project Second Voice publishes more digital stories, interviews,
        and narrative portraits over time.
      </p>
      <a class="button button-primary" href="contact.html">Inquire About Storytelling</a>
    </div>
    ${galleryMarkup}
  `;
}

function scrollStoryFocusIntoView() {
  const focus = document.querySelector("[data-story-focus]");

  if (!focus) {
    return;
  }

  focus.setAttribute("tabindex", "-1");
  focus.scrollIntoView({ behavior: "smooth", block: "start" });
  focus.focus({ preventScroll: true });
}

function initSubmissionLinks() {
  document.querySelectorAll("[data-story-submit-link]").forEach((link) => {
    link.href = STORY_SUBMISSION_FORM_URL;
    link.target = "_blank";
    link.rel = EXTERNAL_LINK_REL;
  });
}

function initContactLinks() {
  const mailtoHref = `mailto:${CONTACT_EMAIL}`;

  document.querySelectorAll("[href^='mailto:']").forEach((link) => {
    link.href = mailtoHref;
  });
}

function renderStories() {
  const archive = document.querySelector("[data-story-archive]");
  const preview = document.querySelector("[data-stories-preview]");
  const featuredStories = getHomepagePreviewStories();
  const archiveStories = getArchiveStories();

  if (archive) {
    archive.innerHTML = "";
    const archiveFragment = document.createDocumentFragment();
    archiveStories.forEach((story) => archiveFragment.appendChild(createStoryCard(story, true)));
    archive.appendChild(archiveFragment);
  }

  if (preview) {
    preview.innerHTML = "";
    const previewFragment = document.createDocumentFragment();
    featuredStories.forEach((story) => previewFragment.appendChild(createStoryCard(story)));
    preview.appendChild(previewFragment);
  }
}

function animateValue(element) {
  const target = Number.parseFloat(element.dataset.target || "0");
  const suffix = element.dataset.suffix || "";
  const duration = 1500;
  const startTime = performance.now();

  function step(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentValue = target * eased;
    const formatted = Number.isInteger(target) || target >= 10
      ? Math.round(currentValue).toString()
      : currentValue.toFixed(1);

    element.textContent = `${formatted}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = `${element.dataset.target}${suffix}`;
    }
  }

  requestAnimationFrame(step);
}

function initStats() {
  const statGroups = document.querySelectorAll("[data-stats-grid]");

  if (!statGroups.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    statGroups.forEach((group) => {
      group.querySelectorAll(".stat-value").forEach((value) => {
        if (!value.dataset.animated) {
          value.dataset.animated = "true";
          value.textContent = `${value.dataset.target}${value.dataset.suffix || ""}`;
        }
      });
    });
    return;
  }

  const observer = new IntersectionObserver((entries, statsObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.querySelectorAll(".stat-value").forEach((value) => {
        if (!value.dataset.animated) {
          value.dataset.animated = "true";
          animateValue(value);
        }
      });

      statsObserver.unobserve(entry.target);
    });
  }, { threshold: 0.35 });

  statGroups.forEach((group) => observer.observe(group));
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!revealItems.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initStoryFocus() {
  const focus = document.querySelector("[data-story-focus]");
  const archive = document.querySelector("[data-story-archive]");

  if (!focus) {
    return;
  }

  renderStoryFocus();

  if (window.location.hash) {
    requestAnimationFrame(scrollStoryFocusIntoView);
  }

  if (archive) {
    archive.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-story-slug]");

      if (!link || !link.getAttribute("href")?.startsWith("#")) {
        return;
      }

      requestAnimationFrame(scrollStoryFocusIntoView);
    });
  }

  window.addEventListener("hashchange", () => {
    renderStoryFocus();
    scrollStoryFocusIntoView();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  validateStoriesData();
  initSubmissionLinks();
  initContactLinks();
  renderNewestStory();
  renderStories();
  initStats();
  initReveal();
  initNav();
  initStoryFocus();
});
