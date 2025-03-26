import Image from "next/image";

export default function VirtualMidiRouter() {
  return (
    <>
      <div id="virtual-midi-router">
        <main id="page-content" className="page-content">
          <article>
            <h1>Virtual MIDI Router Installation</h1>
            <p>
              The Virtual MIDI Router from Sony acts like a virtual MIDI cable.
              It allows you to route MIDI inputs and outputs as if you had real
              hardware MIDI ports with a MIDI cable between them. ACID Pro,
              Vegas Pro, and other MIDI applications will think these ports are
              real MIDI interfaces and allow you to assign other software like
              the Bome Mouse Keyboard to an input just like it was a real
              hardware MIDI keyboard with a MIDI cable attached. It’s a very
              handy device so lets see how to install it.
            </p>
            <p>
              Software Needed for this tutorial can be downloaded from the Sony
              Creative Software Download Utilities web site:
            </p>
            <p>
              <a href="http://www.sonycreativesoftware.com/download/utilities">
                Sony Virtual MIDI Router
              </a>
            </p>
            <p>
              The instructions for the Virtual MIDI Router for Windows NT and
              Windows 2000 are included in the download package from Sony. This
              tutorial is for people who are running Windows XP which is not
              covered in Sony’s instructions:
            </p>
            <ol>
              <li>
                <p>
                  Download the Virtual MIDI Router from the Sony website and
                  expand the ZIP file to reveal the <strong>WinNT</strong>{" "}
                  folder. You will need to find this later in Step 10 when we
                  install the driver.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-01-win-nt-folder.avif"
                    alt="Windows nt folder"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Windows nt folder</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Go to: <strong>Start &gt; Control Panel</strong> and{" "}
                  <em>double-click</em> on <strong>Add Hardware</strong>. (
                  <em>
                    Note: you must be in Classic View to see the icons. Category
                    View does not have this option
                  </em>
                  )
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-02-control-panel.avif"
                    alt="Control panel"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Control panel</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  This brings up the Add Hardware Wizard. Click the{" "}
                  <strong>Next</strong> button to begin.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-03-add-hardware.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select{" "}
                  <strong>Yes, I have already connected the hardware</strong>.
                  Press the <strong>Next</strong> button to continue.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-04-add-hardware.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Scroll to the bottom of the list and Select{" "}
                  <strong>Add a new hardware device</strong> and press{" "}
                  <strong>Next</strong>.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-05-add-hardware.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select{" "}
                  <strong>
                    Install the hardware that I manually select from a list
                    (Advanced)
                  </strong>{" "}
                  and press <strong>Next</strong>.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-06-add-hardware.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Scroll down the list and Select{" "}
                  <strong>Sound, video and game controllers</strong> and then
                  press <strong>Next</strong>.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-07-add-hardware.avif"
                    alt="Step seven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seven</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select <strong>Have Disk…</strong> and press{" "}
                  <strong>Next</strong>.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-08-add-hardware.avif"
                    alt="Step eight"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eight</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Press the <strong>Browse</strong> button
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-09-add-hardware.avif"
                    alt="Step nine"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step nine</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Navigate to the <strong>WinNT</strong> folder you unzipped in
                  Step 1 and select the <strong>OEMSETUP.INF</strong> file.
                  Press the <strong>Open</strong> button to continue.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-10-add-hardware.avif"
                    alt="Step ten"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step ten</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Press the <strong>OK</strong> button.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-11-add-hardware.avif"
                    alt="Step eleven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eleven</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Windows will complain that this driver has not passed their
                  rigorous testing for software. (yea right!) Press{" "}
                  <strong>Continue Anyway</strong>.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-12-add-hardware.avif"
                    alt="Step twelve"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step twelve</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  If everything went right, it will have correctly found the{" "}
                  <strong>Sonic Foundry Virtual MIDI Router (x86)</strong>.
                  Press <strong>Next</strong> to continue.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-13-add-hardware.avif"
                    alt="Step thirteen"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step thirteen</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Press <strong>Next</strong> to confirm that you want to
                  install the Sonic Foundry Virtual MIDI Router (x86)
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-14-add-hardware.avif"
                    alt="Step fourteen"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step fourteen</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Once again Windows feels compelled to warn you about
                  unverified drivers. Once again well tell Windows that we know
                  what we are doing and press <strong>Continue Anyway</strong>.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-15-add-hardware.avif"
                    alt="Step fifteen"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step fifteen</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  At the Configuration dialog you get to select between 1 to 4
                  virtual MIDI ports. You only need one for this tutorial but
                  feel free to select more. When you are finished selecting the
                  number of ports, press <strong>OK</strong> to continue.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-16-add-hardware.avif"
                    alt="Step sixteen"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step sixteen</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Congratulations. You have successfully installed the Virtual
                  MIDI Router. Press <strong>Finish</strong> to claim the
                  rewards of your labor.
                </p>
                <figure>
                  <Image
                    src="/virtual-midi-router/virtual-midi-router-step-17-add-hardware.avif"
                    alt="Step seventeen"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seventeen</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              Oh yea, one last thing. Windows isn’t as robust as a “real”
              operating system like Unix so you have to reboot every time you
              make a change to the system. Maybe someday Linux will take over
              the desktop and we will never have to reboot our computers again.
              Until that day, Press <strong>OK</strong> and go get a cup of
              coffee. 😉
            </p>
            <p>That’s it, you’re done.</p>
          </article>
        </main>
      </div>
    </>
  );
}
