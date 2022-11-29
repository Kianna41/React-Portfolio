import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div>
      <div class="footerSection w-screen bg-black p-3">
        <div className="footerIcons">
          <SocialIcon
            url="https://linkedin.com/in/kianna-reid-7715a3242/"
            bgColor="orange"
          />
          <SocialIcon
            url="https://github.com/Kianna41"
            bgColor="orange"
            style={{ padding: 10, margin: 25 }}
          />
          <SocialIcon
            url="https://twitter.com/youngmomdiaries"
            bgColor="orange"
            style={{ padding: 10 }}
          />
        </div>
      </div>
    </div>
  );
}
