import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import { NavLink } from 'react-router-dom'
import { Toast, WingBlank, Button } from 'antd-mobile';

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
    showToast() {
        
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
        console.log(this.state.pickerValue)
    }
    componentDidMount(){
        const value3 = this.state.pickerValue;
        if (!value3) {
            return '';
        }
        const treeChildren2 = arrayTreeFilter(district, (c, level) => c.value3 === value3[level]);
        console.log(treeChildren2.map(v => v.label).join(','))
    }

    render() {
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
                            专业检索
                        </List.Item>
                    </Picker>
                </List>

                <div>{this.state.pickerValue}</div>
                <WingBlank>
                    <WhiteSpace />
                    <Button href={`${this.state.pickerValue.length === 0 ? "javascript:void(0)" : this.state.pickerValue[0] + this.state.pickerValue[1] + this.state.pickerValue[2]}`} onClick={() => {
                        if (this.state.pickerValue.toString() === '') {
                                Toast.info('请至少选择一项', 1)
                            }
                         }}>开始检索</Button>
                    <WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}

const PickerPlant = createForm()(Test);

export default PickerPlant