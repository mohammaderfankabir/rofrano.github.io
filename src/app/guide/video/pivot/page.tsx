import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Changing Pivot Point in Vegas</h1>
        <p>
          This tutorial shows how to change the pivot point in 3D Track Motion
          in Sony Vegas Pro. Just turn off Editing in Object Space and move the
          pivot point. Here’s how:
        </p>
      </section>
      <section>
        <h2>Changing the Pivot Point</h2>
        <ol>
          <li>
            <p>
              Click “Track Motion” for the track you want to adjust in 3D space.
            </p>
            <figure>
              <Image
                src="/guide/video/pivot/pivot-01-track-motion.avif"
                alt="Track Motion"
                width={1800}
                height={1200}
              />
              <figcaption>Track Motion</figcaption>
            </figure>
          </li>
          <li>
            <p>
              In the Track Motion dialog, select 3D Source Alpha to put the
              track motion into 3D mode.
            </p>
            <figure>
              <Image
                src="/guide/video/pivot/pivot-02-alpha.avif"
                alt="3D Source Alpha"
                width={1800}
                height={1200}
              />
              <figcaption>3D Source Alpha</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Make sure Edit In Object Space is disabled. (i.e., not selected)
            </p>
            <figure>
              <Image
                src="/guide/video/pivot/pivot-03-object-spcae.avif"
                alt="Edit In Object Space"
                width={1800}
                height={1200}
              />
              <figcaption>Edit In Object Space</figcaption>
            </figure>
          </li>
          <li>
            <p>
              You’ll see a dot in the center of the frame. Move it to your
              desired position (e.g., to one side for a book page effect).
            </p>
            <figure>
              <Image
                src="/guide/video/pivot/pivot-04-move.avif"
                alt="Move Pivot"
                width={1800}
                height={1200}
              />
              <figcaption>Move Pivot</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Rotate the frame, and it will turn around the new pivot point at
              the edge.
            </p>
            <figure>
              <Image
                src="/guide/video/pivot/pivot-05-viewport.avif"
                alt="Viewport"
                width={1800}
                height={1200}
              />
              <figcaption>Viewport</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          That’s it! The key is to disable Edit In Object Space. Otherwise,
          edits will remain relative to the object’s center.
        </p>
      </section>
    </article>
  );
}
