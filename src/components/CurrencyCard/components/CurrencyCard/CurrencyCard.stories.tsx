import { ComponentStory, ComponentMeta } from '@storybook/react';

import CurrencyCard from '.';

export default {
  title: 'components/CurrencyCard',
  component: CurrencyCard,
} as ComponentMeta<typeof CurrencyCard>;

const Template: ComponentStory<typeof CurrencyCard> = (args) => <CurrencyCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  countryCode: 'ee',
  currencyName: 'USD',
  exchangeRate: 1.95,
  exchangeCurrency: 'EUR',
};
