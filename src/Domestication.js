import React from "react";
import TopContent from "./TopContent";
import ContentBox from "./ContentBox";
import FootnoteTab from "./FootnoteTab";
import { useEffect } from "react";

function Geographical() {
  const text = "Domestication";
  const src = "./images/map.jpeg";
  const alter = "map_image";
  const popupText =
    "The distribution of domestic yak in the South, Southeast, and Central Asia. [1]";
  const content1 =
    "Believed to have been domesticated as early as 10000 years ago, yaks and humans have a long intertwined history in the challenging environment of South, Southeast, and Central Asia. Ancient Chinese records suggest that indigenous Qiang peoples of northwestern China could have been the first to tame and domesticate the wild yak and provide evidence for the well-established role and significance of the yak in culture and society. [2] While the exact date of domestication has not been settled through archaeological or genetic evidence, it is obvious that from this early center of domestication, yak herding spread throughout highland nomadic people and supported populations struggling in regions scarce of agriculture and vegetation. [3] Although other animals were domesticated earlier and did assist these nomadic peoples, no animal had the same value as the yak. From the products that the yak produced to its value as a beast of burden and its adaptability to the harsh environment, the yak was perfectly suited for domestication in the desolate highlands and plateau regions. While still on an isolated scale, the success of the yak in this region is represented by its presence today in 10 countries: Afghanistan, Bhutan, China, India, Kyrgyzstan, Mongolia, Nepal, Pakistan, Russia, and Tajikistan. [4] ";
  const content2 =
    "Although domestication can take on many different forms, the yak's domestication process and system have remained relatively unchanged since it began. Due to the changing seasons in the highlands and Himalayas, it requires that herders and pastoralists change locations accordingly. During the warmer summer months, yaks graze at higher elevations and the herders live in campsites and move every 40 - 60 days while during the winter, herds and herdsmen settle at lower elevations where it is warmer and take more permanent residence in abodes or villages. [5] Although this process is based on similar principles to that of ancient herdsmen, modern grazing techniques such as land fencing and reduction of parasitic infections allow herdsmen to be more selective in their movement and grazing locations. [6] As a result of the inhospitality These interactions between yaks and nomadic herds stretch back thousands of years and are essential to the survival of ancient cultures and ways of life. Today, modernization threatens this ancient and sacred way of life with an increase in private property, land fencing, and general urbanization, but still in the most inhospitable regions, the reliance upon the yak for survival remains essential. [7] In conclusion, yak domestication practices today across South, Southeast, and Central Asia draw from deep ancient roots to ensure human survival amid the harsh terrain of the Himalayas and Tibetan plateau. While the future does present possible challenges to this ancient way of life, the age-old and sacred bond between yaks and the highland peoples will continue to thrive in balance with modernization. ";
  const content3 =
    "Yak domestication is extremely unique in the sense that geographically it is very isolated. Compared to other domesticated animals which have spread globally and can be found being domesticated in all different climates and regions, the yak is primarily domesticated in South, Southeast, and Central Asia at relatively high altitudes. Specifically, when it comes to other forms of domesticated cattle, yaks are physiologically adapted better to high-altitude regions. While most domesticated cattle thrive at altitudes below 2000 meters, when yaks are brought to this altitude they become uncomfortable and obviously prefer higher altitudes. [8] Explaining this phenomenon, yak blood contains a proportionally small amount of oxygen-carrying hemoglobin compared to other cattle and their large lungs allow them to maintain a steady pace at altitudes up to 6000 meters. [9] Overall, unique physiological adaptions explain why the yak was domesticated on an isolated scale and has not spread globally like other forms of cattle and domesticated animals. ";
  const footnotes = [
    <li>Nabu, "Distribution of the domestic Yak," Map, <a target="_blank" href="https://en.nabu.de/topics/species/yak.html" className="footnote-link">https://en.nabu.de/topics/species/yak.html</a>.</li>,
    <li>Gerald Wiener, Han Jianlin, and Long Ruijun, <span className="italics">The Yak Second Edition</span>, (Bangkok: FAO Regional Office for Asia and the Pacific, 2003), 1, 3.</li>,
    <li>Guillaume Jacques, Jade d'Alpoim Guedes, Zhang Shuya, "Yak Domestication: A Review of Linguistic, Archaelogical, and Genetic Evidence," <span className="italics">Ethnobiology Letters 12</span>, no 1, (2021): 105.</li>,
    <li>Ibid, 104.</li>,
    <li>Gerald Wiener, Han Jianlin, and Long Ruijun, <span className="italics">The Yak Second Edition</span>, (Bangkok: FAO Regional Office for Asia and the Pacific, 2003), 200.</li>,
    <li>Ibid, 198.</li>,
    <li>Xinhua, "70 years on, Tibet embarks on new journey of modernization," <span className="italics">ENGLISH.GOV.CN</span>, August 19, 2021, <a target="_blank" href="http://english.www.gov.cn/news/topnews/202108/19/content_WS611dba88c6d0df57f98deabb.html" className="footnote-link">http://english.www.gov.cn/news/topnews/202108/19/ content_WS611dba88c6d0df57f98deabb.html</a>.</li>,
    <li>Stanley J. Olsen, "Fossil Ancestry of the Yak, Its Cultural Significance and Domestication in Tibet," <span className="italics">Proceedings of the Academy of Natural Sciences of Philadelphia</span> 142 (1990): 90.</li>,
    <li>Ibid, 92.</li>
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
            contentTitle={"Origin"}
            imageSrc={"./images/origin.png"}
          />
          <ContentBox
            content={content2}
            contentTitle={"Domestication Over Time"}
            imageSrc={"./images/modern.jpg"}
          />
          <ContentBox
            content={content3}
            contentTitle={"Isolation"}
            imageSrc={"./images/isolation.jpg"}
            isLast={true}
          />
        </div>
      </div>
      <FootnoteTab notes={footnotes} />
    </div>
  );
}

export default Geographical;
