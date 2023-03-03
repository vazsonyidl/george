import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountryFlagCore from '.';

export default {
  title: 'components/CountryFlag',
  component: CountryFlagCore,
} as ComponentMeta<typeof CountryFlagCore>;

const Template: ComponentStory<typeof CountryFlagCore> = (args) => <CountryFlagCore {...args} />;

export const Default = Template.bind({});

Default.args = {
  countryCode: 'ee',
};
