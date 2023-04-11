import './style.css';
import Js from '../../assets/js.png';
import Node from '../../assets/node.png'
import ts from '../../assets/ts.png'
import java from "../../assets/java.png"
import csharp from '../../assets/Csharp.png';
import react from '../../assets/react.png'
import { useEffect } from 'react';
import Aos from 'aos';

const objLanguages = [
    { name: "JavaScript", img: Js },
    { name: "NodeJs", img: Node },
    { name: "TypeScript", img: ts },
    { name: "Java", img: java },
    { name: "Csharp", img: csharp },
    { name: "ReactJs", img: react }


]
export default function SkillPage() {
    useEffect(()=>{
            Aos.init({duration:600})
    },[])
    return (
        <div class="wrapper">
            <h1 className='title'>Habilidades</h1>
            <div class="skills_box">

                {
                    objLanguages.map(({ name, img }) => {
                        return (
                            <div class="box_item" data-aos="fade-up">
                                <a href="#" class="ag-courses-item_link">
                                    <div class="ag-courses-item_bg" data-aos="fade-up"></div>

                                    <div class="ag-courses-item_title" data-aos="fade-up">
                                        <img className="img-box" src={img} />
                                    </div>
                                    <span className='box_text'>{name}</span>
                                </a>

                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}
