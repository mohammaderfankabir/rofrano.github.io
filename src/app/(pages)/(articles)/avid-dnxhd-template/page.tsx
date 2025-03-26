import Image from "next/image";

export default function AvidDnxhdTemplate() {
  return (
    <>
      <div id="avid-dnxhd-template">
        <main id="page-content" className="page-content">
          <article>
            <h1>Avid DNxHD Template for Vegas Pro</h1>
            <p>
              Quite often I’m asked what’s the best format to work with in Vegas
              Pro when you need to collaborate with Final Cut Pro editors on a
              Mac. The best codec I have found is the free{" "}
              <a href="http://www.avid.com/US/industries/workflow/DNxHD-Codec">
                Avid DNxHD
              </a>{" "}
              QuickTime codec. The reason I use this codec in addition to it’s
              superior quality for mastering, is because it doesn’t suffer from
              the gamma shifts that some other PC codecs have when transferred
              to the Mac. With Avid DNxHD, you get the gamma levels you expect,
              and the quality you need.
            </p>
            <p>
              Avid DNxHD can be downloaded free from Avid at this link: [{" "}
              <a href="http://avid.force.com/pkb/articles/en_US/download/Avid-QuickTime-Codecs-LE">
                Avid QuickTime Codecs LE 2.6.0
              </a>{" "}
              ] Once you have downloaded the installer you must run it to
              install the codecs. Make sure that Vegas Pro is not running when
              you perform the installation. Next you’ll need to create a render
              template in order to use it for output. This tutorial will show
              you how to create an Avid DNxHD template for rendering.
              <strong>Important Note:</strong> Throughout this tutorial I assume
              your project is NTSC HD which is 1920x1080 @ 29.970fps. If your
              project is different, select a different frame size and frame rate
              when you create your template to match your desired output format.
            </p>
            <p>
              Follow these steps after you have installed the free Avid DNxHD
              QuickTime codec:
            </p>
            <ol>
              <li>
                <p>
                  Start by bringing up the <em>Render As</em> Window in Vegas
                  Pro using: <strong>File | Render As…</strong> and select{" "}
                  <strong>
                    QuickTime 7 (<em>.mov)** as the *Output Format</em> and **3
                    Mbps Video
                  </strong>{" "}
                  as the starting <em>Template</em>.
                </p>
                <figure>
                  <Image
                    src="/avid-dnxhd-template/avid-dnxhd-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  This template is just a starting point and we will need to
                  modify it to match our HD project properties so press the{" "}
                  <strong>Customize Template…</strong> button to open the Custom
                  Settings window.
                </p>
                <figure>
                  <Image
                    src="/avid-dnxhd-template/avid-dnxhd-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  In the <em>Custom Settings</em> window, (1) select{" "}
                  <strong>High Definition (1920x1080)</strong> as the{" "}
                  <em>Frame size,</em> (2) select <strong>29.970000</strong> as
                  the <em>Frame rate</em>, (3) select{" "}
                  <strong>Upper filed first</strong> as the <em>Field order</em>
                  , and (4) select <strong>Avid DNxHD Codec</strong> as the{" "}
                  <em>Video format</em>. Finally (5) press the{" "}
                  <strong>Configure…</strong> button to set the Avid DNxHD codec
                  settings.{" "}
                  <em>
                    It’s important to point out that if you want you render to
                    be progressive, 24p, or a different dimension, then select
                    those settings instead.
                  </em>
                </p>
                <figure>
                  <Image
                    src="/avid-dnxhd-template/avid-dnxhd-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  In the <em>Avid DNxHD Codec Configuration</em> window, select{" "}
                  <strong>709</strong> as the <em>Color levels</em> if you are
                  working in HD. Select <strong>None</strong> as the alpha
                  channel unless you need to preserve alpha transparency, but
                  for normal video this is not needed. Finally under{" "}
                  <em>Resolutions</em> select{" "}
                  <strong>1080i/59.94 DNxHD 145 8-bit</strong> or whatever
                  setting matches the resolution and frame rate of your desired
                  output. It is important that what you select here matches what
                  you selected in the rest of the render template. Note that the
                  145 designates the data rate of 145 Mbps which will produce
                  large files. Other data rates like 220 will produce absolutely
                  huge files. Remember, if your camera acquired at 25Mbps you
                  probably can select the lowest data rate of 36 and still have
                  outstanding quality. Press <strong>OK</strong> to accept the
                  changes.
                </p>
                <figure>
                  <Image
                    src="/avid-dnxhd-template/avid-dnxhd-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Click the <strong>Audio</strong> tab and make sure that your{" "}
                  <em>Sample rate</em> is set to <strong>48,000</strong> and
                  that the <em>Audio format</em> is{" "}
                  <strong>Uncompressed</strong>*.*
                </p>
                <figure>
                  <Image
                    src="/avid-dnxhd-template/avid-dnxhd-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Finally, give your new template a descriptive name and save it
                  for future use by pressing the <strong>Diskette</strong>{" "}
                  button. Press <strong>OK</strong> to return to the{" "}
                  <em>Render As</em> window.
                </p>
                <figure>
                  <Image
                    src="/avid-dnxhd-template/avid-dnxhd-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  You now have a new template to render your project as Avid
                  DNxHD QuickTime files.
                </p>
                <figure>
                  <Image
                    src="/avid-dnxhd-template/avid-dnxhd-step-07.avif"
                    alt="Step seven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seven</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              Hopefully this will give you a good starting point for creating
              more templates of your own. It’s always best when creating
              templates to start with a template that’s close to what you want
              and then just change the video format to the codec you’d like to
              use.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
