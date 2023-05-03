import React, { FC } from 'react'

/*
goal of making a reusable component for footer links,
will also include sub component to render individual logo/link
csv format of inputs
link,image,altText
https://www.twitter.com/slacker525600,small_goose.png,bird
https://www.facebook.com/slacker525600,face.png,face
https://www.github.com/slacker525600,code.png,code
https://www.linkedin.com/in/chrisecker,work.png,work
https://www.ifpapinball.com/player.php?p=69771,ifpa.png,ifpa
*/

interface FooterProp {
  // a footer (in this context) consists of a list of links with thumbnails and alt text
  link: string
  image: string
  altText: string
};

const footerVals: FooterProp[] = [
  { link: 'https://www.twitter.com/slacker525600', image: 'small_goose.png', altText: 'bird' },
  { link: 'https://www.facebook.com/slacker525600', image: 'face.png', altText: 'face' },
  { link: 'https://www.github.com/slacker525600', image: 'code.png', altText: 'code' },
  { link: 'https://www.linkedin.com/in/chrisecker', image: 'work.png', altText: 'work' },
  { link: 'https://www.ifpapinball.com/player.php?p=69771', image: 'ifpa.png', altText: 'ifpa' }
]

const FooterLink: FC<FooterProp> =
({ link, altText, image }) =>
  <a key={link} href={link}>
      <img height={50} width={50} alt={altText} src={require('./img/' + image)} />
  </a>

const FooterLinks: FC = () => (
  <div className="footer">
      { footerVals.map((item) => <FooterLink key={item.link} link={item.link} altText={item.altText} image={item.image} />) }
      <br />
      copyright chris ecker 2023
  </div>
)

export default FooterLinks
