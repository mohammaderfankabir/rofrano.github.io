import Image from "next/image";

export default function TempoDriftSoundforge() {
  return (
    <>
      <div id="tempo-drift-soundforge">
        <main id="page-content" className="page-content">
          <article>
            <h1>Fixing Tempo Drift with Sound Forge</h1>
            <p>
              Sometimes you want to use a live recording in ACID but the
              Beatmapper can’t be used effectively because the tempo drifts
              several times throughout the song. In these extreme cases you can
              fix tempo drift in a wave editor like Sound Forge. Sound Forge has
              an optimized workflow for working with sound files at this level
              or granularity where each measure may have to be corrected.
              Creating that many beatmaps in ACID is just too time consuming.
            </p>
            <p>
              The procedure in Sound Forge involves slicing the original song
              into measures and <em>time-stretching</em> each measure to be a
              constant length. Then append each measure to a new wave file to
              create a new file that is perfectly locked to the tempo.
            </p>
            <p>Here is an overview of the procedure:</p>
            <ol>
              <li>Open the source wave file to be beatmapped in Sound Forge</li>
              <li>Make a loop selection of one or more measures in duration</li>
              <li>Copy and paste to a new wave to a temporary wave</li>
              <li>Time-stretch the temporary wave to match the song’s BPM</li>
              <li>Append the temporary wave to the target wave</li>
              <li>
                Delete the temporary wave and repeat at step 2 until the entire
                file is mapped.
              </li>
            </ol>
            <p>
              <strong>Tip:</strong> Turn on the ACID Loop Creation toolbar in
              Sound Forge to assist in working with ACID Loops. (
              <strong>View | Toolbars… | ACID Loop Creation Tools</strong>)
            </p>
            <figure>
              <Image
                src="/tempo-drift-soundforge/tempo-drift-step-01.avif"
                alt="Step one"
                width={1800}
                height={1200}
              />
              <figcaption>Step one</figcaption>
            </figure>
            <ol>
              <li>
                <p>
                  Open the wave file in Sound Forge. I like to start by mapping
                  the tempo of the file with Markers. To do this, play the file
                  and tap the ‘<strong>M</strong>’ key on each beat. Do this for
                  a few measures to give you a visual cue of the beats in each
                  measure.
                </p>
                <figure>
                  <Image
                    src="/tempo-drift-soundforge/tempo-drift-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Once several measures have been marked, stop and make a
                  selection from the first marker to the fifth marker. This
                  should encompass the four beats of the first measure. Fine
                  tune the ends of the selection so that the measure loops
                  perfectly when played as a loop in Sound Forge. If you hear
                  clicks or pops, make sure you use either the ‘
                  <strong>Z</strong>’ key to snap your selection to the zero
                  cross points, or use the menu{" "}
                  <strong>Options &gt; Auto Snap to Zero (Ctrl+B)</strong>. This
                  will ensure that all cuts are a zero crossings. Looping at the
                  zero crossing will help eliminate clicks or pops at the loop
                  point.
                </p>
                <figure>
                  <Image
                    src="/tempo-drift-soundforge/tempo-drift-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Turn on the <em>ACID Loop Creation Tools</em> toolbar (
                  <strong>
                    View &gt; Toolbars… &gt; ACID Loop Creation Tools
                  </strong>
                  ) to be able to see the BPM readout from your selection. There
                  are icons on this toolbar to <em>Shift Selection Right</em>{" "}
                  which we will be using a lot in this procedure. Turn on the{" "}
                  <em>Selection grid lines</em> button from this toolbar to see
                  the beat grids. These vertical lines should line up fairly
                  close to your markers. You may try and select two or more
                  measures if you think they will stay on the beat. The object
                  is to make your selections just as large as the amount of time
                  it takes the song to drift off tempo, but no larger. If you
                  Beatmap the song in ACID first, this will give you a good
                  indication of how soon tempo drift will occur.
                </p>
                <figure>
                  <Image
                    src="/tempo-drift-soundforge/tempo-drift-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Once you are happy that your selection loops seamlessly, Copy
                  it to a new wave file with <strong>Ctrl+C</strong>,{" "}
                  <strong>Ctrl+E</strong>. This new file will be used as the
                  target to build the beatmapped song. Select{" "}
                  <strong>File &gt; Save As</strong> on the new file and give
                  the file a name. Next, select the entire new wave and make a
                  note of the duration by writing it down. You will time-stretch
                  all the other measures to this duration.
                </p>
                <figure>
                  <Image
                    src="/tempo-drift-soundforge/tempo-drift-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Give the original sound file the focus and press the{" "}
                  <em>Shift Selection Right</em> button on the ACID toolbar to
                  advance the selection to the next measure.{" "}
                </p>
                <figure>
                  <Image
                    src="/tempo-drift-soundforge/tempo-drift-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
                <p>
                  <strong>~IMPORTANT:~</strong> From this point on, don’t touch
                  the left selection point. If you do, the song will have gaps a
                  playback will be jumpy.
                </p>
              </li>
              <li>
                <p>
                  Play the new looped section. If this new selection doesn’t
                  loops seamlessly, adjust the right hand selection point until
                  it does. Do not at any time adjust the left hand selection
                  point. Doing so will interrupt the flow of the song. Move the
                  right selection point, if needed, to make the measure loop
                  seamlessly. Copy this selection to a new wave with{" "}
                  <strong>Ctrl+C</strong>, <strong>Ctrl+E</strong>.{" "}
                </p>
                <figure>
                  <Image
                    src="/tempo-drift-soundforge/tempo-drift-step-07.avif"
                    alt="Step seven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seven</figcaption>
                </figure>
                <p>
                  This new wave is just temporary. We are only using it as a
                  scratch pad for doing the time stretching. On this new wave
                  select <strong>Process &gt; Sony Time Stretch….</strong>In the
                  Time Stretch dialog either change <em>Input format</em> to{" "}
                  <strong>Tempo (bpm)</strong> and enter the beats per minute of
                  the final song, or change the <em>Final Time</em> to match the
                  length of the first measure. All of the subsequent measures
                  will be adjusted to this time. Press OK to time stretch.
                </p>
                <figure>
                  <Image
                    src="/tempo-drift-soundforge/tempo-drift-step-08.avif"
                    alt="Step eight"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eight</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Now copy and paste this file to the end of the target file we
                  are creating. Use <strong>Ctrl+C</strong> to copy, give the
                  new target file the focus, press the ‘<strong>End</strong>’
                  key to be sure the cursor is positioned at the end of the
                  file, and finally press <strong>Ctrl+V</strong> to append the
                  new measure at the end of the file. Press{" "}
                  <strong>Ctrl+S</strong> to save the target file.
                </p>
                <figure>
                  <Image
                    src="/tempo-drift-soundforge/tempo-drift-step-09.avif"
                    alt="Step nine"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step nine</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              You can now delete the temporary file of the last measure without
              saving it.
            </p>
            <p>Repeat the steps of:</p>
            <ol>
              <li>Advance the selection</li>
              <li>
                Adjust the right side of the selection to make a seamless loop
              </li>
              <li>Copy the loop to a new temporary wave</li>
              <li>
                Apply Sony Time-stretch to the temporary wave to match the
                length of the first measure
              </li>
              <li>
                Append the temporary wave to the new target beatmapped file
              </li>
              <li>Delete the temporary wave</li>
              <li>Go To Step 1</li>
            </ol>
            <p>
              Repeat until the entire file is beatmapped. It’s very tedious, but
              it can be done. If you don’t have Sound Forge you can use the
              Sound Forge Audio Studio. It has all the features you need for
              this job.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
