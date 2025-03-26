import Image from "next/image";

export default function TrackMotionPivot() {
  return (
    <>
      <div id="3d-track-motion-pivot">
        <main id="page-content" className="page-content">
          <article>
            <h1>3D Track Motion Pivot</h1>
            <h1 id="changing-the-pivot-point">Changing the Pivot Point</h1>
            <p>
              This tutorial shows you how to change the pivot point of a frame
              in 3D Track Motion using Sony Vegas Pro . Changing the pivot point
              is quite simple. It’s done by turning off{" "}
              <strong>Editing in Object Space</strong> and then moving the pivot
              point. Here is how its done:
            </p>
            <ol>
              <li>
                <p>
                  Click on Track Motion for the track you want to pivot in 3D
                  space
                </p>
                <figure>
                  <Image
                    src="/3d-track-motion-pivot/3d-pivot-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  In the Track Motion dialog, select{" "}
                  <strong>3D Source Alpha</strong> to put the track motion into
                  3D mode.
                </p>
                <figure>
                  <Image
                    src="/3d-track-motion-pivot/3d-pivot-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Make sure Edit In Object Space is disabled. (i.e., not
                  selected)
                </p>
                <figure>
                  <Image
                    src="/3d-track-motion-pivot/3d-pivot-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  You will see a dot in the center of the frame in the
                  Perspective view window. Move this dot to where ever you want.
                  (off to one side if you want it to turn like a book page)
                </p>
                <figure>
                  <Image
                    src="/3d-track-motion-pivot/3d-pivot-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
                <figure>
                  <Image
                    src="/3d-track-motion-pivot/3d-pivot-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Now when you rotate your frame, it will rotate around the new
                  pivot point at the edge of the page.
                </p>
                <figure>
                  <Image
                    src="/3d-track-motion-pivot/3d-pivot-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              That’s all there is to it. The key it to disable{" "}
              <strong>Edit In Object Space</strong>. Otherwise the edits will
              always be relative to the center of the object you are
              manipulating.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
