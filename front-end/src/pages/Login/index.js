import React,{ useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){
    const [email, setEmail] = useState('')
  
    async function handleSubmit(event){
      //tira a definição inicial do form que ordena que a pagina seja recarregada.
      event.preventDefault();
  
      //email : email = email
      const response = await api.post('/sessions', { email })
  
      const { _id } = response.data;
  
      //salvando dados na pagina.
      localStorage.setItem('user', _id);

      //manda usuario para outra pagina.
      history.push('/dashboard');
      
    }
    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
            </p>

            <form onSubmit ={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                id="email" 
                type="email" 
                placeholder="Seu melhor e-mail"
                value ={email}
                onChange={event => setEmail(event.target.value)}
                />

                <button className = "btn" type = "submit">Entrar</button>
            </form>
      </>
    );
}