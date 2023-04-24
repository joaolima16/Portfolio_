import "./style.css";
export default function Footer() {
    return (
        <>  
            <footer className="footer_container">
            <h1 className="title_footer">Deseja entrar em contato? envie um e-mail</h1>
            <section className="container_wrapper">
                <form className="form_mail">
                    <input type="text" className="input_form" placeholder="E-mail"/>
                    <input type="text"  className="input_form" placeholder="Assunto"/>
                    <input type="text" className="input_form" />
                </form>
                <div>Teste2</div>
            </section>
            </footer>

        </>

    )
}