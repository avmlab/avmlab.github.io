// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-join-us",
          title: "Join Us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/joining/";
          },
        },{id: "news-official-start-of-the-lab-at-rwth-aachen-university",
          title: 'Official start of the lab at RWTH Aachen University.',
          description: "",
          section: "News",},{id: "news-max-wollgarten-joined-the-lab-as-a-phd-student-welcome-max",
          title: 'Max Wollgarten joined the lab as a PhD student. Welcome Max!',
          description: "",
          section: "News",},{id: "news-louis-pezon-presented-a-postern-on-our-joint-work-hallmarks-of-computation-via-shared-latent-dynamical-motifs-at-cosyne",
          title: 'Louis Pezon presented a postern on our joint work “Hallmarks of computation via...',
          description: "",
          section: "News",},{id: "teachings-seminar-current-topics-in-deep-learning-theory",
          title: 'Seminar - Current Topics in Deep Learning Theory',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/seminar-current-topics-deep-learning-theory.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
