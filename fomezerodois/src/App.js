import fz from './fz.png';
import './App.css';

function App() {
  return (
    <div className="App">
          <div class="main-login">
        <div class="left-login">
            <h1>FOME ZERO</h1>
            <img src= {fz} class="left-login-image "alt="Logo Fome Zero"></img>
        </div>
        <div class="right-login">
            <div class="card-login">
                <h3>CADASTRE-SE</h3>
                <div class="textfield">
                    <label for="usuario">Usuário</label>
                    <input type="text" name="usuario" placeholder="Usuário:"></input>
                </div>
                <div class="textfield">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Senha:"></input>
                </div>
                <button class="btn-login"> Login</button>
            </div>
        </div>
</div>
    </div>
  );
}

export default App;
