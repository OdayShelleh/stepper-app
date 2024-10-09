import { Select, VStack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { languageDataAtom } from "../../store/atoms";
import { languagesArray } from "../../constants";

const SelectingLanguage = () => {
  const [lanAndRegion, setLanRegion] = useRecoilState(languageDataAtom);
  return (
    <VStack spacing={4}>
      <Select
        variant="outline"
        placeholder="Select a language"
        value={lanAndRegion.lan}
        onChange={(e) =>
          setLanRegion({
            lan: e.currentTarget.value,
            region: lanAndRegion.region,
          })
        }
      >
        {languagesArray.map((obj) => (
          <option key={obj.key} value={obj.key}>
            {obj.value}
          </option>
        ))}
      </Select>
      <Select
        variant="outline"
        placeholder="Select a region"
        value={lanAndRegion.region}
        onChange={(e) =>
          setLanRegion({
            lan: lanAndRegion.lan,
            region: e.currentTarget.value,
          })
        }
      >
        {languagesArray.map((obj) => (
          <option key={obj.key} value={obj.key}>
            {obj.value}
          </option>
        ))}
      </Select>
    </VStack>
  );
};

export default SelectingLanguage;
