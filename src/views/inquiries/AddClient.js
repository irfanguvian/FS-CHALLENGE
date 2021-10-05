import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CRow,
} from "@coreui/react";
const AddClient = () => {
  return (
    <CRow>
      <CCol xs="12" sm="6">
        <CCard>
          <CCardHeader className="mb-1">Add New Inquiry</CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="date-input">Inquiry Date</CLabel>
              </CCol>
              <CCol md="4">
                <CInput
                  type="date"
                  id="date-input"
                  name="date-input"
                  placeholder="date"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="name">Complete Name</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="name" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="idnumber">ID Number</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="idnumber" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="address">Address</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="address" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="5">
                <CLabel htmlFor="bank_number">Bank Account Number</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="bank_number" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="5">
                <CLabel htmlFor="bank_A_name">Bank Account Name</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="bank_A_name" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="bank_name">Bank Name</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="bank_name" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="bank_branch">Bank Branch</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="bank_branch" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="bank_sc">Bank Swift Code</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="bank_sc" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="phone">Phone Number</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="phone" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="email">Email</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="email" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="currency">Currency</CLabel>
              </CCol>
              <CCol md="12">
                <CSelect custom name="currency" id="currency">
                  <option>--PLEASE SELECT--</option>
                  <option>idr</option>
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="deposit">Deposit Amount</CLabel>
              </CCol>
              <CCol md="12">
                <CInput id="deposit" required />
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CCol md="3">
                <CLabel htmlFor="manatury">Manatury Option</CLabel>
              </CCol>
              <CCol md="12">
                <CSelect custom name="manatury" id="manatury">
                  <option>24</option>
                  <option>1</option>
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CLabel col md="3" htmlFor="file-input">
                KTP-Image
              </CLabel>
              <CCol xs="12" md="9">
                <CInputFile id="file-input" name="file-input" />
              </CCol>
            </CFormGroup>
            <CFormGroup md="5" className="ml-3">
              <CButton type="submit" size="md" color="primary" className="mr-3">
                Create New Inquiry
              </CButton>
              <CButton type="reset" size="md" color="danger">
                Reset
              </CButton>
            </CFormGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AddClient;
