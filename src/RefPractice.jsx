import React, {useRef} from "react";

const RefPractice = () => {
    const userNameRef = useRef()
    console.log("userName ref is", userNameRef)
    

    return <div>
        <input name="Username" type="text" ref={userNameRef} />
        <h1>Hello {userNameRef?.current?.value}</h1>
    </div>
}

export default RefPractice