function changeColorScheme(scheme) {
  // Reset all potential schemes
  document.body.classList.remove(
    "scheme1",
    "scheme2",
    "scheme3",
    "scheme4",
    "scheme5",
    "scheme6",
    "scheme7",
    "scheme8",
    "scheme9",
    "scheme10"
  );

  // Apply the selected scheme
  document.body.classList.add(scheme);
}

// Set default scheme (version 1)
document.body.classList.add("scheme1");
