# OKCODE Copilot Instructions

## Project Overview
This is a multilingual technical documentation site built with Astro 5.0 and Starlight theme. It supports Chinese (zh-CN), English (en), and Spanish (es) with Algolia search integration.

## Architecture
- **Content Structure**: All documentation lives in `src/content/docs/` with language-specific subfolders (`en/`, `es/`, root for zh-CN)
- **Content Collections**: Uses Astro's Content Layer API with `docsLoader` and `i18nLoader` in `src/content.config.ts`
- **Internationalization**: UI strings in `src/content/i18n/*.json`, content translated per language folder
- **Styling**: Tailwind CSS with custom Starlight theme colors defined in `src/styles/global.css`

## Key Patterns
- **Frontmatter**: Use standard Starlight schema (title, description, template) in MDX files
- **Sidebar Navigation**: Auto-generated from `guides/` and `reference/` directories in `astro.config.mjs`
- **Components**: Import from `@astrojs/starlight/components` (Card, CardGrid, LinkCard) for rich content
- **Search**: Algolia DocSearch configured in `astro.config.mjs` with appId 'RGT6K369RP'

## Development Workflow
- **Local Development**: `npm run dev` starts dev server with hot reload
- **Build**: `npm run build` generates static site to `dist/`
- **Preview**: `npm run preview` serves built site locally
- **Environment**: Set `PUBLIC_ALGOLIA_API_KEY` in `.env` for search functionality

## Conventions
- **File Naming**: Use kebab-case for MDX files (e.g., `example-guide.mdx`)
- **Directory Structure**: Mirror English structure in other languages (e.g., `en/guides/example.md` → `es/guides/example.md`)
- **Content Types**: Guides in `guides/` (task-oriented), Reference in `reference/` (API/docs)
- **Hero Pages**: Use `template: splash` for landing pages with hero sections

## Integration Points
- **Analytics**: Google Analytics 4 with SPA tracking in `astro.config.mjs`
- **Ads**: Google AdSense integrated via script tags
- **Deployment**: GitHub Pages with CNAME and robots.txt in `public/`

## Example Patterns
- **Adding New Guide**: Create `src/content/docs/en/guides/new-feature.md` with frontmatter, then translate to `es/` and root
- **Custom Styling**: Use Tailwind CSS classes (e.g., `bg-blue-500 text-white p-4 rounded-lg`) instead of custom CSS
- **Navigation**: Update sidebar config in `astro.config.mjs` for new sections
- **Component Styling**: Apply Tailwind classes directly to Starlight components for consistent theming</content>
<parameter name="filePath">c:\Users\Lwh77\Desktop\workspace\okcode\.github\copilot-instructions.md