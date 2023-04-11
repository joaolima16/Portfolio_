import './style.css'
import image from '../../assets/perfil.jpg'
export default function AboutMe() {
    return (

        <>
        <h1 className='title'>Sobre mim</h1>
        <main className="Wrapper">
            
            <section className="Content">
                <p className='Content-text'>Me chamo João, tenho 18 anos, estudo programação há 2 anos,
                    tenho conhecimentos em HTML e CSS3, nas linguagens: JavaScript, Java, C# e Python, conhecimento em banco de dados relacional e não relacional e conhecimento básico em versionamento de código com Git e GitHub. Tenho conhecimentos em Front-end utilizando ReactJs mas meu foco é a área de Back-end
                    utilizando a biblioteca NodeJs para a criação de Web Apis e comunicação com banco de dados.
                    </p>
            </section>
            <section className="content-image">
                <img src={image} />
            </section>
        </main>
        </>
            )
}