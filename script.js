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
