import { Layout } from "../../components/Layout";
import { TitleSm } from "../../components/TitleSm";

export default function Project() {
  return (
    <Layout title="Projects" bannerText="Projects">
      <div id="Content">
        <div className="content_wrapper clearfix">
          <div className="sections_group">
            <div className="entry-content">
              <div className="section sections_style_0">
                <div className="section_wrapper clearfix">
                  {/* Master Plan */}
                  <div
                    className="items_group clearfix"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <div className="column one">
                      <TitleSm title="Master Plan" />
                    </div>
                    {/* One Second (1/2) Column */}
                    <div
                      className="column one-second column_column"
                      style={{
                        backgroundColor: "#ffba00",
                        padding: "15px",
                        borderRadius: "40px 0 40px 0",
                      }}
                    >
                      <div className="column_attr">
                        <img
                          src="content/builder/images/projects/master-plan.jpg"
                          style={{ borderRadius: "30px 0 30px 0" }}
                        />
                      </div>
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <p className="p-text">
                          The Awka Millennium City (AMC) is strategically
                          located in the Awka municipality within the environ of
                          the new Government State House and Secretariat Complex
                          .This fully equipped Millennium city is thoughtfully
                          designed with an array of amenities ranging from a
                          proper drainage system to pedestrian friendly
                          sidewalks. It has a commercial area, located within
                          walking distance of the homes.
                        </p>
                        <h4 className="title-text">
                          AMC is an iconic residential neighborhood offering:
                        </h4>
                        <div className="textwidget">
                          <ul className="footer_links txt-16">
                            <li>Gated and secure community</li>
                            <li>Estate management services</li>
                            <li>Constant power and water supply</li>
                            <li>
                              Modern access control and surveillance cameras
                            </li>
                            <li>Road and drainage networks</li>
                            <li>Recreational amenities and parks</li>
                            <li>Commercial areas</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Residential Plots */}
                  <div
                    className="items_group clearfix"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <div className="column one">
                      <TitleSm title="Residential Plots" />
                    </div>
                    {/* One Second (1/2) Column */}
                    <div
                      className="column one-second column_column"
                      style={{
                        backgroundColor: "#ffba00",
                        padding: "15px",
                        borderRadius: "40px 0 40px 0",
                      }}
                    >
                      <div
                        className="column_attr"
                        style={{ padding: "50px 8% 10px" }}
                      >
                        <img
                          src="content/builder/images/projects/residential-plot.png"
                          style={{
                            borderRadius: "30px 0 30px 0",
                          }}
                        />
                      </div>
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <h4 className="title-text">Residential Plots</h4>
                        <div className="textwidget">
                          <ul className="footer_links txt-16">
                            <li>Low density residential area</li>
                            <li>Medium density residential area</li>
                            <li>High density residential area</li>
                          </ul>
                        </div>
                        <h4 className="title-text">
                          Low Density Residential Area
                        </h4>
                        <p className="p-text">
                          The residential plots available in the low density
                          residential area of the community constitutes premium
                          1000sqm plots. These plots will be allocated solely
                          for the purpose of accommodating single family homes.
                          This plots will also be referred to as Villa Plots.
                        </p>
                        <h4 className="title-text">
                          Medium Density Residential Area
                        </h4>
                        <p className="p-text">
                          This area of the residential community boasts of
                          500sqm plots which are solely for accommodating single
                          family homes. These plots are referred to as Standard
                          Plots.
                        </p>
                        <h4 className="title-text">
                          High Density Residential Area
                        </h4>
                        <p className="p-text">
                          This area of the residential community will consist of
                          various size plots designed to accommodate various
                          kinds of multiple family homes such as apartment
                          buildings, terrace buildings etc.
                        </p>
                        <h4 className="title-text">Exclusive Enclave</h4>
                        <p className="p-text">
                          This is an exclusive enclave within AMC which will sit
                          plots of 2000sqm and above collocated amongst each
                          other. This area will boast its own ”central park”,
                          and also have its dedicated access control for people
                          the live within the enclave. It is limited to about 40
                          plots.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Commercial Plots */}
                  <div
                    className="items_group clearfix"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <div className="column one">
                      <TitleSm title="Commercial Plots" />
                    </div>
                    {/* One Second (1/2) Column */}
                    <div
                      className="column one-second column_column"
                      style={{
                        backgroundColor: "#ffba00",
                        padding: "15px",
                        borderRadius: "40px 0 40px 0",
                      }}
                    >
                      <div
                        className="column_attr"
                        style={{ padding: "50px 8% 10px" }}
                      >
                        <img
                          src="content/builder/images/projects/commercial.jpg"
                          style={{
                            borderRadius: "30px 0 30px 0",
                          }}
                        />
                      </div>
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <h4 className="title-text">
                          Commercial / Institutional
                        </h4>
                        <p className="p-text">
                          The Commercial area of the community will be located
                          outside the residential area towards the estate
                          entrance, ensuring the serenity of the residential
                          community is maintained, while still being accessible
                          to non-residents.
                        </p>
                        <h4 className="title-text">
                          The commercial area will consist of :
                        </h4>
                        <div className="textwidget">
                          <ul className="footer_links txt-16">
                            <li>Leisure</li>
                            <li>Shopping</li>
                            <li>Health facilities</li>
                            <li>Educational facilities</li>
                            <li>Religious facilities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recreational Area */}
                  <div
                    className="items_group clearfix"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <div className="column one">
                      <TitleSm title="Recreational Area" />
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div
                        className="column_attr"
                        style={{
                          backgroundColor: "#ffba00",
                          padding: "15px",
                          borderRadius: "40px 0 40px 0",
                        }}
                      >
                        <img src="content/builder/images/projects/Recreational.png" />
                      </div>
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <h4 className="title-text">Millennium Park</h4>
                        <p className="p-text">
                          AMC will boast a Millennium Park which will consist of
                          various recreational facilities such as playgrounds,
                          picnic areas, etc. It will also serve as an event
                          center where residents can host external guests for
                          various functions. There will be a jogging track
                          surrounding the Millennium Park which will also serve
                          as a platform for morning exercises, walking pets,
                          etc.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Utility Area */}
                  <div
                    className="items_group clearfix"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <div className="column one">
                      <TitleSm title="Utility Area" />
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div
                        className="column_attr"
                        style={{
                          backgroundColor: "#ffba00",
                          padding: "15px",
                          borderRadius: "40px 0 40px 0",
                        }}
                      >
                        <img
                          src="content/builder/images/projects/utility.jpg"
                          style={{
                            borderRadius: "30px 0 30px 0",
                          }}
                        />
                      </div>
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <h4 className="title-text">
                          The utility area of Awka Millennium City would consist
                          of the bulk infrastructures such as:
                        </h4>
                        <div className="textwidget">
                          <ul className="footer_links txt-16">
                            <li>Water pump station, reservoirs and tanks</li>
                            <li>Power supply</li>
                            <li>Industrial borehole & water treatment</li>
                            <li>Central refuse collection</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Roads */}
                  <div
                    className="items_group clearfix"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <div className="column one">
                      <TitleSm title="Roads" />
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div
                        className="column_attr"
                        style={{
                          backgroundColor: "#ffba00",
                          padding: "15px",
                          borderRadius: "40px 0 40px 0",
                        }}
                      >
                        <img
                          src="content/builder/images/projects/roads.png"
                          style={{
                            borderRadius: "30px 0 30px 0",
                          }}
                        />
                      </div>
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <h4 className="title-text">
                          The community will be adequately serviced by a well
                          planned road network, which will comprise :
                        </h4>
                        <div className="textwidget">
                          <ul className="footer_links txt-16">
                            <li>
                              Sub Arterial roads: access link road from main
                              highway
                            </li>
                            <li>Residential distribution road networks</li>
                            <li>Residential Access Road Networks</li>
                            <li>Residential close Road networks</li>
                            <li>Pedestrian walkways etc.</li>
                            <li>Street lights</li>
                            <li>Storm water drainage</li>
                          </ul>
                        </div>
                        <p className="p-text">
                          These various road networks will ensure well
                          structured and organized traffic flow movement within
                          the community.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Homes */}
                  <div
                    className="items_group clearfix"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <div className="column one">
                      <TitleSm title="Homes" />
                    </div>
                    {/* One  Column */}
                    <div className="column one column_column">
                      <div className="column_attr">
                        <h4 className="title-text">Prototypes</h4>
                        <p className="p-text">
                          As a supplement to the provision of serviced plots,
                          M-P Infrastructure will also provide the option of
                          constructing residential buildings for potential
                          clients/residents who are interested. We will be
                          providing these services under the following
                          categories/specifications.
                        </p>
                        <div className="textwidget">
                          <ul className="footer_links txt-16">
                            <li>
                              Sub Arterial roads: access link road from main
                              highway
                            </li>
                            <li>2 bed apartment building.</li>
                            <li>4 bed terrace houses.</li>
                            <li>4 bed detached duplex.</li>
                            <li> bed villa.</li>
                          </ul>
                        </div>
                        <br />
                      </div>
                      <div className="column one">
                        <p className="p-text">
                          The images below are the architectural designs of the
                          buildings that will be made available for
                          construction.
                        </p>

                        {/* Two bedroom apartment building */}
                        <div>
                          <h4 className="title-text">
                            2 BED APARTMENT BUILDING
                          </h4>
                          <br />
                        </div>
                        <div
                          style={{
                            backgroundColor: "#fde8ae",
                            padding: "8px 6px 6px",
                            borderRadius: "10px",
                          }}
                        >
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/2-bed-1.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/2-bed-2.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/2-bed-3.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/2-bed-4.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/2-bed-5.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/2-bed-6.jpg"
                          />
                        </div>

                        {/* Four bedroom detached duplex */}
                        <div style={{ marginTop: "5%" }}>
                          <h4 className="title-text">4 BED DETACHED DUPLEX</h4>
                          <br />
                        </div>
                        <div
                          style={{
                            backgroundColor: "#fde8ae",
                            padding: "8px 6px 6px",
                            borderRadius: "10px",
                          }}
                        >
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-1.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-2.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-3.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-4.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-5.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-6.jpg"
                          />
                        </div>

                        {/* Four bedroom terrace houses */}
                        <div style={{ marginTop: "5%" }}>
                          <h4 className="title-text">4 BED TERRACE HOUSES</h4>
                          <br />
                        </div>
                        <div
                          style={{
                            backgroundColor: "#fde8ae",
                            padding: "8px 6px 6px",
                            borderRadius: "10px",
                          }}
                        >
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-t-1.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-t-2.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-t-3.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-t-4.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-t-5.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/4-bed-t-6.jpg"
                          />
                        </div>

                        {/* Five bedroom villa */}
                        <div style={{ marginTop: "5%" }}>
                          <h4 className="title-text">5 BED VILLA</h4>
                          <br />
                        </div>
                        <div
                          style={{
                            backgroundColor: "#fde8ae",
                            padding: "8px 6px 6px",
                            borderRadius: "10px",
                          }}
                        >
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/5-bed-1.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/5-bed-2.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/5-bed-3.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/5-bed-4.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/5-bed-5.jpg"
                          />
                          <img
                            className="scale-with-grid p-image"
                            src="content/builder/images/projects/5-bed-6.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
