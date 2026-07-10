

function random(min, max) {
  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min;
}

function generateStrawberryTheme() {

  return {
    primary: `rgb(${random(220,255)},${random(40,100)},${random(80,150)})`,

    secondary: `rgb(${random(240,255)},${random(120,180)},${random(150,220)})`,

    accent: `rgb(${random(250,255)},${random(235,245)},${random(235,250)})`,
  };
}

function generateBlueberryTheme() {
  return {
    primary: `rgb(${random(50,120)},${random(80,150)},${random(220,255)})`,

    secondary: `rgb(${random(120,180)},${random(150,220)},${random(240,255)})`,

    accent: `rgb(${random(230,245)},${random(235,245)},${random(250,255)})`,
  };
}

function generateLemonTheme() {
  return {
    primary: `rgb(${random(230,255)},${random(220,255)},${random(50,120)})`,

    secondary: `rgb(${random(240,255)},${random(240,255)},${random(120,180)})`,

    accent: `rgb(${random(255,255)},${random(255,255)},${random(220,240)})`,
  };
}

function generateOrangeTheme() {
  return {
    primary: `rgb(${random(230,255)},${random(120,180)},${random(0,60)})`,

    secondary: `rgb(${random(240,255)},${random(180,220)},${random(100,150)})`,

    accent: `rgb(${random(255,255)},${random(240,250)},${random(220,240)})`,
  };
}

function generateRaspberryTheme() {
  return {
    primary: `rgb(${random(150,220)},${random(40,120)},${random(120,200)})`,

    secondary: `rgb(${random(200,240)},${random(120,180)},${random(180,240)})`,

    accent: `rgb(${random(245,255)},${random(230,245)},${random(240,255)})`,
  };
}

export {
  generateStrawberryTheme,
  generateBlueberryTheme,
  generateLemonTheme,
  generateOrangeTheme,
  generateRaspberryTheme,
};