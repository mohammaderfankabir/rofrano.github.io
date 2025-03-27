export const BASE_URL =
  typeof window !== "undefined"
    ? window.location.origin
    : "https://rofrano.github.io";

export const ICONS = {
  icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 16 16'%3E%3Cpath d='M2.67,0C1.19,0,0,1.19,0,2.67h0v10.67c0,1.47,1.19,2.67,2.67,2.67h10.67c1.47,0,2.67-1.19,2.67-2.67V2.67C16,1.19,14.81,0,13.33,0H2.67ZM13.66,12.97c.37-.25.75-.51,1.13-.77h.02c.07.11.15.22.22.33-.43.29-.87.59-1.3.88l-1.26.85c-.23-.66-.47-1.32-.7-1.97l-.52-1.45c-.49-1.35-1.23-2.03-2.62-2.38-.19.13-.37.25-.56.37v3.4c.54.19,1.04.43,1.52.75l.94-.79c.07.09.15.19.23.28-.71.6-1.42,1.2-2.13,1.8-1.43-.83-2.81-1.17-4.45-1.1-1.05.05-1.84.38-2.61,1.1-.08-.08-.15-.15-.23-.23.97-1.31,2.04-1.93,3.65-2.15.28-2.01-1.12-3.86-3.13-4.14-.01,0-.03,0-.04,0v-.33c.53-.22,1.04-.49,1.52-.81.56-.38,1.12-.77,1.68-1.15v-.83c0-1.53-1.83-2.31-2.93-1.25l-.27-.23c.74-.8,1.5-1.13,2.6-1.13,1.25,0,2.27,1.01,2.27,2.26,0,.01,0,.03,0,.04l3.37-2.3,2.83,3.63c-.9.59-1.8,1.19-2.69,1.78,1.27.68,2.02,1.54,2.51,2.9l.95,2.66ZM3.21,7.16c.75.33,1.32.78,1.81,1.43v-2.67l-.88.61c-.31.21-.62.42-.93.63M6.69,11.9c.34.05.67.12,1,.21V4.11l-1,.68v7.11ZM8.05,3.85v4.54l3.24-2.15-2.35-3.01-.89.61Z'/%3E%3C/svg%3E",
  apple: "/apple-icon.png",
};

export const SOCIAL_MEDIA = {
  x: "https://x.com/JohnRofrano",
  linkedin: "https://www.linkedin.com/in/johnrofrano",
  medium: "https://www.medium.com/@JohnRofrano",
  youtube: "https://www.youtube.com/@JohnRofrano",
};

