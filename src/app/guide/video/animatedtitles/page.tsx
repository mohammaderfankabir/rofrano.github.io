import Image from "next/image";
import { HeadsUp } from "@/components/ui";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Making Animated Titles with SWISHMax</h1>
        <p>
          Sometimes, you need a quick animated title in Vegas but don’t have
          time to do a lot of keyframing. Luckily, Vegas supports Flash SWF
          files, so you can make animated titles in any Flash tool and drop the
          SWF file in Vegas.
        </p>
        <p>
          I’m using SWISHmax for this tutorial, but any Flash tool that supports
          SWF files will do.
        </p>
      </section>
      <section>
        <ol>
          <li>
            <p>Here’s how you do it:</p>
            <p>Open SWISHmax and select “Start a new empty movie.”</p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-01-open-swishmax.avif"
                alt="Open SWISHmax"
                width={1800}
                height={1200}
              />
              <figcaption>Open SWISHmax</figcaption>
            </figure>
          </li>
          <li>
            <p>
              That opens up the SWISHmax interface. In the image below, I’ve
              highlighted all the areas we will use in this tutorial.
            </p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-02-highlighted-areas.avif"
                alt="Highlighted Areas"
                width={1800}
                height={1200}
              />
              <figcaption>Highlighted Areas</figcaption>
            </figure>
          </li>
          <li>
            <p>
              In the attribute area (right side), select the Movie tab and set
              your movie up for the video dimensions of your project. I’m using
              NTSC 720×480 with a pixel aspect ratio of 0.9091. Because Flash
              uses a pixel aspect ratio of 1.000, we enter a width of 655 and a
              height of 480 to compensate. I’ve also used 30 fps with a black
              background.
            </p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-03-video-dimensions.avif"
                alt="Video Dimensions"
                width={1800}
                height={1200}
              />
              <figcaption>Video Dimensions</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select the Text tool to add a title. That will add the Text tab to
              the Properties panel on the right.
            </p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-04-add-text.avif"
                alt="Add Text"
                width={1800}
                height={1200}
              />
              <figcaption>Add Text</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Go to the Text tab and set the color, font, etc., and the text you
              want for your title. I’ve selected the OCRATTRegular font because
              it looks like the early computer fonts before Windows were
              popular. For color, I chose green because most old computers have
              green screens. We associate green screens and OCR fonts with
              computer terminals.
            </p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-05-text-properties.avif"
                alt="Text Properties"
                width={1800}
                height={1200}
              />
              <figcaption>Text Properties</figcaption>
            </figure>
          </li>
          <li>
            <p>
              With the “Text Tool” selected, drag your cursor to position the
              text in the video area. You are just positioning the width.
              SWISHmax will take care of the height, which you can adjust later.
            </p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-06-text-tool.avif"
                alt="Drag the text tool."
                width={1800}
                height={1200}
              />
              <figcaption>Drag the text tool.</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Your text may look perfect, but what if it doesn’t? In this
              example, the text didn’t flow as written in the Text Properties
              panel.
            </p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-07-text-flow.avif"
                alt="Text Flow"
                width={1800}
                height={1200}
              />
              <figcaption>Text Flow</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Use the green diamonds on the text box to adjust the text flow.
              The green diamonds will reflow the text. The white squares will
              resize the text.
            </p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-08-reflow.avif"
                alt="Drag the green diamond to reflow the text box."
                width={1800}
                height={1200}
              />
              <figcaption>
                Drag the green diamond to reflow the text box.
              </figcaption>
            </figure>
          </li>
          <li>
            <p>
              Click the “Add Effects” button and select Appear into Position →
              Typewriter – Slow .
            </p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-09-add-effects.avif"
                alt="Add Effects"
                width={1800}
                height={1200}
              />
              <figcaption>Add Effects</figcaption>
            </figure>
            <HeadsUp>
              Click the Play icon to preview the animation and adjust as needed.
              I changed the text to Left Justify to resemble a computer
              terminal.
            </HeadsUp>
          </li>
          <li>
            <p>
              Use File → Export to export your title to SWF format. That is a
              format that Vegas 5+ can use directly.
            </p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-10-file-export.avif"
                alt="Export SWF"
                width={1800}
                height={1200}
              />
              <figcaption>Export SWF</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Now, drag-n-drop the SWF file onto the Vegas timeline, and you
              have an animated title. Vegas will automatically detect the alpha
              channel and apply the correct transparency.
            </p>
            <figure>
              <Image
                src="/guide/video/animatedtitles/animatedtitles-12-drag-title.avif"
                alt="Drag Title"
                width={1800}
                height={1200}
              />
              <figcaption>Drag Title</figcaption>
            </figure>
          </li>
        </ol>
        <p>That’s all there is to it.</p>
      </section>
    </article>
  );
}
