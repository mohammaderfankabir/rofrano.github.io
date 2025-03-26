import Image from "next/image";

export default function ParentMotion() {
  return (
    <>
      <div id="3d-parent-motion">
        <main id="page-content" className="page-content">
          <article>
            <h1>3D Parent Motion</h1>
            <p>
              A nice 3D effect is the ability to have two videos fly through
              space parallel to each other. The secret to controlling multiple
              tracks in unison is to use Parent Motion. For this to work in 3D,
              all three tracks must be in 3D mode. Let’s see how it’s done.
            </p>
            <ol>
              <li>
                <p>
                  We start by pressing <strong>Ctrl+Q</strong> three times to
                  add three tracks to the Vegas timeline. We’ll name these “
                  <em>3D Parent</em>”, “<em>Front Plane</em>” and “
                  <em>Back Plane</em>”.
                </p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-01-empty-tracks.avif"
                    alt="Empty tracks"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Empty tracks</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  For this tutorial we will add Generated Media but you can use
                  any video you want. Let’s add a{" "}
                  <strong>Sony Text Generated Media</strong> on each track.
                  We’ll also change the background color of the Generated Media
                  Text to make it more easily identifiable.
                </p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-02-media-tracks.avif"
                    alt="Media tracks"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Media tracks</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Next we want to change the Compositing Mode for all three
                  tracks to <strong>3D Source Alpha</strong>. To do this{" "}
                  <strong>Press</strong> the <strong>Composite Mode</strong>{" "}
                  button in the track header and select <em>3D Source Alpha</em>{" "}
                  from the dropdown list.
                </p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-03-composite-tracks.avif"
                    alt="Composite tracks"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Composite tracks</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Your tracks should look like the image below with all three in
                  3D Composite Mode
                </p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-04-text-tracks-3d.avif"
                    alt="Text tracks 3d"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Text tracks 3d</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Now that all three tracks have Track Motion set to 3D Source
                  Alpha, let’s go back to the bottom track (3) which holds the
                  Back Plane and push it back in 3D space.{" "}
                  <strong>Press</strong> the <strong>Track Motion</strong>{" "}
                  button on track <strong>3</strong> and in the Track Motion
                  window, set the <strong>Z</strong> Position to{" "}
                  <strong>240</strong>. This will push the video for that track
                  back.
                </p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-05-track-motion.avif"
                    alt="Track motion"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Track motion</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Now to control the two tracks in unison we do two things.
                  First make tracks 2 &amp; 3 a child of track 1 using the{" "}
                  <strong>Make Compositing Child</strong> button for both
                  tracks. <strong>Press</strong> the{" "}
                  <strong>Make Compositing Child</strong> button in the track
                  header for tracks 2 &amp; 3.{" "}
                </p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-06-parent-mode-before.avif"
                    alt="Parent mode before"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Parent mode before</figcaption>
                </figure>
                <p>Your tracks should now look like this:</p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-07-parent-mode-after.avif"
                    alt="Parent mode after"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Parent mode after</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Next we need to use <strong>Parent Motion</strong> to control
                  the child tracks. <strong>Press</strong> the{" "}
                  <strong>Parent Motion</strong> button to bring up the Parent
                  Motion window.
                </p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-08-parent-motion.avif"
                    alt="Parent motion"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Parent motion</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  This brings up the <strong>Parent Track Motion</strong>{" "}
                  window. First place the interface in{" "}
                  <strong>3D Source Alpha</strong> mode by pressing the Source
                  Alpha selection dropdown in the upper left corner of the
                  interface and selecting <strong>3D Source Alpha</strong>.
                </p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-09-parent-motion.avif"
                    alt="Parent motion"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Parent motion</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Now you can spin the cube in the large window in 3D space and
                  your two tracks will spin about as well always maintaining 240
                  units of Z space between them.{" "}
                </p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-10-3d-parent-motion.avif"
                    alt="3d Parent motion"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>3d Parent motion</figcaption>
                </figure>
                <p>Here is the preview window based on these settings</p>
                <figure>
                  <Image
                    src="/3d-parent-motion/3d-parent-motion-step-11-preview.avif"
                    alt="Preview"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Preview</figcaption>
                </figure>
                <p>
                  That’s all their is to it. You should be able to use this same
                  technique to build things like a cube of video and control all
                  sides at the same time using 3D Parent Motion. Here is a small
                  video I made of this project using some keyframes on the 3D
                  Parent track.
                </p>
              </li>
            </ol>
            <p>
              Here is a link to the Vegas 6 project:{" "}
              <a href="/downloads/3d-parent-motion.tar">3DParentMotion.veg</a>{" "}
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
