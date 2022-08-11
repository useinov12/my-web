// export { wrapRootElement } from './gatsby-browser';
import React from 'react'
import Layout from './src/components/Layout/Layout'
import LayoutContextProvider from './src/components/Layout/Context/LayoutContextProvider'

export const wrapPageElement = ({ element }) => {

   return(
       <LayoutContextProvider>
            <Layout>{element}</Layout>
       </LayoutContextProvider>
    ) 
}