gsap.fromTo("#background",
   {
      y: "-100%",
      opacity: 0
   },
   {
      y: "0%",
      opacity: 1,
      duration: 0.9,
      ease: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
   }
);


gsap.fromTo("#heading",
   {
      x: "-100%",
      opacity: 0
   },
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

gsap.fromTo("#button",
   {
      y: "100%",
      opacity: 0
   },
   {
      y: "0%",
      opacity: 1,
      duration: 0.9,
      ease: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
   }
);
