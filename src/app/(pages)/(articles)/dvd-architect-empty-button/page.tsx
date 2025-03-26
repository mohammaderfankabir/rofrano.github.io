import Image from "next/image";

export default function DvdArchitectEmptyButton() {
  return (
    <>
      <div id="dvd-architect-empty-button">
        <main id="page-content" className="page-content">
          <article>
            <h1>Hidden DVD Menu Buttons</h1>
            <p>
              Sometimes in DVD Architect you want to create your own buttons and
              link them videos manually instead of always dropping media files
              on menus to create buttons. In fact you can make a “secret” button
              (sometimes referred to as “easter eggs”) by creating an empty
              button, turning off the text, and not assigning it any image but
              linking it to a video so that the video plays when someone presses
              ENTER on their DVD remote. (hint: This is how “Easter Eggs” and
              made on Hollywood DVD menus)
            </p>
            <p>Here how it’s done:</p>
            <ol>
              <li>
                <p>
                  Choose the menu item <strong>Insert | Empty Button</strong>{" "}
                </p>
                <figure>
                  <Image
                    src="/dvd-architect-empty-button/empty-button-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
                <p>
                  Your menu should now look like this with an empty button with
                  no image and the default text:
                </p>
                <figure>
                  <Image
                    src="/dvd-architect-empty-button/empty-button-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
                <p>Next we will remove the text.</p>
              </li>
              <li>
                <p>
                  Right-click the button and select{" "}
                  <strong>Button Style | Image Only</strong>
                </p>
                <figure>
                  <Image
                    src="/dvd-architect-empty-button/empty-button-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
                <p>
                  Your button should now have the text removed like the picture
                  below. If you <strong>Preview</strong> your DVD you will still
                  see the button highlight. We’ll get rid of that in the next
                  step.:
                </p>
                <figure>
                  <Image
                    src="/dvd-architect-empty-button/empty-button-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  With the new button selected, click on{" "}
                  <strong>Highlight</strong> property under{" "}
                  <em>Button Properties</em> (on the right) and Change the{" "}
                  <strong>Style</strong> to <em>Custom</em>
                </p>
                <figure>
                  <Image
                    src="/dvd-architect-empty-button/empty-button-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Now let’s insert our video. <em>Right-click</em> on the root
                  of the DVD hierarchy pane (on the left) and choose{" "}
                  <strong>Insert Media…</strong> (note: you could also
                  drag-n-drop a file from the explorer to the root of the DVD
                  too)
                </p>
                <figure>
                  <Image
                    src="/dvd-architect-empty-button/empty-button-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Navigate to the movie you want to link the button to,
                  highlight it, and press <strong>OK</strong>
                </p>
                <figure>
                  <Image
                    src="/dvd-architect-empty-button/empty-button-step-07.avif"
                    alt="Step seven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seven</figcaption>
                </figure>
                <p>
                  Your media will now appear in the hierarchy and be available
                  in the DVD tree for linking to, which we’ll do in the next
                  step.
                </p>
                <figure>
                  <Image
                    src="/dvd-architect-empty-button/empty-button-step-08.avif"
                    alt="Step eight"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eight</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  With the Empty button selected, Click on{" "}
                  <strong>Action</strong> property under{" "}
                  <em>Button Properties</em>. Notice that the destination link
                  to the button is broken because we haven’t associated any
                  media with it yet. We will fix this in the next step.
                </p>
                <figure>
                  <Image
                    src="/dvd-architect-empty-button/empty-button-step-09.avif"
                    alt="Step nine"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step nine</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select <strong>Destination</strong> and change it from Broken
                  Link to the name of your movie via the drop-down list.
                </p>
                <figure>
                  <Image
                    src="/dvd-architect-empty-button/empty-button-step-10.avif"
                    alt="Step ten"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step ten</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              Below is a Before and After of the DVD tree showing that the
              broken link has been fixed.
            </p>
            <figure>
              <Image
                src="/dvd-architect-empty-button/empty-button-step-11.avif"
                alt="Step eleven"
                width={1800}
                height={1200}
              />
              <figcaption>Step eleven</figcaption>
            </figure>
            <p>
              Your DVD menu now has an empty button that links to your video.
              You can assign an image to the button using the{" "}
              <strong>Media</strong> button under <em>Button Properties</em> or
              leave it empty to have a “hidden” button (sometimes referred to as
              an “Easter egg”).
            </p>
            <figure>
              <Image
                src="/dvd-architect-empty-button/empty-button-step-12-result.avif"
                alt="Result"
                width={1800}
                height={1200}
              />
              <figcaption>Result</figcaption>
            </figure>
            <p>
              It is important to note that DVD Architect supports drag-n-drop so
              you could have dragged the media from the{" "}
              <strong>Explorer</strong> window to the DVD root and also dragged
              it from the DVD root over to the Destination and it would have be
              assigned to the button.
            </p>
            <p>
              There are always multiple ways of accomplishing a task in DVD
              Architect. Also, you did not have to assign this button to play a
              video. You could assign it to go to a menu too. Using Empty
              Buttons and assigning them yourselves gives you a lot of control
              over how your DVD navigates. Explore and have fun. Until next
              time…
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
