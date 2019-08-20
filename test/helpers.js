const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Kevin Mao',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Kevin Mao',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Kevin Mao',
    heading: 'PROJECTS',
  },
  {
    route: '/home',
    title: 'Photography | Kevin Mao',
    heading: 'PHOTOGRAPHY',
  },
];

export { pages, randomString };