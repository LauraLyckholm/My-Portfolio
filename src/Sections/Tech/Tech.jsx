import "./tech.css";
import { MainHeading } from "../../ReusableComponents/Typography/MainHeading.jsx";
import { LargeText } from "../../ReusableComponents/Typography/LargeText.jsx";

// Component for the "Tech"-section.
export const Tech = () => {
    const techText = "Vue, React, HTML, CSS, Figma, JavaScript, TypeScript, Litium, Storyblok, Node.js, Npm, MongoDB/Atlas, Postman, DevOps, Web Accessibility, Express.js, mob-programming, pair-programming, GitHub, Pinia, Zustand, Asana, Google Sheets, Excel, Adobe Creative Suite, and strong interpersonal skills.";
    return (
        <section className="tech">
            <div className="tech-text-section">
                <MainHeading className={"tech-heading"} text={"Tech"} />
                <LargeText text={techText} />
            </div>
        </section>
    )
}
