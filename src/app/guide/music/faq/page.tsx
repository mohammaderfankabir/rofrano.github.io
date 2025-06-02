export default function Page() {
  return (
    <article>
      <section>
        <h1>ACID Pro Frequently Asked Questions</h1>
        <p>
          This FAQ was compiled in 2012 when I used Windows with ACID Pro for
          music composition. I have since moved on to using an Apple Mac Pro
          with Logic Pro, but I leave these here for others still using ACID Pro
          in hopes it might be helpful. These are questions that I have answered
          over the years in various forums, consolidated in one place.
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>How can I use an existing song and add loops to it?</h2>
        <p>
          Yes, what you’re trying to do is called beatmapping. It will allow you
          to bring a song and map it to a beat. Once you’ve done that, you can
          mix and match parts of songs, which will all overlap seamlessly. Some
          things to watch out for:
        </p>
        <ol>
          <li>
            If a song was recorded live or in a studio with a live drummer who
            wasn’t listening to a click track, the beat may vary from measure to
            measure. There is not a lot you can do about this. Songs that use a
            steady tempo beat map the best.
          </li>
          <li>
            The songs you want to mix should start with a relatively close
            tempo. You can’t mix a song at 80 beats per minute with one at 140
            beats per minute because that much stretching will produce unwanted
            audio artifacts. Try selecting songs whose tempos are pretty close
            for the best results.
          </li>
        </ol>
        <p>
          Start by reading the Quick Start Manual cover-to-cover to get a good
          overview of ACID. Then open the User’s Manual and go to the Using The
          Beatmapper section (Chapter 7, starting on page 103). It should get
          you started quickly. Then, of course, go back and read everything you
          skipped. 😉 (and don’t forget to experiment, explore, and have fun)
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>How do I make patch changes in my VSTi MIDI files?</h2>
        <p>
          To modify a loaded VSTi, double-click the bus fader icon or
          right-click it and select Soft Synth Properties… from the options. The
          properties window will pop up just like when you added the SoftSynth.
          You can change any of its properties, including the program name
          (i.e., patch) that a DLS SoftSynth will use or the channel it listens
          on. If you don’t see the channel dropdown box, you probably have a
          version of ACID 4.0a or earlier. Please update to the latest version
          of ACID on the Sony website.
        </p>
        <p>
          If the SoftSynth can play multiple voices on separate channels, you
          can assign each new MIDI track to a different channel and voice. Here
          is how it should work:
        </p>
        <ol>
          <li>Drop a MIDI track on the timeline.</li>
          <li>Add a DLS SoftSynth and set it for the patch you want.</li>
          <li>The MIDI track should play that patch.</li>
          <li>
            Drop a second MIDI track on the timeline and assign it to the same
            DLS.
          </li>
          <li>
            Call up the track properties and change the MIDI channel in the
            General tab to channel 2.
          </li>
          <li>
            Call up the DLS SoftSynth properties and change the channel to 2.
          </li>
          <li>
            Assign a new patch to channel 2 in the DLS SoftSynth, and the second
            MIDI track should play that patch, while the first track places
            channel 1’s patch.
          </li>
        </ol>
        <p>
          You should now have one DLS SoftSynth loaded with two MIDI channels,
          each assigned to a different track and playing the appropriate patch.
          That is how you set up any multi-patch softsynth like DLS, SampleTank,
          SFZ (Soundfont Player), etc.
        </p>
        <p>
          To manually add program changes to the MIDI stream, use the List
          Editor. Double-click the MIDI icon or right-click it and select
          Properties… from the options. Select the List Editor tab at the top of
          the dialog. Next, right-click the event before where you want to add
          the program change and select Insert. Change the Event Type to Patch
          and type the patch number in the Patch field. (of course, you can
          modify the bank number as well)
        </p>
        <p>
          You only need to use the insert method for patch changes during a loop
          or to set up patches for an external MIDI device (like the external
          SoundBlaster sound card, which is hardware-based and not
          software-controllable).
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>How do I remove the MIDI keyboard delay?</h2>
        <p>
          The technical term used for the delay between striking a note on a
          MIDI keyboard and hearing the sound is latency. To minimize latency,
          you need audio drivers that support ASIO (Audio Stream Input/Output).
          If your sound card supports ASIO, use the ASIO drivers. If your audio
          device came with a driver CD and you did not install it, now would be
          a good time to do so.
        </p>
        <p>
          Next, use the menu item Options → Preferences and click on the Audio
          Device tab. When you first look under Audio device type, it probably
          says Microsoft Sound Mapper. See if there is an ASIO option and select
          it. You may also have to click the Advanced button at the bottom of
          that dialog and configure the drivers to lower the ASIO buffer
          latency.
        </p>
        <p>
          If you don’t have a sound card that supports ASIO, then adjust the{" "}
          Playback buffering (seconds:) on that same dialog to see how low you
          can get it before the sound breaks up. It won’t be as good as ASIO,
          but it reduces the delay.
        </p>
        <p>
          <a
            href="http://www.asio4all.com/"
            title="Universal Windows ASIO Driver"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASIO4ALL
          </a>{" "}
          is a driver that should work with almost any audio hardware and is
          good to use in a pinch, but if you’re using a MIDI keyboard, you’ll
          need a sound card that supports ASIO.
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>How do I record with MIDI and VSTs in ACID Pro?</h2>
        <p>
          If you want to record MIDI, you’ll need a MIDI keyboard connected to a
          MIDI interface on your computer. You need a sound card or a dedicated
          MIDI interface, such as a USB device. Connect the hardware, then go to
          the menu Options → Preferences and click on the MIDI tab. It is where
          you designate your MIDI input and output devices. Once you’ve done
          this, click on the VST Instruments tab and make sure your VSTs are
          listed there with a checkmark next to them. If not, add the directory
          that they are in the search list so ACID can find them.
        </p>
        <p>
          Now you’re ready to use a softsynth. Select menu Insert → Soft Synth,
          then select one of your VSTs. It will bring up the softsynth
          properties dialog. The first button at the top right looks like a MIDI
          connection. Hovering over it will display the tooltip: Enable
          Real-time MIDI <kbd>Alt</kbd> + <kbd>F7</kbd>. Press it or{" "}
          <kbd>Alt</kbd> + <kbd>F7</kbd> to play your MIDI keyboard and hear the
          softsynth.
        </p>
        <p>
          Modify the filename and location if needed. Then, select the correct
          Record device (your MIDI input) and MIDI Thru device (your softsynth).
          Finally, press Start and begin playing.
        </p>
      </section>
      <hr aria-hidden="true" />
      <section>
        <h2>How can I create ACID loops?</h2>
        <p>
          You can create ACID loops using the Chopper (though it’s not
          required). Easy loop creation is one reason I use ACID Pro.
        </p>
        <p>
          I record a new MIDI track and play my part several times. Once I’ve
          captured enough good takes, I listen to the track, highlight the
          measure I like best, and choose Select in Chopper. I loop it in the
          Chopper to check for smooth playback. If it doesn’t loop well, I tweak
          the note positions in the MIDI editor. Then I select Chop to New
          Track…, and save the final loop. To export it as a WAV file, I solo it
          and render it as Render Looped Region Only. If you started with an
          audio loop, a render isn’t needed. It’s very easy once you’ve done it
          a few times.
        </p>
      </section>
    </article>
  );
}
