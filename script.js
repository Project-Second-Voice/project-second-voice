document.documentElement.classList.add("js");

const STORY_SUBMISSION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfCem22HQOIS5jlcQKeNLmisV8W1oXVRd6TmXMJii0-VJpMfw/viewform?usp=dialog";
const CONTACT_EMAIL = "projectsecondvoice@gmail.com";
const EXTERNAL_LINK_REL = "noopener noreferrer";
const FEATURED_STORY_PREVIEW_COUNT = 5;

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
  const featuredStories = getFeaturedStories()
    .filter((story) => !story.isNewest)
    .slice(0, FEATURED_STORY_PREVIEW_COUNT);
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
