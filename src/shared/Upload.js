import React, { useRef } from "react";
import styled from "styled-components";
import { Button } from "../elements";
import { storage } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
    const dispatch = useDispatch();
    const is_uploading = useSelector((state) => state.image.uploading);
    const fileInput = useRef();

    const selectFile = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.files[0]);

        // console.log(fileInput.current.files[0])

        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            // console.log(reader.result)
            dispatch(imageActions.setPreview(reader.result));
        }
    }

    const UploadFB = () => {
        let image = fileInput.current.files[0];
        dispatch(imageActions.uploadImageFB(image));
    }

    return (
        <React.Fragment>
            <input type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading}/>
            <ButtonSt>
                <Button text="업로드하기" onClick={UploadFB}></Button>
            </ButtonSt>
        </React.Fragment>
    )
}

const ButtonSt = styled.div`
  display: flex;
  flex-direction: column;
`
export default Upload;