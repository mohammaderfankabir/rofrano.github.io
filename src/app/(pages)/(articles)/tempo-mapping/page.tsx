import Image from "next/image";

export default function TempoMapping() {
  return (
    <>
      <div id="tempo-mapping">
        <main id="page-content" className="page-content">
          <article>
            <h1>Using Tempo Mapping to Fix Tempo Drift</h1>
            <p>
              What do you do when you want to add ACID loops to a live song? The
              problem with live music is that is usually not performed to a
              “click-track” and the tempo drifts so that the ACID Beatmapper
              cannot be used. The answer is simple. What you need to do is
              something I call “Tempo Mapping”. Unlike beatmapping which adjusts
              the tempo of the song to match the project, tempo mapping adjust
              the tempo of the project to match the changes in the live feel of
              the song.
            </p>
            <p>To do this:</p>
            <ol>
              <li>
                <p>
                  Add the song to your project as a One-Shot (this is important
                  because you don’t want ACID changing the tempo of the song).
                  If the Beatmapper dialog comes up when you add it, just
                  dismiss it.
                </p>
                <figure>
                  <Image
                    src="/tempo-mapping/tempo-mapping-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Set the tempo of the song to roughly match the song. This
                  particular song is around 125 BPM
                </p>
                <figure>
                  <Image
                    src="/tempo-mapping/tempo-mapping-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Next drop a <strong>Tempo Marker</strong> (T) at each measure
                  if the song. These temp markers will be used to map each
                  measure to match the live feel of the song (hence the term
                  “tempo mapping”)
                </p>
                <figure>
                  <Image
                    src="/tempo-mapping/tempo-mapping-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Play the song and tap the <strong>H</strong> key on each
                  downbeat (the H key drops a <strong>Time Marker</strong>) If
                  your timing is a little off, you can go back and adjust them
                  later to be sure they land right on the downbeat. If you do,
                  use the Shift key to avoid snapping as you move.{" "}
                </p>
                <figure>
                  <Image
                    src="/tempo-mapping/tempo-mapping-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
                <p>
                  Let’s take a moment to visually see what is happening here.
                  Look at how the distance between the{" "}
                  <strong>Tempo Markers</strong> which are set to the first beat
                  of each measure, and the <strong>Time Markers</strong> which
                  are the actual downbeats drift further apart over time.{" "}
                  <em>You can actually see the tempo drift</em>!
                </p>
                <figure>
                  <Image
                    src="/tempo-mapping/tempo-mapping-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Here is where the magic happens. Place your cursor at the{" "}
                  <strong>Tempo Marker</strong>, <em>Right-click</em> the{" "}
                  <strong>Time Marker</strong> and Select “
                  <em>Adjust Tempo to Match Mark to Cursor</em>”. This adjusts
                  the tempo of the previous tempo marker so that the time marker
                  (the downbeat) matches the cursor (which you placed at the
                  start of the measure).
                </p>
                <figure>
                  <Image
                    src="/tempo-mapping/tempo-mapping-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
                <p>
                  Now your downbeat starts at the beginning of the measure.
                  Repeat this for all of the temp markers. Place the cursor on
                  the tempo marker, right-click the time marker, and select
                  “Adjust Tempo to Match Mark to Cursor”.
                </p>
                <figure>
                  <Image
                    src="/tempo-mapping/tempo-mapping-step-07.avif"
                    alt="Step seven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seven</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              Notice that your finished project now has a new tempo for each
              measure which brings the downbeat at the start of the measure.
            </p>
            <p>
              The reason this works is because <strong>Time Markers</strong>{" "}
              mark “wall-clock” time or “absolute” time and{" "}
              <strong>Tempo Markers</strong> mark “relative” time of the beat.
              What you are saying is that you want the absolute time of the
              downbeat to match the relative beginning of the measure. The “
              <em>Adjust Tempo to Match Mark to Cursor</em>” function in ACID is
              a powerful and often overlooked feature that can make easy work
              out of mapping songs with temp drift.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
