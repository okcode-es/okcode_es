// src/pages/og/[...slug].ts
import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const entries = await getCollection('docs');
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_id, page) => {
    return {
      title: page.data.title,
      description: page.data.description,
      
      // 1. 添加 Logo 配置
      logo: { 
        path: './src/assets/portfolio.svg', 
        size: [100] // 这里的数字代表宽度，高度会按比例缩放
      },

      // 2. 这里的颜色与你网站的深色背景保持一致
      bgGradient: [[5, 5, 5]], 
      
      // 3. 边框颜色建议使用你 Hero 渐变中的蓝色
      border: { color: [59, 130, 246], width: 15 }, 
      
      padding: 100,
      
      // 4. 文字样式优化
      font: {
        title: {
          color: [255, 255, 255],
          size: 70,
          weight: 'Bold',
        },
        description: {
          color: [200, 200, 200],
          size: 40,
        },
      },
    };
  },
});