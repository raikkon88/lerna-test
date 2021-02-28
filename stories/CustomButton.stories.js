import React from 'react';

import CustomButton from '../packages/CustomButton/dist';

export default {
  title: 'Shared/CustomButton',
  component: CustomButton
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Click me!",
  onClick: () => alert("click!")
}
