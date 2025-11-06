export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" }
  }
});

export const staggerChildren = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
