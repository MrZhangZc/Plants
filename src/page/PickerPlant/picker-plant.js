/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.22
 * Version: 2.0.0
 * Description: picker页面(植物查询)
**/
import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import { Picker, List, WhiteSpace, Toast, WingBlank, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

import Header from '@components/ContentHeader/content-header'

import API from '@date/plant'
import { plant } from './data';

import './picker-plant.sass'


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pickerValue: [],
            visible: false,
            ke:'',
            zhong:'',
            shu: ''
        }
    }


    componentDidUpdate(){
        // let result = this.state.pickerValue[0] + this.state.pickerValue[1] + this.state.pickerValue[2]
        // if(result){
        //     console.log(result)
        // }
    }

    render() {
        return (
            <div>
                <Header title="植物查询"/>
                <WhiteSpace size="lg" />
                <List style={{ backgroundColor: 'white' }} className="picker-list">
                    <Picker
                        visible={this.state.visible}
                        data={plant}
                        value={this.state.pickerValue}
                        onChange={v => this.setState({ pickerValue: v })}
                        onOk={() => this.setState({ visible: false })}
                        onDismiss={() => this.setState({ visible: false })}
                    >
                        <List.Item  onClick={() => this.setState({ visible: true })}>
                            专业检索
                        </List.Item>
                    </Picker>
                </List>

                <WingBlank>
                    <WhiteSpace />
                    <Button type="primary" href={`/#/plant/${this.state.pickerValue[0]}`} className={`${this.state.pickerValue.length === 0 ? 'zzc' : 'hm'}`}>{`查看${API.allke().map(i => {
                        let result = this.state.pickerValue[0]
                        if(i.id === result){
                            return i.name
                        }
                    }).join('')}`}</Button>
                    <Button type="primary" href={`/#/plant/${this.state.pickerValue[0] + this.state.pickerValue[1]}`} className={`${this.state.pickerValue.length === 0 ? 'zzc' : 'hm'}`}>{`查看${API.allshu().map(i => {
                        let result = this.state.pickerValue[0] + this.state.pickerValue[1]
                        if (i.id === result) {
                            return i.name
                        }
                    }).join('')}`}</Button>
                    <Button type="primary" className= 'hm' href={`${this.state.pickerValue.length === 0 ? "javascript:void(0)" : `/#/plant/${this.state.pickerValue[0] + this.state.pickerValue[1] + this.state.pickerValue[2]}`}`} onClick={() => {
                        if (this.state.pickerValue.toString() === '') {
                            Toast.info('请至少选择一项', 1) 
                            }
                    }}>{`${`${this.state.pickerValue.length === 0 ? '开始检索' : `查看${API.allzhong().map(i => {
                        let result = this.state.pickerValue[0] + this.state.pickerValue[1] + this.state.pickerValue[2]
                        if (i.id === result) {
                            return i.name
                        }
                    }).join('')}` }`}`}</Button>
                    <WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}

const PickerPlant = createForm()(Test);

export default PickerPlant