import React, {useState} from 'react';
import { withKnobs } from '@storybook/addon-knobs';


import Checkbox, { CheckboxProps } from '../components/checkbox/checkbox';
import {defaultTheme} from '../theme/create-theme';

export default {
    title: 'Example/Checkbox',
    decorators: [withKnobs],
  };


export const defaultView = () => {
    const [value, setValue] = useState(false);
    return (
        <Checkbox value={value} onChange={setValue} enabledLabel="Checked" disabledLabel="Unchecked" theme={defaultTheme}/>
    )
};
defaultView.parameters = {
  knobs: {
    // Doesn't emit events while user is typing.
    timestamps: true,

    // Escapes strings to be safe for inserting as innerHTML. This option is true by default. It's safe to set it to `false` with frameworks like React which do escaping on their side.
    // You can still set it to false, but it's strongly discouraged to set to true in cases when you host your storybook on some route of your main site or web app.
    escapeHTML: true,
  },
};