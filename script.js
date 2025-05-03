function toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
  
  function showThankYou() {
    const message = document.getElementById("thankYou");
    message.classList.add("show");
  
    // Скрыть сообщение через 3 секунды
    setTimeout(() => {
      message.classList.remove("show");
    }, 3000);
  }
  