import React, { lazy } from "react";
import { CCard, CCardBody, CCardFooter, CCol, CRow } from "@coreui/react";

import { CChart } from "@coreui/react-chartjs";
import { chart1, chart2 } from "../../DataChart";
const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <CRow className="border-bottom">
                <CCol sm="5">
                  <h5 id="traffic" className="card-title">
                    1Y Performance
                  </h5>
                </CCol>
              </CRow>
              <div className="chart-wrapper">
                <CChart
                  type="line"
                  style={{ height: "300px", marginTop: "40px" }}
                  datasets={chart1.datasets}
                  options={{ maintainAspectRatio: false }}
                  labels={chart1.labels}
                />
              </div>
            </CCardBody>
            <CCardFooter></CCardFooter>
          </CCard>
        </CCol>

        <CCol>
          <CCard>
            <CCardBody>
              <CRow className="border-bottom">
                <CCol sm="5">
                  <h5 id="traffic" className="card-title">
                    1Y Performance
                  </h5>
                </CCol>
              </CRow>
              <div className="chart-wrapper">
                <CChart
                  type="line"
                  style={{ height: "300px", marginTop: "40px" }}
                  datasets={chart2.datasets}
                  options={{ maintainAspectRatio: false }}
                  labels={chart2.labels}
                />
              </div>
            </CCardBody>
            <CCardFooter></CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
