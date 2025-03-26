import Image from "next/image";

export default function SwishmaxFlashTitles() {
  return (
    <>
      <div id="swishmax-flash-titles">
        <main id="page-content" className="page-content">
          <article>
            <h1>How to make an animated title in Vegas using SWISHmax</h1>
            <p>
              There are times when you need a quick animated title in Vegas but
              don’t have time to do a lot of keyframing. Luckily, Vegas supports
              Flash SWF files which means, you can make animated titles in any
              Flash tool and drop the SWF file in Vegas.
            </p>
            <p>Here’s how you do it.</p>
            <p>
              I’m using SWISHmax for this tutorial but any Flash tool that
              supports the export of SWF files will do:
            </p>
            <ol>
              <li>
                <p>Open SWISHmax and select Start a new empty movie.</p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  This opens up the SWISHmax interface. In the image below I’ve
                  highlighted all of the major areas that we will use in this
                  tutorial.
                </p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  In the attribute area (right side), select the{" "}
                  <strong>Movie</strong> tab and set your movie up for the video
                  dimensions of your project. I’m using NTSC which is 720x480
                  with a pixel aspect ratio of 0.9091. Because Flash uses a
                  pixel aspect ratio of 1.000 we enter enter{" "}
                  <strong>655</strong> width, <strong>480</strong> height to
                  compensate. I’ve also used
                  <strong>30</strong> fps, with a black background.
                </p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select the <strong>Text</strong> tool so that we can add some
                  text for our title. This will add a Text tab to the properties
                  on the right.
                </p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Go to the <strong>Text</strong> tab and set your{" "}
                  <em>color</em>, <em>font</em>, etc. and the <em>text</em> you
                  want for your title. I’ve selected the OCRATTRegular font
                  because it looks like the early computer fonts before Windows
                  was popular. I’ve also selected green as the color because
                  most old computers had green-screens. We associate
                  green-screens and OCR fonts with computers terminals.
                </p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  With the <strong>Text Tool</strong> selected, drag your cursor
                  to position the text in the video area. You are just
                  positioning the width. SWISHmax will take care of the height,
                  which you can adjust later.
                </p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Your text may look perfect at this point but what if it
                  doesn’t. In this example the text did not flow the same as we
                  wrote it in the Text Properties.
                </p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-07.avif"
                    alt="Step seven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seven</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  To adjust the text flow and not the size you use the green
                  diamonds on the text box. The green diamonds will{" "}
                  <strong>reflow</strong> the text. The white squares will
                  <strong>resize</strong> the text.
                </p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-08.avif"
                    alt="Step eight"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eight</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Use the <strong>Add Effects</strong> button to add an{" "}
                  <strong>Appear into position</strong> effect and select{" "}
                  <strong>Typewriter – Slow</strong>.
                </p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-09.avif"
                    alt="Step nine"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step nine</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  You can press <strong>Play</strong> to watch your title
                  animate and make any adjustments before exporting it. I didn’t
                  like the text being centered so I changed it to Left Justify
                  to look more like a computer terminal.
                </p>
              </li>
              <li>
                <p>
                  Use <strong>File &gt; Export</strong> to export your title to{" "}
                  <strong>SWF</strong> format. This is a format that Vegas 5+
                  can use directly.
                </p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-11.avif"
                    alt="Step eleven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eleven</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Now just drag-n-drop the SWF file onto the Vegas timeline and
                  you have an animated title. Vegas will automatically detect
                  the alpha channel and apply the correct transparency.
                </p>
                <figure>
                  <Image
                    src="/swishmax-flash-titles/swishmax-step-12.avif"
                    alt="Step twelve"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step twelve</figcaption>
                </figure>
              </li>
            </ol>
            <p>That’s all their is to it.</p>
          </article>
        </main>
      </div>
    </>
  );
}
