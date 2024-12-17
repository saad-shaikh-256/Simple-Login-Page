gsap.to("#background",
   {
      y: "0%",
      opacity: 1,
      duration: 0.9,
      ease: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
   }
);


gsap.to("#heading",
    {
      x: "0%",
      opacity: 1,
      duration: 0.9,
      ease: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
   }
);


gsap.fromTo("#subHeading",
   {
      x: "0%",
      opacity: 0
   },
   {
      x: "0%",
      opacity: 1,
      duration: 0.9,
      ease: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
   }
);

gsap.to("#button",
   {
      y: "0%",
      opacity: 1,
      duration: 0.9,
      ease: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
   }
);
