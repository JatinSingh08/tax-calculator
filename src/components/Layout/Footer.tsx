import Image from "next/image";
import Xlogo from "@/assets/Xlogo.svg";
import Youtube from "@/assets/youtube.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Instagram from "@/assets/instagram.svg";
import Telegram from "@/assets/telegram.svg";
import FaceBook from "@/assets/facebook.svg";
import KoinxFooterLogo from "@/assets/KoinxFooterLogo.svg";
import userLogo from "@/assets/userLogo.svg"
import Certified from "@/assets/certification.svg"

const Footer = () => {
  return (
    <div className="flex flex-col px-[15px] py-[40px] bg-[--night-background-0] sm-2:px-[27px] md:px-[116px] md:py-[32px] ">
        <div className="flex flex-col justify-between gap-[32px] items-center h-[72px] md:flex-row md:gap-0 ">
          <Image
            src={KoinxFooterLogo}
            alt="KoinX Logo"
            width={136}
            height={34}
            className="h-[58px] md:h-[34px]"
          />
          <div className="flex gap-[10px] sm-2:gap-[28px] md:gap-[24px] h-[24px]">
            <Image src={Xlogo} alt="X Logo" width={24} height={24} />
            <Image src={Youtube} alt="Youtube Logo" width={24} height={24} />
            <Image src={LinkedIn} alt="LinkedIn Logo" width={24} height={24} />
            <Image src={Instagram} alt="Instagram Logo" width={24} height={24}/>
            <Image src={Telegram} alt="Telegram Logo" width={24} height={24} />
            <Image src={FaceBook} alt="Facebook Logo" width={24} height={24} />
            <Image src={userLogo} alt="Facebook Logo" width={24} height={24} />

          </div>
        </div>

      <hr className=" bg-[#FFFFFF33] h-[2px] border-none mt-[44px] md:mt-[12px]"/>

        <div className=" grid grid-cols-footer-mobile gap-x-[24px] gap-y-[35px] text-white mt-[32px]
                          md:mt-[35px] md:grid-cols-footer
                          lg:gap-[12px]
        ">
      
           <div className="flex flex-col gap-[16px] h-min">
              <h3 className="leading-[17px] font-bold">Crypto Taxes for</h3>
              <ul className="text-[14px] leading-[20px] flex flex-col gap-[12px] text-[#FFFFFFA6] md:gap-[19px] md:text-white md:text-[15px] md:leading-[17px]">
                 <li>Individuals and investors</li>
                 <li>Tax Professionals and Accountants</li>
                 <li>Exchanges and Web3 projects</li>
              </ul>
             
           </div>
 
            <div className="flex flex-col gap-[16px]">
                <h3 className="leading-[17px] font-bold">Free Tools</h3>
                <ul className="text-[14px] leading-[20px] flex flex-col gap-[12px] text-[#FFFFFFA6] md:gap-[19px] md:text-white md:text-[15px] md:leading-[17px]">
                   <li>Crypto Prices Live</li>
                   <li>Crypto Tax Calculator</li>
                   <li>Crypto Tax Saving Speculator</li>
                   <li>Crypto Profit Calculator</li>
                   <li>Crypto Converter</li>
                   <li>Crypto Staking ROI Calculator</li>
                </ul>
            </div>

            <div className="flex flex-col gap-[16px]">
                <h3 className="leading-[17px] font-bold">Resouce Center</h3>
                <ul className="text-[14px] leading-[20px] flex flex-col gap-[12px] text-[#FFFFFFA6] md:gap-[19px] md:text-white md:text-[15px] md:leading-[17px]">
                    <li>Crypto Tax Guides</li>
                    <li>Dumb Ways To Lose Money</li>
                    <li>Crypto Tax Savings Guide</li>
                    <li>Blogs</li>
                    <li>Crypto Buying Guides</li>
                    <li>Crypto Staking Guides</li>
                    <li>Crypto Mining Guides</li>
                    <li>Crypto Price Predictions</li>
                </ul>
            </div>

            <div className="flex flex-col gap-[16px] h-fit">
                <h3 className="leading-[17px] font-bold">Help And Support</h3>
                <ul className="text-[14px] leading-[20px] flex flex-col gap-[12px] text-[#FFFFFFA6] md:gap-[19px] md:text-white md:text-[15px] md:leading-[17px]">
                    <li>Product Guides</li>
                    <li>How To Guides</li>
                    <li>Templates</li>
                    <li>Contact us</li>
                </ul>
            </div>

            <div className="flex flex-col gap-[16px]">
                <h3 className="leading-[17px] font-bold">Company</h3>
                <ul className="text-[14px] leading-[20px] flex flex-col gap-[12px] text-[#FFFFFFA6] md:gap-[19px] md:text-white md:text-[15px] md:leading-[17px]">
                    <li>About Us</li>
                    <li>Backed by</li>
                    <li>Media and Press</li>
                    <li className="flex gap-[11.94px] items-center">Careers<span className="leading-[13px] font-semibold rounded-[2px] text-[11px] pt-[3px] pl-[8px] pr-[9.97px]  pb-[4.19px] bg-[#2997F980]">{"We're hiring"}</span></li>
                    <li>Security</li>
                    <li>Refund Policy</li>
                    <li>Brand Assets</li>
                    <li>Terms of use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <Image src={Certified} alt="Facebook Logo" width={140} height={140} />
            

        </div>

        <hr className=" bg-[#FFFFFF33] h-[2px] border-none mt-[32.8px]"/>

        <div className="leading-[17px] text-white text-center opacity-[0.65] text-[14px] md:text-[15px] mt-[31px] mb-[5px]">© All rights reserved by Simplify Infotech Pvt. Ltd.</div>

    </div>
  );
}

export default Footer
