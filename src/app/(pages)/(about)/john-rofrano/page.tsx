import Image from "next/image";

export default function JohnRofrano() {
  return (
    <>
      <div id="john-rofrano">
        <main id="page-content" className="page-content">
          <article>
            <h1>About</h1>

            <h2 id="john-rofrano">John Rofrano</h2>

            <figure>
              <Image
                src="/john-rofrano/john-rofrano.avif"
                alt="John J. Rofrano"
                width={1800}
                height={1200}
              />
              <figcaption>John J. Rofrano</figcaption>
            </figure>

            <p>
              <em>
                DevOps Champion, Software Engineer/Architect, Musician,
                Vocalist, Songwriter, Author, Educator, Videographer.
              </em>
            </p>

            <p>
              John Rofrano is a Senior Technical Staff Member and DevOps
              Champion at IBM T.J. Watson Research Center where he leads a
              variety of research projects exploring the use of Generative AI
              for accelerating Application Modernization to the Cloud. He is
              also a DevOps Champion, and he pioneered the IBM Research DevOps
              Bootcamps which provided an immersive training environment into
              the Culture, Practices, and Technologies of DevOps. John has spent
              the last 40 years at IBM leading projects including Cloud
              Migration, Cloud Native Workload Management, and DevSecOps.
            </p>

            <h2 id="adjunct-faculty">Adjunct Faculty</h2>

            <p>
              John is also an Adjunct Faculty Member at New York University
              Courant Institute of Mathematical Science, and at Stern School of
              Business @ NYU, where he teaches a graduate course on DevOps and
              Agile Methodologies. He was named a Top Instructor at Coursera.org
              where he has published courses on DevOps, Agile Development and
              Scrum, Test Driven Development, Continuous Integration and
              Continuous Delivery, and Application Security and Monitoring. John
              has also taught Migration to Cloud Computing at Columbia
              University.
            </p>

            <h2 id="vasst-trainer">VASST Trainer</h2>

            <p>
              Previously, John was a Senior VASST Trainer and the author of{" "}
              <a href="https://www.amazon.com/Instant-ACID-Rofrano-Iacobus-Paperback/dp/B011827PQU">
                Instant ACID
              </a>
              , a book on Sony ACID Pro software, and{" "}
              <a href="https://www.amazon.com/Instant-Vegas-Studio-Douglas-Spotted/dp/157820271X">
                Instant Vegas Movie Studio + DVD
              </a>{" "}
              from CMP Books. He is also the developer of Ultimate S Pro, Vegas
              Pro Production Assistant, Mayhem, and other software plug-ins
              including the FASST Apps for Sony Vegas Pro NLE software.
            </p>

            <h2 id="performing-musician">Performing Musician</h2>

            <p>
              Before joining IBM, John spent 10 years back in the 70’s as a
              performing rock musician, singer, songwriter, paying his dues in
              nightclubs and studios the NY tri-state area. As a keyboard
              player, his early influences were musicians like Peter Nero, Dave
              Brubeck, Jimmy Smith, and later Lee Michaels, Rick Wakeman, and
              Keith Emerson. He admires songwriters like Burton Cummings and
              Randy Newman for their unique songwriting styles, and bands like
              Yes, Genesis, ELP, and Gentle Giant for their musicianship and
              willingness to push the envelope of progressive rock.
            </p>

            <h2 id="electronic-music">Electronic Music</h2>

            <p>
              His interest in the early days of electronic music and MIDI
              programming ultimately lead to a career in the field of computer
              science. John connect his MIDI keyboards to his Apple ][+ computer
              via a Roland MPU-401 interface and he began writing MIDI software.
              This ultimately lead to his career at IBM. After discovering his
              new passion for videography in 2000, John has come full circle
              back to his roots of music composition and scoring music for
              video.
            </p>

            <p>
              When not making music, editing video, or designing new software,
              John was a moderator for the Sony Vegas Pro forum at the Creative
              Cow, and a moderator for the Sony ACID and Vegas Scripting forum
              at the Digital Media Network forums, and on the Sony Creative
              Software Vegas forums under the username JohnnyRoy.
            </p>

            <h2 id="who-is-johnny-roy">Who is Johnny Roy?</h2>

            <p>
              Johnny Roy was his stage name for the 10 years that he played live
              5 nights a week in a rock band (circa 1970-1980). His uncle Jimmy
              Rofrano (who’s real name was Vincent James Rofrano) played guitar
              in Al Goodman’s orchestra and took the name Jimmy Roy because it
              wasn’t popular to be an Italian immigrant back in those days.
              Jimmy Roy died before he could see John play professionally, so
              John took the stage name Johnny Roy in his honor.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
