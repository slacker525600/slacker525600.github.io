import React, {FC } from 'react';

/*
goal of making a reusable component for footer links, 
will also include sub component to render individual logo/link 
*/
interface IProps {
}

interface FooterLinksProp {
    items: Array<FooterProp>
};
export interface FooterProp {
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
*/

const FooterLink:FC<FooterProp> = 
({ link, altText, image}) => 
    <a key={link} href={link}>
        <img height={50} width={50} alt={altText} src={require('./' +image)} /> 
    </a>;

const FooterLinks:FC<FooterLinksProp> = ({items}) => {
    console.log(items)
    return (
        <div className="footer">
            { items.map((item) => <FooterLink link={item.link} altText={item.altText} image={item.image} />) }
            <br />
            copyright chris ecker 2022
        </div>
)};


export default FooterLinks;
