export function animateCreation(element?: HTMLElement) {
  if (!element) return;
  return element.animate(
    [
      {
        transform: "scaleX(0)",
      },
      {
        transform: "scaleX(1)",
      },
    ],
    {
      duration: 400,
      easing: "linear",
    }
  );
}
