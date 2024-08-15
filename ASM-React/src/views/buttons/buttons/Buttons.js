import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CTableHead,
  CButton,
  CFormLabel,
  CFormInput,
  CForm,
  CSpinner,
  CAlert,
} from '@coreui/react'

const CategoryList = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingCategory, setEditingCategory] = useState(null)
  const [formData, setFormData] = useState({ name: '' })
  const [successMessage, setSuccessMessage] = useState('')
  const [editError, setEditError] = useState('')

  const API_URL = 'http://localhost:4000'

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/categories`)
        setCategories(response.data)
      } catch (err) {
        setError('Failed to fetch categories: ' + err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [API_URL])

  const handleDeleteCategory = async (id) => {
    if (window.confirm('Bạn có chắc xóa loại sản phẩm hay không?')) {
      try {
        await axios.delete(`${API_URL}/api/categories/${id}`)
        setCategories(categories.filter((category) => category._id !== id))
        setSuccessMessage('Loại sản phẩm đã được xóa thành công!')
      } catch (err) {
        setError('Failed to delete category: ' + err.message)
      }
    }
  }

  const handleEditCategory = (category) => {
    setEditingCategory(category)
    setFormData({ name: category.name })
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${API_URL}/api/categories/${editingCategory._id}`, formData)
      setCategories(
        categories.map((cat) => (cat._id === editingCategory._id ? { ...cat, ...formData } : cat)),
      )
      setEditingCategory(null)
      setSuccessMessage('Loại sản phẩm đã được cập nhật thành công!')
      setEditError('')
    } catch (err) {
      setEditError('Failed to update category: ' + err.message)
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <strong>Danh sách phân loại sản phẩm</strong>
          </CCardHeader>
          <CCardBody>
            {loading ? (
              <CSpinner component="span" size="sm" />
            ) : error ? (
              <CAlert color="danger">{error}</CAlert>
            ) : (
              <>
                {successMessage && <CAlert color="success">{successMessage}</CAlert>}
                {editError && <CAlert color="danger">{editError}</CAlert>}
                {editingCategory ? (
                  <CForm onSubmit={handleFormSubmit}>
                    <h5>Sửa loại sản phẩm</h5>
                    <CFormLabel htmlFor="name">Tên Loại sản phẩm</CFormLabel>
                    <CFormInput
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                    <br></br>

                    <CButton type="submit" className="btn btn-secondary" color="primary">
                      Lưu
                    </CButton>

                    <CButton className="btn btn-secondary" onClick={() => setEditingCategory(null)}>
                      Hủy
                    </CButton>
                  </CForm>
                ) : (
                  <CTable>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Tên Loại sản phẩm</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Hành động</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {categories.map((category, index) => (
                        <CTableRow key={category._id}>
                          <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                          <CTableDataCell>{category.name}</CTableDataCell>
                          <CTableDataCell>
                            <CButton
                              className="btn btn-secondary"
                              onClick={() => handleEditCategory(category)}
                            >
                              Sửa
                            </CButton>
                            <CButton
                              className="btn btn-secondary"
                              onClick={() => handleDeleteCategory(category._id)}
                            >
                              Xóa
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                )}
              </>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CategoryList
