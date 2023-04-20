import { Route } from "react-router-dom";
import AboutMe from "../Components/AboutMeSection";

export default function Routes(){
    return(
        <Routes>
            <Route path="/sobremim" element={<AboutMe />} />
        </Routes>
    )
}