import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';

import { district, provinceLite } from './data';

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            pickerValue: [],
            visible: false,
        }
    }
    onClick() {
        setTimeout(() => {
            this.setState({
                data: provinceLite,
            });
        }, 120);
    };

    getSel() {
        const value = this.state.pickerValue;
        if (!value) {
            return '';
        }
        const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
        return treeChildren.map(v => v.label).join(',');
    }


    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <WhiteSpace size="lg" />
                <List style={{ backgroundColor: 'white' }} className="picker-list">
                    <Picker
                        visible={this.state.visible}
                        data={district}
                        value={this.state.pickerValue}
                        onChange={v => this.setState({ pickerValue: v })}
                        onOk={() => this.setState({ visible: false })}
                        onDismiss={() => this.setState({ visible: false })}
                    >
                        <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>
                            开始检索
                        </List.Item>
                    </Picker>
                </List>
            </div>
        )
    }
}

const PickerPlant = createForm()(Test);

export default PickerPlant