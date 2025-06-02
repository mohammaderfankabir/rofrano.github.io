import Image from "next/image";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Editing Camtasia footage in Vegas Pro</h1>
        <p>
          We’ve gotten spoiled by our high-resolution computer screens. They are
          so crisp and clear. When creating tutorials using screen capture with
          an application like Camtasia for delivery on small formats like DVD,
          we sometimes forget that DVD resolution is 720x480 (NTSC) or 720x576
          (PAL). That’s like changing your PC screen resolution to 640x480.
          Yikes! But with some planning and an understanding of the limitations
          of the DVD format, you can still achieve pretty good results.
        </p>
        <p>
          In this tutorial, I share some techniques I used when making Camtasia
          tutorials for DVD delivery. The same rules apply to any small format
          like YouTube. It starts by not expecting video captured at 1680x1050
          PC desktop resolution to be readable in a tiny 720x480 DVD-sized
          video. Resizing from that resolution will not maintain the fine lines
          needed to read text. Some preplanning is a must to get good results.
          It starts with the resolution of the application you are using for the
          tutorial.
        </p>
      </section>
      <section>
        <ol>
          <li>
            <p>
              Follow these steps, and you should have a pretty good-looking
              Camtasia tutorial on DVD:
            </p>
            <p>
              I prefer to deliver widescreen DVDs, so I use a 16:9 aspect ratio
              when creating a tutorial. For this, I capture my screen at
              1280x720 resolution, which matches the HD 720p standard and allows
              me to repurpose the footage for web delivery in high definition.
              So, you must resize whatever program you are using to 1280x720.
              Camtasia 6 makes it easy since it will resize the program for you.
              If you want to capture to 4:3, I would use 1280x960 so that you
              still have enough resolution to repurpose later.
            </p>
            <figure>
              <Image
                src="/guide/video/camtasia2dvd/camtasia2dvd-01-camtasia-window.avif"
                alt="Camtasia window"
                width={1800}
                height={1200}
              />
              <figcaption>Camtasia window</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Since this tutorial is about editing in Vegas Pro, in the Camtasia
              recorder, select Tools → Options and ensure the format is set to
              AVI (not CAMREC) so you can edit immediately in Vegas Pro. Some
              people like editing in Camtasia Studio, but I prefer Vegas Pro.
            </p>
            <figure>
              <Image
                src="/guide/video/camtasia2dvd/camtasia2dvd-02-save-as-avi.avif"
                alt="Save as AVI"
                width={1800}
                height={1200}
              />
              <figcaption>Save as AVI</figcaption>
            </figure>
          </li>
          <li>
            <p>
              In Vegas Pro, go to File → Properties (<kbd>Alt</kbd> +{" "}
              <kbd>Enter</kbd>) and use the “Match Media Settings” button in the
              project properties to match your Vegas project to the Camtasia
              media. If you used the settings in #1, this should be Custom
              (1280x720, 15.000 fps) progressive with square pixels. Ensure your
              Vegas project matches the resolution and FPS of your footage.
            </p>
            <figure>
              <Image
                src="/guide/video/camtasia2dvd/camtasia2dvd-03-match-media.avif"
                alt="Match media"
                width={1800}
                height={1200}
              />
              <figcaption>Match media</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Select the Track FX button on the track that contains your
              Camtasia screen capture footage.
            </p>
            <figure>
              <Image
                src="/guide/video/camtasia2dvd/camtasia2dvd-04-add-track-fx.avif"
                alt="Add track FX"
                width={1800}
                height={1200}
              />
              <figcaption>Add track FX</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Add the Sony Sharpen FX with about a 0.500 setting to the video
              track with the Camtasia footage to clean up the edges and make the
              text more readable.
            </p>
            <figure>
              <Image
                src="/guide/video/camtasia2dvd/camtasia2dvd-05-add-sharpen.avif"
                alt="Add Sharpen"
                width={1800}
                height={1200}
              />
              <figcaption>Add Sharpen</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Use Pan/Crop to zoom into areas of interest in your video.
              Remember, a DVD only has 720x480 resolution. Don’t try to pack too
              much information into that tiny space. Zooming is your friend.
            </p>
            <figure>
              <Image
                src="/guide/video/camtasia2dvd/camtasia2dvd-06-zoom-in.avif"
                alt="Zoom-in"
                width={1800}
                height={1200}
              />
              <figcaption>Zoom-in</figcaption>
            </figure>
          </li>
          <li>
            <p>
              Render using the standard DVD Architect NTSC Widescreen video
              stream template. Rendering direct to MPEG2 in Vegas Pro will give
              you the highest quality over creating an AVI and re-encoding it in
              DVD Architect later. Below is a screenshot of the rendered MPG
              file playback in the VLC player.
            </p>
            <figure>
              <Image
                src="/guide/video/camtasia2dvd/camtasia2dvd-07-output.avif"
                alt="Output"
                width={1800}
                height={1200}
              />
              <figcaption>Output</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          As you can see from the full-size 853x480 image above, the output is
          quite readable, though it appears slightly fuzzy due to the
          interlacing required for DVD formatting. For those wondering why it’s
          853 pixels wide, DVD widescreen uses a pixel aspect ratio of 1.2121.
          That means the pixels aren’t square (wider than 1.0). Multiplying 720
          × 1.2121 gives us about 853, which matches the displayed width.
        </p>
        <p>
          Hopefully, this will provide a good starting point for creating your
          screen capture tutorials for DVD. Even if you’re targeting the web,
          the same principles apply. Plan to capture the lowest resolution
          possible to minimize rescaling, set your project properties to match
          your captured footage, use Sharpen to make the edges more pronounced,
          and zoom in on the action so that you maintain as much detail as
          possible.
        </p>
      </section>
    </article>
  );
}
