import Head from "next/head"
import { Box } from '@chakra-ui/react'
import Navbar from "./Navbar"
import Footer from "./Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estate | Next</title>
      </Head>
      <Box maxWidth={"1320px"} m={"auto"}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  )
}
