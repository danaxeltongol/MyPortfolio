// ==========================================================
// data.js — ALL the text and images of the portfolio live here.
// To update your portfolio, edit this file only.
// The components just read from it and display it.
// ==========================================================
import heroPhoto from './assets/me.jpg'
import aboutPhoto from './assets/me-about.jpg'
import avatarPhoto from './assets/avatar.jpg'
import jobItImage from './assets/jobit.jpg'
import kickstartImage from './assets/kickstart.jpg'
import tipPosImage from './assets/tip pos.jpg'

export const profile = {
  name: 'Dan Axel M. Tongol',
  // The name is split in two because each part sits on its own label.
  nameFirst: 'Dan Axel',
  nameLast: 'M. Tongol',
  avatar: avatarPhoto, // the small round photo in the menu
  taglineBold: 'I design and build',
  tagline: 'practical websites and apps, from the first mockup to a live deployment.',
  photo: heroPhoto,
  photoAlt: 'Photo of Dan Axel M. Tongol',
  photoFileName: 'me.jpg', // text shown on top of the photo window
  // The two stickers on the photo. You can drag them around on the page.
  stickerRound: ['Open to', 'opportunities'],
  stickerTag: 'Quezon City, PH',
}

// Links shown in the menu. "id" must match a section id.
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
]

export const about = {
  photo: aboutPhoto,
  photoAlt: 'Photo of Dan Axel M. Tongol',
  // Each line below is one paragraph.
  paragraphs: [
    'I got into programming because too many government websites were slow and confusing. I wanted to build the opposite.',
    'I like designing something, then turning it into a real, working product.',
  ],
  // How I approach a project.
  principles: [
    { title: 'Design first', text: 'Plan the layout before coding.' },
    { title: 'Works on every screen', text: 'Easy to use on a phone or a laptop.' },
    { title: 'Finish and ship', text: "Not done until it's live." },
  ],
  // "color" can be: lemon, mint, pink, sky, cobalt
  facts: [
    { label: 'Location', value: 'Quezon City, Philippines', color: 'lemon' },
    { label: 'Focus', value: 'Web development, UI/UX, and cloud', color: 'mint' },
    {
      label: 'Communities',
      // TODO: replace with the exact names of your organizations
      value: 'AWS community and Junior Blockchain',
      color: 'pink',
    },
  ],
}

// "What I can do" cards. Each card has one short line and its tools.
export const skills = {
  title: 'What I can do',
  cards: [
    {
      title: 'Web Development',
      color: 'lemon',
      text: 'Responsive websites and database-backed web apps.',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'MySQL'],
    },
    {
      title: 'UI/UX Design',
      color: 'sky',
      text: 'Mockups first, then working pages that match.',
      tools: ['Figma', 'Canva', 'Responsive design'],
    },
    {
      title: 'Software Development',
      color: 'mint',
      text: 'Java programs, desktop apps, and algorithms.',
      tools: ['Java', 'Java Swing', 'C++', 'OOP', 'Data structures'],
    },
    {
      title: 'Deployment and Version Control',
      color: 'pink',
      text: 'Tracking work with Git and putting projects online.',
      tools: ['Git', 'GitHub', 'Vercel', 'InfinityFree', 'VS Code', 'Eclipse'],
    },
  ],
}

// Words in the sliding black strip under the hero.
export const ticker = [
  'Web Development',
  'UI/UX Design',
  'React',
  'PHP',
  'MySQL',
  'Java',
  'Figma',
  'Git and GitHub',
]

// To add a project, copy one block { ... } and change its values.
// To add a screenshot: put the image file in src/assets, import it at the
// top of this file like the others, then use it as the "image" value.
export const projects = [
  {
    title: 'JobIT',
    role: 'Team leader and full-stack developer',
    description:
      'A marketplace for local gigs and side jobs. It matches people to gigs by skills, schedule, and location, and ranks the results with a hand-written merge sort.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Merge sort'],
    color: 'cobalt',
    image: jobItImage,
    imageAlt: 'Screens from the JobIT website',
    liveUrl: 'http://tongol-danaxel.infy.click',
    codeUrl: 'https://github.com/danaxeltongol/JobIT',
  },
  {
    title: 'KickStart',
    role: 'Designer and front-end developer',
    description:
      'A responsive sneaker store website with a product catalog, product pages, and a cart.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    color: 'pink',
    image: kickstartImage,
    imageAlt: 'Screens from the KickStart sneaker store website',
  },
  {
    title: 'TIP Canteen POS System',
    windowTitle: 'TIP Canteen POS',
    role: 'Interface developer',
    description:
      'A point-of-sale desktop app for a canteen. I worked on the interface and the transaction flow.',
    tags: ['Java', 'Java Swing', 'OOP'],
    color: 'mint',
    image: tipPosImage,
    imageAlt: 'TIP Canteen POS System preview',
  },
  {
    title: 'Palengke Price Watch',
    role: 'Team project', // TODO: change this to what you did in the group
    description: 'A desktop app for monitoring the prices of goods in local markets.',
    tags: ['Java', 'Java Swing', 'OOP'],
    color: 'lemon',
    image: null, // no screenshot yet, so a striped placeholder is shown
    imageAlt: 'Palengke Price Watch preview',
  },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  dates: '2025 to 2029',
  school: 'Technological Institute of the Philippines, Manila',
  highlights: [
    'Web development, object-oriented programming, databases, and UI/UX design.',
    'Data structures and algorithms, applied in JobIT.',
  ],
  mapTitle: 'Technological Institute of the Philippines - Manila Location Map',
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4364.4179512636465!2d120.98542237459337!3d14.595330701605342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9f618e826d3%3A0xeb7fcfb4bf255def!2sTechnological%20Institute%20of%20the%20Philippines!5e1!3m2!1sen!2sph!4v1785647545121!5m2!1sen!2sph',
}

export const contact = {
  heading: "Let's talk",
  text: "Have a role, a project, or an idea? Send me a message and I'll get back to you.",
  links: [
    {
      label: 'Email',
      text: 'danaxelt@gmail.com',
      href: 'mailto:danaxelt@gmail.com',
      color: 'lemon',
    },
    {
      label: 'GitHub',
      text: 'github.com/danaxeltongol',
      href: 'https://github.com/danaxeltongol',
      color: 'pink',
    },
    {
      label: 'LinkedIn',
      text: 'linkedin.com/in/dan-axel-tongol-8015763a0',
      href: 'https://www.linkedin.com/in/dan-axel-tongol-8015763a0/',
      color: 'mint',
    },
  ],
  // Web3Forms key from the old site. It sends the form to your email.
  formAccessKey: '5425c58a-5589-4b93-b100-9fb0035f3d17',
}
