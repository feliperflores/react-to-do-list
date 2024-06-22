export function animateDeletion(element: HTMLElement) {
  return element.animate(
    [
      {
        transform: "scale(1)",
      },
      {
        transform: "scale(0, 1)",
      },
    ],
    {
      duration: 400,
      easing: "linear",
    }
  );
}
