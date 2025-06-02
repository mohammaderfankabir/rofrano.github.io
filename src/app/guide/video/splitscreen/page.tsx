import Image from "next/image";
import { ProTip } from "@/components/ui";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Creating a Split Screen using a Mask</h1>
        <p>
          There are many ways to create a split screen in Sony Vegas. The most
          common method is the Pan/Crop tool, which works well if the cropped
          image stays in place.
        </p>
        <p>
          However, If you have two people in the center of the screen and want
          them side-by-side, you could use Pan/Crop and Track Motion, but using
          the Mask tool in Pan/Crop is easier.
        </p>
        <p>Here are the original clips:</p>
        <figure>
          <Image
            src="/guide/video/splitscreen/splitscreen-01-two-clips.avif"
            alt="Two clips"
            width={1800}
            height={1200}
          />
          <figcaption>Two clips</figcaption>
        </figure>
      </section>
      <section>
        <ol>
          <li>
            <p>
              Start by positioning each clip on a separate track, one above the
              other.
            </p>
            <figure>
              <Image
                src="/guide/video/splitscreen/splitscreen-02-separate-track.avif"
                alt="Separate Track"
                width={1800}
                height={1200}
              />
              <figcaption>Separate Track</figcaption>
            </figure>
          </li>
          <li>
            <p>Select the Pan/Crop tool for the top track.</p>
            <figure>
              <Image
                src="/guide/video/splitscreen/splitscreen-03-pan-crop.avif"
                alt="Pan/Crop"
                width={1800}
                height={1200}
              />
              <figcaption>Pan/Crop</figcaption>
            </figure>
          </li>
          <li>
            <p>Check the Mask box in Pan/Crop to enable the Mask tool.</p>
            <figure>
              <Image
                src="/guide/video/splitscreen/splitscreen-04-mask.avif"
                alt="Mask Tool"
                width={1800}
                height={1200}
              />
              <figcaption>Mask Tool</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Draw a mask around your subject. If the lines aren’t straight,
              adjust the X and Y values positions to match the point pairs.
            </p>
            <figure>
              <Image
                src="/guide/video/splitscreen/splitscreen-05-pan-crop.avif"
                alt="Create a mask using the pen tool."
                width={1800}
                height={1200}
              />
              <figcaption>Create a mask using the pen tool.</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Click on the “Position track (1)” to highlight it and reposition
              the frame [F] to the right side of the screen (2).
            </p>
            <ProTip>
              Pan/Crop moves the image left when you push the frame to the
              right.
            </ProTip>
            <figure>
              <Image
                src="/guide/video/splitscreen/splitscreen-06-position.avif"
                alt="Reposition the frame."
                width={1800}
                height={1200}
              />
              <figcaption>Reposition the frame.</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Close the Pan/Crop tool, and you’ll see one subject in place in
              the preview. We’re halfway there.
            </p>
            <figure>
              <Image
                src="/guide/video/splitscreen/splitscreen-07-video-preview.avif"
                alt="Video Preview"
                width={1800}
                height={1200}
              />
              <figcaption>Video Preview</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Repeat steps 2 through 5 for the second track to make a mask
              around the second subject.
            </p>
            <figure>
              <Image
                src="/guide/video/splitscreen/splitscreen-08-repeat.avif"
                alt="Event Pan/Crop"
                width={1800}
                height={1200}
              />
              <figcaption>Event Pan/Crop</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select the Position track and move the frame to the left side of
              the screen, which moves your subject to the right in the frame.
            </p>
            <figure>
              <Image
                src="/guide/video/splitscreen/splitscreen-09-position.avif"
                alt="Reposition the frame."
                width={1800}
                height={1200}
              />
              <figcaption>Reposition the frame.</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Check the preview and adjust the Pan/Crop movement until you
              achieve the desired effect.
            </p>
            <figure>
              <Image
                src="/guide/video/splitscreen/splitscreen-10-video-preview.avif"
                alt="Video Preview"
                width={1800}
                height={1200}
              />
              <figcaption>Video Preview</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          If we were to sell the illusion of the two subjects side-by-side, I
          used a Chroma Key filter to remove the green backgrounds from each
          track and added a third track with a common background. I also used
          Pan/Crop to zoom out, making the subjects smaller and closer together
          in the frame.
        </p>
        <p>Something like the shot below:</p>
        <figure>
          <Image
            src="/guide/video/splitscreen/splitscreen-11-final-artwork.avif"
            alt="Final Artwork"
            width={1800}
            height={1200}
          />
          <figcaption>Final Artwork</figcaption>
        </figure>
        <p>But we’ll leave that for another tutorial. 😉</p>
      </section>
    </article>
  );
}
