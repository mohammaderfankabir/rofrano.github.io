import Image from "next/image";

export default function ContourDesignsShuttlepro() {
  return (
    <>
      <div id="contour-designs-shuttlepro">
        <main id="page-content" className="page-content">
          <article>
            <h1>Shuttle Pro Setup</h1>
            <p>
              I have the{" "}
              <a href="http://retail.contourdesign.com/?/products/23">
                Contour Designs ShuttlePRO v2
              </a>{" "}
              and I wouldn’t edit without it. Once you get use to the Jog and
              Shuttle wheels you’ll wonder how you ever edited without it too.
              Sony Vegas Pro even ships with a preference file for the Shuttle
              series of devices. Here is a tutorial on how to set up the Contour
              Shuttle to work with Sony Vegas Pro:
            </p>
            <ol>
              <li>
                <p>
                  Open the Shuttle Pro Control Panel by right-clicking on the
                  icon in your docking tray in the lower right corner of your
                  Windows desktop.
                </p>
                <figure>
                  <Image
                    src="/contour-designs-shuttlepro/setup-shuttlepro-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Click the <strong>Options</strong> button in the Control Panel
                  and select <strong>Import Settings</strong>
                </p>
                <figure>
                  <Image
                    src="/contour-designs-shuttlepro/setup-shuttlepro-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Navigate to the Program Files folder where Sony Vegas Pro is
                  installed and find the .prefs file for your Shuttle device. I
                  have the ShuttlePRO v2 so I selected the file “Sony - Vegas
                  Pro 10 – ShuttlePRO v2.pref”
                </p>
                <figure>
                  <Image
                    src="/contour-designs-shuttlepro/setup-shuttlepro-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Your should now see a new setting for Vegas Pro 10 in the
                  Application Settings drop down. Press the{" "}
                  <strong>Apply</strong> button and you’re done!
                </p>
                <figure>
                  <Image
                    src="/contour-designs-shuttlepro/setup-shuttlepro-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              That’s all there is to it. Now any time you load Sony Vegas Pro
              10, the shuttle will recognize the application and load the
              setting automatically. You don’t need to do anything else.
              Purchasing the Contour ShuttlePRO v2 was definitely money well
              spent.
            </p>
            <p>
              I’m considering picking up the smaller ShuttleXpress to carry
              around with my laptop. You can customize the settings to your
              liking so don’t forget to explore the different buttons and see
              what they do. Until next time…
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
