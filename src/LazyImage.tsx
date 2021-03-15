import { useEffect, useRef, useState } from "react";

const placeholder =
  "data:/image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAACXBIWXMAAAsSAAALEgHS3X78AAAAjUlEQVQ4jZ2USw7AIAhEwfT+V6YxKQ3iTFBYGYXn8FE1M0GmqvDAzBTtP3nDASyAnS+KphMDIGD0HR2IK4rpD+Y4nVidEGx01CCjik7BrmrrWracHruAKmLBrG4lyCFVqiWo6pwbrVEExPU20V/Hj2rEIAvQn0hnlmLMryiP/K1t30j1+pnP9X8ELxGRF10abxXMXQpSAAAAAElFTkSuQmCC";
export default function LazyImage({ entry, setLoading }: any) {
  const imageRef = useRef() as any;
  const [visible, setVisible] = useState(false);
  const [src, setSrc] = useState("");

  let fullRes = "";
  if (entry.image.fields) {
    fullRes = entry.image.fields.file.url + "?w=1920";
  }
  useEffect(() => {
    let observer: any;

    if (IntersectionObserver && !visible) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              console.log(e.target);
              setVisible(true);
              setSrc(fullRes);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: "75%",
        }
      );
      observer.observe(imageRef.current);
    } else {
      setSrc(fullRes);
    }
    return () =>
      observer &&
      observer.unobserve &&
      imageRef &&
      imageRef.current &&
      observer.unobserve(imageRef.current);
  }, [visible, imageRef, fullRes]);
  return (
    <img
      className={`${src ? "loaded" : ""}`}
      ref={imageRef}
      style={{ display: "block" }}
      id={`${entry.title}`}
      alt={`${entry.title} is not loading for some reason`}
      src={!src ? placeholder : src}
      onLoad={() => {
        if (entry.image.fields) {
          // shitty force render for first load
          setLoading(false);
        }
      }}
    ></img>
  );
}
