// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-active-learning-for-bioacoustics-biodcase-challenge",
        
          title: "Active Learning for Bioacoustics BioDCASE Challenge",
        
        description: "An active learning data challenge for bioacoustics launching April 1st",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/biodcase-challenge/";
          
        },
      },{id: "post-baseal-release",
        
          title: "BaseAL Release",
        
        description: "An Active Learning Evaluation Framework",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/BaseAL-Release-copy/";
          
        },
      },{id: "post-data-efficient-large-scale-bioacoustic-monitoring",
        
          title: "Data Efficient Large-Scale Bioacoustic Monitoring",
        
        description: "Developing a transnational biodiversity monitoring network and data pipeline.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/active-learning/";
          
        },
      },{id: "post-learning-actively-an-experiment-in-self-study",
        
          title: "Learning Actively... An Experiment in Self-Study",
        
        description: "Applying active learning principles to self-study",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Learning-Actively/";
          
        },
      },{id: "post-stratified-active-learning",
        
          title: "Stratified Active Learning",
        
        description: "Improving model generalisation across diverse ecosystems and changing soundscapes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/stratified-active-learning/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-phd-completed-i-ve-completed-my-phd-computational-bioacoustics-for-the-detection-of-rare-acoustic-events-you-can-read-the-full-thesis-here",
          title: 'PhD Completed — I’ve completed my PhD Computational Bioacoustics for the Detection of...',
          description: "",
          section: "News",},{id: "news-starting-postdoctoral-research-in-the-netherlands-i-ve-joined-tilburg-university-as-a-postdoctoral-researcher-in-dr-dan-stowell-s-group-working-on-the-transnational-tabmon-biodiversity-monitoring-project-learn-more-here",
          title: 'Starting Postdoctoral Research in the Netherlands — I’ve joined Tilburg University as a...',
          description: "",
          section: "News",},{id: "news-ibac-conference-i-presented-our-research-related-to-active-sampling-for-data-efficient-large-scale-bioacoustic-monitoring-at-the-international-bioacoustics-congress-in-denmark-check-out-the-poster-here",
          title: 'IBAC Conference — I presented our research related to Active Sampling for Data...',
          description: "",
          section: "News",},{id: "news-co-organising-the-biodcase-workshop-see-you-at-the-upcoming-biodcase-and-dcase-workshop",
          title: 'Co-organising the BioDCASE Workshop — See you at the upcoming BioDCASE and DCASE...',
          description: "",
          section: "News",},{id: "news-active-learning-for-bioacoustics-i-am-please-to-announce-that-the-active-learning-for-bioacoustic-biodcase-data-challenge-will-be-released-on-april-1st",
          title: 'Active Learning for Bioacoustics — I am please to announce that the Active...',
          description: "",
          section: "News",},{
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
