// Toggle Menu untuk Mobile
function toggleMenu() {
  const nav = document.getElementById("navbarMenu");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

// Validasi Form Contact
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Harap isi semua kolom sebelum mengirim!");
    return false;
  } else {
    alert("Pesan Anda berhasil dikirim. Terima kasih!");
    return true;
  }
}
