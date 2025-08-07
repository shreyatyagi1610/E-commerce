// import React from 'react'

export default function ImageValidator(e) {
    let { files } = e.target
    if (files.length === 0)
        return "Pic is Mandatory"
    else if (files.length === 1) {
        let pic = files[0]
        if (!(pic.type === "image/jpeg" || pic.type === "image/jpg" || pic.type === "image/png" || pic.type === "image/gif"))
            return "Invalid Pic, Please upload an image with(.jpg,.jpeg,.png,.gif)"
        else if (pic.size > 1048576)
            return "Pic Size is too high Please upload an image upto 1MB"
        else
            return ""
    }
    else {
        let pics = Array.from(files)
        let errormessage = []
        pics.forEach((pic, index) => {
            if (!(pic.type === "image/jpeg" || pic.type === "image/jpg" || pic.type === "image/png" || pic.type === "image/gif"))
                errormessage.push(`Invalid Pic${index + 1}, Please upload an image with(.jpg,.jpeg,.png,.gif)`)
            else if (pic.size > 1048576)
                errormessage.push(`Pic Size ${index+1}is too high Please upload an image upto 1MB`)
        })
        return errormessage.length === 0 ? "" : errormessage.join(" | ")
    }

}

