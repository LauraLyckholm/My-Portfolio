import "./header.css";
import { SubHeading } from "../../ReusableComponents/Typography/SubHeading.jsx";
import { NormalText } from "../../ReusableComponents/Typography/NormalText.jsx";
import { ImageComponent } from "../../ReusableComponents/ImageElements/ImageComponent";

const introText = "Laura, a frontend developer with five years of documented experience in web development and design, brings a proven track record of building for the web, including formal studies in web development, two years as a frontend developer, and nearly three years working professionally in web design. As an engineer with a background in web design, known for her keen eye for detail and ability to quickly learn new technologies, languages, and tools. She creates applications with both the designer and the user in mind, always balancing creativity with usability and performance. Her drive for perfection, combined with her design background, makes her a valuable asset to any project and a standout in the technology field.";

// Component for the introduction section. Structure of the section is set up and all relevant information is injected. I decided to put the introtext in it's own variable for a cleaner code in the component it self.  
export const Introduction = () => {
    return (
        <header tabIndex="0">
            <ImageComponent sectionClassName={"profile-image"} elementClassName={"circle-img"} link={"/profile-image-2.webp"} ImageAltText={"Laura"} />
            <section className="headings">
                <SubHeading text={"Hi, I'm Laura Lyckholm"} />
                <h1 className="introduction-h2">Frontend Developer & Web Designer</h1>
            </section>
            <section className="intro-text">
                <NormalText text={introText} />
            </section>
        </header>
    )
}