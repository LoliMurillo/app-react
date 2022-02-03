import React, { useState } from 'react';
import './Login.css';
import Label from './Label/Label';
import Title from './Title/Title';
import Input from './Input/Input';


const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [hasError, setHasError] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
            setHasError(false);
        } else {
            if (value.length < 6) {
                setPasswordError(true);
                setHasError(false);
            } else {
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }

            setPassword(value)
        }

    };


    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user === 'Laura' && param.password === '123456') {
                const { user, password } = param;
                let ac = { user, password }
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account)
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);

        }

    }


    function handleSubmit() {
        let account = { user, password }
        if (account) {
            ifMatch(account)

        }

    };

    return (
        <div className='login-container'>
            {!isLogin ?
                <div className='home-container'>
                    <h1>¡Hola {user}!</h1>
                    <label>Has iniciado sesión.</label>
                </div>
                :
                < div className='LoginContent'>
                    <div className='Login'>
                        <div className='LoginHigher' />
                        <div className='LoginLower'>
                            <Title text='Bienvenido' />
                            {hasError &&
                                <label className='label-alert'>
                                    Su contraseña o usuario son incorrectos,
                                    o no existen en nuestra plataforma,
                                </label>
                            }
                            <div className='ItemUserLogin'>
                                <Label text={''} />
                                <Input
                                    attribute={{
                                        id: 'usuario',
                                        name: 'usuario',
                                        type: 'text',
                                        placeholder: 'Introduce tu usuario'
                                    }}
                                    handleChange={handleChange}
                                />
                            </div>


                            <div className='ItemPasswordLogin'>
                                <Label text='Contraseña' />
                                <Input
                                    attribute={{
                                        id: 'contraseña',
                                        name: 'contraseña',
                                        type: 'password',
                                        placeholder: 'Introduce tu contraseña'
                                    }}
                                    handleChange={handleChange}
                                    param={passwordError}
                                />

                                {passwordError &&
                                    <label className='label-error'>
                                        Contraseña inválida o incompleta
                                    </label>
                                }
                            </div>

                            <button onClick={handleSubmit}>
                                Iniciar Sesión
                            </button>

                        </div>

                    </div>
                </div>
            }
        </div >

    )

};

export default Login;