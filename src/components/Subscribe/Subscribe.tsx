import Image from "next/image";
import Frame2 from "@/assets/Frame2.svg"

const Subscribe = () => {
    return (
        <div className="px-[165px] py-[137px] hidden lg:flex ">
            
         <div className="flex rounded-[16px] bg-[#0052FE] overflow-hidden gap-[83px] pt-[25px] pb-[27px] pl-[146px] pr-[89px]">
             
             <div className="">
                <Image
                  src={Frame2}
                  alt="Email Image"
                  className="w-[235px] h-[236px]"
                  />
             </div>

              <div className="flex flex-col justify-center gap-[32px]">
                  <p className="text-[28px] font-bold leading-[36px] text-white no-ligatures max-w-[557px]">
                    Stay up to date with latest crypto news and events. Subscribe to our newsletter
                  </p>
                  <div className="rounded-[5px] overflow-hidden">
                      <input 
                       type="email"
                        placeholder="Enter your email address" 
                        className="py-[14px] px-[16px] text-[14px] w-[248px] text-[#474A57] leading-[20px] outline-none"
                       />
                       <button className="py-[13px] px-[24px] text-grey1 text-[14px] font-semibold leading-[20px] rounded-e-[5px] bg-[#FFB800] border border-white">
                        Subscribe
                       </button>
                  </div>
             </div>
         </div>

        </div>
    );
}

export default Subscribe;