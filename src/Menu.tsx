import { useState } from "react";
import { HAM } from "./HAM";

export default function Menu({ groups, setActiveGroup, activeGroup }: any) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const onSelectGroup = (group: string) => {
    setActiveGroup(group);
    setOpen(false);
  };
  return (
    <div className="menu">
      <div onClick={toggleOpen} className={`hamtainer ${open ? "open" : ""}`}>
        <HAM />
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu-section">
          <div className="mobile-menu-section-header">fotos.</div>
          <div className="mobile-menu-section-list">
            {groups.map((group: any) => (
              <div
                onClick={() => onSelectGroup(group)}
                className={`link ${group} ${
                  activeGroup === group ? "active" : ""
                }`}
                key={group}
              >
                {group}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
