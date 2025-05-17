import { useState } from 'react';

function Cadastrar(){
    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(name, email, password);
    }

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    return (
        <div>
            <h1>Cadastrar</h1>
            <p>Cadastre seu usuário para poder gerenciar seus dados</p>
            
            <form onSubmit={cadastrarUsuario}>
                <p>
                    <input type="text" className='rounded-xs' name="name" placeholder="Digite seu nome completo"
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <p>
                    <input type="text" name="email" placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p>
                    <input type="password" name="password" placeholder="Digite sua senha" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </p>

                <p>
                    <input type="submit" value="Cadastrar" />
                </p>
            </form>
        
        </div>
    )
}

export default Cadastrar;