import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Flex, Box, Text, Icon} from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';
import noResult from '../assets/images/no-result.svg';

const Search = ({ properties }) => {
  const [ searchFilters, setSearchFilters ] = useState(false);
  const router =  useRouter();

  return (
    <Box>
      <Flex 
        cursor={"pointer"} 
        bg={"gray.100"} 
        borderBottom={"1px"} 
        borderColor={"gray.200"} 
        p={"2"} 
        fontWeight={"semibold"} 
        fontSize={"lg"} 
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => setSearchFilters((prevFilter) => !prevFilter)}
      >
        <Text textTransform={"capitalize"}>Search property by filters</Text>
        <Icon paddingLeft={"2"} w={"7"} as={BsFilter} />
      </Flex>

      {searchFilters && <SearchFilters />}

      <Text fontSize={"2xl"} p={"4"} fontWeight={"bold"}>Properties {router.query.purpose}</Text>
      
      <Flex flexWrap={"wrap"}>
        {properties.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      
      {properties.length === 0 && (
        <Flex justifyContent={"center"} alignItems={"center"} marginTop={"5"} marginBottom={"5"} flexDirection={"column"}>
          <Image alt='no-image' src={noResult} />
          <Text fontSize={"3xl"} marginTop={"3"}>No Results Found</Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Search;
