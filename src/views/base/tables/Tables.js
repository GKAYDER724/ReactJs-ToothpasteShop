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
                    <CTableHeaderCell scope="col">Tên sản phẩm</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Loại sản phẩm</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Hình ảnh</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Giá</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Số lượng</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Mô tả</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Trạng thái</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Sản phẩm kem đánh răng 1</CTableDataCell>
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
                    <CTableDataCell>100.000VND</CTableDataCell>
                    <CTableDataCell>10</CTableDataCell>
                    <CTableDataCell>Kem đánh răng P/S</CTableDataCell>
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
                    <CTableDataCell>Sản phẩm kem đánh răng 2</CTableDataCell>
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
                    <CTableDataCell>100.000VND</CTableDataCell>
                    <CTableDataCell>10</CTableDataCell>
                    <CTableDataCell>Kem đánh răng P/S</CTableDataCell>
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
                    <CTableDataCell>Sản phẩm kem đánh răng 3</CTableDataCell>
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
                    <CTableDataCell>100.000VND</CTableDataCell>
                    <CTableDataCell>10</CTableDataCell>
                    <CTableDataCell>Kem đánh răng P/S</CTableDataCell>
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
                    <CTableDataCell>Sản phẩm kem đánh răng 4</CTableDataCell>
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
                    <CTableDataCell>100.000VND</CTableDataCell>
                    <CTableDataCell>10</CTableDataCell>
                    <CTableDataCell>Kem đánh răng P/S</CTableDataCell>
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
