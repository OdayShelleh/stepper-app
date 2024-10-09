import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { nameDataAtom } from "../../store/atoms";

const AddingName = () => {
  const [name, setName] = useRecoilState(nameDataAtom);
  return (
    <VStack spacing={4}>
      <Box className="size-24 bg-slate-800 text-5xl text-white flex justify-center items-center">
        {name.charAt(0).toLocaleUpperCase()}
      </Box>
      <Text className="flex items-center justify-center mb-1">
        {name.toLocaleLowerCase()}@wonderland.space
      </Text>
      <Text as="b" color="blackAlpha.800" fontSize="24px">
        Welcome to Giki
      </Text>
      <InputGroup>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-center"
          color={"orange"}
        />
        <InputRightElement>
          <EditIcon color={"gray"} />
        </InputRightElement>
      </InputGroup>
      <Text className="text-center">
        Your answers to the next few questions will help us find the right
        communities for you
      </Text>
    </VStack>
  );
};

export default AddingName;
