import Image from "next/image";

export default function AcidProFaq() {
  return (
    <>
      <div id="acid-pro-faq">
        <main id="page-content" className="page-content">
          <article>
            <h1>ACID Pro FAQ</h1>
            <p>
              This FAQ was compiled in 2012 when I was using a Windows PC with
              ACID Pro for music composition. I have since moved on to using an
              Apple Mac Pro with Logic Pro, but I leave these here for others
              who are still using ACID Pro in hopes it might be helpful. These
              are compiled from questions that I have provided answer for over
              years in various forums that I thought I would consolidate in one
              place:
            </p>
            <h2 id="how-can-i-use-an-existing-song-and-add-loops-to-it">
              How can I use an existing song and add loops to it?
            </h2>
            <p>
              Yes, what you want to do is called Beatmapping. This will allow
              you to bring in a song and map it to a beat. Once you’ve done
              that, you can mix and match parts of songs and they will all
              overlap seamlessly. Some thing to watch out for:
            </p>
            <ol>
              <li>
                If a song was recorded live or even recorded in a studio with a
                live drummer who wasn’t listening to a click track, the beat may
                vary from measure to measure. There is not a lot you can do
                about this. Songs which uses a steady tempo beatmap the best.
              </li>
              <li>
                The songs you want to mix together should start out with a tempo
                that is fairly close. You are not going to be able to mix a song
                at 80 beats per minute with one at 140 beats per minute because
                that much stretching will produce unwanted audio artifacts. Try
                and select songs that have tempos that are pretty close to begin
                with for the best results.
              </li>
            </ol>
            <p>
              Start by reading the Quick Start Manual cover-to-cover to get a
              good overview of how ACID works. Then open the User’s Manual and
              go to the Using The Beatmapper section (in Chapter 7, starting on
              page 103). This should get you started quickly. Then, of course,
              go back and read everything you skipped. 😉 (and don’t forget to
              experiment, explore, and have fun)
            </p>
            <h2 id="how-do-i-make-patch-changes-in-my-vsti-midi-files">
              How do I make patch changes in my VSTi MIDI files?
            </h2>
            <p>
              To change the properties of a loaded VSTi you just double click on
              icon on the bus fader at the bottom of the screen for that
              SoftSynth (or right click on the icon or name and select{" "}
              <strong>Soft Synth Properties…</strong>) and the properties window
              will pop up just like it did when you added the SoftSynth. You can
              then change any of its properties like the program name (i.e.,
              patch) that a DLS SoftSynth will use or the channel it listens on.
              If you don’t see the channel dropdown box, then you probably have
              a version of ACID that is 4.0a or earlier. Please update to the
              latest version of ACID on the Sony site.
            </p>
            <p>
              If the SoftSynth can play multiple voices on separate channels you
              can assign each new MIDI track to a different channel and voice.
            </p>
            <p>Here is how it should work:</p>
            <ol>
              <li>Drop a MIDI track on the timeline</li>
              <li>Add a DLS SoftSynth and set it for the patch you want</li>
              <li>The MIDI track should play that patch</li>
              <li>
                Now drop a second MIDI track on the timeline and assign it the
                same DLS
              </li>
              <li>
                Call up the track properties and change the MIDI channel in the
                General tab to channel 2
              </li>
              <li>
                Call up the DLS SoftSynth properties and change the channel to 2
              </li>
              <li>
                Assign a new patch to channel 2 in the DLS SoftSynth and the
                second MIDI track should play that patch while the first track
                place channel 1’s patch.
              </li>
            </ol>
            <p>
              You should now have one DLS SoftSynth loaded with two MIDI
              channels and each MIDI track assigned to one of those channels and
              playing the appropriate patch assigned to their channel. This is
              how you would set up any multi-patch softsynth like DLS,
              SampleTank or SFZ (Soundfont Player), etc.
            </p>
            <p>
              If you want to manually add program changes into the MIDI stream,
              you can do this in the List Editor. To get to the List Editor,
              either double click on the MIDI icon to the left of the Track
              Header or right click on it and select Properties… and then select
              the List Editor tab at the top of the dialog. Next right click the
              event before where you want to add the program change and select
              Insert. From the Insert dialog select Patch as the Event Type and
              type the patch number in the Patch field. (of course you can
              modify the bank number as well)
            </p>
            <p>
              You should only need to use the insert method for patch changes
              during a loop, or to set up patches for an external MIDI device
              (where your SoundBlaster sound card, etc. is consider external
              because its hardware based and not software controllable).
            </p>
            <h2 id="how-do-i-remove-midi-keyboard-delay">
              How do I remove MIDI keyboard delay?
            </h2>
            <p>
              The delay between the time that you strike a note on a MIDI
              keyboard and the time you hear the sound is referred to as{" "}
              <em>latency.</em> To get the lowest latency you need audio drivers
              that support ASIO (Audio Streaming Input Output). If you have a
              sound card that supports ASIO then you want to use the ASIO
              drivers for that card. If your audio device came with a driver CD
              and you did not install it, now would be a good time to do so.
            </p>
            <p>
              Next you need to use the menu item{" "}
              <strong>Options &gt; Preferences</strong> and click on the{" "}
              <strong>Audio Device</strong> tab. When you first look under{" "}
              <em>Audio device type:</em> (it probably says Microsoft Sound
              Mapper) see if there is an option that says ASIO in it. It if does
              select that. You may also have to press the <em>Advanced</em>{" "}
              button at the bottom of that dialog and configure the drivers to
              lower the ASIO buffer latency.
            </p>
            <figure>
              <Image
                src="/acid-pro-faq/acid-asio-drivers.avif"
                alt="ACID ASIO drivers"
                width={1800}
                height={1200}
              />
              <figcaption>ACID ASIO drivers</figcaption>
            </figure>
            <p>
              If you don’t have an ASIO capable sound card then adjust the{" "}
              <em>Playback buffering (seconds):</em> on that same dialog to see
              how low you can get it before the sound breaks up. It will not be
              as good as ASIO but it will make the delay shorter.
            </p>
            <p>
              There is a driver called{" "}
              <a href="http://www.asio4all.com/">ASIO4ALL</a> that should work
              with almost any audio hardware and is good to use in a pinch but
              if you’re going to use a MIDI keyboard, you really need to get an
              ASIO capable sound card.
            </p>
            <h2 id="how-do-i-record-with-midi-and-vstis-in-acid-pro">
              How do I record with MIDI and VSTi’s in ACID Pro?
            </h2>
            <p>
              If you want to record MIDI you’ll need a MIDI keyboard connected
              to a MIDI interface on your computer. This can be provided by a
              sound card or dedicated MIDI interface such as a USB device. Once
              the hardware is hooked up, you need to go into menu{" "}
              <strong>Options-&gt;Preferences</strong> and click on the MIDI
              tab. This is where to designate your MIDI input and output
              devices. Once you’ve done this, click on the VST Instruments tab
              and make sure your VSTi’s are listed there with a checkmark next
              to them. If not, add the directory that they are in to the search
              list so ACID can find them.
            </p>
            <p>
              Now you’re ready to use a softsynth. Select menu{" "}
              <strong>Insert-&gt;Soft Synth</strong> and then select one of your
              VSTi’s. This will bring up the softsynth properties dialog. The
              first button at the top right looks like a MIDI connection and if
              you hover your mouse over it, it will say “Enable Realtime MIDI
              Alt-F7”. Press it (or press Alt-F7) so that its selected and you
              should be able to play your MIDI keyboard and hear the softsynth.
            </p>
            <p>
              To record, just press the record button and select MIDI as the
              option at the top. Modify the filename and location if you wish,
              and at the bottom select the correct Record device (this should be
              your MIDI input device) and the correct MIDI Thru device which
              should be your softsynth. Finally press Start and begin to play.
            </p>
            <h2 id="how-can-i-create-acid-loops">
              How can I create ACID loops?
            </h2>
            <p>
              You can create ACID loops using the <strong>Chopper</strong>{" "}
              (although you can do it without the chopper too), you can record
              your own audio loops, or you can record your own MIDI loops. I
              find loop creation to be quite easy which is one of the reasons I
              use ACID Pro.
            </p>
            <p>
              What I do is record a new MIDI track and play my part several
              times. Once I think I’ve captured enough good takes, I go back and
              listen to the track and highlight the measure I like best and
              choose <strong>Select in Chopper</strong>. I listen to it looped
              in the chopper to make sure it loops smoothly. If it doesn’t I’ll
              open the MIDI editor and tweak the note positions until it does.
              Then I select <strong>Chop to New Track…</strong> and I save the
              final loop. If I want that as a wave (
              <em>.WAV) file I just solo it and do a *Render As…</em> using{" "}
              <em>Render Looped Region Only</em>. If you started with an audio
              loop there is no need to render. It’s very easy one you’ve done it
              a few times.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
