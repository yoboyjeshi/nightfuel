// NightFuel — interactions
// Motion budget: hero effect (CSS) + one scroll reveal + one micro (hover).
// Keep it tiny and obvious.

document.documentElement.classList.add('js');

// Scroll reveal — sections fade in once, as they enter the viewport.
var revealables = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealables.forEach(function (el) {
    observer.observe(el);
  });
} else {
  // Old browser fallback: just show everything.
  revealables.forEach(function (el) {
    el.classList.add('in-view');
  });
}

// Waitlist form
document
  .getElementById('waitlist-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    var success = document.getElementById('waitlist-success');
    success.hidden = false;
    document.getElementById('waitlist-form').hidden = true;
  });