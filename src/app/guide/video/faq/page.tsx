export default function Page() {
  return (
    <article>
      <section>
        <h1>VEGAS Pro Frequently Asked Questions</h1>
        <p>
          This FAQ was compiled in 2012 when I used Windows with Vegas Pro for
          video editing. Since then, I’ve switched to an Apple Mac Pro with
          Final Cut Pro, but I’m leaving this here for those still using Vegas
          Pro in case it’s helpful. These are questions that I have answered
          over the years in various forums, consolidated in one place.
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>What should I do if my imported file has no video?</h2>
        <p>
          AVI and MOV are video containers that store video encoded with a
          codec. If Vegas imports only the audio, the video codec is likely
          missing or unsupported.
        </p>
        <p>
          To find out, Open the AVI file in GSpot or MediaInfo, or if it is a
          QuickTime video (.MOV) file, open it in QuickTime Player, then choose
          Window → Show Movie Inspector or press <kbd>Ctrl</kbd> + <kbd>I</kbd>.
          If the codec’s installed but Vegas still won’t import the video,
          convert it to a supported format.
        </p>
        <p>
          Never install a codec pack like K-Lite on your video editing computer.
          It replaces high-quality codecs with lower-quality ones and clutters
          your system.
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>How can I make Jump Cuts look better?</h2>
        <ol>
          <li>
            Use a crossfade, ranging from a few frames to half a second or more,
            to reduce the jumpiness of the cut. While it may still be
            noticeable, it will be less jarring to the viewer.
          </li>
          <li>
            Use B-Roll footage as a cutaway shot to cover edits seamlessly. To
            the viewer, it looks like you’re cutting away to show the audience’s
            reaction when, in reality, you’re covering a cut. While the video
            shifts to the B-Roll, the audio from the A-Roll continues, allowing
            the speaker’s voice to play over the new visuals. You can capture
            B-Roll footage before the event starts or while waiting for the next
            speaker.
          </li>
          <li>
            Use stock footage related to the lecture topic if you don’t have a
            B-Roll. For example, if the speaker is discussing a hospital,
            include an image or video of the hospital. If they’re talking about
            children, find footage of children interacting.
          </li>
          <li>
            Use the Change Angle technique with the Pan/Crop tool to zoom in and
            reposition the subject slightly. This creates the illusion of a
            two-camera shoot. Be careful not to zoom too much to avoid
            pixelation. A quick angle change and slow zoom-out (using keyframes)
            can effectively cover the cut.
          </li>
          <li>
            Use the “Call Attention to the Cut” technique if you cannot hide the
            cut. An obvious transition, such as a quick white flash (like the
            Flash effect in Vegas) or a Zoom transition, signals the viewer that
            a cut has occurred and the video has moved forward in topic or time.
            I’m not sure it would work in a lecture because while viewers expect
            edits in interviews, they generally expect to see the full, uncut
            content in a lecture.
          </li>
        </ol>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>How do I clean up video with noise?</h2>
        <p>
          Every once in a while, I come across analog footage with signal noise.
          I like to clean this up before I start editing. After I capture it, I
          run the raw footage through VirtualDub with the Border Control and{" "}
          Dynamic Noise Reduction 2.1 filters to clean it up. Border Control let
          me remove the noise that often appears around the edges of analog
          footage. Since this area isn’t visible on the TV, I can blacken it,
          which also helps save bits during encoding. Dynamic Noise Reduction is
          a temporal processor that compares preceding and succeeding frames to
          distinguish between signal and noise. It effectively removes analog
          video noise.
        </p>
        <p>
          I use that time to trim the in and out points since analog capture
          isn’t precise. Then, I bring the video into Vegas for editing. I
          typically run each clip through VirtualDub while capturing the next,
          which saves time.
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>How do I make a Title Credit Roll slower?</h2>
        <p>
          To slow down a credit roll, extend its duration so it has more time to
          scroll. Adjust its length like any other event.
        </p>
        <ol>
          <li>Right-click on the credit roll event on the timeline.</li>
          <li>Select Properties and then the Media tab.</li>
          <li>
            Adjust the Length to be longer. The longer it is, the slower it
            scrolls.
          </li>
          <li>
            Finally, you have to drag the end of the event out to the tick mark
            to take advantage of the new length.
          </li>
        </ol>
        <p>
          Going beyond the divot (the tiny tick mark at the top) will cause the
          event to loop. Therefore, ensure you stop at the divot.
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>Can I make animated backdrops in Vegas Pro?</h2>
        <p>
          To create animated backgrounds, use the Generated Media Noise Texture.
          Add a keyframe at the end and slightly adjust the Progress to animate
          the noise. The Puffy Clouds preset with a little Progress tweak on the
          last keyframe creates convincing moving clouds.
        </p>
        <p>
          If you want an animated border on a video, use the Cookie Cutter on
          one track and place the background on the track below it so it shows
          through the Cookie Cutter.
        </p>
        <p>Here are the steps:</p>
        <ol>
          <li>Insert two video tracks.</li>
          <li>Drop your animated background on the bottom track.</li>
          <li>
            Place your video that needs the animated border on the top track.
          </li>
          <li>Add the Cookie Cutter to the event on the top track.</li>
          <li>
            In the Cookie Cutter dialog, set the Shape to “Rectangle,” the
            Method to “Select Cut away all but selection,” and adjust the Size
            to match the border dimensions.
          </li>
        </ol>
        <p>
          Finally, use Generate Media → Color Gradient for animated backdrops.
          Modify an existing preset and save it under a new name (click the
          floppy disk icon), then animate it using keyframes. For example, if
          you don’t like the fading edge in the Hollow background, overlap
          points (1) and (2) to create a hard edge. Moving them apart softens
          the transition. You might add a third or fourth point with different
          colors or edge softness.
        </p>
        <p>
          Move the two points to the right side of the screen and align them
          vertically. It will create a top and bottom blue border, with no
          borders on the sides. Set point (1) to white and position it on the
          overlay track.
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>How do I get rid of wind noise?</h2>
        <p>
          Wind noise is broadband, making it difficult to eliminate. To reduce
          it in Vegas Pro:
        </p>
        <ol>
          <li>In the track FX, select the Track EQ.</li>
          <li>
            Set the first point to Low Shelf, with Frequency at 300 Hz and Gain
            at –Inf.
          </li>
          <li>Loop the audio and adjust the Frequency to filter the wind.</li>
        </ol>
        <p>
          Removing some bass may thin out other audio. To restore fullness, add
          background music on another track or try a plug-in like iZotope RX2 or
          Sony Noise Reduction 2.0.
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>How to do a split screen with credit roll?</h2>
        <p>
          The split screen is a common effect at the end of many programs. As
          the credits roll, the screen compresses vertically or horizontally,
          with the other half showing bloopers or additional movie clips. The
          bloopers are typically placed on one track, while the credit roll
          appears on another (usually the upper track), with both overlapping
          each other.
        </p>
        <p>To do this in Vegas Pro, follow these steps:</p>
        <ol>
          <li>Go into Track Motion on the Credit Roll track.</li>
          <li>
            Unselect the Lock Aspect Ratio to allow squeezing both videos onto
            the screen.
          </li>
          <li>
            (Optional) To make the split gradual, create a keyframe 1–2 seconds
            into the credit roll. Otherwise, the split will be immediate.
          </li>
          <li>
            <p>
              Change the Position values as follows (note width and height
              should be 1/2 your project resolution. This example is for a
              1920x1080 project):
            </p>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>X:</td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>Y:</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Width:</td>
                  <td>960</td>
                </tr>
                <tr>
                  <td>Height:</td>
                  <td>540</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>Close Track Motion for the Credit Roll track.</li>
          <li>
            Repeat Steps 1 – 5 on the Bloopers track by setting the X value to
            –180. You should now have a credit roll on the right side of your
            screen with video on the left. You can reverse these by reversing
            the X values. To make these top and bottom, adjust the Height and Y.
          </li>
        </ol>
      </section>
    </article>
  );
}
