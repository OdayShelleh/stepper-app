import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { stepAtom } from "../store/atoms";

const StepIndicator: React.FC = () => {
  const step = useRecoilValue(stepAtom);

  const steps = [1, 2, 3];

  return (
    <Flex justify="center" align="center" my={4} gap={2}>
      {steps.map((s) => (
        <Box
          key={s}
          w="8px"
          h="8px"
          borderRadius="50%"
          bg={s <= step ? "orange.500" : "gray.300"}
        />
      ))}
    </Flex>
  );
};

export default StepIndicator;
