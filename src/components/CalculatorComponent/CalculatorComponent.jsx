import { useState, useContext } from "react"
import { AccountContext } from "../../context/AccountContext";
import SelectMathOption from "../SelectMathOption/SelectMathOption";
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography} from 'antd';
import './CalculatorComponent.css'

const { Text } = Typography;

const CalculatorComponent = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('required');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const { defaultAccount, usageOnCount } = useContext(AccountContext)

  return (
      <Form
        className="main-form"
        form={form}
        layout="vertical"
        initialValues={{
          requiredMarkValue: requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
    >

      <Form.Item label="A number" required tooltip="This is a field for the second number">
        <Input placeholder="Digit a" />
      </Form.Item>

      <SelectMathOption />
      <Form.Item
        required
        style={{ marginTop: '15px' }}
        label="B number"
        tooltip={{
          title: 'This is a field for the second number',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="Digit b" />
      </Form.Item>

      <Form.Item
        required
        label="Result number"
        tooltip={{
          title: 'This field showing result of your operation',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="Result" />
      </Form.Item>
      <Form.Item>
        {
          defaultAccount !== 'no address specified' 
          ? 
          <Button type="primary"> Calculate </Button> 
          : 
          <Button type="primary" disabled> Calculate </Button>
        }
      </Form.Item>
       { defaultAccount !== 'no address specified' ? <Text type="danger">Calculator used: { usageOnCount } </Text> : null } 
    </Form>
  )
};

export default CalculatorComponent
