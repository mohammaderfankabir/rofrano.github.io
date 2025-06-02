import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Contour Designs Shuttle Pro v2.0 Setup</h1>
        <p>
          I use the{" "}
          <a
            href="https://contourdesign.com/products/shuttle-pro-v2"
            title="Shuttle Pro V2 – The Programmable Shortcut Tool"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contour Designs ShuttlePRO v2
          </a>{" "}
          and can’t imagine editing without it. Once you get used to the Jog and
          Shuttle wheels, you’ll wonder how you managed before. Sony Vegas Pro
          even includes a preference file for the Shuttle series. Here’s how to
          set it up:
        </p>
      </section>
      <section>
        <ol>
          <li>
            <p>
              Open the Shuttle Pro Control Panel by right-clicking the icon in
              the system tray.
            </p>
            <figure>
              <Image
                src="/guide/video/shuttlepro/shuttlepro-01-control-panel.avif"
                alt="Open Control Panel"
                width={1800}
                height={1200}
              />
              <figcaption>Open Control Panel</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Click the Options button in the Control Panel and select Import
              Settings.
            </p>
            <figure>
              <Image
                src="/guide/video/shuttlepro/shuttlepro-02-device-configuration.avif"
                alt="Device Configuration"
                width={1800}
                height={1200}
              />
              <figcaption>Device Configuration</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Go to the Sony Vegas Pro installation folder and locate the .prefs
              file for your Shuttle device. For ShuttlePRO v2, it should be
              “Sony - Vegas Pro 10 – ShuttlePRO v2.pref.”
            </p>
            <figure>
              <Image
                src="/guide/video/shuttlepro/shuttlepro-03-import-setting.avif"
                alt="Import Setting"
                width={1800}
                height={1200}
              />
              <figcaption>Import Setting</figcaption>
            </figure>
          </li>
          <li>
            <p>
              You should now see a new setting for Vegas Pro 10 in the
              Application Settings dropdown. Click Apply to confirm the changes.
            </p>
            <figure>
              <Image
                src="/guide/video/shuttlepro/shuttlepro-04-application-setting.avif"
                alt="You should now see “Sony - Vegas Pro 10.”"
                width={1800}
                height={1200}
              />
              <figcaption>You should now see ‘Sony - Vegas Pro 10.’</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          That’s it. Now, whenever you open Sony Vegas Pro 10, the Shuttle will
          automatically load the settings. No additional setup is required. The
          Contour ShuttlePRO v2 is well worth the investment.
        </p>
        <p>
          I’m thinking of getting the smaller ShuttleXpress to use with my
          laptop. You can customize the settings. So, explore the buttons and
          see what they do.
        </p>
      </section>
    </article>
  );
}
