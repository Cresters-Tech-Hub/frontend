import React, { useState } from "react";
import "./setpayment.scss";
import { RxCaretLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import RadionBtn from "../radiobutton/RadionBtn";
import Button from "../buttons";
import AddAddressModal from "../modals/addressmodal/AddAddressModal";
import { toast } from 'react-toastify'
import RegModal from "../modals/regmodal";

const SetAddressAndPayment = () => {
    const [houseNumber, setHouseNumber] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("Agege");
    const [state, setState] = useState("Lagos");
    const [contact, setContact] = useState("");
    const [check, setCheck] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [completePayment, setCompletePayment] = useState(false);

    const handleCloseCompletePaymentModal=()=>setCompletePayment(false);

        const options = {
          autoClose: 1000,
          type: toast.TYPE.SUCCESS,
          hideProgressBar: true,
          position: toast.POSITION.TOP_CENTER,
          pauseOnHover: true,
          progress: 0.2,
          style: {
            color: '#444042',
            background: '#F2FDF5',
            border: '1px solid #A2DBBD',
            borderRadius:"12px",
            fontFamily:"Work Sans, sans-serif",
            fontSize:"13px"
          },
          // and so on ...
        }
        const notify = () => toast('New Address Successfully Added!', options)

    const handlesetStreetAddress = (e: React.ChangeEvent<HTMLInputElement>) => setStreetAddress(e.target.value);

    const handlesetHouseNum = (e: React.ChangeEvent<HTMLInputElement>) => setHouseNumber(e.target.value);
    const handlesetContact = (e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value);

    const handleSetCity = (e: React.ChangeEvent<HTMLSelectElement>) => setCity(e.target.value);

    const handleCheck = () => setCheck(!check);

    const handlesetState = (e: React.ChangeEvent<HTMLSelectElement>) => setState(e.target.value);

    const [openAddressModal, setOpenAddressModal] = useState(false);

    const handleCloseAddressModal = () => setOpenAddressModal(false);

    const paymentMethod = [
        {
            id: 0,
            isSlected: true,
            title: "Payment on Delivery via Transfer",
            desc: "You can pay for your items to the delivery agent upon arrival via transfer"
        },
        {
            id: 1,
            isSlected: false,
            title: "Paystack",
            desc: "Pay easily, fast and secure through Paystack payment gateway"
        }
    ];

    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState("Payment on Delivery via Transfer");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSelectedValue(event.target.value);


    const openAddressModalFunc = () => setOpenAddressModal(true);


    const [useAddress, setUserAddress] = useState([
        {
            id: 0,
            name: "Primary",
            isPrimary: false,
            details: {
                address: " No 202, Itomori Street, Ajao Estate Road, Lagos",
                mobile: "(234) 9099882200"
            }
        }
    ]);

    const verifyInput1=()=>{
        if(!isNaN(Number(houseNumber)) && streetAddress.trim().length > 7 && !isNaN(Number(contact)) && contact.length === 11 ) return true;
        return false
    }

    const addNewAddressToList = () => {
        let newData = {
            id: Math.random() * 10,
            name: "Address",
            isPrimary: check,
            details: {
                address: `No ${houseNumber}, ${streetAddress}, ${city}, ${state}`,
                mobile: `(234) ${contact.slice(1)}`
            }
        };
        setUserAddress([...useAddress, newData]);
        verifyInput1();
        setHouseNumber("")
        setStreetAddress("")
        setContact("")
        setCheck(false)
        setSubmit(false)
        handleCloseAddressModal();
        notify()
    };

  const handleCompletePayment=()=>{
    if(selectedValue.length > 0) setCompletePayment(true);
    else setCompletePayment(false);
  }


    return (
        <div className="setAddressAndPayment">
            <div className="continue_shopping" onClick={() => navigate("/dashboard")}>
                <RxCaretLeft size={20} /> <span>Continue Shopping</span>
            </div>
            <div className="setAddress">
                <div className="setAddress_title">Set Address</div>
                {useAddress.map(({ name, details, isPrimary }, i) => (
                    <div
                        className="setAddress_content"
                        key={i}
                        style={{ border: isPrimary ? "2px solid #06c149" : "",  borderRadius:isPrimary ? "12px" : "", width:"43.5%"}}
                    >
                        <div className="primary">
                            <span>{name === "Primary" ? "Primary" : `${name} ${i + 1}`}</span>
                            <span>Edit</span>
                        </div>
                        <div className="address">{details.address}</div>
                        <div className="phone">{details.mobile}</div>
                    </div>
                ))}
                <div className="addNewAddress">
                    <div></div>
                    <div onClick={openAddressModalFunc}>
                        <AiOutlinePlus color="#06c149" />
                        <span>Add New Address</span>
                    </div>
                </div>
            </div>
            <div className="payment_method_container">
                <div className="payment_method_item">
                    <div className="payment_method_title">Payment Method</div>
                    {paymentMethod.map(({ id, title, desc, isSlected }) => (
                        <div
                            className="paymethod_option"
                            key={id}
                            style={{
                                border:
                                    selectedValue === title
                                        ? "2px solid #06c149"
                                        : "1px solid #CCCCCC"
                            }}
                        >
                            <RadionBtn
                                selectedValue={selectedValue}
                                option={title}
                                onSelect={handleChange}
                            />
                            <div className="paymethod_option_details">
                                <div className="title">{title}</div>
                                <div className="desc">{desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="btn">
                <Button
                    text="Complete Payment"
                    type="submit"
                    variant="md"
                    style={{ fontSize: "16px" }}
                    onClick={handleCompletePayment}
                />
            </div>
            <AddAddressModal
                open={openAddressModal}
                onClose={handleCloseAddressModal}
                city={city}
                state={state}
                setCheck={handleCheck}
                setCity={handleSetCity}
                submit={submit}
                setSubmit={setSubmit}
                setStreetAddress={handlesetStreetAddress}
                setState={handlesetState}
                check={check}
                houseNumber={houseNumber}
                streetAddress={streetAddress}
                contact={contact}
                setHouseNum={handlesetHouseNum}
                setContact={handlesetContact}
                addToAddress={addNewAddressToList}
            />
            <RegModal open={completePayment} onClose={handleCloseCompletePaymentModal} title="Order Placed 🎉" text="Thank you for your order! 
Please note: You will be notified upon verification of your payment, then your order will be processed subsequently."/>
        </div>
    );
};

export default SetAddressAndPayment;
