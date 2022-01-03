import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Flex, Box, Text, Icon} from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs'

const Search = () => {
  const [ searchFilters, setSearchFilters ] = useState(false);
  const router =  useRouter()
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
    </Box>
  )
}

export default Search
