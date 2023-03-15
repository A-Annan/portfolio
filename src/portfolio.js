/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Annan Abdelilah",
  title: "Hi, I'm Abdelilah ",
  subTitle: emoji(
    "I am an experienced software developer with expertise in Angular, NestJS, and MongoDB. I specialize in building scalable and efficient web and mobile applications that offer seamless user experiences. With a proven track record of delivering high-quality solutions, my portfolio showcases my ability to design and implement complex architectures, deliver seamless integrations, and exceed client expectations."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VyLcn-CGEPUBVs8myYZWvNh2zW9ACSWX/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/A-Annan",
  linkedin: "https://www.linkedin.com/in/aabdelilah",
  gmail: "annanabdelilah@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://web.facebook.com/abdou.annan",
  medium: "https://medium.com/@annanabdelilah",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Programming Expertise",
  subTitle: "FEARLESS EXPLORER OF THE LATEST TECHNOLOGIES AND TOOLS",
  skills: [
    emoji(
      "⚡  Am proficient in using NestJS, a back-end framework for building efficient and scalable server-side applications using Node.js. With NestJS, I can create modular and flexible architectures that are maintainable and easy to use."
    ),
    emoji(
      "⚡ I specialize in developing highly interactive front-end user interfaces for web and mobile applications using Angular, a popular front-end web application framework. With Angular, I can develop dynamic and responsive user interfaces that are easy to use and manage."
    ),
    emoji(
      "⚡ I have expertise in using MongoDB, a NoSQL document-oriented database that provides a flexible and scalable solution for storing and managing data. With MongoDB, I can handle unstructured data and rapidly develop applications using JSON-like documents with dynamic schemas."
    ),
    emoji(
      "⚡ I am proficient in using Keycloak, an open-source identity and access management solution that provides single sign-on, authentication, and authorization services for web applications and APIs. With Keycloak, I can provide secure and fine-grained access control for your applications."
    ),
    emoji(
      "⚡ I have experience working with Docker, a containerization platform that allows for packaging and deploying applications in a consistent and portable way. With Docker, I can create lightweight and isolated environments for running applications, making it easy to deploy and manage complex systems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongoDb",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Ecole normale supérieure d'enseignement technique Mohammedia",
      logo: require("./assets/images/enset.png"),
      subHeader: "Engineer diploma in Big Data and Cloud Computing",
      duration: "September 2018 - September 2021",
      descBullets: []
    },
    {
      schoolName: "Ecole supérieure de technologie Casablanca",
      logo: require("./assets/images/estc.png"),
      subHeader: "Higher technician diploma in computer engineering",
      duration: "September 2016 - June 1018",
      descBullets: [
        "Microsoft Windows Server 2003 network and system administration",
        "System and network administration under LINUX",
        "Administration of a database server"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Forase",
      companylogo: require("./assets/images/forase.png"),
      date: "June 2018 – Septembre 2021",
      desc: "This project involved the development of three distinct platforms for students, teachers, and managers using Angular. Additionally, an API was built with NestJS and Keycloak for authentication and security, and mobile apps were generated using Capacitor for broader accessibility. Data was sourced from Hubspot and stored in MongoDB, and deployment was done on GCP Compute Engine to ensure reliability and scalability. Overall, this project showcases comprehensive full-stack development expertise, including proficiency in front-end and back-end technologies."
    },
    {
      role: "Software Developer",
      company: "FyComputing",
      companylogo: require("./assets/images/fy.png"),
      date: "Septembre 2021 – Present",
      desc: "As a developer on the ISAAS project, I played a crucial role in the development of various modules using Angular, NestJS, and MongoDB. I was responsible for ensuring seamless communication between microservices using Kafka, as well as syncing projects with GitLab and retrieving GitLab secrets from Vault. My work also encompassed the infrastructure service, project service, and SCNX, allowing me to gain valuable experience in a range of key areas. Overall, my contributions to this major project showcase my expertise in full-stack development, including proficiency in a variety of front-end and back-end technologies."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "An immersive experience using AI",
      subtitle:
        "In this talk I’m going to demystify how tarteel.ai teams used machine learning to correct your quran recitation.",
      event_url: "https://blablaconf.com/session/397965"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212650943933",
  email_address: "annanabdelilah@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "AnnanAbdelilah", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
