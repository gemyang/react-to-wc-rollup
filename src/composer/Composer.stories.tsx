import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Composer } from "./Composer";

export default {
  title: "Components/Composer",
  component: Composer,
} as ComponentMeta<typeof Composer>;

const Template: ComponentStory<typeof Composer> = (args) => <Composer {...args} />;

export const Without_Text = Template.bind({});
Without_Text.args = {
  text: "",
  body: "text"
};

export const With_Text = Template.bind({});
With_Text.args = {
  text: "Hello World",
  body: <div>div</div>
};
