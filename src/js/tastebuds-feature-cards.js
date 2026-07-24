import { renderFeatureCards } from "@components/FeatureCard/FeatureCard";

import typeOfFoodIcon from "@assets/svg/tastebuds/factor-type-of-food.svg?inline";
import locationIcon from "@assets/svg/tastebuds/factor-location.svg?inline";
import wordOfMouthIcon from "@assets/svg/tastebuds/factor-word-of-mouth.svg?inline";

import { onReady } from "@js/utils/dom-events";

const cards = [
  {
    icon: typeOfFoodIcon,
    heading: "Type of food",
    body: "Good food outweighs everything else — diners forgive weak service if the food delivers.",
  },
  {
    icon: locationIcon,
    heading: "Location",
    body: "Convenience and proximity shape where diners choose to go.",
  },
  {
    icon: wordOfMouthIcon,
    heading: "Word-of-mouth",
    body: "Personal recommendations are trusted more than online reviews.",
  },
];

onReady(() => {
  const wrapper = document.querySelector("[data-dining-factors]");
  renderFeatureCards(wrapper, cards);
});
