import tour1 from './images/tour-1.jpg';
import tour2 from './images/tour-2.jpg';
import tour3 from './images/tour-3.jpg';
import tour4 from './images/tour-4.jpg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://facebook.com/',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://twitter.com/',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://squarespace.com/',
    icon: 'fab fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: ' Looking for budget-friendly trips? Get inspired by our selection of the best budget tours that will take you to exciting destinations!',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Charge the batteries! Pick one of the tours we created based on the general interests of our customers, or create your own trip!',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: ' Let`s start planning your next vacation! Committed to providing the best value with exceptional service. Travel with comfort!',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2023',
    title: 'Tibet Adventure',
    info: 'Neque dolor dignissim fermentum id ut ultricies at egestas egestas. Sit porta imperdiet iaculis venenatis dictum convallis amet. Nullam habitant consectetur accumsan nibh iaculis pellentesque proin mauris bibendum.',
    location: 'china',
    duration: 6,
    cost: '2100',
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2023',
    title: 'best of java',
    info: 'At dolor vestibulum nunc in facilisi. Placerat ultrices arcu sodales eu faucibus ut. A etiam sollicitudin cras neque id tortor.',
    location: 'indonesia',
    duration: 11,
    cost: '1400',
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2023',
    title: 'explore hong kong',
    info: 'Morbi quis sit ultricies duis nullam pretium interdum cras cursus. Id urna varius in nunc. Lacinia nascetur turpis turpis non vestibulum.',
    location: 'hong kong',
    duration: 8,
    cost: '5000',
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2023',
    title: 'kenya highlights',
    info: 'Congue sit nisl sapien mi amet. Sodales aliquam mattis non dictum lobortis sit diam. Ut non ut sed egestas non vulputate viverra tincidunt.',
    location: 'kenya',
    duration: 20,
    cost: '3300',
  },
];
