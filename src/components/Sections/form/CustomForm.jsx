import React, {useState} from "react";
import styled from "styled-components";
import Service from "../../../services/Service";
import SuccessAlert from "../../alerts/SuccessAlert";
import ErrorAlert from "../../alerts/ErrorAlert";
import Markdown from "../../Elements/Markdown";

export default function CustomForm({title, productTitle, subtitle}) {
    const [openSuccess, setOpenSuccess] = useState(false)
    const [openError, setOpenError] = useState(false)
    const [formValue, setFormValue] = useState({
        product: productTitle,
        name: "",
        phone: "",
        email: "",
        comment: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const sendFormValue = async () => {
        let res = await new Service().sendEmail(formValue);
        if (res.status === 200) {
            setOpenSuccess(true);
            setTimeout(() => setOpenSuccess(false), 4000)
        } else {
            setOpenError(true);
            setTimeout(() => setOpenError(false), 8000)
        }
        setFormValue((prevState) => {
            return {
                ...prevState,
                name: "",
                phone: "",
                email: "",
                comment: ""
            };
        });
    }
    return (
        <>
            <HeaderInfo>
                <h1 className="font40 extraBold">{title}</h1>
                <p className="font18">
                    <Markdown>{subtitle}</Markdown></p>
            </HeaderInfo>
            <SuccessAlert open={openSuccess} setOpen={setOpenSuccess}/>
            <ErrorAlert open={openError} setOpen={setOpenError}/>
            <Form>
                <label className="font13" hidden={formValue.product===""}>Назва продукту</label>
                <input type="text" id="product"
                       name="product" className="font20 extraBold"
                       value={formValue.product}
                       hidden={formValue.product===""}
                       disabled
                />
                <label className="font13">Ім'я</label>
                <input type="text" id="name" name="name"
                       className="font20 extraBold"
                       style={{color: 'black'}}
                       value={formValue.name}
                       onChange={handleChange}
                />
                <label className="font13">Номер телефону:</label>
                <input type="text" id="email" name="phone"
                       className="font20 extraBold"
                       value={formValue.phone}
                       onChange={handleChange}
                />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email"
                       required className="font20 extraBold"
                       value={formValue.email}
                       onChange={handleChange}
                />
                <label className="font13">Коментар:</label>
                <textarea rows="4" cols="50"
                          name="comment"
                          id="comment"
                          className="font20 extraBold"
                          value={formValue.comment}
                          onChange={handleChange}
                />
            </Form>
            <SumbitWrapper className="flex">
                <input type="submit" value="Надіслати"
                       className="formBtn pointer animate radius8"
                       style={{maxWidth: "220px", marginBottom: '250px'}}
                       disabled={formValue.name === "" || formValue.phone === ""}
                       onClick={async () => await sendFormValue()}
                />
            </SumbitWrapper>
        </>
    );
}

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const Form = styled.form`
  padding: 30px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
    color: black;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;







