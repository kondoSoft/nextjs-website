import NextHead from "next/head"
import { GoogleFonts } from "next-google-fonts"

type HeadProps = {
  children: any
  title?: string
}

const Head = ({ children, title }: HeadProps) => {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap" />
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {title && <title>{title}</title>}
        {children}
      </NextHead>
    </>
  )
}

export default Head
