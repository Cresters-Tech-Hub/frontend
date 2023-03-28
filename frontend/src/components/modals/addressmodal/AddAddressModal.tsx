import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import "./addaddressmodal.scss";
import { AiOutlineClose } from "react-icons/ai";
import { nigeriaStatesAndLgas } from "./../../states/index";
import CustomCheckBox from "../../checkbox/CustomCheckBox";
import Button from "../../buttons";

interface Props {
    open: boolean;
    onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    houseNumber: string;
    streetAddress: string;
    city: string;
    state: string;
    contact: string;
    check: boolean;
    submit: boolean;
    setHouseNum: React.ChangeEventHandler<HTMLInputElement>;
    setStreetAddress: React.ChangeEventHandler<HTMLInputElement>;
    setContact: React.ChangeEventHandler<HTMLInputElement>;
    setCity: React.ChangeEventHandler<HTMLSelectElement> | undefined;
    setState: React.ChangeEventHandler<HTMLSelectElement> | undefined;
    setCheck: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined;
    setSubmit: (value: React.SetStateAction<boolean>) => void;
    addToAddress:((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const AddAddressModal = ({
    onClose,
    open,
    setCheck,
    setCity,
    submit,
    setStreetAddress,
    city,
    setState,
    setSubmit,
    setHouseNum,
    setContact,
    houseNumber,
    streetAddress,
    contact,
    check,
    state,
    addToAddress
}: Props) => {
    const getLgas = (useState: string) => {
        const data = nigeriaStatesAndLgas.filter((item) => item.state === useState);

        return [...data.map((item) => item.lgas)];
    };

    const verifyInput=()=>{
        if(!isNaN(Number(houseNumber)) && streetAddress.trim().length > 7 && !isNaN(Number(contact)) && contact.length === 11 ) return true;
        return false
    }

    useEffect(() => {
        if (verifyInput()) {
            setSubmit(true);
        } else {
            setSubmit(false);
        }
    }, [houseNumber, streetAddress, contact]);
    return (
        <Modal open={open} onClose={onClose}>
            <div className="address_modal">
                <div className="address_container">
                    <div className="address_modal_close">
                        <div></div>
                        <div onClick={() => onClose!("backdropClick", "escapeKeyDown")}>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="add_address_content">
                        <div className="title">Add New Address</div>
                        <div className="add_address_input_items">
                            <div className="add_address_input">
                                <input
                                    placeholder="House Number"
                                    value={houseNumber}
                                    onChange={setHouseNum}
                                />
                                <input
                                    placeholder="Contact Number"
                                    value={contact}
                                    onChange={setContact}
                                />
                            </div>
                            <div className="add_address_input">
                                <select placeholder="State" value={state} onChange={setState}>
                                    {nigeriaStatesAndLgas.map(({ state }, i) => (
                                        <option key={i}>{state}</option>
                                    ))}
                                </select>
                                <select placeholder="City" value={city} onChange={setCity}>
                                    {getLgas(state).map((lgas, i) => {
                                        return lgas.map((lg, id) => <option key={id}>{lg}</option>);
                                    })}
                                </select>
                            </div>
                            <div className="add_address_input full_address">
                                <input
                                    placeholder="Street Address"
                                    value={streetAddress}
                                    onChange={setStreetAddress}
                                />
                            </div>
                        </div>
                        <div className="agreeTerms">
                            <CustomCheckBox
                                check={check}
                                onChange={setCheck}
                                name="Set as primary address"
                                value="Set as primary address"
                            />
                            <span className="span">Set as primary address</span>
                        </div>
                        <div className="btn">
                            <Button
                                text="Save Address"
                                type="submit"
                                variant="md"
                                style={{
                                    fontSize: "16px",
                                    background: submit ? "#06c149" : "#eeeeee",
                                    color: submit ? "#fff" : "#424242"
                                }}
                                onClick={addToAddress}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AddAddressModal;
