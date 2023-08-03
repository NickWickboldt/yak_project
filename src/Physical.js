import React from "react";
import TopContent from "./TopContent";
import ContentBox from "./ContentBox";
import FootnoteTab from "./FootnoteTab";
import { useEffect } from "react";

function Physical() {
  const text = "Physiological Characteristics";
  const src = "./images/physical.jpg";
  const alter = "full_yak_image";
  const popupText =
    "A wood engraving of a Tibetan yak overlooking a precipice. The yak is characterized by its thick wool and curved horns. [1]";
  const content1 =
    "One of the main reasons that yaks were domesticated on a uniquely isolated scale in South, Southeast, and Central Asia is the physiological adaptations that allow them to be better suited to the harsh landscape and environment of the Tibetan plateau and Himalayan mountains. Yaks possess several important physical characteristics that allow them to survive and prosper in this almost inhospitable region. Most notably, yaks have proportionally larger lungs and hearts than other forms of cattle which maximizes their oxygen intake in regions where the air is extremely thin. [2] The larger circulatory and respiratory organs along with a higher red blood cell count assist in the rapid and efficient oxygen circulation throughout their bodies. To combat the freezing temperatures of the regions, yaks also have a dense insulating wool coat that keeps their bodies warm and blood flowing. Compared to their thick coats, yaks have a relatively small body surface area which, in addition to a supplementary underlayer coat of wool, keeps them warm during the winter months. [3] Even in frigid ice and water flows, yaks are able to stay insulated due to their waterproof fur and upright due to their durable and stable hooves. Where other cattle would slip or be unable to move, the yak's hooves allow the animal to find a grip and remain stable on icy and rocky slopes. [4] Overall, these physiological adaptions, from their respiratory system to their fur and feet, are crucial to the yak's ability to thrive in this extremely hostile environment and survive where other cattle would surely perish. ";
  const content2 =
    "Aside from the previously mentioned physiological characteristics, domestic yaks maintain several other physical adaptions over other forms of cattle that allow them to thrive in the harsh environment of the Tibetan plateau and Himalayan mountains. Yaks possess a high level of stamina that allows them to trek for long distances on steep, rocky terrain without tiring while often carrying heavy loads. Even when feed and edible vegetation is sparse, yaks are able to utilize small amounts of vegetation to sustain themselves. After the growing seasons, when yaks are fed consistently, yaks lose up to 30% of their live weight and are often close to starvation. [5] Despite this, the yak's versatile digestive system obtains nutrition from coarse grasses, lichens, mosses, and shrubs that other cattle would find useless. [6] Once the harsh winter seasons have passed, yaks have the ability to gain weight rapidly during the summer months when feed is readily available. During the 3 - 4 months of the growing seasons, yaks regain all weight lost during the winter months and create fat reserves that will be crucial to their survival during the next winter season. [7] This ability to enter a state of complete malnutrition and bounce back entirely is a key physiological adaptation that allows yaks to be domesticated and thrive where other cattle would rapidly die out. As a whole, the yak's heartiness, stamina, adaptable diet, grazing efficiency, and rapid weight gain make it possible for the yak to survive in an otherwise uninhabitable environment. ";
  const content3 =
    "Outside of physiological adaptations and characteristics, yaks produce a wide range of products that provide Tibetans and other Southeast peoples with access to food, shelter, and fuel in the harsh highland environment. As a source of food and nutrition, yak meat is a nutritional staple. Eaten fresh or dried into jerky, yak meat provides humans with necessary and often scarce calories in the frigid landscape. [8] As an alternative and more varied source of nutrition, yak milk from female yaks can be processed into butter, cheese, yogurt, and other satiable dairy products. [9] The combination of these two yak-based sources of nutrition has provided people of the Tibetan plateau and Himalayan mountains with consistent sources of calories for thousands of years and continues to do so today. Supplementary to their nutritional benefit, yaks also provide other physical products such as their hair, hides, and dung for humans to use in a variety of ways. Yak hair and wool are used to create clothing, tents, and ropes, that are essential to life and staying warm during the freezing winter months. [10] To create more insulating shelters and longer-lasting accessories, yak hides are turned into leather where they can withstand the elements. [11] Perhaps most importantly, yak dung has been used for thousands of years as a source of fuel and warmth. The dried dung can be used for heating and cooking in a landscape that is largely devoid of trees or firewood. [12] Likely without this use of yak dung, humans would have not been able to survive in the desolate Tibetan plateau and Himalayan mountains. The array of products that the yak produces for human use has been essential to the survival and development of societies and cultures within these challenging environments. ";
  const content4 =
    "Beyond their direct material contributions, yaks have also served as a vital source of economic livelihood and prosperity for people of South, Southeast, and Central Asia. For thousands of years and in more remote areas, rural peoples have relied on yaks to not only survive but as an effective bartering and trading resource. [13] Excess yak products could be sold or traded to neighboring groups to obtain products that are not readily available in their local region. On other occasions, excess yaks could be sold entirely as a source of cash flow, especially the male yaks which are not needed for breeding and do not produce dairy products. On a larger scale, yak products can be transported to urban markets where they will sell for a premium price due to their low availability. For example, as of 1999, Nepal operated 11 large-scale yak-cheese factories which were supplied by local herders and ranchers. [14] Today, although many yak products are less consumed locally by herders, tourism remains a primary source of income as tourists are inclined to try exotic products like yak cheese and meat. [15] In conclusion, while subsistence herding meets the basic needs of pastoralists and small families, the yak's integration into a wider economy allows Tibetan and Himalayan peoples to increasingly economically prosper in a region where the opportunities for commercial agriculture are almost nonexistent. ";
  const footnotes = [
    <li> <span className="italics">A Tibetan Yak Overlooking a Precipice</span>, Wood Engraving, Wellcome Collection.</li>,
    <li>Gerald Wiener, "The yak, an essential element of the high altitude regions of Central Asia," <span className="italics">Études mongoles et sibériennes, centrasiatiques et tibétaines</span>, (2013): 7.</li>,
    <li>Lyle Such, "Nepal: Yaks and Naks of the Himalayas," December 27, 2021, Educational Video, <a target="_blank" href="https://www.youtube.com/watch?v=1ZPsRpvS10Q" className="footnote-link">https://www.youtube.com/watch?v=1ZPsRpvS10Q</a>. </li>,
    <li>Ibid.</li>,
    <li>Gerald Wiener, "The yak, an essential element of the high altitude regions of Central Asia," <span className="italics">Études mongoles et sibériennes, centrasiatiques et tibétaines</span>, (2013): 4.</li>,
    <li>Gerald Wiener, Han Jianlin, and Long Ruijun, <span className="italics">The Yak Second Edition</span>, (Bangkok: FAO Regional Office for Asia and the Pacific, 2003), 61.</li>,
    <li>Gerald Wiener, "The yak, an essential element of the high altitude regions of Central Asia," <span className="italics">Études mongoles et sibériennes, centrasiatiques et tibétaines</span>, (2013): 4.</li>,
    <li>Ibid, 6.</li>,
    <li>Ibid, 5 - 6.</li>,
    <li>Ibid, 7.</li>,
    <li>Ibid.</li>,
    <li>Gerald Wiener, Han Jianlin, and Long Ruijun, <span className="italics">The Yak Second Edition</span>, (Bangkok: FAO Regional Office for Asia and the Pacific, 2003), 255, 324.</li>,
    <li>Our Human Planet, "Life Among Tibetan Nomadic Yak Herders," November 5, 2018, Educational Video, <a target="_blank" href="https://www.youtube.com/watch?v=HpflduYGqJQ" className="footnote-link">https://www.youtube.com/watch?v=HpflduYGqJQ</a>.</li>,
    <li>Gerald Wiener, "The yak, an essential element of the high altitude regions of Central Asia," <span className="italics">Études mongoles et sibériennes, centrasiatiques et tibétaines</span>, (2013): 6.</li>,
    <li>Ibid, 6, 8.</li>
  ];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <TopContent text={text} source={src} alt={alter} popupText={popupText} />
      <div className="large-content-box">
        <div className="content-wrapper">
          <ContentBox
            content={content1}
            contentTitle={"Adaptability"}
            imageSrc={"./images/physiology.png"}
          />
          <ContentBox
            content={content2}
            contentTitle={"Survivability"}
            imageSrc={"./images/stamina.png"}
          />
          <ContentBox
            content={content3}
            contentTitle={"Product Production"}
            imageSrc={"./images/products.png"}
          />
          <ContentBox
            content={content4}
            contentTitle={"Economics"}
            imageSrc={"./images/economics.jpg"}
            isLast={true}
          />
        </div>
      </div>
      <FootnoteTab notes={footnotes}/>
    </div>
  );
}

export default Physical;
