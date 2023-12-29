// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import recipeCategories from '../constants/recipeCategories';
import recipeAuthors from '../constants/recipeAuthors';

// 2. Define your collection(s)
const recipeCollection = defineCollection({ 
    type: "content",
    schema: z.object({
        name: z.string(),
        author: z.enum(recipeAuthors),
        servingsNumber: z.number(),
        prepTime: z.string(),
        ingredients: z.array(z.string()),
        instructions: z.array(z.string()),
        comments: z.string().optional(),
        nutritionFacts: z.string().optional(),
        category: z.enum(recipeCategories),
        image: z.string().optional()
    })
 });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'recipe': recipeCollection,
};