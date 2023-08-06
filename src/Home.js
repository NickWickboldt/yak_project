import React from "react";
import TopContent from "./TopContent";
import ContentBox from "./ContentBox";
import FootnoteTab from "./FootnoteTab";
import { useEffect } from "react";

function Home() {
  const text = "The Yak";
  const src = "./images/currency.jpg";
  const alter = "yak_image";
  const popupText =
    "For almost 55 years no wild yaks had been seen in Nepal. That all changed in 2015 when researcher Geraldine Werhahn captured an iconic photo of a wild yak that now appears on the Nepal 5 Rupee Note. [1]";
  const content =
    "Despite not being on a large global scale, the domestication of the yak in South, Southeast, and Central Asia can be attributed to its unique physiological adaptations, powerful cultural significance, and well-suited environmental and geographical factors, which made it more favorable than cattle and other animals in the high altitude regions of Asia. Even though other forms of cattle and livestock were readily available to the people of this region, for these reasons the yak was preferable and became a unique case of isolated domestication.";
  const footnotes = [
    <li>Joshua Learn, "Snapping the Yak: How an Iconic Photo Ended Up on Nepal's Currency," <span className="italics">Discover</span>, August 27, 2019, <a target="_blank" href="https://www.discovermagazine.com/planet-earth/snapping-the-yak-how-an-iconic-photo-ended-up-on-nepals-currency" className="footnote-link">https://www.discovermagazine.com/planet-earth/snapping-the-yak-how-an-iconic-photo-ended-up-on-nepals-currency</a>. </li>
  ];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
    <div>
      <TopContent text={text} source={src} alt={alter} popupText={popupText} />
      <div className="large-content-box">
        <div className="content-wrapper">
          <div className="content-box bottom-line">
            <div className="text-box">
              <p className="text-title">Research Topic</p>
              <p className="content">
                Question: What characteristics and factors of the domestication
                of the yak made it suitable and favorable over other
                domesticated animals, specifically cattle, in South, Southeast,
                and Central Asia, and why has it not been domesticated on a
                large scale elsewhere?
                <br></br>
                <br></br>
                Context: In comparison to yaks, other domesticated animals like
                chickens or cows have been domesticated on a massively global
                scale. What I wanted to find out in my research was why this was
                the case. Since yak domestication began, the animal and its
                exploits have been constrained to South, Southeast, and Central
                Asia while other domesticated animals began domestication in one
                area and spread outwards to new places and new people. Even
                today when the means are available to expand yak domestication
                elsewhere, the yak remains primarily domesticated in this area
                and of extreme importance to the inhabitants.
              </p>
            </div>
            <div className="image-box">
              <img
                src="./images/research_topic.jpg"
                alt="temp_image"
                className="content-image"
              />
            </div>
          </div>
          <ContentBox content={content} contentTitle = {"Discoveries"} imageSrc = {"./images/discoveries.jpg"} isLast={true}/>
        </div>
      </div>
      <FootnoteTab notes={footnotes}/>
    </div>
  );
}

export default Home;
