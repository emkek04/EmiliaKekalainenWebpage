function showHours() {
  alert("GlowCycle is open Monday–Friday from 10:00 AM to 7:00 PM, Saturday from 11:00 AM to 6:00 PM, and Sunday from 12:00 PM to 5:00 PM.");
}

function showTip() {
  const tips = [
    "Skincare Tip: Apply serum after cleansing and before moisturizer.",
    "Skincare Tip: Use sunscreen daily to protect your skin barrier.",
    "Skincare Tip: Refillable products help reduce waste while keeping your routine consistent.",
    "Skincare Tip: Gentle cleansers are best for maintaining skin balance."
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  const output = document.getElementById("tip-output");

  if (output) {
    output.textContent = randomTip;
  }
}

function recommendProduct(skinType) {
  const output = document.getElementById("product-output");

  if (!output) return;

  if (skinType === "dry") {
    output.textContent = "Recommended Product: Barrier Repair Moisturizer – a great option for hydration and skin barrier support.";
  } else if (skinType === "dull") {
    output.textContent = "Recommended Product: Vitamin C Serum – helps brighten the complexion and improve skin tone.";
  } else if (skinType === "sensitive") {
    output.textContent = "Recommended Product: Oat Milk Cleanser – gentle and calming for sensitive skin.";
  }
}