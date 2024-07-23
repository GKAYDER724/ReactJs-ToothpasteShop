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
import { DocsExample } from 'src/components'

const Buttons = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Danh sách phân loại sản phẩm</strong>
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
                    <CTableHeaderCell scope="col">Tên Loại sản phẩm</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Hình ảnh</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Trạng thái</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
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
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
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
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
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
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
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
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
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

export default Buttons
