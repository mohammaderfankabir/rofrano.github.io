import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Cineform Render Templates</h1>
        <p>
          Versions of Sony Vegas 6, 7, &amp; Pro 8 shipped with CineForm codec
          and render templates for Cineform. Starting with Vegas Pro 9, Sony
          stopped shipping the CineForm codec and CineForm render templates.
        </p>
        <p>
          If you want to work with CineForm in Vegas Pro 9 forward, purchase the
          codec from CineForm. Currently, the least expensive solution is to
          purchase CineForm NeoScene. Once you have purchased CineForm NeoScene
          and installed it, you will still need to create render templates for
          output. This tutorial will guide you through creating a CineForm
          template for rendering.
        </p>
      </section>
      <section>
        <ol>
          <li>
            <p>
              Follow these steps after you have purchased and installed CineForm
              NeoScene:
            </p>
            <p>
              Make sure project properties match the render template you are
              about to make. In this example, we’ll make an NTSC HDV 1440x1080
              render template, so we set our project properties to HDV 1080-60i
              (1440x1080, 29.970 fps). Check that your audio has a 48,000 Hz
              sample rate and 16-bit depth.
            </p>
            <figure>
              <Image
                src="/guide/video/cineform/cineform-01-project-properties.avif"
                alt="Project properties"
                width={1800}
                height={1200}
              />
              <figcaption>Project properties</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Next, we’ll create a render template that matches our project.
              Open File → Render As…, select Video for Windows (*.avi) for Save
              as type, and choose Default Template (Uncompressed). Click the
              “Custom…” button to continue.
            </p>
            <figure>
              <Image
                src="/guide/video/cineform/cineform-02-default-uncompressed.avif"
                alt="Default uncompressed"
                width={1800}
                height={1200}
              />
              <figcaption>Default uncompressed</figcaption>
            </figure>
          </li>
          <li>
            <p>
              In the Custom Settings window, select CineForm Codec as the Video
              format and 0.250 as the Interleave interval. Click the
              “Configure…” button to configure the CineForm codec.
            </p>
            <figure>
              <Image
                src="/guide/video/cineform/cineform-03-codec.avif"
                alt="Codec"
                width={1800}
                height={1200}
              />
              <figcaption>Codec</figcaption>
            </figure>
          </li>
          <li>
            <p>
              In the Configure CineForm Codec window, select Medium as the
              Encoding quality. Medium is a good tradeoff between file size and
              quality and is the default in Vegas Pro versions 6, 7, &amp; 8.
              You can use a higher quality if your work demands it, but this
              setting should be sufficient for most post-production tasks. Click
              OK to apply the changes.
            </p>
            <figure>
              <Image
                src="/guide/video/cineform/cineform-04-config.avif"
                alt="Config"
                width={1800}
                height={1200}
              />
              <figcaption>Config</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Click the Audio tab and check that the sample rate is 48,000 Hz
              and the audio format is PCM Uncompressed.
            </p>
            <figure>
              <Image
                src="/guide/video/cineform/cineform-05-audio.avif"
                alt="Audio"
                width={1800}
                height={1200}
              />
              <figcaption>Audio</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Finally, give your new template a descriptive name and save it for
              future use by clicking the Diskette icon. Press OK to return to
              the Render As window.
            </p>
            <figure>
              <Image
                src="/guide/video/cineform/cineform-06-save.avif"
                alt="Save"
                width={1800}
                height={1200}
              />
              <figcaption>Save</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          You now have a new template to render your project as CineForm files.
        </p>
        <figure>
          <Image
            src="/guide/video/cineform/cineform-07-template.avif"
            alt="Template"
            width={1800}
            height={1200}
          />
          <figcaption>Template</figcaption>
        </figure>
        <p>
          Hopefully, this will give you a good starting point for creating more
          templates.
        </p>
        <p>
          It’s a good practice to make your project match the render template
          settings and start with Default Template (Uncompressed). So, all
          project properties carry over, then change the video format to your
          desired codec.
        </p>
        <p>
          Alternatively, you can start with an existing template close to the
          one you’d like to make and make the changes needed to use the new
          codec.
        </p>
      </section>
    </article>
  );
}
