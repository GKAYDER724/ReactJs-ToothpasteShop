import React, { useState } from 'react';
import { API_BASE_URL } from '../../api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // Trạng thái cho thông báo thành công

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Kiểm tra lỗi ngay khi người dùng thay đổi giá trị trong input
    validateField(e.target.name, e.target.value);
  };

  const validateField = (fieldName, value) => {
    let fieldErrors = { ...errors };

    // Kiểm tra từng trường riêng lẻ
    switch (fieldName) {
      case 'name':
        fieldErrors.name = value ? '' : 'Tên là bắt buộc.';
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        fieldErrors.email = emailPattern.test(value)
          ? ''
          : 'Email không hợp lệ.';
        break;
      case 'password':
        fieldErrors.password =
          value.length >= 6
            ? ''
            : 'Mật khẩu phải có ít nhất 6 ký tự.';
        break;
      case 'confirmPassword':
        fieldErrors.confirmPassword =
          value === formData.password
            ? ''
            : 'Mật khẩu và xác nhận mật khẩu không khớp.';
        break;
      default:
        break;
    }
    setErrors(fieldErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra lại toàn bộ form trước khi gửi
    if (validateForm()) {
      try {
        const response = await fetch(`${API_BASE_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Đăng ký thành công:', data);
          setErrors({});
          setSuccessMessage('Đăng ký thành công!'); // Thiết lập thông báo thành công
          // Bạn cũng có thể reset lại form nếu cần
          setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        } else {
          console.error('Đăng ký thất bại');
          setErrors({ form: 'Đăng ký thất bại, vui lòng thử lại.' });
        }
      } catch (error) {
        console.error('Lỗi kết nối:', error);
        setErrors({ form: 'Lỗi kết nối, vui lòng thử lại.' });
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    let fieldErrors = { ...errors };

    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (fieldErrors[field]) valid = false;
    });

    setErrors(fieldErrors);
    return valid;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Đăng ký</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Tên</label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                placeholder="Nhập tên"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                placeholder="Nhập email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                name="password"
                placeholder="Nhập mật khẩu"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
              <input
                type="password"
                className={`form-control ${
                  errors.confirmPassword ? 'is-invalid' : ''
                }`}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
            {errors.form && (
              <div className="alert alert-danger">{errors.form}</div>
            )}
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            <br></br>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Đăng ký
            </button>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
