/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.2
 * Version: 1.0.2
 * Description: picker页面(形态术语)
**/
import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import { Picker, List, WhiteSpace, Toast, WingBlank, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

import Header from '@components/ContentHeader/content-header'

import API from '@date/plant'
import { district } from './data';

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pickerValue: [],
            visible: false,
        }
    }


    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <Header title="形态术语" />
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
                        <List.Item onClick={() => this.setState({ visible: true })}>
                            形态术语
                        </List.Item>
                    </Picker>
                </List>

                <WingBlank>
                    <WhiteSpace />
                    <Button type="primary" className='hm' href={`${this.state.pickerValue.length === 0 ? "javascript:void(0)" : `/#/plant/${this.state.pickerValue[0] + this.state.pickerValue[1] + this.state.pickerValue[2]}`}`} onClick={() => {
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