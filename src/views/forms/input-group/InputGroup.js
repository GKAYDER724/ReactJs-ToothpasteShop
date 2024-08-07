import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from '../../../components/admin'

const Tables = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Danh sách sản phẩm</strong>
          </CCardHeader>
          {/* <CTableDataCell>
            <>
              <br></br> <button className="btn btn-secondary">Thêm</button>{' '}
            </>
          </CTableDataCell> */}
          <CCardBody>
            <DocsExample href="components/table">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tiêu đề</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Hình ảnh</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nội dung</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Trạng thái</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Sản phẩm kem đánh răng 1</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
                    <CTableDataCell>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta eum,
                    </CTableDataCell>
                    <CTableDataCell>
                      <>
                        {' '}
                        <button className="btn btn-secondary">Sửa</button>{' '}
                      </>
                      <>
                        {' '}
                        <button className="btn btn-secondary">Xóa</button>{' '}
                      </>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Sản phẩm kem đánh răng 1</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
                    <CTableDataCell>
                      necessitatibus velit eius ullam aut atque asperiores provident inventore
                    </CTableDataCell>
                    <CTableDataCell>
                      <>
                        {' '}
                        <button className="btn btn-secondary">Sửa</button>{' '}
                      </>
                      <>
                        {' '}
                        <button className="btn btn-secondary">Xóa</button>{' '}
                      </>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Sản phẩm kem đánh răng 1</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
                    <CTableDataCell>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta eum,
                    </CTableDataCell>
                    <CTableDataCell>
                      <>
                        {' '}
                        <button className="btn btn-secondary">Sửa</button>{' '}
                      </>
                      <>
                        {' '}
                        <button className="btn btn-secondary">Xóa</button>{' '}
                      </>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
