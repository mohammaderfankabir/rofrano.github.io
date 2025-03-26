import Image from "next/image";

export default function CamtasiaFootage() {
  return (
    <>
      <div id="camtasia-footage">
        <main id="page-content" className="page-content">
          <article>
            <h1>Editing Camtasia footage in Vegas Pro</h1>
            <p>
              We are spoiled by our high resolution computer screens. They are
              so crisp and clear. When creating tutorials using screen capture
              with an application like Camtasia for delivery on small formats
              like DVD, we sometimes forget that DVD resolution is 720x480
              (NTSC) or 720x576 (PAL). That’s like changing the resolution of
              your PC screen to 640x480. Yikes! But with a little planning and
              understanding of the limitations of the DVD format, you can get
              pretty good results.
            </p>
            <p>
              In this tutorial I’m going to share some of the techniques that I
              use when making Camtasia tutorials for DVD delivery. The same
              rules apply for any small format out like YouTube. It starts by
              not expecting video captured at 1680x1050 PC desktop resolution to
              be readable in a tiny 720x480 DVD sized video. Resizing from that
              resolution will not maintain the fine lines needed to read text.
              Some preplanning is needed in order to get good result and that
              starts with the resolution of the application you are using for
              your tutorial.
            </p>
            <p>
              Follow these steps and you should have a pretty good looking
              Camtasia tutorial on DVD:
            </p>
            <ol>
              <li>
                <p>
                  I like to deliver widescreen DVD’s so I use 16:9 when creating
                  a tutorial. For this, I capture using 1280x720 screen
                  dimensions. That’s the same as HD 720p and allows me to
                  repurpose the footage for web delivery at HD resolution. This
                  means that you must resizing whatever program you are using to
                  1280x720. This is easy using Camtasia 6 since it will resize
                  the program for you. If you want to capture to 4:3, I would
                  use 1280x960 so that you still have enough resolution to
                  repurpose later.
                </p>
                <figure>
                  <Image
                    src="/camtasia-footage/camtasia2dvd-step-01-camtasia-window.avif"
                    alt="Camtasia window"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Camtasia window</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Since this tutorial is about editing in Vegas Pro, in the
                  Camtasia recorder select <strong>Tools | Options</strong> and
                  make sure that you capture to the <strong>AVI</strong> file
                  format (not CAMREC) so you can edit immediately in Vegas Pro.
                  Some people like editing in Camtasia Studio but I prefer the
                  tools that I have in Vegas Pro.
                </p>
                <figure>
                  <Image
                    src="/camtasia-footage/camtasia2dvd-step-02-save-as-avi.avif"
                    alt="Save as AVI"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Save as AVI</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  In Vegas Pro go to{" "}
                  <strong>File | Properties (Alt+Enter)</strong> and use the{" "}
                  <strong>Match Media Settings</strong> button in the project
                  properties to match your Vegas project to the Camtasia media.
                  If you used the settings in #1 this should be{" "}
                  <strong>Custom (1280x720, 15.000 fps)</strong> progressive
                  with square pixels. It’s important to have your Vegas project
                  match the resolution and fps of your footage.
                </p>
                <figure>
                  <Image
                    src="/camtasia-footage/camtasia2dvd-step-03-match-media.avif"
                    alt="Match media"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Match media</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select the <strong>Track FX</strong> button on the track that
                  contains your Camtasia screen capture footage.
                </p>
                <figure>
                  <Image
                    src="/camtasia-footage/camtasia2dvd-step-04-add-track-fx.avif"
                    alt="Add track fx"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Add track fx</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Add the <strong>Sony Sharpen FX</strong> with about a{" "}
                  <strong>0.500</strong> setting to the video track with the
                  Camtasia footage. This will clean up the edges to make text
                  more readable.
                </p>
                <figure>
                  <Image
                    src="/camtasia-footage/camtasia2dvd-step-05-add-sharpen.avif"
                    alt="Add Sharpen"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Add Sharpen</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Use <strong>Pan/Crop</strong> to zoom into areas of interest
                  in your video. Remember, a DVD is only 720x480 resolution.
                  Don’t try to pack too much information into that tiny space.
                  Zooming is your friend.
                </p>
                <figure>
                  <Image
                    src="/camtasia-footage/camtasia2dvd-step-06-zoom-in.avif"
                    alt="Zoom-in"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Zoom-in</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Render using the standard{" "}
                  <strong>DVD Architect NTSC Widescreen video stream</strong>{" "}
                  template. Rendering direct to MPEG2 in Vegas Pro will give you
                  the highest quality over creating an AVI and re-encoding it in
                  DVD Architect later. Below is a screen shot of the actual
                  rendered MPG file being played back in the VLC player.
                </p>
                <figure>
                  <Image
                    src="/camtasia-footage/camtasia2dvd-step-07-final-output.avif"
                    alt="Output"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Output</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              As you can see from the full size 853x480 image above, the output
              is quite readable although slightly fuzzy due to the interlacing
              that is required by DVD’s. For those wondering why it’s 853 pixels
              wide, DVD Widescreen has a pixel aspect ratio of 1.2121. That
              means the pixels are actually wider than 1.0 (square). If we
              multiply 720 x 1.2121 we get an image that is approximately 853
              pixels across.
            </p>
            <p>
              Hopefully this will give you a good starting point for creating
              your screen capture tutorials that are targeted for DVD. Even if
              you are targeting for the web, the same rules apply. Plan to
              capture and the lowest resolution possible to minimize rescaling,
              set your project properties to match your captured footage, use
              sharpen to make the edges more pronounced, and zoom in to the
              action so that you maintain as much detail as possible.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
