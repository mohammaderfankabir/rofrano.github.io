import Image from "next/image";

export default function WatercolorEffect() {
  return (
    <>
      <div id="watercolor-effect">
        <main id="page-content" className="page-content">
          <article>
            <h1>Turn Video into a Water Color Painting</h1>
            <p>
              You know how water color paintings have nice defined black ink
              lines with color that splashes in and outside those lines. I
              though it would be nice if you could do that with video so here’s
              a little tutorial on how to achieve that effect in 5 easy steps
              using Sony Vegas.
            </p>
            <h1 id="how-to-create-a-watercolor-effect-in-vegas-pro">
              How to create a Watercolor effect in Vegas Pro
            </h1>
            <ol>
              <li>
                <p>
                  Duplicate your video on two tracks. The quickest way is to{" "}
                  <em>right-click</em> in an empty area of the video track and
                  select <strong>Duplicate Track</strong>. We are going to
                  composite these tracks together later. I have moved the video
                  preview in these pictures so you can see what’s happening as
                  we apply each effect.
                </p>
                <figure>
                  <Image
                    src="/watercolor-effect/watercolor-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  On the bottom track add the Video FX{" "}
                  <strong>Sony Median</strong> and apply the{" "}
                  <strong>50%</strong> preset. This will give us a nice blur so
                  that the colors are more solid and the edges are less defined.
                  (note: I’ve soloed the track to show you the effect in the
                  picture. You wouldn’t normally see any change because the
                  bottom track is hidden by the top track until we change the
                  composite mode)
                </p>
                <figure>
                  <Image
                    src="/watercolor-effect/watercolor-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  On the top track add the Video FX{" "}
                  <strong>Sony Convolution Kernel</strong> and apply the{" "}
                  <strong>Find Edges</strong> preset. This outlines all the
                  edges in the video. The problem is that the edges are white
                  and the background is black. Because we want to use this as a
                  mask, we will reverse this in the next step.
                </p>
                <figure>
                  <Image
                    src="/watercolor-effect/watercolor-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  On the top track add the Video FX <strong>Sony Invert</strong>{" "}
                  and apply the <strong>100% Inversion</strong> preset. Now the
                  edges are black and the background is white. This will make a
                  perfect mask to be used in our final step.
                </p>
                <figure>
                  <Image
                    src="/watercolor-effect/watercolor-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Change the <strong>Compositing Mode</strong> on the top track
                  to <strong>Multiply (Mask)</strong>. Now the bottom track
                  shows through to give us our final result.
                </p>
                <figure>
                  <Image
                    src="/watercolor-effect/watercolor-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              As you can see from the final result below, our video now looks
              like a water color painting. Look at the definition in the pen
              strokes of the microphone and speaker. Notice how the color is
              messy (not within the lines) just like a water color painting.
              It’s almost cartoon like.
            </p>
            <figure>
              <Image
                src="/watercolor-effect/watercolor-step-06.avif"
                alt="Step six"
                width={1800}
                height={1200}
              />
              <figcaption>Step six</figcaption>
            </figure>
            <p>
              Don’t be afraid to take this and fine tune it to your media. Try
              different median settings for the water colors and experiment
              until it looks the way you want.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
