import Image from "next/image";

export default function ParentMotionFilmstrip() {
  return (
    <>
      <div id="parent-motion-filmstrip">
        <main id="page-content" className="page-content">
          <article>
            <h1>Parent Motion Filmstrip</h1>
            <p>
              Sometimes you want to move multiple Picture-in-Picture tracks
              around a frame in unison. You might think this is a difficult
              compositing job but Vegas makes this very easy to do with Parent
              Motion and Track Motion. In this example we will resize several
              clips to fit within a film strip overlay using Track Motion. The
              entire strip with the clips will move across the frame in unison
              using Parent Motion.
            </p>
            <ol>
              <li>
                <p>
                  Drop the film strip overlay clip on the Vegas timeline. You
                  can use any file format that Vegas supports. It is easier if
                  your file dimensions fit the picture. (i.e., don’t create a
                  720x480 file with the graphics imbedded, just save the actual
                  strip)
                </p>
                <figure>
                  <Image
                    src="/parent-motion-filmstrip/parent-motion-step-01.avif"
                    alt="Step one"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step one</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Add the first video clip to the timeline ABOVE the filmstrip
                  if the filmstrip has no transparency (like the one here) or
                  BELOW the film strip if you want the clips show through a
                  transparent hole. In this example we place it above so it is
                  easy to position it on top of the non-transparent filmstrip.
                  For this tutorial, I am using generated text media so it is
                  easier to follow where each layer is going.
                </p>
                <figure>
                  <Image
                    src="/parent-motion-filmstrip/parent-motion-step-02.avif"
                    alt="Step two"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step two</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Use Track Motion on the newly placed video track and resize
                  the video to fit within a single frame of the filmstrip
                </p>
                <figure>
                  <Image
                    src="/parent-motion-filmstrip/parent-motion-step-03.avif"
                    alt="Step three"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step three</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Reposition the track align with the first frame in the
                  filmstrip.
                </p>
                <figure>
                  <Image
                    src="/parent-motion-filmstrip/parent-motion-step-04.avif"
                    alt="Step four"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step four</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Now repeat steps 2 thru 4 adding each new track to the top
                  layer. A shortcut to getting all of your video clips a
                  consistent size is to copy and paste the first Track Motion
                  keyframe into each new track.
                </p>
                <figure>
                  <Image
                    src="/parent-motion-filmstrip/parent-motion-step-05.avif"
                    alt="Step five"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step five</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  When all of your tracks have been resized and repositioned
                  into the filmstrip, its time to add the Parent Composite track
                  for the final Parent Motion. Insert a new Video Track,
                  Highlight all the existing video tracks and press the Make
                  Compositing Child arrow to make all the tracks a child of the
                  one parent you just added.
                </p>
                <figure>
                  <Image
                    src="/parent-motion-filmstrip/parent-motion-step-06.avif"
                    alt="Step six"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step six</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  Select Parent Motion to create motion that will affect ALL of
                  the child tracks. Position the filmstrip with all the child
                  tracks at the bottom of the frame. Notice they all move
                  together.
                </p>
                <figure>
                  <Image
                    src="/parent-motion-filmstrip/parent-motion-step-07.avif"
                    alt="Step seven"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step seven</figcaption>
                </figure>
              </li>
              <li>
                <p>
                  You can now keyframe motion so that the entire filmstrip moves
                  from one end of the frame to the other. In the image on the
                  left I have placed the entire frame all the way to the right
                  at the first keyframe. Next I move the timeline cursor to the
                  point at which I want the frame move to complete and then I
                  move the frame all the way to the right to create a second
                  keyframe.
                </p>
                <figure>
                  <Image
                    src="/parent-motion-filmstrip/parent-motion-step-08.avif"
                    alt="Step eight"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step eight</figcaption>
                </figure>
                <figure>
                  <Image
                    src="/parent-motion-filmstrip/parent-motion-step-09.avif"
                    alt="Step nine"
                    width={1800}
                    height={1200}
                  />
                  <figcaption>Step nine</figcaption>
                </figure>
              </li>
            </ol>
            <p>
              Here is the finished product. I copied the composite track and all
              of its children and inserted them again but offset them so that
              their movement followed the first filmstrip giving the illusion of
              a much longer strip. (and when you’re making movies, illusion
              equals reality) To do this easily, Select the first track (i.e.,
              the Parent track), Shift+Select the last track (i.e., the last
              Child track under the Parent) and this will select all tracks in
              between. Then right-click on the last track and select Duplicate
              Track from the context menu. All of the tracks will be duplicated.
              Then just slip them out a bit in time to make the two sets of
              tracks follow each other seamlessly.
            </p>
            <figure>
              <video controls>
                <source
                  src="/parent-motion-filmstrip/parent-motion.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <figcaption>finished product</figcaption>
            </figure>
            <p>
              By using <strong>Track Motion</strong> on entire tracks, we can
              easily add more media to the tracks and they will maintain the
              correct size and position on in the frame so that they always show
              up in the correct filmstrip box. You can download the project
              files from <a href="downloads/parent-motion.tar">here</a> . I got
              the film strip in this file from Kelly Chien’s site. Check out his
              VegasUsers.com site. It’s contains some great work that other
              Vegas users have shared.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
