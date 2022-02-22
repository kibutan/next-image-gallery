import Head from "next/head";
import { Box,Text, Container,Wrap, WrapItem, Center, Input, IconButton, InputRightElement, InputGroup, useToast, } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { getCuratedPhotos,getQueryPhotos } from "../lib/api";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
export default function Home({data}){
  // console.log("data",data);
  const [photos,setPhotos] = useState(data);
  const [query,setQuery] = useState("");
  const toast = useToast();

  const handleSubmit = async(e) =>{
    await e.preventDefault();
    if(query==""){
      toast({
        title:"Error",
        description:"Empty search",
        status:"error",
        duration:9000,
        isClosable:true,
        position:"top",
      });
    }else{
      const res = await getQueryPhotos(query);
      // console.log("returned result?????????????????????????????",res)
      await setPhotos(res.results);
      // await console.log(query);
      await setQuery("");
    }
  };
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
          <form onSubmit={handleSubmit}>
            <InputGroup pb="1rem">
              <Input isInvalid errorBorderColor="gray.400" placeholder="Serch free photos from unsplash.com" variant="outline" value={query} onChange={(e) => setQuery(e.target.value)} />
              <InputRightElement >
                <IconButton onClick={handleSubmit} aria-label="Search" icon={<SearchIcon />} bg="pink.400" color="white" />
              </InputRightElement>
            </InputGroup>
          </form>
        </Container>
          <Wrap px="1rem" spacing={4} justify="center">
            {photos.map((pic)=>(
              <WrapItem key={pic.id} boxShadow="base" rounded="20px" overflow="hidden" bg="white" lineheight="0" _hover={{boxShadow:"dark-lg"}}>
                <Link href={`/photos/${pic.id}`}>
                  <a>
                    <Image src={pic.urls.full} width="500" height="500" alt={pic.blur_hash} />
                  </a>
                </Link>
              </WrapItem>
            ))}
          </Wrap>
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