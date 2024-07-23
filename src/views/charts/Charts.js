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
            <strong>Danh sách phân người dùng</strong>
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
                    <CTableHeaderCell scope="col">Phân quyền</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Gmail</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Mật khẩu</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Trạng thái</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Admin</CTableDataCell>
                    <CTableDataCell>klm123@gmail.com</CTableDataCell>
                    <CTableDataCell>kml4566dt</CTableDataCell>
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
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>User</CTableDataCell>
                    <CTableDataCell>klm123@gmail.com</CTableDataCell>
                    <CTableDataCell>kml4566srt</CTableDataCell>
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
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>User</CTableDataCell>
                    <CTableDataCell>klmsii123@gmail.com</CTableDataCell>
                    <CTableDataCell>kml4566</CTableDataCell>
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
                    <CTableHeaderCell scope="row">4</CTableHeaderCell>
                    <CTableDataCell>User</CTableDataCell>
                    <CTableDataCell>klm123@gmail.com</CTableDataCell>
                    <CTableDataCell>kml4566</CTableDataCell>
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
