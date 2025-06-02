import Image from "next/image";
import { ProTip } from "@/components/ui";

export default function Page() {
  return (
    <article>
      <section>
        <h1>Using Boris Graffiti with Vegas Pro</h1>
        <p>
          Here are a few tutorials to help you get started with the basics of
          Boris Graffiti LTD: getting in and out of Graffiti and returning your
          title to Vegas (which is, after all, where you wanted it in the first
          place). 😉
        </p>
        <p>I will update these to make them more extensive as I get time.</p>
      </section>
      <section>
        <h2>Basic Input and Output</h2>
        <p>
          I think it’s best to get a round trip from Graffiti to Vegas as a good
          first step. It will show you the general workflow and reassure you
          that it works with Vegas.
        </p>
        <ol>
          <li>
            Open Boris Graffiti LTD. You will see four windows. The timeline
            covers the lower half of the screen. Properties dialogs are in the
            upper left, and the preview window is on the upper right. Text input
            dialog is in the middle of the screen. Type in “Boris Rocks!” (trust
            me, it does)
          </li>
          <li>
            Press the Update button in the lower right of this dialog to update
            the preview window and close the text window by clicking the red X
            icon in the upper right, as with all Windows applications. You
            should now see your text in the preview window.
          </li>
          <li>
            Before you output to Vegas to use as an overlay, you want to hide
            the background track by clicking the eye icon in the header of the
            background track on the timeline. Otherwise, the background will be
            output as well. (you may or may not want this)
          </li>
          <li>
            Select File → Export… and select Targa file from the list. In the
            dialog box, type a filename for the title and save it. The created
            file is in Targa format (.tga).
          </li>
        </ol>
        <p>
          That’s it! You’re now ready to bring the TGA file into Vegas. When you
          import it into Vegas, you might have to right-click on it and select
          the “Properties…” dialog, and on the Media tab, set “Alpha channel:”
          to “Straight (unmatted).” That should make the black background
          transparent.
        </p>
        <p>
          Congratulations! You have just created a title in Graffiti and brought
          it into Vegas.
        </p>
        <h2>Making a title worth using Graffiti LTD</h2>
        <p>
          In the last tutorial, we didn’t create anything particularly
          compelling. So now, we’ll take a closer look at the title dialog we
          previously dismissed. If you still have Graffiti open, double-click
          the track header with the title text “Boris Rocks!” and the text input
          dialog will reappear.
        </p>
        <figure>
          <Image
            src="/guide/video/borisgraffiti/borisgraffiti-01-palette.avif"
            alt="Style Palette Button"
            width={1800}
            height={1200}
          />
          <figcaption>Style Palette Button</figcaption>
        </figure>
        <p>
          This time, click the “Style Palette” button at the bottom of the
          dialog (under the red arrow in the image on the left). You can easily
          change the text style, font, color, and gradient. The dropdown menu In
          the upper left corner of the Text tab contains many additional text
          styles. Check out the metal ones—they look great. Each tab works the
          same way, with dialogs that include dropdowns offering more styles,
          fonts, colors, and gradients.
        </p>
        <ProTip>
          If the Font tab is empty, manually add your Windows fonts. Click the
          Add Category button under the blank dropdown list, enter a name like
          “Windows,” and press OK to load all your Windows fonts and a sample
          display. That is one of the features we have asked for in Vegas. Just
          being able to see the fonts is such an improvement.
        </ProTip>
        <p>
          Check out the other tabs and double-click any swatches to apply them
          to your title. If nothing has changed, ensure you’ve highlighted the
          text with the cursor. These are modeless dialogs, so you can go back
          and highlight the text without closing them. Choose a style, and close
          the dialogs. Then, click the UPDATE button to apply the changes.
          Finally, export it as TGA.
        </p>
        <p>
          At this point, you should be able to make some nice titles with
          gradient fills that would have taken several tracks to create in
          Vegas. It should prove that Graffiti LTD is worth learning and quite a
          nice addition to Vegas 5. (too bad it won’t open from within Vegas as
          a plugin, but you can’t have everything)
        </p>
        <p>Click the UPDATE button to see the results in the preview window.</p>
        <figure>
          <Image
            src="/guide/video/borisgraffiti/borisgraffiti-02-palette.avif"
            alt="Style Palette Window"
            width={1800}
            height={1200}
          />
          <figcaption>Style Palette Window</figcaption>
        </figure>
        <h2>Creating an animated title with Graffiti</h2>
        <p>
          You can take any title and add motion simply by adding a keyframe and
          exporting it as a movie instead of a TGA file. It’s easy to do. Move
          the timeline marker, then change the text (like moving it) to create a
          new keyframe. Click the play button, and your text will animate
          between the first keyframe, added, and the last keyframe.
        </p>
        <p>
          You can adjust any of the parameters in the upper-left window, such as
          Position, Pivot, Border, Lights, Shadow, Crop, and Mask, and apply
          them to a keyframe simply by moving to the desired point and adjusting
          it. Click PLAY to see the animation. When you’re happy with the
          animation, export it as a movie with an alpha channel so you can key
          it as an overlay in Vegas.
        </p>
        <h2>Bringing an animated title into Vegas</h2>
        <p>
          Here are the steps to export as a movie with an alpha channel to bring
          into Vegas.
        </p>
        <ol>
          <li>
            Select File → Export… → Movie file to bring up the export dialog for
            AVI files.
          </li>
          <li>
            Set the Compression to “Full Frames (Uncompressed)” to preserve the
            alpha channel. Don’t use any CODEC because this will limit your
            movie to 24 bits, and you need 32 bits to carry the alpha channel
            information.
          </li>
          <li>Ensure the Alpha setting value is Straight.</li>
          <li>Click OK and give the file a name.</li>
        </ol>
        <p>
          That’s it! You now have an AVI file with an alpha channel ready for
          Vegas. When importing it into Vegas, right-click on the file, select
          “Properties…,” go to the Media tab, and set the “Alpha channel:” to
          “Straight (unmatted).” That should make the black background
          transparent. You could export it from Graffiti as premultiplied black,
          but then you’d have to tell Vegas it’s premultiplied instead of
          “Straight (unmatted).” It’s up to you. Just make sure they match.
        </p>
        <h2>Using the Library Browser</h2>
        <p>
          Don’t overlook the Library Browser for a quick selection of an entire
          style or even a fully completed lower third just waiting for you to
          change the text and go. The button to open the Library Browser is
          right over the track names in the track header section of the
          timeline. (pointed to by the red arrow in the picture on the left) It
          brings up the browser window where you can navigate through all the
          styles in the library.
        </p>
        <figure>
          <Image
            src="/guide/video/borisgraffiti/borisgraffiti-03-library.avif"
            alt="Library Browser Button"
            width={1800}
            height={1200}
          />
          <figcaption>Library browser button</figcaption>
        </figure>
        <p>
          There are categories for title containers, styled text, centered lower
          3rds, left justified, right justified, other, misc. Once you find a
          set of styles you like, making titles is just a matter of selecting
          the style, changing the text, and saving it. It couldn’t be any
          easier. The picture to the right shows the Library Browser window open
          to the Lower 3rd page. Where you can see a collection of lower 3rds
          centered on the screen. Single-click to bring them up in the browser
          preview window, and double-click them to add them to your project. As
          always, you can delete or hide the background track before making your
          final render to bring back into Vegas Pro.
        </p>
        <figure>
          <Image
            src="/guide/video/borisgraffiti/borisgraffiti-04-lower-3rds.avif"
            alt="Library Browser Window"
            width={1800}
            height={1200}
          />
          <figcaption>Library Browser Window</figcaption>
        </figure>
      </section>
    </article>
  );
}
