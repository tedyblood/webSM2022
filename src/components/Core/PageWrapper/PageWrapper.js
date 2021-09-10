import React from "react";
import GlobalHeaderContext, { headerDefault } from "../../../context/GlobalHeaderContext";
import Link from "../Link";
import HeaderButton from "../Header/InnerPageHeader"

 const PageWrapper= ({ children, headerConfig = null, innerPage = false, innerPageFooter = false  })=> {  
    const innerPageDefault = {
        headerClasses:"light-header site-header--menu-end site-header--button-sep position-relative",
        containerFluid:false,
        darkLogo:true,
        buttonBlock:(<HeaderButton as={Link} btnText="Purchase"/>)
    }
    const activeHeader = ( innerPage ? innerPageDefault : headerDefault );  
  const sitectx = React.useContext(GlobalHeaderContext);
  
  React.useEffect(() => {
      sitectx.changeHeader({ ...activeHeader, ...headerConfig });
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
      {/* <Nav /> */}
      {children}
    </>
  )
}

export default PageWrapper;