import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

import { CookieName, CountryCode } from '@/enums';
 
export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get(CookieName.Language)?.value || CountryCode.EN;
 
  return {
    locale,
    messages: (await import(`./${locale}.json`)).default
  };
});
