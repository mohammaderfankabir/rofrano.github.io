import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Make a Pencil Sketch</h1>
        <p>
          Special effects can enhance a video, like an animated pencil sketch.
          It uses two video tracks with similar footage, composited in a
          parent/child relationship, and a Bump Map with high Intensity and Bump
          Height.
        </p>
      </section>
      <section>
        <ol>
          <li>
            <p>
              Select the event you want to make a pencil sketch and follow these
              step-by-step instructions.
            </p>
            <figure>
              <Image
                src="/guide/video/pencilsketch/pencilsketch-01-choose-event.avif"
                alt="New Event"
                width={1800}
                height={1200}
              />
              <figcaption>New Event</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Add a Black & White Video FX to the event and select the 100%
              Black and White preset.
            </p>
            <figure>
              <Image
                src="/guide/video/pencilsketch/pencilsketch-02-monochrome.avif"
                alt="Black and White"
                width={1800}
                height={1200}
              />
              <figcaption>Black and White</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Duplicate the video to the track above by right-clicking an empty
              area and selecting “Duplicate Track” from the context menu.
            </p>
            <figure>
              <Image
                src="/guide/video/pencilsketch/pencilsketch-03-duplicate-track.avif"
                alt="Duplicate Track"
                width={1800}
                height={1200}
              />
              <figcaption>Duplicate Track</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Enable the Make Compositing Child relationship between the two
              video tracks.
            </p>
            <figure>
              <Image
                src="/guide/video/pencilsketch/pencilsketch-04-relationship.avif"
                alt="Make Compositing Child"
                width={1800}
                height={1200}
              />
              <figcaption>Make Compositing Child</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Change the compositing mode of the upper track to “Custom…” and
              select Sony Bump Map.
            </p>
            <figure>
              <Image
                src="/guide/video/pencilsketch/pencilsketch-05-bump-map.avif"
                alt="Sony Bump Map"
                width={1800}
                height={1200}
              />
              <figcaption>Sony Bump Map</figcaption>
            </figure>
          </li>
          <li>
            <p>
              In the Bump Map dialog, increase the Intensity and Bump Height to
              near maximum, adjusting for the desired effect.
            </p>
            <figure>
              <Image
                src="/guide/video/pencilsketch/pencilsketch-06-fine-tune.avif"
                alt="Fine-tune"
                width={1800}
                height={1200}
              />
              <figcaption>Fine-tune</figcaption>
            </figure>
          </li>
          <p>
            It should give you a convincing pencil sketch look. For more
            control, add a Brightness and Contrast filter after the Black and
            White filter on the lower track to adjust the detail, even reducing
            it to outlines. Without the Black and White filter, it will resemble
            a pastel painting.
          </p>
          <figure>
            <Image
              src="/guide/video/pencilsketch/pencilsketch-07-video-track-fx.avif"
              alt="Video Track FX"
              width={1800}
              height={1200}
            />
            <figcaption>Video Track FX</figcaption>
          </figure>
        </ol>
        <p>
          This before and after shot shows how to achieve a textured effect,
          like a pencil on parchment paper. The two people are my parents
          dancing at my wedding—they loved to dance!
        </p>
        <figure>
          <Image
            src="/guide/video/pencilsketch/pencilsketch-08-output.avif"
            alt="Output"
            width={1800}
            height={1200}
          />
          <figcaption>Output</figcaption>
        </figure>
      </section>
    </article>
  );
}
