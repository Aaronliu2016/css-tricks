function getRandomStar(count, maxArea, minArea, starSize) {
  let boxShadowStyle = (minArea + Math.floor(Math.random()*maxArea))+ 'px ' + (minArea + Math.floor(Math.random()*maxArea)) + 'px ' + 0 + ' ' + starSize + ' ' + 'rgba(255, 255, 255, ' + Math.random() + ')';
  for(let i=0; i< count; i++) {
    boxShadowStyle = boxShadowStyle + ', ' + (minArea + Math.floor(Math.random()*maxArea))+ 'px ' + (minArea + Math.floor(Math.random()*maxArea)) + 'px ' + 0 + ' ' + starSize + ' ' + 'rgba(255, 255, 255, ' + Math.random() + ')';
  }
  return boxShadowStyle
}

$(function() {
  let style = document.createElement('style');
  document.head.appendChild(style);
  let sheet = style.sheet;
  let asteroidBeltStars = getRandomStar(400, 290, -290/2, '-104px');
  sheet.insertRule('.asteroid-belt::before {box-shadow: ' + asteroidBeltStars + '}');
  let wholeBackgroundStars = getRandomStar(500, 1800, 0, 0)
  console.log(wholeBackgroundStars)
  sheet.insertRule('.solar-syst::after { box-shadow: ' + wholeBackgroundStars + ' }');
})