import Image from "next/image";

export default function CineformTemplates() {
  return (
    <>
      <div id="cineform-templates">
        <main id="page-content" className="page-content">
          <article>
            <h1>Create a CineForm Render Template in Sony Vegas Pro</h1>
            <p>
              Versions of Sony Vegas 6, 7, &amp; Pro 8 shipped with CineForm
              codec and render templates for Cineform, but starting with Vegas
              Pro 9, Sony stopped shipping the CineForm codec and stopped
              supplying CineForm render templates.
            </p>
            <p>
              If you would like to continue working with CineForm in Vegas Pro 9
              forward, you will need to purchase the codec from CineForm.
              Currently the least expensive solution is to purchase CineForm
              NeoScene. Once you have purchase CineForm NeoScene and installed
              it, you will still need to create render templates in order to use
              it for output.
            </p>
            <p>
              This tutorial will show you how to create a CineForm template for
              rendering.
            </p>
            <p>
              Follow these steps after you have purchased and installed CineForm
              NeoScene:
            </p>
            <ol>
              <li>
                <p>
                  Make sure that your project properties are set to match the
                  render template you are about to make. In this example we are
                  going to make an NTSC HDV 1440x1080 render template so we set
                  our project properties to{" "}
                  <strong>HDV 1080-60i (1440x1080, 29.970 fps)</strong>. Make
                  sure that you audio is set to a sample rate of{" "}
                  <strong>48,000</strong> and a bit depth of{" "}
                  <strong>16-bit</strong>.
                </p>
                <figure>
                  <Image
                    src="/cineform-templates/cineform-01-project-properties.avif"
                    alt="Project properties"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Project properties</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Next we want to make a render template that matches our
                  project. We start by bringing up the <em>Render As</em> Window
                  using: <strong>File | Render As…</strong> and select{" "}
                  <strong>
                    Video for Windows (<em>.avi)** as the *Save as type</em> and
                    **Default Template (Uncompressed)
                  </strong>{" "}
                  as the <em>Template</em>. By using the Default Template, we
                  are ensured that the properties will match our project. Then
                  press the <strong>Custom…</strong> button to continue.
                </p>
                <figure>
                  <Image
                    src="/cineform-templates/cineform-02-default-uncompressed.avif"
                    alt="Default uncompressed"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Default uncompressed</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  In the <em>Custom Settings</em> window, select{" "}
                  <strong>CineForm Codec</strong> as the <em>Video format</em>{" "}
                  and <strong>0.250</strong> as the <em>interleave</em>{" "}
                  interval. Press the <strong>Configure…</strong> button to
                  configure the CineForm codec.
                </p>
                <figure>
                  <Image
                    src="/cineform-templates/cineform-03-codec.avif"
                    alt="Codec"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Codec</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  In the <em>Configure CineForm Codec</em> window, select{" "}
                  <strong>Medum</strong> as the <em>Encoding quality</em>.
                  Medium is a good tradeoff between file size and quality and is
                  the default that Vegas Pro used for versions 6, 7, &amp; 8.
                  You can use a higher quality of your work demands it, but
                  medium should be enough for most post work. Press
                  <strong>OK</strong> to accept the changes.
                </p>
                <figure>
                  <Image
                    src="/cineform-templates/cineform-04-config.avif"
                    alt="Config"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Config</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Click the <strong>Audio</strong> tab and make sure that your{" "}
                  <em>Sample rate</em> is set to <strong>48,000</strong> and
                  that the <em>Audio format</em> is{" "}
                  <strong>PCM Uncompressed</strong>.
                </p>
                <figure>
                  <Image
                    src="/cineform-templates/cineform-05-audio.avif"
                    alt="Audio"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Audio</figcaption>
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
                    src="/cineform-templates/cineform-06-save.avif"
                    alt="Save"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Save</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  You now have a new template to render your project as CineForm
                  files.
                </p>
                <figure>
                  <Image
                    src="/cineform-templates/cineform-07-template.avif"
                    alt="Template"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Template</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              Hopefully this will give you a good starting point for creating
              more templates of your own.
            </p>
            <p>
              It’s always best when creating templates to make your project
              match the render template settings and start with Default Template
              (Uncompressed) so that all of the project properties carry over to
              the new template. Then just change the video format to the codec
              you’d like to use.
            </p>
            <p>
              Alternately, you can start with an existing template that is close
              to the one you’d like to make and just make the changes needed to
              use the new codec.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
