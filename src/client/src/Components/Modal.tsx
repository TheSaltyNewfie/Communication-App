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
                {children}
            </div>
        </div>
    )
}

export default Modal