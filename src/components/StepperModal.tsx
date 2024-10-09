import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useRecoilState } from "recoil";
import {
  modalStateAtom,
  stepAtom,
  nameDataAtom,
  interestsAtom,
  languageDataAtom,
} from "../store/atoms.ts";
import AddingName from "./steps/AddingName.tsx";
import SelectingLanguage from "./steps/SelectingLanguage.tsx";
import SelectingIntersets from "./steps/SelectingIntersets.tsx";
import StepIndicator from "./StepIndicator.tsx";

const StepperModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalStateAtom);
  const [currentStep, setCurrentStep] = useRecoilState(stepAtom);
  const [name, setName] = useRecoilState(nameDataAtom);
  const [lanAndRegion, setLanRegion] = useRecoilState(languageDataAtom);
  const [selectedInterests, setSelectedInterests] =
    useRecoilState(interestsAtom);

  const handleClose = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setName("");
    setLanRegion({ lan: "", region: "" });
    setSelectedInterests([]);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (selectedInterests.length === 3) {
      alert("Submission Successful");
      handleClose();
    }
  };

  const modalHeader = [
    "",
    "Pick your language and country/region",
    "Tell us what you're interested in",
  ];

  const variants = {
    initial: { opacity: 0, x: 50 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <Modal size="md" isOpen={isModalOpen} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent className="p-8">
        <motion.div
          key={currentStep}
          initial={currentStep === 1 ? { opacity: 1, x: 0 } : "initial"}
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4 }}
        >
          <ModalHeader className="text-center ">
            {modalHeader[currentStep - 1]}
          </ModalHeader>

          <ModalBody>
            {currentStep === 1 && <AddingName />}
            {currentStep === 2 && <SelectingLanguage />}
            {currentStep === 3 && <SelectingIntersets />}
          </ModalBody>
        </motion.div>
        <ModalFooter>
          <VStack className="w-full">
            {currentStep === 3 ? (
              <Button
                colorScheme="orange"
                width="100%"
                onClick={handleSubmit}
                disabled={selectedInterests.length !== 3}
              >
                {selectedInterests.length !== 3
                  ? `Pick ${3 - selectedInterests.length} more`
                  : "Submit"}
              </Button>
            ) : (
              <Button
                colorScheme="orange"
                onClick={handleNext}
                width="100%"
                disabled={
                  (currentStep === 1 && !name) ||
                  (currentStep === 2 &&
                    (!lanAndRegion.lan || !lanAndRegion.region))
                }
              >
                Next
              </Button>
            )}
            {currentStep !== 1 && (
              <Button onClick={handlePrevious} variant="ghost" width="100%">
                Back
              </Button>
            )}
            <StepIndicator />
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StepperModal;
