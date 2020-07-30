import { useRef, useEffect } from "react";

// import Alert from '../components/alert'
import Footer from "./footer";
import Meta from "./meta";

import { TweenLite, Power3 } from "gsap";

export default function Layout({ preview, children }) {
  let html = useRef(null);
  let body = useRef(null);
  let scrollRef = useRef(null);

  useEffect(() => {
    // var html = document.documentElement;
    // var body = document.body;
    console.log(html)
    console.log(body)

    var scroller = {
      target: scrollRef,
      ease: 0.09, // <= scroll speed
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
    };

    var requestId = null;

    TweenLite.set(scroller.target, {
      rotation: 0.01,
      force3D: true,
    });

    window.addEventListener("load", onLoad);

    function onLoad() {
      updateScroller();
      window.focus();
      window.addEventListener("resize", onResize);
      document.addEventListener("scroll", onScroll);
    }

    function updateScroller() {
      var resized = scroller.resizeRequest > 0;

      if (resized) {
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
      }

      var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }

      TweenLite.set(scroller.target, {
        y: -scroller.y,
      });

      requestId =
        scroller.scrollRequest > 0
          ? requestAnimationFrame(updateScroller)
          : null;
    }

    function onScroll() {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }

    function onResize() {
      scroller.resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }
  }, []);

  return (
    <>
      <div ref={(el) => { html = el; }}>
        <Meta />
        <div ref={(el) => { body = el; }}>
          <div
            className="min-h-screen"
            style={{ backgroundImage: `url(assets/images/grid.png)`}}
            id="scroll-container"
            ref={(el) => { scrollRef = el; }}
          >
            {/* <Alert preview={preview} /> */}
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
