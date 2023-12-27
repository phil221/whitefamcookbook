// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const recipeCollection = defineCollection({ 
    type: "content",
    schema: z.object({
        name: z.string(),
        author: z.string(),
        instructions: z.string(),
        image: z.string().optional()
    })
 });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'recipe': recipeCollection,
};