import Image from "next/image";

export default function MusicCopyrights() {
  return (
    <>
      <div id="music-copyrights">
        <main id="page-content" className="page-content">
          <article>
            <h1>Music Copyrights</h1>
            <figure>
              <Image
                src="music-copyrights/bookshelves.avif"
                alt="Bookshelves"
                width={1800}
                height={1200}
              />
              <figcaption>Bookshelf</figcaption>
            </figure>
            <p>
              <em>
                Disclaimer: I am not a lawyer and this is not legal advice. This
                pages is just what I have learned from my reading up on the
                subject. You should always consult with a lawyer about copyright
                issues.
              </em>
            </p>
            <h2 id="music-copyrights-for-video">Music copyrights for Video</h2>
            <p>
              There are a few things to look out for when mixing music and
              video. Many people are under the false impression that purchasing
              a CD of music gives them the right to use that music in their
              videos. This is true for your own personal use but as soon as you
              give a copy of the video away or even show it outside of your home
              at a public gathering, you are breaking the law unless you obtain
              permission from the copyright holders.
            </p>
            <p>
              Purchasing a CD of music gives you the right to listen to the
              music. When you synchronize that music to video images, you are
              creating a derivative work which requires a Sync license. These
              are usually granted by the Publisher of the music because it is
              independent of any artist who may have covered the song. You will
              also need to get rights for the rendition of the song you want to
              use.
            </p>
            <p>
              If you are creating a video, you are an author of a work that has
              its own copyrights. Please respect the copyrights of others, as
              you would want your own work respected and please consult with a
              copyright attorney to be sure that what you intend to so is legal.
            </p>
            <h3 id="links-to-articles-on-the-topic">
              Links to articles on the topic:
            </h3>
            <ul>
              <li>
                <a href="http://www.sundancemediagroup.com/articles/copyright.htm">
                  My Voice, My Choice: Basic Copyright Caveats
                </a>{" "}
                - by Douglas Spotted Eagle
              </li>
              <li>
                <a href="http://fairuse.stanford.edu/Copyright_and_Fair_Use_Overview/index.html">
                  Copyrights &amp; Fair Use
                </a>{" "}
                - Stanford University Library
              </li>
            </ul>
            <h3 id="links-to-perform-copyright-searches">
              Links to perform copyright searches:
            </h3>
            <ul>
              <li>
                <a href="https://www.ascap.com/Home/ace-title-search/index.aspx">
                  ASCAP ACE Search
                </a>{" "}
                - A great place to find the publisher of a song
              </li>
              <li>
                <a href="http://www.bmi.com/search/">BMI Search</a> - Another
                great place to find publishers
              </li>
              <li>
                <a href="http://catalog.loc.gov/">
                  Library of Congress Copyright Office
                </a>{" "}
                - Good for US copyrights only
              </li>
              <li>
                <a href="http://www.copyright.gov/">US Copyright Office</a>
              </li>
            </ul>
          </article>
        </main>
      </div>
    </>
  );
}
