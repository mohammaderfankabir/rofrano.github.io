import Image from "next/image";

export default function AxogonLoopingBackgrounds() {
  return (
    <>
      <div id="axogon-looping-backgrounds">
        <main id="page-content" className="page-content">
          <article>
            <h1>Axogon Composer Looping Backgrounds</h1>
            <p>
              Axogon Composer beta 0.93 is the predecessor to Main Concept’s
              MainActor software. While MainActor has some additional features,
              Axogon Composer has most of them and is freely available and
              various download sites. (just check Google). If you find you like
              it, you might want to consider purchasing MainActor. Here is one
              site that has it:{" "}
              <a href="http://www.mediafire.com/?newunqejikw">MediaFire</a>
            </p>
            <h1 id="how-to-make-texture-loops-with-axogon-composer">
              How to make texture loops with Axogon Composer?
            </h1>
            <p>
              At first glance Axogon can be a bit overwhelming but it’s an
              extremely powerful compositor if you take the time to learn it.
            </p>
            <p>Here is how you make texture loops:</p>
            <p>
              Start by using <strong>File-&gt;New</strong> to create a new
              project that is the format you want and press OK. I use “
              <em>NTSC DV, 720 x 480</em>”. You will be presented with a blank
              timeline with one track that hasn’t been assigned.
            </p>
            <p>
              <strong>Step 1</strong>: Double clicking on the word{" "}
              <strong>Track 1</strong> on the left will bring up the preview
              window for that track. Every track has its own preview window.
              This one will have the title “<em>Track 1 Error</em>” because no
              clip has been assigned yet to preview. First move the preview
              window to the right so future dialog boxes won’t cover it. Now
              let’s fix the error by assigning a clip.
            </p>
            <figure>
              <Image
                src="/axogon-looping-backgrounds/axogon-step-01.avif"
                alt="Step one"
                width={1800}
                height={1200}
              />
              <figcaption>Step one</figcaption>
            </figure>
            <p>
              <strong>Step 2</strong>: Double clicking on the track itself (in
              the middle) will bring up a dialog with the title “
              <em>Choose Clip to Create</em>”.
            </p>
            <figure>
              <Image
                src="/axogon-looping-backgrounds/axogon-step-02.avif"
                alt="Step two"
                width={1800}
                height={1200}
              />
              <figcaption>Step two</figcaption>
            </figure>
            <p>
              <strong>Step 3</strong>: Double click on{" "}
              <strong>Complex Filtering</strong> to the options in that
              category.
            </p>
            <figure>
              <Image
                src="/axogon-looping-backgrounds/axogon-step-03.avif"
                alt="Step three"
                width={1800}
                height={1200}
              />
              <figcaption>Step three</figcaption>
            </figure>
            <p>
              <strong>Step 4</strong>: Double click on{" "}
              <strong>Image Processor</strong> and an image processor will be
              assigned to the track. You’ll see the <em>I-Proc</em>icon on the
              track.
            </p>
            <figure>
              <Image
                src="/axogon-looping-backgrounds/axogon-step-04.avif"
                alt="Step four"
                width={1800}
                height={1200}
              />
              <figcaption>Step four</figcaption>
            </figure>
            <p>
              <strong>Step 5</strong>: Double click on the{" "}
              <strong>I-Proc</strong> icon and you’ll get the IMAGE PROCESSOR
              dialog box and <em>click</em>
              the <strong>Random</strong> checkbox to enable random generation.
            </p>
            <figure>
              <Image
                src="/axogon-looping-backgrounds/axogon-step-05.avif"
                alt="Step five"
                width={1800}
                height={1200}
              />
              <figcaption>Step five</figcaption>
            </figure>
            <p>
              <strong>Step 6</strong>: Click the <strong>Generate</strong>{" "}
              button and you should see a colorful texture appear in the track
              preview window. Keep pressing Generate until you see one you like.
              You can view each frame by giving the preview window the focus and
              use the left and right arrow keys to view it on frame at a time.
              You can also move the green timeline marker but the clip will not
              play in real-time. It will refresh where ever you stop the marker.
            </p>
            <figure>
              <Image
                src="/axogon-looping-backgrounds/axogon-step-06.avif"
                alt="Step six"
                width={1800}
                height={1200}
              />
              <figcaption>Step six</figcaption>
            </figure>
            <p>If you like what it looks like, give it a render. Here’s how:</p>
            <p>
              Select the menu item <strong>Rendering-&gt;Render Options</strong>
              On the “<em>Rendering Options</em>” dialog select the{" "}
              <em>Format</em>,<em>Name</em>, and <em>Path</em> you want to use
              and press <strong>OK</strong>. Now would be a good time to save
              your project before rendering just in case you hit a bug. (after
              all, it is a beta). This is also a good idea because you can save
              the projects you like and render the actually footage only when
              you need it to save on hard drive space.
            </p>
            <p>
              Then just press the last button on the button bar below the menu
              that looks like a pressure cooker. The hint text will say Render.
              It’s that easy. I usually do a preview render at 320x240 using a
              fast codec just to make sure I like the loop before I do a full DV
              720x480 render which takes a lot longer.
            </p>
            <p>
              You can change the length of the loops by going into{" "}
              <strong>Time-&gt;Set Active Segment</strong> (which is also
              Ctrl-A) and change either the <em>TO</em> or the <em>LENGTH</em>{" "}
              on the <em>New Segment Ranges</em> panel to be the length you want
              and then press the <strong>Set</strong> button. That’s it!
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
