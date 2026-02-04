// Basic interactions for the static template.
// Replace mailto fallback with a real endpoint when ready.

document.getElementById('year').textContent = new Date().getFullYear();

function handleForm(e){
  e.preventDefault();
  const business = document.getElementById('business').value.trim();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!business || !name || !phone || !message){
    alert('Please fill all required fields.');
    return false;
  }

  // Use mailto fallback to open the user's mail client (no backend).
  const subject = encodeURIComponent(`Website request from ${business} — ${name}`);
  const body = encodeURIComponent(
    `Business: ${business}\nName: ${name}\nPhone: ${phone}\n\nMessage:\n${message}\n\n(Replace mailto with real endpoint in script.js when ready.)`
  );

  const mailto = `mailto:hello@fvwebdev.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
  return false;
}
