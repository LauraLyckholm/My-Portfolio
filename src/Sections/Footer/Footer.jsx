import { ImageComponent } from "../../ReusableComponents/ImageElements/ImageComponent"
import { LargeText } from "../../ReusableComponents/Typography/LargeText"
import { MainHeading } from "../../ReusableComponents/Typography/MainHeading"

export const Footer = () => {
    return (
        <footer>
            <MainHeading text={"Let's talk"} />
            <ImageComponent sectionClassName={"profile-image"} elementClassName={"circle-img"} link={"/profile-image.jpg"} ImageAltText={"Profile Image of Laura"} />
            <div className="contact-info">
                <LargeText text={"Laura Lyckholm"} />
                <a href="tel:+707597396">
                    <LargeText text={"+46 707 597 396"} />
                </a>
                <a href="mailto:laura.lyckholm@gmail.com">
                    <LargeText text={"laura.lyckholm@gmail.com"} />
                </a>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/lauralyckholm/">
                    <ImageComponent sectionClassName={"icon-box"} elementClassName={"icon"} link={"/icons/linkedin.svg"} ImageAltText={"Link to LinkedIn"} />
                </a>
                <a href="https://github.com/LauraLyckholm">
                    <ImageComponent sectionClassName={"icon-box"} elementClassName={"icon"} link={"/icons/github.svg"} ImageAltText={"Link to GitHub"} />
                </a>
                <a href="https://stackoverflowteams.com/c/technigo/users/473/?tab=profile">
                    <ImageComponent sectionClassName={"icon-box"} elementClassName={"icon"} link={"/icons/stackoverflow.svg"} ImageAltText={"Link to StackOverflow"} />
                </a>
                <a href="https://www.instagram.com/lauralyckholm/">
                    <ImageComponent sectionClassName={"icon-box"} elementClassName={"icon"} link={"/icons/instagram.svg"} ImageAltText={"Link to Instagram"} />
                </a>
            </div>
            <ImageComponent sectionClassName={"footer-banner-image"} elementClassName={"footer-img"} link={"/assets/TickerTapeContent.svg"} ImageAltText={"Footer image"} />
        </footer>
    )
}
