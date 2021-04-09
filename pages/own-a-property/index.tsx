import { Layout } from "../../components/Layout";
import { TitleSm } from "../../components/TitleSm";

const OwnAProperty = () => {
  return (
    <Layout title="Own A Property" bannerText="Own A Property">
      <div className="section" style={{ padding: "0 0 50px 0" }}>
        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            {/* One third (1/3) Column */}
            <div className="column one-fourth column_list infrastructure">
              <div className="list_item lists_2 clearfix">
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                  <img
                    src="content/builder/images/person-form.png"
                    className="scale-with-grid"
                    width="90"
                    height="90"
                  />
                </div>
                <div style={{ padding: "5px", textAlign: "center" }}>
                  <h4>Individual Form</h4>
                </div>
              </div>
            </div>
            <div className="column one-fourth column_list infrastructure">
              <div className="list_item lists_2 clearfix">
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                  <img
                    src="content/builder/images/corporate-form.png"
                    className="scale-with-grid"
                    width="90"
                    height="90"
                  />
                </div>
                <div style={{ padding: "5px", textAlign: "center" }}>
                  <h4>Corporate Form</h4>
                </div>
              </div>
            </div>
            <div className="column one-fourth column_list infrastructure">
              <div className="list_item lists_2 clearfix">
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                  <img
                    src="content/builder/images/brochure-download.png"
                    className="scale-with-grid"
                    width="90"
                    height="90"
                  />
                </div>
                <div style={{ padding: "5px", textAlign: "center" }}>
                  <h4>Download Brochure</h4>
                </div>
              </div>
            </div>
            <div className="column one-fourth column_list infrastructure">
              <div className="list_item lists_2 clearfix">
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                  <img
                    src="content/builder/images/price-schedule.png"
                    className="scale-with-grid"
                    width="90"
                    height="90"
                  />
                </div>
                <div style={{ padding: "5px", textAlign: "center" }}>
                  <h4>Price Schedule</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OwnAProperty;
