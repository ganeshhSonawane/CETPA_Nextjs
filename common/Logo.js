import React from "react";
import Image from "next/image";

const Logo = () => {
    return(
        <div className="col-2 bg-light">
           <Image src="/logo.png" alt={"logo"} width={150} height={100} />
        </div>
    )
}

export default Logo;
