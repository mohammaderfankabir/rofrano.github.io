import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Bome Mouse Keyboard</h1>
        <p>
          Sometimes, you don’t have a hardware MIDI keyboard handy (like when
          traveling,) but you need to compose something with ACID that needs
          MIDI keyboard input. There is a great little software keyboard that
          you can use from Bome that will get you by in a pinch. Here’s how to
          set it up.
        </p>
      </section>
      <section>
        <h2>Prerequisites</h2>
        <ul>
          <li>
            <a href="/downloads/sfvr4.zip" download>
              Sony Virtual MIDI Router
            </a>
          </li>
          <li>
            <a
              href="https://www.bome.com/products/mousekeyboard"
              title="Bome Mouse Keyboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bome’s Mouse Keyboard
            </a>
          </li>
        </ul>
        <h2>Sony Virtual MIDI Router</h2>
        <p>
          The Virtual MIDI Router from Sony acts like a virtual MIDI cable. It
          allows you to route MIDI inputs and outputs as if you had real
          hardware MIDI ports with a MIDI cable between them. The ACID will
          think these ports are actual MIDI interfaces and allow you to assign
          the Bome The Mouse Keyboard to an input like a physical MIDI keyboard
          with a MIDI cable attached. Check out the instructions for installing
          the Virtual MIDI Router are on <Link href="/midirouter">here</Link>.
        </p>
        <h2>Bome’s Mouse Keyboard</h2>
        <p>
          First, install the Bome Mouse Keyboard using the installation utility.
          Then, follow the steps below to configure it for use with ACID.
        </p>
        <ol>
          <li>
            <p>Start the Bome Mouse Keyboard</p>
            <figure>
              <Image
                src="/guide/music/mousekeyboard/mousekeyboard-01-open.avif"
                alt="Open Bome Mouse keyboard"
                width={1800}
                height={1200}
              />
              <figcaption>Open Bome Mouse Keyboard</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select MIDI In and change it to none. You don’t want the Mouse
              Keyboard to use MIDI In since you’ll use it as an output device.
              (and you want ACID to use the virtual MIDI input)
            </p>
            <figure>
              <Image
                src="/guide/music/mousekeyboard/mousekeyboard-02-virtual-midi.avif"
                alt="Virtual MIDI"
                width={1800}
                height={1200}
              />
              <figcaption>Virtual MIDI</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select MIDI Out and change it to 1: Sonic Foundry MIDI Router.
              That will route the output of the Bome Mouse Keyboard to the input
              of the Virtual MIDI Router.
            </p>
            <figure>
              <Image
                src="/guide/music/mousekeyboard/mousekeyboard-03-midi-out.avif"
                alt="Midi Out"
                width={1800}
                height={1200}
              />
              <figcaption>Midi Out</figcaption>
            </figure>
          </li>
          <li>
            <p>Start Sony ACID and Select Options → Preferences.</p>
            <figure>
              <Image
                src="/guide/music/mousekeyboard/mousekeyboard-04-acid-options.avif"
                alt="ACID Options"
                width={1800}
                height={1200}
              />
              <figcaption>ACID Options</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select the MIDI tab, and at the bottom section labeled Make these
              devices available for MIDI input, place a check next to 1: Sonic
              Foundry MIDI Router. It tells ACID to accept MIDI data from port 1
              of the virtual MIDI router, where the Bome Mouse keyboard sends
              its output. Click Apply to accept these changes.
            </p>
            <figure>
              <Image
                src="/guide/music/mousekeyboard/mousekeyboard-05-midi-tab.avif"
                alt="Check the same virtual port as MIDI OUT in the Mouse Keyboard."
                width={1800}
                height={1200}
              />
              <figcaption>
                Check the same virtual port as MIDI OUT in the Mouse Keyboard.
              </figcaption>
            </figure>
          </li>
          <li>
            <p>
              Navigate to the General tab and uncheck the option “Close audio
              and MIDI ports when ACID is not an active application.” Click OK
              to close the properties window.
            </p>
            <figure>
              <Image
                src="/guide/music/mousekeyboard/mousekeyboard-06-general-tab.avif"
                alt="General Tab"
                width={1800}
                height={1200}
              />
              <figcaption>General Tab</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          That’s it! Now insert a Soft Synth and play the keys on the Bome Mouse
          Keyboard. The critical step is changing ACID’s default behavior to
          close the audio and MIDI ports when it loses focus. Closing the audio
          and MIDI ports is helpful when switching to another application, like
          Sound Forge, to edit audio before returning to ACID. However, with the
          Bome MIDI keyboard, ACID needs to keep the audio and MIDI ports active
          while you switch to Bome so ACID continues to play.
        </p>
      </section>
    </article>
  );
}
