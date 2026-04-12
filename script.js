document.addEventListener('DOMContentLoaded', function () {
  // -----------------------------
  // Materialize basic carousel
  // -----------------------------
  const basicElem = document.querySelector('#basicCarousel');
  if (basicElem) {
    const basicInstance = M.Carousel.init(basicElem, {
      duration: 200,
      dist: -100,
      shift: 0,
      padding: 0,
      numVisible: 5,
      indicators: false
    });

    const basicPrev = document.querySelector('#basicPrev');
    const basicNext = document.querySelector('#basicNext');
    const basicGo3 = document.querySelector('#basicGo3');

    if (basicPrev) basicPrev.addEventListener('click', () => basicInstance.prev());
    if (basicNext) basicNext.addEventListener('click', () => basicInstance.next());
    if (basicGo3) basicGo3.addEventListener('click', () => basicInstance.set(2));
  }

  // -----------------------------
  // Materialize collapsible
  // -----------------------------
  const collElem = document.querySelector('#demoCollapsible');
  if (collElem) {
    M.Collapsible.init(collElem, {
      accordion: false
    });
  }

  // -----------------------------
  // Full-width Materialize slider
  // -----------------------------
  const fwElem = document.querySelector('#fullWidthCarousel');
  if (fwElem) {
    const fwInstance = M.Carousel.init(fwElem, {
      fullWidth: true,
      indicators: true
    });

    const fwPrev = document.querySelector('#fwPrev');
    const fwNext = document.querySelector('#fwNext');
    const fwToggle = document.querySelector('#fwToggle');

    if (fwPrev) fwPrev.addEventListener('click', () => fwInstance.prev());
    if (fwNext) fwNext.addEventListener('click', () => fwInstance.next());

    let autoplayOn = false;
    let autoplayTimer = null;

    function startAutoplay() {
      autoplayTimer = setInterval(() => fwInstance.next(), 3000);
      autoplayOn = true;
    }

    function stopAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
      autoplayOn = false;
    }

    if (fwToggle) {
      fwToggle.addEventListener('click', () => {
        if (autoplayOn) {
          stopAutoplay();
        } else {
          startAutoplay();
        }
      });
    }
  }
});

// -----------------------------
// Homepage functions
// -----------------------------
function showHours() {
  const output = document.getElementById('tip-output');
  if (output) {
    output.innerText = "Store Hours: Monday–Saturday, 10:00 AM to 7:00 PM. Closed Sunday.";
  }
}

function showTip() {
  const output = document.getElementById('tip-output');
  if (output) {
    output.innerText = "Skincare Tip: Apply moisturizer right after cleansing to help lock in hydration.";
  }
}

// -----------------------------
// Menu page function
// -----------------------------
function recommendProduct(skinType) {
  const output = document.getElementById('product-output');
  if (!output) return;

  if (skinType === 'dry') {
    output.innerText = "Recommended: Barrier Repair Moisturizer — perfect for restoring hydration.";
  } else if (skinType === 'dull') {
    output.innerText = "Recommended: Vitamin C Brightening Serum — helps support a brighter-looking complexion.";
  } else if (skinType === 'sensitive') {
    output.innerText = "Recommended: Oat Milk Cleanser — gentle and calming for sensitive skin.";
  } else {
    output.innerText = "Explore GlowCycle products to find your best refill match.";
  }
}

// -----------------------------
// Materialize page interactions
// -----------------------------
function displayRoutine() {
  const selectedRoutine = document.querySelector('input[name="routine"]:checked');
  const response = document.getElementById('routine-response');

  if (selectedRoutine && response) {
    response.innerText =
      `Great choice! ${selectedRoutine.value} is one of GlowCycle’s most popular refill essentials.`;
  }
}

function submitEmail(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const response = document.getElementById('email-response');

  if (emailInput && response) {
    response.innerText =
      `Thanks for subscribing! GlowCycle updates will be sent to ${emailInput.value}.`;
    emailInput.value = '';
  }
}