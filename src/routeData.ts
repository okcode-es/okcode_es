// src/routeData.ts
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  const id = context.locals.starlightRoute.id || 'index';
  const ogImageUrl = new URL(
    `/og/${id}.png`,
    context.site,
  );

  const { head } = context.locals.starlightRoute;

  head.push({
    tag: 'meta',
    attrs: { property: 'og:image', content: ogImageUrl.href },
  });
  head.push({
    tag: 'meta',
    attrs: { name: 'twitter:image', content: ogImageUrl.href },
  });
});