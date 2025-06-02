import Image from "next/image";
import { HeadsUp } from "@/components/ui";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Turn the Video into a Water Color Painting</h1>
        <p>
          Watercolor paintings often feature defined black ink lines with color
          splashing inside and outside. In this tutorial, I’ll show you how to
          create a similar effect in video in Vegas.
        </p>
      </section>
      <section>
        <h2>How to create a Watercolor Effect in Vegas Pro</h2>
        <ol>
          <li>
            <p>
              Duplicate your video on two tracks. The quickest way is to
              right-click in an empty area on the video track and select
              Duplicate Track.
            </p>
            <figure>
              <Image
                src="/guide/video/watercolor/watercolor-01-duplicate-video.avif"
                alt="Duplicate Video"
                width={1800}
                height={1200}
              />
              <figcaption>Duplicate Video</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Add the Sony Median effect to the bottom track and apply the 50%
              preset to create a soft blur. It makes the colors more uniform and
              the edges less defined.
            </p>
            <HeadsUp>
              I’ve soloed the track to show you the effect in the picture. You
              wouldn’t normally see any change because the bottom track is
              hidden by the top track until we change the composite mode
            </HeadsUp>
            <figure>
              <Image
                src="/guide/video/watercolor/watercolor-02-apply-blur.avif"
                alt="Apply Blur"
                width={1800}
                height={1200}
              />
              <figcaption>Apply Blur</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Add the Sony Convolution Kernel effect to the top track and apply
              the Find Edges preset to outline all the edges in the video.
              However, the edges are white, and the background is black. Since
              we want to use this as a mask, we’ll invert it in the next step.
            </p>
            <figure>
              <Image
                src="/guide/video/watercolor/watercolor-03-conv2d.avif"
                alt="Convolution Kernel"
                width={1800}
                height={1200}
              />
              <figcaption>Convolution Kernel</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Apply the Sony Invert effect to the top track using the 100%
              Inversion preset to invert colors.
            </p>
            <figure>
              <Image
                src="/guide/video/watercolor/watercolor-04-mask.avif"
                alt="Mask"
                width={1800}
                height={1200}
              />
              <figcaption>Mask</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Change the Compositing Mode of the top track to Multiply (Mask) to
              reveal the bottom track.
            </p>
            <figure>
              <Image
                src="/guide/video/watercolor/watercolor-05-multiply.avif"
                alt="Multiply (Mask)"
                width={1800}
                height={1200}
              />
              <figcaption>Multiply (Mask)</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          The video now resembles a watercolor painting, with sharp pen strokes
          and colors that bleed beyond the lines for a loose, cartoon-like
          effect.
        </p>
        <figure>
          <Image
            src="/guide/video/watercolor/watercolor-06-video-preview.avif"
            alt="Video Preview"
            width={1800}
            height={1200}
          />
          <figcaption>Video Preview</figcaption>
        </figure>
        <p>
          Adjust the settings and experiment with median values to get the best
          result.
        </p>
      </section>
    </article>
  );
}
