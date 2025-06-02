import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Exporting and Importing a Transition made with Hollywood FX</h1>
        <p>
          Wouldn’t it be nice if everything you needed was a plug-in to Vegas
          Pro? Unfortunately, there are lots of standalone packages that do
          great FX but don’t integrate into Vegas. One of these that I use is
          Pinnacle Hollywood FX. It has some nice canned 3D transitions for
          weddings and other events. I thought I would share my workflow for
          doing this.
        </p>
        <p>
          I also created some transitions in HFX for you to{" "}
          <a href="/downloads/hfx.tar" download>
            download
          </a>{" "}
          and enjoy. These transitions, with many more, are freely available on
          the{" "}
          <a
            href="http://declic.video.free.fr/"
            title="DECLIC VIDEO, Hollywood FX, Pinnacle Studio, Heroglyph Adorage Tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Déclic Vidéo
          </a>{" "}
          site, which I recommend you visit if you are into Hollywood FX.
        </p>
      </section>
      <section>
        <h2>Do The following steps in Vegas:</h2>
        <ol>
          <li>
            <p>Create your normal transition in your video.</p>
            <p>
              Note: since Hollywood FX 3D transitions have a lot of movement,
              you may want them to transition longer so your viewer can “soak
              them in.” In this example, we use a Wedding Book transition, which
              lasts 3 seconds.
            </p>
            <figure>
              <Image
                src="/guide/video/hollywoodfx/hollywoodfx-01-wedding-book.avif"
                alt="Wedding Book"
                width={1800}
                height={1200}
              />
              <figcaption>Wedding Book</figcaption>
            </figure>
          </li>
          <li>
            Turn on Ignore Event Grouping (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> +{" "}
            <kbd>U</kbd>). It allows you to move events independent of their
            groups (i.e., move video without audio)
          </li>
          <li>
            <p>
              Split the video one frame before and one after the transition (S)
              (This will leave the audio uncut).
            </p>
            <figure>
              <Image
                src="/guide/video/hollywoodfx/hollywoodfx-02-split.avif"
                alt="Split"
                width={1800}
                height={1200}
              />
              <figcaption>Split</figcaption>
            </figure>
          </li>
          <li>
            Insert a new video track above the track you are working on (
            <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Q</kbd>)
          </li>
          <li>
            <p>
              Move the two split transition clips up to the new video track and
              place them end-to-end (as a cut with no transition, so it is twice
              the size of the original hole it came out of)
            </p>
            <figure>
              <Image
                src="/guide/video/hollywoodfx/hollywoodfx-03-new-track.avif"
                alt="New Track"
                width={1800}
                height={1200}
              />
              <figcaption>New Track</figcaption>
            </figure>
          </li>
          <li>
            Select the two clips and render this section to a new DV AVI file,
            which we’ll use in Hollywood FX.
          </li>
          <li>
            Delete the clips on the upper track, as they are no longer needed.
          </li>
          <li>
            Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> again to
            turn off Ignore Event Grouping (which will keep groups together
            again)
          </li>
        </ol>
        <h2>Do The following steps in Pinnacle Studio:</h2>
        <ol>
          <li>
            <p>Bring the rendered clip into Pinnacle Studio.</p>
            <figure>
              <Image
                src="/guide/video/hollywoodfx/hollywoodfx-04-rendered-clip.avif"
                alt="Rendered Clip"
                width={1800}
                height={1200}
              />
              <figcaption>Rendered Clip</figcaption>
            </figure>
          </li>
          <li>
            Use the razor to cut at the original place where the two clips meet.
          </li>
          <li>
            <p>
              Drop an HFX transition and overlap so there is only one frame
              remaining on each size (this is why we added an extra frame in
              Vegas)
            </p>
            <figure>
              <Image
                src="/guide/video/hollywoodfx/hollywoodfx-05-hfx-transition.avif"
                alt="HFX transition"
                width={1800}
                height={1200}
              />
              <figcaption>HFX transition</figcaption>
            </figure>
          </li>
          <li>
            Render this new clip with the HFX as a DV AVI file without audio.
          </li>
        </ol>
        <h2>Do The following steps back in Vegas:</h2>
        <ol>
          <li>
            <p>
              Drop this new AVI file in the hole in the video track that was
              left by moving the two split clips up a track.
            </p>
            <figure>
              <Image
                src="/guide/video/hollywoodfx/hollywoodfx-06-avi-file.avif"
                alt="AVI file"
                width={1800}
                height={1200}
              />
              <figcaption>AVI file</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          The new AVI file should fit perfectly into the hole and be
          frame-accurate. The image below is the Hollywood FX Wedding Album
          transition. Many 3D transitions are appropriate for certain event
          videography. This tutorial can be adapted to export and import video
          to any standalone application.
        </p>
        <figure>
          <Image
            src="/guide/video/hollywoodfx/hollywoodfx-07-ouput.avif"
            alt="Output"
            width={1800}
            height={1200}
          />
          <figcaption>Output</figcaption>
        </figure>
      </section>
    </article>
  );
}
