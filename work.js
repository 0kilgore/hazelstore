const textLoop1 = document.getElementById("text-loop-1");
const textLoop2 = document.getElementById("text-loop-2");
const texts1 = ["Unlock a Better You with Hazel: Elevate Your Life to the Next Level"];
const texts2 = ["A New Style!!", "A Fresh Start!!", "A Better You!!"];
let index1 = 0;
let index2 = 0;

function loop() {
  textLoop1.innerHTML = texts1[index1];
  index1 = (index1 + 1) % texts1.length;

  const words = texts2[index2].split(" ");

  for (let i = 0; i < words.length; i++) {
    setTimeout(() => {
      textLoop2.innerHTML = words.slice(0, i + 1).join(" ");
      if (i === words.length - 1) {
        index2 = (index2 + 1) % texts2.length;
        setTimeout(loop, 3000); // Increase the duration to 3000 milliseconds (3 seconds)
      }
    }, i * 100); // Change the delay to 100 milliseconds (0.1 seconds)
  }
}

loop();
