import Image from "next/image";

export default function MidiTracksAcid() {
  return (
    <>
      <div id="midi-tracks-acid">
        <main id="page-content" className="page-content">
          <article>
            <h1>Extract MIDI Tracks in ACID</h1>
            <p>
              As you may know, one track in ACID can contain multiple MIDI
              tracks. Each MIDI track can control a separate MIDI instrument on
              its own MIDI channel. Because of this, ACID cannot allow you to
              assign MIDI patch information at the ACID track level because
              there is no way of knowing which MIDI track to send it to.
            </p>
            <h2 id="using-stolentrack-to-extract-midi-tracks-to-acid-tracks">
              Using StolenTrack to extract MIDI tracks to ACID tracks
            </h2>
            <p>
              The solution is to extract the MIDI tracks so that each ACID track
              only contains one MIDI track. Then the patches you assign to the
              ACID soft synth will be used for that one MIDI track as well.
              (providing the MIDI track doesn’t contain patch change
              information. If it does, you can just delete it with the List
              Editor) Newer versions of ACID Pro will do this for your
              automatically.
            </p>
            <p>
              This tutorial will show you how to use StolenTrack in older
              versions of ACID to extract MIDI tracks into their own ACID
              tracks. You must download and install <strong>StolenTrack</strong>{" "}
              before starting this tutorial.
            </p>
            <ol>
              <li>
                <p>
                  Drop a multi track MIDI file onto the ACID timeline and paint
                  it for the duration. (hint: use{" "}
                  <strong>Ctrl+Paint Tool</strong> to paint the entire song with
                  one click!)
                </p>
                <figure>
                  <Image
                    src="/midi-tracks-acid/stolen-track-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  <em>Double-click</em> on the track number to bring up the{" "}
                  <strong>Track Properties</strong> dialog. Select the General
                  tab you you’ll see that there are multiple MIDI tracks
                  assigned to multiple MIDI channels.
                </p>
                <figure>
                  <Image
                    src="/midi-tracks-acid/stolen-track-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Press the <strong>MIDI Editors</strong> button and select{" "}
                  <strong>StolenTrack</strong> from the list on the left, and
                  press <strong>Add-&gt;</strong> to add it to the list on the
                  right. Then press <strong>OK</strong> and close the
                  <strong>Track Properties</strong> dialog. We are done with
                  this track.
                </p>
                <figure>
                  <Image
                    src="/midi-tracks-acid/stolen-track-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select <strong>Insert &gt; MIDI Track</strong> to insert a new
                  MIDI track into your project.
                </p>
                <figure>
                  <Image
                    src="/midi-tracks-acid/stolen-track-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Repeat <strong>Steps 2 and 3</strong> to insert StolenTrack
                  into the properties of this new MIDI track. Then select the{" "}
                  <strong>Stolen Track</strong> tab.
                </p>
                <figure>
                  <Image
                    src="/midi-tracks-acid/stolen-track-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select the <strong>Aliens</strong> tab and press the{" "}
                  <strong>*** SELECT ALIEN **</strong>* bar to select the
                  original multi-channel MIDI track as the alien to steal from.
                </p>
                <figure>
                  <Image
                    src="/midi-tracks-acid/stolen-track-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select the track you want to steal and press the{" "}
                  <strong>Steal</strong> button at the bottom. This will copy
                  the MIDI track into your current ACID track.
                </p>
                <figure>
                  <Image
                    src="/midi-tracks-acid/stolen-track-step-07.avif"
                    alt="Step seven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seven</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Close the Track Properties and paint your new MIDI track (
                  <strong>Ctrl+Paint Tool</strong>) to see the results.
                </p>
                <figure>
                  <Image
                    src="/midi-tracks-acid/stolen-track-step-08.avif"
                    alt="Step eight"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eight</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              Repeat steps 2 through 7 until you have stolen all the the tracks
              into new ACID tracks. If you name the MIDI tracks in the original
              ACID track, those names will show up in Stolen Track and it will
              be easier to figure out which track you are stealing.
            </p>
            <p>
              Now you can assign a VSTi soft synth to each ACID track, select
              the patch you like, and that will be the patch that is saved in
              the ACID project and used for that track.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
