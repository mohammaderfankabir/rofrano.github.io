import Image from "next/image";
import { DATABASE } from "@/constants";

const BOBBY = DATABASE.bobby;

export default function Bobby() {
  return (
    <>
      <div id="bobby">
        <main id="page-content" className="page-content">
          <article>
            <h1>Remembering Antoinette</h1>

            <figure>
              <Image
                src="/bobby/bobby.avif"
                alt="Antoinette 'Bobby' Rofrano (1915–2006)"
                width={1800}
                height={1200}
              />
              <figcaption>Antoinette 'Bobby' Rofrano (1915–2006)</figcaption>
            </figure>

            <p>
              This page is dedicated to my Mother who died of old age. I use to
              joke with her because she was 90 years old didn’t have a single
              thing wrong with her. I told her she was going to live forever at
              this rate. Boy was I wrong! She eventually developed a condition
              where she couldn’t swallow. Her esophagus eventually got weaker
              and weaker until she couldn’t ingest enough nourishment to sustain
              her life. She passed away January 23, 2006 at 7:45PM. Her four
              children were with her (three physically by her side and one on
              the phone) and several of her grandchildren where there including
              Lisa who had cared for her and been her almost constant companion
              for the last seven months. She passed very peacefully. This page
              is not a morning of her death, but rather, a celebration of her
              life.
            </p>

            <p>
              My mother’s funeral was befitting of a queen. It was held in St.
              John the Evangelist Church in Schenectady NY, and was as large as
              a cathedral. The ceilings went up forever, and everywhere you
              looked was marble. The seating was like an amphitheatre and the
              altar was magnificent. Her granddaughter Lisa who took care of her
              the past seven months did the bible reading from the Old Testament
              and her eldest grand daughter Jennifer did the New testament
              reading. Her eldest grandson Vincent read the General
              Intercessions and, two of her great-grandchildren, Briana and
              Michael, brought up the offertory gifts. The pastor even asked me
              to assist with the communion. I had told him I was a Eucharistic
              Minister but I didn’t ask to participate in the Mass so it was a
              total surprise to me.
            </p>

            <p>
              Many who attended told me it was a true celebration of her life
              and not a funeral at all. It was the greatest compliment they
              could have given me. I’m sure my father was smiling down upon me.
              I was only trying to do what he would have done had he been alive.
            </p>

            <p>
              Mom and Dad are together again. Be sure to visit Bobby’s Kitchen.
              (short video)
            </p>

            <h2 id="eulogy">Eulogy</h2>

            <p>
              Here is the eulogy that I wrote for my mother. The Pastor read the
              major parts of it and since he was Italian too, he relayed the
              fact the he knew what it’s like having an Italian mother:
            </p>

            <p>
              I know that Mom is smiling upon us today because she always smiled
              when her family was gathered together. Family was at the core of
              who mom was. She wasn’t much for social events, she wasn’t much
              for politics, she didn’t watch soap operas, she just cared and
              nurtured her family in the best way she knew how. Every Sunday she
              would get up early to attend Mass so that she could come home and
              start cooking the Sunday dinner by 9:00AM. A big pot of gravy
              could be found on the stove cooking, and cooking, and cooking.
              Somehow, Dad would always manage to steal a few fried meatballs
              before they made it to gravy. On special occasions she would make
              homemade macaroni. In fact, the whole family would make homemade
              ravioli with each family member having their own job to do in a
              giant assembly line that started in the kitchen and ended on a
              white floured sheet in the bedroom.
            </p>

            <p>
              To Mom, food was love. When I asked her grandchildren for memories
              of their grandmother, they all agreed that the three words most
              often used by grandma were, “Eat, eat, eat”. That was her way of
              saying, “I love you, I love you, I love you”. She could whip up a
              gourmet meal on a moments notice out of just what was in the
              refrigerator and proclaim, “oh it’s so simple to do”. So many of
              the memories they had of her where about food and therefore about
              her love. Love for her husband, and her children and her
              grandchildren and great-grandchildren. The pizzelles, the
              home-made ravioli, the polenta, the spaghetti alio ulio, the
              cheesecake, the Easter bread, the Christmas cookies, and the list
              goes on and on. Mom sure knew how to cook up a lot of love.
            </p>

            <p>
              We should remember today not to mourn her passing but to celebrate
              her life. Her life as a loving grandmother and great-grandmother
              to so many of you sitting here. Her life as a mother who did her
              best to guide her children in the right direction. Her life as a
              dedicated wife and companion of 56 years to Dad who loved her just
              as deeply. I know that Mom &amp; Dad loved to dance and today I am
              sure they are together again dancing in heaven. Let us be happy
              for them and for the privilege to have known our mom, Antoinette
              Rofrano, and have been touched by her life.
            </p>

            <p>John J. Rofrano Jr., January 28, 2006</p>

            <h2 id="life-goal">A Life Goal</h2>

            <p>
              I regret that my father didn’t live long enough to see me achieve
              one of my life long goals; to write a book. I don’t know what it
              was about writing a book that intrigued me but I always felt that
              I had information to share on a number of topics and it would be
              great to document it in a book. I was lucky enough to achieve that
              goal in January 2005 and was also lucky that my mother was still
              alive to celebrate this milestone with me.
            </p>

            <p>
              This is a picture of me and my mother taken on February 15, 2005
              when I showed her that I had written my first book. I remember her
              looking through the pages at all the pictures and I was trying to
              explain to her that it was an instructional book on music
              software. She just kept looking and looking and the looked up at
              me with a smile like she was very proud.
            </p>

            <p>
              My next life long goal is to live to be 90 just like my mother. 😉
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
