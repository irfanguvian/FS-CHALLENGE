import React from "react";
import { CWidgetDropdown, CRow, CCol } from "@coreui/react";

import ChartLineSimple from "../charts/ChartLineSimple";

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="1,997,876.38"
          text="Balance Fund ($)"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              backgroundColor="rgba(255,255,255,.2)"
              style={{ height: "70px" }}
              dataPoints={[0, 10, 13, 25, 26, 27, 28, 29, 32, 40, 80]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="primary"
              label="Balance"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="10,651.26"
          text="Balance Unit"
          footerSlot={
            <ChartLineSimple
              backgroundColor="rgba(255,255,255,.2)"
              className="mt-3"
              style={{ height: "70px" }}
              dataPoints={[0, 20, 23, 35, 36, 37, 38, 39, 42, 50, 100]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              label="Unit"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="87.57"
          text="ROI (%)"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: "70px" }}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[0, 30, 43, 45, 46, 57, 68, 79, 72, 80, 100]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="warning"
              label="ROI"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="38"
          text="Total Partners"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              backgroundColor="rgba(255,255,255,.2)"
              style={{ height: "70px" }}
              dataPoints={[0, 1, 3, 5, 6, 7, 8, 19, 22, 30, 38]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="primary"
              label="Partners"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
