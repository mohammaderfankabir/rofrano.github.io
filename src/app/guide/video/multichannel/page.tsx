import Image from "next/image";
import { HeadsUp } from "@/components/ui";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Multichannel Render Template in Vegas Pro</h1>
        <p>
          Setting up a multichannel render template in Vegas Pro requires proper
          project setup, or the render may not meet your expectations. This
          tutorial walks you through the complete process of setting up your
          project and configuring render templates to ensure you get the
          multichannel audio you expect. In this example, I’ll set up a
          4-channel render template, but you can use as many channels as your
          chosen render format supports.
        </p>
      </section>
      <section>
        <HeadsUp>
          This tutorial uses the QuickTime Avid DNxHD template, but you can
          substitute any render template that supports multichannel audio. Just
          be aware that not all render formats support multichannel.
        </HeadsUp>
        <ol>
          <li>
            <p>
              Start by opening the Mixing Console by clicking the button above
              the Master fader.
            </p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-01-mixing-console.avif"
                alt="Open the Mixing Console."
                width={1800}
                height={1200}
              />
              <figcaption>Open the Mixing Console.</figcaption>
            </figure>
          </li>
          <li>
            <p>
              In the Mixing Console, click the “Insert Bus” button four times to
              add the buses needed for mapping to the audio channels in the
              render template.
            </p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-02-insert-buses.avif"
                alt="Click the “Insert Bus” button four times."
                width={1800}
                height={1200}
              />
              <figcaption>Click the “Insert Bus” button four times.</figcaption>
            </figure>
            <p>When finished, the mixing console should look like this:</p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-03-mixing-console.avif"
                alt="Mixing Console"
                width={1800}
                height={1200}
              />
              <figcaption>Mixing Console</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Now, assign your audio tracks to the buses. You can route one
              track per bus or multiple tracks to the same bus. What matters is
              that each bus contains the audio you want on its corresponding
              channel, as the next step involves mapping buses to channels in
              the rendered file.
            </p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-04-assign-tracks.avif"
                alt="Assign audio tracks to buses."
                width={1800}
                height={1200}
              />
              <figcaption>Assign audio tracks to buses.</figcaption>
            </figure>
            <p>
              Click on the square bus assignment icon to open the bus selection
              drop-down:
            </p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-05-assignment-icon.avif"
                alt="Assign each audio tracks to a bus."
                width={1800}
                height={1200}
              />
              <figcaption>Assign each audio track to a bus.</figcaption>
            </figure>
            <p>
              It should look something like this once all the assignments are
              complete:
            </p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-06-completed-assignments.avif"
                alt="Completed Assignments"
                width={1800}
                height={1200}
              />
              <figcaption>Completed Assignments</figcaption>
            </figure>
            <p>
              Also, note that you can perform the bus assignments in the mixing
              console as well:
            </p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-07-mixing-console.avif"
                alt="Mixing Console"
                width={1800}
                height={1200}
              />
              <figcaption>Mixing Console</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Go to “File → Render As…” and select the multichannel audio
              template. I chose the Avid DNxHD template from the previous
              tutorial. Since the option we need is not visible, check “View all
              options” at the bottom of the window.
            </p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-08-reader-as.avif"
                alt="You must check “View all options.”"
                width={1800}
                height={1200}
              />
              <figcaption>You must check “View all options.”</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Check Enable Multichannel Audio, then click “Channels…” to open
              the mapping window.
            </p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-09-reader-as.avif"
                alt="Check “Enable multichannel mapping” to enable the Channels... button."
                width={1800}
                height={1200}
              />
              <figcaption>
                Check “Enable Multichannel Mapping” to enable the Channels...
                button.
              </figcaption>
            </figure>
          </li>
          <li>
            <p>
              In the Channel Mapping window, map your bus to the appropriate
              channel. I selected Mono Downmix because my tracks are mono. If
              your tracks are stereo, choose the stereo bus instead and click
              OK.
            </p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-10-channel-mapping.avif"
                alt="Channel Mapping"
                width={1800}
                height={1200}
              />
              <figcaption>Channel Mapping</figcaption>
            </figure>
          </li>
          <li>
            <p>
              The final step is to configure your template for multiple
              channels. Click the “Customize Template” button, go to the Audio
              tab, and set the Channels to 4. Click OK to apply the change.
            </p>
            <figure>
              <Image
                src="/guide/video/multichannel/multichannel-11-custom-settings.avif"
                alt="Set to the number of channels you mapped."
                width={1800}
                height={1200}
              />
              <figcaption>Set to the number of channels you mapped.</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          There you have it. Click the “Render button,” and your project will
          render with 4-channel audio (or as many channels as you added buses
          and mapped to channels in your render template). It should give you a
          solid foundation for creating your multichannel audio templates.
        </p>
        <p>
          Don’t forget that even though you can save these templates, you will
          still need to press the “Channels…” button to bring up the Channel
          Mapping window and map which buses you want to assign to each channel
          before rendering.
        </p>
      </section>
    </article>
  );
}
