import React from "react"; 
import TopContent from "./TopContent";
import ContentBox from "./ContentBox";
import FootnoteTab from "./FootnoteTab";
import { useEffect } from "react";

function Cultural() {
  const text = "Cultural Considerations";
  const src = "./images/culture.jpg"
  const alter = "culture_image";
  const popupText = "The inseparable bond between human and yak. [1]";
  const content1 = "Since the initial domestication of the yak and its outward spread throughout South, Southeast, and Central Asia the yak has developed deep cultural roots in societies throughout these regions. For thousands of years, humans closely interacted and relied upon yaks for their survival which deeply integrated the yak into the fabric of society. Prior to the arrival of Buddhism in Tibet, the yak was revered as a deity and was linked to myths and legends across the region. [2] Even after the introduction of Buddhism to the region in 600 CE, the yak remains religiously important and the subject of many festivals. Whether it be the Yak Festival in Tibet or other small cultural festivals, the yak is elevated to the place of a god, and sacrifices are made to recognize the importance of the yak to agriculture and survival. [3] Although the cultural and religious importance of the yak varies by region, in most regions all parts of the yak are recognized to have cultural or religious value. For example, in western Sichuan and Qimdo, women wear ornaments adorned with yak horn, and on the Tibetan plateau, nomadic people carve yak skulls with religious mantras and place them in prominent places. [4] Typically all religious and cultural importance of the yak relates to its vital role in nomadic and pastoral societies. In many different yak-rearing regions, herders hold yak dances to pay homage to the yak and its ancient support of human life and success in the desolate highlands. In other places, yak butter sculptures are burned or yak corpses are hung on doors as offerings to gods and to drive away evil spirits. [5] Overall, although the method by which the yak is culturally and religiously significant may be different across South, Southeast, and Central Asia, it is true that in all these regions the yak has been engrained with society for thousands of years and played a vital role in the development and sustainability of society. ";
  const content2 = "The relationship and bond between humans and yaks in South, Southeast, and Central Asian societies reflect a long history of mutualism and economic essentiality. In a harsh landscape where few other large mammals can survive and other domesticated animals fail to fill the requirements of beasts of burden, the yak provides transportation, labor, food, fuel, shelter, and other products that allow humans to thrive in inhospitable environments. For the yak, the humans provide protection and nurturement. In many cases, the bond and mutualism are so strong that a herder would even venture into an extremely dangerous snowstorm to save their trapped herd. [6] While mutualism is important in the development of the bond between humans and yak, the bond is strengthened by economic essentiality. With essential dependence comes social and spiritual status - owning more yaks can raise one's social position and be a display of wealth. For example in Tibet, yaks serve as dowries to secure marriages, tying the animal's worth to family and community. [7] Although modernization threatens the reliance upon yaks, the human-yak bond persists as a living remnant of the profound mutualism between pastoral societies and the animals that enable them to inhabit their unforgiving lands. ";
  const content3 = "While deeply rooted in ancient times, the yak's cultural significance faces new realities in modern times. Modernization and urbanization have rapidly penetrated previously isolated yak herding communities in the highlands. Improved infrastructure and transportation technology are quickly connecting rural regions to a larger economic and cultural world. [8] As a result of this, new ideas are reaching new generations that encourage young people to leave their ancestral pastoralist livelihood in search of new opportunities. These shifting attitudes and decreased reliance on the yak for survival bring the cultural and physical importance of the yak into question. As herding communities shrink, ancient pastoral knowledge goes untaught and forgotten and the rich history of the domestic yak starts to fade away. [9] Fortunately, the domestic yak remains a source of food and livelihood for many people in China. As of 1996, there were 1.3 million domestic yaks in China where they produced 226,000 tons of meat, 13000 tons of fiber, 170,000 pieces of skin, and 1.4 million tons of milk, yet this number of yak only make up a small population of the 140 million bovines in China. [10] Outside of China, the future for domestic yak appears uncertain as herding societies shrink and people move to urban areas. Despite this, conservationists, researchers, and traditionalists are determined to keep the history and culture of yak domestication alive. Through the revival of yak festivals, an explosion in yak-based literature and research, and an overall increase in global awareness of yaks, the domestic yak is far from forgotten and will remain a cultural symbol and an invaluable ancient beast of burden for centuries to come.";
  const footnotes = [
    <li>That's, "Exhibition of Tibetan Yak Culture," Image, Last Updated April 8th, 2023, <a className="footnote-link" target="_blank" href="https://www.thatsmags.com/guangzhou/event/gallery/48173">https://www.thatsmags.com/guangzhou/event/gallery/48173</a>.</li>,
    <li>Gerald Wiener, Han Jianlin, and Long Ruijun, <span className="italics">The Yak Second Edition</span>, (Bangkok: FAO Regional Office for Asia and the Pacific, 2003), 348.</li>,
    <li>Chloe Xin, "Yak Festival in Tibet," <span className="italics">Tibet Vista</span>, June 10, 2023, <a target="_blank" href="https://www.tibettravel.org/tibetan-festivals/yak-festival.html" className="footnote-link">https://www.tibettravel.org/tibetan-festivals/yak-festival.html</a>.</li>,
    <li>Gerald Wiener, Han Jianlin, and Long Ruijun, <span className="italics">The Yak Second Edition</span>, (Bangkok: FAO Regional Office for Asia and the Pacific, 2003), 348.</li>,
    <li>Ibid.</li>,
    <li>Wild Buddha Vlogs, "Yak Herder's Winter Life, Rescued The Yaks, Heavy snowfalll on the way," April 25, 2020, Video Blog, <a target="_blank" href="https://www.youtube.com/watch?v=aJ3MiyEyC1c" className="footnote-link">https://www.youtube.com/watch?v=aJ3MiyEyC1c</a>.</li>,
    <li>Gerald Wiener, Han Jianlin, and Long Ruijun, <span className="italics">The Yak Second Edition</span>, (Bangkok: FAO Regional Office for Asia and the Pacific, 2003), 349.</li>,
    <li>Xinhua, "70 years on, Tibet embarks on new journey of modernization," <span className="italics">ENGLISH.GOV.CN</span>, August 19, 2021, <a target="_blank" href="http://english.www.gov.cn/news/topnews/202108/19/content_WS611dba88c6d0df57f98deabb.html" className="footnote-link">http://english.www.gov.cn/news/topnews/202108/19/ content_WS611dba88c6d0df57f98deabb.html</a>.</li>,
    <li>Office of International Religous Freedom, "2021 Report on International Religous Freedom: China-Tibet," <span className="italics">U.S. Department of State</span>, May 3, 2022, <a target="_blank" href="https://www.state.gov/reports/2021-report-on-international-religious-freedom/china/tibet/" className="footnote-link">https://www.state.gov/reports/2021-report-on-international-religious-freedom/china/tibet/</a>.</li>,
    <li>Gerald Wiener, Han Jianlin, and Long Ruijun, <span className="italics">The Yak Second Edition</span>, (Bangkok: FAO Regional Office for Asia and the Pacific, 2003), 6.</li>
  ];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return(
    <div>
      <TopContent text={text} source={src} alt={alter} popupText={popupText}/>
      <div className="large-content-box">
        <div className="content-wrapper">
          <ContentBox
            content={content1}
            contentTitle={"Culture and Religion"}
            imageSrc={"./images/festival.png"}
          />
          <ContentBox
            content={content2}
            contentTitle={"Human Bond"}
            imageSrc={"./images/bond.jpg"}
          />
          <ContentBox
            content={content3}
            contentTitle={"The Future"}
            imageSrc={"./images/train.jpeg"}
            isLast={true}
          />
        </div>
      </div>
      <FootnoteTab notes={footnotes} />
    </div>
  )
}

export default Cultural;