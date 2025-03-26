import Image from "next/image";

export default function SplitScreenMask() {
  return (
    <>
      <div id="split-screen-mask">
        <main id="page-content" className="page-content">
          <article>
            <h1>Creating a Split Screen using a Mask</h1>
            <p>
              There are lots of ways of doing split screen in Sony Vegas.
              Probably the way most people do it is with the Pan/Crop tool. This
              makes sense if you don’t need to move the image around after it is
              cropped (i.e., the object you want to crop will remain at the same
              place on the screen after the crop).
            </p>
            <p>
              But what if you have two people who are in the center of the
              screen and you want them to be side-by-side? You could use
              Pan/Crop and then use Track Motion to move them to one side but
              there is an easier way using the Mask tool in Pan/Crop.
            </p>
            <p>
              Here is the problem: I have two subjects that are shot on a green
              screen. When shot they were standing dead center but in the
              composited shot I want them side by side.
            </p>
            <p>Here are the original clips:</p>
            <figure>
              <Image
                src="/split-screen-mask/splitscreen-mask-step-01-two-clips.avif"
                alt="Two clips"
                width={1800}
                height={1200}
              />
              <figcaption>Two clips</figcaption>
            </figure>
            <p>
              Let’s see how we can make a Mask and use Pan/Crop to place these
              clips side-by-side:
            </p>
            <ol>
              <li>
                <p>Place each clip on a separate track above each other.</p>
                <figure>
                  <Image
                    src="/split-screen-mask/splitscreen-mask-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select the <strong>Pan/Crop</strong> tool for the top track.
                </p>
                <figure>
                  <Image
                    src="/split-screen-mask/splitscreen-mask-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  In Pan/Crop enable the <strong>Mask</strong> tool by placing a
                  check mark next to the Mask track.
                </p>
                <figure>
                  <Image
                    src="/split-screen-mask/splitscreen-mask-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Draw a mask around your subject. If you feel that your lines
                  aren’t straight, just use the <strong>X</strong>,{" "}
                  <strong>Y</strong> parameters under <strong>Position</strong>{" "}
                  to ensure that the pairs of points are using the same values.
                </p>
                <figure>
                  <Image
                    src="/split-screen-mask/splitscreen-mask-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Click on the <strong>Position</strong> track (1) to highlight
                  it and reposition the frame [F] to the right side of the
                  screen (2). (<strong>hint:</strong> Pan/Crop works backwards
                  to by pushing the Frame to the right it moves the image left.)
                </p>
                <figure>
                  <Image
                    src="/split-screen-mask/splitscreen-mask-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Close the Pan/Crop tool and notice that you now have one of
                  your subjects in place in the Vegas Preview. We’re half way
                  there.
                </p>
                <figure>
                  <Image
                    src="/split-screen-mask/splitscreen-mask-step-07.avif"
                    alt="Step seven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seven</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Repeat steps <strong>2</strong> through <strong>5</strong> for
                  the second track to make a mask around the second subject.
                </p>
                <figure>
                  <Image
                    src="/split-screen-mask/splitscreen-mask-step-08.avif"
                    alt="Step eight"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eight</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select the <strong>Position</strong> track and move the{" "}
                  <strong>frame</strong> to the <strong>left</strong>side of the
                  screen which moves your subject to the right in the frame.
                </p>
                <figure>
                  <Image
                    src="/split-screen-mask/splitscreen-mask-step-09.avif"
                    alt="Step nine"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step nine</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Check your Vegas Preview window and tweak the Pan/Crop
                  movement until you achieve the desired effect.
                </p>
                <figure>
                  <Image
                    src="/split-screen-mask/splitscreen-mask-step-10.avif"
                    alt="Step ten"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step ten</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              If we were to really sell the illusion of these two subjects being
              side-by-side at the same time I would use a Chroma Key filter to
              key out the green backgrounds of each track individually and place
              a third track under them with a common background. I would
              probably also use Pan/Crop to zoom out a bit to make the subjects
              smaller and get them closer in the frame.
            </p>
            <p>Something like the shot below:</p>
            <figure>
              <Image
                src="/split-screen-mask/splitscreen-mask-step-11-final-ouput.avif"
                alt="Output"
                width={1800}
                height={1200}
              />
              <figcaption>Output</figcaption>
            </figure>
            <p>But we’ll leave that for another tutorial. 😉</p>
          </article>
        </main>
      </div>
    </>
  );
}
