import { testIds } from 'helpers';

export interface StyleableComponent {
  className?: string;
}

export interface TestableComponent {
  testId: keyof typeof testIds;
}
