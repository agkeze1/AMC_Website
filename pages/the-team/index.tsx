import Head from "next/head";
import { Layout } from "../../components/Layout";
import { TitleSm } from "../../components/TitleSm";

const TheTeam = () => {
  return (
    <Layout title="The Team" bannerText="The Team">
      <div>
        <div className="column one" style={{ padding: "0 10vh" }}>
          <TitleSm title="Our Partners" />
        </div>
        {/* Anambra State through ANSIPPA */}
        <div className="team-container">
          <div className="team-image-container">
            <img
              className="team-image"
              src="content/builder/images/partner-2.png"
              alt=""
            />
          </div>
          <div className="team-desc">
            <h4>
              Anambra State through ANSIPPA (Concessionaire / Head Lessor/
              Landowner)
            </h4>
            <div className="textwidget">
              <ul className="footer_links txt-16 point-container">
                <li>
                  Anambra Investment Promotion and Protection Agency(ANSIPPA)
                  was established in 2015 under Governor, Chief Willie Obiano’s
                  Anambra State Strategic Economic Blueprint, a robust,
                  multi-sectorial master plan designed to transform Anambra
                  State.
                </li>
                <li>
                  The key Objectives of his economic blueprint are economic
                  growth, job creation and urbanization of Anambra state through
                  an aggressive investment drive through an improved business
                  environment.
                </li>
                <li>
                  The Agency incorporates a one stop shop model for all
                  investment decisions, and operates ANSIPPA- OSSC, a service
                  centre that makes registration of investments quicker, simpler
                  and more efficient and gives better co-ordination and service
                  delivery between investors and the various the government
                  ministries, departments and agencies .
                </li>
                <li>
                  ANSIPPA has achieved tremendous success and relative
                  effectiveness in attracting indigenous, domestic and foreign
                  investment. This success is credited to the Agency’s
                  Autonomous nature, its operating model, and unflinching
                  support and encouragement from His Excellency, the Governor of
                  Anambra State.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* M-P Infrastructure ( Sponsor/ Promoter) */}
        <div
          className="team-container"
          style={{
            background: "#fdedc0a3",
          }}
        >
          <div className="team-image-container">
            <img
              className="team-image"
              src="content/builder/images/partner-7.png"
              alt=""
            />
          </div>
          <div className="team-desc">
            <h4>M-P Infrastructure ( Sponsor/ Promoter)</h4>
            <div className="textwidget">
              <ul className="footer_links txt-16 point-container">
                <li>
                  M-P Infrastructure Limited is a leading infrastructure
                  development and management company, focusing on renewable
                  energy, power, water, real estate, communication and
                  technology, offering the entire value chain of solutions from
                  design and construction to operation and maintenance.
                </li>
                <li>
                  The company has almost a decade of experience in the Nigerian
                  market and has expanded service reach by opening up facilities
                  in Ghana,Cameroon, Zambia, Cote d’Ivoire, Rwanda and South
                  Africa.
                </li>
                <li>
                  Their business model is focused on bridging Africa’s
                  infrastructure deficit. In partnership with some of the
                  leading global equipment manufacturers, we are improving the
                  standards of locally driven infrastructure development across
                  the continent.
                </li>
                <li>
                  M-P Infrastructure has ISO 9001:2008 certification in Nigeria
                  and Cote d’Ivoire, ISO 9001:2015, ISO 14001:2015 and OHSAS
                  18001:2007 in Ghana.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="column one team-title-container">
          <br />
          <TitleSm title="Project Team" />
        </div>
        {/* Awka Millennium City Development Company Limited */}
        <div className="team-container" style={{ minHeight: "800px" }}>
          <div className="team-image-container">
            <img
              className="team-image"
              src="content/builder/images/partner-1.png"
              alt=""
            />
          </div>
          <div className="team-desc">
            <h4>
              Awka Millennium City Development Company Limited ( Project
              Company)
            </h4>
            <div className="textwidget">
              <ul className="footer_links txt-16 point-container">
                <li>Special purpose company and developer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Delano Architects*/}
        <div
          className="team-container"
          style={{
            background: "#fdedc0a3",
          }}
        >
          <div className="team-image-container">
            <img
              className="team-image"
              src="content/builder/images/partner-6.png"
              alt=""
            />
          </div>
          <div className="team-desc">
            <h4>Delano Architects</h4>
            <div className="textwidget">
              <ul className="footer_links txt-16 point-container">
                <li>
                  A well-reputed architectural firm with expertise in
                  architectural design, interior planning, planning and urban
                  design. They have been responsible for the design of a number
                  of high – brow real estate development in Lagos including
                  Carlton Gate, Twin Lakes, Nicon town, Orange Island etc.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Africa United Consultants ( Management and Consulting)*/}
        <div className="team-container">
          <div className="team-image-container">
            <img
              className="team-image"
              src="content/builder/images/partner-5.png"
              alt=""
            />
          </div>
          <div className="team-desc">
            <h4>Africa United Consultants ( Management and Consulting)</h4>
            <div className="textwidget">
              <ul className="footer_links txt-16 point-container">
                <li>
                  A multi disciplinary engineering and project management
                  consultancy firm. An engineering consultancy firm established
                  in 2001 in Nigeria, which specializes in infrastructure (water
                  supply, sewage, drainage, hydro-geology, etc.) including
                  planning, design, construction supervision, management and
                  auditing in Africa and Middle East. Notable projects worked on
                  include, Twin Lakes, Orange Island & Imperial international
                  business city.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* G P Greeff and Associates*/}
        <div
          className="team-container"
          style={{
            background: "#fdedc0a3",
          }}
        >
          <div className="team-image-container">
            <img
              className="team-image"
              src="content/builder/images/partner-5.png"
              alt=""
            />
          </div>
          <div className="team-desc">
            <h4>G P Greeff and Associates</h4>
            <div className="textwidget">
              <ul className="footer_links txt-16 point-container">
                <li>
                  Greeff and Associates has extensive urban design experience
                  over a period of 25 years ranging from new towns, urban
                  re-development, spatial and master plan frameworks. These
                  include the spatial framework for the Inner City of Pretoria,
                  a strategic master plan for the University of Pretoria, UJ
                  Development Framework, Technikon North-West Development
                  Strategy, and University of Fort Hare South Africa. GP Greeff
                  has worked on world class infrastructure and housing projects
                  including i) the site plan and urban design for the national
                  housing finance corporation in Polokwane ii) 150 hectare
                  Orange Island, iii) 300hectare Masonia bay development iv) Sun
                  International Resort, Egypt and many others.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TheTeam;
