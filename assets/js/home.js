(() => {
  "use strict";
  const jobs = [
    {
      featured: true,
      date: "Jan 2026 — Present",
      company: "Eli Lilly and Company · LRL – GRA",
      title: "Associate Director, Global Regulatory Affairs (GRA) Strategy & Operations",
      summary: "Partner with senior leadership to shape and execute the operating agenda for a global regulatory organization of more than 734 colleagues, connecting strategy with the people, processes, data, and technology needed to deliver.",
      metrics: [{value:"734+",label:"global colleagues"}],
      bullets: [
        "Drive the operating agenda across business planning, workforce and financial management, operating model development, performance metrics, and strategic initiatives.",
        "Build operational intelligence through dashboards for headcount, time-entry compliance, and travel and training activity; automate recurring reporting and communications.",
        "Advance the GRA operating model, playbook, and rhythm of business, establishing scalable processes for procurement, sourcing, record retention, capacity planning, financial tracking, and performance metrics.",
        "Lead strategic planning and resource-management work with Finance and cross-functional partners, including analytical tools for sourcing and acquisition-related resource decisions, a three-pillar onboarding modernization strategy, and a competency gap analysis.",
        "Deliver enterprise initiatives from strategy through implementation, including the transition of due diligence to GRA, full ownership of the Linkage Hub, and standardized processes, training, and resource onboarding.",
        "Apply generative AI, vibe coding, low-code platforms, and workflow automation to rapidly prototype solutions that reduce manual effort and improve operational effectiveness."
      ]
    },
    {
      date: "Oct 2022 — Jan 2026",
      company: "Eli Lilly and Company · Medical Affairs",
      title: "Senior Manager, Global Field Medical Strategy & Operations (FMSO)",
      summary: "Led global field medical operations and enabled large-scale organizational growth, alignment, digital capability, and service-model improvements across more than 30 countries.",
      metrics: [
        {value:"700+",label:"global territories"},
        {value:"60%",label:"less manual effort"},
        {value:"3,000+",label:"alignment requests"}
      ],
      bullets: [
        "Led the largest Field Medical expansion in Lilly's history, creating approximately 150 Veeva CRM territories across 16 affiliates.",
        "Developed a centralized Veeva alignment request system to improve transparency, efficiency, and tracking across 3,000+ requests while streamlining change submissions.",
        "Optimized intake and support processes to manage 2,300+ requests, reducing manual effort by 60% and freeing capacity for higher-value work.",
        "Designed automated tools, dashboards, alerts, and standardized processes for Commercial and Medical role transitions, supporting 1,100+ employee onboarding, offboarding, and organizational changes.",
        "Scaled Virtual Medical Hub CRM capabilities, Veeva Approved Email across 12 affiliates, and integrated Veeva CRM and Workday hierarchies to support performance, coaching, and engagement capabilities.",
        "Developed executive dashboards and scorecards and built scalable training, onboarding, and communications capabilities across Global Field Medical."
      ]
    },
    {
      date: "Mar 2018 — Oct 2022",
      company: "Eli Lilly and Company · LRL – CDDA",
      title: "Manager, Project Management & Business Capabilities",
      summary: "Advised leaders and built global programs, platforms, and analytics to strengthen workforce strategy, employee experience, and organizational capability.",
      metrics: [
        {value:"1,700+",label:"global workforce supported"},
        {value:"20%+",label:"platform participation"},
        {value:"+67%",label:"town hall attendance"}
      ],
      bullets: [
        "Translated focus groups, surveys, and employee feedback into data-driven solutions addressing organizational needs.",
        "Designed and implemented a global resourcing platform connecting employees to business-critical projects and strategic initiatives; engaged more than 20% of the organization in its first year and earned a Lilly Innovator Award.",
        "Created global onboarding and professional development programs that accelerated time to productivity and remained in use more than seven years later.",
        "Turned Workday data into descriptive analytics and trend insights using Power BI to inform workforce and talent strategy.",
        "Increased global town hall attendance by 67% within two months and designed the first functional recognition program for a 1,500-person global organization."
      ]
    },
    {
      date: "May 2017 — Feb 2018",
      company: "Eli Lilly and Company · LRL – CDDA",
      title: "Senior Associate, Neuroscience Project Management",
      summary: "Supported neuroscience leadership with annual business planning, resource management, financial forecasting, and operational improvement.",
      bullets: [
        "Led annual business planning and updated Planisware models to improve workload efficiency and support strategic planning.",
        "Developed financial forecasting and resource supply-and-demand tools using SAP data to support portfolio decisions and resource allocation.",
        "Identified operational gaps and led automation initiatives that reduced manual work and improved process efficiency."
      ]
    },
    {
      date: "Oct 2012 — Apr 2017",
      company: "Eli Lilly and Company · LRL – MDU",
      title: "Associate / Senior Associate, Business Technical Lead",
      summary: "Combined financial analysis, vendor and contract management, and process design to improve leadership decision-making and sourcing efficiency.",
      metrics: [
        {value:"97%",label:"less sourcing time and effort"},
        {value:"$40M",label:"annual vendor contracts"},
        {value:"$260M",label:"annual financial reviews"}
      ],
      bullets: [
        "Led monthly financial reviews with senior leadership covering approximately $260 million annually, analyzing variances, trends, and risks to support decisions.",
        "Managed strategic and niche vendor relationships and contracts totaling approximately $40 million annually.",
        "Designed and implemented a sourcing system that streamlined procurement, purchasing, and vendor sourcing, reducing time and effort by 97%."
      ]
    }
  ];

  const list = document.getElementById("professional-experience");
  const escapeText = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  if (list) {
    list.innerHTML = jobs.map((job) => `
      <article class="experience-item${job.featured ? " experience-item-featured" : ""}">
        <div class="experience-date">${escapeText(job.date)}</div>
        <div class="experience-content">
          <p class="experience-company">${escapeText(job.company)}</p>
          <h3 class="experience-title">${escapeText(job.title)}</h3>
          <p class="experience-summary">${escapeText(job.summary)}</p>
          ${job.metrics ? `<div class="experience-metrics">${job.metrics.map((metric) => `<div class="experience-metric"><strong>${escapeText(metric.value)}</strong><span>${escapeText(metric.label)}</span></div>`).join("")}</div>` : ""}
          <ul class="experience-bullets">${job.bullets.map((bullet) => `<li>${escapeText(bullet)}</li>`).join("")}</ul>
        </div>
      </article>
    `).join("");
  }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
