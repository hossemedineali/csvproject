import { z } from 'zod';
import { procedure, router } from './trpc';

import  {prisma}  from '../db';



export const appRouter = router({
    
  add: procedure
     .input( 
      z.object({date: z.string(),
      code: z.string(),
      view: z.string(),
      categoty: z.string(),
      label: z.string(),
      sentiment: z.string(),})
      ) 
   
    
    .mutation(async({ input,ctx }) => {
        
     
        
      return {
        greeting: input,
      };
    }),

    
});

// export type definition of API
export type AppRouter = typeof appRouter;