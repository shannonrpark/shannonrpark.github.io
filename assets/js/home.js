(function () {
  "use strict";

  var jobs = [
    {
      "Company": "Eli Lilly and Company",
      "Website": "http://www.lilly.com/",
      "StartDate": "10/1/2012",
      "EndDate": "2/1/2015",
      "JobTitle": "Associate - Business Technical Lead",
      "Descriptions": [
        {
          "Description": "In my role as an Associate - Business Technical Lead, I hit the ground running and was responsible for developing tools to analyze financial performance across multiple global functions ($260M annually). This resulted in the ability to review expenses, highlight trends, and identify key messages for senior management to drive business decisions."
        }
      ]
    },
    {
      "Company": "Eli Lilly and Company",
      "Website": "http://www.lilly.com/",
      "StartDate": "3/1/2015",
      "EndDate": "4/1/2017",
      "JobTitle": "Senior Associate - Business Technical Lead",
      "Descriptions": [
        {
          "Description": "I enjoy a good challenge and I have been promoted into every role I've ever had in my career. In my role as a Sr Associate - Business Technical Lead at Eli Lilly, I designed and implemented a sourcing system that reduced time and effort required by procurement, purchasing, and external sourcing by 97%. This not only improved Lilly's and vendors' satisfaction but also allowed me to conduct monthly meetings with the VP/CAO to review $260M yearly financial information."
        }
      ]
    },
    {
      "Company": "Eli Lilly and Company",
      "Website": "http://www.lilly.com/",
      "StartDate": "5/1/2017",
      "EndDate": "2/1/2018",
      "JobTitle": "Senior Associate - Project Management",
      "Descriptions": [
        {
          "Description": "As a Senior Associate - Project Management, I was responsible for supporting neuroscience senior leadership from an operational perspective. I developed tools to monitor and track financials and analyze resource supply and demand gaps to minimize impact to the portfolio. I was also responsible for updating and improving the efficiency and accuracy of the neuroscience business planning models. In this role, I also I managed a cross-functional team to develop a tool to control functional changes and document, track, and monitor the status and impact of changes."
        }
      ]
    },
    {
      "Company": "Eli Lilly and Company",
      "Website": "http://www.lilly.com/",
      "StartDate": "3/1/2018",
      "EndDate": null,
      "JobTitle": "Manager - Project Management and Business Capabilities",
      "Descriptions": [
        {
          "Description": "I work as a Project Management and Business Capabilities Manager for Eli Lilly, a global leader in the pharmaceutical industry. I have been with the company for about 10 years and have had the privilege of using my skills to drive innovation and change while also leading teams to develop and implement programs to ensure efficiency and the smooth operation of the activities in my functional area. I work to improve the overall employee experience and in 2021, developed a program to recognize and reward employees for demonstrating the company values through their everyday actions and contributions. I also designed a platform to facilitate connecting a global workforce to crowdsource new and innovative solutions for unmet needs with more than 20% participation in the first year and continued growth in subsequent years. Most recently, I collaborated with senior leadership to produce development programs and playbooks targeted to onboard, support, develop, and empower talent."
        }
      ]
    },
    {
      "Company": "Clint Pharmaceuticals",
      "Website": "http://www.clintpharmaceuticals.com/",
      "StartDate": "1/1/2010",
      "EndDate": "10/1/2012",
      "JobTitle": "Lead Buyer / Client Relations",
      "Descriptions": [
        {
          "Description": "In 2010, I started my career in the pharmaceutical industry as Client Relations Representative at Clint Pharmaceuticals. After just over a year, I was promoted to the companies lead buyer position and quickly discovered the power of automation. In under 6 months, I automated a manual purchasing system and reduced procurement time by 50%. I used the freed capacity to support the business in other areas including product complaints and returns. I am an analytical thinker so in this role, I also conducted data analysis to forecast future potential sales and present cost-benefit analyses to key stakeholders to drive critical purchasing decisions. I maintained close interactions with accounting, which allowed me to capitalize on early payment discounts, maximize rebates from vendors, and appropriately manage inventory to optimize taxes. I am also highly skilled in analyzing client purchase history in order to determine what additional/new products are needed and capitalizing on it."
        }
      ]
    }
  ];

  var convertDateFormat = function(dt) {
    if (dt){
      dt = new Date(dt);
      return new Date(dt.getFullYear(), dt.getUTCMonth(), dt.getDate()).toLocaleDateString('en-us', { year:"numeric", month:"long"});
    }
    
    return null;
  }

  jobs.sort(function(a, b){
    return new Date(b.StartDate) - new Date(a.StartDate);
  }).forEach(function(job){
    var container = $('#professional-experience');
    var parent = $('<div />').addClass('resume-item');
    var website = $('<a />').attr('href', job.Website).attr('target', '_blank').text(job.Company);
    var company = $('<h4 />').html(website);
    var duration = $('<h5 />').text(convertDateFormat(job.StartDate) + " - " + (convertDateFormat(job.EndDate) || 'Current'));
    var jobTitle = $('<em />').text(job.JobTitle);
    var title = $('<p />').html(jobTitle);

    parent.append(company).append(duration).append(title);

    (job.Descriptions || []).forEach(function(d){
      var description = $('<p />').html(d.Description);
      parent.append(description);
    });

    container.append(parent);
  });

})();