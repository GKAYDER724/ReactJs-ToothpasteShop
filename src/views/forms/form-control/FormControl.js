import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from '../../../components/admin'

const FormControl = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thêm sản phẩm</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control">
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Tên sản phẩm</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Nhập tên sản phẩm..."
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Loại sản phẩm</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Nhập loại sản phẩm..."
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="formFileDisabled">Hình ảnh</CFormLabel>
                  <CFormInput type="file" id="formFileDisabled" disabled />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Giá</CFormLabel>
                  <CFormInput
                    type="number"
                    id="exampleFormControlInput1"
                    placeholder="Nhập giá sản phẩm..."
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Số lượng</CFormLabel>
                  <CFormInput
                    type="number"
                    id="exampleFormControlInput1"
                    placeholder="Nhập tên số lượng..."
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Mô tả</CFormLabel>
                  <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
                </div>

                <>
                  {' '}
                  <button className="btn btn-secondary">Thêm</button>{' '}
                </>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormControl
