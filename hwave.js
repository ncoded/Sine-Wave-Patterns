const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 450;
canvas.height = 300;

// Wave parameters
let frequency = 1;
let amplitude = 50;
let phase = 0;

// Remaining time counter
let remainingTime = 15;

function updateWaveParameters() {
  frequency = Math.random() * 10 + 1;
  amplitude = Math.random() * 100 + 50;
  phase = Math.random() * 2 * Math.PI;
  remainingTime = 15;

  document.getElementById('frequency').textContent = frequency.toFixed(2);
  document.getElementById('amplitude').textContent = amplitude.toFixed(2);
  document.getElementById('phase').textContent = phase.toFixed(2);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  for (let i = 0; i < canvas.width / 2; i++) {
    const x = i * 2;
    const y = Math.sin(x * 0.1 * frequency + phase) * amplitude + canvas.height / 2;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2;
  ctx.stroke();

  if (remainingTime === 0) {
    updateWaveParameters();
  }

  document.getElementById('time').textContent = remainingTime;
  remainingTime--;
}

setInterval(updateWaveParameters, 15000);
animate();