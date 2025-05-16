import { z } from 'zod';

import { schema } from './page.schema';

export type FormFields = z.infer<typeof schema>;
