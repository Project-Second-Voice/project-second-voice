document.documentElement.classList.add("js");

const STORY_SUBMISSION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfCem22HQOIS5jlcQKeNLmisV8W1oXVRd6TmXMJii0-VJpMfw/viewform?usp=dialog";
const CONTACT_EMAIL = "projectsecondvoice@gmail.com";

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
  }
];

stories.sort((left, right) => left.order - right.order);

function validateStoriesData() {
  const seenSlugs = new Set();
  const seenOrders = new Set();
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

  return "Archive entry";
}

function createStoryCard(story, isArchive = false) {
  const card = document.createElement("article");
  card.className = "story-card reveal";
  const storyHref = getStoryHref(story, isArchive);
  const isExternalLink = /^https?:\/\//.test(storyHref);
  const primaryImage = story.images[0];
  const imageMarkup = primaryImage
    ? `<img class="story-card-image" src="${primaryImage}" alt="${story.title}" loading="lazy" decoding="async">`
    : `<div class="story-card-image story-card-image-placeholder" aria-hidden="true"></div>`;

  card.innerHTML = `
    ${imageMarkup}
    <span class="story-card-badge">${getStoryBadge(story)}</span>
    <h3>${story.title}</h3>
    <p>${getStoryPreviewText(story.summary)}</p>
    <a class="button button-secondary" href="${storyHref}" data-story-slug="${story.slug}"${isExternalLink ? ' target="_blank" rel="noreferrer"' : ""}>View Story</a>
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
  const isExternalLink = /^https?:\/\//.test(newestHref);
  const primaryImage = newestStory.images[0];
  const imageMarkup = primaryImage
    ? `<img class="newest-story-image" src="${primaryImage}" alt="${newestStory.title}">`
    : `<div class="newest-story-image newest-story-image-placeholder" aria-hidden="true"></div>`;

  newestContainer.innerHTML = `
    <article class="newest-story-card">
      <div class="newest-story-copy">
        <span class="story-focus-pill">Newest story</span>
        <h3>${newestStory.title}</h3>
        <p>${getStoryPreviewText(newestStory.summary, 260)}</p>
        <a class="button button-primary" href="${newestHref}"${isExternalLink ? ' target="_blank" rel="noreferrer"' : ""}>Read Newest Story</a>
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
  const galleryMarkup = story.images.length
    ? `
      <div class="story-gallery">
        ${story.images.map((image, index) => `
          <a class="story-gallery-item" href="${image}" target="_blank" rel="noreferrer" aria-label="Open ${story.title} image ${index + 1}">
            <img src="${image}" alt="${story.title} slide ${index + 1}" loading="lazy" decoding="async">
          </a>
        `).join("")}
      </div>
    `
    : "";
  const tiktokMarkup = story.tiktokLink
    ? `<a class="button button-secondary" href="${story.tiktokLink}" target="_blank" rel="noreferrer">View on TikTok</a>`
    : "";
  const actionsMarkup = tiktokMarkup
    ? `<div class="story-focus-actions">${tiktokMarkup}</div>`
    : "";

  focus.innerHTML = `
    <div class="story-focus-copy">
      <span class="story-focus-pill">Featured archive entry</span>
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
    link.rel = "noreferrer";
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
  const featuredStories = stories.filter((story) => story.featured && !story.isNewest).slice(0, 5);

  if (archive) {
    archive.innerHTML = "";
    stories.forEach((story) => archive.appendChild(createStoryCard(story, true)));
  }

  if (preview) {
    preview.innerHTML = "";
    featuredStories.forEach((story) => preview.appendChild(createStoryCard(story)));
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
