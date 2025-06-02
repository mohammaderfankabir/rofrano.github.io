import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>3D Parent Motion</h1>
        <p>
          A nice 3D effect is the ability to have two videos fly through space
          parallel to each other. The secret to controlling multiple tracks in
          unison is to use Parent Motion. For this to work in 3D, all three
          tracks must be in 3D mode.
        </p>
      </section>
      <section>
        <ol>
          <li>
            <p>
              Press <kbd>Ctrl</kbd> + <kbd>Q</kbd> three times to add three
              tracks to the Vegas timeline. We’ll name these “3D Parent”, “Front
              Plane,” and “ Back Plane.”
            </p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-01-empty-tracks.avif"
                alt="Empty tracks"
                width={1800}
                height={1200}
              />
              <figcaption>Empty tracks</figcaption>
            </figure>
          </li>
          <li>
            <p>
              For this tutorial, we’ll add Sony Text Generated Media to each
              track and change the background color for better visibility. You
              can use any video if preferred.
            </p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-02-media-tracks.avif"
                alt="Media tracks"
                width={1800}
                height={1200}
              />
              <figcaption>Media tracks</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Next, change the compositing mode for all three tracks to 3D
              Source Alpha. Click the Composite Mode button in the track header
              and select 3D Source Alpha from the dropdown.
            </p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-03-composite-tracks.avif"
                alt="Composite tracks"
                width={1800}
                height={1200}
              />
              <figcaption>Composite tracks</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Your tracks should look like the image below with all three in 3D
              Composite Mode.
            </p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-04-text-tracks-3d.avif"
                alt="Text tracks 3d"
                width={1800}
                height={1200}
              />
              <figcaption>Text tracks 3d</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Once all three tracks are assigned 3D Source Alpha, go to the
              bottom track (Track 3), which holds the backplane. Click the Track
              Motion button on Track 3 and set the Z Position to 240 to push the
              video back into 3D space.
            </p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-05-track-motion.avif"
                alt="Track motion"
                width={1800}
                height={1200}
              />
              <figcaption>Track motion</figcaption>
            </figure>
          </li>
          <li>
            <p>
              To control tracks 2 and 3 together, make them children of track 1.
              Click the Make Compositing Child button in the track header for
              tracks 2 and 3.
            </p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-06-before.avif"
                alt="Parent mode before"
                width={1800}
                height={1200}
              />
              <figcaption>Parent mode before</figcaption>
            </figure>
            <p>Your tracks should now look like this:</p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-07-after.avif"
                alt="Parent mode after"
                width={1800}
                height={1200}
              />
              <figcaption>Parent mode after</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Next, click the “Parent Motion” button to open the Parent Motion
              window and control the child tracks.
            </p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-08-parent-motion.avif"
                alt="Parent motion"
                width={1800}
                height={1200}
              />
              <figcaption>Parent motion</figcaption>
            </figure>
          </li>
          <li>
            <p>
              In the Parent Track Motion window, select 3D Source Alpha from the
              dropdown in the upper left corner.
            </p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-09-parent-motion.avif"
                alt="Parent motion"
                width={1800}
                height={1200}
              />
              <figcaption>Parent motion</figcaption>
            </figure>
          </li>
          <li>
            <p>
              You can now spin the cube in the 3D space, and the two tracks will
              rotate together, maintaining a 240-unit distance in the Z-axis.
            </p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-10-3d-parent-motion.avif"
                alt="3d Parent motion"
                width={1800}
                height={1200}
              />
              <figcaption>3d Parent motion</figcaption>
            </figure>
            <p>Here is the preview window based on these settings</p>
            <figure>
              <Image
                src="/guide/video/parentmotion/parentmotion-11-preview.avif"
                alt="Preview"
                width={1800}
                height={1200}
              />
              <figcaption>Preview</figcaption>
            </figure>
            <p>
              That’s it! You can use this technique to create a cube of video
              and control all sides simultaneously with 3D Parent Motion. Here’s
              a short video I made using keyframes on the 3D Parent track.
            </p>
          </li>
        </ol>
        <p>
          <a href="/downloads/3DParentMotion.veg.tar" download>
            Here
          </a>{" "}
          is the link to the Vegas 6 project.
        </p>
      </section>
    </article>
  );
}
