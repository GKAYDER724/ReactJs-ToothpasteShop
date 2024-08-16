import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Tự động chuyển về trang chủ sau 1 giây
    const timer = setTimeout(() => {
      navigate('/');
    }, 1000);

    // Xóa bộ đếm giờ khi thành phần bị hủy
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-center text-3xl font-semibold text-green-600">Thanh toán thành công!</h2>
      <p className="text-center text-lg mt-4">Cảm ơn bạn đã mua hàng. Bạn sẽ được chuyển về trang chủ sau vài giây.</p>
    </div>
  );
};

export default PaymentSuccess;