export const DATABASE = {
  person: {
    bobby: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: `${BASE_URL}/bobby`,
      mainEntity: {
        "@type": "Person",
        name: "Antoinette Rofrano",
        birthDate: null,
        deathDate: "2006-01-23",
        description:
          'Antoinette owned and operated Bobbys Beauty Shoppe at 177 South Broadway, Yonkers until 1946 where she was given the nickname "Bobby.". She was predeceased by her husband John J. Rofrano; they were married 56 years at the time of his death in 2001. Mrs. Rofrano is survived by three daughters and a son, 13 grandchildren and ten great grandchildren. She is also survived by three sisters, Sadie Berardis of Yonkers, Betty DeMichele of Boynton Beach, FL, and Jean DeMarco of Suffern; and nieces and nephews. (Information paraphrased from The Daily Gazette) 1/26/06', //Ref. https://www.findagrave.com/memorial/149228413/antoinette_l_rofrano
      },
    },
    johnRofranoSr: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: `${BASE_URL}/bobby`,
      mainEntity: {
        "@type": "Person",
        name: "John J. Rofrano",
        birthDate: null,
        deathDate: "2001-11-18",
        description: "John J. Rofrano Sr. (1914–2001)",
      },
    },
    johnRofrano: {
      "@context": "https://schema.org",
      "@type": "Person",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: null,
        streetAddress: null,
      },
      email: "mailto:rofrano@cs.nyu.edu",
      image: `${BASE_URL}/john-rofrano.avif`,
      jobTitle: "Senior Technical Staff Member | DevOps Champion",
      worksFor: [
        {
          "@type": "Organization",
          name: "IBM T.J. Watson Research Center",
        },
        {
          "@type": "Organization",
          name: "New York University",
          roleName: "Adjunct Faculty",
        },
      ],
      name: "John Rofrano",
      telephone: null,
      url: "https://www.johnrofrano.com/",
    },
  },
  pages: {
    home: {
      title: "John Rofrano - Website",
      description: "John Rofrano’s tutorials, blogs, and ideas.",
      authors: "John Rofrano",
      keywords: "",
      url: "/",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "monthly",
      priority: 1,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt: "John Rofrano’s tutorials, blogs, and ideas.",
    },
    bobby: {
      title: "Remembering Antoinette",
      description:
        "In loving memory of Antoinette 'Bobby' Rofrano (1915-2006), a devoted mother, grandmother, and great-grandmother. Celebrate her life, her love for family, and her unforgettable cooking. This page is a tribute to a remarkable woman whose legacy of love continues to inspire all who knew her.",
      authors: "John Rofrano",
      keywords: "Antoinette Rofrano, Bobby Rofrano",
      url: "/bobby",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt: "Antoinette 'Bobby' Rofrano (1915–2006)",
    },
    johnRofrano: {
      title: "John Rofrano, DevOps Champion Educator Musician and Author",
      description:
        "John Rofrano is a Senior Technical Staff Member at IBM T.J. Watson Research Center, DevOps Champion, Software Engineer, Musician, Educator, and Author. With expertise in Generative AI, DevOps, Cloud Migration, and more, he also teaches at NYU and Columbia University. Discover his diverse career journey from software development to music and videography.",
      authors: "John Rofrano",
      keywords: "John Rofrano, Johnny Roy",
      url: "/john-rofrano",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.8,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt: "John Rofrano’s tutorials, blogs, and ideas.",
    },
    johnRofranoSr: {
      title: "Remembering John",
      description:
        "In loving memory of John J. Rofrano Sr. (1914-2001), a devoted father, community volunteer, and man of integrity. Celebrate his life, his faith, and the love he shared with his family and friends.",
      authors: "John Rofrano",
      keywords: "John J. Rofrano, John Rofrano Sr.",
      url: "/john-rofrano-sr",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt: "John J. Rofrano Sr. (1914–2001)",
    },
    synthesizers: {
      title: "Synthesizers - John Rofrano",
      description:
        "Explore my Eurorack collection with Behringer recreations of ARP 2600, Moog System 55, ARP 2500 & Roland 100m.",
      authors: "John Rofrano",
      keywords: "Eurorack, Modular Synthesizers",
      url: "/synthesizers",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Behringer System 55, a large modular synthesizer with many knobs, jacks, and a sleek design.",
    },
    theBands: {
      title: "The Bands - John Rofrano",
      description:
        "Discover the bands I've played in, from high school to professional gigs. Explore stories from The Andy Gootch Band, Tracer, Glyder & Steeplechase, and more.",
      authors: "John Rofrano",
      keywords: "Rock Bands, Professional Musician",
      url: "/the-bands",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Andy Gootch Band group portrait, outdoor setting, 1970s style.",
    },
  },
  posts: {
    parentMotion: {
      title: "3D Parent Motion - John Rofrano",
      description:
        "A nice 3D effect is the ability to have two videos fly through space parallel to each other. The secret to controlling multiple tracks in unison is to use Parent Motion. For this to work in 3D, all three tracks must be in 3D mode. Let’s see how it’s done.",
      authors: "John Rofrano",
      keywords: "3D Parent Motion, Vegas Pro",
      url: "/3d-parent-motion",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Vegas Pro with 3D Parent Motion setup. Tracks named '3D Parent,' 'Front Plane,' and 'Back Plane' with level controls.",
    },
    trackMotionPivot: {
      title: "3D Track Motion Pivot - John Rofrano",
      description:
        "Changing the Pivot Point This tutorial shows you how to change the pivot point of a frame in 3D Track Motion using Sony Vegas Pro . Changing the pivot point is quite simple. It’s done by turning off Editing in Object Space and then moving the pivot point.",
      authors: "John Rofrano",
      keywords: "3D Track Motion, Vegas Pro",
      url: "/3d-track-motion-pivot",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Vegas Pro with an arrow pointing to the 3D Track Motion pivot point.",
    },
    acidProFaq: {
      title: "ACID Pro FAQ - John Rofrano",
      description:
        "Explore answers to frequently asked ACID Pro questions, including how to add loops, record with MIDI and VSTi, eliminate MIDI keyboard delay, and much more.",
      authors: "John Rofrano",
      keywords: "MIDI, ACID Pro",
      url: "/acid-pro-faq",
      category: "Music",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt: "FAQ",
    },
    avidDnxhdTemplate: {
      title: "Avid DNxHD Template for Vegas Pro - John Rofrano",
      description:
        "Quite often I’m asked what’s the best format to work with in Vegas Pro when you need to collaborate with Final Cut Pro editors on a Mac. The best codec I have found is the free  Avid DNxHD  QuickTime codec. The reason I use this codec in addition to it’s superior quality for mastering, is because it doesn’t suffer from the gamma shifts that some other PC codecs have when transferred to the Mac. With Avid DNxHD, you get the gamma levels you expect, and the quality you need.",
      authors: "John Rofrano",
      keywords: "Avid DNxHD, Vegas Pro template",
      url: "/avid-dnxhd-template",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of QuickTime 7 with video rendering settings set to 3 Mbps.",
    },
    axogonLoopingBackgrounds: {
      title: "Axogon Composer Looping Backgrounds - John Rofrano",
      description:
        "Axogon Composer beta 0.93 is the predecessor to Main Concept’s MainActor software. While MainActor has some additional features, Axogon Composer has most of them and is freely available and various download sites. (just check Google). If you find you like it, you might want to consider purchasing MainActor.",
      authors: "John Rofrano",
      keywords: "Axogon Composer, Looping Backgrounds",
      url: "/axogon-looping-backgrounds",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Axogon Composer showing a 'Track 1' error with no clip at frame zero.",
    },
    bomeMouseKeyboard: {
      title: "Bome Mouse Keyboard - John Rofrano",
      description:
        "Sometimes you just don’t have a hardware MIDI keyboard handy (like when traveling) but you need to compose something with ACID that needs MIDI keyboard input. There is a great little software keyboard that you can use from Bome that will get you by in a pinch. Here’s how to set it up.",
      authors: "John Rofrano",
      keywords: "Bome Mouse Keyboard, Virtual MIDI Router",
      url: "/bome-mouse-keyboard",
      category: "Music",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Bome's Mouse Keyboard interface with virtual piano keys, MIDI controls, and a volume slider.",
    },
    borisGraffiti: {
      title: "Using Boris Graffiti with Vegas Pro - John Rofrano",
      description:
        "Here are just a few tutorials to get you started with Boris Graffiti LTD. These are not meant to be extensive. They are just to get you familiar with the basics of getting into and out of Graffiti and get your title back into Vegas.",
      authors: "John Rofrano",
      keywords: "Boris Graffiti, Vegas Pro",
      url: "/boris-graffiti",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Graffiti text editor with 'Boris Rocks!' text and the Style Palette open.",
    },
    camtasiaFootage: {
      title: "Editing Camtasia footage in Vegas Pro - John Rofrano",
      description:
        "We are spoiled by our high resolution computer screens. They are so crisp and clear. When creating tutorials using screen capture with an application like Camtasia for delivery on small formats like DVD, we sometimes forget that DVD resolution is 720x480 (NTSC) or 720x576 (PAL). That’s like changing the resolution of your PC screen to 640x480.",
      authors: "John Rofrano",
      keywords: "Camtasia, Vegas Pro",
      url: "/camtasia-footage",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Vegas Pro with the Pan/Crop tool editing Camtasia footage.",
    },
    cineformTemplates: {
      title: "Creating Cineform Templates - John Rofrano",
      description:
        "Versions of Sony Vegas 6, 7, &amp; Pro 8 shipped with CineForm codec and render templates for Cineform, but starting with Vegas Pro 9, Sony stopped shipping the CineForm codec and stopped supplying CineForm render templates.",
      authors: "John Rofrano",
      keywords: "CineForm, Vegas Pro",
      url: "/cineform-templates",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt: "Sony Vegas Pro",
    },
    dvdArchitectEmptyButton: {
      title: "Hidden DVD Menu Buttons - John Rofrano",
      description:
        "Sometimes in DVD Architect you want to create your own buttons and link them videos manually instead of always dropping media files on menus to create buttons. In fact you can make a “secret” button (sometimes referred to as “easter eggs”) by creating an empty button, turning off the text, and not assigning it any image but linking it to a video so that the video plays when someone presses ENTER on their DVD remote. (hint: This is how “Easter Eggs” and made on Hollywood DVD menus)",
      authors: "John Rofrano",
      keywords: "Hidden DVD Buttons, DVD Architect",
      url: "/dvd-architect-empty-button",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of DVD Architect with an empty button, no image, and default text.",
    },
    hollywoodFX: {
      title: "Using Hollywood FX with Vegas Pro - John Rofrano",
      description:
        "Wouldn’t it be nice if everything you needed was a plug-in to Vegas Pro? Unfortunately, there are lots of standalone packages that do great FX but don’t integrate into Vegas. One of these that I use is Pinnacle Hollywood FX. It has some great canned 3D transitions for weddings and other events. I thought I would share my workflow for doing this.",
      authors: "John Rofrano",
      keywords: "Hollywood FX, Vegas Pro Transitions",
      url: "/hollywood-fx",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Vegas Pro editing a Hollywood FX transition with 'Chrissy Communion' text on a wedding book effect. Export/import transitions.",
    },
    instantACID: {
      title: "Instant ACID - John Rofrano",
      description:
        "Instant ACID is a task-oriented guide to Sony ACID Pro, providing quick workflows, essential techniques, and advanced tips for music production. Learn looping, beatmapping, MIDI recording, effects, and more in an easy-to-follow format.",
      authors: "John Rofrano",
      keywords: "Instant ACID, Instant Vegas Movie Studio",
      url: "/instant-acid",
      category: "Music",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Instant ACID training book cover with a microphone and keyboard graphic.",
    },
    midiTracksAcid: {
      title: "Extract MIDI Tracks in ACID - John Rofrano",
      description:
        "As you may know, one track in ACID can contain multiple MIDI tracks. Each MIDI track can control a separate MIDI instrument on its own MIDI channel. Because of this, ACID cannot allow you to assign MIDI patch information at the ACID track level because there is no way of knowing which MIDI track to send it to.",
      authors: "John Rofrano",
      keywords: "StolenTrack, MIDI extraction",
      url: "/midi-tracks-acid",
      category: "Music",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of the 'Track Properties' window with the 'Stolen Track' tab selected. Insert StolenTrack into new MIDI track properties.",
    },
    multichannelRenderTemplate: {
      title: "Multichannel Render Template in Vegas Pro - John Rofrano",
      description:
        "Rendering multichannel tracks to multichannel files is easy once you understand how. Setting up a multichannel render template in Vegas Pro requires that your project is set up correctly otherwise you won’t get the render that you expected. This tutorial shows you the entire procedure for setting up both your project and the render template so that you always get the multichannel audio that you expect. In this example I’m going to set up a 4 channel render template but you can use as many channels as your render type supports.",
      authors: "John Rofrano",
      keywords: "Multichannel render, Vegas Pro",
      url: "/multichannel-render-template",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of the Vegas Pro mixing console for multichannel render template creation.",
    },
    musicCopyrights: {
      title: "Music Copyrights - John Rofrano",
      description:
        "Learn about music copyrights for videos, including the need to obtain a sync license and get proper permissions for the legal use of music in your video projects.",
      authors: "John Rofrano",
      keywords: "Music copyrights, Sync license",
      url: "/music-copyrights",
      category: "Music",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of a bookshelf filled with various books, some stacked and some upright.",
    },
    parentMotionFilmstrip: {
      title: "Parent Motion Filmstrip - John Rofrano",
      description:
        "Sometimes you want to move multiple Picture-in-Picture tracks around a frame in unison. You might think this is a difficult compositing job but Vegas makes this very easy to do with Parent Motion and Track Motion. In this example we will resize several clips to fit within a film strip overlay using Track Motion. The entire strip with the clips will move across the frame in unison using Parent Motion.",
      authors: "John Rofrano",
      keywords: "Parent Motion, Vegas Pro Filmstrip",
      url: "/parent-motion-filmstrip",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of the Vegas timeline with the 'filmstrip-35mm' overlay clip for Parent Motion effects.",
    },
    pencilSketchEffect: {
      title: "Make a Pencil Sketch - John Rofrano",
      description:
        "Sometimes a special effect can add that extra charm to a video piece. One that I like is the animated pencil sketch. This effect uses two video tracks containing the same video events, which are composited together in a parent / child relationship using a Bump Map with near maximum Intensity and Bump Height.",
      authors: "John Rofrano",
      keywords: "Pencil Sketch Effect, Vegas Pro",
      url: "/pencil-sketch-effect",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Vegas Pro showing before and after pencil sketch effect on a wedding dance video using Bump Map.",
    },
    contourDesignsShuttlepro: {
      title: "Shuttle Pro Setup - John Rofrano",
      description:
        "I have the  Contour Designs ShuttlePRO v2  and I wouldn’t edit without it. Once you get use to the Jog and Shuttle wheels you’ll wonder how you ever edited without it too. Sony Vegas Pro even ships with a preference file for the Shuttle series of devices.",
      authors: "John Rofrano",
      keywords: "Shuttle Pro Setup, Vegas Pro",
      url: "/contour-designs-shuttlepro",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt: "Screenshot of Contour Shuttle Device Configuration.",
    },
    splitScreenMask: {
      title: "Creating a Split Screen using a Mask - John Rofrano",
      description:
        "There are lots of ways of doing split screen in Sony Vegas. Probably the way most people do it is with the Pan/Crop tool. This makes sense if you don’t need to move the image around after it is cropped (i.e., the object you want to crop will remain at the same place on the screen after the crop).",
      authors: "John Rofrano",
      keywords: "Mask Tool, Vegas Pro",
      url: "/split-screen-mask",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of split screen with two green screen clips, Clip A and Clip B, and subjects centered.",
    },
    swishmaxFlashTitles: {
      title: "Making Flash Titles with SWISHMax - John Rofrano",
      description:
        "There are times when you need a quick animated title in Vegas but don’t have time to do a lot of keyframing. Luckily, Vegas supports Flash SWF files which means, you can make animated titles in any Flash tool and drop the SWF file in Vegas.",
      authors: "John Rofrano",
      keywords: "Flash Titles, SWISHmax",
      url: "/swishmax-flash-titles",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of SWISHmax interface and highlighted Timeline, Tool Selection, Main Video, and Tool Properties.",
    },
    tempoDriftSoundforge: {
      title: "Fixing Tempo Drift with Sound Forge - John Rofrano",
      description:
        "Sometimes you want to use a live recording in ACID but the Beatmapper can’t be used effectively because the tempo drifts several times throughout the song. In these extreme cases you can fix tempo drift in a wave editor like Sound Forge. Sound Forge has an optimized workflow for working with sound files at this level or granularity where each measure may have to be corrected. Creating that many beatmaps in ACID is just too time consuming.",
      authors: "John Rofrano",
      keywords: "Tempo Drift, Sound Forge",
      url: "/tempo-drift-soundforge",
      category: "Music",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Sound Forge showing audio waveforms and time-stretching. Fix tempo drift by slicing and adjusting measures.",
    },
    tempoMapping: {
      title: "Using Tempo Mapping to Fix Tempo Drift - John Rofrano",
      description:
        "What do you do when you want to add ACID loops to a live song? The problem with live music is that is usually not performed to a “click-track” and the tempo drifts so that the ACID Beatmapper cannot be used. The answer is simple. What you need to do is something I call “Tempo Mapping”. Unlike beatmapping which adjusts the tempo of the song to match the project, tempo mapping adjust the tempo of the project to match the changes in the live feel of the song.",
      authors: "John Rofrano",
      keywords: "Tempo Mapping, Tempo Drift",
      url: "/tempo-mapping",
      category: "Music",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of ACID Pro using tempo markers in the audio waveform for tempo mapping.",
    },
    vegasProFaq: {
      title: "Vegas Pro FAQ - John Rofrano",
      description:
        "Get answers to common Vegas Pro editing issues with my FAQ guide. Learn how to fix jump cuts, clean up video noise, create title credit rolls, add animated backdrops, and more. Perfect for both beginners and experienced video editors.",
      authors: "John Rofrano",
      keywords: "Vegas Pro 6.0",
      url: "/vegas-pro-faq",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt: "FAQ",
    },
    virtualMidiRouter: {
      title: "Virtual MIDI Router Installation - John Rofrano",
      description:
        "The Virtual MIDI Router from Sony acts like a virtual MIDI cable. It allows you to route MIDI inputs and outputs as if you had real hardware MIDI ports with a MIDI cable between them. ACID Pro, Vegas Pro, and other MIDI applications will think these ports are real MIDI interfaces and allow you to assign other software like the Bome Mouse Keyboard to an input just like it was a real hardware MIDI keyboard with a MIDI cable attached. It’s a very handy device so lets see how to install it.",
      authors: "John Rofrano",
      keywords: "Virtual MIDI Router, MIDI installation",
      url: "/virtual-midi-router",
      category: "Music",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of Add Hardware Wizard 'Welcome' screen (Windows XP).",
    },
    watercolorEffect: {
      title: "Turn Video into a Water Color Painting - John Rofrano",
      description:
        "You know how water color paintings have nice defined black ink lines with color that splashes in and outside those lines. I though it would be nice if you could do that with video so here’s a little tutorial on how to achieve that effect in 5 easy steps using Sony Vegas.",
      authors: "John Rofrano",
      keywords: "Watercolor effect, Vegas Pro",
      url: "/watercolor-effect",
      category: "Video",
      datePublished: "2012-12-10T00:00:000Z",
      lastModified: "2025-03-19T10:00:00Z",
      changeFrequency: "yearly",
      priority: 0.5,
      openGraphImageUrl: "/opengraph.png",
      openGraphImageAlt:
        "Screenshot of man in blue shirt, video preview window, 720x480 resolution, frame 499.",
    },
  },
};
