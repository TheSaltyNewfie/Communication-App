import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ResetPage = () => {

    return (
        <div className='modal show' style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Test</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Test body</p>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary'>Close</Button>
                    <Button variant='primary'>Save Changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )

}

export default ResetPage
