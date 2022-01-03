import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Text, Flex, Icon, Button, Select, Input, Spinner } from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';
import Image from "next/image";

const SearchFilters = () => {
  const [filters, setFilters] = useState({})
  return (
    <Flex bg={"gray.100"} p={"4"} justifyContent={"center"} flexWrap={"wrap"}>
      Search filters
    </Flex>
  )
};

export default SearchFilters;