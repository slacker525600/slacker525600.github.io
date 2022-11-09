import { FC } from "react"
import { ArrayBindingElement } from "typescript";

/*
goal of making a reusable component for footer links, 
will also include sub component to render individual logo/link 
*/
interface IProps {
}

interface FooterProp {
    // a footer (in this context) consists of a list of links with thumbnails and alt text 
    link: string;
    image: string;
    altText: string;
};

/*
csv format of inputs

link, image, altText
https://www.twitter.com/slacker525600,small_goose.png,bird
https://www.facebook.com/slacker525600,face.png,face
https://www.github.com/slacker525600,code.png,code
https://www.linkedin.com/in/chrisecker,work.png,work

//todo standardize on alttxt=filename

footerList = [{}]
*/

const FooterLink:FC<FooterProp> = 
({ link, altText, image}) => 
    <a href={link}>
        <img height={50} width={50} alt={altText} src={image} /> 
    </a>;

const FooterLinks:FC<Array<FooterProp>> = (items) => 
    <div> 
        { items.map((item) => <FooterLink link={item.link} altText={item.altText} image={item.image} />) }
    </div>;

export default FooterLinks;
