export type NavigationOptionType = {
  label: string;
  route: string;
};

export const NAVIAGTION_OPTIONS: NavigationOptionType[] = [
  { label: 'Hide', route: '/hide' },
  { label: 'Map', route: '/locator' },
  { label: 'Find', route: '/find' },
  { label: 'Codes', route: '/codes' },
  { label: 'Create', route: '/create' },
];
