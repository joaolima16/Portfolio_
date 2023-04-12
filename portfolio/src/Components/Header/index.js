import "./style.css";
export default function Header() {
    return (

        <>
                <header className="Header-parallax">
                    <ul className='list-informations'>
                        <li className='informations'>Sobre mim</li>
                        <li className='informations'>Habilidades </li>
                        <li className='informations'>Projetos</li>
                        <li className='informations'>Contatos</li>
                    </ul>
                    <section className='section-titles'>
                        <h1 className='title-name'>João Vitor De Lima</h1>
                        <h2 className='subtitle'>Desenvolvedor Web Back-End</h2>

                    </section>
                </header>

        </>
    )


}