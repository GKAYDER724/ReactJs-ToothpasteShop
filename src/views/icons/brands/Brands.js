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
            <strong>Danh sách đơn hàng</strong>
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
                    <CTableHeaderCell scope="col">Mã đơn hàng</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tên sản phẩm</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Loại sản phẩm</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Hình ảnh</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Giá</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Số lượng</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Địa chỉ nhận hàng</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Số điện thoại</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phương thức thanh toán</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Trạng thái</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Vận chuyển</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">146465BD46X5G7</CTableHeaderCell>
                    <CTableDataCell>Sản phẩm kem đánh răng 1</CTableDataCell>
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
                    <CTableDataCell>100.000VND</CTableDataCell>
                    <CTableDataCell>10</CTableDataCell>
                    <CTableDataCell>
                      Ấp Mỹ Thạnh Xã Mỹ Hội Đông Huyện Chợ Mới Tỉnh An Giang
                    </CTableDataCell>
                    <CTableDataCell>0987654321</CTableDataCell>
                    <CTableDataCell>Thanh toán khi nhận hàng</CTableDataCell>
                    <CTableDataCell>
                      <>
                        {' '}
                        <button className="btn btn">Đã thanh toán</button>{' '}
                      </>
                    </CTableDataCell>
                    <CTableDataCell>
                      <>
                        {' '}
                        <button className="btn btn">Đang vận chuyển</button>{' '}
                      </>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">146465BD46X5G7</CTableHeaderCell>
                    <CTableDataCell>Sản phẩm kem đánh răng 1</CTableDataCell>
                    <CTableDataCell>P/S</CTableDataCell>
                    <CTableDataCell>Hình chưa có</CTableDataCell>
                    <CTableDataCell>100.000VND</CTableDataCell>
                    <CTableDataCell>10</CTableDataCell>
                    <CTableDataCell>
                      Ấp Mỹ Thạnh Xã Mỹ Hội Đông Huyện Chợ Mới Tỉnh An Giang
                    </CTableDataCell>
                    <CTableDataCell>0912345678</CTableDataCell>
                    <CTableDataCell>Đã chuyển khoản</CTableDataCell>
                    <CTableDataCell>
                      <>
                        {' '}
                        <button className="btn btn">Chưa thanh toán</button>{' '}
                      </>
                    </CTableDataCell>
                    <CTableDataCell>
                      <>
                        {' '}
                        <button className="btn btn">Đang xử lý</button>{' '}
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
