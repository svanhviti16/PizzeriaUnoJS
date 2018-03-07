import React from 'react';
import WizardForm from '../WizardForm/WizardForm';

class FormsIndex extends React.Component {
    render () {
        return (
            <div >
                <h2>Wizard Example</h2>
                <WizardForm/>
            </div>
        )
    }
}

export default FormsIndex;

/**
 * <WizardForm onSubmit={ShowResults} />
 */