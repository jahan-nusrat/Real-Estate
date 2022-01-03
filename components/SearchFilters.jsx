import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Text, Flex, Icon, Button, Select, Input, Spinner, filter } from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';
import Image from "next/image";
import { filterData } from '../utils/filterData';

const SearchFilters = () => {
  const [filters, setFilters] = useState({});

  const searchProperties = (filterValues) => {

  };

  return (
    <Flex bg={"gray.100"} p={"4"} justifyContent={"center"} flexWrap={"wrap"}>
      {filterData.map((data) => (
        <Box key={data.queryName}>
          <Select 
            placeholder={data.placeholder}
            w={"fit-content"}
            p={"2"}
            onChange={e => searchProperties({[data.queryName] : e.target.value})}
          >
            {data.items.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
};

export default SearchFilters;