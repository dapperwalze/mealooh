import React from 'react';
import { Modal, Button } from 'antd';

const ModalComponent = ({isModal}) => {
   // const [isModalVisible, setIsModalVisible] = useState(false);


    return (
        <>
            <Modal title="Basic Modal" visible={isModal} onOk={()=>{}} onCancel={()=>{}}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default ModalComponent
