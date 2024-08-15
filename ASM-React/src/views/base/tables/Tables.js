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
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Tables = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')
  const [editError, setEditError] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const API_URL_CATEGORIES = 'http://localhost:4000/api/categories'
  const API_URL = 'http://localhost:4000'

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URL_CATEGORIES)
        setCategories(response.data)
      } catch (error) {
        console.error('Failed to fetch categories:', error)
        setError('Failed to fetch categories: ' + error.message)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/product`)
        setProducts(response.data)
      } catch (err) {
        setError('Failed to fetch products: ' + err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Bạn có chắc là xóa sản phẩm không?')) {
      try {
        await axios.delete(`${API_URL}/api/product/${id}`)
        setProducts(products.filter((product) => product._id !== id))
        setSuccessMessage('Sản phẩm đã được xóa thành công!')
      } catch (err) {
        setError('Failed to delete product: ' + err.message)
      }
    }
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setImagePreview(product.img) // Set the initial image preview
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFormSubmit = async (values, { setSubmitting }) => {
    const formData = new FormData()
    formData.append('title', values.title)
    formData.append('category', values.category)
    formData.append('price', values.price)
    formData.append('description', values.description)

    if (values.image) {
      formData.append('image', values.image)
    }

    try {
      const response = await axios.put(`${API_URL}/api/product/${editingProduct._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      setProducts(
        products.map((prod) =>
          prod._id === editingProduct._id ? { ...prod, ...values, img: response.data.img } : prod,
        ),
      )
      setEditingProduct(null)
      setSuccessMessage('Sản phẩm đã được cập nhật thành công!')
      setEditError('')
    } catch (err) {
      setEditError('Failed to update product: ' + err.message)
    } finally {
      setSubmitting(false)
    }
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Tên sản phẩm là bắt buộc'),
    category: Yup.string().required('Loại sản phẩm là bắt buộc'),
    price: Yup.number().required('Giá là bắt buộc').positive('Giá phải là số dương'),
    description: Yup.string().required('Mô tả là bắt buộc'),
    image: Yup.mixed().nullable(),
  })

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Danh sách sản phẩm</strong>
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
                {editingProduct ? (
                  <Formik
                    initialValues={{
                      title: editingProduct.title,
                      category: editingProduct.category,
                      price: editingProduct.price,
                      description: editingProduct.description,
                      image: null,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                  >
                    {({ setFieldValue, isSubmitting, errors, touched }) => (
                      <Form>
                        <div className="mb-3">
                          <CFormLabel htmlFor="title">Tên sản phẩm</CFormLabel>
                          <Field
                            name="title"
                            type="text"
                            id="title"
                            placeholder="Nhập tên sản phẩm..."
                            className={`form-control ${errors.title && touched.title ? 'is-invalid' : ''}`}
                          />
                          <ErrorMessage name="title" component="div" className="invalid-feedback" />
                        </div>
                        <div className="mb-3">
                          <CFormLabel htmlFor="category">Loại sản phẩm</CFormLabel>
                          <Field
                            as="select"
                            name="category"
                            id="category"
                            className={`form-control ${errors.category && touched.category ? 'is-invalid' : ''}`}
                          >
                            <option value="">Chọn loại sản phẩm</option>
                            {categories.map((category) => (
                              <option key={category._id} value={category.name}>
                                {category.name}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name="category"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="mb-3">
                          <CFormLabel htmlFor="price">Giá</CFormLabel>
                          <Field
                            name="price"
                            type="number"
                            id="price"
                            placeholder="Nhập giá sản phẩm..."
                            className={`form-control ${errors.price && touched.price ? 'is-invalid' : ''}`}
                          />
                          <ErrorMessage name="price" component="div" className="invalid-feedback" />
                        </div>
                        <div className="mb-3">
                          <CFormLabel htmlFor="description">Mô tả</CFormLabel>
                          <Field
                            name="description"
                            as="textarea"
                            id="description"
                            placeholder="Nhập mô tả sản phẩm..."
                            className={`form-control ${errors.description && touched.description ? 'is-invalid' : ''}`}
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="mb-3">
                          <CFormLabel htmlFor="image">Hình ảnh</CFormLabel>
                          <CFormInput
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={(event) => {
                              setFieldValue('image', event.currentTarget.files[0])
                              handleImageChange(event)
                            }}
                          />
                          {imagePreview && (
                            <div className="mt-2">
                              <img src={imagePreview} alt="Preview" width="100" />
                            </div>
                          )}
                        </div>
                        <div>
                          <CButton
                            type="submit"
                            className="btn btn-secondary"
                            disabled={isSubmitting}
                          >
                            Lưu
                          </CButton>
                          <CButton
                            onClick={() => setEditingProduct(null)}
                            className="btn btn-secondary"
                          >
                            Hủy
                          </CButton>
                        </div>
                      </Form>
                    )}
                  </Formik>
                ) : (
                  <CTable>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Tên sản phẩm</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Loại sản phẩm</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Hình ảnh</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Giá</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Mô tả</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Hành động</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {products.map((product, index) => (
                        <CTableRow key={product._id}>
                          <CTableDataCell>{index + 1}</CTableDataCell>
                          <CTableDataCell>{product.title}</CTableDataCell>
                          <CTableDataCell>{product.category}</CTableDataCell>
                          <CTableDataCell>
                            <img src={product.img} alt={product.title} width="100" />
                          </CTableDataCell>
                          <CTableDataCell>{product.price}</CTableDataCell>
                          <CTableDataCell>{product.description}</CTableDataCell>
                          <CTableDataCell>
                            <div>
                              <CButton
                                className="btn btn-secondary"
                                onClick={() => handleEditProduct(product)}
                              >
                                Sửa
                              </CButton>
                            </div>
                            <CButton
                              className="btn btn-secondary"
                              onClick={() => handleDeleteProduct(product._id)}
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

export default Tables
