import { NuxtAuthHandler } from '#auth';
import GoogleProvider from 'next-auth/providers/google';

const config = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: config.googleClientId,
      clientSecret: config.googleClientSecret,
    }),
  ],
});
