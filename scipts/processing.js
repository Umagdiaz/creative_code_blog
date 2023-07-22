let stars = [];
let speedSlider;

 function setup() {
  const sketchContainer = document.getElementById('processing_stars');
  const containerHeight = sketchContainer.clientHeight;
  const containerWidth = sketchContainer.clientWidth;


  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent('processing_stars')
 
  speedSlider = createSlider(0, 20, 0, 0.1);
  speedSlider.parent('slider__processing-container');
  speedSlider.input(updateSpeed);

    for (let i = 0; i < 500; i++) {
      stars[i] = createVector(
      random(-width*180, width*180),
      random(-height*100, height*100),
      random(width)
      );
      stars[i].pz = stars[i].z; 
    }
  }

  function updateSpeed() {
    const sliderValue = speedSlider.value();

    for (let star of stars) {
      star.z -= sliderValue;
      if (star.z < 1) {
        star.x = random(-width * 180, width * 180);
        star.y = random(-height * 100, height * 100);
        star.z = width;
        star.pz = width;
      }
    }
  }

  function draw() {
    background(51);
    translate(width / 2, height / 2);

    for (let star of stars){
      let x = star.x / star.z;
      let y = star.y / star.z;
      let px = star.x / star.pz;
      let py = star.y / star.pz;
      let d = map(star.z, 0, width, 12, 1);

      fill(255);
      noStroke();
      circle(x, y, d);

      stroke(255);
      strokeCap(ROUND);
      line(x, y, px ,py);

      star.pz = star.z;   
    }
  }

  