import './style.css'
import image from '../../assets/perfil.jpg'
export default function AboutMe() {
    return (

        <main className="Wrapper">
            <section className="Content">
                <p className='Content-text'>Me chamo João tenho 18 anos, estudo programação há 2 anos,
                    tenho conhecimentos em HTML e CSS3 </p>
            </section>
            <section className="content-image">
                <img src={image} />
            </section>
        </main>
    )
}