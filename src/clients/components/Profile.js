import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../api';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Giả sử bạn lưu trữ token trong localStorage
        const token = localStorage.getItem('authToken');

        if (!token) {
        navigate('/login'); // Chuyển hướng tới trang đăng nhập nếu chưa đăng nhập
        } else {
        fetchUserProfile(token);
        }
    }, [navigate]);

    const fetchUserProfile = async (token) => {
        try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Không thể tải thông tin người dùng');
        }

        const data = await response.json();
        setUser(data);
        } catch (error) {
        console.error('Lỗi khi tải thông tin người dùng:', error);
        setErrors('Không thể tải thông tin người dùng.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Xóa token khi đăng xuất
        navigate('/login'); // Chuyển hướng tới trang đăng nhập
    };

    if (!user) {
        return <div>Đang tải thông tin...</div>;
    }

    return (
        <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
        <div className="card shadow-sm">
            <div className="card-body">
            <h3 className="card-title text-center text-primary mb-4">
                Thông tin tài khoản
            </h3>
            {errors && (
                <div className="alert alert-danger text-center">
                {errors}
                </div>
            )}
            <div className="text-center mb-4">
                <img 
                src="https://phuongtanphuoc.gov.vn/wp/vietnam/anhdepvietnam%20(21).jpg" 
                alt="Profile" 
                className="rounded-circle img-fluid" 
                />
            </div>
            <p><strong>Tên:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button className="btn btn-primary btn-block" onClick={handleLogout}>
                Đăng xuất
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>

    );
};

export default Profile;
