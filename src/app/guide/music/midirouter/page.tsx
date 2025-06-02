import Image from "next/image";
import { ProTip } from "@/components/ui";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Virtual MIDI Router Installation</h1>
        <p>
          The Virtual MIDI Router from Sony acts like a virtual MIDI cable. It
          allows you to route MIDI inputs and outputs as if you had real
          hardware MIDI ports with a MIDI cable between them. ACID Pro, Vegas
          Pro, and other MIDI applications will think these ports are actual
          MIDI interfaces and allow you to assign other software like the Bome
          Mouse Keyboard to input just like it were a physical MIDI keyboard
          with a MIDI cable attached. It’s a handy device, so let’s see how to
          install it.
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
        </ul>
        <p>
          Sony’s download package includes instructions for using the Virtual
          MIDI Router on Windows NT and Windows 2000. However, these
          instructions do not cover Windows XP. This tutorial is designed
          specifically for users running Windows XP.
        </p>
        <ol>
          <li>
            <p>
              Download the Virtual MIDI Router from the Sony website and extract
              the ZIP file to reveal the WinNT folder. You’ll need this folder
              later in Step 10 when installing the driver.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-01-win-nt-folder.avif"
                alt="Windows NT folder"
                width={1800}
                height={1200}
              />
              <figcaption>Windows NT folder</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Go to Start → Control Panel and double-click the Add Hardware icon
              to open it.
            </p>
            <ProTip>
              You must be in Classic View to see the icons. Category View does
              not have this option
            </ProTip>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-02-control-panel.avif"
                alt="Control panel"
                width={1800}
                height={1200}
              />
              <figcaption>Control panel</figcaption>
            </figure>
          </li>
          <li>
            <p>
              In the Add Hardware Wizard window, click the Next button to
              continue.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-03-add-hardware.avif"
                alt="Add Hardware Wizard"
                width={1800}
                height={1200}
              />
              <figcaption>Add Hardware Wizard</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select “Yes, I have already connected the hardware,” and click
              Next.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-04-confirm.avif"
                alt="Confirm Hardware"
                width={1800}
                height={1200}
              />
              <figcaption>Confirm Hardware</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Scroll to the bottom of the list to Select Add a new hardware
              device, then click Next.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-05-add-device.avif"
                alt="Add a New Hardware Device"
                width={1800}
                height={1200}
              />
              <figcaption>Add a New Hardware Device</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select “Install the hardware that I manually select from a list
              (Advanced).” Click next to continue.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-06-manual-install.avif"
                alt="Manual Install"
                width={1800}
                height={1200}
              />
              <figcaption>Manual Install</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Scroll down the list to Select Sound, video, and game controllers,
              then click Next.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-07-hardware-type.avif"
                alt="Common Hardware Type"
                width={1800}
                height={1200}
              />
              <figcaption>Common Hardware Type</figcaption>
            </figure>
          </li>
          <li>
            <p>Select “Have Disk…” and then click Next.</p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-08-have-disk.avif"
                alt="Have Disk"
                width={1800}
                height={1200}
              />
              <figcaption>Have Disk</figcaption>
            </figure>
          </li>
          <li>
            <p>Click “Browse” to locate the file.</p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-09-install-from-disk.avif"
                alt="Install From Disk"
                width={1800}
                height={1200}
              />
              <figcaption>Install From Disk</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Navigate to the WinNT folder you unzipped earlier and select the{" "}
              OEMSETUP.INF file. Click the Open button to continue.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-10-locate-file.avif"
                alt="Locate File"
                width={1800}
                height={1200}
              />
              <figcaption>Locate File</figcaption>
            </figure>
          </li>
          <li>
            <p>Press the OK button.</p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-11-install-from-disk.avif"
                alt="Install From Disk"
                width={1800}
                height={1200}
              />
              <figcaption>Install From Disk</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Windows will complain that this driver has not passed their
              rigorous testing for software. (yeah, right!) Click Continue
              Anyway.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-12-warning.avif"
                alt="Warning"
                width={1800}
                height={1200}
              />
              <figcaption>Warning</figcaption>
            </figure>
          </li>
          <li>
            <p>
              If all goes well, it should have successfully detected the Sonic
              Foundry Virtual MIDI Router (x86). Click Next to continue.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-13-driver.avif"
                alt="Driver"
                width={1800}
                height={1200}
              />
              <figcaption>Driver</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Click Next to confirm that you want to install the Sonic Foundry
              Virtual MIDI Router (x86)
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-14-install.avif"
                alt="Install Driver"
                width={1800}
                height={1200}
              />
              <figcaption>Install Driver</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Once again, Windows will warn about unverified drivers. Click
              Continue Anyway.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-15-warning.avif"
                alt="Warning"
                width={1800}
                height={1200}
              />
              <figcaption>Warning</figcaption>
            </figure>
          </li>
          <li>
            <p>
              When, in the Configuration dialog, you can choose between 1 and 4
              virtual MIDI ports. You only need one for this tutorial, but feel
              free to select more. Then, click OK to continue.
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-16-configure.avif"
                alt="Configure Sonic Foundry VMR"
                width={1800}
                height={1200}
              />
              <figcaption>Configure Sonic Foundry VMR</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Congratulations! You have successfully installed the Virtual MIDI
              Router. To close the wizard, click “Finish.”
            </p>
            <figure>
              <Image
                src="/guide/music/midirouter/midirouter-17-finish.avif"
                alt="Completing the Add Hardware Wizard"
                width={1800}
                height={1200}
              />
              <figcaption>Completing the Add Hardware Wizard</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          Oh yeah, one last thing. Windows isn’t as robust as a “real” operating
          system like Unix. So, you’ll need to reboot whenever you make system
          changes. Maybe someday Linux will take over the desktop, and rebooting
          will be a thing of the past. Until then, click OK and grab a cup of
          coffee. 😉
        </p>
        <p>That’s it, well done.</p>
      </section>
    </article>
  );
}
