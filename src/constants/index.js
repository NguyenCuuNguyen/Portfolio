import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    nagarro,
    pace,
    nyu,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  //TOCHANGE
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Systems Engineer - Associate Consultant",
      company_name: "Nagarro",
      icon: nagarro,
      iconBg: "#383E56",
      date: "August 2021 - Present",
      points: [
        "Design, develop, and A/B test Merck Content Recommendation Engine with Push/pull email notification in AWS.",
        "Manage Vaccine Heatmap application to track global vaccine sentiment and gain Customer Intelligence insights using AWS, ML, CI-CD. Support its delivery and AWS migration that shows 24 GB real time global sentiment of 3 different vaccines, dashboard analytics, and Google trend widget, using SVM ML model and lexicon-based analytics.",
        "Develop back-end, collaborate with a global team and support the release of content tagging application on AWS.",
        "Develop and test Social Map and Pinterest Connector apps for Salesforce Datorama.",
        "Perform as business analyst and project manager for SAP Ariba - Decideware Integration to automate Purchase Order creation.",
      ],
    },
    {
      title: "Computer Systems Engineer Intern",
      company_name: "Nagarro",
      icon: nagarro,
      iconBg: "#997977",
      date: "May 2021 – August 2021",
      points: [
        "Develop a serverless Alexa application to record and persist users’ data with secure and scalable back-end framework, via AWS Lambda, CloudWatch, DynamoDB, S3, API Gateway, CloudFront and Cognito with Python, JS, HTML, and CSS, following Agile project management and Scrum methodology.",
        "Develop Back-end for Merck’s Content Tagging Automation Project (CTAP), create Jira SDLC documentation, CloudFormation automatic deployment templates, create automatic tests for API Gateway endpoints.",
      ],
    },
    {
      title: "Research Teaching Assistant",
      company_name: "Pace University - Seidenberg School of CS&IS",
      icon: pace,
      iconBg: "#383E56",
      date: "January 2021 – May 2021",
      points: [
        "Support teaching of Computer Organization CS232 course: Lead weekly 45-minute recitation class and help 25 students one-on-one with projects, labs, and homework for 10 hours/week",
        "In BetrFS Derange – Optimize File system Big Data research project, collaborate in a cross-campus team to optimize a transactional database using Derange messages to process big data in batches.",
        "Write Python scripts to scrape websites and automate, run benchmark tests on Hadoop and Fuse-HDFS on Google Cloud to compare the performance of State of the art and TokuFS with Derange message, uncovering which system is more efficient with respect to Disk I/O access.",
      ],
    },
    {
      title: "GIS Engineering Team Lead",
      company_name: "Pace University - Blue CoLab",
      icon: pace,
      iconBg: "#997977",
      date: "September 2020 – January 2021",
      points: [
        "Manage and develop an interactive map-making project using QGIS, to visualize real-time data of Choate pond’s water quality using Xylem censors.",
        "Read more about it here:${<a href='https://www.notion.so/Visualize-Water-Quality-Crisis-327fc5a151cf497780504054220f18ae?pvs=4'><a>}",
      ],
    },
    {
      title: "Child Psychology Research Assistant",
      company_name: "NYU School of Medicine",
      icon: nyu,
      iconBg: "#383E56",
      date: "January 2021 – May 2021",
      points: [
        "Prepared materials for assessments, video coding; transcribing; assistance with administrative tasks and other operational aspects of study.",
      ],
    },
    {
      title: "Developmental Psychology Research Assistant",
      company_name: "Pace University - SciDev Lab",
      icon: pace,
      iconBg: "#997977",
      date: "January 2018 - January 2019",
      points: [
        "FLP Playbraries - Code videos of adult/child interactions and researcher-led role-play using protocol to assess adults’ engagement with the installations of the Playbrary, a play space in the library, which influences attitudes and perceptions. Record and analyze post-implementation’s observational data, adult survey responses, and librarian interview data to track how long caregivers and children spent at the Playbrary",
        "Toy Survey - Examine the toy industry to elect major and diverse national retailers, namely Buy Buy Baby, Toys’ R Us, Good Housekeeping, Target, and Walmart. Collect information on toys marketed for infants 6 to 12 months from Buy Buy Baby and 12 to 24 months from Walmart (price, Universal Product Code (UPC), gender-based marketing, electronic versus traditional toy features, educational marketing, and the primary developmental domain addressed namely physical, cognitive, or social).",
        "Collaborate with Penn State team for research and present the poster at Psychology conferences",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  //TOCHANGE
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  