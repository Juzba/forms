import { useState } from 'react';
import './InputData.scss';

const InputData = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userData, setUserData] = useState([]);

    const submitChange = (e) => {
        e.preventDefault();

        if (userName && password) {
            setUserData([userName, password]);
        } else {
            setError("Chyba zadání");
        }
        setUserName('');
        setPassword('');
    };

    console.clear();
    console.log(userName);
    console.log(password);
    console.log(userData);

    return (
        <section className='input-data'>
            <form id='form' name='form'>
                <h2>Login</h2>
                <p>{error}</p>
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    className='inp'
                    type='text'
                    value={userName}
                    placeholder='Jméno'></input>

                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className='inp'
                    type='password'
                    value={password}
                    placeholder='Password'></input>

                <input type='submit' value='Submit' onClick={submitChange}></input>
            </form>
        </section>
    );
};

export default InputData;
