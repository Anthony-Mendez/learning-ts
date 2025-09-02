import React, { ReactElement } from 'react';
import { UserTable } from './components/user-table';

function App(): ReactElement {
    return (
        <h1>
            <UserTable />
        </h1>
    );
}

export default App;
