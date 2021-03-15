import { useEffect } from "react";
import LazyImage from "./LazyImage";

export default function Entries({
  loading,
  entries,
  activeGroup,
  setLoading,
}: any) {
  useEffect(() => {
    setLoading(false);
  }, [activeGroup, setLoading]);
  return (
    <div
      className="foto-container"
      style={{ display: loading ? "none" : "block" }}
    >
      {entries
        .filter((entry: any) => entry.group === activeGroup)
        .map((entry: any, i: number) => {
          return (
            <LazyImage entry={entry} key={`i${i}`} setLoading={setLoading} />
          );
        })}
      <div style={{ height: 200, width: "100%", background: "white" }}></div>
    </div>
  );
}
