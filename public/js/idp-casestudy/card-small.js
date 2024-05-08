const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  sm: 576,
  med: 768,
  lg: 992,
  xl: 1200,
}

function cardSmall(iconSrc, iconSize, headline, containerSelector = '.values-grid') {
  const cardContainer = document.querySelector(containerSelector);

  const cardElement = document.createElement('div');
  cardElement.className = 'values-grid-item'; // Remove the dot before the class name

  const img = document.createElement('img');
  img.className = `iconSize-${iconSize}`;
  img.src = iconSrc;
  img.style.alignSelf = "center";
  cardElement.appendChild(img);

  const p = document.createElement('p');
  p.className = 'card_headline';
  p.textContent = headline;
  cardElement.appendChild(p);

  cardContainer.appendChild(cardElement);

  // Check if screen size is at least 'md', then set iconSize to 'med'
  const setIconSize = () => {
    if (window.innerWidth >= breakpoints.mobileM) {
      img.className = 'iconSize-sm';
    }
    if (window.innerWidth >= breakpoints.med) {
      img.className = 'iconSize-med';
    }
  };

  // Call setIconSize initially and add a listener for resize events
  setIconSize();
  window.addEventListener('resize', setIconSize);

}

// "BoardSpace user needs and values" cards content
cardSmall('/public/svg/ic_searchDocument.svg', 'xs', 'Findability');
cardSmall('/public/svg/ic_efficiency.svg', 'xs', 'Efficiency');
cardSmall('/public/svg/ic_compliance.svg', 'xs', 'Compliance');
cardSmall('/public/svg/ic_security.svg', 'xs', 'Security');
cardSmall('/public/svg/ic_transparency.svg', 'xs', 'Transparency');
