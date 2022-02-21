import Head from "next/head";
import { Box,Text, Container } from "@chakra-ui/react";
import { getCuratedPhotos } from "../lib/api";
import { useState } from "react";

export default function Home({data}){
  // console.log("data",data);
  const [photos,setPhotos] = useState(data);
  return(
    <div>
      <Head>
        <title>NextJS Image Gallarey</title>
        <link rel="icon" href="../public/favicon.ico" /> 
      </Head>
      <Box overflow="hidden" bg="purple.100" minH="100vh">
        <Container>
          <Text color="pink.800" fontWeight="semibold" md="1rem" textAlign="center" textDecoration="underline" fontSize={["4xl","4xl","5xl","5xl"]}>
            NextJS Image Gallarey
          </Text>
        </Container>
        {
          photos.map((pic)=>(
            <img src={pic.urls.thumb} width="200" height="200" />
          ))
        }
      </Box>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await getCuratedPhotos();
  return {
    props: {
      data,
    },
  };
}