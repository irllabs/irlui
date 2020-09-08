import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { withKnobs } from '@storybook/addon-knobs';

import Slider, { SliderProps, SliderType } from '../components/slider/slider';
import {defaultTheme} from '../theme/create-theme';


export default {
    title: 'Example/Slider',
    decorators: [withKnobs],
  };


export const defaultView = () => {
    const [numberValue, setNumberValue] = useState(2);
    const [timeValue, setTimeValue] = useState(4);

    return (
        <>
        Number Slider: <Slider
        value={numberValue}
        maxValue={10}
        type={SliderType.NUMBER}
        onChange={setNumberValue}
        theme={defaultTheme}/>

        <br/>
        Time Slider: <Slider
        value={timeValue}
        maxValue={10}
        type={SliderType.TIME}
        onChange={setTimeValue}
        theme={defaultTheme}/>
        </>
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