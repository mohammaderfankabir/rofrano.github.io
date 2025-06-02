import * as motion from "motion/react-client";

import LogoIcon from "../icons/LogoIcon";

export function LogoGesture() {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <LogoIcon style={{ width: 40, height: "auto" }} />
    </motion.div>
  );
}

export default LogoGesture;
