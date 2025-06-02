const guide = [
  {
    slug: "welcome",
    title: "Welcome",
    description: "",
    href: "/guide/music/welcome",
    category: "music",
  },
  {
    slug: "midirouter",
    title: "Virtual MIDI Router Installation",
    description:
      "Sony’s Virtual MIDI Router acts like a virtual cable, routing MIDI inputs/outputs for ACID Pro, Vegas Pro, and other apps.",
    href: "/guide/music/midirouter",
    category: "music",
  },
  {
    slug: "mousekeyboard",
    title: "Bome Mouse Keyboard",
    description:
      "No hardware MIDI keyboard? Use Bome’s software keyboard to compose in ACID when traveling. Here’s how to set it up.",
    href: "/guide/music/mousekeyboard",
    category: "music",
  },
  {
    slug: "stolentrack",
    title: "Extract MIDI Tracks in ACID",
    description:
      "In ACID, one track holds multiple MIDI tracks, each on its channel, so patch changes can’t be set at the track level.",
    href: "/guide/music/stolentrack",
    category: "music",
  },
  {
    slug: "tempodrift",
    title: "Fixing Tempo Drift with Sound Forge",
    description:
      "For live recordings with tempo drift, fix timing in Sound Forge before using ACID, as multiple beatmaps take too long to create.",
    href: "/guide/music/tempodrift",
    category: "music",
  },
  {
    slug: "tempomapping",
    title: "Using Tempo Mapping to Fix Tempo Drift",
    description:
      "Learn how to add ACID loops to live songs using tempo mapping to match the project tempo to live performance changes.",
    href: "/guide/music/tempomapping",
    category: "music",
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    description:
      "A 2012 FAQ for ACID Pro users on Windows featuring helpful answers to common music composition questions.",
    href: "/guide/music/faq",
    category: "music",
  },
  {
    slug: "welcome",
    title: "Welcome",
    description: "",
    href: "/guide/video/welcome",
    category: "video",
  },
  {
    slug: "animatedtitles",
    title: "Making Animated Titles with SWISHMax",
    description:
      "Need quick animated titles in Vegas? Use Flash SWF files from any Flash tool and easily add them without keyframing.",
    href: "/guide/video/animatedtitles",
    category: "video",
  },
  {
    slug: "aviddnxhd",
    title: "Avid DNxHD Template for Vegas Pro",
    description:
      "Avid DNxHD is ideal for Vegas–Final Cut Pro workflows, offering high quality and consistent gamma when moving from PC to Mac.",
    href: "/guide/video/aviddnxhd",
    category: "video",
  },
  {
    slug: "axogoncomposer",
    title: "Axogon Composer Looping Backgrounds",
    description:
      "Axogon Composer, the free predecessor to MainActor, offers many features—try it out before upgrading to MainActor.",
    href: "/guide/video/axogoncomposer",
    category: "video",
  },
  {
    slug: "borisgraffiti",
    title: "Using Boris Graffiti with Vegas Pro",
    description:
      "Basic tutorials to help you get started with Boris Graffiti LTD and return your titles seamlessly back into Vegas.",
    href: "/guide/video/borisgraffiti",
    category: "video",
  },
  {
    slug: "camtasia2dvd",
    title: "Editing Camtasia footage in Vegas Pro",
    description:
      "High-resolution screens can mislead us—DVD tutorials from screen captures must account for low 720x480/576 resolution limits.",
    href: "/guide/video/camtasia2dvd",
    category: "video",
  },
  {
    slug: "cineform",
    title: "Cineform Render Templates",
    description:
      "Sony Vegas 6–8 included CineForm codec and templates, but removed starting with Vegas Pro 9.",
    href: "/guide/video/cineform",
    category: "video",
  },
  {
    slug: "floatingtext",
    title: "Floating Text on Water",
    description:
      "Use displacement and height maps to make layers follow textures—create a 3D floating text effect on water in this tutorial.",
    href: "/guide/video/floatingtext",
    category: "video",
  },
  {
    slug: "hollywoodfx",
    title: "Exporting and Importing a Transition made with Hollywood FX",
    description:
      "Pinnacle Hollywood FX isn’t a Vegas plug-in but offers nice 3D transitions—here’s how I use it with Vegas Pro.",
    href: "/guide/video/hollywoodfx",
    category: "video",
  },
  {
    slug: "motiontracking",
    title: "BCC Motion Tracking in Vegas Pro",
    description:
      "Learn how to use Motion Tracker and Pixel Chooser in Boris Continuum Complete 7 with Vegas Pro 10 to map Sparks effects and blur moving objects, like logos on a t-shirt.",
    href: "/guide/video/motiontracking",
    category: "video",
  },
  {
    slug: "multichannel",
    title: "Multichannel Render Template in Vegas Pro",
    description:
      "Learn to set up Vegas Pro for multichannel renders with correct project and template settings for consistent results.",
    href: "/guide/video/multichannel",
    category: "video",
  },
  {
    slug: "parentmotion",
    title: "3D Parent Motion",
    description:
      "Create 3D flying videos using Parent Motion—control multiple tracks together by setting all to 3D mode. Here’s how.",
    href: "/guide/video/parentmotion",
    category: "video",
  },
  {
    slug: "pencilsketch",
    title: "Make a Pencil Sketch",
    description:
      "Add charm with an animated pencil sketch effect using two video tracks and a Bump Map in a parent/child setup.",
    href: "/guide/video/pencilsketch",
    category: "video",
  },
  {
    slug: "pivot",
    title: "Changing Pivot Point in Vegas",
    description:
      "This tutorial shows how to change the pivot point in Sony Vegas Pro 3D Track Motion by turning off Object Space editing.",
    href: "/guide/video/pivot",
    category: "video",
  },
  {
    slug: "secretbutton",
    title: "Hidden DVD Menu Buttons",
    href: "/guide/video/secretbutton",
    description:
      "Create hidden “easter egg” buttons in DVD Architect by linking empty, image-free buttons to videos for secret menu features.",
    category: "video",
  },
  {
    slug: "shuttlepro",
    title: "Contour Designs Shuttle Pro v2.0 Setup",
    description:
      "The Contour ShuttlePRO v2 is essential for editing—once you try its jog/shuttle wheels, you won’t want to edit without it.",
    href: "/guide/video/shuttlepro",
    category: "video",
  },
  {
    slug: "splitscreen",
    title: "Creating a Split Screen using a Mask",
    description:
      "In Sony Vegas, Pan/Crop is commonly used for the split screen when the cropped image stays still without needing to move.",
    href: "/guide/video/splitscreen",
    category: "video",
  },
  {
    slug: "trackmotion",
    title: "Track Motion Filmstrip",
    description:
      "Use Parent Motion and Track Motion in Vegas to move and resize multiple PiP tracks as a single unit across the frame.",
    href: "/guide/video/trackmotion",
    category: "video",
  },
  {
    slug: "watercolor",
    title: "Turn the Video into a Water Color Painting",
    description:
      "Learn to create a watercolor-style video with defined ink lines and color splashes in 5 easy steps using Sony Vegas.",
    href: "/guide/video/watercolor",
    category: "video",
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    description:
      "A helpful FAQ compiled in 2012 for Vegas Pro users on Windows, featuring answers to common video editing questions from various forums.",
    href: "/guide/video/faq",
    category: "video",
  },
];

export default guide;
