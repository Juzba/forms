import { useState } from 'react';
import './InputData.scss';

const InputData = () => {
    const [user, setUser] = useState({ Name: '', Password: '', Age: '' });
    const { Name, Password, Age } = user;

    const [error, setError] = useState('');
    const [userData, setUserData] = useState([]);

    const reset = (erorText) => {
        setError(erorText);
        setUser({ Name: '', Password: '', Age: '' });
    };

    const submitChange = (e) => {
        e.preventDefault();

        if (Name && Password && Age) {
            const newUser = {...user, Id: new Date().getTime()}
            setUserData([...userData, newUser]);
            reset('Ok');
        }
    };

    const formChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUser({ ...user, [name]: value });
    };

    return (
        <section className='input-data'>
            <form onSubmit={submitChange}>
                <h2>Login</h2>
                <p>{error}</p>
                <input onChange={formChange} name='Name' className='inp' type='text' value={Name} placeholder='Jméno'></input>

                <input
                    onChange={formChange}
                    name='Password'
                    className='inp'
                    type='password'
                    value={Password}
                    placeholder='Password'></input>

                <input onChange={formChange} name='Age' type='number' className='inp' value={Age} placeholder='Age'></input>

                <input type='submit' value='Submit'></input>
            </form>
            {userData.map(({ Name, Password, Age, Id }) => {
                return (
                    <div className='item' key={Id}>
                        <h4 className='result'>{`Jmeno: ${Name}`}</h4>
                        <p className='result'> {`Heslo ${Password}`}</p>
                        <p className='result'> {`Age: ${Age}`}</p>
                        <p className='result'> {`Id: ${Id}`}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default InputData;
