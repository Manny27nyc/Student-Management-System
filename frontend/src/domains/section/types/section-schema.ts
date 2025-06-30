// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { z } from 'zod';

export const SectionFormSchema = z.object({
  name: z.string().min(1, 'Name is required')
});
