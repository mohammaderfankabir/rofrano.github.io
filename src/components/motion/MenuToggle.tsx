import * as motion from "motion/react-client";
import BarIcon from "../icons/BarIcon";

export function MenuToggle({ isActive }: { isActive: boolean }) {
  const variants = [
    {
      rest: { y: -4 },
      hover: { y: 0 },
    },
    {
      rest: { y: 0 },
      hover: { y: -4 },
    },
    {
      rest: { y: -4 },
      hover: { y: 0 },
    },
  ];

  return (
    <>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          initial="rest"
          animate={isActive ? "hover" : "rest"}
          variants={variants[index]}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            marginRight: index === 2 ? 0 : 5,
            display: "inline-block",
          }}
        >
          <BarIcon
            style={{
              width: 5,
              height: 20,
              display: "block",
            }}
          />
        </motion.div>
      ))}
    </>
  );
}
