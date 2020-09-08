import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { withKnobs } from '@storybook/addon-knobs';

import Spacer, { SpacerProps } from '../components/spacer/spacer';

export default {
    title: 'Example/Spacer',
    decorators: [withKnobs],
  };


export const defaultView = () => {
    return (
        <>
        Text before space of 100 px
        <Spacer size={100}/>
        Text after space of 100 px
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