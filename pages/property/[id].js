import { Box, Flex, Text, Avatar, Spacer, Divider } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from "millify";

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';
import { useState } from 'react';

const PropertyDetails = ({ propertyDetails: 
  { 
    price, 
    rentFrequency, 
    rooms, 
    title, 
    baths, 
    area, 
    agency, 
    isVerified, 
    description, 
    type, 
    purpose, 
    furnishingStatus, 
    amenities, 
    photos 
  } }) => {
  const [seeAll, setSeeAll] = useState(false);

  return (
    <Box maxWidth={"1000px"} p={"4"} margin={"auto"}>
      {photos && <ImageScrollbar data={photos} />}
      <Box w={"full"} p={"6"}>
        <Flex paddingTop={"2"} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Box paddingRight={"3"} color={"green.400"}>{isVerified && <GoVerified />}</Box>
            <Text fontWeight={"bold"} fontSize={"lg"}>EUR {millify(price)} {rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar size={"lg"} src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex alignItems={"center"} p={"1"} justifyContent={"space-between"} w={"250px"} color={"blue.400"}>
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Box marginTop={"2"}>
          <Text fontSize={"lg"} marginBottom={"3"} fontWeight={"bold"}>
            {title}
          </Text>
          <Text lineHeight={"2"} color={"gray.600"}>
            {description.length > 450 ? (
              <>
                {seeAll ? description : description.substring(0, 450)}<span style={{cursor: 'pointer', color: 'blue'}} onClick={() => setSeeAll(!seeAll)}>{seeAll ? ' See Less' : '...See All'}</span>
              </>
            ) : description}
          </Text>
        </Box>
        <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
          <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Type</Text>
            <Text fontWeight='bold'>{type}</Text>
          </Flex>
          <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Purpose</Text>
            <Text fontWeight='bold'>{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
              <Text>Furnishing Status</Text>
              <Text fontWeight='bold'>{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box>
          {amenities.length > 0 && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
            <Flex flexWrap='wrap'>
              {amenities?.map((item) => (
                  item?.amenities?.map((amenity) => (
                    <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                      {amenity.text}
                    </Text>
                  ))
              ))}
            </Flex>
        </Box>
      </Box>
    </Box>
  );
};


export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  
  return {
    props: {
      propertyDetails: data,
    },
  };
}

