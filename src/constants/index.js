import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    hadoop,
    aws,
    django,
    nodejs,
    openai,
    git,
    linux,
    java,
    nagarro,
    pace,
    nyu,
    ed,
    c,
    Alexa,
    pygame,
    memory
  } from "../assets";
  
  // TODO: Add CV to the app
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
    // {
    //   id: "cv",
    //   title: "CV",
    // },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Solutions Architect",
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
      name: "Linux",
      icon: linux,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "OpenAI",
      icon: openai,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "django",
      icon: django,
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
        "Design, develop, and A/B test a Pharmaceutical company's Content Recommendation Engine with Push/pull email notification in AWS.",
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
        "Develop Back-end for a Pharmaceutical company’s Content Tagging Automation Project (CTAP), create Jira SDLC documentation, CloudFormation automatic deployment templates, create automatic tests for API Gateway endpoints.",
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
        "BlueColab aims to advance the technology to detect water quality and create warning systems to inform local communities.",
        "The team works on operation of real-time sensors and instruments; management, visualization and sonification of data; UX, web, GIS and app development; system cybersecurity and more.",
        "I managed the GIS team and developed an interactive map using QGIS. Taking Xylem censors' input, the app visualizes real-time data of Choate pond’s water quality: conductivity, salinity, pH, turbidity, dissolved oxyen etc.",
        // "Read more about it here:${<a href='https://www.notion.so/Visualize-Water-Quality-Crisis-327fc5a151cf497780504054220f18ae?pvs=4'><a>}",
      ],
    },
    {
      title: "Child Psychology Research Assistant",
      company_name: "NYU School of Medicine",
      icon: nyu,
      iconBg: "#383E56",
      date: "January 2021 – May 2021",
      points: [
        "SMART Beginnings project promotes school readiness in low-income families, through a comprehensive approach of primary and secondary prevention strategies of positive parenting techniques",
        "Support interviews both in pediatric primary care visit at Bellevue Hospital and in home-based environment of low-income families in the Bronx.",
        "Prepared materials for assessments, video coding and transcribing interview videos;",
        "Assistance with administrative tasks and other operational aspects of study."
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
        // "Read more about it here: https://docs.google.com/document/d/1FcU7KF9UEEzNLswsNBeHhDlrF0rvtyn4/edit?usp=sharing&ouid=117127143364123307233&rtpof=true&sd=true",
      ],
    },
    {
      title: "Philosophy Teacher",
      company_name: "U.S. Department of Education - TRIO Upward Bound",
      icon: ed,
      iconBg: "#997977",
      date: "September 2018 – January 2019",
      points: [
        "Inspired by the moral panic of emergent technology's unintended consequences, I designed and taught a course on the philosophical perspective on technology and ethical dilemmas, paired with the British television anthology Black Mirror",
        "I paired one episode for each reading to illustrate, compare and contrast (e.g., Satre's 'No Exit' vs Nose Dive, Spinoza's 'Ethics' vs White Bear)",
        "Design a 20-week lesson plan, teach a class of high school students from low-income backgrounds.",
        "Provide students with a philosophical toolbox and critical perspective regarding technology;",
        "Students can understand ethical issues and concepts regarding technology, human nature, and how they intertwine; Articulate the complex relationship between technology and social issues and how they can use the philosophical toolbox to question the status quo; Construct arguments rooted in evidence.       "
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Iris is full of energy which lifts up the entire team. She works hard and makes an genuine efforts on the hardest task. She does not hesitate to acknowledge and own up to her mistakes, which are minor compared to her contribution and progress. She is also modest and willing to improve, despite being one of the top performers in every subject I taught her.",
      name: "Jun Yuan",
      designation: "Assistant Professor",
      company: "Pace University",
      image: "https://media.licdn.com/dms/image/C5603AQEzVBXQMCNpzw/profile-displayphoto-shrink_800_800/0/1517637043214?e=2147483647&v=beta&t=vnh0xoZmp86iV_L0ZaWcYLWnbrem9LXmjBzHYu7GE-c",
    },
    {
      testimonial:
        "Having worked closely worked with Iris on multiple projects, I found her to have a very innovative mind, a fast learner with strong grasp on software engineering fundamentals in tandem with strong management and interpersonal skills to help build solutions to achieve key business outcomes.",
      name: "Preetish Mishra",
      designation: "Consultant-Project Manager",
      company: "Nagarro",
      image: "https://media.licdn.com/dms/image/C4D03AQEj_yaiiv6OfA/profile-displayphoto-shrink_800_800/0/1627226045314?e=1703721600&v=beta&t=zISmL0uvdf5eR92cRzljs31uBtn_nazrp9184ORbpOo",
    },
    {
      testimonial:
        "Her natural curiosity and innate love of learning was truly infectious. Iris embodies that wonderful yet rare combination of both cheerleader and coach.",
      name: "Lynda V. Marinello",
      designation: "Educator/Mentor",
      company: "Hamiton Heights Academy",
      image: "https://pbs.twimg.com/media/ENtqGW4XkAAahWU?format=jpg&name=large",
    },
  ];
  
  //TOCHANGE
  const projects = [
    {
      name: "Alexa Health Diary",
      description:
        "Alexa Skill application that allows users log and track personal data, be it your mood, health, or habits, providing a convenient and efficient solution for handy personal data log.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "voiceToText",
          color: "pink-text-gradient",
        },
      ],
      image: Alexa,
      source_code_link: "https://github.com/NguyenCuuNguyen/Alexa_diary",
    },
    {
      name: "MapReduce on Single Host with Producer-Consumer",
      description:
        "A simplified version of parallel processing application called MapReduce in Java for single machine, run it on a word count program, based on Producer-Consumer with concurrency support.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "multithreading",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://as2.ftcdn.net/v2/jpg/06/43/71/07/1000_F_643710748_B3jU5BzqQnctd6mMdsAbROJhifzI3WsF.jpg',
      source_code_link: "https://github.com/NguyenCuuNguyen/CS488S21/tree/main",
    },
    {
      name: "Pygame",
      description:
        "A Python combat game experiment. ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Game",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: pygame,
      source_code_link: "https://github.com/NguyenCuuNguyen/Pygame-Experiment",
    },
    {
      name: "Memory Game",
      description:
        "Memory game with HTML, CSS and Javascript",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: memory,
      source_code_link: "https://000697814.deployed.codepen.website/",
      //DEMO link: 
    },
    // {
    //   name: "MapReduce on Single Host with Producer-Consumer",
    //   description:
    //     "A simplified version of parallel processing application called MapReduce in Java for single machine, run it on a word count program, based on Producer-Consumer with concurrency support.",
    //   tags: [
    //     {
    //       name: "Java",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "multithreading",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "API",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: 'https://as2.ftcdn.net/v2/jpg/06/43/71/07/1000_F_643710748_B3jU5BzqQnctd6mMdsAbROJhifzI3WsF.jpg',
    //   source_code_link: "https://github.com/NguyenCuuNguyen/CS488S21/tree/main",
    // },
    // {
    //   name: "Pygame",
    //   description:
    //     "A Python combat game experiment. ",
    //   tags: [
    //     {
    //       name: "Python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Game",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: pygame,
    //   source_code_link: "https://github.com/NguyenCuuNguyen/Pygame-Experiment",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  