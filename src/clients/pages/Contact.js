import Herotext from "../components/Herotext";
const Contact = () => {
  const couses = [
    {
      title: "Tư vấn",
      desc: " Hỗ trợ tư vấn tận tình cho mọi khách hàng. Đội ngũ bán hàng của chúng tôi tận tâm cung cấp dịch vụ tốt nhất cho khách hàng",
      phn: "1800 123 4567",
    },
    {
      title: "Khiếu nại",
      desc: "Chúng tôi coi trọng sự hài lòng của khách hàng và cố gắng giải quyết mọi khiếu nại một cách kịp thời và hiệu quả",
      phn: "1800 123 4567",
    },
    {
      title: "Đổi trả",
      desc: "Dễ dàng đổi trả nếu như không hài lòng hoặc có bất kỳ vấn đề gì về sản phẩm. ",
      phn: "1800 123 4567",
    },
    {
      title: "Tiếp thị",
      desc: "Nhóm tiếp thị của chúng tôi hợp tác với các doanh nghiệp để giúp họ phát triển và thành công",
      phn: "1800 123 4567",
    },
  ];
  return (
    <section>
      <Herotext textt="Liên hệ với chúng tôi" />
      <div className="py-16 ">
        <h2 className="text-5xl text-gray-700 font-semibold text-center pb-5 ">
          Chúng tôi ở đây để giúp bạn
        </h2>
        <div className="flex w-[85%] mx-auto gap-5  py-10 px-0">
          {couses &&
            couses.map((cause) => {
              return (
                <div className="text-center bg-gray-50 rounded-lg flex flex-col gap-3 py-10 px-5">
                  <h3 className="text-gray-900 font-semibold text-2xl">
                    {cause.title}
                  </h3>
                  <p className="text-lg text-gray-700">{cause.desc}</p>
                  <p className="text-sky-500 font-semibold text-xl">
                    {cause.phn}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
