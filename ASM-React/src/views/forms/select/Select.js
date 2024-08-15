import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormLabel,
  CRow,
  CFormTextarea,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  title: Yup.string().required('Tiêu đề là bắt buộc'),
  image: Yup.mixed().required('Hình ảnh là bắt buộc'),
  content: Yup.string().required('Nội dung là bắt buộc'),
})

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
              <Formik
                initialValues={{
                  title: '',
                  image: null,
                  content: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // Handle form submission
                  console.log('Form data:', values)
                }}
              >
                {({ setFieldValue, errors, touched }) => (
                  <Form>
                    <div className="mb-3">
                      <CFormLabel htmlFor="title">Tiêu đề</CFormLabel>
                      <Field
                        name="title"
                        type="text"
                        id="title"
                        placeholder="Nhập tiêu đề..."
                        className={`form-control ${errors.title && touched.title ? 'is-invalid' : ''}`}
                      />
                      <ErrorMessage name="title" component="div" className="invalid-feedback" />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="image">Hình ảnh</CFormLabel>
                      <input
                        name="image"
                        type="file"
                        id="image"
                        className={`form-control ${errors.image && touched.image ? 'is-invalid' : ''}`}
                        onChange={(event) => {
                          setFieldValue('image', event.currentTarget.files[0])
                        }}
                      />
                      <ErrorMessage name="image" component="div" className="invalid-feedback" />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="content">Nội dung</CFormLabel>
                      <Field
                        name="content"
                        as="textarea"
                        id="content"
                        rows={3}
                        className={`form-control ${errors.content && touched.content ? 'is-invalid' : ''}`}
                      />
                      <ErrorMessage name="content" component="div" className="invalid-feedback" />
                    </div>
                    <CButton type="submit" color="secondary">
                      Thêm
                    </CButton>
                  </Form>
                )}
              </Formik>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Buttongroups
