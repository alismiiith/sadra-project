import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full bg-amber-300 ">
        <div className="flex flex-col  justify-center items-center bg-[#FFFFFF] w-[100%] top right lg:w-[50%]">
          <h1 className="text-[#252525] mt-[20px] font-bold text-[22px] lg:text-[35px]  ">
            ورود به حساب کاربری
          </h1>
          <form
            className="flex-col  my-10 flex justify-center gap-y-[5px] items-center pb-[140px] w-[100%] lg:w-[480px] h-[50vh]"
            action="post"
          >
            <label
              htmlFor="Name"
              className="flex w-full text-[14px] lg:text-[16px] text-[#757575] pr-[40px] justify-self-start"
            >
              نام کاربری یا ایمیل
            </label>
            <input
              className="w-[80%]  pb-1 leading-[30px]  border-b-2 border-gray-400"
              type="text"
              id="Name"
              name="Name"
            />
            <label
              htmlFor="password"
              className="flex w-full pr-[40px] mt-5 justify-self-start text-[14px] lg:text-[16px] text-[#757575]"
            >
              رمز عبور
            </label>
            <input
              className="w-[80%]  pb-1 border-b-2 border-gray-400"
              type="password"
              id="password"
              name="password"
            />{" "}
            <div className="flex translate-y-10 w-full items-center flex-row justify-between  px-10">
              <form action="" className="flex lg:px-5 items-center gap-2 lg:gap-5">
                <input className="lg:scale-150" type="checkbox" id="remember" name="remember" />
                <label className="text-[12px] lg:text-[16px]" htmlFor="remember">
                  مرا به خاطر بسپار
                </label>
              </form>
              <Link to={"/"} className="w-[110px] leading-[50px] flex justify-center  lg:w-[153px] lg:h-[56px]  h-[46px] rounded-4xl bg-[#4CA773]">
                <p className="text-[#FFFFFF] font-semibold ">ورود</p>
              </Link>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center gap-10 py-5 lg:py-20 loginback bg-[red] h-[100vh] w-[100%] buttom left lg:w-[50%]">
          <div className="flex flex-row gap-2 font-bold   items-center">
            <img className="lg:w-[100px]" src="/src/assets/Images/Group 1.svg" alt="" />
            <p className="text-[#FFFFFF] text-[30px] ">صدرا</p>
          </div>
          <img
            src="/src/assets/Images/Layer_2.png"
            className="w-[80%] lg:w-[50%] object-contain flex"
            alt=""
          />
          <p className="text-[25px] lg:text-[35px] text-[#FFFFFF] font-bold ">
            مؤسسه آموزشی و پژوهشی صدرا
          </p>
          <span className="text-[#D0D5DD] lg:text-[18px] lg:mx-20 text-[12px] block text-center mx-3">
            با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با
            بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی
            به بازار کار
          </span>
        </div> 
     
      </div>
    </>
  );
};

export default Login;
