import Image from "next/image";

export default function BorisGraffiti() {
  return (
    <>
      <div id="boris-graffiti">
        <main id="page-content" className="page-content">
          <article>
            <h1>Using Boris Graffiti with Vegas Pro</h1>
            <p>
              Here are just a few tutorials to get you started with Boris
              Graffiti LTD. These are not meant to be extensive. They are just
              to get you familiar with the basics of getting into and out of
              Graffiti and get your title back into Vegas. (which is, after all,
              where you wanted it in the first place) 😉
            </p>
            <p>
              I will try and update these to make them more extensive as I get
              time.
            </p>
            <h2 id="basic-input-and-output">Basic Input and Output</h2>
            <p>
              I think its best to get a round trip from Graffiti to Vegas as a
              good first step. This will show you the general workflow and
              satisfy you that it actually works with Vegas.
            </p>
            <ol>
              <li>
                <p>
                  Open Boris Graffiti LTD. You will see 4 windows. The lower
                  half of the screen is the timeline. In the upper left are the
                  properties dialogs and on the upper right is the preview
                  window. Right in the middle of the screen covering the first
                  three windows is the text input dialog. Type in “Boris Rocks!”
                  (trust me it does)
                </p>
              </li>
              <li>
                <p>
                  Press the <strong>Update</strong> button in the lower right of
                  this dialog to update the preview window and close the text
                  window by clicking the red <strong>X</strong> in the upper
                  right like all windows applications. You should now see your
                  text in the preview window.
                </p>
              </li>
              <li>
                <p>
                  Before you output to Vegas to use as an overlay, you want to
                  hide the background track by clicking the{" "}
                  <strong>eye icon</strong> in the header of the background
                  track on the timeline. Otherwise the background will be output
                  as well. (you may or may not want this)
                </p>
              </li>
              <li>
                <p>
                  Select <strong>File-&gt;Export…-&gt;Targa file</strong> and
                  type in a filename for the title file which will be saved in
                  .tga format.
                </p>
              </li>
            </ol>
            <p>
              That’s it! You’re now read to bring the TGA file into Vegas. When
              you bring it into Vegas, you might have to right click on it and
              select the <strong>Properties…</strong> dialog and on the{" "}
              <em>Media</em> tab set <em>Alpha channel:</em> to{" "}
              <strong>Straight (unmatted)</strong>. This should make the black
              background transparent.
            </p>
            <p>
              Congratulations! You have just created a basic title in Graffiti
              and brought it into Vegas.
            </p>
            <h2 id="making-a-title-worth-using-graffiti-ltd">
              Making a title worth using Graffiti LTD
            </h2>
            <p>
              In the last tutorial we didn’t really make anything compelling so
              now we’re going to explore the title dialog that we dismissed so
              quickly. If you still have Graffiti open, just double click on the
              header of the track with the title text “Boris Rocks!” and the
              text input dialog will open up again.
            </p>
            <figure>
              <Image
                src="/boris-graffiti/style-palette-button.avif"
                alt="Style palette button"
                width={1800}
                height={1200}
              />
              <figcaption>Style palette button</figcaption>
            </figure>
            <p>
              This time we’re going to press the <strong>Style Palette</strong>{" "}
              button at the bottom of that dialog (under the red arrow in the
              picture on the left). This is where you can very easily change{" "}
              <em>text style, fonts, color,</em> and <em>gradient</em>. In the
              upper left corner of the Text tab is a dropdown list with tons of
              other text styles. Check out the metal ones they’re really great.
              This is true for each of the tabs. The dialogs all have dropdown
              boxes that give you access to more sets of styles, fonts, colors,
              and gradients.
            </p>
            <p>
              <strong>Tip:</strong> If the font tab is empty, you need to
              manually add your Windows fonts. Click the Add Category button
              under the blank drop down list and give the category a name like
              “Windows” and press OK and it will load all your windows fonts and
              show you samples. This is one of the features we have asked for in
              Vegas. Just being able to see the fonts is such an improvement.
            </p>
            <figure>
              <Image
                src="/boris-graffiti/style-palette-window.avif"
                alt="Style palette window"
                width={1800}
                height={1200}
              />
              <figcaption>Style palette window</figcaption>
            </figure>
            <p>
              Check out the other tabs and double click on any of the swatches
              to apply then to your title. If nothing changes in the title make
              sure you’ve highlighted the text with the cursor. The dialogs are
              modeless so you can go back and highlight the text without closing
              the Style dialog. When you find something you like close the style
              dialog, press the Update button and your done. Export this as a
              TGA file to Vegas.
            </p>
            <p>
              At this point you should be able to make some really nice titles
              with gradient fills that would have taken several tracks to create
              in Vegas. This should prove to you that Graffiti LTD is worth
              leaning and quite a nice addition to Vegas 5. (to bad it won’t
              open from within Vegas as a plugin but you can’t have everything)
            </p>
            <p>
              Don’t forget to press the <strong>Update</strong> button to see
              the results in the preview window.
            </p>
            <h2 id="creating-an-animated-title-with-graffiti">
              Creating an animated title with Graffiti
            </h2>
            <p>
              You can take any title and add motion just by adding a keyframe
              and exporting as a movie instead of a TGA file. This is really
              simple to do. If you don’t touch the timeline, everything you do
              is applied to the first keyframe. If you simply move the timeline
              marker down the timeline and then make a change to the text (like
              move it) then a new keyframe will be created. Press the play
              button and your text is now animated between the first keyframe,
              the keyframe you added and the last keyframe.
            </p>
            <p>
              You can play with any of the parameters in the upper left window
              for <em>Position, Pivot, Border, Lights, Shadow, Crop,</em> and{" "}
              <em>Mask</em> and have them applied to a keyframe just by moving
              to where you want the keyframe before you make the change. Press
              PLAY to see the changes animated. When you’re happy with your
              movement you’re ready to export it as a movie with an alpha
              channel so you can key it as an overlay in Vegas.
            </p>
            <h2 id="bringing-an-animated-title-into-vegas">
              Bringing an animated title into Vegas
            </h2>
            <p>
              Here are the steps to export as a movie with an alpha channel to
              bring into Vegas.
            </p>
            <ol>
              <li>
                <p>
                  Select <strong>File-&gt;Export…-&gt;Movie</strong> file to
                  bring up the export dialog for AVI files.
                </p>
              </li>
              <li>
                <p>
                  Make sure the <em>Compression Settings</em> are{" "}
                  <strong>Full Frames (Uncompressed)</strong> so that the alpha
                  channel information will be preserved. Don’t use any CODEC
                  because this will limit your movie to 24bits and you need
                  32bits to carry the alpha channel information.
                </p>
              </li>
              <li>
                <p>
                  Make sure the <em>Alpha</em> setting it set for{" "}
                  <strong>Straight</strong>.
                </p>
              </li>
              <li>
                <p>
                  Click <strong>OK</strong> and give the file a name.
                </p>
              </li>
            </ol>
            <p>
              That’s it. You should now have an AVI file with an alpha channel
              all ready to bring into Vegas. Don’t forget, when you bring it
              into Vegas, you might have to right click on it and select the{" "}
              <strong>Properties…</strong> dialog and on the <em>Media</em> tab
              set <em>Alpha channel:</em> to{" "}
              <strong>Straight (unmatted)</strong>. This should make the black
              background transparent. You could export it from Graffiti as
              premultiplied black but then you’d have to tell Vegas its
              premultiplied instead of straight unmatted. It’s up to you. just
              make sure they match.
            </p>
            <h2 id="using-the-library-browser">Using the Library Browser</h2>
            <figure>
              <Image
                src="/boris-graffiti/library-browser-button.avif"
                alt="Library browser button"
                width={1800}
                height={1200}
              />
              <figcaption>Library browser button</figcaption>
            </figure>
            <p>
              Don’t overlook the Library Browser for a quick selection of an
              entire style or even a fully completed lower-third just waiting
              for you to change the text and go. The button to open the Library
              Browser is right over the track names in the track header section
              of the timeline. (pointed to by the read arrow in the picture on
              the left) This brings up the browser window where you can navigate
              through all the styles in the library.
            </p>
            <figure>
              <Image
                src="/boris-graffiti/library-browser-lower-3rds.avif"
                alt="Library browser window"
                width={1800}
                height={1200}
              />
              <figcaption>Library browser window</figcaption>
            </figure>
            <p>
              There are categories for title containers, styled text, lower 3rds
              that are centered, left justified, right justified, other, misc.
              Once you find a set of styles that you like, making titles is just
              a matter of selecting the style, changing the text and saving. It
              couldn’t be any easier. The picture to the right shows the Library
              Browser window open to the Lower 3rd’s page. There you can see a
              collection of lower 3rds that are centered on the screen. Single
              click to bring them up in the browser preview window and double
              click on them to add them to your project. As always you can
              delete the background track or just hide it before you make your
              actual render to go back to Vegas Pro.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
