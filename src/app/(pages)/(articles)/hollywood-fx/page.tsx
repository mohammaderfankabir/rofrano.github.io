import Image from "next/image";

export default function HollywoodFx() {
  return (
    <>
      <div id="hollywood-fx">
        <main id="page-content" className="page-content">
          <article>
            <h1>Exporting and Importing a Transition made with Hollywood FX</h1>
            <p>
              Wouldn’t it be nice if everything you needed was a plug-in to
              Vegas Pro? Unfortunately, there are lots of standalone packages
              that do great FX but don’t integrate into Vegas. One of these that
              I use is Pinnacle Hollywood FX. It has some great canned 3D
              transitions for weddings and other events. I thought I would share
              my workflow for doing this.
            </p>
            <p>
              I also have some transitions that I created in HFX for you to{" "}
              <a href="/downloads/hfx.tar">download</a> and enjoy. These
              transitions along with many other FREE high quality HFX
              transitions are also available on the{" "}
              <a href="http://declic-video-fx.com/">Déclic Vidéo</a> site which
              I highly recommend you visit if you are into Hollywood FX.
            </p>
            <h2 id="the-following-steps-should-be-done-in-vegas">
              The following steps should be done in Vegas
            </h2>
            <ol>
              <li>
                <p>
                  Create your normal transition in your video. Note: since
                  Hollywood FX 3D transitions have a lot of movement, you may
                  want them to transition longer so your viewer can “soak them
                  in”. In this example we use a Wedding Book transition which
                  lasts 3 seconds.
                </p>
                <figure>
                  <Image
                    src="/hollywood-fx/hollywood-fx-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Turn on <em>Ignore Event Grouping</em> (
                  <strong>Ctrl+Shift+U</strong>) This will allow you to move
                  events independent of their groups (i.e., move video without
                  audio)
                </p>
              </li>
              <li>
                <p>
                  Split the video one frame before and one frame after the
                  transition (<strong>S</strong>) (This will leave the audio
                  uncut).
                </p>
                <figure>
                  <Image
                    src="/hollywood-fx/hollywood-fx-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Insert a new video track above the track you are working on (
                  <strong>Ctrl+Shift+Q</strong>)
                </p>
              </li>
              <li>
                <p>
                  Move the two split transition clips up to the new video track
                  and place them end-to-end (as a cut with no transition so it
                  is twice the size of the original hole it came out of)
                </p>
                <figure>
                  <Image
                    src="/hollywood-fx/hollywood-fx-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Make a selection around these two clips and render just this
                  section of the video to a new DV AVI file. This will be the
                  file you work with in Hollywood FX.
                </p>
              </li>
              <li>
                <p>
                  Delete the clips on the upper track, they are no longer needed
                </p>
              </li>
              <li>
                <p>
                  Press <strong>Ctrl+Shift+U</strong> again to turn off{" "}
                  <em>Ignore Event Grouping</em> (which will keep groups
                  together again)
                </p>
              </li>
            </ol>
            <h2 id="the-following-steps-should-be-done-in-pinnacle-studio">
              The following steps should be done in Pinnacle Studio
            </h2>
            <ol>
              <li>
                <p>Bring the rendered clip into Pinnacle Studio</p>
                <figure>
                  <Image
                    src="/hollywood-fx/hollywood-fx-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Use the razor to cut at the original place where the two clips
                  meet
                </p>
              </li>
              <li>
                <p>
                  Drop a HFX transition and overlap so there is only one frame
                  remaining on each size (this is why we added an extra frame in
                  Vegas)
                </p>
                <figure>
                  <Image
                    src="/hollywood-fx/hollywood-fx-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Render this new clip with the HFX out as an DV AVI file
                  without audio
                </p>
              </li>
            </ol>
            <h2 id="the-following-steps-should-be-done-back-in-vegas">
              The following steps should be done back in Vegas
            </h2>
            <ol>
              <li>
                <p>
                  Drop this new AVI file in the hole in the video track that was
                  left by moving the two split clips up a track.
                </p>
                <figure>
                  <Image
                    src="/hollywood-fx/hollywood-fx-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              The new AVI file should fit perfectly into the hole and be frame
              accurate. The image below is the Hollywood FX Wedding Album
              transition. There are many 3D transitions that are appropriate for
              certain event videography. This tutorial can be adapted to export
              and import video to be used with any standalone application.
            </p>
            <figure>
              <Image
                src="/hollywood-fx/hollywood-fx-step-07-final-ouput.avif"
                alt="Output"
                width={1800}
                height={1200}
              />
              <figcaption>Output</figcaption>
            </figure>
          </article>
        </main>
      </div>
    </>
  );
}
