// FormControl.js
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormLabel,
  CRow,
  CSpinner,
  CAlert,
} from '@coreui/react'

// Validation schema using Yup
const validationSchema = Yup.object({
  title: Yup.string().required('Tên sản phẩm là bắt buộc'),
  category: Yup.string().required('Loại sản phẩm là bắt buộc'),
  price: Yup.number().required('Giá là bắt buộc').positive('Giá phải là số dương'),
  description: Yup.string(),
  img: Yup.mixed().required('Hình ảnh là bắt buộc'),
})

const FormControl = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const API_URL_CATEGORIES = 'http://localhost:4000/api/categories'
  const API_URL_PRODUCT = 'http://localhost:4000/api/product'

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URL_CATEGORIES)
        setCategories(response.data)
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thêm sản phẩm</strong>
          </CCardHeader>
          <CCardBody>
            {successMessage && <CAlert color="success">{successMessage}</CAlert>}
            {errorMessage && <CAlert color="danger">{errorMessage}</CAlert>}
            <Formik
              initialValues={{
                title: '',
                category: '',
                price: '',
                description: '',
                img: null,
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                setLoading(true)
                const formData = new FormData()
                formData.append('title', values.title)
                formData.append('category', values.category)
                formData.append('price', values.price)
                formData.append('description', values.description)
                if (values.img) {
                  formData.append('img', values.img)
                }

                try {
                  const response = await axios.post(API_URL_PRODUCT, formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  })
                  setSuccessMessage('Sản phẩm đã được thêm thành công!')
                  setErrorMessage('')
                  resetForm()
                } catch (error) {
                  console.error('Failed to add product:', error.response?.data || error.message)
                  setErrorMessage(
                    `Failed to add product: ${error.response?.data?.message || error.message}`,
                  )
                } finally {
                  setLoading(false)
                }
              }}
            >
              {({ errors, touched, setFieldValue }) => (
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
                    <ErrorMessage name="category" component="div" className="invalid-feedback" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="img">Hình ảnh</CFormLabel>
                    <input
                      name="img"
                      type="file"
                      id="img"
                      className={`form-control ${errors.img && touched.img ? 'is-invalid' : ''}`}
                      onChange={(event) => {
                        setFieldValue('img', event.currentTarget.files[0])
                      }}
                    />
                    <ErrorMessage name="img" component="div" className="invalid-feedback" />
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
                      rows={3}
                      className={`form-control ${errors.description && touched.description ? 'is-invalid' : ''}`}
                    />
                    <ErrorMessage name="description" component="div" className="invalid-feedback" />
                  </div>
                  <CButton type="submit" color="secondary" disabled={loading}>
                    {loading ? <CSpinner component="span" size="sm" /> : 'Thêm'}
                  </CButton>
                </Form>
              )}
            </Formik>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormControl
