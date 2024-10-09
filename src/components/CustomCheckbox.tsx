import React from "react";
import {
  useCheckbox,
  Box,
  Image,
  chakra,
  UseCheckboxProps,
} from "@chakra-ui/react";

interface CustomCheckboxProps extends UseCheckboxProps {
  imgSrc: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  imgSrc,
  ...props
}) => {
  const { state, getInputProps, getCheckboxProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      {...htmlProps}
      display="flex"
      alignItems="center"
      cursor="pointer"
    >
      <input {...getInputProps()} hidden />
      <Box
        {...getCheckboxProps()}
        boxSize={"100px"}
        border="2px solid"
        borderColor={state.isChecked ? "orange.500" : "gray.300"}
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {<Image src={imgSrc} />}
      </Box>
    </chakra.label>
  );
};

export default CustomCheckbox;
