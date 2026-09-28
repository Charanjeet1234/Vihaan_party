/* Edit these values before sharing your invitation. Leave a field empty to show “to be announced”. */
const PARTY = {
  date: '',                 // Example: 'Saturday, 12 December 2026'
  time: '',                 // Example: '5:00 PM onwards'
  venue: '',                // Example: 'The Garden Room'
  address: '',              // Example: 'Dubai Marina, Dubai'
  mapUrl: '',               // Paste a Google Maps share link
  rsvpPhone: ''              // WhatsApp number with country code, digits only: '971501234567'
};

const put = (id, value, fallback) => document.getElementById(id).textContent = value.trim() || fallback;
put('date-text', PARTY.date, 'Date to be announced');
put('time-text', PARTY.time, 'Time to be announced');
put('venue-text', PARTY.venue, 'Venue to be announced');
put('address-text', PARTY.address, '');

if (PARTY.mapUrl) {
  const map = document.getElementById('map');
  map.href = PARTY.mapUrl;
  map.hidden = false;
}
if (PARTY.rsvpPhone) {
  const rsvp = document.getElementById('rsvp');
  rsvp.href = `https://wa.me/${PARTY.rsvpPhone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello! I would love to join Vihaan’s welcome party.')}`;
  rsvp.hidden = false;
}

document.getElementById('share').addEventListener('click', async () => {
  const message = `You’re invited to celebrate baby Vihaan! ✨\n${PARTY.date || 'Date to be announced'} · ${PARTY.time || 'Time to be announced'}\n${PARTY.venue || 'Venue to be announced'}\n${location.href}`;
  if (navigator.share) {
    try { await navigator.share({title: 'Welcome, Baby Vihaan', text: message, url: location.href}); return; }
    catch (error) { if (error.name === 'AbortError') return; }
  }
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
