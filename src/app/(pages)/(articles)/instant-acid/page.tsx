import Image from "next/image";

export default function TheBand() {
  return (
    <>
      <div id="instant-acid">
        <main id="page-content" className="page-content">
          <article>
            <section>
              <h1>Instant ACID</h1>
              <figure>
                <Image
                  src="/instant-acid/instant-acid-uhd.avif"
                  alt="Instant Acid"
                  width={1800}
                  height={1200}
                />
                <figcaption>Instant Acid</figcaption>
              </figure>
              <p>
                I was also lucky enough to have written a book about Sony ACID
                Pro called{" "}
                <a href="https://www.amazon.com/Instant-ACID-Rofrano-Iacobus-Paperback/dp/B011827PQU">
                  Instant ACID
                </a>{" "}
                It is both an introductory and in depth tutorial written by
                myself and Iaccobus that gets you started quickly, and then
                dives into the tips and techniques that I use for getting the
                most out of ACID Pro.
              </p>{" "}
              <p>
                <strong>Instant ACID</strong> from{" "}
                <a href="http://www.cmpbooks.com/product/1304">CMP Books</a>{" "}
                completes the circle of Instant books for the core Sony Media
                Software products along side of Instant Vegas and Instant Sound
                Forge. My co-author Iacobus and myself were both beta testers
                for ACID Pro 5.0 and are regular contributors to online forums
                in the ACID communities. You can read a review of the book on{" "}
                <a href="http://www.digitalproducer.com/articles/viewarticle.jsp?id=31006">
                  DigitalProducer.com
                </a>
                . You can order it today at{" "}
                <a href="http://www.amazon.com/exec/obidos/tg/detail/-/1578202663/">
                  Amazon.com
                </a>{" "}
                or{" "}
                <a href="http://www.walmart.com/catalog/product.gsp?product_id=3430943">
                  Walmart.com
                </a>
                .
              </p>
              <p>
                The Instant series of books are not “bible” books. They do not
                tell you everything you wanted to know but were afraid to ask,
                nor do they go into endless details about why things work the
                say they do. What they do provide is instant access to how to
                accomplish core tasks quickly with workflows the authors have
                found to be most useful.
              </p>
              <p>
                We have tried to fill this book with enough basics to get you
                productive quickly and enough advanced tips and techniques to
                keep you exploring new directions. Instant ACID does not have to
                be read cover-to-cover to understand it. It is written more like
                a task-oriented reference that you can use to just learn the
                areas that are of interest to you. It is very visual and to the
                point. We hope you get as much out of reading it as we did
                writing it. If you have any questions, you can always find us on
                the{" "}
                <a href="http://mediasoftware.sonypictures.com/forums/">
                  Sony ACID Forums
                </a>{" "}
                (John Rofrano is <strong>JohnnyRoy</strong> and Iacobus is{" "}
                <strong>mD</strong>)
              </p>
            </section>
            <section>
              <h1>Instant Vegas Movie Studio</h1>
              <figure>
                <Image
                  src="/instant-acid/instant-movie-studio.avif"
                  alt="Instant Movie Studio"
                  width={1800}
                  height={1200}
                />
                <figcaption>Instant Movie Studio</figcaption>
              </figure>
              <p>
                Douglas Spotted Eagle, Jeffery Fisher, and John Rofrano got
                together to produce this complete one-if-a-kind introduction to
                all three programs in the Sony Studio suite: Vegas Movie Studio,
                ACID Music Studio, and Sound Forge Audio Studio. These
                applications are perfect for beginner to intermediate
                videographers who want to be productive fast but don’t want to
                compromise features. The Instant Vegas Movie Studio book will
                take you step-by-step though all three applications and get you
                up and running and productive quickly with Vegas Movie Studio
                4.0.
              </p>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
