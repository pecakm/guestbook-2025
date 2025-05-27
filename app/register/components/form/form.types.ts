import { z } from 'zod';

import { schema } from './form.schema';

export type FormFields = z.infer<typeof schema>;
