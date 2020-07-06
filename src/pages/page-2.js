import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import downloadFile from '../images/TDOHB.pdf'
import downloadFile1 from '../images/TDOHBS.pdf'


const SecondPage = () => ( <
    Layout >
    <
    SEO title = "Page two" / >
    <
    h1 > Hi from the second page < /h1> <
    p > Welcome to page 2 < /p> <
    p > < a href = { downloadFile }
    download > Kayode 1 < /a></p >

    <
    br / >
    <
    p > < a href = { downloadFile1 }
    download > Kayode 2 < /a> </p >

    <
    br / >

    <
    Link to = "/" > Go back to the homepage < /Link> <
    /Layout>
)

export default SecondPage