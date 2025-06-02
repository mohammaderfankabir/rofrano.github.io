import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Track Motion Filmstrip</h1>
        <p>
          Sometimes, you need to move multiple Picture-in-Picture tracks
          together. It’s easy in Vegas using Parent Motion and Track Motion. In
          this example, we’ll resize clips to fit a film strip overlay with
          Track Motion and move the entire strip using Parent Motion.
        </p>
        <p>
          Download the project files from{" "}
          <a href="downloads/TrackMotion.tar" download>
            here
          </a>
          . I got the film strip from{" "}
          <a
            href="https://www.vegasusers.com/"
            title="Guide de référence pour découvrir Las Vegas !"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kelly Chien’s site
          </a>
          .
        </p>
      </section>
      <section>
        <ol>
          <li>
            <p>
              Drop the film strip overlay clip onto the Vegas timeline. Use any
              supported file format, but it’s easier if the dimensions match the
              picture (e.g., save just the strip, not a 720x480 file with
              embedded graphics).
            </p>
            <figure>
              <Image
                src="/guide/video/trackmotion/trackmotion-01-timeline.avif"
                alt="Vegas timeline"
                width={1800}
                height={1200}
              />
              <figcaption>Vegas timeline</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Add the first video clip above the Filmstrip if it has no
              transparency or below if you want the clips to show through a
              transparent hole. In this example, we place it above for easier
              positioning on the non-transparent Filmstrip. I’m using generated
              text media for this tutorial.
            </p>
            <figure>
              <Image
                src="/guide/video/trackmotion/trackmotion-02-add.avif"
                alt="Add Video Clip"
                width={1800}
                height={1200}
              />
              <figcaption>Add Video Clip</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Use Track Motion to resize the new video track so it fits within a
              single frame of the Filmstrip.
            </p>
            <figure>
              <Image
                src="/guide/video/trackmotion/trackmotion-03-resize.avif"
                alt="Track Motion"
                width={1800}
                height={1200}
              />
              <figcaption>Track Motion</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Reposition the track to align with the first frame of the
              Filmstrip.
            </p>
            <figure>
              <Image
                src="/guide/video/trackmotion/trackmotion-04-position.avif"
                alt="Position"
                width={1800}
                height={1200}
              />
              <figcaption>Position</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Repeat steps 2–4, adding each new track to the top layer. A
              shortcut for getting all your video clips to a consistent size is
              to copy and paste the first Track Motion keyframe into each new
              track.
            </p>
            <figure>
              <Image
                src="/guide/video/trackmotion/trackmotion-05-copy-paste.avif"
                alt="Move the frame over and paste the keyframe."
                width={1800}
                height={1200}
              />
              <figcaption>
                Move the frame over and paste the keyframe.
              </figcaption>
            </figure>
          </li>
          <li>
            <p>
              Once all tracks are resized and repositioned in the Filmstrip, add
              the Parent Composite track for the final Parent Motion. Insert a
              new Video Track, highlight all existing tracks, and click the Make
              Compositing Child arrow to make them children of the parent track.
            </p>
            <figure>
              <Image
                src="/guide/video/trackmotion/trackmotion-06-compositing-child.avif"
                alt="Make Compositing Child"
                width={1800}
                height={1200}
              />
              <figcaption>Make Compositing Child</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select Parent Motion to apply movement to all child tracks.
              Position the Filmstrip with the child tracks at the bottom of the
              frame and notice they move together.
            </p>
            <figure>
              <Image
                src="/guide/video/trackmotion/trackmotion-07-parent-motion.avif"
                alt="Parent Motion"
                width={1800}
                height={1200}
              />
              <figcaption>Parent Motion</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Keyframe the motion to move the Filmstrip across the frame. In the
              first keyframe, position the frame at the right. Then, move the
              timeline cursor to the desired endpoint and the frame to the left
              to create a second keyframe.
            </p>
            <figure>
              <Image
                src="/guide/video/trackmotion/trackmotion-08-ptmp.avif"
                alt="Parent Track Motion - Panel"
                width={1800}
                height={1200}
              />
              <figcaption>Parent Track Motion - Panel</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          In the final product, I duplicated the composite track and its
          children, then offset them to create the illusion of a longer
          Filmstrip (and when you’re making movies, illusion equals reality).
          Select the Parent track, then hold <kbd>Shift</kbd> and select the
          last child. Right-click and choose Duplicate Track. Then, offset the
          tracks in time to make them follow each other seamlessly.
        </p>
        <figure>
          <video controls>
            <source
              src="/guide/video/trackmotion/trackmotion.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <figcaption>finished product</figcaption>
        </figure>
        <p>
          Using Track Motion on the entire track ensures that added media
          maintains the correct size and position in the right filmstrip box.
        </p>
      </section>
    </article>
  );
}
