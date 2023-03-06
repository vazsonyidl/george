import { testIds } from './testIds';

export const getTestIds = (testId: keyof typeof testIds): Record<string, string> => ({
  'data-testid': testId,
});
