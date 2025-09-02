import React, { ReactElement } from 'react';
import { Hello } from './components/hello-world';

function App(): ReactElement {
    return (
        <h1>
            <Hello name='World' />
        </h1>
    );
}

export default App;
