import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Hidden DVD Menu Buttons</h1>
        <p>
          In DVD Architect, you can manually create buttons and link them to
          videos instead of using media files. To make a “secret” button (or
          “easter egg”), create an empty button, remove the text, leave the
          image blank, and link it to a video, and the video will play when
          someone presses ENTER on the DVD remote. (hint: This is how “Easter
          Eggs” are made on Hollywood DVD menus)
        </p>
      </section>
      <section>
        <ol>
          <li>
            <p>Go to Insert → Empty Button.</p>
            <figure>
              <Image
                src="/guide/video/secretbutton/secretbutton-01-empty-button.avif"
                alt="Empty Button"
                width={1800}
                height={1200}
              />
              <figcaption>Empty Button</figcaption>
            </figure>
            <p>
              Your menu should now look like this with an empty button with no
              image and the default text:
            </p>
            <figure>
              <Image
                src="/guide/video/secretbutton/secretbutton-02-menu.avif"
                alt="Menu 1"
                width={1800}
                height={1200}
              />
              <figcaption>Menu 1</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Next, remove the text by right-clicking the button and selecting
              “Image Only” from Button Style.
            </p>
            <figure>
              <Image
                src="/guide/video/secretbutton/secretbutton-03-button-style.avif"
                alt="Button Style"
                width={1800}
                height={1200}
              />
              <figcaption>Button Style</figcaption>
            </figure>
            <p>
              Your button should have no text, as shown below. If you preview
              your DVD, the button will remain highlighted. We’ll remove that in
              the next step.
            </p>
            <figure>
              <Image
                src="/guide/video/secretbutton/secretbutton-04-preview.avif"
                alt="Preview"
                width={1800}
                height={1200}
              />
              <figcaption>Preview</figcaption>
            </figure>
          </li>
          <li>
            <p>
              With the button selected, go to the Highlight property under
              Button Properties (on the right) and change the Style to Custom.
            </p>
            <figure>
              <Image
                src="/guide/video/secretbutton/secretbutton-05-button-properties.avif"
                alt="Button Properties"
                width={1800}
                height={1200}
              />
              <figcaption>Button Properties</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Now, insert your video by right-clicking the root of the DVD
              hierarchy (on the left) and selecting “Insert Media...”
              Alternatively, you can drag and drop a file from Explorer to the
              root of the DVD.
            </p>
            <figure>
              <Image
                src="/guide/video/secretbutton/secretbutton-06-untitled.avif"
                alt="Right-click the root of the DVD &gt; Select “Inset Media.”"
                width={1800}
                height={1200}
              />
              <figcaption>
                Right-click the root of the DVD and Select “Inset Media.”
              </figcaption>
            </figure>
          </li>
          <li>
            <p>Select the movie you want to link the button to and click OK.</p>
            <figure>
              <Image
                src="/guide/video/secretbutton/secretbutton-07-insert-media.avif"
                alt="Open your video."
                width={1800}
                height={1200}
              />
              <figcaption>Open your video</figcaption>
            </figure>
            <p>
              Your media will now appear in the hierarchy and is available for
              linking in the next step.
            </p>
            <figure>
              <Image
                src="/guide/video/secretbutton/secretbutton-08-tree.avif"
                alt="Your media is now available to link."
                width={1800}
                height={1200}
              />
              <figcaption>Your media is now available to link.</figcaption>
            </figure>
          </li>
          <li>
            <p>
              With the empty button selected, click the Action property under
              Button Properties. Notice the broken destination link, as no media
              is associated yet. We’ll fix this in the next step.
            </p>
            <figure>
              <Image
                src="/guide/video/secretbutton/secretbutton-09-button-properties.avif"
                alt="We need to fix the “Broken link.”"
                width={1800}
                height={1200}
              />
              <figcaption>We need to fix the “Broken link.”</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select Destination and change it from Broken Link to the name of
              your movie via the drop-down list.
            </p>
            <figure>
              <Image
                src="/guide/video/secretbutton/secretbutton-10-destination.avif"
                alt="Destination"
                width={1800}
                height={1200}
              />
              <figcaption>Destination</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          Below is a Before and After of the DVD tree showing the fixed link.
        </p>
        <figure>
          <Image
            src="/guide/video/secretbutton/secretbutton-11-before-after.avif"
            alt="Before After"
            width={1800}
            height={1200}
          />
          <figcaption>Before After</figcaption>
        </figure>
        <p>
          Your DVD menu now has an empty button linked to your video. You can
          assign an image to the button using the “Media button” under Button
          Properties or leave it empty for a “hidden” button.
        </p>
        <figure>
          <Image
            src="/guide/video/secretbutton/secretbutton-12-easter-egg.avif"
            alt="The empty Button now plays your movie."
            width={1800}
            height={1200}
          />
          <figcaption>The empty button now plays your movie.</figcaption>
        </figure>
        <p>
          DVD Architect supports drag-and-drop, so you could have dragged the
          media from the Explorer to the DVD root and then from the DVD root to
          the Destination to assign it to the button.
        </p>
        <p>
          There are multiple ways to accomplish a task in DVD Architect. You
          didn’t have to assign the button to play a video, as it could also
          assign it to a menu. Using empty buttons gives you control over DVD
          navigation.
        </p>
      </section>
    </article>
  );
}
