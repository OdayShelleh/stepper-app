import { HStack, VStack } from "@chakra-ui/react";
import CustomCheckbox from "../CustomCheckbox";
import { interestsAtom } from "../../store/atoms";
import { useRecoilState } from "recoil";
import img from "../../assets/img.png";
import img1 from "../../assets/img01.png";
import img2 from "../../assets/img02.png";
import img3 from "../../assets/img03.png";

const interestsOptions = [
  { image: img, title: "Music" },
  { image: img1, title: "Sports" },
  { image: img2, title: "Technology" },
  { image: img3, title: "Travel" },
  { image: img, title: "Art" },
];
const SelectingIntersets = () => {
  const [selectedInterests, setSelectedInterests] =
    useRecoilState(interestsAtom);

  const handleInterestSelection = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else if (selectedInterests.length < 3) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <HStack spacing={4} className="flex flex-wrap justify-center items-center">
      {interestsOptions.map((obj) => (
        <VStack key={obj.title}>
          <CustomCheckbox
            imgSrc={obj.image}
            isChecked={selectedInterests.includes(obj.title)}
            onChange={() => handleInterestSelection(obj.title)}
          />
          <p>{obj.title}</p>
        </VStack>
      ))}
    </HStack>
  );
};

export default SelectingIntersets;
