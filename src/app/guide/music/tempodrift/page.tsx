import Image from "next/image";
import { ProTip, HeadsUp } from "@/components/ui";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Fixing Tempo Drift with Sound Forge</h1>
        <p>
          Sometimes, you want to use a live recording in ACID, but when the
          tempo drifts multiple times, creating beatmaps with the Beatmapper
          takes a lot of time. In such cases, a wave editor like Sound Forge
          offers precise control for correcting tempo at the measure level.
        </p>
        <p>
          In Sound Forge, the process involves slicing the song into measures,
          time-stretching them to a consistent length, and then appending them
          into a new WAV file that aligns with the tempo.
        </p>
        <p>Here is an overview of the procedure:</p>
        <ol>
          <li>Open the source WAV file in Sound Forge.</li>
          <li>Select a loop of one or more measures.</li>
          <li>Copy and paste the selection into a temporary WAV file.</li>
          <li>Time-stretch the temporary WAV to match the song’s BPM.</li>
          <li>Append the temporary WAV to the target WAV.</li>
          <li>Delete the temporary WAV.</li>
          <li>Repeat steps 2 to 6 until the entire file is beatmapped.</li>
        </ol>
      </section>
      <section>
        <ProTip>
          Enable the ACID Loop Creation toolbar in Sound Forge by selecting View
          → Toolbars → ACID Loop Creation Tools.
        </ProTip>
        <ol>
          <li>
            <p>
              Open the WAV file in Sound Forge and map the tempo by pressing the{" "}
              <kbd>M</kbd> key on each beat. Do this for a few measures to
              create visual markers for the beats.
            </p>
            <figure>
              <Image
                src="/guide/music/tempodrift/tempodrift-01-open.avif"
                alt="Open WAV File"
                width={1800}
                height={1200}
              />
              <figcaption>Open WAV File</figcaption>
            </figure>
          </li>
          <li>
            <p>
              After marking several measures, select from the first to the fifth
              marker (four beats of the first measure.) Fine-tune the selection
              ends to ensure a smooth loop in Sound Forge. If you hear clicks or
              pops, use the <kbd>Z</kbd> key or enable Auto Snap to Zero (
              <kbd>Ctrl</kbd> + <kbd>B</kbd>). That ensures all cuts are
              zero-crossings, which helps to eliminate issues at the loop point.
            </p>
            <figure>
              <Image
                src="/guide/music/tempodrift/tempodrift-02-selection.avif"
                alt="Selection"
                width={1800}
                height={1200}
              />
              <figcaption>Selection</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Enable the ACID Loop Creation Tools toolbar (View → Toolbars →
              ACID Loop Creation Tools) to see the BPM readout from your
              selection. The toolbar includes icons to Shift Selection Right,
              which you’ll use frequently in this process. Enable the Selection
              Grid Lines button on this toolbar to view the beat grids. The
              vertical lines should align closely with your markers. You can
              select two or more measures if they stay on the beat. The object
              is to make your selections just as large as the amount of time it
              takes the song to drift off tempo, but no larger. Beatmapping the
              song in ACID first will help you measure the onset of tempo drift.
            </p>
            <figure>
              <Image
                src="/guide/music/tempodrift/tempodrift-03-creation-tools.avif"
                alt="ACID Loop Creation Tools"
                width={1800}
                height={1200}
              />
              <figcaption>ACID Loop Creation Tools</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Once your selection loops seamlessly, copy it to a new WAV file
              using <kbd>Ctrl</kbd> + <kbd>C</kbd>, then <kbd>Ctrl</kbd> +{" "}
              <kbd>E</kbd>. It will be the target for building the beatmapped
              song. Save it using File → Save As and give it a name. Select the
              entire WAV and note its duration for time-stretching the other
              measures.
            </p>
            <figure>
              <Image
                src="/guide/music/tempodrift/tempodrift-04-copy.avif"
                alt="Copy"
                width={1800}
                height={1200}
              />
              <figcaption>Copy</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Activate the original sound file, then use the Shift Selection
              Right button on the ACID toolbar to move the selection to the next
              measure.
            </p>
            <figure>
              <Image
                src="/guide/music/tempodrift/tempodrift-05-shift.avif"
                alt="Shift Selection Right"
                width={1800}
                height={1200}
              />
              <figcaption>Shift Selection Right</figcaption>
            </figure>
            <HeadsUp>
              This point forward, don’t adjust the left selection point, or you
              risk gaps and jumpy playback.
            </HeadsUp>
          </li>
          <li>
            <p>
              Play the new looped section. If it doesn’t loop seamlessly, adjust
              the right-hand selection point, then copy it to a new WAV with{" "}
              <kbd>Ctrl</kbd> + <kbd>C</kbd>, <kbd>Ctrl</kbd> + <kbd>E</kbd>.
            </p>
            <figure>
              <Image
                src="/guide/music/tempodrift/tempodrift-06-loop.avif"
                alt="Loop"
                width={1800}
                height={1200}
              />
              <figcaption>Loop</figcaption>
            </figure>
            <p>
              This new WAV is temporary. We are using it solely as a scratch pad
              for time-stretching. To apply the time stretch, select Process →
              Sony Time Stretch. In the Time Stretch dialog, either set the
              Input Format to Tempo (bpm) and enter the beats per minute (bpm)
              of the final song or set the Final Time to match the length of the
              first measure. All subsequent measures will adjust to this time.
              Click OK to apply the time stretch.
            </p>
            <figure>
              <Image
                src="/guide/music/tempodrift/tempodrift-07-time-stretch.avif"
                alt="Sony Time Stretch"
                width={1800}
                height={1200}
              />
              <figcaption>Sony Time Stretch</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Copy the file using <kbd>Ctrl</kbd> + <kbd>C</kbd>, switch to the
              target file, press <kbd>End</kbd> to position the cursor at the
              end, and paste with <kbd>Ctrl</kbd> + <kbd>V</kbd>. Finally, Save
              the target file with <kbd>Ctrl</kbd> + <kbd>S</kbd>.
            </p>
            <figure>
              <Image
                src="/guide/music/tempodrift/tempodrift-08-append.avif"
                alt="New Measure"
                width={1800}
                height={1200}
              />
              <figcaption>New Measure</figcaption>
            </figure>
          </li>
        </ol>
        <p>Delete the temporary file of the last measure.</p>
        <p>Repeat the steps of:</p>
        <ol>
          <li>Advance the selection</li>
          <li>
            Adjust the right side of the selection to make a seamless loop
          </li>
          <li>Copy the loop to a new temporary WAV</li>
          <li>
            Apply Sony Time-stretch to the temporary WAV to match the length of
            the first measure
          </li>
          <li>Append the temporary WAV to the new target beatmapped file</li>
          <li>Delete the temporary WAV</li>
          <li>Go To Step 1</li>
        </ol>
        <p>
          Repeat until the entire file is beatmapped. It’s tedious, but it’s
          doable. If you don’t have Sound Forge, use Sound Forge Audio Studio
          instead.
        </p>
      </section>
    </article>
  );
}
