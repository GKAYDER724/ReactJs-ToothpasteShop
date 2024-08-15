import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormLabel,
  CRow,
  CAlert,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const validationSchema = Yup.object({
  categoryName: Yup.string().required('Tên loại sản phẩm là bắt buộc'),
})

const Buttongroups = () => {
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [categories, setCategories] = useState([])
  const API_URL = 'http://localhost:4000/api/categories'

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URL)
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
            <strong>Thêm loại sản phẩm</strong>
          </CCardHeader>
          <CCardBody>
            {successMessage && <CAlert color="success">{successMessage}</CAlert>}
            {errorMessage && <CAlert color="danger">{errorMessage}</CAlert>}
            <Formik
              initialValues={{
                categoryName: '',
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                try {
                  await axios.post(
                    API_URL,
                    { name: values.categoryName },
                    {
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    },
                  )
                  setSuccessMessage('Loại sản phẩm đã được thêm thành công!')
                  setErrorMessage('')
                  resetForm()

                  const response = await axios.get(API_URL)
                  setCategories(response.data)
                } catch (error) {
                  if (error.response) {
                    console.error('Response error data:', error.response.data)
                    setErrorMessage(
                      `Failed to add category: ${error.response.data.message || 'Unknown error'}`,
                    )
                  } else {
                    console.error('Request error:', error.message)
                    setErrorMessage(`Failed to add category: ${error.message}`)
                  }
                }
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-3">
                    <CFormLabel htmlFor="categoryName">Tên loại sản phẩm</CFormLabel>
                    <Field
                      name="categoryName"
                      type="text"
                      id="categoryName"
                      placeholder="Nhập tên loại sản phẩm..."
                      className={`form-control ${errors.categoryName && touched.categoryName ? 'is-invalid' : ''}`}
                    />
                    <ErrorMessage
                      name="categoryName"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <CButton type="submit" color="secondary">
                    Thêm
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

export default Buttongroups
