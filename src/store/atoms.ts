import { atom } from "recoil";

export const modalStateAtom = atom({
  key: "modalStateAtom",
  default: false,
});

export const stepAtom = atom({
  key: "stepAtom",
  default: 1,
});

export const nameDataAtom = atom({
  key: "nameDataAtom",
  default: "" as string,
});

export const languageDataAtom = atom({
  key: "languageDataAtom",
  default: {
    lan: "" as string,
    region: "" as string,
  },
});

export const interestsAtom = atom({
  key: "interestsAtom",
  default: [] as string[],
});
