// Countdown to Christmas
function updateCountdown() {
  const christmasDate = new Date('December 25, 2023 00:00:00').getTime();
  const currentDate = new Date().getTime();
  const timeDifference = christmasDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('countdown-timer').innerHTML = `🎄 ${days}d ${hours}h ${minutes}m ${seconds}s to Christmas 🎄`;
}

setInterval(updateCountdown, 1000);

// Function to simulate adding a product to the cart
function addToCart(productName) {
  alert(`🎁 Added ${productName} to the cart! 🎁`);
}
