import React from 'react';
const TransactionButton = () => {
    const handleButtonClick = async () => {
        const script = await import('./flow/transaction');
        script.runScript("5.0");
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Run Script</button>
        </div>
    );
};

export default TransactionButton;
