import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function confirm(text: string, onOk: () => void, onCancel?: () => void) {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: text,
    okText: 'Yes',
    cancelText: 'Cancel',
    onOk,
    onCancel,
  });
}

export default confirm;
