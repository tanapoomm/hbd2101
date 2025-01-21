function openGift() {
    const lightEffect = document.getElementById('light-effect');
    const container = document.querySelector('.gift-container');
  
    // แสงระเบิด
    lightEffect.style.animation = 'light-explosion 1s ease-out forwards';
  
    // แสดงหัวใจลอย
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        createHeart();
      }
    }, 300);
  
    // เปลี่ยนหน้า
    setTimeout(() => {
      window.location.href = "hbd.html";
    }, 3000);
  }
  
  function createHeart() {
    const container = document.querySelector('.gift-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
  
    // ตำแหน่งแบบสุ่ม
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  
    container.appendChild(heart);
  
    // ลบหัวใจเมื่อจบอนิเมชัน
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  