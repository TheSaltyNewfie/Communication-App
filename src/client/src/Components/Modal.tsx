import React, { ReactNode } from 'react'
import "./Modal.css"

interface ModalProps {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content foreground" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <br></br> {/* TODO: Fix css to remove line breaks*/}
                <br></br>
                {children}
            </div>
        </div>
    )
}

export default Modal