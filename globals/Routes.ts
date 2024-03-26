import { NavLinkRoute } from '~/types/global.ts';

export const useRoutes: () => NavigationOptionType[] = () => [
  NavLinkRoute.HIDE,
  NavLinkRoute.LOCATOR,
  NavLinkRoute.FIND,
  NavLinkRoute.CODES,
  NavLinkRoute.CREATE,
  NavLinkRoute.SIGNOUT,
];
