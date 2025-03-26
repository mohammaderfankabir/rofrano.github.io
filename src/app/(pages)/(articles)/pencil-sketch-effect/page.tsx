import Image from "next/image";

export default function PencilSketchEffect() {
  return (
    <>
      <div id="pencil-sketch-effect">
        <main id="page-content" className="page-content">
          <article>
            <h1>Make a Pencil Sketch</h1>
            <p>
              Sometimes a special effect can add that extra charm to a video
              piece. One that I like is the animated pencil sketch. This effect
              uses two video tracks containing the same video events, which are
              composited together in a parent / child relationship using a{" "}
              <strong>Bump Map</strong> with near maximum Intensity and Bump
              Height.
            </p>
            <h1 id="how-to-make-video-look-like-a-pencil-sketch-in-vegas">
              How to Make Video Look Like a Pencil Sketch in Vegas
            </h1>
            <p>Here are the step-by-step instructions:</p>
            <p>
              <strong>Step 1:</strong> Select the event you want to make a
              pencil sketch
            </p>
            <figure>
              <Image
                src="/pencil-sketch-effect/pencil-sketch-step-01.avif"
                alt="Step one"
                width={1800}
                height={1200}
              />
              <figcaption>Step one</figcaption>
            </figure>
            <p>
              <strong>Step 2:</strong> Add a{" "}
              <strong>Black &amp; White Video FX</strong> to the event and
              select the <em>100% Black and White</em> preset
            </p>
            <figure>
              <Image
                src="/pencil-sketch-effect/pencil-sketch-step-02.avif"
                alt="Step two"
                width={1800}
                height={1200}
              />
              <figcaption>Step two</figcaption>
            </figure>
            <p>
              <strong>Step 3:</strong> Duplicate the video by copying it to the
              track above it. You can just <em>right-click</em> on an empty part
              of the track and select <strong>Duplicate Track</strong> from the
              context menu.
            </p>
            <figure>
              <Image
                src="/pencil-sketch-effect/pencil-sketch-step-03.avif"
                alt="Step three"
                width={1800}
                height={1200}
              />
              <figcaption>Step three</figcaption>
            </figure>
            <p>
              <strong>Step 4:</strong> Enable the{" "}
              <strong>Make Compositing Child</strong> relationship between the
              two video tracks.
            </p>
            <figure>
              <Image
                src="/pencil-sketch-effect/pencil-sketch-step-04.avif"
                alt="Step four"
                width={1800}
                height={1200}
              />
              <figcaption>Step four</figcaption>
            </figure>
            <p>
              <strong>Step 5:</strong> Change the <em>Compositing Mode</em> of
              the upper track to <strong>Custom…</strong> and select{" "}
              <strong>Sony Bump Map</strong>. (this was called{" "}
              <em>Parent Overlay Mode</em> in Vegas 4)
            </p>
            <figure>
              <Image
                src="/pencil-sketch-effect/pencil-sketch-step-05.avif"
                alt="Step five"
                width={1800}
                height={1200}
              />
              <figcaption>Step five</figcaption>
            </figure>
            <p>
              <strong>Step 6:</strong> In the Bump Map dialog, increase the
              Intensity and Bump Height to close to maximum (depending on the
              image). Fine-tune these settings for the effect you want.
            </p>
            <figure>
              <Image
                src="/pencil-sketch-effect/pencil-sketch-step-06.avif"
                alt="Step six"
                width={1800}
                height={1200}
              />
              <figcaption>Step six</figcaption>
            </figure>
            <p>
              This should give you a pretty convincing pencil sketch look. For
              extra bonus points add a Brightness and Contrast filter after the
              Black and White filter on the lower video track and you can really
              control the amount of detail that’s left in the Bumped image. You
              can get it down to just outlines if you’d like. If you don’t use
              the Back and White filter it will look more like a pastel
              painting.
            </p>
            <figure>
              <Image
                src="/pencil-sketch-effect/pencil-sketch-step-07.avif"
                alt="Step seven"
                width={1800}
                height={1200}
              />
              <figcaption>Step seven</figcaption>
            </figure>
            <p>
              In these before and after shots below, you can see how you can
              bring out a nice textured effect as if a pencil was used on
              parchment paper. Those two handsome people are my beloved Mother
              and Father dancing at my wedding. Man, they loved to dance!
            </p>
            <figure>
              <Image
                src="/pencil-sketch-effect/pencil-sketch-step-08-final-output.avif"
                alt="Output"
                width={1800}
                height={1200}
              />
              <figcaption>Output</figcaption>
            </figure>
          </article>
        </main>
      </div>
    </>
  );
}
