import Image from "next/image";
import { HeadsUp } from "@/components/ui";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Extract MIDI Tracks in ACID</h1>
        <p>
          In ACID, one track can contain multiple MIDI tracks, each controlling
          a separate MIDI instrument on its channel. Because of this, ACID
          cannot assign MIDI patch information at the track level, as it cannot
          determine which MIDI track to send it to.
        </p>
      </section>
      <section>
        <h2>Using StolenTrack to extract MIDI tracks to ACID tracks</h2>
        <p>
          The solution is to extract the MIDI tracks so each ACID track contains
          only one MIDI track. So, the patches assigned to the ACID soft synth
          will apply to that MIDI track (unless the track contains patch change
          information, which you can delete using the List Editor). Newer
          versions of ACID Pro do this automatically.
        </p>
        <p>
          This tutorial shows how to use StolenTrack in older versions of ACID
          to extract MIDI tracks into separate ACID tracks. Make sure to
          download and install StolenTrack before starting.
        </p>
        <ol>
          <li>
            <p>
              Drop a multi-track MIDI file onto the ACID timeline and paint it
              for the duration.
            </p>
            <HeadsUp>
              Hold the <kbd>Ctrl</kbd> key and select Paint Tool to paint the
              entire song with one click!
            </HeadsUp>
            <figure>
              <Image
                src="/guide/music/stolentrack/stolentrack-01-timeline.avif"
                alt="ACID timeline"
                width={1800}
                height={1200}
              />
              <figcaption>ACID timeline</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Double-click the track number to open the Track Properties dialog.
              Select the General tab and observe that multiple MIDI tracks
              appear in different MIDI channels.
            </p>
            <figure>
              <Image
                src="/guide/music/stolentrack/stolentrack-02-track-properties.avif"
                alt="Track Properties"
                width={1800}
                height={1200}
              />
              <figcaption>Track Properties</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Click the MIDI Editors button, select StolenTrack from the list on
              the left, and click Add to move it to the right. After that, click
              OK to close the Track Properties dialog.
            </p>
            <figure>
              <Image
                src="/guide/music/stolentrack/stolentrack-03-midi-editors.avif"
                alt="Add “StolenTrack.”"
                width={1800}
                height={1200}
              />
              <figcaption>Add “StolenTrack.”</figcaption>
            </figure>
          </li>
          <li>
            <p>Insert a new MIDI track by selecting Insert → MIDI Track.</p>
            <figure>
              <Image
                src="/guide/music/stolentrack/stolentrack-04-insert.avif"
                alt="Insert"
                width={1800}
                height={1200}
              />
              <figcaption>Insert</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Repeat steps 2 and 3 to add StolenTrack to the new MIDI track’s
              properties, then select the StolenTrack tab.
            </p>
            <figure>
              <Image
                src="/guide/music/stolentrack/stolentrack-05-track-properties.avif"
                alt="Track Properties"
                width={1800}
                height={1200}
              />
              <figcaption>Track Properties</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select the Aliens tab and choose the original multi-channel MIDI
              track from the ***SELECT ALIEN*** dropdown menu.
            </p>
            <figure>
              <Image
                src="/guide/music/stolentrack/stolentrack-06-aliens.avif"
                alt="Select the original track as the Alien to steal from."
                width={1800}
                height={1200}
              />
              <figcaption>
                Select the original track as the Alien to steal from.
              </figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select the track you want to steal and click the Steal button to
              copy the MIDI track into your current ACID track.
            </p>
            <figure>
              <Image
                src="/guide/music/stolentrack/stolentrack-07-canonpiano.avif"
                alt="Select the tracks to steal and push the Steal button."
                width={1800}
                height={1200}
              />
              <figcaption>
                Select the tracks to steal and push the Steal button.
              </figcaption>
            </figure>
          </li>
          <li>
            <p>
              Close the Track Properties, hold the <kbd>Ctrl</kbd> key, and
              select the Paint Tool to view the results on your new MIDI track.
            </p>
            <figure>
              <Image
                src="/guide/music/stolentrack/stolentrack-08-timeline.avif"
                alt="MIDI data is now on the new track."
                width={1800}
                height={1200}
              />
              <figcaption>MIDI data is now on the new track.</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          Repeat steps 2 through 7 to steal all tracks into new ACID tracks.
          Naming the original MIDI tracks simplifies stealing.
        </p>
        <p>
          Finally, assign a VSTi soft synth to each ACID track, select your
          desired patch, and it will be saved and used in the project.
        </p>
      </section>
    </article>
  );
}
