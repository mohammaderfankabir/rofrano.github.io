import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Using Tempo Mapping to Fix Tempo Drift</h1>
        <p>
          What if you want to add ACID loops to a live recording? Live music
          often drifts in tempo without a click track. So, ACID’s Beatmapper
          won’t work. The solution is tempo mapping, which adjusts the project
          tempo to match the natural timing of the live performance rather than
          forcing the song to fit a fixed tempo.
        </p>
      </section>
      <section>
        <ol>
          <li>
            <p>
              Add the song to your project as a One-Shot to keep the original
              tempo, and dismiss the Beatmapper dialog if it appears.
            </p>
            <figure>
              <Image
                src="/guide/music/tempomapping/tempomapping-01-one-shot.avif"
                alt="One Shot"
                width={1800}
                height={1200}
              />
              <figcaption>One Shot</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Set the project tempo to match the song, around 125 BPM for this
              one.
            </p>
            <figure>
              <Image
                src="/guide/music/tempomapping/tempomapping-02-set-tempo.avif"
                alt="Tempo Settings"
                width={1800}
                height={1200}
              />
              <figcaption>Tempo Settings</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Next, drop a Tempo Marker <kbd>T</kbd> at each measure to map the
              song’s tempo to its live feel.
            </p>
            <figure>
              <Image
                src="/guide/music/tempomapping/tempomapping-03-tempo-marker.avif"
                alt="Drop a tempo marker at the start of each measure."
                width={1800}
                height={1200}
              />
              <figcaption>
                Drop a tempo marker at the start of each measure.
              </figcaption>
            </figure>
          </li>
          <li>
            <p>
              Play the song and press the <kbd>H</kbd> key on each downbeat to
              drop a Time Marker. If your timing is off, you can adjust the
              markers later. Use the <kbd>Shift</kbd> key while moving them to
              avoid snapping.
            </p>
            <figure>
              <Image
                src="/guide/music/tempomapping/tempomapping-04-time-marker.avif"
                alt="Drop Time Markers at each downbeat."
                width={1800}
                height={1200}
              />
              <figcaption>Drop Time Markers at each downbeat.</figcaption>
            </figure>
            <p>
              Watch how the distance between Tempo Markers (on the first beat)
              and Time Markers (on the downbeats) increases, showing the tempo
              drift.
            </p>
            <figure>
              <Image
                src="/guide/music/tempomapping/tempomapping-05-drift.avif"
                alt="Tempo Drift"
                width={1800}
                height={1200}
              />
              <figcaption>Tempo Drift</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Place your cursor at the Tempo Marker, right-click the Time
              Marker, and select “Adjust Tempo to Match Mark to Cursor” to
              adjusts the tempo so the downbeat aligns with the cursor at the
              start of the measure.
            </p>
            <figure>
              <Image
                src="/guide/music/tempomapping/tempomapping-06-adjust.avif"
                alt="Adjust Tempo to Match Mark to Cursor"
                width={1800}
                height={1200}
              />
              <figcaption>Adjust Tempo to Match Mark to Cursor</figcaption>
            </figure>
            <p>
              Observe that the downbeat aligns with the start of the measure.
              Repeat for all tempo markers.
            </p>
            <figure>
              <Image
                src="/guide/music/tempomapping/tempomapping-07-downbeat.avif"
                alt="Tempo and time are in sync."
                width={1800}
                height={1200}
              />
              <figcaption>Tempo and time are in sync.</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          Your project now has a new tempo for each measure, with the downbeat
          at the start of each measure.
        </p>
        <p>
          It works because Time Markers track Absolute Time, while Tempo Markers
          track Relative Time. “Adjust Tempo to Match Mark to Cursor” aligns the
          absolute time of the downbeat with the relative start of the measure.
          This powerful yet often overlooked feature in ACID simplifies mapping
          songs with tempo drift.
        </p>
      </section>
    </article>
  );
}
