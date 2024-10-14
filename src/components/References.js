import Nav from "./Nav";
import "../App.css";
import Footer from "./Footer";

export default function References() {
  return (
    <>
      <style type="text/css">
        {`* {margin:0; padding:0; text-indent:0; }
          .p, p { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; margin:0pt; }
          .s1 { color: black; font-family:"Times New Roman", serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 12pt; }
          .a, a { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }
          .s2 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 12pt; }
          li {display: block; }
          #l1 {padding-left: 0pt; }
          #l1> li>*:first-child:before {content: " "; color: black; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }`}
      </style>
      <Nav />
      <div className="references">
        <h1>Referencat</h1>
        <>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                ' * {margin:0; padding:0; text-indent:0; }\n .p, p { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; margin:0pt; }\n .s1 { color: black; font-family:"Times New Roman", serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 12pt; }\n .a, a { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n .s2 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 12pt; }\n li {display: block; }\n #l1 {padding-left: 0pt; }\n #l1> li>*:first-child:before {content: " "; color: black; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n',
            }}
          />
          <p
            style={{ paddingTop: "4pt", textIndent: "0pt", textAlign: "left" }}
          >
            <br />
          </p>
          <ul id="l1">
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ajtić, R., Đorđević, S., Džukić, G., Jović, D., Kalezić, M.,
                Krizmanić, I., Labus, N., Lakušić, D., Ljubisavljević, K.,
                Tomović, L., &amp; Urošević, A. (2015).{" "}
                <i>Red Book of Fauna of Serbia II Reptiles</i>. University of
                Belgrade, Faculty of Biology, Institute for Nature Conservation
                of Serbia.
              </p>
            </li>
            <li data-list-text="">
              <p
                className="s1"
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Amphibian Species of the World.{" "}
                <span className="p">
                  (n.d.). Retrieved September 5, 2024, from
                  https://amphibiansoftheworld.amnh.org/
                </span>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Aulagnier, S., Haffner, P., Mitchell-Jones, A. J., Moutou, F.,
                &amp; Zima, J. (2009).{" "}
                <i>Mammals of Europe, North Africa and the Middle East</i>.
                A&amp;C Black Publishers.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Battersby, Jessamy (comp.) (2010).{" "}
                <i>
                  Guidelines for surveillance and monitoring of European bats.{" "}
                </i>
                EUROBATS Publication Series No. 5. UNEP / EUROBATS Secretariat,
                Bonn, Germany, 95 pp.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Baymak, D., &amp; Kiyak, S. (2020). Seven new records for the
                Heteroptera (Hemiptera) fauna of Kosovo.{" "}
                <i>Journal of the Heteroptera of Turkey</i>, 2(1), 3–8.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Baymak, D., &amp; Kıyak, S. (2021). New records of Pentatomidae
                (Hemiptera: Heteroptera) for the fauna of Kosovo.{" "}
                <i>Journal of the Heteroptera of Turkey</i>, 3(1), 76–80.
                https://doi.org/10.5281/zenodo.4841107
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Berisha, N., &amp; Geci, D. (2023). The analysis of the
                influence of grazing intensity on the diversity and abundance of
                plants and spiders (Arachnida: Araneae).{" "}
                <i>European Journal of Environmental Sciences</i>, 13(1), 31–38.
                https://doi.org/10.14712/23361964.2023.4
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bilalli, A., Ibrahimi, H., &amp; Musliu, M. (2018). First
                records of the caddisfly fauna (Insecta: Trichoptera) from the
                Karadak Mountains, Western Balkans. <i>Natura Croatica</i>,
                27(1), 143–
              </p>
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "0pt",
                  lineHeight: "14pt",
                  textAlign: "justify",
                }}
              >
                151. https://doi.org/10.20302/NC.2018.27.7
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bilalli, A., Ibrahimi, H., Geci, D., Musliu, M., &amp; Buçinca,
                A. (2023). Contribution to the knowledge of the caddisfly
                (Insecta, Trichoptera) fauna from the Iber River basin in Kosovo
                <i>. 4th Iranian International congress of Entomology</i>, 18–20
                September 2023, Razi University, Kermanshah, Iran.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bilalli, A., Ibrahimi, H., Musliu, M., &amp; Geci, D. (2024).
                Description of the hitherto unknown female of Rhyacophila
                siparantum Ibrahimi, Bilalli &amp; Kučinić, 2021 (Trichoptera:
                Rhyacophilidae) from Kosovo. <i>Ecologica Montenegrina</i>, 71,
                217–226. https://doi.org/10.37828/em.2024.71.22
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bilalli, A., Ibrahimi, H., Musliu, M., Gashi, A., &amp;
                Grapci-Kotori, L. (2018). Two First Records for the Caddisfly
                Fauna (Insecta: Trichoptera) of Kosovo.{" "}
                <i>International Ecology 2018 Symposium</i>, 19-23 June 2018,
                Kastamonu, Turkey.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bilalli, A., Ibrahimi, H., Musliu, M., Geci, D., &amp;
                Grapci-Kotori, L. (2024). First record of Hydroptila ivisa
                Malicky, 1972 (Trichoptera, Hydroptilidae) from the Ecoregion 6,
                Hellenic Western Balkans.{" "}
                <i>Journal of the Entomological Research Society</i>, 26(1),
                137–
              </p>
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "0pt",
                  lineHeight: "14pt",
                  textAlign: "justify",
                }}
              >
                145. https://doi.org/10.51963/jers.v26i1.2582
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bilalli, A., Ibrahimi, H., Musliu, M., Geci, D., &amp;
                Keresztes, L. (2024). New records of true flies (Insecta:
                Diptera) from the Western Balkans.{" "}
                <i>
                  VI. International Agricultural, Biological and Life Sciences
                  Conference AGBIOL 2024,{" "}
                </i>
                <a
                  href="http://www.researchgate.net/publication/384240196"
                  className="a"
                  target="_blank"
                >
                  18th to 20th September 2024, Edirne, Turkey. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/384240196"
                  target="_blank"
                >
                  /www.researchgate.net/publication/384240196
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bilalli, A., Ibrahimi, H., Musliu, M., Geci, D., Grapci-Kotori,
                L., Gashi, A., &amp; Buçinca, A. (2023). New records of the
                caddisfly fauna from the Ibër River basin in Kosovo.
              </p>
              <p
                className="s1"
                style={{
                  paddingTop: "3pt",
                  paddingLeft: "23pt",
                  textIndent: "0pt",
                  textAlign: "justify",
                }}
              >
                International Conference “Kliment's Days 2023 - 60 years Faculty
                of Biology”, 9-11 November 2023,{" "}
                <a
                  href="https://www.researchgate.net/publication/375525934"
                  className="a"
                  target="_blank"
                >
                  Sofia, Bulgaria.
                </a>
                <a
                  href="https://www.researchgate.net/publication/375525934"
                  className="s2"
                  target="_blank"
                >
                  {" "}
                  https://www.researchgate.net/publication/375525934
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bilalli, A., Ibrahimi, H., Musliu, M., Grapci-Kotori, L., Geci,
                D., Slavevska-Stamenkovič, V., Hinič, J., Mitić-Kopanja, D.,
                &amp; Keresztes, L. (2021). New records of the craneflies
                (Diptera: Limoniidae, tipulidae) from the western balkans.{" "}
                <i>Journal of the Entomological Research Society</i>, 23(2),
                141–152. https://doi.org/10.51963/jers.v23i2.1929
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bilalli, A., Ibrahimi, H., Musliu, M., Grapci-Kotori, L.,
                Slavevska-Stamenkovič, V., Hinič, J., Geci, D., &amp; Sivec, I.
                (2023). New records and distribution data of stoneflies
                (Insecta: Plecoptera) from the Western Balkans.{" "}
                <i>Natura Croatica</i>
                <a
                  href="https://doi.org/10.20302/NC.2023.32.37"
                  className="a"
                  target="_blank"
                >
                  , 32(2), 555–570.{" "}
                </a>
                <a
                  href="https://doi.org/10.20302/NC.2023.32.37"
                  className="s2"
                  target="_blank"
                >
                  https://doi.org/10.20302/NC.2023.32.37
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                className="s1"
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bird List - Kosovo - eBird
                <span className="p">
                  . (n.d.). Retrieved September 6, 2024, from
                  https://ebird.org/region/XK/bird-list
                </span>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bytyçi, P., Zhushi, F., Kastrati, E. K., Çadraku, H., &amp;
                Koren, T. (2023). The first record of Euphyia biangulata
                (Haworth, 1809) (Lepidoptera: Geometridae) for Kosovo.{" "}
                <i>Ecologica Balkanica</i>
                <a
                  href="http://eb.bio.uni-plovdiv.bg/"
                  className="a"
                  target="_blank"
                >
                  , 15(1), 184–187.{" "}
                </a>
                <a href="http://eb.bio.uni-plovdiv.bg/" target="_blank">
                  http://eb.bio.uni-plovdiv.bg
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bytyçi, P., Zhushi-Etemi, F., Çadraku, H., Kabashi-Kastrati, E.,
                Muja-Bajraktari, N., &amp; Fetoshi, O. (2021). Diversity of
                Hesperiidae, Pieridae and Papilionidae Butterflies (Lepidoptera,
                Papilionoidea) in the mountain massif Shkoza in Kosovo.{" "}
                <i>Entomologist’s Gazette</i>, 72(2), 131–136.
                https://doi.org/10.31184/g00138894.722.1790
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bytyçi, P., Zhushi-Etemi, F., Kabashi-Kastrati, E., &amp;
                Çadraku, H. (2023). Biodiversity of butterflies (Lepidoptera,
                Papilionoidea) in Mountain Koritnik in the Republic of Kosovo.{" "}
                <i>Journal of Insect Biodiversity and Systematics</i>, 9(4),
                623–642. https://doi.org/10.61186/jibs.9.4.623
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bytyçi, P., Zhushi-Etemi, F., Kabashi-Kastrati, E., &amp; Koren,
                T. (2022). The Diversity of Sphingidae (Insecta: Lepidoptera) in
                Koritniku Mountain, The Republic of Kosova.{" "}
                <i>Polish Journal of Natural Sciences</i>, 37(4), 469–480.
                https://doi.org/10.31648/pjns.8631
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bytyçi, P., Zhushi-Etemi, F., Kabashi-Kastrati, E., Çadraku, H.,
                &amp; Koren, T. (2023). Diversity of burnet moths (Lepidoptera:
                Zygaenidae) on Mountain Koritnik, Kosovo. <i>Natura Croatica</i>
                , 32(1), 177–188. https://doi.org/10.20302/NC.2023.32.12
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Bytyçi, P., Zhushi-Etemi, F., Kabashi-Kastrati, E., Gashi, V.,
                Muja-Bajraktari, N., Çadraku, H., &amp; Koren, T. (2023). First
                tentative checklist of Geometridae (Insecta: Lepidoptera) of
                Kosovo. <i>Oriental Insects</i>, 57(1), 88–114.
                https://doi.org/10.1080/00305316.2022.2066214
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Dauti, E., 1980: Faunističko ekološka istraživanja Plecoptera na
                području Kosova. Doktorska disertacija,Prirodoslovno Matematički
                Fakultet Sveučilišta u Zagrebu, 1–60.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Dauti, E., 1986: Distribucija vrsta Plecoptera na uzdužnom
                profile rijeke Nerodimke. Zbornik radova PMF, Priština, 227–234.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Dauti, E., 1987: Contribution to the study of Plecoptera in the
                river system of upper flow the Nerodimkariver. Acta biologiae et
                medicinae experimentalis 2, 65–70.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Dauti, E., Ibrahimi, H., Gashi, A., &amp; Grapci-Kotori, L.
                (2007). Spatial and temporal distribution of Plecoptera larvae
                in the Prishtina River (Kosova). <i>Entomologica Romanica</i>
                <a
                  href="http://www.researchgate.net/publication/260594394"
                  className="a"
                  target="_blank"
                >
                  , 12, 223–225. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/260594394"
                  target="_blank"
                >
                  /www.researchgate.net/publication/260594394
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Dioli, P., &amp; van der Heyden, T. (2022). Plant bugs
                (Hemiptera: Heteroptera: Miridae) new in Albania and Kosovo.{" "}
                <i>Heteroptera Poloniae-Acta Faunistica</i>, 16, 3–6.
                https://doi.org/10.5281/zenodo.6046989
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingTop: "3pt",
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Fehér, Z., Erőss, Z. P., Deli, T., &amp; Ibrahimi, H. (2019).{" "}
                <i>
                  First record of an important Natura 2000 indicator species,
                  Vertigo moulinsiana (Gastropoda : Vertiginidae), in Kosovo
                </i>
                <a
                  href="http://www.researchgate.net/publication/331413879"
                  className="a"
                  target="_blank"
                >
                  . Tentacle. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/331413879"
                  target="_blank"
                >
                  /www.researchgate.net/publication/331413879
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Gashi, A., Ibrahimi, H., Grapci-Kotori, L., &amp; Bislimi, K.
                (2015). New Records of Drusus siveci Malicky, 1981 (Trichoptera,
                Limnephilidae, Drusinae) from the Balkan Peninsula, with
                Ecological Notes. <i>Acta Zoologica Bulgarica</i>, 67, 259–264.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Gashi, A., Shabani, E., Grapci Kotori, L., Bislimi, K., Maxhuni,
                Q., &amp; Ibrahimi, H. (2016). Contribution to the knowledge of
                fish fauna of Kosovo with a special note on some invasive
                species. <i>Turkish Journal of Zoology</i>, 40(1), 64–72.
                https://doi.org/10.3906/zoo-1401-67
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Gashi, F., &amp; Karataş, A. (2023). Nyctalus leisleri, a
                species new to the bat fauna of Kosovo (Chiroptera:
                Vespertilionidae). <i>Lynx New Series</i>, 54(1), 223–225.
                https://doi.org/10.37520/lynx.2023.019
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Geci, D., &amp; Ibrahimi, H. (2018). First record of the box
                tree moth Cydalima perspectalis (Walker, 1859) (Lepidoptera,
                Crambidae) from Kosovo. <i>Natura Croatica</i>
                <a
                  href="https://doi.org/10.20302/NC.2018.27.23"
                  className="a"
                  target="_blank"
                >
                  , 27(2), 343–345.{" "}
                </a>
                <a
                  href="https://doi.org/10.20302/NC.2018.27.23"
                  className="s2"
                  target="_blank"
                >
                  https://doi.org/10.20302/NC.2018.27.23
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Geci, D., &amp; Naumova, M. (2021a). A Preliminary Checklist of
                the Spiders of Kosovo (Arachnida: Araneae).{" "}
                <i>Ecologica Balkanica</i>
                <a
                  href="http://www.researchgate.net/publication/352488707"
                  className="a"
                  target="_blank"
                >
                  , 4, 11–28. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/352488707"
                  target="_blank"
                >
                  /www.researchgate.net/publication/352488707
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Geci, D., &amp; Naumova, M. (2021b). The Spotted Orb-weaver
                Neoscona byzanthina (Pavesi, 1876)-An Enigmatic but Common
                Species on the Balkans (Araneae: Araneidae).{" "}
                <i>Ecologica Balkanica</i>
                <a href="http://www.iso.org/" className="a" target="_blank">
                  , 4, 1–9.
                </a>
                <a href="http://www.iso.org/" className="s2" target="_blank">
                  {" "}
                  www.iso.org
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Geci, D., Ibrahimi, H., Bilalli, A., &amp; Musliu, M. (2024).
                Corythucha arcuata (Say, 1832) (Hemiptera, Tingidae) an invasive
                pest, with a review of the recent invasion of alien species to
                Kosovo. <i>Journal of Insect Biodiversity and Systematics</i>,
                10(1), 73–79. https://doi.org/10.61186/jibs.10.1.73
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Geci, D., Ibrahimi, H., Bilalli, A., &amp; Musliu, M. (2025).
                New records of spiders (Arachnida: Araneae) from the Western
                Balkans. <i>Journal of Insect Biodiversity and Systematics</i>,
                11(1). In press.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "22pt",
                  textIndent: "-17pt",
                  lineHeight: "15pt",
                  textAlign: "justify",
                }}
              >
                Geci, D., Ibrahimi, H., Naumova, M., Bilalli, A., Musliu, M.,
                Grapci-Kotori, L. &amp; Gashi,
              </p>
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "0pt",
                  textAlign: "justify",
                }}
              >
                A. (2022) On the alien-invasive spiders from Republic of Kosovo
                (Arachnida, Araneae).{" "}
                <i>33rd European Congress of Arachnology</i>, 5–9 September
                2022, Greifswald, Germany, p. 108
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "22pt",
                  textIndent: "-17pt",
                  lineHeight: "15pt",
                  textAlign: "justify",
                }}
              >
                Geci, D., Naumova, M., Ibrahimi, H., Grapci-Kotori, L., Gashi,
                A., Bilalli, A., &amp; Musliu,
              </p>
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "0pt",
                  textAlign: "justify",
                }}
              >
                M. (2023). Contribution to spider fauna (Arachnida: Araneae)
                from Bjeshkët e Nemuna mountains (Kosovo).{" "}
                <i>Natura Croatica</i>, 32(2), 500–525.
                https://doi.org/10.20302/NC.2023.32.35
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Grapci-Kotori, L., Geci, D., Naumova, M., Ibrahimi, H., Bilalli,
                A., Musliu, M., Gashi, A., &amp; Kasumaj, E. (2022). Spiders
                from Sharr Mountain - new faunistic data (Arachnida: Araneae).{" "}
                <i>Natura Croatica</i>, 31(2), 335–350.
                https://doi.org/10.20302/NC.2022.31.24
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Grapci-Kotori, L., Ibrahimi, B., Bilalli, A., Ibrahimi, H.,
                &amp; Musliu, M. (2019). The composition, distribution and
                abundance of fish species according to the effects of water
                physicochemical parameters in the Livoq Lake, Kosovo.{" "}
                <i>Journal of Ecological Engineering</i>, 20(5), 235–241.
                https://doi.org/10.12911/22998993/105358
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Grapci-Kotori, L., Vavalidis, T., Zogaris, Di., Šanda, R.,
                Vukić, J., Geci, D., Ibrahimi, H., Bilalli, A., &amp; Zogaris,
                S. (2020). Fish distribution patterns in the White Drin (Drini i
              </p>
              <p
                style={{
                  paddingTop: "3pt",
                  paddingLeft: "23pt",
                  textIndent: "0pt",
                  textAlign: "justify",
                }}
              >
                Bardhë) river, Kosovo.{" "}
                <i>Knowledge and Management of Aquatic Ecosystems</i>, 421,
                1–15. https://doi.org/10.1051/kmae/2020020
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Grapci-Kotori, L., Zhushi-Etemi, F., Sahiti, H., Gashi, A.,
                Krijelj, R., &amp; Ibrahimi, H. (2010). The ichthyofauna of
                Drini i Bardhë River (Kosovo). <i>Ribarstvo</i>, 68(4), 149–158.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Grosser, C., Pešić, V., Berlajolli, V., &amp; Gligorović, B.
                (2016). Glossiphonia balcanica n. sp. and Dina prokletijaca n.
                sp. (Hirudinida: Glossiphoniidae, Erpobdellidae) - two new
                leeches from Montenegro and Kosovo.{" "}
                <i>Ecologica Montenegrina</i>, 8, 17–26.
                https://doi.org/10.37828/em.2016.8.2
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Guéorguiev, B., &amp; Mesaroš, G. (2022). New data on the ground
                beetles (Coleoptera: Carabidae) from Kosovo.{" "}
                <i>Historia Naturalis Bulgarica</i>
                <a
                  href="https://doi.org/10.48027/HNB.44.111"
                  className="a"
                  target="_blank"
                >
                  , 44(11), 129–135.{" "}
                </a>
                <a
                  href="https://doi.org/10.48027/HNB.44.111"
                  className="s2"
                  target="_blank"
                >
                  https://doi.org/10.48027/HNB.44.111
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Hoxha, L. (2019).{" "}
                <i>
                  Saproxylic beetle fauna of different mountain forest types of
                  the Bjeshket e Nemuna National Park, Kosovo
                </i>
                <a
                  href="http://www.researchgate.net/publication/337077206"
                  className="a"
                  target="_blank"
                >
                  (Master's thesis). University of Konstanz. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/337077206"
                  target="_blank"
                >
                  /www.researchgate.net/publication/337077206
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Hristovski, S., Mesaroš, G., Komnenov, M., &amp;
                Cvetkovska-Gjorgjievska, A. (2023). Rediscovery of Carabus
                (Hygrocarabus) variolosus nodulosus Creutzer, 1799 on Shar
                Planina Mt. <i>Macedonian Journal of Ecology and Environment</i>
                , 25(2), 113–117. https://doi.org/10.59194/mjee23252113h
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., &amp; Sejdiu, N. (2018). The caddisfly fauna
                (Insecta: Trichoptera) of the Llap river catchment, Republic of
                Kosovo. <i>Natura Croatica</i>, 27(2), 293–304.
                https://doi.org/10.20302/NC.2018.27.18
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., &amp; Thaqi, A. (2016). First record of
                Limnephilus centralis Curtis, 1834 (Insecta: Trichoptera) from
                the Republic of Kosovo. <i>Acta Entomologica Slovenica</i>
                <a
                  href="http://www.researchgate.net/publication/311452041"
                  className="a"
                  target="_blank"
                >
                  , 24(2), 209–214. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/311452041"
                  target="_blank"
                >
                  /www.researchgate.net/publication/311452041
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., &amp; Vehapi, V. (2017). Contribution to the
                Knowledge of the Caddisfly Fauna (Insecta: Trichoptera) of the
                Sharr Mountains in Kosovo.{" "}
                <i>Journal of the Kansas Entomological Society</i>, 90(4),
                283–290. https://doi.org/10.2317/17-4.1
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Bilalli, A., &amp; Kuqi, R. (2019). Contribution
                to the knowledge of the Caddisfly (Insecta: Trichoptera) fauna
                of the Drenica River in Kosovo.{" "}
                <i>Acta Entomologica Slovenica</i>
                <a
                  href="http://www.researchgate.net/publication/333702896"
                  className="a"
                  target="_blank"
                >
                  , 27(1), 59–64. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/333702896"
                  target="_blank"
                >
                  /www.researchgate.net/publication/333702896
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Bilalli, A., Gashi, A., Kotori, L. G.,
                Stamenkovic, V. S., &amp; Geci, D. (2023). Potamophylax
                humoinsapiens sp. n. (Trichoptera, Limnephilidae), a new species
                from the Sharr Mountains, Republic of Kosovo.{" "}
                <i>Biodiversity Data Journal</i>, 11.
                https://doi.org/10.3897/BDJ.11.e97969
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Bilalli, A., Geci, D., &amp; Kotori, L. G. (2024).
                Potamophylax kosovaensis sp. nov. (Trichoptera, Limnephilidae),
                a new species of the Potamophylax winneguthi species cluster
                from the Ibër River Basin in Kosovo.{" "}
                <i>Biodiversity Data Journal</i>, 12.
                https://doi.org/10.3897/BDJ.12.e121454
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Bilalli, A., Geci, D., &amp; Musliu, M. (2024). An
                unexpected discovery of Stactobiella risi (Felber, 1908)
                (Trichoptera, Hydroptilidae) in Kosovo with notes on its
                habitat. <i>Journal of Insect Biodiversity and Systematics</i>,
                10(3), 617–626. https://doi.org/10.61186/jibs.10.3.617
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Bilalli, A., Musliu, M., Geci, D., Grapci-Kotori,
                L., &amp; Gashi, A. (n.d.). New records of caddisflies (Insecta:
                Trichoptera) from Kosovo.{" "}
                <i>
                  VI. International Agricultural, Biological and Life Sciences
                  Conference AGBIOL 2024,{" "}
                </i>
                <a
                  href="http://www.researchgate.net/publication/384240640"
                  className="a"
                  target="_blank"
                >
                  18th to 20th September 2024, Edirne, Turkey. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/384240640"
                  target="_blank"
                >
                  /www.researchgate.net/publication/384240640
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingTop: "3pt",
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Bilalli, A., Vitecek, S., Pauls, S. U., Erzinger,
                F., Gashi, A., Kotor, L. G., Geci, D., Musliu, M., &amp;
                Kasumaj, E. (2021). Potamophylax coronavirus sp. n.
                (Trichoptera: Limnephilidae), a new species from Bjeshkët e
                Nemuna National Park in the Republic of Kosovo, with molecular
                and ecological notes. <i>Biodiversity Data Journal</i>, 9, 1–
              </p>
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "0pt",
                  lineHeight: "14pt",
                  textAlign: "justify",
                }}
              >
                18. https://doi.org/10.3897/BDJ.9.e64486
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Devetak, D., Pizzigalli, C., &amp; Hoxha, L.
                (2018). First record of the genus Boreus Latreille, 1816 from
                the Republic of Kosovo (Mecoptera). <i>Spixiana</i>, 41(1), 12.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Gashi, A., &amp; Grapci-Kotori, L. (2016). First
                Records of Three Species of the Genus Glossossoma Curtis, 1834
                (Insecta: Trichoptera) from the Republic of Kosovo.{" "}
                <i>Journal of the Entomological Research Society</i>, 18(2),
                79–83.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Gashi, A., Bilalli, A., Musliu, M., Kotori, L. G.,
                &amp; Etemi, F. Z. (2014). Three new country records from the
                genus Limnephilus Leach, 1815 (Trichoptera: Limnephilidae) from
                the Republic of Kosovo. <i>Biodiversity Data Journal</i>, 2(1).
                https://doi.org/10.3897/BDJ.2.e4140
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Gashi, A., Grapci-Kotori, L., &amp; Kučinić, M.
                (2013). First records of the genus Micropterna Stein, 1873
                (Insecta: Trichoptera) in Kosovo with distributional and
                ecological notes. <i>Natura Croatica</i>
                <a
                  href="http://www.researchgate.net/publication/260594302"
                  className="a"
                  target="_blank"
                >
                  , 22(1), 147–155. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/260594302"
                  target="_blank"
                >
                  /www.researchgate.net/publication/260594302
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Gashi, A., Grapci-Kotori, L., Bilalli, A., Musliu,
                M., &amp; Zhushi-Etemi, F. (2015). First record of Mesophylax
                aspersus (Rambur, 1842) from the Republic of Kosovo (Trichoptera
                Limnephilidae). <i>Biodiversity Journal</i>, 6(1), 3–6.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Gashi, A., Kotori, L. G., Etemi, F. Z., Bilalli,
                A., &amp; Musliu, M. (2015). New Distribution and Species
                Records of Caddisflies (Insecta: Trichoptera) from the Republic
                of Kosovo. <i>Entomological News</i>, 125(4), 229–238.
                https://doi.org/10.3157/021.125.0402
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Gashi, A., Qela, E., Haxhiaj, R., Bilalli, A.,
                &amp; Musliu, M. (2016). New records for some rare caddisfly
                species from Kosovo (Trichoptera). <i>Spixiana</i>, 39(1), 98.
                https://doi.org/10.1080/01650424.2012.643021
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Gashi, A., Rexhepaj, D., Zhushi Etemi, F., Grapci
                Kotori, L., Fehér, Z., Bino, T., Šerić Jelaska, L., Mesaroš, G.,
                &amp; Théou, P. (2019).{" "}
                <i>Libri i Kuq i Faunës së Republikës së Kosovës</i>. Ministria
                e Mjedisit dhe Planifikimit Hapësinor Instituti i Kosovës për
                Mbrojtjen e Natyrës.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Gligorović, A., Gligorović, B., Kulijer, D.,
                Bilalli, A., Musliu, M., Geci, D., &amp; Bozdoğan, H. (2022).
                Expansion of Harmonia axyridis (Pallas, 1773) (Coleoptera:
                Coccinellidae) in South-eastern Europe. <i>Natura Croatica</i>,
                31(1), 31–42. https://doi.org/10.20302/NC.2022.31.3
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Grapci Kotori, L., Bilalli, A., &amp; Geci, D.
                (2024a).{" "}
                <i>
                  Freshwater biodiversity impacted by hydropower plants in the
                  Sharr mountains National Park
                </i>
                .
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Grapci Kotori, L., Bilalli, A., &amp; Geci, D.
                (2024b). <i>Raporti ekologjik i lumenjve- Lumi Mirusha</i>.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Grapci-Kotori, L., Bilalli, A., Qamili, A., &amp;
                Schabetsberger, R. (2019). Contribution to the knowledge of the
                caddisfly fauna (Insecta: Trichoptera) of Leqinat lakes and
                adjacent streams in Bjeshkët e Nemuna (Kosovo).{" "}
                <i>Natura Croatica</i>, 28(1), 35–
              </p>
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "0pt",
                  lineHeight: "14pt",
                  textAlign: "justify",
                }}
              >
                44. https://doi.org/10.20302/NC.2019.28.3
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Grapci-Kotori, L., Kučinić, M., &amp;
                Slavevska-Stamenković, V. (2018). A Study of Trichoptera of the
                Blinajë Hunting Reserve Including the First Records of Ironoquia
                dubia (Stephens, 1837) (Limnephilidae) from the Hellenic Western
                Balkans.
              </p>
              <p
                className="s1"
                style={{
                  paddingTop: "3pt",
                  paddingLeft: "23pt",
                  textIndent: "0pt",
                  textAlign: "justify",
                }}
              >
                Journal of the Entomological Research Society
                <a
                  href="http://www.researchgate.net/publication/324163704"
                  className="a"
                  target="_blank"
                >
                  , 20(1), 11–19. https://
                </a>
                <a
                  href="http://www.researchgate.net/publication/324163704"
                  target="_blank"
                >
                  www.researchgate.net/publication/324163704
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Hlebec, D., Bilalli, A., Musliu, M., Previšić, A.,
                Gashi, A., Grapci-Kotori, L., Cerjanec, D., Geci, D., &amp;
                Kučinić, M. (2021). Rhyacophila siparantum sp. nov.
                (Trichoptera: Rhyacophilidae), a new species of the R.
                philopotamoides species group from the Republic of Kosovo with
                molecular and ecological notes. <i>Ecologica Montenegrina</i>,
                49, 1–19. https://doi.org/10.37828/EM.2021.49.1
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Kuçi, R., Bilalli, A., &amp; Gashi, E. (2017).
                First record of triaenodes bicolor (Curtis, 1834) (Insecta:
                Trichoptera) from the ecoregion Hellenic Western Balkans.{" "}
                <i>Natura Croatica</i>, 26(2), 197–204.
                https://doi.org/10.20302/NC.2017.26.16
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Kuçi, R., Bilalli, A., Musliu, M., Gashi, A.,
                Sinani, N., &amp; Emërllahu, B. (2019). Distribution of two rare
                taxa of caddisflies (Trichoptera: Rhyacophilidae,
                Polycentropodidae) from the Republic of Kosovo.{" "}
                <i>Biodiversity Data Journal</i>, 7.
                https://doi.org/10.3897/BDJ.7.E46466
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Kuçi, R., Gashi, E., Bilalli, A., Musliu, M.,
                Vehapi, V., Gashi, A., Grapci- Kotori, L., &amp; Geci, D.
                (2019). New additions to the caddisfly fauna (Insecta:
                Trichoptera) of the Sharr Mountains in Kosovo.{" "}
                <i>Ecologica Montenegrina</i>, 23, 40–46.
                https://doi.org/10.37828/EM.2019.23.6
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Kučinić, M., Gashi, A., &amp; Grapci-Kotori, L.
                (2012). The caddisfly fauna (Insecta, Trichoptera) of the rivers
                of the Black Sea basin in Kosovo with distributional data for
                some rare species. <i>ZooKeys</i>, 182, 71–85.
                https://doi.org/10.3897/zookeys.182.2485
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Kučinić, M., Gashi, A., &amp; Grapci-Kotori, L.
                (2014). Trichoptera biodiversity of the Aegean and Adriatic Sea
                basins in the Republic of Kosovo.{" "}
                <i>Journal of Insect Science</i>
                <a
                  href="https://doi.org/10.1093/jisesa/ieu071"
                  className="a"
                  target="_blank"
                >
                  , 14(209), 1-8.
                </a>
                <a
                  href="https://doi.org/10.1093/jisesa/ieu071"
                  className="s2"
                  target="_blank"
                >
                  {" "}
                  https://doi.org/10.1093/jisesa/ieu071
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Kučinić, M., Gashi, A., Grapci-Kotori, L.,
                Vučković, I., &amp; Cerjanec, D. (2016). The genus Rhyacophila
                Pictet, 1834 (Insecta: Trichoptera) in Kosovo.{" "}
                <i>Aquatic Insects</i>, 34(1), 23–31.
                https://doi.org/10.1080/01650424.2012.643021
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Kucinic, M., Vitecek, S., Waringer, J., Graf, W.,
                Previšic, A., Bálint, M., Keresztes, L., &amp; Pauls, S. U.
                (2015). New records for the Kosovo caddisfly fauna with the
                description of a new species, Drusus dardanicus sp. nov.
                (Trichoptera: Limnephilidae). <i>Zootaxa</i>, 4032(5), 551–568.
                https://doi.org/10.11646/zootaxa.4032.5.5
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Slavevska-Stamenković, V., Rimcheska, B., Bilalli,
                A., &amp; Musliu, M. (2016). New data of Potamophylax
                rotundipennis (Brauer, 1857) and the first record of Stenophylax
                permistus McLachlan, 1895 (Trichoptera: Limnephilidae) from
                Kosovo. <i>Natura Croatica</i>, 25(2), 259–266.
                https://doi.org/10.20302/NC.2016.25.21
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, H., Vitecek, S., Previšić, A., Kučinić, M., Waringer,
                J., Graf, W., Balint, M., Keresztes, L., &amp; Pauls, S. U.
                (2016). Drusus sharrensis sp. n. (Trichoptera, Limnephilidae), a
                new species from Sharr National Park in Kosovo, with molecular
                and ecological notes. <i>ZooKeys</i>, 559(3), 107–124.
                https://doi.org/10.3897/zookeys.559.6350
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ibrahimi, K., Islami, B., Kastrati, B., Geci, D., Bilalli, A.,
                &amp; Ibrahimi, H. (2024). New findings and an updated checklist
                of Araneidae (Arachnida: Araneae) from Kosovo.{" "}
                <i>Journal of Insect Biodiversity and Systematics</i>, 10(3),
                547–555. https://doi.org/10.61186/jibs.10.3.547
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Ilić, N. (2005). Strižibube Srbije (Coleoptera, Cerambycidae).
                Faunistički pregled. Author’s edition, Belgrade, 179 pp.
              </p>
            </li>
            <li data-list-text="">
              <p
                className="s1"
                style={{
                  paddingTop: "3pt",
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                IUCN Red List of Threatened Species
                <a
                  href="http://www.iucnredlist.org/"
                  className="a"
                  target="_blank"
                >
                  . (n.d.). Retrieved September 5, 2024, from https:/
                </a>
                <a href="http://www.iucnredlist.org/" target="_blank">
                  /www.iucnredlist.org/
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Kabashi-Kastrat, E., Zhushi-Etemi, F. N., &amp; Bytyçi, P. S.
                (2022). Notes on the Presence of Erebia alberganus (De Prunner
                1879) (Lepidoptera: Nymphalidae) for Kosovo.{" "}
                <i>Polish Journal of Natural Sciences</i>, 37(4), 445–453.
                https://doi.org/10.31648/pjns.8557
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Kastrati, E. K., Zhushi, F., Çadraku, H., &amp; Bytyçi, P.
                (2022). First Record of Heteropterus morpheus (Pallas, 1771)
                (Lepidoptera: Hesperiidae) from the Republic of Kosovo.{" "}
                <i>Ecologica Balkanica</i>
                <a
                  href="http://www.researchgate.net/publication/357688408"
                  className="a"
                  target="_blank"
                >
                  , 14(1), 149–153. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/357688408"
                  target="_blank"
                >
                  /www.researchgate.net/publication/357688408
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Kasumaj, E. (2018).{" "}
                <i>
                  Coleoptera-t saproksilike në drurët e bungut (Quercus petraea)
                  dhe të ahut (Fagus moesiaca) në Peizazhin e Mbrojtur "Gërmia”{" "}
                </i>
                (Teza e Masterit). Universiteti i Prishtinës.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Kiyak, S., &amp; Baymak, D. (2019). Six new records for the
                Heteroptera (Hemiptera) fauna of Kosovo.{" "}
                <i>Journal of the Heteroptera of Turkey</i>
                <a
                  href="http://www.researchgate.net/publication/337682811"
                  className="a"
                  target="_blank"
                >
                  , 1(2), 20–24. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/337682811"
                  target="_blank"
                >
                  /www.researchgate.net/publication/337682811
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Koren, T., Kulijer, D., Vukotić, K., &amp; Zhushi-Etemi, F.
                (2021). Contribution to the knowledge of the butterfly diversity
                (Lepidoptera: Papilionoidea) of Kosovo.{" "}
                <i>Entomologist’s Gazette</i>, 72(2), 119–129.
                https://doi.org/10.31184/g00138894.722.1789
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Kuçi, R., Ibrahimi, H., &amp; Gashi, A. (2017). First record of
                Gammarus roeselii Gervais, 1835 (Amphipoda: Gammaridae) from
                Kosovo with ecological notes. <i>Natura Croatica</i>, 26(2),
                215–223. https://doi.org/10.20302/NC.2017.26.18
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Kulijer, D., &amp; Ibrahimi, H. (2017). First report of invasive
                species Leptoglossus occidentalis in Kosovo (Heteroptera:
                Coreidae). <i>Acta Entomologica Slovenica</i>, 25(1), 115– 118.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Kury, A. B., Kury, I. S., &amp; Oliveira, A. B. R. de. (2024).
                Checklists of extant harvestman (Arachnida: Opiliones) species
                for all the countries of the world. <i>Zootaxa</i>
                <a
                  href="https://doi.org/10.11646/zootaxa.5515.1.1"
                  className="a"
                  target="_blank"
                >
                  , 5515(1), 1–162.{" "}
                </a>
                <a
                  href="https://doi.org/10.11646/zootaxa.5515.1.1"
                  className="s2"
                  target="_blank"
                >
                  https://doi.org/10.11646/zootaxa.5515.1.1
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Muja, N., Zhushi, F., Dikolli-Velo, E., Kadriaj, P., &amp;
                Gunay, F. (2019). The composition, diversity, and distribution
                of mosquito fauna (Diptera: Culicidae) in Kosovo.{" "}
                <i>Journal of Vector Ecology</i>
                <a
                  href="http://www.researchgate.net/publication/333402829"
                  className="a"
                  target="_blank"
                >
                  , 44(1), 94–104. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/333402829"
                  target="_blank"
                >
                  /www.researchgate.net/publication/333402829
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Muja, N., Zhushi, F., Velo, E., &amp; Kadriaj, P. (2017). The
                mosquito fauna (Diptera, Culicidae) of the South-Western part of
                the Republic of Kosovo.{" "}
                <i>
                  7th International Congress of the Society for Vector Ecology
                  (SOVE),{" "}
                </i>
                1-6 October 2017, Palma de Mallorca<i>, </i>
                <a
                  href="http://www.researchgate.net/publication/329473092"
                  className="a"
                  target="_blank"
                >
                  Spain. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/329473092"
                  target="_blank"
                >
                  /www.researchgate.net/publication/329473092
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Muja-Bajraktari, N., Kadriaj, P., Zhushi-Etemi, F., Sherifi, K.,
                Alten, B., Petric, D., Velo, E., &amp; Schaffner, F. (2022). The
                Asian tiger mosquito Aedes albopictus (Skuse) in Kosovo: First
                record. <i>PLoS ONE</i>, 17(3).
                https://doi.org/10.1371/journal.pone.0264300
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Musliu, M., Bilalli, A., Ibrahimi, H., Geci, D., &amp;
                Grapci-Kotori, L. (2024). New data on the fauna of Coleoptera
                (Cerambycidae) in Kosovo.{" "}
                <i>
                  VI. International Agricultural, Biological and Life Sciences
                  Conference AGBIOL 2024,{" "}
                </i>
                <a
                  href="http://www.researchgate.net/publication/384241483"
                  className="a"
                  target="_blank"
                >
                  18th to 20th September 2024, Edirne, Turkey. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/384241483"
                  target="_blank"
                >
                  /www.researchgate.net/publication/384241483
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Musliu, M., Ibrahimi, H., Bilalli, A., &amp;
                Slavevska-Stamenković, V. (2020). New Records for the Caddisfly
                Fauna (Insecta: Trichoptera) of the Karadak Mountains, Western
                Balkans. <i>Journal of the Entomological Research Society</i>
                <a
                  href="http://www.researchgate.net/publication/342888214"
                  className="a"
                  target="_blank"
                >
                  , 22(2), 47–56. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/342888214"
                  target="_blank"
                >
                  /www.researchgate.net/publication/342888214
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingTop: "3pt",
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Oláh, J. (2017). Trichoptera endemic in the Carpathian Basin and
                the adjacent areas. <i>Folia Entomologica Hungarica</i>, 78,
                111–255. https://doi.org/10.17112/foliaenthung.2017.78.111
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Oláh, J., Andersen, T., Chvojka, P., Coppa, G., Graf, W.,
                Ibrahimi, H., Lodovici, O., Previšić, A., Valle, &amp; M.
                (2013). The Potamophylax nigricornis group (Trichoptera,
                Limnephilidae): resolution of phylogenetic species by fine
                structure analysis. <i>Opuscula Zoologica</i>, 44(2), 167–200.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Oláh, J., Beshkov, S., Chvojka, P., Ciubuc, C., Coppa, G.,
                Ibrahimi, H., Kovács, T., Mey, W., &amp; Oláh, J. JR. (2017).
                Revision of Drusinae subfamily (Trichoptera, Limnephilidae):
                divergence by paraproct and paramere: speciation in isolation by
                integration. <i>Opuscula Zoologica</i>, 48(1), 3–228.
                https://doi.org/10.18348/opzool.2017.s1.3
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Oláh, J., Beshkov, S., Ibrahimi, H., Kovács, T., Oláh, J., &amp;
                Vinçon, G. (2022). On the Trichoptera of the Balkan: survey on
                species complexes of Polycentropus ierapetra, Rhyacophila
                balcanica, R. bosnica and Notidobia nekibe.{" "}
                <i>Opuscula Zoologica</i>, 53(1), 67–
              </p>
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "0pt",
                  lineHeight: "14pt",
                  textAlign: "justify",
                }}
              >
                111. https://doi.org/10.18348/opzool.2022.1.67
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Płóciennik, M., Berlajolli, V., &amp; Mateusz, P. (2023). A
                preliminary list of crenobiontic species in the Bjeshket e
                Nemuna National Park (Republic of Kosovo).{" "}
                <i>Oltenia. Studii Şi Comunicări. Ştiinţele Naturii</i>
                <a
                  href="http://www.researchgate.net/publication/376309011"
                  className="a"
                  target="_blank"
                >
                  , 39(2). https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/376309011"
                  target="_blank"
                >
                  /www.researchgate.net/publication/376309011
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Presetnik, P., Dundarova, H., Fiedler, W., Gashi, F., Hoxha, L.,
                Pavlovič, E., &amp; Théou, P. (2018). A start of systematic bat
                survey of Kosovo.{" "}
                <i>
                  Regional Symposium “Conservation status of bats in the Central
                  Europe and Western Balkan”
                </i>
                , 31. 5. - 1. 6. 2018, Sarajevo, Bosnia and Herzegovina.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Salihu, F., Shala, D., Bilalli, A., Geci, D., &amp; Ibrahimi, H.
                (2023). Contribution to the knowledge of the caddisfly fauna of
                Kosovo with first record of the genus Orthotrichia Eaton, 1873
                (Trichoptera, Hydroptilidae).{" "}
                <i>Journal of Insect Biodiversity and Systematics</i>, 9(3),
                513–526. https://doi.org/10.52547/jibs.9.3.513
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Schabetsberger, R., Grapci-Kotori, L., Ibrahimi, H., Bilalli,
                A., Levkov, Z., Jersabek, C. D., Vorage, M., Denoël, M., Kaiser,
                R., Pall, K., Eisendle, U., Eder, E., &amp; Sadiku, A. (2020).
                First limnological characterization of Lakes Leqinat and Drelaj
                in Bjeshkët e Nemuna National Park, Kosovo. <i>Eco.Mont</i>
                <a
                  href="https://doi.org/10.1553/ECO.MONT-13-1S12"
                  className="a"
                  target="_blank"
                >
                  , 13(1), 12–21.{" "}
                </a>
                <a
                  href="https://doi.org/10.1553/ECO.MONT-13-1S12"
                  className="s2"
                  target="_blank"
                >
                  https://doi.org/10.1553/ECO.MONT-13-1S12
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Teleki, P. &amp; Csiki, E. (1922–1940). Balkán-kutatásainak
                tudományos eredményei. I kötet—Csiki Ernö állattani kutatásai
                Albániában. Magyar Tudományos Akadémia Kiadása, Budapest, 334 pp
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "22pt",
                  textIndent: "-17pt",
                  lineHeight: "15pt",
                  textAlign: "justify",
                }}
              >
                University of Prishtina. (n.d.). <i>Unpublished data.</i>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Veselaj, Z., Mustafa, B., Hajdari, A., &amp; Krasniqi, Z.
                (2012). Biodiversity conservation status in the Republic of
                Kosovo with focus on biodiversity centres.{" "}
                <i>Journal of Environmental Biology</i>, <i>33</i>
                <a
                  href="http://www.researchgate.net/publication/235680531"
                  className="a"
                  target="_blank"
                >
                  , 307–310. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/235680531"
                  target="_blank"
                >
                  /www.researchgate.net/publication/235680531
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Vinko, D., Kulijer, D., Zhushi Etemi, F., Hostnik, M., &amp;
                Šalamun, A. (2020).{" "}
                <i>
                  The first systematic survey of the dragonfly fauna of Kosovo
                </i>
                <a
                  href="http://www.dragonflyfund.org/"
                  className="a"
                  target="_blank"
                >
                  . 147, 1–50.{" "}
                </a>
                <a
                  href="http://www.dragonflyfund.org/"
                  className="s2"
                  target="_blank"
                >
                  http://www.dragonflyfund.org/
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Vrenozi, B., &amp; Jäger, P. (2013). Spiders (Araneae) from
                Albania and Kosovo in the collection of Carl Friedrich Roewer.{" "}
                <i>Arachnologische Mitteilungen</i>, 46, 17–26.
                https://doi.org/10.5431/aramit4604
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingTop: "3pt",
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Xërxa, B. L., Sartori, M., Gashi, A., &amp; Gattolliat, J. L.
                (2019). First checklist of mayflies (Insecta, Ephemeroptera)
                from Kosovo. <i>ZooKeys</i>, 874, 69–82.
                https://doi.org/10.3897/zookeys.874.38098
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Xërxa, B. L., Sartori, M., Gashi, A., &amp; Gattolliat, J. L.
                Mayflies (Insecta, Ephemeroptera) of the Blinajë Hunting Reserve
                in Kosovo.{" "}
                <i>8th International Symposium of Ecologists of Montenegro</i>,
                2-6 October 2019, Budva, Montenegro.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Xërxa, B., &amp; Bilalli, A. (2024). Mayfly Fauna (Insecta:
                Ephemeroptera) from the Karadak Mountains in Kosovo.{" "}
                <i>
                  Central European Symposium for Aquatic Macroinvertebrate
                  Research
                </i>
                .
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Zhushi, F., Bytyçi, P., &amp; Visoka, V. (2017). New Records of
                Araschnia levana (Linneaus, 1758) (Lepidoptera: Nymphalidae) in
                Kosovo.{" "}
                <i>
                  Journal of International Environmental Application &amp;
                  Science
                </i>
                <a
                  href="http://www.researchgate.net/publication/317318514"
                  className="a"
                  target="_blank"
                >
                  , 12(1), 5–8. https:/
                </a>
                <a
                  href="http://www.researchgate.net/publication/317318514"
                  target="_blank"
                >
                  /www.researchgate.net/publication/317318514
                </a>
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Zhushi, F., Bytyci, P., Ismail, M., &amp; Musliu, M. (2017).
                Contribution to the Knowledge of Nymphalidae Fauna (Lepidoptera:
                Rhopalocera) In Kosovo. <i>Trakia Journal of Science</i>, 15(2),
                101–105. https://doi.org/10.15547/tjs.2017.02.001
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Zhushi-Etemi, F., Bytyqi, P., Musliu, M., &amp; Ceka, R. (2018).
                Distribution of butterfly species (Lepidoptera: Papilionoidea)
                in the protected area “Mirusha Waterfalls” in Kosovo.{" "}
                <i>Natura Croatica</i>, 27(2), 305–314.
                https://doi.org/10.20302/NC.2018.27.19
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Zhushi-Etemi, F., Visoka, V., Çadraku, H., &amp; Bytyçi, P.
                (2020). Contribution to the knowledge of the butterfly fauna
                (Lepidoptera: Papilionoidea) of the north-eastern part of the
                Republic of Kosovo. <i>Polish Journal of Entomology</i>, 89(4),
                181–189. https://doi.org/10.5604/01.3001.0014.4590
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingLeft: "23pt",
                  textIndent: "-18pt",
                  textAlign: "justify",
                }}
              >
                Zogaris, S., Grapci-Kotori, L., Geci, D., Ibrahimi, H., Zogaris,
                D., Bilalli, A., Buqinca, A., Vlachopoulos, K., &amp; Vavalidis,
                T. (2024). River degradation impacts fish assemblages in
                Kosovo’s Ibër basin. <i>Ecologica Montenegrina</i>
                <a
                  href="https://doi.org/10.37828/em.2024.75.3"
                  className="a"
                  target="_blank"
                >
                  , 75, 33–51.{" "}
                </a>
                <a
                  href="https://doi.org/10.37828/em.2024.75.3"
                  className="s2"
                  target="_blank"
                >
                  https://doi.org/10.37828/em.2024.75.3
                </a>
              </p>
            </li>
          </ul>
        </>
      </div>
      <Footer />
    </>
  );
}
