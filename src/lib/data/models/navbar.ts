export interface NavbarMenu {
  alt: string
  buttonTitle?: string
  mediaUrl?: string
  linkTo?: string
}

export interface Navbar {
  title: string
  bookNowLinkTo: string
  logo: {
    alt: string
    mediaUrl: string
  }
  menu: NavbarMenu[]
}

export interface Footer {
  aboutTitle: string
  serviceTitle: string
  winesTitle: string
  logo: {
    alt: string
    mediaUrl: string
  }
  about: {buttonTitle: string; linkTo: string}[]
  service: {buttonTitle: string; linkTo: string}[]
  wines: {buttonTitle: string; linkTo: string}[]
  contact: {heading: string; subheading: string; description: string}
  social: {buttonTitle: string; linkTo: string; mediaUrl: string; alt: string}[]
}
