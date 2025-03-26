import Image from "next/image";

export default function VegasProFaq() {
  return (
    <>
      <div id="vegas-pro-faq">
        <main id="page-content" className="page-content">
          <article>
            <h1>Vegas Pro FAQ</h1>
            <p>
              This FAQ was compiled in 2012 when I was using a Windows PC with
              Vegas Pro for video editing. I have since moved on to using an
              Apple Mac Pro with Final Cut Pro, but I leave these here for
              others who are still using Vegas Pro in hopes it might be helpful.
              These are compiled from questions that I have provided answer for
              over years in various forums that I thought I would consolidate in
              one place:
            </p>
            <h2 id="ive-imported-a-file-but-there-is-no-video-what-do-i-do">
              I’ve imported a file but there is no video! What do I do?
            </h2>
            <p>
              Video file types like AVI and MOV are just a wrapper for the
              actual video. They are containers that you place the video into.
              The actual video itself uses one of any number of codecs to store
              the video information. The word “codec” stands for{" "}
              <strong>Co</strong>der / <strong>Dec</strong>oder. It contains the
              algorithm used to encode and decode the video or audio in the
              file. When Vegas imports only audio, this usually means that you
              either don’t have the correct video codec for the file or the
              video codec is not support by Vegas.
            </p>
            <p>
              To remedy this, first download a utility like GSpot or MediaInfo
              and drop your AVI file into it and find out what codec it uses. If
              it’s a MOV file, then open it with the Quicktime Media Player and
              use the Movie Inspector (Ctrl+I) to see what codecs are being used
              by the file. Then make sure that you have that codec installed. If
              you do and Vegas still doesn’t import your video, then it’s
              probably a codec that Vegas doesn’t support and you will need to
              use some other program to convert the file into a format that
              Vegas can edit.
            </p>
            <p>
              Never, I repeat… NEVER install a “Codec Pak” like K-Lite on your
              video editing computer. It will replace the high quality codecs
              that you paid good money for with lower quality free codecs.
              Whenever you need a codec, just install the one codec you need.
              You wouldn’t take every pill in your medicine cabinet in hopes
              that one of them will cure you would you? Don’t load unnecessary
              codecs onto your computer either.
            </p>
            <h2 id="how-can-i-make-jump-cuts-look-better">
              How can I make Jump Cuts look better?
            </h2>
            <p>
              Cutting out pieces from an interview or lecture is very difficult
              to do seamlessly. People are always moving and if you have to cut
              out something they said, their body has undoubtedly moved to a new
              position so the cut will look very jumpy.
            </p>
            <p>Here are some things you can try:</p>
            <ol>
              <li>
                <strong>Use a Crossfade:</strong> It could be very slight like a
                few frames or it might need to be longer up to 1/2 second or a
                whole second. Whatever works and lessens the jumpiness of the
                cut. It will still be noticeable but should be less jarring to
                the viewer.
              </li>
              <li>
                <strong>Use B-Roll footage:</strong> B-Roll is footage that you
                shoot of other things around the event. Usually footage of the
                audience or other activities. You can use these as a cut-away
                shot momentarily. The viewer will think you are cutting to show
                audience reaction when, in fact, you are covering an edit. This
                is done all the time. While cutting to the B-Roll you keep the
                audio from the A-Roll going so the person talking continues to
                talk over the B-Roll video. If you don’t have any B-Roll
                footage, next time remember to shoot some. It could be before
                the event starts or while you’re waiting for the next speaker.
                B-Roll is invaluable for covering edits and enhances the
                production value by giving the viewer a something new to look at
                just like we all turn our heads occasionally to see what else is
                going on.
              </li>
              <li>
                <strong>Use Stock Footage:</strong> If you don’t have any
                B-Roll, try and find some stock footage on the topic of the
                lecture. It could be as simple as a still image that you pan and
                zoom into. If they are talking about a hospital use a picture of
                that hospital. If they are talking about children get some
                footage of children interacting. You get the idea. Again this
                enhances the production value by giving the viewer something
                else to look at for a brief instant and covers the cut in the
                edit.
              </li>
              <li>
                <strong>Change the Angle:</strong> This technique involves
                zooming in slightly with Vegas Pan/Crop and repositioning the
                subject in the frame. It will look like you changed camera
                angles and can give the illusion of a two camera shoot when you
                only had one. You have to be careful not to zoom too much
                because the picture might get pixilated but changing the angle
                for a brief moment and then perhaps slowing zooming back out
                (using keyframes) will cover the cut better.
              </li>
              <li>
                <strong>Call Attention to the Cut:</strong> If you can’t hide
                the cut, it might be better to call attention to it. In other
                words, use a transition that’s obvious. I’ve seen a very quick
                white flash be used (called Flash in Vegas) or the Zoom
                transition. Something that lets the user know that the lecture
                was edited for time and they are now further along. You see this
                a lot in interviews. I’m not sure it would work in a lecture
                because you know that interviews are edited but you expect to
                see the whole lecture. Still it’s something to keep in mind when
                editing in the future.
              </li>
            </ol>
            <p>
              Hopefully one of these 5 methods will help you make your edit more
              “watchable”. Good Luck!
            </p>
            <h2 id="how-do-i-clean-up-video-with-noise">
              How do I clean up video with noise?
            </h2>
            <p>
              Every once in a while I get have some analog footage that has
              noise in the signal. I like to clean this up before I start
              editing. After I capture it, I run the raw footage through{" "}
              <a href="http://www.virtualdub.org/">VirtualDub</a> with the{" "}
              <a href="http://www.geocities.com/siwalters_uk/bdrcntrl.html">
                Border Control
              </a>{" "}
              and{" "}
              <a href="http://www.shdon.com/section.php?section=vid">
                Dynamic Noise Reduction 2.1
              </a>{" "}
              filters to clean it up. Border Control allows me to remove the
              noise that often occurs around the border of analog footage. This
              is never shown by the TV so it’s OK to just blacken it. It also
              saves bits when encoding. Dynamic Noise Reduction is a temporal
              processor that compares frames before and after to determine what
              is signal and what is noise. It does an excellent job of removing
              analog video noise.
            </p>
            <p>
              I also use that opportunity to trim the in and out points since
              analog capture is not that exact. Once that’s complete, I bring
              the video into Vegas and edit. If I had to color correct all my
              clips, I’d probably do the same thing. I usually capture a clip
              and then run it through VirtualDub while I’m capturing the next
              clip. So this really does save time.
            </p>
            <h2 id="how-do-i-make-a-title-credit-roll-slower">
              How do I make a Title Credit Roll slower?
            </h2>
            <p>
              The way to make a credit roll slower is to make it last longer so
              it has more time to scroll up the screen. You change its length
              like any other event.
            </p>
            <ol>
              <li>
                <em>Right-click</em> on the credit roll event on the timeline
              </li>
              <li>
                Select <strong>Properties</strong> and then the{" "}
                <strong>Media</strong> tab
              </li>
              <li>
                Adjust the <em>Length</em> to be longer. The longer it is, the
                slower it scrolls
              </li>
              <li>
                Finally, you have to drag the end of the event out to the tick
                mark to take advantage of the new length.
              </li>
            </ol>
            <p>
              If you go beyond the divot (a little tick mark at the top) the
              event will loop which is not what you want so make sure you stop
              at the divot.
            </p>
            <h2 id="can-i-make-animated-backdrops-in-vegas-pro">
              Can I make animated backdrops in Vegas Pro?
            </h2>
            <p>
              The best way that I’ve found to make animated background in Vegas
              Pro is by using the <strong>Generated Media Noise Texture</strong>
              . If you add a key frame at the end and adjusting the{" "}
              <em>Progress (in degrees)</em> just a bit it will animate the
              noise. Of course key framing any of the properties is bound to
              change something but I find the progress most appealing. Try using
              the <em>Puffy Clouds</em> preset and adjust the progress just a
              little on the last key frame to get some pretty convincing moving
              clouds.
            </p>
            <p>
              If you want to just have an animated border on a video you can use
              the Cookie Cutter and another track. The trick is adding the
              background on the track just below the track you want to border so
              it shows through the Cookie Cutter.
            </p>
            <p>Here are the steps:</p>
            <ol>
              <li>Insert two video tacks</li>
              <li>Drop your animated background on the bottom track</li>
              <li>
                Place your video that needs the animated border on the top track
              </li>
              <li>
                Add the <em>Cookie Cutter</em> to the event on the top track
              </li>
              <li>
                In the Cookie Cutter dialog, select <em>Shape:</em>{" "}
                <strong>Rectangle</strong>
              </li>
              <li>
                Select <em>Method:</em>{" "}
                <strong>Cut away all but selection</strong>
              </li>
              <li>
                Adjust <em>Size:</em> to the size of your border.
              </li>
            </ol>
            <p>
              Finally you can use Generate Media Color Gradient to make animated
              backdrops. Just change an existing backdrop and save it as a new
              name (press the floppy disk icon). You can use key-framing to
              animate the changes. Let’s say you don’t like the fading edge
              inside the Hollow background. Just change it. By moving points (1)
              and (2) on top of each other the fade becomes a hard edge. By
              moving them away from each other the fade gets softer. You can
              even add a 3rd or 4th point with different color or edge hardness.
              You really have to play around with this to really appreciate it.
            </p>
            <p>
              Try moving the two points to the right of the screen and place
              them on top of each other. This should give you a top and bottom
              blue border with nothing on the sides. Then change the color of
              point (1) to white and you should have the effect you need. This
              should be placed on the overlay track so it’s in front of your
              movie.
            </p>
            <h2 id="how-do-i-get-rid-of-wind-noise">
              How do I get rid of wind noise?
            </h2>
            <p>
              Wind is really hard to remove because it is broadband noise
              meaning it contains a lot of frequencies across the spectrum.
              Sometimes I forget to turn on the wind screen on my camera but
              I’ve done this right in Vegas Pro with fairly good results. Go
              into the track FX and select the Track EQ that is already added
              for you. The first point is already set for Low Shelf, which is
              what you want. Set the Frequency (Hz) to 300 and the Gain (dB) to
              –Inf (all the way to the left). Now listen to a loop of your audio
              and adjust the frequency to filter more or less of the wind.
            </p>
            <p>
              The trade-off is that other audio will sound a little thin because
              you’ve removed some bass. If you add some music softly playing in
              the background on another track, it will mask this because the
              music will have full fidelity and provide bottom to the mix. If
              adding music is inappropriate for your video then you have to live
              with the thin sound or buy plug-in lie iZotope RX2, or Sony Noise
              Reduction 2.0. Hope this helps.
            </p>
            <h2 id="how-to-do-a-split-screen-with-credit-roll">
              How to do a split screen with credit roll?
            </h2>
            <p>
              This is something you see at the end of many programs. While they
              roll the credits, the screen compresses to half its vertical size
              or half its horizontal size and on the other half they run
              bloopers or other movie clips. To make this effect, your bloopers
              should be on one track while your credit roll is on another
              (usually the upper track). Make sure the bloopers and credit roll
              overlap each other totally. Then follow the instructions below:
              <em>3D Track Motion</em> is the tool for the job. You just type in
              the coordinates and sizes than to manipulate the video directly.
            </p>
            <p>To do this in Vegas Pro follow these steps:</p>
            <ol>
              <li>
                Go into <strong>Track Motion</strong> on the Credit Roll track
              </li>
              <li>
                Unselect the <strong>Lock Aspect Ration</strong> button. This is
                because you want to squeeze the aspect ration to get both videos
                on the screen at once.
              </li>
              <li>
                (<em>Optional</em>) If you want the split to be gradual, select
                a cursor position 1 or 2 seconds into the credit roll and create
                a keyframe. Otherwise skip this step and the split will be
                immediate.
              </li>
              <li>
                <p>
                  Change the Position values as follows (note width and height
                  should be 1/2 you project resolution. This example is for a
                  1920x1080 project):
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <strong>Position</strong>
                      </th>
                      <th>
                        <strong>Value</strong>
                      </th>
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
                Repeat Steps 1 – 5 on the Bloopers track changing the X: value
                to –180. You should now have a credit roll on the right side of
                your screen with video on the left. You can reverse these by
                reversing the X: values. You can also make these be top and
                bottom by adjusting the Height: and Y: instead Width: and X:.
              </li>
            </ol>
          </article>
        </main>
      </div>
    </>
  );
}
