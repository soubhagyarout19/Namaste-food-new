import { currentYear } from "./Constant";
const Footer = ()=>{
    return(
      <>
        <div className="footer">
            <h3>This is footer</h3>
            <p>&copy; {currentYear} SDR Private Limited. All rights reserved.</p>
        </div>
      </>
    )
  }

  export default Footer;