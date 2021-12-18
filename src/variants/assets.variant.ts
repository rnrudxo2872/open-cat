import { Variants } from "framer-motion";

export const AssetWrapperVariant: Variants = {
  after: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
  init: (customData) => ({
    x: (customData.nowWidth + 12) * (customData.isBack ? -1 : 1),
  }),
  exit: (customData) => ({
    x: (-customData.nowWidth - 12) * (customData.isBack ? -1 : 1),
    transition: {
      duration: 1,
    },
  }),
};
