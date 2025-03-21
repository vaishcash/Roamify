// import React from "react";
// import { Card } from "..";
// import { FaGlobeAfrica } from "react-icons/fa";
// import { CiHeart, CiMap } from "react-icons/ci";
// import { LiaBandcamp } from "react-icons/lia";

// import "./index.css";

// export const Features = () => {
//   return (
//     <>
//       <section className="section-feature  flex-wrap -skew-y-6">
//         <div className="cards-container  skew-y-6">
//           <Card
//             Icons={FaGlobeAfrica}
//             title={"Have a healthier Life"}
//             description={
//               "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, you need to be sure there isn anything embarrassing hidden in the middle of text."
//             }
//           />
//           <Card
//             Icons={LiaBandcamp}
//             title={"Have a healthier Life"}
//             description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
//           />
//           <Card
//             Icons={CiMap}
//             title={"Have a healthier Life"}
//             description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
//           />
//           <Card
//             Icons={CiHeart}
//             title={"Have a healthier Life"}
//             description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
//           />
//         </div>
//       </section>
//     </>
//   );
// };

import React from "react";
import { Card } from "..";

import { Shield, Heart, Plane, ChevronFirst as FirstAid } from "lucide-react";

import "./index.css";

export const Features = () => {
  return (
    <>
      <section className="section-feature flex-wrap -skew-y-6">
        <div className="cards-container skew-y-6">
          <Card
            Icons={Shield}
            title="Travel Protection"
            description="Comprehensive travel insurance covering trip cancellations, delays, and lost baggage. Up to $10,000 coverage for unexpected trip interruptions."
          />
          <Card
            Icons={Heart}
            title="Medical Coverage"
            description="24/7 emergency medical assistance worldwide. Coverage up to $100,000 for medical emergencies and evacuations during your journey."
          />
          <Card
            Icons={Plane}
            title="Flight Insurance"
            description="Protection against flight cancellations, delays, and missed connections. Includes accommodation and meal coverage during delays."
          />
          <Card
            Icons={FirstAid}
            title="Adventure Coverage"
            description="Special insurance for adventure activities including hiking, diving, and extreme sports. Includes equipment protection and rescue services."
          />
        </div>
      </section>
    </>
  );
};
