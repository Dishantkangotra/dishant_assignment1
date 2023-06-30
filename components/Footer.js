import Image from "next/image";
const Footer = () => {
    return <div className=" flex justify-center" style={{ backgroundImage: "linear-gradient(180deg, #1FB3A5 0%, #18A1A7 100%)", height:'100%' , maxWidth:'100%'}}>
     <Image 
      src="/images/Footer.png"
      alt="footer_img"
       height={500}
       width={1150}
     />
     </div> 
}
export default Footer;