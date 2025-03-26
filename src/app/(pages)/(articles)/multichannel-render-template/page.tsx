import Image from "next/image";

export default function MultichannelRenderTemplate() {
  return (
    <>
      <div id="multichannel-render-template">
        <main id="page-content" className="page-content">
          <article>
            <h1>Multichannel Render Template in Vegas Pro</h1>
            <p>
              Rendering multichannel tracks to multichannel files is easy once
              you understand how. Setting up a multichannel render template in
              Vegas Pro requires that your project is set up correctly otherwise
              you won’t get the render that you expected. This tutorial shows
              you the entire procedure for setting up both your project and the
              render template so that you always get the multichannel audio that
              you expect. In this example I’m going to set up a 4 channel render
              template but you can use as many channels as your render type
              supports.
            </p>
            <p>
              <strong>Important Note:</strong>{" "}
              <em>
                Throughout this tutorial I use the QuickTime Avid DNxHD template
                from a previous tutorial. You can substitute any render template
                that supports multichannel but it’s important to know that not
                all render types support multichannel.
              </em>
            </p>
            <ol>
              <li>
                <p>
                  Start by bringing up the <em>Mixing Console</em> by pushing
                  the mixing console button above the Master fader.
                </p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  In the Mixing Console window, press the{" "}
                  <strong>Insert Bus</strong> button 4 times to insert the 4
                  buses we will need to map to the audio channels in our render
                  template.{" "}
                </p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
                <p>When finished, the mixing console should look like this:</p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Now it’s time to assign your audio tracks to one of the buses.
                  This can be one track per bus, or multiple tracks per bus. It
                  doesn’t matter as long as you assign each bus the audio that
                  you want to appear on that channel because in the next step we
                  are going to do the mapping of buses to audio channels in the
                  rendered file.{" "}
                </p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
                <p>
                  Click on the square bus assignment icon to get the bus
                  selection drop down:
                </p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
                <p>
                  It should look similar to this when all of the assignments are
                  completed:
                </p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
                <p>
                  Also note that you can perform the bus assignments in the
                  mixing console as well:
                </p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-07.avif"
                    alt="Step seven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seven</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Now you are ready to set up your rendering template. Use{" "}
                  <strong>File | Render As…</strong> to bring up the Reader As
                  window and select the template that you want to enable for
                  multichannel audio. I’m going to select the Avid DNxHD
                  template that I made in the last tutorial. We will need to use
                  an option that is normally hidden so you must <em>check</em>{" "}
                  <strong>View all options</strong> way down at the bottom of
                  that window if it isn’t already checked.
                </p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-08.avif"
                    alt="Step eight"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eight</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  <em>Click</em> the <strong>Enable multichannel audio</strong>{" "}
                  option and then press the <strong>Channels…</strong> button to
                  bring up the channel mapping window.
                </p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-09.avif"
                    alt="Step nine"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step nine</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  In the Channel Mapping window, map your bus to the appropriate
                  channel in your render. In the example below, I selected mono
                  downmix because my tracks were mono. If any of your tracks are
                  stereo, you can select the stereo bus and it will map it to
                  two channels automatically. Press <strong>OK</strong> when you
                  are done.
                </p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-10.avif"
                    alt="Step ten"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step ten</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  The last step is to make your template use the multiple
                  channels. Press the <strong>Customize Template</strong>{" "}
                  button, go to the <strong>Audio</strong> tab and change the{" "}
                  <strong>Channels</strong> to<em>4 Channel</em> and press{" "}
                  <strong>OK</strong>.
                </p>
                <figure>
                  <Image
                    src="/multichannel-render-template/multichannel-render-step-11.avif"
                    alt="Step eleven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eleven</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              There you have it. You can now press the <strong>Render</strong>{" "}
              button and your project will render with 4 channel audio or as
              many channel audio as you added buses and mapped them to channels
              in your render template. Hopefully this will give you a good
              starting point for creating more templates of your own that use
              multichannel audio.
            </p>
            <p>
              Don’t forget that even though you can save these templates, you
              will still need to press the <strong>Channels…</strong> button to
              bring up the Channel Mapping window and map which buses you want
              to assign to each channel before rendering.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
