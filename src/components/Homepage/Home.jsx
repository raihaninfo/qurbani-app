import React from 'react';
import Form from '../Form/Form';
import QurbaniInfo from '../QurbaniDetails/QurbaniInfo';


const Home = () => {

    return (
        <div>
            <Form></Form>
            {/* <QuestionRouter></QuestionRouter>             */}    
            <QurbaniInfo></QurbaniInfo> 
        </div>
    );
};

export default Home;