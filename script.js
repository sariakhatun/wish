function flipCard() {
    document.querySelector('.card').classList.toggle('flipped');
    startConfetti();
  }
  
  // Confetti Canvas
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let confetti = [];
  
  function Confetto() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 10 + 5;
    this.speed = Math.random() * 3 + 2;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  
    this.update = () => {
      this.y += this.speed;
      if (this.y > canvas.height) {
        this.y = -10;
        this.x = Math.random() * canvas.width;
      }
    };
  
    this.draw = () => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    };
  }
  
  function createConfetti() {
    confetti = [];
    for (let i = 0; i < 150; i++) {
      confetti.push(new Confetto());
    }
  }
  
  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(confetto => {
      confetto.update();
      confetto.draw();
    });
    requestAnimationFrame(animateConfetti);
  }
  
  function startConfetti() {
    createConfetti();
    animateConfetti();
  }
  
  // Resize canvas on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  