document.addEventListener("DOMContentLoaded", () => {
  console.log("Wformen site loaded.");

  // Example click handler for the hero button
  const shopBtn = document.querySelector(".btn");
  if (shopBtn) {
    shopBtn.addEventListener("click", () => {
      alert("Redirecting to the shop page!");
      // Replace with actual redirection if needed
      // window.location.href = '/shop.html';
    });
  }
});
