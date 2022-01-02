import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from "millify";
import defaultImage from '../assets/images/house.jpg'

const Property = ({ property:{ coverPhoto, price, rooms, rentFrequency, title, baths, area, agency, isVerified, externalId }}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <Box p={"5"} paddingTop={"0"} cursor={"pointer"}>
        <Box>
          <Image src={ coverPhoto ? coverPhoto.url : defaultImage } alt="house" width={400} height={260} />
        </Box>
        <Box w={"full"}>
          <Flex paddingTop={"2"} alignItems={"center"} justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
              <Box paddingRight={"3"} color={"green.400"}>{isVerified && <GoVerified />}</Box>
              <Text fontWeight={"bold"} fontSize={"lg"}>EUR {millify(price)} {rentFrequency && `/${rentFrequency}`}</Text>
            </Flex>
            <Box>
              <Avatar size={"md"} src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex alignItems={"center"} p={"1"} justifyContent={"space-between"} w={"250px"} color={"blue.400"}>
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize={"lg"} fontWeight={"semibold"}>
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Box>
    </Link>
  )
}

export default Property
