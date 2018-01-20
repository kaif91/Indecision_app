import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose = {props.handleClearOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal">
    <h3 className="modal__title">Selected Options</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button className="modal__body" onClick={props.handleClearOption}>OK</button>
    </Modal>
);

export default OptionModal;