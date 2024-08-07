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

const Buttongroups = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thêm tin tức</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control">
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Tiêu đề</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Nhập tên sản phẩm..."
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="formFileDisabled">Hình ảnh</CFormLabel>
                  <CFormInput type="file" id="formFileDisabled" disabled />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Nội dung</CFormLabel>
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

export default Buttongroups
