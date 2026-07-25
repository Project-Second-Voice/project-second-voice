document.documentElement.classList.add("js");

const STORY_SUBMISSION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfCem22HQOIS5jlcQKeNLmisV8W1oXVRd6TmXMJii0-VJpMfw/viewform?usp=dialog";
const CONTACT_EMAIL = "projectsecondvoice@gmail.com";
const EXTERNAL_LINK_REL = "noopener noreferrer";
const HOMEPAGE_FEATURED_GRID_COUNT = 6;
const HOMEPAGE_PRIORITY_FEATURED_SLUGS = ["robert-vivar-story", "ray-anderson-story"];
const HOMEPAGE_PRIORITY_FEATURED_SET = new Set(HOMEPAGE_PRIORITY_FEATURED_SLUGS);
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const APPROVED_STORY_TAGS = [
  "Activist",
  "Artist",
  "Asylum",
  "Child",
  "Colombian",
  "Community Leader",
  "DACA",
  "Deportation",
  "Detention",
  "Dreamer",
  "Ecuadorian",
  "Family",
  "Family Separation",
  "Guatemalan",
  "Honduran",
  "ICE",
  "Journalist",
  "Legal Status",
  "LGBTQ+",
  "Medical/Humanitarian",
  "Mexican",
  "Military Family",
  "Parent",
  "Salvadoran",
  "Student",
  "U.S. Citizen",
  "Veteran",
  "Venezuelan",
  "Worker",
  "Wrongful Detention"
];
const APPROVED_STORY_TAG_SET = new Set(APPROVED_STORY_TAGS);
const STORY_MAP_STATE_TILES = [
  { name: "Alaska", code: "AK", x: 0, y: 5 },
  { name: "Hawaii", code: "HI", x: 1, y: 6 },
  { name: "Washington", code: "WA", x: 1, y: 0 },
  { name: "Oregon", code: "OR", x: 1, y: 1 },
  { name: "California", code: "CA", x: 1, y: 2 },
  { name: "Idaho", code: "ID", x: 2, y: 1 },
  { name: "Nevada", code: "NV", x: 2, y: 2 },
  { name: "Montana", code: "MT", x: 3, y: 1 },
  { name: "Wyoming", code: "WY", x: 3, y: 2 },
  { name: "Utah", code: "UT", x: 3, y: 3 },
  { name: "Arizona", code: "AZ", x: 3, y: 4 },
  { name: "North Dakota", code: "ND", x: 4, y: 1 },
  { name: "South Dakota", code: "SD", x: 4, y: 2 },
  { name: "Nebraska", code: "NE", x: 4, y: 3 },
  { name: "Colorado", code: "CO", x: 4, y: 4 },
  { name: "New Mexico", code: "NM", x: 4, y: 5 },
  { name: "Minnesota", code: "MN", x: 5, y: 1 },
  { name: "Iowa", code: "IA", x: 5, y: 2 },
  { name: "Kansas", code: "KS", x: 5, y: 3 },
  { name: "Oklahoma", code: "OK", x: 5, y: 4 },
  { name: "Texas", code: "TX", x: 5, y: 5 },
  { name: "Wisconsin", code: "WI", x: 6, y: 1 },
  { name: "Illinois", code: "IL", x: 6, y: 2 },
  { name: "Missouri", code: "MO", x: 6, y: 3 },
  { name: "Arkansas", code: "AR", x: 6, y: 4 },
  { name: "Louisiana", code: "LA", x: 6, y: 5 },
  { name: "Michigan", code: "MI", x: 7, y: 1 },
  { name: "Indiana", code: "IN", x: 7, y: 2 },
  { name: "Kentucky", code: "KY", x: 7, y: 3 },
  { name: "Tennessee", code: "TN", x: 7, y: 4 },
  { name: "Mississippi", code: "MS", x: 7, y: 5 },
  { name: "Alabama", code: "AL", x: 8, y: 5 },
  { name: "Ohio", code: "OH", x: 8, y: 2 },
  { name: "West Virginia", code: "WV", x: 8, y: 3 },
  { name: "North Carolina", code: "NC", x: 8, y: 4 },
  { name: "Georgia", code: "GA", x: 9, y: 5 },
  { name: "Florida", code: "FL", x: 10, y: 6 },
  { name: "South Carolina", code: "SC", x: 9, y: 4 },
  { name: "Virginia", code: "VA", x: 9, y: 3 },
  { name: "Maryland", code: "MD", x: 10, y: 3 },
  { name: "Delaware", code: "DE", x: 11, y: 3 },
  { name: "Pennsylvania", code: "PA", x: 9, y: 2 },
  { name: "New Jersey", code: "NJ", x: 10, y: 2 },
  { name: "New York", code: "NY", x: 10, y: 1 },
  { name: "Connecticut", code: "CT", x: 11, y: 2 },
  { name: "Rhode Island", code: "RI", x: 12, y: 2 },
  { name: "Massachusetts", code: "MA", x: 12, y: 1 },
  { name: "Vermont", code: "VT", x: 11, y: 0 },
  { name: "New Hampshire", code: "NH", x: 12, y: 0 },
  { name: "Maine", code: "ME", x: 13, y: 0 }
];
const STORY_MAP_STATE_NAMES = new Set(STORY_MAP_STATE_TILES.map((state) => state.name));
const STORY_IMAGE_PATH_PATTERN = /^stories\/[^/]+\/[^/]+\.(?:png|jpe?g|webp)$/i;

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
    state: "Minnesota",
    tags: ["Child", "Family", "Detention", "Asylum"],
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
    state: "California",
    tags: ["Worker", "Detention", "Deportation", "Medical/Humanitarian", "Mexican"],
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
    state: "Georgia",
    tags: ["Journalist", "Wrongful Detention", "Legal Status", "Salvadoran"],
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
    state: "Texas",
    tags: ["Worker", "Family", "Deportation", "Mexican"],
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
    state: "Massachusetts",
    tags: ["Worker", "Detention", "Asylum", "Guatemalan", "Family"],
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
    state: "Florida",
    tags: ["Community Leader", "Detention", "Legal Status", "Family"],
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
    state: "Maryland",
    tags: ["Wrongful Detention", "Deportation", "Family", "Worker", "Salvadoran"],
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
    state: "Oregon",
    tags: ["Student", "Family", "Detention", "Legal Status"],
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
    state: "California",
    tags: ["Activist", "Detention", "Legal Status"],
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
    state: "Georgia",
    tags: ["Worker", "Medical/Humanitarian", "Detention", "Deportation", "Family"],
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
    state: "California",
    tags: ["Worker", "Detention"],
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
    state: "Texas",
    tags: ["Child", "Family", "Detention", "Asylum", "Medical/Humanitarian", "Venezuelan"],
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
    state: "New York",
    tags: ["Detention", "Wrongful Detention", "Medical/Humanitarian"],
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
    state: "New York",
    tags: ["Worker", "Family", "Detention", "Asylum", "Ecuadorian"],
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
    state: "Utah",
    tags: ["Worker", "Family", "Detention", "Legal Status"],
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
    state: "California",
    tags: ["Parent", "Worker", "Detention", "Mexican"],
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
    state: "Texas",
    tags: ["Student", "Worker", "Detention", "Legal Status"],
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
    state: "Hawaii",
    tags: ["Veteran", "Deportation", "Family", "Legal Status"],
    title: "US Purple Heart Army Veteran Sae Joon Park's Story",
    summary: "Just yesterday, United States Purple Heart Army Veteran Sae Joon Park had no choice but to leave the United States due to his past drug conviction. Although his drug conviction could be argued to be entirely his fault for ignoring his PTSD, his service in the military and dedication to the country he grew up in should not be overlooked. We believe everyone should be given second chances, and Sae Joon Park is a prime example of someone who deserved the benefit of the doubt. Park didn’t know he was suffering from PTSD, and looked towards drugs in hopes of destressing and helping him calm himself. He was convicted and put into jail for 3 years, where he served 2 and a half. In that time, he completely turned away from drugs and overcame his addiction. When he came out of prison, he was a new man. He had turned his life around and had become a loving son and dad. Yet, despite all the progress and sacrifices he has shown, he was forced to self-deport himself out of the United States, never being able to come back and see his children or parents again. He will be sent to a country where he has no family and no connections. We believe Sae Joon Park deserves a second chance, and his story deserves to be shared. We encourage you to share this story in hopes of spreading awareness and giving immigrants such as Sae Joon Park the chance they deserve. In this post, we used articles from NPR, Spectrum News, Local 12, KKTV, La Voce Di New York, and HuffPost. If you want to learn more about Park’s situation and story, we encourage you to read the articles by these organizations. Thank you, everyone, for the support, and we will continue to share the voices of immigrants and give them the awareness they deserve.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7520074438830738719?is_from_webapp=1&sender_device=pc",
    link: "stories.html#sae-joon-park-story"
  },
  {
    order: 9.5,
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
    featured: true,
    isNewest: false,
    state: "New York",
    tags: ["Family", "Detention", "Legal Status"],
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
    state: "Indiana",
    tags: ["Asylum", "Student", "Family", "Honduran"],
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
    state: "California",
    tags: ["Parent", "Worker", "Detention", "Mexican"],
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
    state: "New York",
    tags: ["Student", "Activist", "Detention", "Legal Status"],
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
    state: "California",
    tags: ["Wrongful Detention", "Veteran", "U.S. Citizen", "Worker"],
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
    state: "Maryland",
    tags: ["Detention", "Deportation", "Legal Status", "Family"],
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
    state: "California",
    tags: ["Legal Status", "Deportation", "Family"],
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
    state: "Iowa",
    tags: ["Worker", "Parent", "Detention", "Medical/Humanitarian", "Mexican"],
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
    state: "California",
    tags: ["Student", "Dreamer", "Deportation", "Asylum", "Guatemalan"],
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
    state: "California",
    tags: ["Dreamer", "Family", "Legal Status"],
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
    state: "Illinois",
    tags: ["Medical/Humanitarian", "Asylum", "Detention", "Venezuelan"],
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
    state: "Texas",
    tags: ["Asylum", "Detention", "Deportation", "Wrongful Detention", "Venezuelan"],
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
    state: "Washington",
    tags: ["Activist", "Worker", "Detention", "Mexican"],
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
    state: "Illinois",
    tags: ["Worker", "Parent", "Wrongful Detention", "Mexican"],
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
    state: "New York",
    tags: ["Detention", "Deportation", "Wrongful Detention", "Venezuelan"],
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
    state: "Florida",
    tags: ["DACA", "Dreamer", "Activist", "Detention", "Mexican"],
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
    state: "Texas",
    tags: ["Asylum", "Family", "Worker", "Detention"],
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
    state: "Wisconsin",
    tags: ["Worker", "Family", "Deportation", "Salvadoran"],
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
    state: "California",
    tags: ["Family", "Detention"],
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
    state: "Louisiana",
    tags: ["Family", "Detention", "Legal Status"],
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
    state: "Colorado",
    tags: ["Activist", "Worker", "Detention", "Legal Status", "Mexican"],
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
    state: "Texas",
    tags: ["Student", "Wrongful Detention", "U.S. Citizen", "Family", "Mexican"],
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
    state: "California",
    tags: ["Artist", "Activist", "Worker", "Detention"],
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
    state: "Mississippi",
    tags: ["DACA", "Dreamer", "Student", "Activist", "Detention"],
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
    state: "Florida",
    tags: ["Family", "Deportation", "Legal Status", "Mexican"],
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
    state: "California",
    tags: ["DACA", "Dreamer", "Worker", "Detention", "Mexican", "Medical/Humanitarian"],
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
    state: "Florida",
    tags: ["Asylum", "Worker", "Family", "Detention", "Honduran"],
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
    state: "Utah",
    tags: ["DACA", "Dreamer", "Student", "Detention"],
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
    state: "Wisconsin",
    tags: ["Family", "Detention", "Legal Status"],
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
    state: "California",
    tags: ["Child", "Family", "Asylum", "Detention", "Medical/Humanitarian"],
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
    state: "New York",
    tags: ["Journalist", "Asylum", "Detention"],
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
    state: "Florida",
    tags: ["Detention", "Deportation", "Activist", "Family"],
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
    state: "California",
    tags: ["DACA", "Dreamer", "Student", "Worker", "Detention"],
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
    state: "California",
    tags: ["Asylum", "Detention", "Wrongful Detention", "Venezuelan", "Artist", "LGBTQ+"],
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
    state: "California",
    tags: ["Student", "Family", "Detention"],
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
    state: "Louisiana",
    tags: ["Child", "Family", "Deportation", "Honduran"],
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
    state: "California",
    tags: ["Asylum", "Worker", "Detention", "Venezuelan"],
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
    state: "New York",
    tags: ["Student", "Detention", "Legal Status"],
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
    state: "Massachusetts",
    tags: ["Student", "Activist", "Detention"],
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
    state: "New York",
    tags: ["Student", "Detention", "Legal Status"],
    title: "Ellie Aghayeva's Story",
    summary: "Today, we are sharing the story of Ellie Aghayeva. Aghayeva came to the United States from Azerbaijan in 2016 under a student visa. She is currently a senior at Columbia University and is double-majoring in neuroscience and political science. Aside from schoolwork, Aghayeva has amassed a large social media following, with more than 200 thousand followers across various social media platforms such as TikTok and Instagram. Aghayeva has faced legal issues with her immigration status. Allegedly, as DHS reports, Aghayeva had her student visa revoked because she had missed too many classes in 2016. On February 27th, immigration officers came searching for Aghayeva, entering her apartment complex at Columbia University by lying and misinterpreting the reason why they were there. The officers said that they were searching for a missing child, and it was only after coming in contact with Aghayeva that they revealed the real reason they were there. Aghayeva was detained by immigration officers around 6 am. Aghayeva would message her friends about her fear and distress and would also share her experience online on her various social media platforms. Widespread outrage online and in New York spread, demanding Aghayeva’s release. Thankfully, her detention was only hours before Mayor Zohran Mamdani met up with the President, and Mamdani voiced his concerns about the case of Aghayeva and also other similar cases of Colombian students being detained by immigration officers for no clear reason. Thankfully, Aghayeva was released shortly after. The sources we used for this post come from the organizations The Daily Beast, Gulf News, The People, NDTV, The Guardian, CNN, Columbia Spectator, NPR, and The New York Times. If you would like to learn more about Aghayeva’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7612425628918238477?is_from_webapp=1&sender_device=pc",
    link: "stories.html#ellie-aghayevas-story"
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
    state: "Texas",
    tags: ["DACA", "Dreamer", "Family", "Detention", "Mexican"],
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
    state: "Louisiana",
    tags: ["Detention", "Legal Status"],
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
    state: "North Carolina",
    tags: ["Asylum", "Student", "Family", "Honduran"],
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
    state: "Washington",
    tags: ["Artist", "Worker", "Family", "Detention"],
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
    state: "New York",
    tags: ["Asylum", "Family", "Detention", "Salvadoran"],
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
    state: "New York",
    tags: ["Student", "Activist", "Deportation"],
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
    state: "New York",
    tags: ["Student", "Activist", "Legal Status"],
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
    state: "Texas",
    tags: ["Asylum", "Family", "Detention", "Venezuelan"],
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
    state: "California",
    tags: ["Worker", "Family", "Legal Status", "Mexican"],
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
    state: "Texas",
    tags: ["Family", "Legal Status", "Detention", "Honduran"],
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
    state: "Ohio",
    tags: ["Asylum", "Activist", "Detention", "Venezuelan", "Community Leader"],
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
    state: "California",
    tags: ["Student", "Asylum", "Detention", "Honduran"],
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
    state: "Virginia",
    tags: ["Veteran", "Deportation", "Legal Status"],
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
    state: "Illinois",
    tags: ["Family", "Detention", "Legal Status"],
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
    state: "New Hampshire",
    tags: ["Family", "Detention", "Legal Status"],
    title: "Fabian Schmidt’s Story",
    summary: "Today, we are sharing the story of Fabian Schmidt. Schmidt came to the United States when he was 16 years old with his stepfather and mother. Schmidt had been used to travelling the globe with his family, and was fluent in 4 different languages. His stepfather had come to the United States under a visa that is normally called a “genius visa.” Schmidt was granted legal entry as a dependent. Schmidt grew up like every other American kid. He loved football, he rode horses, and he loved his home and community. Schmidt would work as a bartender, where he would meet the love of his life, who was now his fiancée. Schmidt had also acquired a green card during his decades in the United States. Schmidt was living a good life with his fiancée and 8-year-old daughter when all this would change. Schmidt had been returning to the United States via airplane after visiting his father, who was in Germany, for 10 days. Suddenly, Schmidt was stopped at the border patrol and interrogated and searched. They treated him like he was less than, treating him harshly and handling him without care. They threw open his luggage and belongings without care. Schmidt was detained and was stuck in the airport, unbeknownst to his wife and daughter. He was then transferred to a detention center and left there for 60 days. It turns out, Schmidt’s green card had been flagged due to a misdemeanor in 2015. Schmidt had already finished his community service hours and also had proper rehab. The case had already been dismissed. Thankfully, Schmidt was released after 60 days and allowed to return to a sort of normal life. This experience had deeply affected him and left him with PTSD. The sources we used for this post come from the organizations WMUR, New Hampshire Bulletin, Maine Morning Star, WGBH, and The New York Times. If you would like to learn more about Schmidt’s story, we encourage you to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7534177324619648270?is_from_webapp=1&sender_device=pc",
    link: "stories.html#fabian-schmidts-story"
  },
  {
    order: 75,
    slug: "valentina-galviss-story",
    images: [
      "stories/valentina-galviss-story/1.png",
      "stories/valentina-galviss-story/2.png",
      "stories/valentina-galviss-story/3.png",
      "stories/valentina-galviss-story/4.png",
      "stories/valentina-galviss-story/5.png",
      "stories/valentina-galviss-story/6.png",
      "stories/valentina-galviss-story/7.png",
      "stories/valentina-galviss-story/8.png"
    ],
    featured: false,
    isNewest: false,
    state: "Illinois",
    tags: ["Asylum", "Family", "Detention"],
    title: "Valentina Galvis's Story",
    summary: "Today, we are sharing the story of Valentina Galvis. Galvis came to the United States with her husband three years ago from Colombia. She and her husband had been fleeing the assault and persecution of an infamous Colombian gang in her home country. During these three years, Galvis’s husband, Camilo, would be granted political asylum and become a long-haul truck driver to support his family. Hoping to be granted asylum like her husband, Galvis would go to an immigration hearing with her 7-month-old son, who is a U.S. citizen. There, the judge would dismiss Galvis’s case under the strong urging of federal prosecutors. Galvis would never expect to be detained with her son and be awaiting deportation orders. Galvis was not put into a traditional detention facility, but one owned by a private contractor, MVM. Galvis and her son would be stuck in a hotel, with no phone and no way to communicate with her husband or a lawyer, for 5 days before finally being released. Galvis was only released because her son was a U.S. citizen. Galvis’s case was thankfully reopened, and her asylum hearing is set for January. The sources we used for this post come from the organizations Injustice Watch, Chicago Sun Times, and We Are Your Neighbors. If you would like to learn more about Valentina Galvis’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7576492068793535799?is_from_webapp=1&sender_device=pc",
    link: "stories.html#valentina-galviss-story"
  },
  {
    order: 76,
    slug: "mohsen-mahdawis-story",
    images: [
      "stories/mohsen-mahdawis-story/1.png",
      "stories/mohsen-mahdawis-story/2.png",
      "stories/mohsen-mahdawis-story/3.png",
      "stories/mohsen-mahdawis-story/4.png",
      "stories/mohsen-mahdawis-story/5.png",
      "stories/mohsen-mahdawis-story/6.png",
      "stories/mohsen-mahdawis-story/7.png",
      "stories/mohsen-mahdawis-story/8.png",
      "stories/mohsen-mahdawis-story/9.png",
      "stories/mohsen-mahdawis-story/10.png",
      "stories/mohsen-mahdawis-story/11.png",
      "stories/mohsen-mahdawis-story/12.png",
      "stories/mohsen-mahdawis-story/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "Vermont",
    tags: ["Student", "Activist", "Detention"],
    title: "Mohsen Mahdawi’s Story",
    summary: "Today, we are sharing the story of Mohsen Mahdawi. Mahdawi is a third-generation refugee from the Far’a Refugee Camp. While growing up, Mahdawi explains, he had little to no privacy and was born into 8 siblings. Mahdawi was the oldest sibling. Growing up, Mahdawi experienced the devastation of war, watching the lives of his friends and family being taken away from him by Israeli soldiers. Mahdawi would also be injured by the Israeli Army in his youth. He was born into an apartheid system, and wasn’t even allowed to travel and visit his relatives. He explained that he had been prevented from visiting his mother for several years, even explaining how he was shocked to see how his mother looked, saying he had slowly forgotten her face. Mahdawi’s experience with war culminated in his wanting to end war, end suffering, and protest for peace for the Palestinians. Mahdawi came to the United States in 2015 by securing legal residency and getting a green card. During his time in the United States, he would also go to immigration offices twice, once to get his green card and another to renew it. Mahdawi went to Columbia University in his 20s. At the university, he would participate heavily in activism and protests for Palestinians. During this time, Mahdawi’s wife encouraged him to get citizenship, which was also something Mahdawi had wanted to do. Unfortunately, during his interview, he would be detained by immigration officers for 16 days. Thankfully, after 16 days, he was released, with the help of the public and the press. The sources we used for this post come from the organizations ABC, The Guardian, JacobIn, CBS, New York Times, CNN, Vermont Public, Columbia Spectator, Common Dreams, Zeteo, and Boston Globe. If you would like to learn more about Mahdawi’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7542727727611268366?is_from_webapp=1&sender_device=pc",
    link: "stories.html#mohsen-mahdawis-story"
  },
  {
    order: 77,
    slug: "ice-detains-man-who-served-in-afghan-war",
    images: [
      "stories/ice-detains-man-who-served-in-afghan-war/1.png",
      "stories/ice-detains-man-who-served-in-afghan-war/2.png",
      "stories/ice-detains-man-who-served-in-afghan-war/3.png",
      "stories/ice-detains-man-who-served-in-afghan-war/4.png",
      "stories/ice-detains-man-who-served-in-afghan-war/5.png",
      "stories/ice-detains-man-who-served-in-afghan-war/6.png",
      "stories/ice-detains-man-who-served-in-afghan-war/7.png",
      "stories/ice-detains-man-who-served-in-afghan-war/8.png",
      "stories/ice-detains-man-who-served-in-afghan-war/9.png",
      "stories/ice-detains-man-who-served-in-afghan-war/10.png",
      "stories/ice-detains-man-who-served-in-afghan-war/11.png",
      "stories/ice-detains-man-who-served-in-afghan-war/12.png",
      "stories/ice-detains-man-who-served-in-afghan-war/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "California",
    tags: ["Asylum", "Detention", "Worker", "Veteran"],
    title: "ICE Detains Man who served in Afghan War",
    summary: "Today, we are sharing the story of an Afghan national who was detained during an immigration hearing about his asylum case in San Diego recently. The man worked as a translator for the U.S military during the Afghan war and fears for his life if he were to be deported back to Afghanistan. The man provided sufficient documentation that proved his time in the U.S military. During the U.S. withdrawal, he was not able to leave with the U.S. Fearing for his life, the man went to the border and sought asylum. He was granted parole and was working towards a special immigrant visa. During his hearing about his asylum case, the man would be detained. The sources we used for this post come from the organization’s NBC and CBS. If you would like to learn more about his story, we encourage you to read the stories and videos published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7531569336117431565?is_from_webapp=1&sender_device=pc",
    link: "stories.html#ice-detains-man-who-served-in-afghan-war"
  },
  {
    order: 78,
    slug: "jasmine-mooneys-story",
    images: [
      "stories/jasmine-mooneys-story/1.png",
      "stories/jasmine-mooneys-story/2.png",
      "stories/jasmine-mooneys-story/3.png",
      "stories/jasmine-mooneys-story/4.png",
      "stories/jasmine-mooneys-story/5.png",
      "stories/jasmine-mooneys-story/6.png",
      "stories/jasmine-mooneys-story/7.png",
      "stories/jasmine-mooneys-story/8.png",
      "stories/jasmine-mooneys-story/9.png",
      "stories/jasmine-mooneys-story/10.png",
      "stories/jasmine-mooneys-story/11.png",
      "stories/jasmine-mooneys-story/12.png",
      "stories/jasmine-mooneys-story/13.png",
      "stories/jasmine-mooneys-story/14.png",
      "stories/jasmine-mooneys-story/15.png",
      "stories/jasmine-mooneys-story/16.png",
      "stories/jasmine-mooneys-story/17.png",
      "stories/jasmine-mooneys-story/18.png",
      "stories/jasmine-mooneys-story/19.png",
      "stories/jasmine-mooneys-story/20.png",
      "stories/jasmine-mooneys-story/21.png",
      "stories/jasmine-mooneys-story/22.png"
    ],
    featured: false,
    isNewest: false,
    state: "California",
    tags: ["Worker", "Detention", "Legal Status"],
    title: "Jasmine Mooney’s Story",
    summary: "Today, we are sharing the story of Jasmine Mooney. Jasmine Mooney is a Canadian citizen who travels to the United States for work. She is an entrepreneur who has recently started working on a health company that sells tonics named Holy! Water. Mooney would need to travel back and forth from Canada to the U.S. due to this job, and was able to apply for a NAFTA visa on her second attempt. Everything had seemed okay until recently, when she was stopped at an immigration checkpoint and questioned about her visa. They believed that she was suspicious due to the fact that she had already been rejected once the immigration officers revoked her visa and explained that she would need to get another one. The unbothered Mooney went back to San Diego’s Immigration office to apply for a NAFTA visa, where she would be detained for an unknown reason. Mooney had repeatedly said to the immigration officers that if they needed her to leave the country, she could buy a plane ticket and fly back, but immigration officers did not listen to her. Instead, they detained her and held her in ice-cold cells with minimal blankets and sometimes even no mattresses. Mooney would be stuck there for over 2 weeks before she was able to be freed with the help of media influence, friends, lawyers, and other resources. Mooney states that there are many immigrants that are being held in these detention centers who are not as fortunate as she is and might be stuck there for months on end. Mooney’s story emphasizes a need for a change in immigration policies and reforms, and shows the need to treat immigrants with basic empathy and supply their basic human needs. Humans should not be treated like animals in a cage. The sources we used for this post come from the organizations The Guardian, NPR, Newsweek, and People. If you would like to learn more about Mooney’s story, we encourage you to read the articles that they have posted on this subject.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7525573140479511821?is_from_webapp=1&sender_device=pc",
    link: "stories.html#jasmine-mooneys-story"
  },
  {
    order: 79,
    slug: "family-of-child-struggling-with-cancer-taken-away-by-ice",
    images: [
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/1.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/2.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/3.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/4.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/5.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/6.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/7.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/8.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/9.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/10.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/11.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/12.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/13.png",
      "stories/family-of-child-struggling-with-cancer-taken-away-by-ice/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "California",
    tags: ["Family", "Medical/Humanitarian", "Detention"],
    title: "Family of Child struggling with Cancer taken away by ICE",
    summary: "Today, we are sharing the story of a family that has been separated due to past convictions that had already been served, causing the daughter of the family to have to face chemotherapy and treatment by herself. Yolanda is the mother of Xitlali, a 21-year-old who is struggling with cancer that affects the bones in her legs, making her unable to walk. Yolanda’s son and Xitlali’s brother, Jonathan, was detained in front of Yolanda due to past convictions that he had already served and gotten rehab for. Yolanda stopped immigration officers, questioning why they were arresting her son, only to be handcuffed herself. Yolanda had no criminal record and no past convictions. Because of this, Xitlali had to go through treatment by herself. It has been hard for Xitlali’s family to stay afloat with their two primary providers and caretakers gone. Xitlali explains how many times she feels as she doesn’t have the courage and strength to continue the treatment without her mother by her side. A GoFundMe has been set up for Xitlali’s family in this time of need. If you would like to support them, feel free to donate here: https://www.gofundme.com/f/support-xitlalis-legal-battle-for-family The sources we used from this post come from the organizations NBC LA and News Break. If you would like to learn more about Xitlali’s story, we encourage you to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7529718944513461518?is_from_webapp=1&sender_device=pc",
    link: "stories.html#family-of-child-struggling-with-cancer-taken-away-by-ice"
  },
  {
    order: 80,
    slug: "family-with-11-year-old-child-suffering-from-brain-tumor-deported",
    images: [
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/1.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/2.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/3.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/4.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/5.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/6.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/7.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/8.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/9.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/10.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/11.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/12.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/13.png",
      "stories/family-with-11-year-old-child-suffering-from-brain-tumor-deported/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Family", "Medical/Humanitarian", "Detention", "Deportation"],
    title: "Family with 11 year old child suffering from brain tumor deported",
    summary: "Today, we are sharing the story of a family that has been separated due to immigration policies. The parents had been in the process of obtaining a T-Visa, and they had no criminal record, yet they were detained during an immigration checkup when they were traveling to get their daughter the needed medical assistance for her brain cancer recovery. The 11-year-old girl had been diagnosed with brain cancer and was on the path to recovery. The family had travelled from Texas to Houston to meet up with medical professionals to monitor their daughter’s condition. At an immigration checkpoint that they had passed regularly, the family was detained due to a lack of documentation. The family had been equipped with letters from doctors and lawyers. This was all the proof needed in the past times they have gone through this checkpoint. However, this time, the immigration officers detained the family and put them in a detention center, along with their children who are U.S citizens. The parents had no choice but to deport and keep their children in the United States, so that the daughter could get the needed medical assistance and recover. After the parents were separated from the children, it has been reported that they have been struggling in school and haven’t necessarily been getting the proper medical treatment that they deserve. This shouldn’t be how we handle immigrants and how we handle the lives of U.S citizens. Families should not be separated in such a drastic timeframe, especially when they had sought asylum in the U.S to escape trafficking, and to get the proper medical assistance for their children. In this post, we used sources from the organizations NBC, CHRON, and The Daily Beast. If you would like to learn more about the family’s story, we encourage you to read the stories written by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7523838345789623583?is_from_webapp=1&sender_device=pc",
    link: "stories.html#family-with-11-year-old-child-suffering-from-brain-tumor-deported"
  },
  {
    order: 81,
    slug: "moe-rahmans-story",
    images: [
      "stories/moe-rahmans-story/1.png",
      "stories/moe-rahmans-story/2.png",
      "stories/moe-rahmans-story/3.png",
      "stories/moe-rahmans-story/4.png",
      "stories/moe-rahmans-story/5.png",
      "stories/moe-rahmans-story/6.png",
      "stories/moe-rahmans-story/7.png",
      "stories/moe-rahmans-story/8.png",
      "stories/moe-rahmans-story/9.png",
      "stories/moe-rahmans-story/10.png",
      "stories/moe-rahmans-story/11.png",
      "stories/moe-rahmans-story/12.png",
      "stories/moe-rahmans-story/13.png",
      "stories/moe-rahmans-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "California",
    tags: ["Family", "Detention", "Legal Status"],
    title: "Moe Rahman’s Story",
    summary: "Today, we are sharing the story of Moe Rahman. Rahman came to the United States from Bangladesh with his family when he was only 4 years old. His family came to the United States on a visitor’s visa and also applied for asylum due to political turmoil in their home country. Rahman is now 38 years old and lives in Orange County with his pregnant wife, whom he married 10 years ago. The couple has 2 children already and is expecting another soon. Rahman had been complying with routine immigration check-ins for several years. What seemed to be another routine check-in turned into Rahman being detained and sent to a detention facility. Rahman had no criminal record and was working on his legal status with a lawyer. Now, his pregnant wife has to take care of their 2 children by herself. If you would like to support Rahman’s family in this time of need, a GoFundMe has been set up for the family. Feel free to donate here:https://www.gofundme.com/f/afcqw-support-a-family-torn-apart-by-ice-detention The sources we used for this post come from the organizations KTLA, Yahoo, and GoFundMe. If you would like to learn more about Rahman’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7531946107061030158?is_from_webapp=1&sender_device=pc",
    link: "stories.html#moe-rahmans-story"
  },
  {
    order: 82,
    slug: "derlis-snaider-chusin-toaquizas-story",
    images: [
      "stories/derlis-snaider-chusin-toaquizas-story/1.png",
      "stories/derlis-snaider-chusin-toaquizas-story/2.png",
      "stories/derlis-snaider-chusin-toaquizas-story/3.png",
      "stories/derlis-snaider-chusin-toaquizas-story/4.png",
      "stories/derlis-snaider-chusin-toaquizas-story/5.png",
      "stories/derlis-snaider-chusin-toaquizas-story/6.png",
      "stories/derlis-snaider-chusin-toaquizas-story/7.png",
      "stories/derlis-snaider-chusin-toaquizas-story/8.png",
      "stories/derlis-snaider-chusin-toaquizas-story/9.png",
      "stories/derlis-snaider-chusin-toaquizas-story/10.png",
      "stories/derlis-snaider-chusin-toaquizas-story/11.png",
      "stories/derlis-snaider-chusin-toaquizas-story/12.png",
      "stories/derlis-snaider-chusin-toaquizas-story/13.png",
      "stories/derlis-snaider-chusin-toaquizas-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "New York",
    tags: ["Student", "Asylum", "Detention", "Ecuadorian"],
    title: "Derlis Snaider Chusin Toaquiza’s Story",
    summary: "Today, we are sharing the story of Derlis Snaider Chusin Toaquiza. Derlis came to the United States with his family in March of 2024. They were seeking asylum due to being mistreated and threatened back in their native country, Ecuador. After coming to the United States, Derlis had been scheduled for his asylum hearing in June 2025. During the time before his hearing, he would be enrolled in Grover Cleveland High School and was in the 11th grade. Derlis was awarded the most improved student at his school. In his spare time, he would often go to church and play for his school’s soccer team. Derlis was very excited to be able to recieve his award at the award ceremony; however, he would never get this chance as he was detained during his asylum hearing. Derlis was taken away without due process, separated from his family in a matter of moments. He was transferred to a detention center where he reports that they had only fed him one meal per day, and he was forced to sleep upright due to a lack of space. This sparked outrage in his community, with a team of lawyers and members of his community were able to get Derlis a bail of $20,000. Derlis and his family were finally reunited. The sources we used for this post come from the organization’s CBS News, Chalk Beat, ABC7 NY, AMNY, Fox5 NY, and NY Daily News. If you would like to learn more about Derlis’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7529334644555156749?is_from_webapp=1&sender_device=pc",
    link: "stories.html#derlis-snaider-chusin-toaquizas-story"
  },
  {
    order: 83,
    slug: "kasper-eriksens-story",
    images: [
      "stories/kasper-eriksens-story/1.png",
      "stories/kasper-eriksens-story/2.png",
      "stories/kasper-eriksens-story/3.png",
      "stories/kasper-eriksens-story/4.png",
      "stories/kasper-eriksens-story/5.png",
      "stories/kasper-eriksens-story/6.png",
      "stories/kasper-eriksens-story/7.png",
      "stories/kasper-eriksens-story/8.png",
      "stories/kasper-eriksens-story/9.png",
      "stories/kasper-eriksens-story/10.png",
      "stories/kasper-eriksens-story/11.png",
      "stories/kasper-eriksens-story/12.png",
      "stories/kasper-eriksens-story/13.png",
      "stories/kasper-eriksens-story/14.png",
      "stories/kasper-eriksens-story/15.png"
    ],
    featured: false,
    isNewest: false,
    state: "Mississippi",
    tags: ["Worker", "Family", "Detention", "Legal Status"],
    title: "Kasper Eriksen’s Story",
    summary: "Today, we are sharing the story of Kasper Eriksen. Eriksen came to the United States from Denmark as a high school foreign exchange student, where he would stay for one year, and he would also meet his now beloved wife. After returning to Denmark, Eriksen would migrate to the United States four years later, in 2013. He worked as a welder and also got married to his wife a year later. The couple had 4 children and were expecting another very soon. Eriksen was working hard on his immigrant status: he paid taxes, worked with immigration lawyers, complied with immigration officers, and attended regular appointments. He and his wife had been asked to report to another immigration appointment, which they both thought nothing of. Eriksen never expected to be detained at that appointment. Eriksen had no criminal record or deportation orders. Eriksen was detained because he had missed one of the many documents that he had to sign on his pathway to residency. Eriksen had no idea about this document, and days before the deadline, his wife had a miscarriage, and the couple had been grieving, unaware of the document deadline. Before that appointment, Eriksen was never told that he had missed a document. A GoFundMe has been set up for Eriksen’s family in this time of need, as Eriksen is the sole provider of the family. If you would like to support their family, please feel free to donate here:https://www.gofundme.com/f/help-kasper-eriksen-reunite-with-his-family The sources we used for this post come from the organizations Mississippi Today, Mississippi Free Press, GoFundMe, Newsweek, and Latin Times. If you would like to learn more about Eriksen’s story, we encourage you to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7533470005535460638?is_from_webapp=1&sender_device=pc",
    link: "stories.html#kasper-eriksens-story"
  },
  {
    order: 84,
    slug: "renee-goods-story",
    images: [
      "stories/renee-goods-story/1.png",
      "stories/renee-goods-story/2.png",
      "stories/renee-goods-story/3.png",
      "stories/renee-goods-story/4.png",
      "stories/renee-goods-story/5.png",
      "stories/renee-goods-story/6.png",
      "stories/renee-goods-story/7.png",
      "stories/renee-goods-story/8.png",
      "stories/renee-goods-story/9.png",
      "stories/renee-goods-story/10.png",
      "stories/renee-goods-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "Minnesota",
    tags: ["U.S. Citizen", "Wrongful Detention"],
    title: "Renee Good's Story",
    summary: "Today, we are sharing the story of Renee Nicole Good. Good was a 37-year-old U.S citizen and mother of three children, two teenagers, and one 6-year-old child. Originally, Good was born in Colorado Springs and was a devoted Christian who regularly went on youth missions. Good studied creative writing at Old Dominion University in Norfolk, Virginia. She would graduate from the university’s College of Arts and Letters the same year with a degree in English. Good would work as a dental assistant and work in a credit union before becoming an aspiring poet and guitar hobbyist. Good would become a novel, award-winning poet, winning the Academy of American Poets Prize for her poem “On Learning to Dissect Fetal Pigs”. Good had just dropped her 6-year-old child off at school when she saw an altercation between protestors and immigration officers in Minneapolis. Good drove between this altercation, acting as a legal observer, a volunteer who monitored police and security forces during protests. When immigration officers confronted her and forcefully tried to enter her vehicle, Good was provoked and got scared, trying to drive away from the incident. It was there that Good would be shot by an immigration officer, Jonathan Ross. Sadly, Good did not make it and passed away in the hospital. Good’s story serves as a sign of the need for a change in immigration enforcement. Currently, immigration enforcement officers are heavily armed and poorly transparent, causing simple altercations to escalate severely into irreparable harm. For many immigrant families, stories such as Good’s inflict deep fear that everyday encounters with immigration officers can escalate into irreparable harm. Officers should not operate in ways that create fear, confusion, and danger. Good was a mother, and a U.S citizen who didn’t deserve to pass away, and she serves as a symbol to the danger of unchecked power and a need for reforms to immigration enforcement. The sources we used for this post come from the organizations The New York Post, News Nation Now, Reuters, CNN, CBS, The People, BBC, Lit Hub, ABC News, The Wired, Boston Review, CATO, Hindustan Times, and GoFundMe. If you would like to donate to Good’s family during this traumatic time, feel free to donate here:https://www.gofundme.com/f/support-for-renee-goods-wife-and-son If you would like to learn more about Good’s story, we encourage you to check out the stories published by these organizations,",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7597250715710409998?is_from_webapp=1&sender_device=pc",
    link: "stories.html#renee-goods-story"
  },
  {
    order: 85,
    slug: "marcello-gomezs-story",
    images: [
      "stories/marcello-gomezs-story/1.png",
      "stories/marcello-gomezs-story/2.png",
      "stories/marcello-gomezs-story/3.png",
      "stories/marcello-gomezs-story/4.png",
      "stories/marcello-gomezs-story/5.png",
      "stories/marcello-gomezs-story/6.png",
      "stories/marcello-gomezs-story/7.png",
      "stories/marcello-gomezs-story/8.png",
      "stories/marcello-gomezs-story/9.png",
      "stories/marcello-gomezs-story/10.png",
      "stories/marcello-gomezs-story/11.png",
      "stories/marcello-gomezs-story/12.png",
      "stories/marcello-gomezs-story/13.png",
      "stories/marcello-gomezs-story/14.png",
      "stories/marcello-gomezs-story/15.png"
    ],
    featured: false,
    isNewest: false,
    state: "Massachusetts",
    tags: ["Student", "Dreamer", "Detention"],
    title: "Marcello Gomez’s Story",
    summary: "Today, we are sharing the story of Marcelo Gomes. Gomes moved to the United States from Brazil when he was just 7 years old. He came to the United States through a visitor visa, later getting a student visa. Gomes is now an 18 year old high school student and is active in marching band and volleyball. He is a beloved student and member of his community. Deportation always loomed in Gomes’ mind, but he did not think he could be detained and deported, as he was under a visa, and he had come here when he was only seven years old. Unfortunately, because his visa had expired and Gomes had no knowledge about needing to renew it, immigration officers would detain him. Immigration officers had stated that they had been after Gomes’ dad and had mistaken Gomes for his dad. Gomes says this is not the case. While he was being detained, the immigration officers had never even mentioned his father. Fortunately, Gomes was released on bail and was able to reunite with his friends and family, with his lawyers actively fighting for his ability to stay in the United States. Gomes was only seven years old when he came to the United States and had little knowledge about citizenship and his status as an immigrant. He should not be deported and taken away from everything he has known because he was unaware of his status. The sources we used for this story come from the organizations NBC, CNN, AP, and The Boston Globe. If you would like to learn more about Gomes’ story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7527933058540997919?is_from_webapp=1&sender_device=pc",
    link: "stories.html#marcello-gomezs-story"
  },
  {
    order: 86,
    slug: "emerson-colindress-story",
    images: [
      "stories/emerson-colindress-story/1.png",
      "stories/emerson-colindress-story/2.png",
      "stories/emerson-colindress-story/3.png",
      "stories/emerson-colindress-story/4.png",
      "stories/emerson-colindress-story/5.png",
      "stories/emerson-colindress-story/6.png",
      "stories/emerson-colindress-story/7.png",
      "stories/emerson-colindress-story/8.png",
      "stories/emerson-colindress-story/9.png",
      "stories/emerson-colindress-story/10.png",
      "stories/emerson-colindress-story/11.png",
      "stories/emerson-colindress-story/12.png",
      "stories/emerson-colindress-story/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "Ohio",
    tags: ["Student", "Deportation", "Asylum", "Honduran"],
    title: "Emerson Colindres’s Story",
    summary: "Today, we are sharing the story of Emerson Colindres. Colindres came to the United States with his family when he was only 8 years old a decade ago. Coldinres came to the United States from Honduras, seeking asylum and fleeing gang violence and extreme poverty in their native country. Colidnres is now a very successful high school soccer star in Cincinnati and had just graduated days before he would be detained and deported. Colindres was very passionate about soccer and wanted to continue his career playing in university. His dreams and ambitions would be cut short, when he would be detained by immigration officers during a routine immigration check-in. Colindres was only 19 years old. Colindres’s detainment and deportation sparked massive outrage in his community and many protested for Colindres’s release, but to no avail. Colindres was deported shortly after his detainment. A GoFundMe has been set up for Colindres’s family during these dire times. If you would like to support their family, feel free to donate here:https://www.gofundme.com/f/aid-emerson-colindres-and-family-in-crisis The sources we use for this post come from the organizations NBC, The Guardian, The Daily Beast, Yahoo, Tag24, and Spectrum News. If you would like to learn more about Colindres’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7528587101663792415?is_from_webapp=1&sender_device=pc",
    link: "stories.html#emerson-colindress-story"
  },
  {
    order: 87,
    slug: "ana-gabriella-diazs-story",
    images: [
      "stories/ana-gabriella-diazs-story/1.png",
      "stories/ana-gabriella-diazs-story/2.png",
      "stories/ana-gabriella-diazs-story/3.png",
      "stories/ana-gabriella-diazs-story/4.png",
      "stories/ana-gabriella-diazs-story/5.png",
      "stories/ana-gabriella-diazs-story/6.png",
      "stories/ana-gabriella-diazs-story/7.png",
      "stories/ana-gabriella-diazs-story/8.png",
      "stories/ana-gabriella-diazs-story/9.png",
      "stories/ana-gabriella-diazs-story/10.png",
      "stories/ana-gabriella-diazs-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Family", "Asylum", "Detention", "Salvadoran"],
    title: "Ana Gabriella Diaz’s Story",
    summary: "Today, we are sharing the story of Ana Gabriella Diaz and her daughter. Diaz and her oldest daughter, who is now 9 years old, came to the United States from El Salvador. They were seeking asylum due to many reasons, such as extreme poverty and gang violence. Diaz had applied for asylum but was rejected. She made the decision to still come to the United States in hopes of giving her daughter a better life and applying for citizenship once she got to the United States. Diaz complied with immigration services and went in for routine check ins. She finally got a chance for residency when she married her husband and had a baby in 2024. Diaz and her oldest daughter applied for a family petition and were waiting for the status. In early June, however, Diaz would be called in for an unscheduled meeting with immigration officers. There, they would tell her that she was being detained. They gave the family 30 seconds to say goodbye before Diaz and her oldest daughter, who was 9 years old, were detained and sent to a detention facility in Texas. The source we used for this post comes from the organization ABC 7. If you would like to learn more about Diaz and her daughter’s story, we encourage you to read the story published by this organization.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7528975125954235703?is_from_webapp=1&sender_device=pc",
    link: "stories.html#ana-gabriella-diazs-story"
  },
  {
    order: 88,
    slug: "nikita-and-oksanas-familys-story",
    images: [
      "stories/nikita-and-oksanas-familys-story/1.png",
      "stories/nikita-and-oksanas-familys-story/2.png",
      "stories/nikita-and-oksanas-familys-story/3.png",
      "stories/nikita-and-oksanas-familys-story/4.png",
      "stories/nikita-and-oksanas-familys-story/5.png",
      "stories/nikita-and-oksanas-familys-story/6.png",
      "stories/nikita-and-oksanas-familys-story/7.png",
      "stories/nikita-and-oksanas-familys-story/8.png",
      "stories/nikita-and-oksanas-familys-story/9.png",
      "stories/nikita-and-oksanas-familys-story/10.png",
      "stories/nikita-and-oksanas-familys-story/11.png",
      "stories/nikita-and-oksanas-familys-story/12.png",
      "stories/nikita-and-oksanas-familys-story/13.png",
      "stories/nikita-and-oksanas-familys-story/14.png",
      "stories/nikita-and-oksanas-familys-story/15.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Family", "Asylum", "Detention"],
    title: "Nikita and Oksana’s Family’s Story",
    summary: "Today, we are sharing the story of Nikita and Oksana’s family. Nikita and Oksana have three children and fled Russia due to their opposing political activism against Putin’s regime. Nikita and Oksana hoped to seek shelter and give their children a life free of poltiical tyranny by coming to America. They stayed over a year in Mexico debating the safest way to get to America, eventually opting to go to the Mesa Port border and directly requesting asylum. The officers listened to their voiced concerns and desperate pleas for asylum; however, instead of moving their case to court, the family was detained. The family would be held in frigid cells for over five days, only having foil blankets to shelter themselves from the cold and thin mattresses to try to sleep the days away. After five days, the family would be transferred to Dilley Detention Center. They would be subjected to the horrible treatment that many detainees face in the facility. Worms and bugs in their food were a common occurrence. Guards yelling, no matter the age of the detainees, snatching away any comfort from the children’s hands. Hours in line for any medical care. Fluorescent lights that never turn off, forever illuminating the frigid detention facility. The family's schedule consisted of waking up at 6 in the morning every day to wait in line for breakfast. Their schedule consisted only of lines: lines for food, to go to the library, to get medication, or even to have a leisure activity. Children fought amongst themselves for markers, and parents had to scan ID’s that they had on their wrist bands to borrow these individual markers. There wouldn’t be enough markers to go around for everyone, and children would need to wait for others to be done. Nikita and Okasa had three children: Nikita and Oksana have three children: Kirill, who is 13, was a talented self-taught muscian that now wakes up with panic and anxiety attacks every night; Konstantin, only 4 years old, cried himself to sleep after having a toy airplane taken from him; and Kamilia, 12 years old, a dancer who now suffers from partial hearing loss due to a mistreated ear infection. Kamilia always had issues with her right ear, whether it was blocked or infected. However, before being detained, treatment was possible; however, after coming to the facility, treatment became mediocre, and it was hard for Kamilia to get the proper care she required. Oksana brought Kamilia to the medical center after her pain worsened. Pain quickly turned into something serious when her ear started oozing pus, persisting for weeks without proper medical attention. When Kamilia’s ear pain flared, they waited hours in line to get her medication. Oksana, worrying about her daughter, cut a beanie to shield her ear from the aggressive winds while waiting in lines and staying outside, offering her temporary relief. However, guards would take away her beanie, labeling it as contraband that was prohibted to have. Around Thanksgiving, the families would be brought into the gymnasium, where a huge Thanksgiving feast seemed to await them. Families watched eagerly for the turkey, sandwiches, pies, and pastries. They had been stuck eating greasy, spicy, and moldy food for weeks on end. Then, when families asked when the celebration would begin, staff told them the feast was for the faculty, not the detainees. The family would ask about their stay, questioning why they had been held for over the supposed 20-day limit, the limit for detaining children in detention facilities, and guards told them the rule had been overturned. Oksana and Nikita would stay for over 6 times the limit, staying in detention for over 120 days. During their prolonged stay, Kamilia’s birthday would past during their prolonged stay; however, there would be no birthday cake, no friends, and no gifts. She hopes that her only wish will come true: finally being granted freedom from detention.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7628817458131913997?is_from_webapp=1&sender_device=pc",
    link: "stories.html#nikita-and-oksanas-familys-story"
  },
  {
    order: 89,
    slug: "update-on-liam-ramos",
    images: [
      "stories/update-on-liam-ramos/1.png",
      "stories/update-on-liam-ramos/2.png",
      "stories/update-on-liam-ramos/3.png",
      "stories/update-on-liam-ramos/4.png",
      "stories/update-on-liam-ramos/5.png",
      "stories/update-on-liam-ramos/6.png",
      "stories/update-on-liam-ramos/7.png",
      "stories/update-on-liam-ramos/8.png",
      "stories/update-on-liam-ramos/9.png",
      "stories/update-on-liam-ramos/10.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Child", "Family", "Detention", "Asylum"],
    title: "Update on Liam Ramos",
    summary: "Today, we are sharing an update on the story of Liam Conjeo Ramos. Eric Lee, the attorney of Liam Ramos and his family, and also other families that are detained in the same detention facility as Ramos, talked about the absurd and “abysmal” living conditions in the cell. Lee explains how they mix baby formula with putrid water, the food has bugs in it, and the guards are all verbally abusive and very mean. These conditions have all contributed to Liam’s declining health in detention, which worries her mother a lot. Joaquin Castro, a Texas Democratic congressman, visited Ramos and his father in detention last week and was able to talk briefly with his father for 30 minutes. Liam was asleep during this conversation. His father explains how Liam has not been acting like himself and is sad and depressed. These conditions have probably been brought up by the abysmal conditions in the detention facility. Thankfully, today, it was just announced that Liam and his father were finally released from detention after being in detention for over a week. However, people are still wondering why Liam and his father were taken in the first place. Liam and his family came from Ecuador and applied for asylum in December 2024 due to the political turmoil and economic instability in their home country. They were legally allowed to be here, and his father had no criminal record. When Liam was being taken, family members of Liam were also at the scene, begging for immigration officers to hand custody over to them. Thank you for all the recent support, and with the help and advocacy of millions of individuals all around the world, Liam and his father were finally freed from detention. The sources we used for this post come from the organizations Sky News, MPR News, CNN, The Guardian, Huffington Post, and CBS News. If you would like to learn more about the recent news, feel free to read the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7602125987970551095?is_from_webapp=1&sender_device=pc",
    link: "stories.html#update-on-liam-ramos"
  },
  {
    order: 90,
    slug: "rene-lopezs-story",
    images: [
      "stories/rene-lopezs-story/1.png",
      "stories/rene-lopezs-story/2.png",
      "stories/rene-lopezs-story/3.png",
      "stories/rene-lopezs-story/4.png",
      "stories/rene-lopezs-story/5.png",
      "stories/rene-lopezs-story/6.png",
      "stories/rene-lopezs-story/7.png",
      "stories/rene-lopezs-story/8.png",
      "stories/rene-lopezs-story/9.png",
      "stories/rene-lopezs-story/10.png"
    ],
    featured: false,
    isNewest: false,
    state: "Virginia",
    tags: ["Worker", "Family", "Wrongful Detention", "Legal Status", "Salvadoran"],
    title: "René López's Story",
    summary: "Today, we are sharing the story of René López. López came to the United States from El Salvador with his mother when he was 11 years old. He would secure permanent residency. Later, his mother would be naturalized, making López a citizen at the age of 16. At the age of 20, López would be convicted of a substance offense and be put into prison for 7 years. After serving, López would rebuild his life and make up for his mistake. He would finish high school, get a job working as an electrician, get married, and have children. López changed his life; however, in 2016, DHS would change its mind on his immigration status, revoking his citizenship and making him only a permanent resident. The reason for this is that the Salvadorian constitution had eliminated the process of making a distinction between children born in or out of wedlock, meaning his mother’s citizenship was not enough for López to get his citizenship. They would need to find proof that his father was also naturalized, something very difficult because López had never had a relationship with him. Because of his change in legal status, López was not in grounds for deportation and removal because of his substance offense. López would be detained by 8 armed men and put into prison for 3 years. Thankfully, López’s citizenship would be granted after a strenuous process and case that showed that his father had never established paternity. Although López’s status was finally established once again, the damage had already been done, and he lost his job and the time with his family he would never get back. Now, López tries his hardest to navigate and make up for what he lost, once again, always carrying evidence of his court, in fear of the chance of officers or others trying to challenge his status and wrongfully detaining him once again. The sources we used for this post come from the organization NBC News. If you would like to learn more about López’s story, we encourage you to check out the story published by this organization.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7630615996608433421?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#rene-lopezs-story"
  },
  {
    order: 91,
    slug: "antonio-gamez-cuellars-story",
    images: [
      "stories/antonio-gamez-cuellars-story/1.png",
      "stories/antonio-gamez-cuellars-story/2.png",
      "stories/antonio-gamez-cuellars-story/3.png",
      "stories/antonio-gamez-cuellars-story/4.png",
      "stories/antonio-gamez-cuellars-story/5.png",
      "stories/antonio-gamez-cuellars-story/6.png",
      "stories/antonio-gamez-cuellars-story/7.png",
      "stories/antonio-gamez-cuellars-story/8.png",
      "stories/antonio-gamez-cuellars-story/9.png",
      "stories/antonio-gamez-cuellars-story/10.png",
      "stories/antonio-gamez-cuellars-story/11.png",
      "stories/antonio-gamez-cuellars-story/12.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Student", "Family", "Asylum", "Detention", "Mexican"],
    title: "Antonio Gámez-Cuéllar's Story",
    summary: "Today, we are sharing the story of Antonio Gámez-Cuéllar. Antonio is an 18-year-old senior at McAllen High School. His family came to the United States from Mexico, seeking asylum due to the conflict between their music and cartel culture. Cartel violence was a main factor in the family's fleeing. They applied for asylum through the CBP One App and had an ongoing asylum case. They had no criminal history and would attend routine immigration check-ins, always complying. The family would make money by taking on music gigs. The three brothers of the family were all talented musicians, playing in Mariachi programs. They would play at their local high school, becoming very talented mariachi musicians. The brothers would even play at the U.S Capitol and garner state recognition playing their program Mariachi Oro. All three of the brothers were heavily involved in the music programs at their school, with Antonio being a first-chair trumpet in the Texas All-State Mariachi Ensemble. On February 25th, the family would attend a routine immigration check-in. However, they would not expect to be apprehended and detained by immigration officers. Antonio was separated from the rest of the family, being sent to Raymondville, 230 miles away from the rest of his family at Dilley Detention Facility. Their absence was deeply felt and shocking for Antonio’s classmates and teachers, causing huge conflict and advocacy for their release by their local communities. The news would garner national attention soon after. Thankfully, lawmakers from both parties would intervene, allowing the family to be released and finally reunited on March 9th. The sources we used for this post come from the organizations NBC News, CNN, The Texas Tribune, KESQ, ABC 7, ABC 11, The Guardian, and Texas Border Business. If you would like to learn more about Antonio’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7633234950321458445?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#antonio-gamez-cuellars-story"
  },
  {
    order: 92,
    slug: "ximena-arias-cristobals-story",
    images: [
      "stories/ximena-arias-cristobals-story/1.png",
      "stories/ximena-arias-cristobals-story/2.png",
      "stories/ximena-arias-cristobals-story/3.png",
      "stories/ximena-arias-cristobals-story/4.png",
      "stories/ximena-arias-cristobals-story/5.png",
      "stories/ximena-arias-cristobals-story/6.png",
      "stories/ximena-arias-cristobals-story/7.png",
      "stories/ximena-arias-cristobals-story/8.png",
      "stories/ximena-arias-cristobals-story/9.png",
      "stories/ximena-arias-cristobals-story/10.png",
      "stories/ximena-arias-cristobals-story/11.png",
      "stories/ximena-arias-cristobals-story/12.png",
      "stories/ximena-arias-cristobals-story/13.png",
      "stories/ximena-arias-cristobals-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "Georgia",
    tags: ["Student", "Dreamer", "DACA", "Detention", "Mexican"],
    title: "Ximena Arias-Cristobal's Story",
    summary: "Today, we are sharing the story of Ximena Arias-Cristobal. Cristobal came to the United States from Mexico with her family when she was only 4-years-old. Cristobal wasn’t eligible to apply for the Deferred Action for Childhood Arrivals (DACA) program until she was 16 years old, and by then, the program was closed for new applicants due to recent legal challenges, including federal litigation. This did not stop her, however, and Cristobal would grow up in Georgia, attending Dalton Public Schools. Cristobal would receive a national scholarship from TheDream. US and would attend Dalton State Community College, pursuing a degree in Economics and Finance. Thousands of Dreamers every year apply for the scholarship; however, Cristobal was given it because of her dedication and activism in her church and her local community, her demonstration as a star student and a member of her school’s running team. Her bright future would come to a halt when she was detained during a traffic stop in May of last year because of an illegal turn and driving without a license. These charges would later be dropped after it was found out that police had apprehended the wrong vehicle, as seen in the dashcam footage. The damage had already been done, however, and Cristobal was detained and put into immigration detention by immigration officers, being told to self-deport. Cristobal had no criminal history and had lived in Georgia for over 15 years. Once news of Cristobal’s situation spread, massive outrage and backlash from the community would provide the fire needed for Cristobal to be released from detention on bond. Before Cristobal’s detention, she had also been helping her mother, who is a housekeeper, with cleaning to make ends meet, and during her detention, it was very difficult for her mother by herself. Even though Cristobal was released, her immigration case is still being reviewed and processed, and Cristobal is now in the process of applying for a visa. Her lawyers have advised her not to risk jeopardizing her case and warned her to stay indoors as much as she can. The sources we used for this post come from the organizations NBC News, ABC News, CBS News, GPB, Fox 5, and News Channel 9. If you would like to learn more about Cristobal’s story, we encourage you to check out the stories published by these organizations",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7635845150580788493?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#ximena-arias-cristobals-story"
  },
  {
    order: 93,
    slug: "michelle-medinas-story",
    images: [
      "stories/michelle-medinas-story/1.png",
      "stories/michelle-medinas-story/2.png",
      "stories/michelle-medinas-story/3.png",
      "stories/michelle-medinas-story/4.png",
      "stories/michelle-medinas-story/5.png",
      "stories/michelle-medinas-story/6.png",
      "stories/michelle-medinas-story/7.png",
      "stories/michelle-medinas-story/8.png",
      "stories/michelle-medinas-story/9.png",
      "stories/michelle-medinas-story/10.png",
      "stories/michelle-medinas-story/11.png",
      "stories/michelle-medinas-story/12.png",
      "stories/michelle-medinas-story/13.png",
      "stories/michelle-medinas-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Student", "Dreamer", "DACA", "Detention", "Mexican"],
    title: "Michelle Medina’s Story",
    summary: "Today, we are sharing a personally requested story. Michelle Medina came to the United States when she was only 4 years old. Her parents moved their family to the United States in hopes of providing Medina and her siblings with better opportunities and a higher standard of living. The family would settle down in Texas. Throughout her youth, Medina cherished the gift her parents gave her, working diligently in school and having a strong passion for law enforcement and criminal justice. She went to IDEA public schools and became an honors student for the National Honor Society throughout high school. Medina would become an inspiration to her classmates, teachers, and parents. She played soccer and did cheer throughout middle and high school. Being a first-generation American, Medina also witnessed the inaccessibility and lack of resources that individuals like her family struggled with when coming to America. Taking action, Medina, along with her friends, would found the Mexican American Society in high school. The M.A.S was built to spread awareness and inclusivity for families like Medina’s and to create fundraisers and advocate for immigrants in her community. She used her own experiences to educate her community and hoped to create a space that was more comfortable and accessible for individuals such as her parents. Medina’s diligence and hard work would pay off, getting into numerous colleges after high school and receiving multiple scholarships for each offer. Medina chose to study at UTSA, getting her bachelor’s in Criminal Justice, and interning at her local police department. She had aspirations to study law enforcement and also to pursue higher education and get her Master’s. Medina’s dreams would be halted to a stop, however, after she was stopped during a regular traffic stop as she drove to the gym last year on July 17th. The officers requested to see her license, which she didn’t have, and would not look at her Mexican consular ID. When Medina turned 15 years old, she became eligible to apply to DACA; however, this was when administration changes in office halted new applications for the program. Medina would be detained and transferred to a Houston Detention Facility. Medina was shackled on a cold bus for over 12 hours before arriving at the detention facility. The conditions were horrible. Medina, alongside other inmates, was neglected, not being provided necessities such as tampons and pads, and having to beg for new clothes. Medina had no criminal record, never committing a crime in her life. She was incarcerated for over 25 days before she was able to be released on bond after her hearing. She would be able to fix her process outside of detention. Medina explains the fear when leaving the facility, feeling as if any day, she could be taken once more. Medina is currently working with attorneys to fix her status; however, the stress, added to the fact that she isn’t able to work, makes it impossible to pay the high costs for legal fees while still being able to pay for living. A GoFundMe has been set up for Medina’s legal fees. If you would like to help Medina in her difficult journey, please donate here: https://www.gofundme.com/f/stand-with-michelle-fight-for-her-future?attribution_id=sl:ae2eee1c-4037-443e-ac08-23119dda5a3b&lang=en_US&ts=1765477333&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link. Or search up “Stand With Michelle: Fight For Her Future” on GoFundMe. Michelle would always tell her family her aspirations of being a cop, a detective, and then a lawyer. She and others should not have their dreams stripped away from them, told that she is less American. This country is just as much Michelle’s as any other individual in America. The sources used for this post come from Michelle Medina, GoFundMe, and KENS 5.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7638811182668811533?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#michelle-medinas-story"
  },
  {
    order: 94,
    slug: "neiyerver-adrian-leon-rengel-story",
    images: [
      "stories/neiyerver-adrian-leon-rengel-story/1.png",
      "stories/neiyerver-adrian-leon-rengel-story/2.png",
      "stories/neiyerver-adrian-leon-rengel-story/3.png",
      "stories/neiyerver-adrian-leon-rengel-story/4.png",
      "stories/neiyerver-adrian-leon-rengel-story/5.png",
      "stories/neiyerver-adrian-leon-rengel-story/6.png",
      "stories/neiyerver-adrian-leon-rengel-story/7.png",
      "stories/neiyerver-adrian-leon-rengel-story/8.png",
      "stories/neiyerver-adrian-leon-rengel-story/9.png",
      "stories/neiyerver-adrian-leon-rengel-story/10.png",
      "stories/neiyerver-adrian-leon-rengel-story/11.png",
      "stories/neiyerver-adrian-leon-rengel-story/12.png",
      "stories/neiyerver-adrian-leon-rengel-story/13.png",
      "stories/neiyerver-adrian-leon-rengel-story/14.png",
      "stories/neiyerver-adrian-leon-rengel-story/15.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Asylum", "Worker", "Detention", "Wrongful Detention", "Venezuelan"],
    title: "Neiyerver Adrián Leon Rengel's Story",
    summary: "Today, we are sharing the story of Neiyerver Adrián Leon Rengel. Rengel was born during a time when political and economic turmoil plagued Venezuela. Blackouts, food shortages, and organizations collapsing were common in Rengel’s day-to-day life. Rengel would graduate from high school, focusing strongly on science, before enrolling in barber courses amid the economic problems haunting his country. Rengel first moved to Colombia with his wife and daughter, Isabella, working there for over 6 years. After, Rengel would return to Venezuela after saftey became a concern in that area. Rengel would then apply for asylum in America under the CBP One App, hoping to be able to provide his daughter with more opportunities and be given enough opportunities to buy her daughter a home. After coming to the United States, Rengel worked side gigs, mostly cutting hair, to support his family. He and his family would also adopt and raise a dog. Rengel’s car would break down one day, and he would need to hitch a ride with his co-worker to go to work. His co-worker had multiple outstanding traffic violations, and the two would get pulled over and detained because of substance possession in the car. Rengel would also be charged even though it wasn’t his car and he had only been carpooling with his coworker. When he was being arrested, the police noted Rengel’s tattoos and suspected that he was a part of a gang because of them. Rengel had multiple tattoos, most notably, a crown tattoo with the letter “Y” of his ex-wife. After being released, Rengel would cover the tattoo up with a tiger tattoo. Rengel would be detained again after being released on his birthday in the parking lot. They detained Rengel because of his tattoos, explaining that they had evidence he was a part of a notorious Venezuelan gang because he had certain tattoos. Rengel would be taken away, along with his documents, and that would be the last time his family saw him again. His family tried to track his whereabouts through his alien number, but the number would be removed from ICE systems in two days. They tried calling customs directly, and they would receive different answers every time: either he was still being held in detention, or he had already been deported to his “home country,” El Salvador, even though Rengel was Venezuelan. For over 40 days, the family desperately tried to find ways to contact Rengel and get information about his whereabouts, contacting organizations such as Cristosal and LULAC. Finally, after 40 days, DHS released a statement explaining that Rengel had already been deported to El Salvador, not mentioning exactly where he was deported to, although his family speculated he was sent to the infamous detention facility, the CECOT. It turns out, Rengel was held in the CECOT and was subjected to horrible physical and psychological abuse. He would be thankfully released from the CECOT during a prisoner swap and is now pursuing a lawsuit against the U.S government for damages. He plans to never come back to the United States again after the impediment and violations of his human rights. The sources we used for this post come from the organizations CBS News, LULAC, NBC News, Miami Herald, Democracy Defender’s Fund, The Marshall Project, and Reuters. If you would like to learn more about Rengel’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7641764480417910030?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#neiyerver-adrian-leon-rengel-story"
  },
  {
    order: 95,
    slug: "ravi-ragbir-story",
    images: [
      "stories/ravi-ragbir-story/1.png",
      "stories/ravi-ragbir-story/2.png",
      "stories/ravi-ragbir-story/3.png",
      "stories/ravi-ragbir-story/4.png",
      "stories/ravi-ragbir-story/5.png",
      "stories/ravi-ragbir-story/6.png",
      "stories/ravi-ragbir-story/7.png",
      "stories/ravi-ragbir-story/8.png",
      "stories/ravi-ragbir-story/9.png",
      "stories/ravi-ragbir-story/10.png",
      "stories/ravi-ragbir-story/11.png",
      "stories/ravi-ragbir-story/12.png",
      "stories/ravi-ragbir-story/13.png",
      "stories/ravi-ragbir-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "New York",
    tags: ["Activist", "Detention", "Deportation", "Legal Status", "Community Leader"],
    title: "Ravi Ragbir's Story",
    summary: "Today, we are sharing the story of Ravi Ragbir. Ragbir came to the United States from Trinidad and Tobago in 1991 on a visitor’s visa. Ragbir would become a green-card holder in 1994, working as an employee at a mortgage lender. However, in 2002, Ragbir would be convicted for his work at the mortgage lender for conspiring to commit wire fraud. He would take his case to court and be sentenced to 5 years in prison. Following his conviction, Ragbir would be put in the custody of Immigration enforcement and scheduled to be deported while continuing to be detained. However, after much back and forth, Ragbir was freed from detention and allowed to continue his deportation appeal at home. Ragbir would join immigration advocacy organizations in his community, becoming very passionate about advocating for immigrant rights because of the obstacles he faced himself. He would eventually also found his own immigrant advocacy organization: New Sanctuary Coalition, becoming a very prominent activist in his community. Through his advocacy work, Ragbir would also fall in love with Amy, now his wife. And the two would raise a daughter together. Amy was a U.S citizen and also an immigrant rights activist. Ragbir's work through his immigration organization also made him nationally acclaimed and celebrated as a very influential immigrant rights activist. During this time period, ICE also agreed not to deport him after exhausting appeals, granting him stays of removal so long as he regularly checked in to ICE appointments. Ragbir would also apply for permanent residency because of his marriage; however, his request would be denied. Almost abruptly after a change in office in 2018, Ragbir would be told to prepare for detention even though he had not committed any crimes other than the conviction in 2002, he had fully rehabilitated himself and became a pillar in his community, and he had regularly checked in with immigration customs. Thankfully, Ragbir appealed and was granted another stay of removal for 8 months, lasting to January 2018. However, even with the stay of removal, Ragbir would be detained and scheduled to be deported during one of his most recent immigration check-ins, creating shock and dismay in the community. Even with the risk of detention and deportation, Ragbir never let it affect his advocacy work: showing up to rallies, marches, and protests and leading crowds of supporters. For 35 years, Ragbir had called the United States his home and a place where he would protect his people. Thankfully, in 2025, Ragbir would be presidentially pardoned by President Biden, with the White House stating that America was a nation rooted in second chances. The sources we used for this post come from the organizations American Immigration Council, Democracy Now, New Yorker, I Stand With Ravi, NYU, NYCLU, PRI, New York Magazine, Socialist Worker, WNYC, The Intercept, and Independent. If you would like to learn more about Ragbir’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7643637329764060429?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#ravi-ragbir-story"
  },
  {
    order: 96,
    slug: "claudio-david-balcane-gonzalezs-story",
    images: [
      "stories/claudio-david-balcane-gonzalezs-story/1.png",
      "stories/claudio-david-balcane-gonzalezs-story/2.png",
      "stories/claudio-david-balcane-gonzalezs-story/3.png",
      "stories/claudio-david-balcane-gonzalezs-story/4.png",
      "stories/claudio-david-balcane-gonzalezs-story/5.png",
      "stories/claudio-david-balcane-gonzalezs-story/6.png",
      "stories/claudio-david-balcane-gonzalezs-story/7.png",
      "stories/claudio-david-balcane-gonzalezs-story/8.png",
      "stories/claudio-david-balcane-gonzalezs-story/9.png",
      "stories/claudio-david-balcane-gonzalezs-story/10.png",
      "stories/claudio-david-balcane-gonzalezs-story/11.png",
      "stories/claudio-david-balcane-gonzalezs-story/12.png",
      "stories/claudio-david-balcane-gonzalezs-story/13.png",
      "stories/claudio-david-balcane-gonzalezs-story/14.png",
      "stories/claudio-david-balcane-gonzalezs-story/15.png"
    ],
    featured: false,
    isNewest: false,
    state: "Illinois",
    tags: ["Artist", "Asylum", "Detention", "Venezuelan"],
    title: "Claudio David Balcane González's Story",
    summary: "Today, we are sharing the story of Claudio David Balcane González. Balcane loved music, and it was the reason why he wanted to come to America. In his teenage years, Balcane would spend afternoons busking, rapping, interweaving his culture and story into his lyrics. Most famously known on the internet as “Davicito59,” Balcane decided to come to the United States amid poltiical and economic turmoil that was occurring in Venezuela. He would begin his journey in 2016, first settling in Colombia, then Peru. He would make enough to survive by performing live music in front of crowds and rapping in buses. When his son was born in 2023, Balcane realized that he had to make it one of his priorities to get to the United States so that his son could be provided an opportunity to grow and thrive in a safe and comfortable space. He would cross the thick jungle through the Darien Gap and make it to the U.S-Mexico Border, having an appointment through the CBP One APP. After hours of questions about his tattoos, Balcane and his son were allowed to enter the United States. Balcane would post freestyles and music videos online, mixing slang and his hardships traveling North. His TikTok videos would garner millions of views, and Balcane started to grow in following. He would soon be featured in the song “Donaltron,” a song that was a satirical comment on the political landscape of America, pleas to not be deported, and warnings to fellow migrants to stay out of trouble and stay safe. This song would become viral on the internet. Two months after the song’s release, however, Balcane would be detained outside his friend’s house in Chicago. Minutes before pulling out of the driveway, he had just posted on his Instagram story that he was driving to the studio to make some music, when a black van intercepted him and his friend. Balcane was detained while the song “Donaltron” played in the background to mock him. Balcane was detained because of his tattoos, allegedly connecting him with Venezuelan gangs. Balcane had no criminal record and had applied for asylum in 2024 and had a pending case. He was taken to the Dodge Detention Facility and interrogated about his tattoos, repeatedly explaining that he had no gang affiliations. After being held for over 3 months, Balcane’s asylum case was approved by a judge, and he thought the fight was finally over. Despite this, Balcane was unlawfully held in detention for another 63 days, while the government tried to get incriminating evidence off of Balcane to appeal the asylum case. Thankfully, the judge denied their appeals, and Balcane was finally free, under asylum protections. Although Balcane’s situation is in grounds to sue, Balcane is reluctant and wants to put this behind him, not wanting to further add to the conflict between him and the United States government. Now, Balcane is doing what he loves again: making music, and is trying to make up the income lost during his detention. The sources we used for this post come from the organization The Washington Post. If you would like to learn more about Balcane’s story, we encourage you to check out the story published by this organization.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7645819063846948109?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#claudio-david-balcane-gonzalezs-story"
  },
  {
    order: 97,
    slug: "neri-jose-alvarado-borges-story",
    images: [
      "stories/neri-jose-alvarado-borges-story/1.png",
      "stories/neri-jose-alvarado-borges-story/2.png",
      "stories/neri-jose-alvarado-borges-story/3.png",
      "stories/neri-jose-alvarado-borges-story/4.png",
      "stories/neri-jose-alvarado-borges-story/5.png",
      "stories/neri-jose-alvarado-borges-story/6.png",
      "stories/neri-jose-alvarado-borges-story/7.png",
      "stories/neri-jose-alvarado-borges-story/8.png",
      "stories/neri-jose-alvarado-borges-story/9.png",
      "stories/neri-jose-alvarado-borges-story/10.png",
      "stories/neri-jose-alvarado-borges-story/11.png",
      "stories/neri-jose-alvarado-borges-story/12.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Worker", "Asylum", "Detention", "Wrongful Detention", "Venezuelan"],
    title: "Neri José Alvarado Borges' Story",
    summary: "Today, we are sharing the story of Neri José Alvarado Borges. Borges initially was studying psychology in Venezuela when he realized that he couldn’t continue his education while also supporting his family financially. Faced with this hard decision, Borges prioritized his family and decided to quit school, traveling on foot to the United States to earn money to support his family. He crossed the Texas border through the CBP One App appointment and got temporary protection status while he waited for his asylum hearing. Borges got a job at a bakery in Dallas. Every cent he earned in the United States, he sent back to his family in Venezuela to support them. Hernandez, the owner of the bakery, emphasizes that Borges is a very good person who cares a lot about his family. Although he had temporary protection, had a pending asylum hearing, and had no criminal record, Borges would be detained at his apartment complex because of alleged connections to gangs in Venezuela. Borges has three tattoos, one of which was a rainbow-colored ribbon that was meant to spread awareness of autism. His younger brother’s name was on the tattoo, who has autism. Aside from the ribbon, Borges also has two tattoos that say “family” and “brothers.” A few days after being detained, Borges would be deported and sent to the infamous mega prison located in El Salvador, the CECOT. The CECOT is known for its brutal living conditions for its detainees. Borges has no clear pathway out of the CECOT, and his family expresses worry about his fate. Many attorneys have questioned the haste with which the decisions were made to process Borges and deport him, and many believe that it was not justified under the assumption of gang ties because of a rainbow-colored ribbon tattoo. Borges’ future is unclear, and his sister emphasizes that he is not a gangster and would most definitely never hurt anyone. The sources we used for this post come from the organizations NBC News, NBC LA, The Guardian, Spectrum Local News, and LULAC. If you would like to learn more about Borges’ story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7647347777747438862?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#neri-jose-alvarado-borges-story"
  },
  {
    order: 98,
    slug: "jean-montrevils-story",
    images: [
      "stories/jean-montrevils-story/1.png",
      "stories/jean-montrevils-story/2.png",
      "stories/jean-montrevils-story/3.png",
      "stories/jean-montrevils-story/4.png",
      "stories/jean-montrevils-story/5.png",
      "stories/jean-montrevils-story/6.png",
      "stories/jean-montrevils-story/7.png",
      "stories/jean-montrevils-story/8.png",
      "stories/jean-montrevils-story/9.png",
      "stories/jean-montrevils-story/10.png",
      "stories/jean-montrevils-story/11.png",
      "stories/jean-montrevils-story/12.png",
      "stories/jean-montrevils-story/13.png",
      "stories/jean-montrevils-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "New York",
    tags: ["Activist", "Community Leader", "Detention", "Deportation", "Family", "Legal Status"],
    title: "Jean Montrevil's Story",
    summary: "Today, we are sharing the story of Jean Montrevil. Montrevil came to the United States when he was only 17 years old in 1986 from Haiti. He came to America to live with his father. During this time in the 80s, America was in a war against drugs, and it was really easy to get lost with the wrong crowd if you did not follow the rules. That is exactly what happened to Montrevil, and he would be detained for substance possession when he was 21 years old. This would lead to his green card being put into jeopardy and him serving for 11 years of a 33-year sentence, being released early due to good behavior. Being in prison completely changed Montrevil for the better, and once he came out, he made sure to be a better individual for his community and his family. Montrevil was on probation for 5 years, and during this time, he was an exemplary citizen: making sure to follow all the rules, paying his taxes, raising a family of four children, being the proprietor of a small business, and becoming active in his church. When his probation was over, the officer told him to meet with them to sign off the papers; however, once he got there, he was met by immigration officers and detained. Montrevil was held in a detention facility for over 7 months, finally being released with the help of Families for Freedom, a non-profit organization dedicated to helping families navigate deportation proceedings. Through his experience with the organization, he joined them and would later found his own non-profit called the New Sanctuary Coalition in 2007. Montrevil would be deported in 2018, remaining in Haiti for over 4 years, with no family or friends left in the country. He was shocked at how much it had changed over time. Thankfully, Montrevil was able to make it back home through the efforts of many lawyers and law services. Although Montrevil made it back, deportation still loomed over his head, and this would not be erased until he was granted a relief request based on his commitment to his community since 2000. Through this, Montrevil would no longer be deported based on his past conviction. Now, Montrevil is working with these same lawyers to help him secure permanent citizenship. The sources we used for this post come from the organizations NYU Law, Detention Watch Network, Dissent Magazine, Hello Vuelo, The Intercept, Families for Freedom, and Democracy Now. If you would like to learn more about Montrevil's story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7648077370141740301?is_from_webapp=1&sender_device=pc",
    link: "stories.html#jean-montrevils-story"
  },
  {
    order: 99,
    slug: "rosa-maria-hernandezs-story",
    images: [
      "stories/rosa-maria-hernandezs-story/1.png",
      "stories/rosa-maria-hernandezs-story/2.png",
      "stories/rosa-maria-hernandezs-story/3.png",
      "stories/rosa-maria-hernandezs-story/4.png",
      "stories/rosa-maria-hernandezs-story/5.png",
      "stories/rosa-maria-hernandezs-story/6.png",
      "stories/rosa-maria-hernandezs-story/7.png",
      "stories/rosa-maria-hernandezs-story/8.png",
      "stories/rosa-maria-hernandezs-story/9.png",
      "stories/rosa-maria-hernandezs-story/10.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Child", "Detention", "Deportation", "Family", "Family Separation", "Legal Status", "Medical/Humanitarian", "Mexican", "Wrongful Detention"],
    title: "Rosa Maria Hernandez's Story",
    summary: "Today, we are sharing the story of Rosa Maria Hernandez. Rosa came to the United States with her family from Mexico when she was only 3 months old in 2007. Her family came to the United States to provide Rosa with better opportunities and also to get access to better medical care for Rosa’s condition. Rosa was diagnosed with cerebral palsy, a chronic neurologic disorder that affects her motor abilities, her posture, and her balance. Rosa had been on an ambulance for gallbladder surgery, a common surgery due to her condition, which usually affects the digestive system because it affects the nervous system, which controls digestion and the gut. She was accompanied by her cousin, who was a U.S citizen, and they were travelling from Texas to the Driscoll Children’s Hospital. Rosa’s parents did not accompany her because of their status. Rosa and her cousin were stopped at a border checkpoint, and when immigration officers realized that Rosa was undocumented, they accompanied the ambulance to the hospital. Immigration officers would wait outside Rosa’s room while she recovered and then take her into custody, putting her into a children’s shelter. They denied the opportunity for Rosa to be released back to her parents. The apprehension by the immigration officers took place during the time when the Sensitive Locations policy had been in place. The Sensitive Locations policy was a policy that restricted immigration enforcement activities in civil, educational, and religious spaces. It has now been rescinded under the current administration. Rosa’s family was given two choices: either to voluntarily move to Mexico or follow through with court proceedings. Thankfully, Rosa would be released from custody after making national headlines; however, deportation still looms over her and her family's heads, and her future is still not clear. The sources we used for this post come from the organizations The Texas Tribune, ABC News, NPR, CFR, Reveal News, NeoMotion, The New York Times, and The Washington Post. If you would like to learn more about Rosa’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7648425406839704845?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#rosa-maria-hernandezs-story"
  },
  {
    order: 100,
    slug: "badar-khan-suri-story",
    images: [
      "stories/badar-khan-suri-story/1.png",
      "stories/badar-khan-suri-story/2.png",
      "stories/badar-khan-suri-story/3.png",
      "stories/badar-khan-suri-story/4.png",
      "stories/badar-khan-suri-story/5.png",
      "stories/badar-khan-suri-story/6.png",
      "stories/badar-khan-suri-story/7.png",
      "stories/badar-khan-suri-story/8.png",
      "stories/badar-khan-suri-story/9.png",
      "stories/badar-khan-suri-story/10.png",
      "stories/badar-khan-suri-story/11.png",
      "stories/badar-khan-suri-story/12.png",
      "stories/badar-khan-suri-story/13.png",
      "stories/badar-khan-suri-story/14.png",
      "stories/badar-khan-suri-story/15.png",
      "stories/badar-khan-suri-story/16.png"
    ],
    featured: false,
    isNewest: false,
    state: "Virginia",
    tags: ["Activist", "Detention", "Family", "Legal Status", "Student", "Wrongful Detention"],
    title: "Badar Khan Suri's Story",
    summary: "Today, we are sharing the story of Badar Khan Suri. Suri came to the United States from India with his wife and three sons. He came on a visa so that he could pursue higher education, conducting postdoctoral research at Georgetown University. In 2020, Suri completed his PH.D in Peace and Conflict Studies at the Nelson Mandela Center for Peace and Conflict Resolution at Jamia Millia Islamia in New Delhi. He has also traveled extensively around the world to many conflict zones in the Middle East and Asia. Suri is very interested in religion, violence, and peace, ethnic conflict, and peace processes. Suri came to the U.S to work on a research project looking into the causes of conflict due to different religious beliefs in societies and how to overcome these barriers. Suri is also very outspoken about his political opinions. Although he doesn’t speak in person to audiences, Suri is very vocal on social media, speaking freely, particularly on the dispute in Gaza. Suri had just broken his fast at Georgetown University and was ready to head back to his home in Northern Virginia when an unmarked SUV stopped him and three immigration officers arrested him. They did not present him with a warrant and forced him into the SUV amid cries from his wife. His wife and lawyers tried to locate where he was going, but immigration officers would not tell them. Suri was transferred to numerous detention facilities before finally ending up at the Texas Detention Facility. He was subjected to horrible conditions: shackled at his waist, wrists, and ankles during transfers, being provided no bed or pillow, being treated with disrespect, especially when he asked for religious accommodations, and being forced to sleep in the recreational center where the lights and TV were on all night. Suri was only allowed 20 seconds on the phone, during which he would ring his family, trying to tell them that he was okay. Back at home, his wife slept near the door, fearing that officers would come back to take her and their children. Suri had no criminal record. He was detained because of his alleged ties to terrorist organizations and because of his activism on social media. Thankfully, after months in detention, Suri was released because his detention had been a violation of his First and Fifth Amendment rights. Now, he is trying to make up the lost time with his family. The sources we used for this post come from the organizations NBC News, ACLU, The Guardian, CNN, AP News, NPR, BBC News, and CCR Justice. If you would like to learn more about Suri’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7648817839444364558?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#badar-khan-suri-story"
  },
  {
    order: 101,
    slug: "carol-mayorgas-story",
    images: [
      "stories/carol-mayorgas-story/1.png",
      "stories/carol-mayorgas-story/2.png",
      "stories/carol-mayorgas-story/3.png",
      "stories/carol-mayorgas-story/4.png",
      "stories/carol-mayorgas-story/5.png",
      "stories/carol-mayorgas-story/6.png",
      "stories/carol-mayorgas-story/7.png",
      "stories/carol-mayorgas-story/8.png",
      "stories/carol-mayorgas-story/9.png",
      "stories/carol-mayorgas-story/10.png",
      "stories/carol-mayorgas-story/11.png",
      "stories/carol-mayorgas-story/12.png",
      "stories/carol-mayorgas-story/13.png",
      "stories/carol-mayorgas-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "Missouri",
    tags: ["Asylum", "Detention", "Family", "Legal Status", "Parent", "Worker"],
    title: "Carol Mayorga’s Story",
    summary: "Today, we are sharing the story of Carol Mayorga. Mayorga was raised in Hong Kong with an abusive mother. Because of their relationship, Mayorga fled to the United States when she was only 20 years old, saving enough money by working as a McDonald's assistant. Mayorga told the court that her mother favored boys, regretting that she had a daughter. Her mother would cut her hair short and make her dress up like a boy. Not being able to handle this anymore, Mayorga decided to flee to the United States through a nonimmigrant visa. However, after her visa expired, she remained in the United States because she feared returning to her mother. Because of her mistreatment back in Hong Kong, Mayorga decided to apply for asylum, using letters that her friends and family wrote warning her to not come back out of fear that her mother would hurt her as evidence; however, her asylum case would be denied in 2014 because the court believed that her mother did not pose a direct threat anymore. After all, Mayorga was already 34 years old. Mayorga would continue to work in the U.S under an employment authorization and order of supervision, which allowed her to live and work in the United States while she continued her path to citizenship. Mayorga settled in Kennett, a small rural city in Missouri that had an overwhelming population that supported Trump. She would work multiple jobs, including at John’s Waffle and Pancake House, to help support and raise her three children. Community members described her as a hardworking and caring mom, a frequent volunteer at the local church, and on her kids’ soccer team. Mayorga would be detained during a routine check-in with immigration officials in St. Louis after she came to renew her employment authorization. She waited for nearly seven hours before immigration officials came in and detained her, shackling her and transferring her to multiple detention facilities before she ended up at Greene County Jail. Although Mayorga resided in Kennett, her detention sparked massive outrage in her local community, with many individuals advocating and protesting for her release. Thankfully, Mayorga would be released from detention after weeks trapped inside. Mayorga was determined to be eligible for a Deferred Enforcement Departure, which applied to certain Hong Kong Residents. Currently, Mayorga is fighting with her legal team to reopen her case and hopefully get citizenship. The sources we used for this post come from the organizations Newsweek, STLPR, Fox News, ASAM News, and The Marshall Project. If you would like to learn more about Mayorga’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7649187176995114254?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#carol-mayorgas-story"
  },
  {
    order: 102,
    slug: "nayra-guzmans-story",
    images: [
      "stories/nayra-guzmans-story/1.png",
      "stories/nayra-guzmans-story/2.png",
      "stories/nayra-guzmans-story/3.png",
      "stories/nayra-guzmans-story/4.png",
      "stories/nayra-guzmans-story/5.png",
      "stories/nayra-guzmans-story/6.png",
      "stories/nayra-guzmans-story/7.png",
      "stories/nayra-guzmans-story/8.png",
      "stories/nayra-guzmans-story/9.png",
      "stories/nayra-guzmans-story/10.png",
      "stories/nayra-guzmans-story/11.png",
      "stories/nayra-guzmans-story/12.png",
      "stories/nayra-guzmans-story/13.png",
      "stories/nayra-guzmans-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "Illinois",
    tags: ["Asylum", "Detention", "Deportation", "Family", "Family Separation", "Legal Status", "Medical/Humanitarian", "Mexican", "Parent", "Wrongful Detention"],
    title: "Nayra Guzmán's Story",
    summary: "Today, we are sharing the story of Nayra Guzmán. Nayra was a 22-year-old originally from Mexico who was also a new mother. Nayra came to the United States from Mexico with her family 3 years ago. She has a pending asylum case and a visa for victims of crime. The visa for victims of crime is a special nonimmigrant visa that provides temporary residency and work authorization for individuals who have been affected by qualifying crimes and have helped law enforcement in apprehending the individuals who have committed the crimes. Nayra and her family would settle down in Chicago. In late 2025, Nayra would also give birth to her daughter. The process was long and complicated, with a diagnosis of preeclampsia and a drawn-out C-section. After successfully giving birth, Nayra would, in a haze, see that her daughter was struggling to breathe. The baby would start to turn blue and would be quickly rushed to the NICU. In the days that followed, Nayra could not take her mind off her daughter, and everything else was put in the background, including the recent immigration raids that were occurring throughout Chicago. This would change, however, when, after only a few days of giving birth, Nayra and her family would be detained by immigrant officers when they were getting ready to visit the baby at the NICU to review the baby’s care plan and prognosis. Nayra would ask the officers to call the hospital to notify them that they wouldn’t be able to come in; however, the agents denied her request, explaining that she had to speak to a judge who would decide whether she would be released or deported to Mexico. During the ride to detention, Nayra’s incision was throbbing with pain. The agents would continue to drive fast and through potholes even after constant pleas to slow down by her brother. In the facility, Nayra was treated horribly: being only offered a meal after 5 hours, only being able to rest on small benches, never provided a breast pump, never assessed by a medical professional, and only able to manage the pain from the C-section and her type 1 diabetes with the medication that was in her backpack. A C-section recovery typically takes 6-8 weeks of rest, gentle care, and care and pain management. At a minimum, patients 15 days postpartum require a bed, breast pump, clean water, sanitary restrooms, access to showers, and extra food. Multiple inmates at Nayra’s Broadview detention facility would testify that many of them were treated to horrible conditions. They were in overcrowded, dirty cells; had limited food and water supply; no access to basic supplies such as a shower, soap, and menstrual supplies; inadequate medical care; freezing conditions; and were only fed a sandwich once per meal, which could spike blood sugar for individuals with diabetes. Nayra was also not provided with any information about her baby. At the same time, she was detained, which would be deeply traumatizing for a mother who had gone through childbirth requiring intensive care. Also, early bonding between parent and newborn is incredibly important in the early stages of birth, as it can nurture brain development. Before arrest, Nayra was always at the hospital daily and given time to bond with her baby. Now, she wasn’t able to even see her baby, let alone know the current conditions of their health. Thankfully, after petitions by her lawyers, Nayra was released from detention and allowed to return home. After being detained for over 34 hours, Nayra had fallen ill and had to stay away from the baby for almost another full week. By then, Nayra also seemed to have stopped producing breast milk. Although Nayra had been released, her visa and asylum case are still pending, and each day she feels fear when she steps out of her house to go and meet and care for her baby. The sources we used for this post come from the organizations 19th News and Univision. If you would like to learn more about Nayra’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7649549511546653966?is_from_webapp=1&sender_device=pc",
    link: "stories.html#nayra-guzmans-story"
  },
  {
    order: 103,
    slug: "annie-ramos-story",
    images: [
      "stories/annie-ramos-story/1.png",
      "stories/annie-ramos-story/2.png",
      "stories/annie-ramos-story/3.png",
      "stories/annie-ramos-story/4.png",
      "stories/annie-ramos-story/5.png",
      "stories/annie-ramos-story/6.png",
      "stories/annie-ramos-story/7.png",
      "stories/annie-ramos-story/8.png",
      "stories/annie-ramos-story/9.png",
      "stories/annie-ramos-story/10.png",
      "stories/annie-ramos-story/11.png",
      "stories/annie-ramos-story/12.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["DACA", "Dreamer", "Student", "Detention", "Deportation", "Family", "Legal Status", "Honduran", "Wrongful Detention"],
    title: "Annie Ramos' Story",
    summary: "Today, we are sharing the story of Annie Ramos. Ramos came to the United States from Honduras in 2005 when she was only 20 months old. Because she came to the United States only as a toddler, she was eligible to apply for programs such as the Deferred Action for Childhood Arrivals. However, due to recent legal battles the program has endured targeting its elimination, recent applications have been halted, and Ramos was not able to become a DACA recipient. Ramos would also issue a final deportation order in 2005, just a few months after she came to the United States and when she was less than 2 years old. She has also gotten many scholarships from organizations such as TheDream.US, which have helped her fund her pathway towards higher education, and Ramos is currently pursuing a bachelor's in biochemistry and is going to graduate in a few months. Ramos also teaches Sunday school on the side and is very community-oriented. She also recently married a U.S Army Staff Sergeant who was preparing for deployment soon. Just recently being married in the last few days, Ramos and her husband had a scheduled appointment at his military base, Fort Polk, to get her military spouse ID and get enrolled in health and other benefits. Attendants at the visitor center asked about her status, and they explained that they had just hired a lawyer and had begun the process of her changing her status. Spouses of individuals who are in the military are eligible to get a green card, amongst other forms of relief. After having a green card for over 3 years, they are also eligible to apply for citizenship. Ramos would be handcuffed after the couple informed them about her status and driven away from the base, held in a room, and then transported to a private detention facility. Ramos had no criminal record, just a deportation order from when she was only 20 months old. It had been over two decades of her being in the United States. Thankfully, news of Ramos’ detainment sparked worldwide backlash and would lead to the eventual release of her from the detention facility. Now, Ramos and her husband are working to get her status moving. The sources we used for this post come from the organizations The New York Times, NBC LA, Reason Magazine, ABC News, BBC News, TheDream.US, CNN, and The Hill. If you would like to learn more about Ramos’ story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7649939273076002061?is_from_webapp=1&sender_device=pc",
    link: "stories.html#annie-ramos-story"
  },
  {
    order: 104,
    slug: "thi-dua-vangs-story",
    images: [
      "stories/thi-dua-vangs-story/1.png",
      "stories/thi-dua-vangs-story/2.png",
      "stories/thi-dua-vangs-story/3.png",
      "stories/thi-dua-vangs-story/4.png",
      "stories/thi-dua-vangs-story/5.png",
      "stories/thi-dua-vangs-story/6.png",
      "stories/thi-dua-vangs-story/7.png",
      "stories/thi-dua-vangs-story/8.png",
      "stories/thi-dua-vangs-story/9.png",
      "stories/thi-dua-vangs-story/10.png",
      "stories/thi-dua-vangs-story/11.png",
      "stories/thi-dua-vangs-story/12.png"
    ],
    featured: false,
    isNewest: false,
    state: "Minnesota",
    tags: ["Asylum", "Detention", "Deportation", "Family", "Family Separation", "Legal Status", "Parent", "Worker", "Wrongful Detention"],
    title: "Thi Dua Vang's Story",
    summary: "Today, we are sharing the story of Thi Dua Vang. Vang and her family faced religious persecution because they were Christians in their home country of Vietnam, even being imprisoned because of their faith. They fled and sought asylum as undocumented refugees in Thailand. After enduring hardship for over 7 years, they decided to find refuge in the United States. Vang came to the United States as a refugee in 2023, being sponsored by her brother who had already come to the U.S. Vang has a pending green card application and is legally allowed to be in the United States as a refugee; however, because her English is not very proficient, she often is still fearful when she confronts federal agents, fearing they might detain or even deport her. At least 150 Minnesota refugees, who were already on the pathway to permanent residency, such as Vang, were detained in January as part of Operation PARRIS. Most were transferred to Texas detention facilities, while some were released, forced to find their way back home themselves. Vang would be subjected to both of these cruel treatments. On January 8th, her son opened the door to see ICE agents standing in front of their doorstep. Vang’s brother tried to translate for Vang and ask why she was being detained, but they did not answer. Vang had no criminal record and was legally a refugee who was in her last stages of permanent residency. She would be transferred to multiple processing centers, and at one point, she was almost deported to Vietnam, only being taken off the plane when it was already on the runway at the last second. Vang expresses the worry of being deported, leaving her children and family in America, while she has to go back to a country that persecuted her for her faith. Vang wasn’t allowed to contact her family at all. Thankfully, Vang would be released on bond by a judge after being in detention for over 2 weeks. When she was released, a translator asked her if she was leaving by car or plane, which she didn’t know because she had not gotten the chance to communicate with her family yet. She wondered if it was possible to wait in the waiting center for her family to pick her up, but federal agents denied her request, forcing her outside in the dead of night, in a city she didn’t know, not caring if she lived or died. It took over 3 hours before Vang’s brother and husband were able to pick her up. After her return, Vang was required to check in with ICE annually; however, despite this fact, ICE had tried to contact her at her house three times since her release. Because of her detention and fear of leaving her house, risking the possibility of being detained again, Vang had lost her job. Vang’s son is also currently enrolled in school online. A GoFundMe has been set up for Vang to support her with her expenses and legal fees. If you would like to donate, please feel free to support her here: https://www.gofundme.com/f/standing-with-thi-dua-for-justice-and-healing The sources we used for this post come from the organizations Sahan Journal, Pioneer Press, KARE 11, and GoFundMe. If you would like to learn more about Vang’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7650298385852878094?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#thi-dua-vangs-story"
  },
  {
    order: 105,
    slug: "jakelin-caal-maquins-story",
    images: [
      "stories/jakelin-caal-maquins-story/1.png",
      "stories/jakelin-caal-maquins-story/2.png",
      "stories/jakelin-caal-maquins-story/3.png",
      "stories/jakelin-caal-maquins-story/4.png",
      "stories/jakelin-caal-maquins-story/5.png",
      "stories/jakelin-caal-maquins-story/6.png",
      "stories/jakelin-caal-maquins-story/7.png",
      "stories/jakelin-caal-maquins-story/8.png",
      "stories/jakelin-caal-maquins-story/9.png",
      "stories/jakelin-caal-maquins-story/10.png",
      "stories/jakelin-caal-maquins-story/11.png",
      "stories/jakelin-caal-maquins-story/12.png",
      "stories/jakelin-caal-maquins-story/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "New Mexico",
    tags: ["Asylum", "Child", "Detention", "Family", "Guatemalan", "Medical/Humanitarian"],
    title: "Jakelin Caal Maquin's Story",
    summary: "Today, we are sharing the story of Jakelin Caal Maquin. Maquin was a seven-year-old Guatemalan girl who accompanied her father in his journey to the United States to hopefully be provided asylum and so that they could work in the U.S to send money back home to provide for their family. Deforestation in the Raxruha municipality of Guatemala has led to a mass exodus of migrants coming to the United States to seek job opportunities due to the ineffectiveness of subsistence farming. Maquin’s family got by making $5 a day by selling beans and corn that the father grew. Their father hoped that going to the U.S would allow him to make more money to be able to provide for their family. Maquin had recently turned 7 years old and would accompany her father on this journey because she was worried for him to be alone. She was gifted her first pair of shoes for this journey and was excited for her new life in America: getting her first toy and learning how to read and write. Because of recent restrictions on immigration and border patrol, getting to the United States legally and applying for asylum has gotten increasingly difficult. Individuals have had to take increasingly perilous pathways to just be able to get to the U.S to apply for asylum. During their journey, they travelled 2000+ miles, having to be smuggled before eventually being arrested with another large group of migrants and taken to a remote outpost in Antelope Wells. After arriving, agents would conduct an initial health screening for Maquin, where they interviewed her father and did an initial observation. Maquin’s father would write in a form written in English, not his native language, that Maquin was in good health. Maquin and her father would be held along with the other migrants for over 7 hours while awaiting transportation by bus to a border patrol station 2 hours away. They boarded the bus at 5 am and before it had left Antelope Wells, Maquin began to vomit. Agents decided that she should stay on the bus and wait until she got to the destination; however, 90 minutes later, when the bus arrived, Maquin had stopped breathing. Maquin was resuscitated twice and brought to a children’s hospital to be treated; however, she would pass away due to organ failure. Her passing has raised questions about the accuracy and legitimacy of the “initial screening” and whether early signs of her condition could have been identified if she were properly screened. Not properly staffing ports, addressing humanitarian concerns of immigrants who travel long journeys to get to the ports, delays in recognizing the severity of her illness, and delays in providing her with the appropriate care cost Maquin her life, all factors that could have been prevented if more carefully considered. The sources we used for this post come from the organizations NBC LA, WBUR, The Guardian, MPR News, VOA News, The New York Times, PBS, and Texas Monthly. If you would like to learn more about Maquin’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "",
    link: "stories.html#jakelin-caal-maquins-story"
  },
  {
    order: 106,
    slug: "ricardo-hernandez-navarretes-story",
    images: [
      "stories/ricardo-hernandez-navarretes-story/1.png",
      "stories/ricardo-hernandez-navarretes-story/2.png",
      "stories/ricardo-hernandez-navarretes-story/3.png",
      "stories/ricardo-hernandez-navarretes-story/4.png",
      "stories/ricardo-hernandez-navarretes-story/5.png",
      "stories/ricardo-hernandez-navarretes-story/6.png",
      "stories/ricardo-hernandez-navarretes-story/7.png",
      "stories/ricardo-hernandez-navarretes-story/8.png",
      "stories/ricardo-hernandez-navarretes-story/9.png",
      "stories/ricardo-hernandez-navarretes-story/10.png",
      "stories/ricardo-hernandez-navarretes-story/11.png",
      "stories/ricardo-hernandez-navarretes-story/12.png"
    ],
    featured: false,
    isNewest: false,
    state: "Illinois",
    tags: ["Asylum", "Detention", "Family", "Family Separation", "Legal Status", "Student", "Wrongful Detention"],
    title: "Ricardo Hernandez-Navarrete's Story",
    summary: "Today, we are sharing the story of Ricardo Hernandez-Navarrete. Ricardo and his mother came to the United States from Colombia to apply for asylum. They came to the U.S. when Ricardo was only 15 years old. Ricardo would attend Mather High School, becoming a well-loved member of his community and known for his love of soccer. He played for his high school team and also played on the IProSkills Academy team. He is committed to Truman College and is looking forward to playing collegiate-level soccer in the fall after his senior year. His dreams would be put to a halt when he and his mother would be detained during a routine asylum check-in. They were separated into different holding cells, having zero face-to-face contact for the 2-month time span they were in detention. Increased immigration enforcement has also put a mental strain on many students in the Chicago area, having to balance their studies and the fear of immigration enforcement in their backyard. Neither Ricardo nor his mother had a criminal record, and they both had a pending asylum case. They had their work permit, ID, and papers taken from them. This has led to massive outrage in their community, with Ricardo’s coach feeling deep anger about his detention. He recalls the first time he met Ricardo. Ricardo had walked several miles just to get to practice, highlighting his love for the sport and his passion to train and get better. Thankfully, after 2 months of being in detention, Ricardo and his mother were released, just before Ricardo’s graduation. Now, Ricardo and his mother have to go to routine check-ins while their asylum case is pending. A GoFundMe has been set up to support Ricardo and his mother in their legal journey. If you would like to support them, feel free to donate here: https://www.gofundme.com/f/free-ricardo-and-liliana-from-detention?attribution_id=sl:9a57cf09-c693-4e55-8172-a793772099a7&lang=en_US&ts=1776514804&utm_campaign=fp_sharesheet&utm_content=amp17_tc-amp20_control&utm_medium=customer&utm_source=copy_link The sources we used for this post come from the organizations CBS News, WAFB, Chicago Tribune, ABC 7, and Block Club Chicago. If you would like to learn more about Ricardo and his mother’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7651022473391115533?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#ricardo-hernandez-navarretes-story"
  },
  {
    order: 107,
    slug: "andrea-garcias-family-story",
    images: [
      "stories/andrea-garcias-family-story/1.png",
      "stories/andrea-garcias-family-story/2.png",
      "stories/andrea-garcias-family-story/3.png",
      "stories/andrea-garcias-family-story/4.png",
      "stories/andrea-garcias-family-story/5.png",
      "stories/andrea-garcias-family-story/6.png",
      "stories/andrea-garcias-family-story/7.png",
      "stories/andrea-garcias-family-story/8.png",
      "stories/andrea-garcias-family-story/9.png",
      "stories/andrea-garcias-family-story/10.png",
      "stories/andrea-garcias-family-story/11.png",
      "stories/andrea-garcias-family-story/12.png",
      "stories/andrea-garcias-family-story/13.png",
      "stories/andrea-garcias-family-story/14.png",
      "stories/andrea-garcias-family-story/15.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Child", "Detention", "Deportation", "Family", "Family Separation", "Legal Status", "Medical/Humanitarian", "Mexican", "Parent", "Student", "Worker"],
    title: "Andrea García’s Family Story",
    summary: "Today, we are sharing the story of Andrea Garcia’s family. Garcia’s mother and father came to the United States from Mexico when they were young adults, later reconnecting and falling in love. They would have six children and settle down in Southern Texas. Her father works in construction along with the oldest son. Amid recent immigration crackdowns, agents raided the family’s home, injuring some of the children, including a 15-year-old with a chronic bone disorder. The second oldest, Humberto, was leaving for work when it happened. He was detained and released after a few hours, while the father and mother were detained. The mother became deeply depressed in custody and signed deportation papers, while the father remained in custody awaiting a court date he assumed would lead to his deportation. Life for the children changed drastically. Humberto had to postpone his wedding and get a job cutting trees to support the family. Ana decided she would no longer pursue a degree in law enforcement, becoming a cleaner with Andrea. Juan, Lucero, and Jorge became closed off and withdrawn, avoiding interaction and becoming afraid of anyone outside of school. On a recent Thursday afternoon, Ana found herself in the home their father built, reminiscing about her past life. She was reminded by the medicine on the refrigerator for her father’s diabetes and hypertension, and by the many letters her mother sent while in detention and now from Mexico. Ana had to take care of dinner because Andrea was running late doing errands. She never expected to have to care for and feed a household of six. Jorge, the youngest, had just gotten out of school and reluctantly ate his dinner. Juan, a 17-year-old high school senior, is interested in pursuing a degree in law enforcement, taking many college-level courses to get ahead, a dream that Ana had given up on. She did not feel she could in good conscience pursue a degree in a system that broke their family apart. Lucero, a 15-year-old girl, used to feed the chickens and roosters in their backyard with their father daily. Now, she still maintains the routine to remind herself of what life was like before. Two days later, the children attended a Catholic mass, reminiscing about how religious their father was and how much he would have loved to come to an event like this, bringing them along with him. The sources we used for this post come from The New York Times. If you would like to learn more about Andrea’s family story, we encourage you to check out the story published by this organization.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7651395329153076493?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#andrea-garcias-family-story"
  },
  {
    order: 108,
    slug: "alejandras-story",
    images: [
      "stories/alejandras-story/1.png",
      "stories/alejandras-story/2.png",
      "stories/alejandras-story/3.png",
      "stories/alejandras-story/4.png",
      "stories/alejandras-story/5.png",
      "stories/alejandras-story/6.png",
      "stories/alejandras-story/7.png",
      "stories/alejandras-story/8.png",
      "stories/alejandras-story/9.png",
      "stories/alejandras-story/10.png"
    ],
    featured: false,
    isNewest: false,
    state: "Minnesota",
    tags: ["Asylum", "Child", "Detention", "Deportation", "Family", "Family Separation", "Legal Status", "Parent", "Worker"],
    title: "Alejandra’s Story",
    summary: "Today, we are sharing the story of Alejandra. Alejandra, who asked to only be identified by her first name in order not to jeopardize her own immigration case, came to the United States from Colombia with her husband, Cristian. They came to the U.S on asylum cases and have been living in the United States for over 4 years. Last year, when immigration enforcement ramped up in Minnesota, Alejandra and Cristian didn’t think much of it because they both had asylum cases, had been living in the U.S for over 4 years, and were busy working on their cleaning business. They never expected the events that would occur in February, when the family was getting ready for their morning. Her husband was getting ready to go to work at a new job, and the kids were getting ready to go to daycare when immigration officers showed up at their apartment parking lot. Alejandra and their youngest child quickly rushed into the apartment with help from their neighbors, but Cristian was stuck in the car. Cristian quickly made sure to hand off the oldest child to one of their neighbors and was detained soon after. He was transported to a detention facility in Texas and chose to voluntarily deport soon after. Although he had a pending asylum case, he didn’t believe fighting for his case in court was worth it because he had a previous deportation order. After her husband’s deportation, Alejandra has struggled as the sole provider of the family during the freezing winters of Minnesota. She isn’t able to work because she is stuck taking care of her children and now doesn’t have access to a car. The dire situation faced by many immigrant families, such as Alejandra's, is not uncommon. Many families have been affected in recent times due to the surge in immigration enforcement, and people have had to hire their own attorneys. This has further exacerbated the financial burden for many families who have already lost their jobs. Alejandra wants to reunite the family as quickly as possible, but she is already making ends meet just for daily living expenses and doesn’t know how she can pay for airfare. She also worries about being picked up off the street and being separated from her children. The sources we used for this post come from the organizations MPR News, Sahan Journal, The Intercept, In These Times, and KUOW. If you would like to learn more about Alejandra’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7652888706579287309?is_from_webapp=1&sender_device=pc",
    link: "stories.html#alejandras-story"
  },
  {
    order: 109,
    slug: "olivo-familys-story",
    images: [
      "stories/olivo-familys-story/1.png",
      "stories/olivo-familys-story/2.png",
      "stories/olivo-familys-story/3.png",
      "stories/olivo-familys-story/4.png",
      "stories/olivo-familys-story/5.png",
      "stories/olivo-familys-story/6.png",
      "stories/olivo-familys-story/7.png",
      "stories/olivo-familys-story/8.png",
      "stories/olivo-familys-story/9.png",
      "stories/olivo-familys-story/10.png",
      "stories/olivo-familys-story/11.png",
      "stories/olivo-familys-story/12.png",
      "stories/olivo-familys-story/13.png",
      "stories/olivo-familys-story/14.png",
      "stories/olivo-familys-story/15.png",
      "stories/olivo-familys-story/16.png"
    ],
    featured: false,
    isNewest: false,
    state: "California",
    tags: ["DACA", "Detention", "Family", "Family Separation", "Legal Status", "U.S. Citizen", "Worker"],
    title: "Olivo Family's Story",
    summary: "Today, we are sharing the story of the Olivo Family. The father and mother are undocumented; however, the five children in the family are all U.S. citizens or have protection from programs such as DACA. Alejandro and his son, Bryan, were arriving at a landscaping job in Del Mar when immigration officers stopped their car. Alejandro quickly called his wife when the agents surrounded the car while Bryan persistently questioned if they had a warrant. The agents ignored the questions, breaking the window and pulling them out. To the wife, Veronica, the sound of broken glass was super loud, and right after, the phone went dead. Alejandro and Bryan are amongst thousands of San Diegans who have been detained amid a surge in immigration enforcement. The weeks of separation for the family were filled with fear and anger, but amid the stressful situation, the family never once gave up. Alejandro is undocumented, but the father of 5, who has worked in the U.S. for several decades, has never once committed a crime, and owns his own business. Bryan has protection as a DACA recipient. After the news quickly spread, many people around the neighborhood came to their house to help bring food, pay for rent, and call lawyers. Beckhams, the second oldest, was initially in a state of shock, but knew that he had to pull it together and support his family during this hard time. He set up a GoFundMe campaign for the family. Charline felt the absence of her father at night. Usually, when her father was home, he would hear small noises that would scare Charline and check on them. Charline would reach out to a teacher at her high school for support. The word of their situation spread and more people started dropping off food at the house. Ian, the second youngest, explained that he was shocked and also very happy to see that there were individuals that cared about them. Bryan would be released a day after being detained after ICE agents realized that he was a DACA recipient. He has been very busy supporting the family; however, on his time off, he loves to go support his favorite soccer team, San Diego FC. Bryan loved singing the anthem before the games, but during his first game back, he put his head down on the line \"the land of the free\" because his father was not free. Thankfully, after a month of detention, Alejandro was finally released. When he came home, he had lost a lot of weight and was much paler. The sources we used for this post come from the organizations KPBS San Diego and GoFundMe. If you would like to donate and support the family, feel free to donate here: https://gofund.me/9a95faf2f",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7653278493412723982?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#olivo-familys-story"
  },
  {
    order: 110,
    slug: "chloe-tipan-villacis-story",
    images: [
      "stories/chloe-tipan-villacis-story/1.png",
      "stories/chloe-tipan-villacis-story/2.png",
      "stories/chloe-tipan-villacis-story/3.png",
      "stories/chloe-tipan-villacis-story/4.png",
      "stories/chloe-tipan-villacis-story/5.png",
      "stories/chloe-tipan-villacis-story/6.png",
      "stories/chloe-tipan-villacis-story/7.png",
      "stories/chloe-tipan-villacis-story/8.png",
      "stories/chloe-tipan-villacis-story/9.png",
      "stories/chloe-tipan-villacis-story/10.png",
      "stories/chloe-tipan-villacis-story/11.png",
      "stories/chloe-tipan-villacis-story/12.png",
      "stories/chloe-tipan-villacis-story/13.png",
      "stories/chloe-tipan-villacis-story/14.png",
      "stories/chloe-tipan-villacis-story/15.png",
      "stories/chloe-tipan-villacis-story/16.png",
      "stories/chloe-tipan-villacis-story/17.png"
    ],
    featured: false,
    isNewest: false,
    state: "Minnesota",
    tags: ["Asylum", "Child", "Detention", "Ecuadorian", "Family", "Family Separation", "Legal Status"],
    title: "Chloe Tipan Villacis' Story",
    summary: "Today, we are sharing the story of Chloe Tipan Villacis and her parents, Elvis and Nicole. The family came to the United States from Ecuador in May 2024 because Elvis believed it would be safer for Chloe to grow up here and that she would have more opportunities to succeed. Protests echoed throughout Minnesota amid recent surges in immigration enforcement; however, in the small house, all that could be heard was Chloe whispering that she was hungry and wanted to eat fruit. Elvis brought Chloe to run errands at a nearby store. When they returned home, Elvis felt something was off. A car continued to follow behind them, and when Elvis got to the house, he saw immigration officers surrounding it. After seeing them, Elvis decided to keep driving and called his wife to tell her to get ready to pick up Chloe at the back door in case he was detained. Nicole dropped everything and ran to the back door, but by then it was too late, and agents had already surrounded Elvis' car. Nicole wanted to run out to get Chloe, but Elvis warned her to remain inside because she could also be detained because of her undocumented status. Elvis begged for an American to come and get his daughter; however, within minutes, agents shattered the car window and began detaining them. The agents tried telling Nicole to come out of the house to get Chloe and tried to take Chloe from Elvis, but Elvis refused because he did not trust them. Chloe started crying amid the shattered glass and chaos, and a few shards of glass landed on Chloe's hand, making her bleed a little. Elvis states that she was not offered any medical assistance. Both Chloe and Elvis were detained and transferred to a Texas holding facility. Both Chloe and Elvis were asylum seekers with no criminal record. The two were forced to wait in an airport terminal as their lawyers scrambled to halt their transfer. Chloe was forced to sleep on airport chairs, eat cookies, and drink water purchased by custodial officers. Thankfully, after 27 hours in federal custody, Chloe was released; however, Elvis remained in custody. The family has decided that the best course of action is to return to Ecuador because they fear being separated once again if they remain in the U.S. The sources we used for this post come from the organizations MS News, NBC News, and GoFundMe. If you would like to learn more about Chloe's story, we encourage you to check out the stories published by these organizations. Currently, the GoFundMe for the family is paused; however, if it does reopen, you can support them here: https://gofund.me/fbe25a100",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7653623635416059150?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#chloe-tipan-villacis-story"
  },
  {
    order: 111,
    slug: "roman-surovtsevs-story",
    images: [
      "stories/roman-surovtsevs-story/1.png",
      "stories/roman-surovtsevs-story/2.png",
      "stories/roman-surovtsevs-story/3.png",
      "stories/roman-surovtsevs-story/4.png",
      "stories/roman-surovtsevs-story/5.png",
      "stories/roman-surovtsevs-story/6.png",
      "stories/roman-surovtsevs-story/7.png",
      "stories/roman-surovtsevs-story/8.png",
      "stories/roman-surovtsevs-story/9.png",
      "stories/roman-surovtsevs-story/10.png",
      "stories/roman-surovtsevs-story/11.png",
      "stories/roman-surovtsevs-story/12.png",
      "stories/roman-surovtsevs-story/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Asylum", "Detention", "Deportation", "Family", "Family Separation", "Legal Status", "Worker"],
    title: "Roman Surovtsev's Story",
    summary: "Today, we are sharing the story of Roman Surovtsev. Roman was born in the USSR city of Zhdanov. After his father, a chemical plant worker, passed away in the aftermath of Chornobyl, Roman's family decided to leave their home city. Four-year-old Roman, along with his two siblings and mother, fled the USSR and applied for asylum in the United States. The family came to the U.S., forfeiting their USSR citizenship. They slept in a San Francisco church for over six months before moving north to Sacramento. Still, poverty seemed to follow them wherever they went. As a child, Roman felt ashamed of this and would regularly steal small toys to make it seem like his family was not poor. He would also help his mother clean homes and law offices to make ends meet. Roman made friends with the wrong group of people, and in 2003, at 19 years old, he served prison time after helping his friends carjack a motorcycle. Roman was released on good behavior; however, his green card status was revoked. Because of this, he was on grounds for deportation, but he was released from federal custody on an order of supervision. Without USSR citizenship or a green card, Roman got by as a stateless individual with a work permit. He also went to regular immigration check-ins and never committed another crime after his past conviction. Roman would turn his life around, being baptized in prison and meeting his now-wife, Samantha, on a jet skiing trip with mutual friends in Orange County. The two bought a house together in Dallas, raised two daughters, and started a painting business together. Roman also trained to be a prison minister, offering religious advice to detainees he met. Roman did not expect to be detained during a regular immigration check-in. Officials tried deporting him to Ukraine, but Roman lacked the necessary documents to prove his citizenship, and deporting him could lead to conflict. In the more than six months Roman spent in detention, he missed his anniversary, his wife's and daughter's birthdays, and a medical problem his mother was suffering from. Thankfully, Roman's stay of removal was accepted, and his green card was later restored. The sources we used for this post come from the organizations NPR and CNN. If you would like to learn more about Roman's story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7654010154257485070?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#roman-surovtsevs-story"
  },
  {
    order: 112,
    slug: "meenu-batras-story",
    images: [
      "stories/meenu-batras-story/1.png",
      "stories/meenu-batras-story/2.png",
      "stories/meenu-batras-story/3.png",
      "stories/meenu-batras-story/4.png",
      "stories/meenu-batras-story/5.png",
      "stories/meenu-batras-story/6.png",
      "stories/meenu-batras-story/7.png",
      "stories/meenu-batras-story/8.png",
      "stories/meenu-batras-story/9.png",
      "stories/meenu-batras-story/10.png",
      "stories/meenu-batras-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Asylum", "Detention", "Family", "Legal Status", "Worker"],
    title: "Meenu Batra's Story",
    summary: "Today, we are sharing the story of Meenu Batra. Batra came to the United States when she was only 18 years old from India, after her parents had been the victims of targeted anti-Sikh violence. Batra felt conflicted that she was leaving on such short notice, only briefly communicating with her friends and family before leaving permanently. She joined her older siblings, who already resided in the United States, and applied for asylum. She would be granted a withholding of removal from India due to her past and would be allowed to remain in the U.S. She would spend the next 25 years with little to no interaction with immigration enforcement. Batra spent a few years living on the East Coast before relocating to Texas. She soon realized the need for South Asian interpreters as she lived close to many detention facilities and became an interpreter for immigration courts. She said it was always satisfying to be able to give detainees good news. Batra became the only certified Hindi, Punjabi, and Urdu courtroom interpreter in all of Texas. Through her work, she gained a deep respect for the legal system and believed there was a right way to do things, and that the United States mostly followed this. This changed when Batra was detained at the airport while she was on her way to interpret in a trial located in Milwaukee. Batra believed during the encounter that it was all a mistake, and that officers would look at her I.D. and work permit and realize they had the wrong person. Batra was more worried about missing the trial than about what would happen to her. Instead, Batra soon realized that there was no mistake and that it had been a targeted attempt to detain her. Batra called her adult daughter to hire an immigration lawyer to help fight for her release. She would be held in immigration detention for over 45 days. Now, her lawyers are working to prevent her from being detained and possibly deported again. This experience has completely changed Batra’s life, and in the few days since she returned from detention, she has had many sleepless nights. Whenever a car passes her, she jumps, fearing that “they” are coming to get her. The sources we used for this post come from the organizations CNN, CBS News, ABC News, and Atanet. If you would like to learn more about Batra’s story, we encourage you to check out the sources published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7654756337301277965?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#meenu-batras-story"
  },
  {
    order: 113,
    slug: "marie-therese-ross-story",
    images: [
      "stories/marie-therese-ross-story/1.png",
      "stories/marie-therese-ross-story/2.png",
      "stories/marie-therese-ross-story/3.png",
      "stories/marie-therese-ross-story/4.png",
      "stories/marie-therese-ross-story/5.png",
      "stories/marie-therese-ross-story/6.png",
      "stories/marie-therese-ross-story/7.png",
      "stories/marie-therese-ross-story/8.png",
      "stories/marie-therese-ross-story/9.png",
      "stories/marie-therese-ross-story/10.png",
      "stories/marie-therese-ross-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "Alabama",
    tags: ["Detention", "Family", "Family Separation", "ICE", "Legal Status", "Military Family"],
    title: "Marie-Thérèse Ross' Story",
    summary: "Today, we are sharing the story of Marie-Thérèse Ross. Ross came to the United States to reunite and start a new life with William, a retired U.S. soldier. They met when William was deployed in France and Ross was working as a secretary at NATO. From 1962 to 2022, Ross and William stayed close through communication with William's wife. After both became widowed, they spent more time together, fell in love, and married last year. After William passed away in January, disputes arose in the family over inheritance. William's son, who was in charge of the mail, rerouted Ross' immigration appointment reminder, causing her to miss her scheduled appointment. ICE agents later arrived at her door at 8 in the morning, handcuffed her, and forced her into a vehicle while she was still in her pajamas. After two days, Ross was transferred to a detention facility in Louisiana. Ross described the facility's conditions as okay, but said the guards' treatment and the noise in the cell were unbearable. The rules were also very strict. Ross was held in a dormitory-like room with 58 other women. The detainees treated one another very well. Ross recalls that at night, when her blanket slipped away, another detainee helped put it back. Ross also owns a friendship bracelet, which she still wears today, that was gifted to her by one of the detainees. She was released from detention after 16 days. To this day, she remembers the many mothers in the facility who were separated from their families. The experience changed her view of the United States and its immigration policies. Ross explained that the detainees did nothing wrong except for being South American. The sources we used for this post come from NBC, The Guardian, France 24, The New York Times, The Telegraph, and El País. If you would like to learn more about Ross' story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7655111823083064589?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#marie-therese-ross-story"
  },
  {
    order: 114,
    slug: "alexander-esquivels-story",
    images: [
      "stories/alexander-esquivels-story/1.png",
      "stories/alexander-esquivels-story/2.png",
      "stories/alexander-esquivels-story/3.png",
      "stories/alexander-esquivels-story/4.png",
      "stories/alexander-esquivels-story/5.png",
      "stories/alexander-esquivels-story/6.png",
      "stories/alexander-esquivels-story/7.png",
      "stories/alexander-esquivels-story/8.png",
      "stories/alexander-esquivels-story/9.png",
      "stories/alexander-esquivels-story/10.png",
      "stories/alexander-esquivels-story/11.png",
      "stories/alexander-esquivels-story/12.png",
      "stories/alexander-esquivels-story/13.png",
      "stories/alexander-esquivels-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "Virginia",
    tags: ["Worker", "Detention", "Family", "Family Separation", "ICE", "Legal Status", "Salvadoran"],
    title: "Alexander Esquivel's Story",
    summary: "Today, we are sharing the story of Alexander Esquivel. Alexander came to the United States from El Salvador 20 years ago. He built a life here, working as a cleaner and raising two U.S. citizen daughters. Alex was eating breakfast in his car outside his apartment in D.C. when ICE agents approached him. Alex was repeatedly questioned about which border he crossed. Because he could not show evidence of legal status, he was detained and transferred to the Chantilly Detention Facility in Northern Virginia. He is just one of more than 1,100 immigrants who have been detained in D.C. in the past two months, following the recent surge in immigration enforcement. Like 80% of those detained, Alex had no criminal record. He was later transferred to Southwest Virginia Regional Jail, where he met many people who were legally allowed to be in the U.S. or were in the process of obtaining legal status. He witnessed the unfairness of people being detained because of their appearance alone. Alex explained that the conditions in the facility were horrible, including reports of worms in the food. He also said that everyone was sick and struggled to get medical attention. Thankfully, after a hard two months for Alex's family, he was finally released on bail. The judge cited his strong family ties and clean criminal record as reasons for his release. Even after his release, this event has permanently scarred the family, and Alex still sometimes wakes up early in the morning believing he is still in the detention facility. Although Alex has been released, DHS is still able to challenge this decision. The sources we used for this post come from the organizations 51st News, Daily Voice, and PBS News Student Reporting Labs. If you would like to learn more about Alex's story, we encourage you to check out the stories published by these organizations. A GoFundMe has been set up for Alex to help pay for his legal fees and support him in his ongoing battle. If you would like to donate, please feel free to support him here: https://gofund.me/84c15afc6",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7655849305902697742?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#alexander-esquivels-story"
  },
  {
    order: 115,
    slug: "jose-contreras-diazs-story",
    images: [
      "stories/jose-contreras-diazs-story/1.png",
      "stories/jose-contreras-diazs-story/2.png",
      "stories/jose-contreras-diazs-story/3.png",
      "stories/jose-contreras-diazs-story/4.png",
      "stories/jose-contreras-diazs-story/5.png",
      "stories/jose-contreras-diazs-story/6.png",
      "stories/jose-contreras-diazs-story/7.png",
      "stories/jose-contreras-diazs-story/8.png",
      "stories/jose-contreras-diazs-story/9.png",
      "stories/jose-contreras-diazs-story/10.png",
      "stories/jose-contreras-diazs-story/11.png",
      "stories/jose-contreras-diazs-story/12.png",
      "stories/jose-contreras-diazs-story/13.png",
      "stories/jose-contreras-diazs-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["DACA", "Detention", "Deportation", "Dreamer", "Family", "Family Separation", "Honduran", "ICE", "Legal Status", "Student", "Worker"],
    title: "José Contreras Díaz's Story",
    summary: "Today, we are sharing the story of José Contreras Díaz. Contreras came to the United States when his mother believed it would be better to raise him and his siblings in the U.S. rather than Honduras. Contreras and his family crossed the Mexico-Texas border when he was only 8 years old and turned themselves in to immigration agents. Their mother was given a notice to appear in immigration court. After their first hearing, the family relocated, and Contreras’ mother notified the court that they were never given a follow-up hearing. Later, when she called the court to follow up, officials said that the family received an order of deportation because they had supposedly missed their follow-up hearing. The family would move to the Rio Grande Valley, and Contreras would enroll in college, pursuing a degree in Chemistry. In 2014, Contreras was officially accepted into DACA, granted work authorization, and continued renewing his status every 2 years. In 2022, he would meet his future wife while shopping at a local grocery store, asking her out to coffee. They would move in together, and Contreras quit college to work as a commercial driver, then in the oil fields. Contreras was working as a pool technician when he was notified of an immigration appointment, which immediately drew his suspicion. He had not once received a notice for an appointment in the 12 years he was in DACA. This was when immigration raids surged in the Rio Grande Valley, and individuals were being deported even without criminal records. His suspicions would be correct when Contreras was detained and, within days, deported to Honduras. The first month in Honduras, all Contreras did was cry in his grandparents’ house. He missed Valentine’s Day, his wife’s birthday, and most importantly, his son’s birth. Contreras would work hard to get back to his family, eventually being allowed to return to Texas; however, he would never expect to be detained as soon as he set foot out of the plane. He would spend 8 days in Port Isabel Detention Facility, being visited by his younger sister, who brought his son with her. Thankfully, he would be released just in time for Mother’s Day, although he felt guilty that he wasn’t able to provide a gift for his wife since he lost his job in detention. Ever since he was released, Contreras has felt fear of slipping up and being detained once again. The sources we used for this post come from the organizations The Texas Tribune, El País, FWD, MS Now, The New York Times, and GoFundMe. If you would like to learn more about Contreras’ story, we encourage you to check out the stories published by these organizations. A GoFundMe has been set up to support Contreras in this time of financial hardship. If you would like to donate, please feel free to do so here: https://gofund.me/6cfd90c75",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7656227634245897485?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#jose-contreras-diazs-story"
  },
  {
    order: 116,
    slug: "milena-araya-davis-story",
    images: [
      "stories/milena-araya-davis-story/1.png",
      "stories/milena-araya-davis-story/2.png",
      "stories/milena-araya-davis-story/3.png",
      "stories/milena-araya-davis-story/4.png",
      "stories/milena-araya-davis-story/5.png",
      "stories/milena-araya-davis-story/6.png",
      "stories/milena-araya-davis-story/7.png",
      "stories/milena-araya-davis-story/8.png",
      "stories/milena-araya-davis-story/9.png",
      "stories/milena-araya-davis-story/10.png",
      "stories/milena-araya-davis-story/11.png",
      "stories/milena-araya-davis-story/12.png"
    ],
    featured: false,
    isNewest: false,
    state: "California",
    tags: ["DACA", "Detention", "Dreamer", "Family", "ICE", "Legal Status", "Student", "Worker"],
    title: "Milena Araya-Davis' Story",
    summary: "Today, we are sharing the story of Milena Araya-Davis. Milena came to the United States with her family from Peru on a tourist visa. She came when she was only 4 years old, and her parents wanted to provide her with opportunities to succeed that weren't available in Peru. At the age of 15, she would apply for and be accepted into DACA, granting her work authorization and allowing her to live without fear of deportation. Milena would finish high school and achieve both a bachelor's and a master's degree. However, instead of being ecstatic and ready for the future, Milena felt uncertainty. She was no longer a student and feared that her status would affect her chances of getting a job. Milena would become a family therapist in San Diego and marry a U.S citizen in 2025. After marrying, she would apply for a green card. Milena was supported by her sister, who was already a U.S citizen, and would have her proof of relationship approved during her green card interview. Despite this, the interviewer would leave the room around the end of the interview, and 3 ICE agents would flood inside the room, questioning Milena on how she came to the U.S. She was arrested and transferred to Otay Mesa Detention Facility in a holding cell with 150 other women. Milena said that the whole situation was incredibly dehumanizing. She had done everything right, didn't have a criminal record, studied in the U.S, and still was treated like a criminal. Milena recalls the fear she felt in the freezing holding cell, where she stayed for 7 hours alone. Thankfully, Milena would be released on bond after 7 days. Months later, immigration judges would terminate her removal proceedings and reopen her green card application case. Good news came only weeks later, when Milena was informed that her application was approved and she was granted a green card. She finally believes her life can start in the U.S. The sources we used for this post come from the organizations Desert Sun, SWNS, CBS 8, and NBC LA San Diego. If you would like to learn more about Milena's story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7656583675823344910?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#milena-araya-davis-story"
  },
  {
    order: 117,
    slug: "tania-warner-story",
    images: [
      "stories/tania-warner-story/1.png",
      "stories/tania-warner-story/2.png",
      "stories/tania-warner-story/3.png",
      "stories/tania-warner-story/4.png",
      "stories/tania-warner-story/5.png",
      "stories/tania-warner-story/6.png",
      "stories/tania-warner-story/7.png",
      "stories/tania-warner-story/8.png",
      "stories/tania-warner-story/9.png",
      "stories/tania-warner-story/10.png",
      "stories/tania-warner-story/11.png",
      "stories/tania-warner-story/12.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Child", "Detention", "Family", "Family Separation", "ICE", "Legal Status", "Medical/Humanitarian"],
    title: "Tania Warner's Story",
    summary: "Today, we are sharing the story of Tania Warner and her daughter, Alya. They came to the United States from Canada after she married her husband, Edward. On March 14, the family was driving home from Texas after a baby shower when they were stopped at a border patrol checkpoint. Warner and Alya were taken away from the car, fingerprinted, and detained. Alya had recently been diagnosed with autism. Warner and Alya had no criminal record, and Warner was legally allowed to live and work in the U.S. until 2030. They were originally taken to the Rio Grande Valley processing center before being transferred to the Dilley Detention Facility, which has been criticized for inadequate food and medical care for detainees. Both Warner and Alya developed rashes during their time in Dilley, which they attributed to the harsh detergent used to wash their clothes. After several weeks of being detained, they were released on bond. However, they still live in constant fear because of their status, have to go to regular ICE check-ins, and Warner must wear an ankle monitor at all times. Warner expressed her relief about finally being freed, but she was reminded of the many families still unfairly held in detention facilities, even after not committing a single crime. Not all of them spoke English, but the group formed a kinship through their shared experience in detention. Warner expressed fear about having to meet with their bond officer because they would need to cross an ICE checkpoint. The sources we used for this post come from Warner's GoFundMe, The Guardian, CTV News, and CBC. If you would like to learn more about Warner's story, we encourage you to check out the stories published by these organizations. A GoFundMe has been set up for Warner and Alya to pay for their legal fees. If you would like to support them and donate, please feel free to do so here: https://gofund.me/f3eeadae7",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7657347667550276877?is_from_webapp=1&sender_device=pc",
    link: "stories.html#tania-warner-story"
  },
  {
    order: 118,
    slug: "roberto-orozco-ramirez-story",
    images: [
      "stories/roberto-orozco-ramirez-story/1.png",
      "stories/roberto-orozco-ramirez-story/2.png",
      "stories/roberto-orozco-ramirez-story/3.png",
      "stories/roberto-orozco-ramirez-story/4.png",
      "stories/roberto-orozco-ramirez-story/5.png",
      "stories/roberto-orozco-ramirez-story/6.png",
      "stories/roberto-orozco-ramirez-story/7.png",
      "stories/roberto-orozco-ramirez-story/8.png",
      "stories/roberto-orozco-ramirez-story/9.png",
      "stories/roberto-orozco-ramirez-story/10.png",
      "stories/roberto-orozco-ramirez-story/11.png",
      "stories/roberto-orozco-ramirez-story/12.png"
    ],
    featured: false,
    isNewest: false,
    state: "Montana",
    tags: ["Worker", "Family", "Detention", "ICE", "Legal Status", "Mexican", "Wrongful Detention"],
    title: "Roberto Orozco-Ramirez's Story",
    summary: "Today, we are sharing the story of Roberto Orozco-Ramirez. Roberto came to the United States from Mexico over a decade ago. He settled in Froid, Montana, and raised four children. He runs a diesel shop, and on the side he balances coaching Little League baseball and attending school and community events. His sons are active in local sports. Residents of Froid emphasized that Roberto and his family embodied the American Dream. He worked very hard and cared deeply about his customers. Once, he even worked through the cold and the night to fix a school bus that had lost heat because he cared about the children on the bus and wanted to make sure they had a safe ride. Roberto was tracked down by ICE agents through the apprehension of his brothers early last year. Agents knocked on the door of his auto shop, which caught his suspicion because customers normally walked right in. He refused to let them in, but would later be arrested anyway. They accused him of being deported in 2009 and illegally re-entering the country. He was also identified as having gang affiliations, claims supported by no evidence. Froid residents were shocked to hear this, explaining that this tactic might have worked in a neighborhood where people did not know each other very well. Gang allegations have been widely weaponized to justify the detention of individuals who otherwise had no reason to be detained. After hearing the news of Roberto's arrest, many rallied on the streets of Froid and called the local delegation to have him released. Several residents drove seven hours to go to his preliminary hearing, where officials decided to keep Roberto detained until a detention hearing later that year. Thankfully, after more than 100 days in detention, Roberto was released and is now catching up on time with his family and returning to the work he left behind at his auto shop. The sources we used for this post come from the organizations Montana Free Press, Vox, KRTV, and Bozeman Daily Chronicle. If you would like to learn more about Roberto's story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7658094780253080845?is_from_webapp=1&sender_device=pc",
    link: "stories.html#roberto-orozco-ramirez-story"
  },
  {
    order: 119,
    slug: "andrea-pedro-franciscos-story",
    images: [
      "stories/andrea-pedro-franciscos-story/1.png",
      "stories/andrea-pedro-franciscos-story/2.png",
      "stories/andrea-pedro-franciscos-story/3.png",
      "stories/andrea-pedro-franciscos-story/4.png",
      "stories/andrea-pedro-franciscos-story/5.png",
      "stories/andrea-pedro-franciscos-story/6.png",
      "stories/andrea-pedro-franciscos-story/7.png",
      "stories/andrea-pedro-franciscos-story/8.png",
      "stories/andrea-pedro-franciscos-story/9.png",
      "stories/andrea-pedro-franciscos-story/10.png",
      "stories/andrea-pedro-franciscos-story/11.png",
      "stories/andrea-pedro-franciscos-story/12.png",
      "stories/andrea-pedro-franciscos-story/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "Minnesota",
    tags: ["Asylum", "Detention", "Family", "Family Separation", "Guatemalan", "ICE", "Legal Status", "Medical/Humanitarian", "Worker"],
    title: "Andrea Pedro Francisco's Story",
    summary: "Today, we are sharing the story of Andrea Pedro Francisco. Andrea was born in the Guatemalan Western Highlands, an area marked by civil war disputes. Andrea and her mother suffered from discrimination and poverty because they were Indigenous people. After a family member died because of a gang-related attack, 16-year-old Andrea was brought to the United States with her mother to apply for asylum. As their asylum case was being processed, they were allowed to enter the United States and settled in Minnesota. Andrea played bass and sang for her church, worked a cleaning job with her mother, and was a very loved member of her community. She had been suffering from severe stomach pain for the past few years, which caused her to stop working. She persistently did not want to get it checked out because she worried about the costs; however, the pain became too severe to ignore, and Andrea was scheduled to have surgery. Five days before her surgery, Andrea and her mother were driving with her siblings when they were pulled over by immigration officers. Both of them had no deportation order; however, Andrea was detained while her mother was allowed to leave because she was the only caretaker for Andrea's siblings, who were ages 1 and 5. Andrea was sent to El Paso's Camp East Montana. After only two days in detention, her pain became too much to bear, and she was rushed to a hospital. Physicians discovered an ovarian cyst the size of a lime. They discharged her, but warned that if she felt any pain, she needed medical care immediately. However, in the following months, Andrea was repeatedly denied surgery by ICE agents and was only treated with over-the-counter medication. She struggled to walk because of the pain, and when she asked for a bottom bunk bed because of her pain, she was denied. Medical professionals warned that if she did not have surgery, she might lose the ability to have kids and could have later health complications. Thankfully, after over four months, Andrea was finally released from detention. Andrea is now making up lost time with her family, reigniting her passion for instruments, and preparing herself for the surgery. The sources we used for this post come from the organizations The Texas Tribune, El Paso Matters, Scripps News, MPR News, CBS News, and GoFundMe. If you would like to learn more about Andrea's story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7658461540047260941?is_from_webapp=1&sender_device=pc",
    link: "stories.html#andrea-pedro-franciscos-story"
  },
  {
    order: 120,
    slug: "diana-acosta-verdes-story",
    images: [
      "stories/diana-acosta-verdes-story/1.png",
      "stories/diana-acosta-verdes-story/2.png",
      "stories/diana-acosta-verdes-story/3.png",
      "stories/diana-acosta-verdes-story/4.png",
      "stories/diana-acosta-verdes-story/5.png",
      "stories/diana-acosta-verdes-story/6.png",
      "stories/diana-acosta-verdes-story/7.png",
      "stories/diana-acosta-verdes-story/8.png",
      "stories/diana-acosta-verdes-story/9.png",
      "stories/diana-acosta-verdes-story/10.png",
      "stories/diana-acosta-verdes-story/11.png",
      "stories/diana-acosta-verdes-story/12.png",
      "stories/diana-acosta-verdes-story/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Asylum", "Child", "DACA", "Deportation", "Detention", "Family", "Family Separation", "Honduran", "ICE", "Legal Status", "Medical/Humanitarian", "U.S. Citizen"],
    title: "Diana Acosta Verde's Story",
    summary: "Today, we are sharing the story of Diana Acosta Verde and her family. She reentered the United States from Honduras after being deported the previous spring. She was six months pregnant and wanted to give her child a chance at U.S. citizenship. Diana had previously been deported to Honduras after living in the United States as an asylum seeker for over four years. Her partner came to the U.S. when he was only 10, gaining DACA protection. Diana's brother had passed away due to violence in Honduras, and she knew that it would not be the best place for their child to be raised. Diana's partner would be deported after driving a relative's car, where substances were found in the glovebox. He was deported in March, along with Diana, even though her charges had been dropped. Once they returned to the U.S., they were caught by Border Patrol agents and sent to a detention facility in Texas for over three months. Diana would be moved after three months to a hospital to give birth. Less than 24 hours after giving birth, Diana received the order to return to the detention facility. Officials called Padilla, Diana's partner's mother, to pick up her grandson and take custody of him. Padilla had no idea how she would be able to afford to travel to Texas in the short amount of time they gave her; however, she managed. The baby, Gael, was born prematurely and had to be kept in the nursery and monitored. At this point, Diana was in solitary confinement, sitting in a freezing cell with no idea whether her son was okay or not. After Padilla picked up Gael, she took him to a rented house until she could pick up his birth certificate. When Padilla took him to the detention facility to meet his mother and father, they would only allow him to see them for less than 30 minutes behind glass walls. After nearly two months, Gael's mother and father were finally able to embrace and hold him. The source we used for this post comes from The New York Times. If you would like to learn more about Diana's story, we encourage you to check out the story published by this organization.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7658834166699527438?is_from_webapp=1&sender_device=pc",
    link: "stories.html#diana-acosta-verdes-story"
  },
  {
    order: 121,
    slug: "elizabeth-zuna-caisaguanos-story",
    images: [
      "stories/elizabeth-zuna-caisaguanos-story/1.png",
      "stories/elizabeth-zuna-caisaguanos-story/2.png",
      "stories/elizabeth-zuna-caisaguanos-story/3.png",
      "stories/elizabeth-zuna-caisaguanos-story/4.png",
      "stories/elizabeth-zuna-caisaguanos-story/5.png",
      "stories/elizabeth-zuna-caisaguanos-story/6.png",
      "stories/elizabeth-zuna-caisaguanos-story/7.png",
      "stories/elizabeth-zuna-caisaguanos-story/8.png",
      "stories/elizabeth-zuna-caisaguanos-story/9.png",
      "stories/elizabeth-zuna-caisaguanos-story/10.png",
      "stories/elizabeth-zuna-caisaguanos-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "Minnesota",
    tags: ["Asylum", "Child", "Detention", "Ecuadorian", "Family", "Family Separation", "ICE", "Legal Status", "Student"],
    title: "Elizabeth Zuna Caisaguano’s Story",
    summary: "Today, we are sharing the story of Elizabeth Zuna Caisaguano. Elizabeth was originally raised in a rural part of Ecuador. As Indigenous people, Elizabeth and her family suffered prejudice and discrimination. They routinely faced violence and had fewer opportunities than others. After Elizabeth’s father was attacked, the family decided to move to the United States and apply for asylum. They followed all the proper protocols, never once missing an immigration hearing. In 2025, however, an immigration judge denied their asylum request and issued a removal order. The family appealed the decision, and their case has been pending ever since. Elizabeth was a 10-year-old student in Columbia Heights who had been part of the community since kindergarten. She is an avid reader and an aspiring doctor. During the first week back from winter break, Elizabeth and her mother, Rosa, headed toward the school bus stop when federal agents surrounded them. Elizabeth called her father and explained, to his supposed relief, that the ICE agents were only going to drop her off at school. This was not the case, however, and Elizabeth and Rosa were detained and transferred to the Dilley Detention Facility in Texas. They were flown 1,200 miles to the detention facility, and during the flight, Elizabeth thought she was being sent to Ecuador, feeling nervous and crushed that her dreams in the U.S. were over. When her father called later to confirm Elizabeth’s arrival, he got no response. He panicked and drove to the school. Several staff members waited outside the school, hoping that the agents were just late, but the car never arrived. After countless phone calls, Elizabeth’s father finally found out that Elizabeth and Rosa were in Texas. Over the next several weeks, Elizabeth was in detention along with six other children from the same school district. Thankfully, exactly one month later, Elizabeth and Rosa were released and flown back to Minnesota. The family is now looking to make up the lost time together. The sources we used for this post come from the organizations The Guardian, MPR News, and CNN. If you would like to learn more about Elizabeth’s story, we encourage you to check out the stories published by these organizations. A GoFundMe has been set up for Elizabeth’s family in their ongoing battle with their asylum case. If you would like to donate and support them, please feel free to donate here: https://gofund.me/fb73273e6",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7659203749247749390?is_from_webapp=1&sender_device=pc",
    link: "stories.html#elizabeth-zuna-caisaguanos-story"
  },
  {
    order: 122,
    slug: "armande-namegnis-story",
    images: [
      "stories/armande-namegnis-story/1.png",
      "stories/armande-namegnis-story/2.png",
      "stories/armande-namegnis-story/3.png",
      "stories/armande-namegnis-story/4.png",
      "stories/armande-namegnis-story/5.png",
      "stories/armande-namegnis-story/6.png",
      "stories/armande-namegnis-story/7.png",
      "stories/armande-namegnis-story/8.png",
      "stories/armande-namegnis-story/9.png",
      "stories/armande-namegnis-story/10.png",
      "stories/armande-namegnis-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "Missouri",
    tags: ["Asylum", "Detention", "ICE", "Legal Status", "Worker", "Wrongful Detention"],
    title: "Armande Namegni's Story",
    summary: "Today, we are sharing the story of Armande Namegni. Armande fled from Cameroon in 2019 due to the ongoing civil war and political turmoil in the country. She explained that if she had stayed any longer, she might have put her life at risk. After leaving Cameroon, she made it to Brazil before traveling to the U.S.-Mexico border and claiming asylum. She filed for work authorization and settled down in St. Louis in 2022 to live with her aunt. Her asylum case has been ongoing, and she has been checking in with immigration officials annually. Armande worked as a software engineer, personal trainer at her gym, and sang in her church's choir. On an early January morning, Armande woke up, went on a run, then headed to the gym before going to her yearly immigration check-in. She would never expect that the routine 40-minute check-in would transform into a 3-hour one. When scheduling her next appointment, officials detained her because of a shoplifting charge from sometime last year. Armande never shoplifted, and the charge was misattributed to her and was supposed to be cleared from her record. Her lawyers were working on clearing it from her record when she went to the appointment. Armande had her cell phone taken away and was detained. She recalls having to sleep on the floor for a couple of days because of the lack of a bunk. She was in a very crowded cell. Currently, her lawyers are working on an appeal, but it's likely it will be 4 or 5 months before she is finally back in court, and until then, she will likely remain in detention. Despite all this, Armande has been extremely positive. She has aided fellow detainees in exercise classes and Bible studies, and even wakes up early to bring them food. The sources we used for this post come from the organizations STLPR, STL Magazine, and GoFundMe. If you would like to learn more about Armande's story, we encourage you to check out the stories published by these organizations. A GoFundMe has been set up for Armande to pay for her legal fees and cover her care funds. If you would like to donate, please feel free to do so at this link: https://gofund.me/31ac5105d",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7659574703962524958?is_from_webapp=1&sender_device=pc",
    link: "stories.html#armande-namegnis-story"
  },
  {
    order: 123,
    slug: "ruben-torres-maldonado-story",
    images: [
      "stories/ruben-torres-maldonado-story/1.png",
      "stories/ruben-torres-maldonado-story/2.png",
      "stories/ruben-torres-maldonado-story/3.png",
      "stories/ruben-torres-maldonado-story/4.png",
      "stories/ruben-torres-maldonado-story/5.png",
      "stories/ruben-torres-maldonado-story/6.png",
      "stories/ruben-torres-maldonado-story/7.png",
      "stories/ruben-torres-maldonado-story/8.png",
      "stories/ruben-torres-maldonado-story/9.png",
      "stories/ruben-torres-maldonado-story/10.png",
      "stories/ruben-torres-maldonado-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "Illinois",
    tags: ["Detention", "Family", "Family Separation", "ICE", "Legal Status", "Medical/Humanitarian", "Mexican", "Parent", "Worker"],
    title: "Ruben Torres-Maldonado's Story",
    summary: "Today, we are sharing the story of Ruben Torres-Maldonado, a father who was detained while his teenage daughter was battling cancer. Ruben came to the United States from Mexico with his partner in 2003. After settling in Chicago, they raised two children, both of whom are U.S. citizens. Ruben works as a painter and home renovator, waking early and working hard to support his family and help provide for his daughter's medical care. His daughter, Ofelia, was diagnosed with a rare form of cancer in 2024 and underwent chemotherapy and radiation therapy. While Ofelia was in the hospital, Ruben also served as the primary caretaker for her brother. Immigration authorities detained Ruben at a Home Depot after he purchased supplies for work. He was placed in immigration detention, with his record citing a reckless-driving charge and other minor traffic violations. Ruben's detention prompted widespread backlash, and Ofelia helped call attention to his case and the need for her father to be with her while she battled cancer. Ruben was later released and became eligible to apply for cancellation of removal based on the hardship his deportation would cause his two children. The judge cited Ruben's strong family ties, valid driver's license, and insurance among the reasons for his release. Ofelia played a major role in sharing her father's story and advocating for his return. She later passed away. Many people shared their condolences and remembered the inspiration and resolve she showed. The sources used for this post include ABC News, The Guardian, AP News, CBS News, Block Club Chicago, NBC News, and GoFundMe. If you would like to learn more about Ruben's story, we encourage you to read the reporting published by these organizations. A GoFundMe has been set up to support Ruben's family and help cover his legal fees. If you would like to donate, please feel free to do so here: https://gofund.me/ce18ba0aa",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7660316010196749581?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#ruben-torres-maldonado-story"
  },
  {
    order: 124,
    slug: "lorenzo-salgado-araujos-story",
    images: [
      "stories/lorenzo-salgado-araujos-story/1.png",
      "stories/lorenzo-salgado-araujos-story/2.png",
      "stories/lorenzo-salgado-araujos-story/3.png",
      "stories/lorenzo-salgado-araujos-story/4.png",
      "stories/lorenzo-salgado-araujos-story/5.png",
      "stories/lorenzo-salgado-araujos-story/6.png",
      "stories/lorenzo-salgado-araujos-story/7.png",
      "stories/lorenzo-salgado-araujos-story/8.png",
      "stories/lorenzo-salgado-araujos-story/9.png",
      "stories/lorenzo-salgado-araujos-story/10.png",
      "stories/lorenzo-salgado-araujos-story/11.png",
      "stories/lorenzo-salgado-araujos-story/12.png",
      "stories/lorenzo-salgado-araujos-story/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    tags: ["Detention", "Family", "ICE", "Legal Status", "Medical/Humanitarian", "Mexican", "Parent", "Worker"],
    title: "Lorenzo Salgado Araujo’s Story",
    summary: "Today, we are sharing the story of Lorenzo Salgado Araujo. Lorenzo came to the United States from Mexico. The 52-year-old was a husband and the father of three children. He raised his children on the idea of valuing education and its power to bring them a good future. Lorenzo ran his own construction business and was known for his work ethic, fairness, and willingness to help. When individuals knocked on his door asking for a job, he never hesitated to provide one. For the past 35 years, Lorenzo’s day started the same way: waking up at 5 AM, kissing his wife goodbye, and loading up his van to pick up his construction crew in Houston. On Tuesday, at 7 AM, Lorenzo had just finished picking up his crew when he began being followed by ICE agents in unmarked vehicles. Lorenzo feared that the individuals were trying to steal the tools that allowed him to pay for his three children’s college tuitions, so he didn’t stop. He attempted to evade the vehicles, ramming into one while trying to flee. An ICE agent would fire at him in “self-defense,” injuring him. Lorenzo had been in the process of getting his work permit and was also very close to obtaining his legal status. He had no criminal record. He would be rushed to the hospital and sadly pass away there. Lorenzo’s son and wife were notified that he was in danger, quickly trying to find him at his job site and only finding his empty van. They would see a video and recognize Lorenzo’s painful cries as he lay on the street. His son believed that if his father had known that they were ICE agents or immigration enforcement, he would have definitely complied. The sources we used for this post come from the organizations PBS, CNN, AP, KHOU, Newsweek, Houston Public Media, The Washington Post, and GoFundMe. If you would like to learn more about Lorenzo’s story, we encourage you to check out the stories published by these organizations. A GoFundMe has been set up for Lorenzo’s family during this difficult time. If you would like to support the family, please feel free to donate here: https://gofund.me/32bc50604",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7660619204688645390?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#lorenzo-salgado-araujos-story"
  },
  {
    order: 125,
    slug: "erika-ramos-story",
    images: [
      "stories/erika-ramos-story/1.png",
      "stories/erika-ramos-story/2.png",
      "stories/erika-ramos-story/3.png",
      "stories/erika-ramos-story/4.png",
      "stories/erika-ramos-story/5.png",
      "stories/erika-ramos-story/6.png",
      "stories/erika-ramos-story/7.png",
      "stories/erika-ramos-story/8.png",
      "stories/erika-ramos-story/9.png",
      "stories/erika-ramos-story/10.png",
      "stories/erika-ramos-story/11.png",
      "stories/erika-ramos-story/12.png",
      "stories/erika-ramos-story/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "Minnesota",
    tags: ["Asylum", "Child", "Deportation", "Detention", "Ecuadorian", "Family", "Family Separation", "ICE", "Legal Status", "Parent"],
    title: "Erika Ramos' Story",
    summary: "Today, we are sharing the story of Erika Ramos. Erika is the mother of Liam Conejo Ramos, the 5-year-old who was detained along with his father. She recounts her experience when immigration agents detained her husband and son as they were returning from preschool. Erika, who was 3 months pregnant, witnessed the scene through the window of their home. Her husband repeatedly warned her not to step outside, despite her legal status, because agents might detain her as well. She begged the officers to release Liam, but he was detained alongside his father. When immigration agents saw Erika inside the home, they tried to use Liam as bait to lure her outside and detain her. Her husband warned her not to leave the house because she still had another child to take care of and was pregnant. After not being able to take custody of Liam and watching both her son and husband be detained, Erika underwent severe stress and had to go to the ER. She called them frequently while they were in detention, comforting Liam when he asked why he was detained in such an “ugly” place. She and her husband have no criminal record and were in the process of applying for asylum after entering through the CBP One app. Thankfully, Liam and his father were released soon after; however, the family experienced permanent scarring from the experience. Two months after being released, Liam regularly sees a psychologist and has exhibited signs of psychological trauma. Their asylum case was denied, and the federal government is now working to appeal the decision that allowed them to be released. The family is at risk of being detained again and possibly deported to Ecuador. Their lawyers are working to appeal the denial of the asylum case, but the process could take years. The sources we used for this post come from the organizations CNN, CBS, The Guardian, NBC, MPR, NPR, and GoFundMe. If you would like to learn more about Erika and her family’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7661452603867270414?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#erika-ramos-story"
  },
  {
    order: 126,
    slug: "babblejit-kaur-story",
    images: [
      "stories/babblejit-kaur-story/1.png",
      "stories/babblejit-kaur-story/2.png",
      "stories/babblejit-kaur-story/3.png",
      "stories/babblejit-kaur-story/4.png",
      "stories/babblejit-kaur-story/5.png",
      "stories/babblejit-kaur-story/6.png",
      "stories/babblejit-kaur-story/7.png",
      "stories/babblejit-kaur-story/8.png",
      "stories/babblejit-kaur-story/9.png",
      "stories/babblejit-kaur-story/10.png",
      "stories/babblejit-kaur-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "California",
    tags: ["Asylum", "Detention", "Family", "ICE", "Legal Status", "Medical/Humanitarian", "Parent", "Worker"],
    title: "Babblejit Kaur's Story",
    summary: "Today, we are sharing the story of Babblejit Kaur. Kaur applied for asylum in the United States after fleeing religious persecution in India. After she married in 1984, violence against Sikhs began to grow. After more than a decade of watching friends and family pass away because of these targeted events, her family decided to flee India. Kaur, along with her husband and three children, settled down in Long Beach. They came with little money, no connections, and a long asylum process ahead of them; however, the family quickly found their niche operating an Indian restaurant that served traditional cuisine. Operating the restaurant, along with working a part-time job as a cashier, allowed Kaur to support her children in going to college. The past year had been very hard for the family: Kaur had recently been laid off from her cashier job, and her husband had been diagnosed with cancer. Just days after Kaur and her husband's 41st anniversary, Kaur was detained during a standard fingerprinting appointment and sent to the Adelanto Processing Center. Kaur had an approved green card, but the government had not yet issued it to her. Her absence severely impacted the family, who had to manage paying the bills while also handling cancer treatment. Before, the family had relied on Kaur for almost everything: she took the lead in getting the family settled in the U.S., learning English, getting a driver's license, and even helping set up gaming consoles. In the detention facility, the lights were always on, and the cries from new detainees made it almost impossible to sleep. Even in such a dark time, Kaur was able to build a community, meeting women from all walks of life. Thankfully, after several weeks of being detained, Kaur was finally released. Now, she is finding her footing again and making up the lost time with her family. The sources we used for this post come from the organizations Los Angeles Times, NDTV, Long Beach Watchdog, and Times of India. If you would like to learn more about Kaur's story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7661796141935185165?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#babblejit-kaur-story"
  },
  {
    order: 127,
    slug: "joel-camas-story",
    images: [
      "stories/joel-camas-story/1.png",
      "stories/joel-camas-story/2.png",
      "stories/joel-camas-story/3.png",
      "stories/joel-camas-story/4.png",
      "stories/joel-camas-story/5.png",
      "stories/joel-camas-story/6.png",
      "stories/joel-camas-story/7.png",
      "stories/joel-camas-story/8.png",
      "stories/joel-camas-story/9.png",
      "stories/joel-camas-story/10.png",
      "stories/joel-camas-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "New York",
    tags: ["Asylum", "Child", "Detention", "Ecuadorian", "Family", "Family Separation", "ICE", "Legal Status", "Student"],
    title: "Joel Camas' Story",
    summary: "Today, we are sharing the story of Joel Camas. Joel came to the United States with his mother in 2022, fleeing Ecuador because of gang violence. He and his mom applied for asylum, but because they didn’t have lawyers, they would lose their cases. They would be ordered to be removed in 2024; however, Joel would be later connected with legal services and granted a special protection that protected him from removal called the special immigrant juvenile status (SIJS). He was granted this because of his father's absence and the poor living conditions he would face if removed to Ecuador. Joel’s mother voluntarily self-deported to avoid arrest, believing that Joel would be protected because of his status. He had been living with his family in the Bronx for over 4 weeks, regularly attending ICE check-ins, and is a junior at Gotham Collaborative High School. Individuals under SIJS could take years to acquire a green card due to the sheer number of individuals and the limited visas that can be issued each year. Also, before the new administration, individuals with SIJS status were protected against removal and had the ability to apply for a work permit. Joel attended his routine ICE check-in on Thursday, not thinking much of it, and even thinking that if he got it done early, he could make it to school on time. Joel never thought he would be detained and transferred to a migrant shelter. The courses he took in the shelter might not count for actual credits, and he feared he would fall behind in class. Thankfully, after several weeks of being detained, Joel was finally released; however, his future in the United States remains uncertain. The sources we used for this post come from the organizations The New York Times, CBS News, The NYC Reporter, Documented NY, ABC 7, and ABC News. If you would like to learn more about Joel’s story, we encourage you to check the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7662170402684243213?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#joel-camas-story"
  },
  {
    order: 128,
    slug: "wendy-hernandez-reyes-story",
    images: [
      "stories/wendy-hernandez-reyes-story/Wendy Hernandez Reyes' Story.png",
      "stories/wendy-hernandez-reyes-story/2.png",
      "stories/wendy-hernandez-reyes-story/3.png",
      "stories/wendy-hernandez-reyes-story/4.png",
      "stories/wendy-hernandez-reyes-story/5.png",
      "stories/wendy-hernandez-reyes-story/6.png",
      "stories/wendy-hernandez-reyes-story/7.png",
      "stories/wendy-hernandez-reyes-story/8.png",
      "stories/wendy-hernandez-reyes-story/9.png",
      "stories/wendy-hernandez-reyes-story/10.png",
      "stories/wendy-hernandez-reyes-story/11.png",
      "stories/wendy-hernandez-reyes-story/12.png",
      "stories/wendy-hernandez-reyes-story/13.png",
      "stories/wendy-hernandez-reyes-story/14.png"
    ],
    featured: false,
    isNewest: false,
    state: "Florida",
    tags: ["Deportation", "Detention", "Family", "Family Separation", "Honduran", "ICE", "Parent", "Worker"],
    title: "Wendy Hernandez Reyes' Story",
    summary: "Today, we are sharing the story of Wendy Hernandez Reyes. Reyes came to the United States from Honduras through a port of entry and was released while awaiting an asylum hearing; however, after moving to Florida amid circumstances involving her now ex-boyfriend, she missed her court date. She settled down in Pensacola, working a construction job to support her 3-year-old son, Orlin. In January 2026, Reyes and her sister left their children with a babysitter in Pensacola and carpooled with others to a construction site in Alabama. Police stopped the car for speeding, which both Reyes and her sister deny, and arrested both of them. Reyes and her sister informed the officers of their children’s situation, and ICE officers allowed them to arrange for someone to take care of their children while they were in custody. Reyes’ sister had left her boyfriend because he was abusive; however, with no other individuals able to make arrangements, the two were forced to hand their children off to the estranged man. ICE picked up Reyes from the sheriff’s office and ordered her removal. Reyes begged the officers to allow Orlin to be deported with her, but her requests were repeatedly denied. Orlin passed away shortly after Reyes had been deported because of abuse allegedly inflicted by Reyes’ sister’s ex-boyfriend, who pleaded not guilty. ICE said that the agency does not support separating families and provides parents the opportunity to have their children deported with them; however, Reyes denies being provided this opportunity. Initial plans to have the funeral in Honduras fell through, so supporters organized to have Reyes temporarily return to the U.S. for her son’s funeral. These plans succeeded. When Reyes returned to the U.S., officers handcuffed her and fixed a GPS tracker onto her ankle. While Reyes mourned, her sister tried comforting her, understanding the pain she felt from being separated from her children, as her own children were put into state foster care after she was taken into custody. The sources we used for this post come from the organizations The Washington Post, The Guardian, Pensacola News Journal, and GoFundMe. If you would like to learn more about Reyes’ story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7662561451013377294?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#wendy-hernandez-reyes-story"
  },
  {
    order: 129,
    slug: "joan-sebastian-guerrero-story",
    images: [
      "stories/joan-sebastian-guerrero-story/1.png",
      "stories/joan-sebastian-guerrero-story/2.png",
      "stories/joan-sebastian-guerrero-story/3.png",
      "stories/joan-sebastian-guerrero-story/4.png",
      "stories/joan-sebastian-guerrero-story/5.png",
      "stories/joan-sebastian-guerrero-story/6.png",
      "stories/joan-sebastian-guerrero-story/7.png",
      "stories/joan-sebastian-guerrero-story/8.png",
      "stories/joan-sebastian-guerrero-story/9.png",
      "stories/joan-sebastian-guerrero-story/10.png",
      "stories/joan-sebastian-guerrero-story/11.png",
      "stories/joan-sebastian-guerrero-story/12.png"
    ],
    featured: false,
    isNewest: false,
    state: "Maine",
    tags: ["Colombian", "Detention", "Family", "Family Separation", "ICE", "Legal Status", "Parent", "Worker"],
    title: "Joan Sebastian Guerrero's Story",
    summary: "Today, we are sharing the story of Joan Sebastian Guerrero. Joan came to the United States from a city in north-central Colombia, seeking a better life for his family. Joan and his family settled in the Atlantic Coast city of Biddeford, Maine. He quickly became an integral part of the community. He worked as a nighttime cleaner at a veterinary clinic and as a food delivery driver, helping to support his wife and 3-year-old daughter. Neighbors in his community said that the 26-year-old was a hardworking and good man who had strong family ties. Joan had authorization to work in the U.S. and had obtained a Social Security number. This Monday, at 7 a.m., Joan left his apartment to go to work when he was stopped by ICE agents. Footage shows the agents pulling his body out of the car and handcuffing him, with the windshield riddled with holes. The agents had no body cameras. The ICE agents had been monitoring the neighborhood for a resident who had a removal order and pulled over Joan, who was not the target. Joan's wife and daughter were at the scene and witnessed his passing. Witnesses described watching his wife and daughter break down crying, knowing they would never see their father and husband again. A GoFundMe has been set up for Joan's family. The money is intended to pay for the family's legal fees, Joan's funeral costs, and his repatriation. If you would like to donate, please feel free to do so at this link: https://gofund.me/d4c40efa7. The sources we used for this post come from CNN, The New York Times, USA Today, and GoFundMe. As this is a developing story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7662909498318671118?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#joan-sebastian-guerrero-story"
  },
  {
    order: 130,
    slug: "lorena-pineda-story",
    images: [
      "stories/lorena-pineda-story/1.png",
      "stories/lorena-pineda-story/2.png",
      "stories/lorena-pineda-story/3.png",
      "stories/lorena-pineda-story/4.png",
      "stories/lorena-pineda-story/5.png",
      "stories/lorena-pineda-story/6.png",
      "stories/lorena-pineda-story/7.png",
      "stories/lorena-pineda-story/8.png",
      "stories/lorena-pineda-story/9.png"
    ],
    featured: false,
    isNewest: false,
    state: "California",
    tags: ["Deportation", "Detention", "Family", "Family Separation", "ICE", "Medical/Humanitarian", "Parent", "Salvadoran", "Worker"],
    title: "Lorena Pineda's Story",
    summary: "Today, we are sharing the story of Lorena Pineda. Pineda came to the United States from El Salvador with her husband and two young children. They were fleeing gang members who had targeted and beaten her husband. Pineda's family found someone to help them reach the United States; however, they owed the person a large debt and even had to put up her mother's land as collateral. The family struggled to make ends meet until Pineda's husband found steady construction work. Pineda also worked at a food stand, selling breakfast and pupusas to laborers near a Home Depot. Her 7-year-old daughter was learning English at school, and her 3-year-old son was making friends. One morning in Los Angeles, Pineda was approached by agents in an unmarked vehicle. The agents stepped out and arrested her. Pineda could not run because she was five months pregnant, and she begged them to be gentle. She was transferred to the South Louisiana ICE Processing Center, where she said she received inadequate prenatal care. She had to travel nearly three hours each way to a medical center for appointments and to ensure that her baby was healthy. The first month of detention was especially difficult: Pineda had no contact with her family and was 1,500 miles away from her daughter and son. After more than three months in detention, Pineda signed papers to self-deport to El Salvador. Her family skipped a rent payment to buy her a ticket back to Los Angeles, where immigration officials later extended her departure date because her pregnancy was nearly full term. Her family is now trying to pay for four tickets to El Salvador so that Pineda does not have to return alone. They are also trying to determine how they will support themselves after returning. The sources we used for this post come from the Los Angeles Times and Mormon Women for Ethical Government. If you would like to learn more about Pineda's story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7663654041389387022?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#lorena-pineda-story"
  },
  {
    order: 131,
    slug: "fei-zheng-story",
    images: [
      "stories/fei-zheng-story/1.png",
      "stories/fei-zheng-story/2.png",
      "stories/fei-zheng-story/3.png",
      "stories/fei-zheng-story/4.png",
      "stories/fei-zheng-story/5.png",
      "stories/fei-zheng-story/6.png",
      "stories/fei-zheng-story/7.png",
      "stories/fei-zheng-story/8.png",
      "stories/fei-zheng-story/9.png",
      "stories/fei-zheng-story/10.png",
      "stories/fei-zheng-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "New York",
    tags: ["Asylum", "Child", "Deportation", "Detention", "Family", "Family Separation", "ICE", "Parent"],
    title: "Fei Zheng’s Story",
    summary: "Today, we are sharing the story of Fei Zheng and his 6-year-old son, Yuanxin. The two came to the United States after crossing the U.S.-Mexico border. They fled China out of fear of being hurt and applied for asylum. Unfortunately, immigration judges ruled that their fear was not credible enough to grant asylum, and the two received removal orders. Zheng and Yuanxin settled in New York City, with Yuanxin attending a school in Queens. The day before Thanksgiving, the two were detained during a routine immigration check-in. After they were detained, they were separated, with Zheng going to an adult detention facility and Yuanxin being taken to a facility whose location was undisclosed. Zheng didn’t know where they had taken Yuanxin. Before this, both of them had already been detained twice; however, they were never separated and were held together in a Texas family detention facility. Their separation sparked massive outrage in their community, and many people organized rallies. Their case even drew the attention of then-Mayor-elect Zohran Mamdani, who released a statement criticizing ICE. After Zheng was separated from Yuanxin, although he had no criminal record, he gave up fighting his case and complied with the deportation order in hopes of reuniting with his son. After weeks of being separated, Zheng and Yuanxin were deported to China. The sources we used for this post come from The New York Times, NBC News, CBS News, the ACLU, and the South China Morning Post. If you would like to learn more about Zheng’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7664023325907094797?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#fei-zheng-story"
  },
  {
    order: 132,
    slug: "enciso-family-story",
    images: [
      "stories/enciso-family-story/The Enciso’s Family Story with ICE.png",
      "stories/enciso-family-story/2.png",
      "stories/enciso-family-story/3.png",
      "stories/enciso-family-story/4.png",
      "stories/enciso-family-story/5.png",
      "stories/enciso-family-story/6.png",
      "stories/enciso-family-story/7.png",
      "stories/enciso-family-story/8.png",
      "stories/enciso-family-story/9.png",
      "stories/enciso-family-story/10.png",
      "stories/enciso-family-story/11.png",
      "stories/enciso-family-story/12.png",
      "stories/enciso-family-story/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "Illinois",
    location: "Cicero, Illinois",
    map: { state: "Illinois" },
    tags: ["DACA", "Detention", "Dreamer", "Family", "Family Separation", "ICE", "Mexican", "Parent", "Student", "U.S. Citizen"],
    title: "The Enciso Family’s Story with ICE",
    summary: "Today, we are sharing the Enciso family’s story of encountering ICE. Constantina and Moises are a couple who came to the United States from Mexico 18 years ago. They settled in Cicero, Illinois, and had four children: Moises Jr. and Yurithsi, who are 22 and 19, respectively, and have pending DACA applications; and two younger children, aged 10 and 12, who are U.S. citizens. Sunday had been a very special day for the family because they were celebrating their son’s 10th birthday. They had arranged to go to a barbecue later that evening. That morning, Moises Jr. and his parents went to get breakfast while Yurithsi and the younger siblings were getting a birthday treat at a shop. The car carrying Moises Jr. and his parents was surrounded by unmarked vehicles after they made a wrong turn, and they were detained. The officers repeatedly questioned them about their legal status, overwhelming the parents and leading Moises Jr. to call Yurithsi to let her know that they were being detained and questioned. Yurithsi and the younger siblings immediately went to the location where her brother and parents were being detained. Once they arrived, they too were questioned repeatedly, and Yurithsi had to remain calm, comforting her younger siblings and emphasizing to the agents that they would not talk until their lawyer arrived. Moises Jr. was released after officers learned that he had a pending DACA application; however, his parents were detained and separated into two detention facilities outside the state, one in Kentucky and the other in Michigan. Now, the two older siblings are left to take care of the family while their parents are in custody. The younger siblings often cry, and it feels as though a part of their home is missing. Moises Jr. has to juggle finishing university, taking on chores, and caring for his younger siblings. He recalls his parents encouraging him at his lowest moments in university and now feels sorrow when he realizes that they might not be able to see him graduate. Moises Jr. explained that if the ICE agents had met his parents under different circumstances, they would realize that they were two kind people who cared deeply about their family, not criminals worthy of being detained. The parents had no criminal record. A GoFundMe has been set up for the Enciso family during this time of hardship. If you would like to donate, please feel free to do so at this link: https://gofund.me/f3b4bcb53. The sources we used for this post come from CNN, the Chicago Tribune, and GoFundMe. If you would like to learn more about their story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7664392674874510605?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#enciso-family-story"
  },
  {
    order: 133,
    slug: "idris-demirtas-story",
    images: [
      "stories/idris-demirtas-story/1.png",
      "stories/idris-demirtas-story/2.png",
      "stories/idris-demirtas-story/3.png",
      "stories/idris-demirtas-story/4.png",
      "stories/idris-demirtas-story/5.png",
      "stories/idris-demirtas-story/6.png",
      "stories/idris-demirtas-story/7.png",
      "stories/idris-demirtas-story/8.png",
      "stories/idris-demirtas-story/9.png",
      "stories/idris-demirtas-story/10.png",
      "stories/idris-demirtas-story/11.png"
    ],
    featured: false,
    isNewest: false,
    state: "California",
    location: "San Diego, California",
    map: { state: "California" },
    tags: ["Asylum", "Detention", "Family", "ICE", "Legal Status", "Worker", "Wrongful Detention"],
    title: "Idris Demirtas' Story",
    summary: "Today, we are sharing the story of Idris Demirtas. Demirtas fled Turkey and applied for asylum at the Texas border in the United States. He shared that he was fleeing Turkey because of religious persecution. After entering the U.S., Idris married a U.S. citizen and worked as a pedicab driver to support the couple. He had no criminal record, had a valid work permit, and was pursuing a green card application. He was detained after attending a regular immigration check-in, after being told to attend the visit because ICE allegedly had a warrant for his arrest. ICE explained that Idris had entered the U.S. \u201cunlawfully\u201d and had been issued an expedited removal order after entering the country. Demirtas\u2019 asylum case had been dismissed without an interview, something that had not occurred until the new administration took over. The 25-year-old was detained in the Otay Mesa Detention Center. He was incentivized to self-deport but refused, and said he had to sleep on the floor of the detention facility for over two weeks while staying in one room with more than 10 detainees. After every visit with his wife, he was searched from top to bottom, leaving him feeling humiliated. Thankfully, after 48 days in detention, Demirtas was released after an immigration judge granted bond and a federal judge found his continued detention unjustified. Now he is finally free with his wife; however, he still fears possibly being detained again and is working to get his green card approved. The sources we used for this post come from CalMatters and ABC 10News San Diego. If you would like to learn more about Demirtas\u2019 story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7664750597547068685?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#idris-demirtas-story"
  },
  {
    order: 134,
    slug: "jackie-merlos-story",
    images: [
      "stories/jackie-merlos-story/1.png",
      "stories/jackie-merlos-story/2.png",
      "stories/jackie-merlos-story/3.png",
      "stories/jackie-merlos-story/4.png",
      "stories/jackie-merlos-story/5.png",
      "stories/jackie-merlos-story/6.png",
      "stories/jackie-merlos-story/7.png",
      "stories/jackie-merlos-story/8.png",
      "stories/jackie-merlos-story/9.png",
      "stories/jackie-merlos-story/10.png",
      "stories/jackie-merlos-story/11.png",
      "stories/jackie-merlos-story/12.png"
    ],
    featured: false,
    isNewest: false,
    state: "Oregon",
    location: "Portland, Oregon",
    map: { state: "Oregon" },
    tags: ["Deportation", "Detention", "Family", "Family Separation", "Honduran", "ICE", "Legal Status", "Parent", "Worker", "Wrongful Detention"],
    title: "Jackie Merlos' Story",
    summary: "Today, we are sharing the story of Jackie Merlos. She came to the United States from Honduras in 2003, fleeing violence and hoping that her children would be raised in a country where they would not have to be scared all the time. She gained temporary legal status while waiting for her pending U-visa application. She and her husband, Carlos, started a construction business in Portland and had four children in the United States. Jackie, along with her children and mother, was detained while at a park near the Canadian border in Washington state. Jackie was accused of smuggling people into the U.S., which she says was false. She was brought to a windowless detention facility along with her children and mother. She had no criminal record. They were at the park because she was visiting her sister, who was a Canadian resident. Her elementary school-aged children were scared and hungry in the facility and were questioned twice while Jackie was not present. Jackie had fled Honduras so that her children would not need to live in fear; instead, the experience did not turn out as she expected. Her children were released after 14 days; however, Jackie and her mother remained in detention, and Jackie spent more than 100 days in federal custody in total. Her husband had already been deported to Honduras, and after winning her case, Jackie’s mother also went to Honduras. The construction business Jackie and her husband built has been in limbo ever since they were detained. Although Jackie was released, she lives in constant fear of being detained once again, and her children also share the same fear. The sources we used for this post come from PBS, OPB, and KGW. If you would like to learn more about Jackie’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7665155508998802702?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#jackie-merlos-story"
  },
  {
    order: 135,
    slug: "adrian-ramirez-story",
    images: [
      "stories/adrian-ramirez-story/1.png",
      "stories/adrian-ramirez-story/2.png",
      "stories/adrian-ramirez-story/3.png",
      "stories/adrian-ramirez-story/4.png",
      "stories/adrian-ramirez-story/5.png",
      "stories/adrian-ramirez-story/6.png",
      "stories/adrian-ramirez-story/7.png",
      "stories/adrian-ramirez-story/8.png",
      "stories/adrian-ramirez-story/9.png",
      "stories/adrian-ramirez-story/10.png",
      "stories/adrian-ramirez-story/11.png",
      "stories/adrian-ramirez-story/12.png",
      "stories/adrian-ramirez-story/13.png"
    ],
    featured: false,
    isNewest: false,
    state: "New York",
    location: "Syracuse, New York",
    map: { state: "New York" },
    tags: ["Detention", "Family", "Family Separation", "ICE", "Legal Status", "Parent", "Worker"],
    title: "Adrian Ramirez's Story",
    summary: "Today, we are sharing the story of Adrian Ramirez. Adrian came to the United States from the Dominican Republic with his father in 2021. He received special immigrant juvenile status (SIJS), which allowed him to apply for a green card in the future. He settled in Syracuse, New York, and worked in construction and home maintenance with his father-in-law. Adrian’s life centered around his faith: he read the Gospel during Sunday Mass and planned to be baptized at Easter. Adrian and his partner, Talia, also welcomed a son in June. Adrian planned to continue working while waiting to receive his green card. He and his father-in-law were driving to a construction job when ICE agents pulled them over and surrounded their vehicle. The agents detained them without showing a warrant. His father-in-law was released on bond; however, Adrian remained in detention. Initially, he was held at the Batavia detention facility, where his community members and family could still visit him. He was later transferred nearly 1,500 miles away to a detention facility in Louisiana, cutting off contact with his friends and family. Adrian’s time in detention was horrible: he lost around 15 pounds, contracted a flu-like illness, had little privacy, and was completely isolated from his family. Adrian admitted that, at one point, he felt so discouraged that he considered self-deporting; however, after conversations with his fellow detainees, he knew he should trust his friends and family and continue fighting. Back in Syracuse, his church organized fundraisers, wrote letters, and searched for legal options to bring Adrian home. Thankfully, Adrian was released on bond after about two months in detention. ICE delayed his release, and when he finally walked out, he was wearing the same clothes he had been detained in, had no identification, had no battery left on his phone, and had no transportation. Thankfully, a Louisiana grandmother named Sharron, whom Adrian had only met once, helped him get clean clothes and transportation to an airport so he could return home. At the airport, he finally embraced his son, fearing that the infant might have forgotten him after two months. He was also able to return to his church and celebrate the baptism he had been preparing for. The sources we used for this post come from Syracuse Immigration in America and WAER. If you would like to learn more about Adrian’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7665549822014917902?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#adrian-ramirez-story"
  },
  {
    order: 136,
    slug: "deisy-rivera-ortega-story",
    images: [
      "stories/deisy-rivera-ortega-story/1.png",
      "stories/deisy-rivera-ortega-story/2.png",
      "stories/deisy-rivera-ortega-story/3.png",
      "stories/deisy-rivera-ortega-story/4.png",
      "stories/deisy-rivera-ortega-story/5.png",
      "stories/deisy-rivera-ortega-story/6.png",
      "stories/deisy-rivera-ortega-story/7.png",
      "stories/deisy-rivera-ortega-story/8.png",
      "stories/deisy-rivera-ortega-story/9.png",
      "stories/deisy-rivera-ortega-story/10.png"
    ],
    featured: false,
    isNewest: false,
    state: "Texas",
    location: "El Paso, Texas",
    map: { state: "Texas" },
    tags: ["Deportation", "Detention", "Family", "ICE", "Legal Status", "Military Family", "Salvadoran", "Worker"],
    title: "Deisy Rivera Ortega's Story",
    summary: "Today, we are sharing the story of Deisy Rivera Ortega. Deisy came to the United States from El Salvador in 2016 and was granted withholding of removal in 2019. This legal protection prevented her from being removed to El Salvador because she might be harmed if she returned, though it did not prevent removal to a third country. Deisy was also granted a work permit and married Jose Serrano, a U.S. Army soldier who had served for nearly 28 years, in 2022. She worked at two hotels inside Fort Bliss, helping support her family. Serrano had also helped her apply for Parole in Place, which would allow her to apply for legal status if her application were accepted. Deisy was summoned to the El Paso immigration office for an interview related to this application, a program available to certain family members of U.S. military personnel. Nobody expected Deisy to be detained because of an alleged 2019 deportation order, which they believed her legal protection should have blocked. Serrano had also informed immigration officers that he was in the military a week before her detention. Because her legal protection barred her removal to El Salvador, Deisy faced possible deportation to a third country, including Mexico, where she has no ties. Her detention worsened Serrano’s mental health challenges, and he said he often slept only two hours each night because of it. Serrano explained that he loved the Army and did not blame it; however, he believed ICE had gone too far and that change was needed. After approximately one month in federal immigration custody, Deisy was released with a GPS monitoring device, mandatory home visits, and ICE office check-ins. The sources we used for this post come from CBS News, The Guardian, AP News, ABC News, El País, and BBC News. If you would like to learn more about Deisy’s story, we encourage you to check out the stories published by these organizations.",
    tiktokLink: "https://www.tiktok.com/@projectsecondvoice/photo/7666261842334862606?is_from_webapp=1&sender_device=pc&web_id=7441831609211422238",
    link: "stories.html#deisy-rivera-ortega-story"
  }
];

function sortStoriesByOrder(left, right) {
  if (left.order !== right.order) {
    return left.order - right.order;
  }

  return left.slug.localeCompare(right.slug);
}

function selectHomepagePreviewStories(featuredStories) {
  const featuredStoriesBySlug = new Map(featuredStories.map((story) => [story.slug, story]));
  const previewStories = featuredStories
    .filter((story) => !story.isNewest)
    .slice(0, HOMEPAGE_FEATURED_GRID_COUNT);

  const priorityStories = HOMEPAGE_PRIORITY_FEATURED_SLUGS
    .map((slug) => featuredStoriesBySlug.get(slug))
    .filter(Boolean);

  priorityStories.forEach((priorityStory) => {
    if (previewStories.some((story) => story.slug === priorityStory.slug)) {
      return;
    }

    let replaceIndex = -1;

    for (let index = previewStories.length - 1; index >= 0; index -= 1) {
      if (!HOMEPAGE_PRIORITY_FEATURED_SET.has(previewStories[index].slug)) {
        replaceIndex = index;
        break;
      }
    }

    if (replaceIndex >= 0) {
      previewStories[replaceIndex] = priorityStory;
    }
  });

  return previewStories;
}

const orderedStories = [...stories].sort(sortStoriesByOrder);
const storiesBySlug = new Map(orderedStories.map((story) => [story.slug, story]));
const featuredStories = orderedStories.filter((story) => story.featured);
const archiveStories = [
  ...featuredStories,
  ...orderedStories.filter((story) => !story.featured)
];
const homepagePreviewStories = selectHomepagePreviewStories(featuredStories);
const newestStory = orderedStories.find((story) => story.isNewest) || orderedStories[0];
const storySearchIndex = new WeakMap();

function getStoryBySlug(slug) {
  return storiesBySlug.get(slug);
}

function getFeaturedStories() {
  return featuredStories;
}

function getArchiveStories() {
  return archiveStories;
}

function getHomepagePreviewStories() {
  return homepagePreviewStories;
}

function getExternalLinkAttributes(url) {
  if (!/^https?:\/\//.test(url)) {
    return "";
  }

  return ` target="_blank" rel="${EXTERNAL_LINK_REL}"`;
}

function prefersReducedMotion() {
  return window.matchMedia?.(REDUCED_MOTION_QUERY).matches;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function normalizeStoryState(story) {
  const state = typeof story?.state === "string" ? story.state.trim() : "";

  return state || "Unknown";
}

function getStoryTags(story) {
  if (!Array.isArray(story?.tags)) {
    return [];
  }

  return story.tags.filter((tag) => typeof tag === "string" && tag.trim());
}

function getStoriesByState(storyList = getArchiveStories()) {
  return storyList.reduce((stateMap, story) => {
    const state = normalizeStoryState(story);

    if (state === "Unknown") {
      return stateMap;
    }

    if (!stateMap.has(state)) {
      stateMap.set(state, []);
    }

    stateMap.get(state).push(story);
    return stateMap;
  }, new Map());
}

function getStoryStateOptions(storyList = getArchiveStories()) {
  return [...new Set(storyList.map(normalizeStoryState))]
    .filter((state) => state !== "Unknown")
    .sort((firstState, secondState) => firstState.localeCompare(secondState));
}

function getStoryTagOptions(storyList = getArchiveStories()) {
  const tagSet = storyList.reduce((tags, story) => {
    getStoryTags(story).forEach((tag) => tags.add(tag));
    return tags;
  }, new Set());

  return [...tagSet].sort((firstTag, secondTag) => firstTag.localeCompare(secondTag));
}

function getStorySearchText(story) {
  if (!story) {
    return "";
  }

  if (storySearchIndex.has(story)) {
    return storySearchIndex.get(story);
  }

  const searchText = [
    story?.title,
    story?.summary,
    story?.location,
    normalizeStoryState(story),
    ...getStoryTags(story)
  ].join(" ").toLowerCase();

  storySearchIndex.set(story, searchText);
  return searchText;
}

function validateStoriesData() {
  const seenSlugs = new Set();
  const seenOrders = new Set();
  const seenTikTokLinks = new Set();
  let newestCount = 0;
  const requiredFields = ["title", "slug", "summary", "tiktokLink", "images", "order", "featured", "isNewest", "state", "tags"];

  stories.forEach((story) => {
    requiredFields.forEach((field) => {
      if (!(field in story)) {
        console.warn(`Missing story field "${field}" for ${story.title || story.slug || "unknown story"}.`);
      }
    });

    if (typeof story.featured !== "boolean") {
      console.warn(`Expected featured to be boolean for ${story.title}.`);
    }

    if (typeof story.isNewest !== "boolean") {
      console.warn(`Expected isNewest to be boolean for ${story.title}.`);
    }

    if (typeof story.state !== "string") {
      console.warn(`Expected state to be a string for ${story.title}.`);
    }

    if (!Array.isArray(story.tags)) {
      console.warn(`Expected tags array for ${story.title}.`);
    } else {
      story.tags.forEach((tag) => {
        if (!APPROVED_STORY_TAG_SET.has(tag)) {
          console.warn(`Unexpected story tag "${tag}" for ${story.title}.`);
        }
      });
    }

    if (!Array.isArray(story.images)) {
      console.warn(`Expected images array for ${story.title}.`);
      return;
    }

    if (story.link !== `stories.html#${story.slug}`) {
      console.warn(`Expected story link for ${story.title} to point to stories.html#${story.slug}.`);
    }

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

    const seenStoryImages = new Set();

    story.images.forEach((imagePath) => {
      if (!STORY_IMAGE_PATH_PATTERN.test(imagePath)) {
        console.warn(`Unexpected image path format for ${story.title}: ${imagePath}`);
      }

      if (seenStoryImages.has(imagePath)) {
        console.warn(`Duplicate image path detected for ${story.title}: ${imagePath}`);
      }
      seenStoryImages.add(imagePath);
    });
  });

  if (newestCount !== 1) {
    console.warn(`Expected exactly one newest story, found ${newestCount}.`);
  }

  const newestStory = orderedStories.find((story) => story.isNewest);

  if (newestStory?.slug !== "liam-conejo-ramos-story") {
    console.warn("Expected Liam Conejo Ramos’s story to remain the newest lead story.");
  }

  const rayStory = storiesBySlug.get("ray-anderson-story");

  if (!rayStory?.featured) {
    console.warn("Expected Ray Anderson's story to remain featured.");
  }
}

function getStoryImages(story) {
  if (!Array.isArray(story?.images)) {
    return [];
  }

  return story.images.filter((imagePath) => STORY_IMAGE_PATH_PATTERN.test(imagePath));
}

function getStoryPreviewText(text = "", maxLength = 180) {
  if (text.length <= maxLength) {
    return text;
  }

  const clippedText = text.slice(0, maxLength).replace(/\s+\S*$/, "").trim();

  return `${clippedText || text.slice(0, maxLength).trim()}...`;
}

function getStoryHref(story, isArchive = false) {
  if (isArchive) {
    return `#${story?.slug || ""}`;
  }

  return story?.link || "#";
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

  if (isArchive) {
    card.id = story.slug;
  }

  const storyHref = getStoryHref(story, isArchive);
  const storyImages = getStoryImages(story);
  const primaryImage = storyImages[0];
  const badgeMarkup = getStoryBadgeMarkup(story, "story-card-badge");
  const storyTitle = escapeHtml(story.title);
  const linkLabel = isArchive ? `Read ${storyTitle} in the story focus panel` : `Read ${storyTitle}`;
  const imageMarkup = primaryImage
    ? `<img class="story-card-image" src="${primaryImage}" alt="${storyTitle}" loading="lazy" decoding="async">`
    : `<div class="story-card-image story-card-image-placeholder" aria-hidden="true"></div>`;

  card.innerHTML = `
    ${imageMarkup}
    ${badgeMarkup}
    <h3>${storyTitle}</h3>
    <p>${escapeHtml(getStoryPreviewText(story.summary))}</p>
    <a class="button button-secondary" href="${storyHref}" data-story-slug="${story.slug}" aria-label="${linkLabel}"${getExternalLinkAttributes(storyHref)}>Read Story</a>
  `;
  return card;
}

function renderNewestStory() {
  const newestContainer = document.querySelector("[data-newest-story]");

  if (!newestContainer) {
    return;
  }

  const newestHref = getStoryHref(newestStory);
  const primaryImage = getStoryImages(newestStory)[0];
  const newestTitle = escapeHtml(newestStory.title);
  const imageMarkup = primaryImage
    ? `<img class="newest-story-image" src="${primaryImage}" alt="${newestTitle}" loading="eager" decoding="async" fetchpriority="high">`
    : `<div class="newest-story-image newest-story-image-placeholder" aria-hidden="true"></div>`;

  newestContainer.innerHTML = `
    <article class="newest-story-card">
      <div class="newest-story-copy">
        <span class="story-focus-pill">Newest story</span>
        <h3>${newestTitle}</h3>
        <p>${escapeHtml(getStoryPreviewText(newestStory.summary, 260))}</p>
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

  const activeSlug = window.location.hash.slice(1);
  const story = getStoryBySlug(activeSlug) || newestStory;
  const storyBadgeMarkup = getStoryBadgeMarkup(story, "story-focus-pill");
  const storyImages = getStoryImages(story);
  const storyTitle = escapeHtml(story.title);
  const galleryMarkup = storyImages.length
    ? `
      <div class="story-gallery">
        ${storyImages.map((image, index) => `
          <a class="story-gallery-item" href="${image}" target="_blank" rel="${EXTERNAL_LINK_REL}" aria-label="Open ${storyTitle} image ${index + 1}">
            <img src="${image}" alt="${storyTitle} slide ${index + 1}" loading="lazy" decoding="async">
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
      <h2>${storyTitle}</h2>
      <p>${escapeHtml(story.summary)}</p>
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

  focus.classList.add("is-visible");
  focus.setAttribute("tabindex", "-1");
  focus.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
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

function initStoryImageFallbacks() {
  document.addEventListener("error", (event) => {
    const image = event.target;

    if (!(image instanceof HTMLImageElement)) {
      return;
    }

    const galleryItem = image.closest(".story-gallery-item");

    if (galleryItem) {
      galleryItem.remove();
      return;
    }

    if (image.dataset.fallbackApplied) {
      return;
    }

    image.dataset.fallbackApplied = "true";
    image.hidden = true;
    image.insertAdjacentHTML(
      "afterend",
      `<div class="${image.className} story-card-image-placeholder" aria-hidden="true"></div>`
    );
  }, true);
}

function renderStoryArchive(storyList) {
  const archive = document.querySelector("[data-story-archive]");

  if (!archive) {
    return;
  }

  archive.innerHTML = "";
  const archiveFragment = document.createDocumentFragment();
  const shouldRevealImmediately = archive.dataset.archiveInteractive === "true";

  storyList.forEach((story) => {
    const card = createStoryCard(story, true);

    if (shouldRevealImmediately) {
      card.classList.add("is-visible");
    }

    archiveFragment.appendChild(card);
  });
  archive.appendChild(archiveFragment);
}

function renderStories() {
  const preview = document.querySelector("[data-stories-preview]");
  const featuredStories = getHomepagePreviewStories();

  renderStoryArchive(getArchiveStories());

  if (preview) {
    preview.innerHTML = "";
    const previewFragment = document.createDocumentFragment();
    featuredStories.forEach((story) => previewFragment.appendChild(createStoryCard(story)));
    preview.appendChild(previewFragment);
  }
}

function populateSelect(select, options, defaultLabel) {
  if (!select) {
    return;
  }

  select.innerHTML = `<option value="">${escapeHtml(defaultLabel)}</option>`;

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });
}

function initStoryArchiveControls() {
  const controls = document.querySelector("[data-story-tools]");
  const archive = document.querySelector("[data-story-archive]");

  if (!controls || !archive) {
    return;
  }

  const searchInput = controls.querySelector("[data-story-search]");
  const stateSelect = controls.querySelector("[data-state-filter]");
  const tagSelect = controls.querySelector("[data-tag-filter]");
  const resetButton = controls.querySelector("[data-reset-filters]");
  const countElement = document.querySelector("[data-archive-result-count]");
  const noResults = document.querySelector("[data-archive-no-results]");
  const archiveStories = getArchiveStories();
  const filters = {
    state: "",
    tag: "",
    query: ""
  };
  let lastResultSignature = "";
  let searchInputTimer = 0;

  function applyFilters() {
    const filteredStories = archiveStories.filter((story) => {
      const matchesState = !filters.state || normalizeStoryState(story) === filters.state;
      const matchesTag = !filters.tag || getStoryTags(story).includes(filters.tag);
      const matchesSearch = !filters.query || getStorySearchText(story).includes(filters.query);

      return matchesState && matchesTag && matchesSearch;
    });
    const resultSignature = filteredStories.map((story) => story.slug).join("|");

    if (resultSignature !== lastResultSignature) {
      renderStoryArchive(filteredStories);
      lastResultSignature = resultSignature;
    }

    if (countElement) {
      const storyLabel = filteredStories.length === 1 ? "story" : "stories";
      countElement.textContent = `${filteredStories.length} ${storyLabel}`;
    }

    if (noResults) {
      noResults.hidden = filteredStories.length > 0;
      noResults.textContent = filters.query
        ? "No stories match your search yet."
        : "No stories match these filters yet.";
    }
  }

  populateSelect(stateSelect, getStoryStateOptions(archiveStories), "All states");
  populateSelect(tagSelect, getStoryTagOptions(archiveStories), "All tags");
  archive.dataset.archiveInteractive = "true";

  controls.addEventListener("submit", (event) => {
    event.preventDefault();
    window.clearTimeout(searchInputTimer);
    filters.query = searchInput?.value.trim().toLowerCase() || "";
    applyFilters();
  });

  searchInput?.addEventListener("input", () => {
    window.clearTimeout(searchInputTimer);
    searchInputTimer = window.setTimeout(() => {
      filters.query = searchInput.value.trim().toLowerCase();
      applyFilters();
    }, 120);
  });

  stateSelect?.addEventListener("change", () => {
    filters.state = stateSelect.value;
    applyFilters();
  });

  tagSelect?.addEventListener("change", () => {
    filters.tag = tagSelect.value;
    applyFilters();
  });

  resetButton?.addEventListener("click", () => {
    window.clearTimeout(searchInputTimer);
    filters.state = "";
    filters.tag = "";
    filters.query = "";

    if (searchInput) {
      searchInput.value = "";
    }

    if (stateSelect) {
      stateSelect.value = "";
    }

    if (tagSelect) {
      tagSelect.value = "";
    }

    applyFilters();
    searchInput?.focus();
  });

  applyFilters();
}

function createStoryMapCard(story) {
  const storyImages = getStoryImages(story);
  const primaryImage = storyImages[0];
  const storyHref = story?.link || getStoryHref(story);
  const storyTitle = escapeHtml(story?.title || "Story");
  const imageMarkup = primaryImage
    ? `<img class="story-map-card-image" src="${primaryImage}" alt="${storyTitle}" loading="lazy" decoding="async">`
    : `<div class="story-map-card-image story-card-image-placeholder" aria-hidden="true"></div>`;

  return `
    <article class="story-map-card">
      ${imageMarkup}
      <div class="story-map-card-copy">
        <h3><a href="${storyHref}">${storyTitle}</a></h3>
        <p>${escapeHtml(getStoryPreviewText(story?.summary || "", 150))}</p>
        <a class="text-link" href="${storyHref}">Read Story</a>
      </div>
    </article>
  `;
}

function renderStoryMapResults(container, state, storiesForState = []) {
  if (!container) {
    return;
  }

  if (!state) {
    container.innerHTML = `
      <p class="story-map-empty">Select a highlighted state to explore stories from that area.</p>
    `;
    return;
  }

  const storyLabel = storiesForState.length === 1 ? "story" : "stories";

  container.innerHTML = `
    <div class="story-map-panel-heading">
      <p class="eyebrow">${escapeHtml(state)}</p>
      <h3>${storiesForState.length} ${storyLabel}</h3>
    </div>
    <div class="story-map-results-list">
      ${storiesForState.map(createStoryMapCard).join("")}
    </div>
  `;
}

function initStoryMap() {
  const mapRoot = document.querySelector("[data-story-map]");

  if (!mapRoot) {
    return;
  }

  const svgHost = mapRoot.querySelector("[data-story-map-svg]");
  const select = mapRoot.querySelector("[data-story-map-select]");
  const results = mapRoot.querySelector("[data-story-map-results]");
  const storiesByState = getStoriesByState(getArchiveStories());
  const activeStates = [...storiesByState.keys()]
    .filter((state) => STORY_MAP_STATE_NAMES.has(state))
    .sort((firstState, secondState) => firstState.localeCompare(secondState));
  let selectedState = "";

  function syncSelection(nextState = "") {
    selectedState = nextState;

    svgHost?.querySelectorAll("[data-map-state]").forEach((stateElement) => {
      stateElement.classList.toggle("is-selected", stateElement.dataset.mapState === selectedState);
      stateElement.setAttribute("aria-pressed", String(stateElement.dataset.mapState === selectedState));
    });

    if (select) {
      select.value = selectedState;
    }

    renderStoryMapResults(results, selectedState, storiesByState.get(selectedState) || []);
  }

  populateSelect(select, activeStates, "Select a state");

  if (svgHost) {
    const tileSize = 54;
    const tileGap = 8;
    const svgWidth = 14 * (tileSize + tileGap) - tileGap;
    const svgHeight = 7 * (tileSize + tileGap) - tileGap;
    const tilesMarkup = STORY_MAP_STATE_TILES.map((state) => {
      const stateStories = storiesByState.get(state.name) || [];
      const hasStories = stateStories.length > 0;
      const x = state.x * (tileSize + tileGap);
      const y = state.y * (tileSize + tileGap);
      const classes = ["story-map-state", hasStories ? "has-stories" : "is-neutral"].join(" ");
      const roleAttributes = hasStories
        ? `role="button" tabindex="0" aria-pressed="false"`
        : `role="img"`;
      const label = hasStories
        ? `${state.name}: ${stateStories.length} ${stateStories.length === 1 ? "story" : "stories"}`
        : `${state.name}: no stories yet`;

      return `
        <g class="${classes}" data-map-state="${state.name}" data-has-stories="${hasStories}" ${roleAttributes} aria-label="${label}">
          <rect x="${x}" y="${y}" width="${tileSize}" height="${tileSize}" rx="10"></rect>
          <text x="${x + tileSize / 2}" y="${y + 27}" text-anchor="middle">${state.code}</text>
          ${hasStories ? `<text class="story-map-count" x="${x + tileSize / 2}" y="${y + 42}" text-anchor="middle">${stateStories.length}</text>` : ""}
        </g>
      `;
    }).join("");

    svgHost.innerHTML = `
      <svg class="story-map-svg" viewBox="0 0 ${svgWidth} ${svgHeight}" role="img" aria-label="U.S. story map by state">
        ${tilesMarkup}
      </svg>
    `;

    svgHost.addEventListener("click", (event) => {
      const stateElement = event.target.closest("[data-map-state]");

      if (!stateElement || stateElement.dataset.hasStories !== "true") {
        return;
      }

      syncSelection(stateElement.dataset.mapState);
    });

    svgHost.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const stateElement = event.target.closest("[data-map-state]");

      if (!stateElement || stateElement.dataset.hasStories !== "true") {
        return;
      }

      event.preventDefault();
      syncSelection(stateElement.dataset.mapState);
    });
  }

  select?.addEventListener("change", () => syncSelection(select.value));
  syncSelection("");
}

function animateValue(element) {
  const target = Number.parseFloat(element.dataset.target || "0");
  const suffix = element.dataset.suffix || "";

  if (prefersReducedMotion()) {
    element.textContent = `${element.dataset.target}${suffix}`;
    return;
  }

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

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
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

  function setMenuOpen(isOpen) {
    menu.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);

    if (window.innerWidth <= 760) {
      menu.setAttribute("aria-hidden", String(!isOpen));
    } else {
      menu.removeAttribute("aria-hidden");
    }
  }

  setMenuOpen(false);

  toggle.addEventListener("click", () => {
    setMenuOpen(!menu.classList.contains("is-open"));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!menu.classList.contains("is-open")) {
      return;
    }

    if (event.target.closest(".navbar")) {
      return;
    }

    setMenuOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMenuOpen(false);
      menu.removeAttribute("aria-hidden");
    }
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
    window.addEventListener("load", () => {
      requestAnimationFrame(scrollStoryFocusIntoView);
    }, { once: true });
  }

  if (archive) {
    archive.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-story-slug]");

      if (!link || !link.getAttribute("href")?.startsWith("#")) {
        return;
      }

      event.preventDefault();

      const nextHash = link.getAttribute("href");

      if (window.location.hash === nextHash) {
        renderStoryFocus();
        scrollStoryFocusIntoView();
        return;
      }

      window.location.hash = nextHash;
    });
  }

  window.addEventListener("hashchange", () => {
    renderStoryFocus();
    scrollStoryFocusIntoView();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  validateStoriesData();
  initStoryImageFallbacks();
  initSubmissionLinks();
  initContactLinks();
  renderNewestStory();
  renderStories();
  initStoryArchiveControls();
  initStoryMap();
  initStats();
  initReveal();
  initNav();
  initStoryFocus();
});
