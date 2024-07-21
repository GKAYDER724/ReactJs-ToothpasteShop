import Whyme from "../components/Whyme";
import Herotext from "../components/Herotext";
import OurTeam from "../components/OurTeam";
const About = () => {
  return (
    <>
      <Herotext textt="Về chúng tôi" />
      <section className=" bg-gray-50 py-20 px-20 ">
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl font-semibold text-gray-700">
                Chúng tôi là ai?
              </h1>
              <p className="text-lg text-gray-700">
                Chúng tôi là một nhóm gồm những cá nhân đam mê cam kết cung cấp
                sản phẩm chất lượng cao và dịch vụ khách hàng đặc biệt. Sứ mệnh của chúng tôi
                là làm cho mọi người có thể tiếp cận với chất lượng sản phẩm và dịch vụ tốt nhất bất kể
                họ đang ở đâu trên thế giới. Hãy cùng chúng tôi mua sắm và trải nghiệm
                dịch vụ tận tâm và lấy khách hàng làm trung tâm.
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-[80%] mx-auto"
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="team img"
            />
          </div>
        </div>
      </section>
      <OurTeam />
      <Whyme />
    </>
  );
};

export default About;
