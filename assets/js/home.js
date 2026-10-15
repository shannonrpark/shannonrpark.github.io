(() => {
  "use strict";
  const jobs = [
    {
      date: "Jan 2026 — Present",
      company: "Eli Lilly and Company",
      title: "Associate Director, GRA Strategy & Operations",
      summary: "Support strategy and operations for a global regulatory affairs organization of approximately 715 colleagues, connecting business priorities with operating practices, leadership decision support, and continuous improvement.",
      bullets: [
        "Support the operating agenda across business planning, workforce and financial management, operating model, and performance metrics.",
        "Develop dashboards and practical automations that improve visibility, reduce manual work, and accelerate delivery.",
        "Advance global onboarding, talent connection, and employee experience initiatives in partnership with functional leaders."
      ]
    },
    {
      date: "Oct 2022 — Jan 2026",
      company: "Eli Lilly and Company",
      title: "Senior Manager, Global FMSO Medical Affairs",
      summary: "Supported global field medical operations across 30+ countries and 700+ territories, helping teams navigate complex organizational changes and recurring operational needs.",
      bullets: [
        "Supported approximately 150 Veeva CRM territories across 16 affiliates and coordinated more than 3,000 alignment requests.",
        "Helped deliver more than 2,300 operational requests while reducing manual effort by approximately 60%.",
        "Coordinated more than 1,100 transitions, strengthening consistency and execution across a global operating environment."
      ]
    },
    {
      date: "Mar 2018 — Oct 2022",
      company: "Eli Lilly and Company",
      title: "Manager, Project Management & Business Capabilities",
      summary: "Led cross-functional programs and tools designed to improve employee experience, connect a global workforce, and help teams operate more effectively.",
      bullets: [
        "Created a global recognition program and a platform for colleagues to share ideas and solve unmet needs, reaching more than 20% participation in its first year.",
        "Partnered with senior leaders on development programs, onboarding resources, and playbooks to support talent.",
        "Built practical approaches to process improvement, program delivery, and cross-functional alignment."
      ]
    },
    {
      date: "May 2017 — Feb 2018",
      company: "Eli Lilly and Company",
      title: "Senior Associate, Project Management",
      summary: "Supported neuroscience senior leadership with operational planning, resource visibility, and business planning improvements.",
      bullets: [
        "Developed tools to monitor financials and analyze resource supply and demand.",
        "Worked with a cross-functional team to create a tool for tracking functional changes and their impacts."
      ]
    },
    {
      date: "Mar 2015 — Apr 2017",
      company: "Eli Lilly and Company",
      title: "Senior Associate, Business Technical Lead",
      summary: "Designed and implemented a sourcing system that reduced time and effort for procurement, purchasing, and external sourcing by 97%.",
      bullets: [
        "Created clearer visibility into sourcing activity and supported recurring reviews of approximately $260 million in annual financial information."
      ]
    },
    {
      date: "Oct 2012 — Feb 2015",
      company: "Eli Lilly and Company",
      title: "Associate, Business Technical Lead",
      summary: "Developed tools to analyze financial performance across global functions and help leadership identify trends and make informed decisions.",
      bullets: [
        "Supported analysis of approximately $260 million in annual expenses, translating financial information into clear messages for leaders."
      ]
    },
    {
      date: "Jan 2010 — Oct 2012",
      company: "Clint Pharmaceuticals",
      title: "Lead Buyer / Client Relations",
      summary: "Moved from client relations into a lead buyer role, combining procurement, customer support, data analysis, and process improvement.",
      bullets: [
        "Automated a manual purchasing process in under six months, reducing procurement time by approximately 50%."
      ]
    }
  ];

  const list = document.getElementById("professional-experience");
  const escapeText = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  if (list) {
    list.innerHTML = jobs.map((job) => `
      <article class="experience-item">
        <div class="experience-date">${escapeText(job.date)}</div>
        <div>
          <p class="experience-company">${escapeText(job.company)}</p>
          <h3 class="experience-title">${escapeText(job.title)}</h3>
          <p class="experience-summary">${escapeText(job.summary)}</p>
          <ul class="experience-bullets">${job.bullets.map((bullet) => `<li>${escapeText(bullet)}</li>`).join("")}</ul>
        </div>
      </article>
    `).join("");
  }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
