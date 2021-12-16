import { Variants } from "framer-motion";

export const AssetWrapperVariant: Variants = {
  after: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
  init: (nowWidth) => ({
    x: nowWidth + 12,
  }),
  exit: (nowWidth) => ({
    x: -nowWidth - 12,
    transition: {
      duration: 1,
    },
  }),
};
