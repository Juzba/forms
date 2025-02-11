import { use, useState } from 'react';
import './InputData.scss';

const InputData = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userData, setUserData] = useState([]);

    const reset = (erorText) => {
        setError(erorText);
        setUserName('');
        setPassword('');
    };

    const submitChange = (e) => {
        e.preventDefault();

        if (userName.length < 2 && password.length < 6) {
            reset('Chyba: Krátké zadání');
        } else if (userName.length > 10 && password.length > 10) {
            reset('Chyba: Dlouhé zadání');
        } else {
            const oneUser = { userName, password };
            setUserData([...userData, oneUser]);
            reset('Ok');
        }
    };

    return (
        <section className='input-data'>
            <form onSubmit={submitChange} id='form' name='form'>
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

                <input type='submit' value='Submit'></input>
            </form>
            {userData.map(({ userName, password }, index) => {
                return <p className='item' key={index}>{`Jmeno: ${userName} Heslo: ${password}`}</p>;
            })}
        </section>
    );
};

export default InputData;
