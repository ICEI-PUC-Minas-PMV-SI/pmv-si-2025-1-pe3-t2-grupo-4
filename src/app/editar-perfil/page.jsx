import './styles.css';

export default function EditProfile() {
    return (
        <div className="wrapper">
            <div className="card">
                <h2 className="title">Editar perfil</h2>

                <div className="cardBox">
                    <div className="profileSection">
                        <div className="profileBox">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="User"
                                className="profileImg"
                            />
                            <p className="greeting">Bem-vindo</p>
                            <p className="name">Mariana</p>
                        </div>
                        <div className="infoBlock">
                            <p>Mariana C. S. Ribeiro</p>
                            <p>usuario@test.com</p>
                            <p>Rua 1, 45 – Ipanema<br />RJ/RJ</p>
                        </div>
                    </div>

                    <section className="formSection">
                        <form className="formCol">
                            <input type="text" placeholder="Nome" className="input" />
                            <input type="text" placeholder="Sobrenome" className="input" />
                            <input type="text" placeholder="Endereço" className="input" />
                            <input type="password" placeholder="Nova senha" className="input" />
                            <input
                                type="password"
                                placeholder="Confirmar nova senha"
                                className="input"
                            />
                        </form>
                    </section>
                </div>

                <div className="btnRow">
                    <button type="button" className="btn cancel">Cancelar</button>
                    <button type="submit" className="btn save">Salvar</button>
                </div>

                <button className="admin">Acessar perfil administrador</button>
            </div>
        </div>
    );
}
