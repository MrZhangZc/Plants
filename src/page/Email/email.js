/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.2
 * Version: 0.1.1
 * Description: 提意见页面
**/
import React, { Component } from 'react'
import { List, InputItem } from 'antd-mobile';

import './email.sass'

import Header from '@components/ContentHeader/content-header'
import inimg from '@images/img.jpg'

class Email extends Component {
    constructor(props){
        super(props)
        this.state = { value: '' }
    }
    handleChange(event) {
　　　　this.setState({ value: event.target.value }); //用户输入值是改变状态里面存放的值
    }

    handleSubmit(event) {
　　　　event.preventDefault(); //阻止表单默认提交
        console.log(this.props.form)
    }
    render() {
        return (
            <div className="introduction">
                <Header title="我要提议" />
                <form action="#" method='post' onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)}/>
                    <input type='submit'/>
　　　　　　　　</form>
            </div>
        )
    }

    componentDidMount(){
        // let name = req.body.name
        // let email = req.body.email
        // let content = req.body.content

        // function sendEmail() {
        //     let transporter = nodemailer.createTransport({
        //         service: 'qq',
        //         auth: {
        //             user: '1761997216@qq.com',//user: 'jiayouzzc@126.com',	//   
        //             pass: 'qgwknnbtqrzvgjic'//pass: 'kobe241298'// 
        //         }
        //     })

        //     var mailOptions = {
        //         from: '1761997216@qq.com', // 发送者  
        //         to: 'jiayouzzc@126.com', // 接受者,可以同时发送多个,以逗号隔开  
        //         subject: `博客 留言`, // 标题  
        //         //text: 'Hello world', // 文本  
        //         html: `
        //         <p>姓名:</p><p>${name}</p>
        //         <p>邮箱:</p><p>${email}</p>
        //         <p>留言内容:</p><p>${content}</p>
        //     `
        //     }

        //     transporter.sendMail(mailOptions, function (err, info) {
        //         if (err) {
        //             console.log(err);
        //             return;
        //         }

        //         console.log('发送成功');
        //     })
        // }
        // sendEmail()
        console.log('1111',this.state.content)
    }
}

export default Email