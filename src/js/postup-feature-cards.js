import { renderFeatureCards } from "@components/FeatureCard/FeatureCard";

import seatingIcon from "@assets/svg/postup/couch.svg?inline";
import reservationIcon from "@assets/svg/postup/calendar.svg?inline";
import searchBarIcon from "@assets/svg/postup/search-bar.svg?inline";
import popularTimesIcon from "@assets/svg/postup/bar-chart.svg?inline";

import { onReady } from "@js/utils/dom-events";

const cards = [
  {
    icon: seatingIcon,
    heading: "Seating availability",
    body: "This was mentioned by one interviewee. It could expedite a remote worker's journey and monetized.",
  },
  {
    icon: reservationIcon,
    heading: "Reservation system",
    body: "This has great potential but its rarity in coffee shops is a challenge. It also could be monetized.",
  },
  {
    icon: searchBarIcon,
    heading: "Home search bar",
    body: "As a common user route, I anticipated some users opting for this route instead of the search page.",
  },
  {
    icon: popularTimesIcon,
    heading: "Popular times",
    body: "Given its popularity in other apps, it could enhance the UX and boost competitive advantage.",
  },
];

onReady(() => {
  const wrapper = document.querySelector("[data-feature-cards]");
  renderFeatureCards(wrapper, cards);
});
