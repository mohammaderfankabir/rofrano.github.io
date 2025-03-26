import Image from "next/image";

export default function BomeMouseKeyboard() {
  return (
    <>
      <div id="bome-mouse-keyboard">
        <main id="page-content" className="page-content">
          <article>
            <h1>Bome Mouse Keyboard</h1>
            <p>
              Sometimes you just don’t have a hardware MIDI keyboard handy (like
              when traveling) but you need to compose something with ACID that
              needs MIDI keyboard input. There is a great little software
              keyboard that you can use from Bome that will get you by in a
              pinch. Here’s how to set it up.
            </p>
            <h2 id="how-to-configure-bomes-midi-keyboard-with-acid">
              How to Configure Bome’s MIDI Keyboard with ACID
            </h2>
            <p>Software Needed for this tutorial:</p>
            <ul>
              <li>
                <a href="http://www.sonymediasoftware.com/download/step2.asp?DID=317">
                  Virtual MIDI Router
                </a>
              </li>
              <li>
                <a href="http://www.bome.com/midi/keyboard/">
                  Bome’s Mouse Keyboard
                </a>
              </li>
            </ul>
            <h3 id="virtual-midi-router">Virtual MIDI Router</h3>
            <p>
              The Virtual MIDI Router from Sony acts like a virtual MIDI cable.
              It allows you to route MIDI inputs and outputs as if you had real
              hardware MIDI ports with a MIDI cable between them. ACID will
              think these ports are real MIDI interfaces and allow you to assign
              the Bome Mouse Keyboard to an input just like it was a real
              hardware MIDI keyboard with a MIDI cable attached. The
              instructions for installing the Virtual MIDI Router are on{" "}
              <a href="/training/music-tutorials/virtual-midi-router-installation/">
                this page
              </a>
              .
            </p>
            <h3 id="bomes-mouse-keyboard">Bome’s Mouse Keyboard</h3>
            <p>
              Start by installing the Bome Mouse Keyboard using its install
              utility then follow these instructions below to configure it for
              use with ACID:
            </p>
            <ol>
              <li>
                <p>
                  Start the <strong>Bome Mouse Keyboard</strong>
                </p>
                <figure>
                  <Image
                    src="/bome-mouse-keyboard/bome-configure-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select <strong>Midi In</strong> and change it to be{" "}
                  <strong>none</strong>. You don’t want the Mouse Keyboard to
                  use Midi In because you are just using it as an output device.
                  (and you want ACID to use the virtual MIDI input)
                </p>
                <figure>
                  <Image
                    src="/bome-mouse-keyboard/bome-configure-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select <strong>Midi Out</strong> and change it to be{" "}
                  <strong>1: Sonic Foundry MIDI Router</strong>. This will route
                  the output of the Bome Mouse Keyboard to the input of the
                  Virtual MIDI Router.
                </p>
                <figure>
                  <Image
                    src="/bome-mouse-keyboard/bome-configure-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Start <strong>Sony ACID</strong> and Select{" "}
                  <strong>Options &gt; Preferences</strong>
                </p>
                <figure>
                  <Image
                    src="/bome-mouse-keyboard/bome-configure-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select the <strong>MIDI</strong> tab and at the bottom section
                  labeled <em>Make these devices available for MIDI input</em>,
                  place a check next to{" "}
                  <strong>1: Sonic Foundry MIDI Router.</strong> This tells ACID
                  to accept MIDI data from the port 1 of the virtual MIDI router
                  which is where the Bome Mouse keyboard will be sending it.
                  Press <strong>Apply</strong> to accept these changes
                </p>
                <figure>
                  <Image
                    src="/bome-mouse-keyboard/bome-configure-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select the <strong>General</strong> tab. Find the property{" "}
                  <strong>
                    Close audio and MIDI ports when ACID is not the active
                    application
                  </strong>{" "}
                  and <em>uncheck</em> it. Then press <strong>OK</strong> to
                  dismiss the properties window.
                </p>
                <figure>
                  <Image
                    src="/bome-mouse-keyboard/bome-configure-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              That’s it! Now insert a Soft Synth and play the keys on the Bome
              Mouse Keyboard. The critical step is changing ACID’s default
              behavior to close the audio and MIDI ports when it looses focus.
              Closing the audio and MIDI ports is great if you want to use
              another application such as Sound Forge to edit some audio and
              then return to ACID, but in the case of the Bome MIDI keyboard,
              you actually want ACID to hold onto the audio and MIDI ports while
              you switch to Bome so that ACID will continue to play.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
