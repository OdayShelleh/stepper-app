import { Button, Box, Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { modalStateAtom } from "./store/atoms.ts";
import StepperModel from "./components/StepperModal.tsx";
import logoImage from "./assets/Union.svg";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalStateAtom);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <Box className="flex flex-col items-center justify-center h-screen">
        <Image src={logoImage} alt="Logo" className="mb-8" />
        <Button
          className=" w-1/3 max-sm:w-40"
          bg="orange.100"
          size="md"
          onClick={openModal}
        >
          Open Modal
        </Button>
      </Box>
      {isModalOpen && <StepperModel />}
    </>
  );
};

export default App;
