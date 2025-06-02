import Image from "next/image";
import { HeadsUp } from "@/components/ui";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Avid DNxHD Template for Vegas Pro</h1>
        <p>
          A common question I asked is which format works best in Vegas Pro when
          collaborating with Final Cut Pro editors on a Mac. The best codec I
          have found is the free{" "}
          <a
            href="https://www.videohelp.com/software/Avid-DNxHD"
            title="Avid Codecs / DNxHD 2.7.6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avid DNxHD
          </a>{" "}
          QuickTime codec. I use this codec for its superior mastering quality
          and consistent gamma levels when imported to the Mac.
        </p>
      </section>
      <section>
        <p>
          Once you have downloaded the{" "}
          <a
            href="https://avidtech.my.salesforce-sites.com/pkb/articles/en_US/download/Avid-QuickTime-Codecs-LE"
            title="Avid QuickTime Codecs LE 2.6.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            installer
          </a>
          , you must run it to install the codecs. Make sure that Vegas Pro is
          not running when you perform the installation. Next, you create a
          render template for output. This tutorial will show you how to create
          an Avid DNxHD template for rendering.
        </p>
        <HeadsUp>
          Throughout this tutorial, I assume your project is NTSC HD, 1920x1080
          @ 29.970fps. If your project is different, select a different frame
          size and frame rate when you create your template to match your
          desired output format.
        </HeadsUp>
        <ol>
          <li>
            <p>
              Follow these steps after you have installed the free Avid DNxHD
              QuickTime codec:
            </p>
            <p>
              In Vegas Pro, go to File → Render As… and select “QuickTime 7
              (*.mov)” as the Output Format and “3 Mbps Video” as the template.
            </p>
            <figure>
              <Image
                src="/guide/video/aviddnxhd/aviddnxhd-01-render-as.avif"
                alt="Select the QuickTime template with the highest data rate (e.g., 3 Mbps)."
                width={1800}
                height={1200}
              />
              <figcaption>
                Select the QuickTime template with the highest data rate (e.g.,
                3 Mbps).
              </figcaption>
            </figure>
          </li>
          <li>
            <p>
              This template is the starting point, which we modify to match our
              HD project properties. So, press the “Customize Template…” button
              to open the Custom Settings window.
            </p>
            <figure>
              <Image
                src="/guide/video/aviddnxhd/aviddnxhd-02-customized-template.avif"
                alt="Push the “Customize Template...” button."
                width={1800}
                height={1200}
              />
              <figcaption>Push the “Customize Template...” button.</figcaption>
            </figure>
          </li>
          <li>
            <p>
              In the “Custom Settings” window, adjust the following settings:
            </p>
            <ul>
              <li>Select “High Definition (1920x1080)” for Frame size.</li>
              <li>Choose 29.970000 as the “Frame rate.”</li>
              <li>Set the “Field order” to “Upper field first.”</li>
              <li>Select Avid DNxHD Codec as the Video format.</li>
              <li>
                Click the “Configure…” button to set the Avid DNxHD codec
                settings.
              </li>
            </ul>
            <HeadsUp>
              If you want your render to be progressive, 24p, or with different
              dimensions, select those settings instead.
            </HeadsUp>
            <figure>
              <Image
                src="/guide/video/aviddnxhd/aviddnxhd-03-video-settings.avif"
                alt="Video Settings"
                width={1800}
                height={1200}
              />
              <figcaption>Video Settings</figcaption>
            </figure>
          </li>
          <li>
            <p>In the “Avid DNxHD Codec Configuration” window:</p>
            <ul>
              <li>Select 709 as the “Color level” when working in HD.</li>
              <li>
                Select None as the alpha channel unless you need to preserve
                alpha transparency.
              </li>
              <li>
                Under Resolutions, select “1080i/59.94 DNxHD 145 8-bit” or the
                setting that matches your desired output.
              </li>
            </ul>
            <p>
              Ensure this setting matches what you selected in the rest of the
              render template. The value 145 refers to a data rate of 145 Mbps,
              which makes large files. In general, Higher rates make larger
              files. Please note that at 25 Mbps recording, a 36 Mbps data rate
              still delivers excellent quality. Click OK to apply the changes.
            </p>
            <figure>
              <Image
                src="/guide/video/aviddnxhd/aviddnxhd-04-codec-configuration.avif"
                alt="Codec Configuration"
                width={1800}
                height={1200}
              />
              <figcaption>Codec Configuration</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Click the Audio tab and ensure “Sample rate” is set to 48,000 and
              that the “Audio format” is Uncompressed.
            </p>
            <figure>
              <Image
                src="/guide/video/aviddnxhd/aviddnxhd-05-audio-settings.avif"
                alt="Audio Settings"
                width={1800}
                height={1200}
              />
              <figcaption>Audio Settings</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Finally, give your new template a descriptive name and save it for
              future use by pressing the Diskette icon. Press OK to return to
              the “Render As” window.
            </p>
            <figure>
              <Image
                src="/guide/video/aviddnxhd/aviddnxhd-06-diskette.avif"
                alt="Save the template."
                width={1800}
                height={1200}
              />
              <figcaption>Save the template.</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          You now have a new template to render your project as Avid DNxHD
          QuickTime files.
        </p>
        <figure>
          <Image
            src="/guide/video/aviddnxhd/aviddnxhd-07-new-template.avif"
            alt="New Template"
            width={1800}
            height={1200}
          />
          <figcaption>New Template</figcaption>
        </figure>
        <p>
          Hopefully, this will give you a good starting point for creating more
          templates. Begin with a template close to your needs, then adjust the
          video format to your desired codec.
        </p>
      </section>
    </article>
  );
}
