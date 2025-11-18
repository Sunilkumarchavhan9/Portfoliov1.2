"use client";

import { HyperText } from "@/components/ui/hyper-text";
import{motion} from "framer-motion";

export default function JinxSunilChavhn(){
    return(
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center w-full lg:w-auto">
        <motion.img
          src="jinxv.png"
          className="h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        />

        <HyperText className="relative bottom-10 text-xl sm:text-2xl font-semibold text-[#001cf0] text-center" startOnView={true}>
          JiNx-SunilChavhan
        </HyperText>
      </div>
        </div>
    )
}