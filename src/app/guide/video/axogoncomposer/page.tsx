import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Axogon Composer Looping Backgrounds</h1>
        <p>
          Axogon Composer beta 0.93 is the predecessor to Main Concept’s
          MainActor software. While MainActor has some additional features,
          Axogon Composer has most of them and is freely available. Download it{" "}
          <a
            href="http://www.mediafire.com/?newunqejikw"
            title="axcom093"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </section>
      <section>
        <h2>How to make texture loops with Axogon Composer?</h2>
        <p>
          At first glance, Axogon can be overwhelming, but it’s an extremely
          powerful compositor if you learn it.
        </p>
        <ol>
          <li>
            <p>Here is how you make texture loops:</p>
            <p>
              Start by using File → New to create a new project that is the
              format you want, and press OK. I use “ NTSC DV, 720 x 480”. You’ll
              see a blank timeline with one unassigned track.
            </p>
            <p>
              Double-clicking on the word Track 1 on the left will bring up the
              preview window for that track. Every track has its preview window.
              This one’s title is “ Track 1 Error” because no clip is available
              for preview. First, move the preview window to the right so future
              dialog boxes won’t cover it. Let’s fix the error by assigning a
              clip.
            </p>
            <figure>
              <Image
                src="/guide/video/axogoncomposer/axogoncomposer-01-open-preview.avif"
                alt="Open Preview"
                width={1800}
                height={1200}
              />
              <figcaption>Open Preview</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Double-clicking the track itself (in the middle) will bring up a
              dialog with the title “Choose Clip to Create.”
            </p>
            <figure>
              <Image
                src="/guide/video/axogoncomposer/axogoncomposer-02-choose-clip.avif"
                alt="Choose Clip"
                width={1800}
                height={1200}
              />
              <figcaption>Choose Clip</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Double-click on “Complex Filtering” in the options in that
              category.
            </p>
            <figure>
              <Image
                src="/guide/video/axogoncomposer/axogoncomposer-03-complex-filtering.avif"
                alt="Complex Filtering"
                width={1800}
                height={1200}
              />
              <figcaption>Complex Filtering</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Double-click the “Image Processor” to assign it to the track.
              You’ll see the I-Proc icon on the track.
            </p>
            <figure>
              <Image
                src="/guide/video/axogoncomposer/axogoncomposer-04-image-processor.avif"
                alt="Image Processor"
                width={1800}
                height={1200}
              />
              <figcaption>Image Processor</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Double-click the I-Proc icon to open IMAGE PROCESSOR dialog box,
              and check the Random checkbox to enable random generation.
            </p>
            <figure>
              <Image
                src="/guide/video/axogoncomposer/axogoncomposer-05-random-generation.avif"
                alt="Random Generation"
                width={1800}
                height={1200}
              />
              <figcaption>Random Generation</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Click the Generate button, and a colorful texture should appear in
              the track preview window. Keep pressing Generate until you see one
              you like. You can view each frame by giving the preview window the
              focus and using the left and right arrow keys to view it one frame
              at a time. You can also move the green timeline marker, but the
              clip will not play in real-time. It will refresh wherever you stop
              the marker.
            </p>
            <figure>
              <Image
                src="/guide/video/axogoncomposer/axogoncomposer-06-texture-preview.avif"
                alt="Texture Preview"
                width={1800}
                height={1200}
              />
              <figcaption>Texture Preview</figcaption>
            </figure>
          </li>
        </ol>
        <p>If you like what it looks like, give it a render. Here’s how:</p>
        <p>
          Select the menu item Rendering → Render Options In the “Rendering
          Options,” select the format, name, and path, then press OK. Save
          before rendering to avoid losing work. (after all, it is a beta). It
          is also a good idea because you can save the projects you like and
          render the actual footage only when needed to save on hard drive
          space.
        </p>
        <p>
          Then, press the last button in the toolbar below the menu—that looks
          like a pressure cooker. The hint text will say, Render. It’s that
          easy. I usually do a preview render at 320x240 using a fast codec to
          ensure I like it before I do a full DV 720x480 render that takes much
          longer.
        </p>
        <p>
          You can change the length of the loops by going into Time → Set Active
          Segment (which is also <kbd>Ctrl</kbd> + <kbd>A</kbd>) and change
          either the TO or the LENGTH on the “New Segment Ranges” panel to be
          the length you want and then press the Set button. That’s it!
        </p>
      </section>
    </article>
  );
}
