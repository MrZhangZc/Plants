/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.2
 * Version: 1.0.1
 * Description: 介绍页面
**/
import React, { Component } from 'react'

import './introduction.sass'
import Header from '@components/ContentHeader/content-header'
import data from './data'

class Introduction extends Component{
    
    constructor(props){
        super(props)
        this.state = { value: '' }
    }
    
    render(){
        return(
            <div className="introduction">
                <Header title="简介" />
                <div className="in-middle">
                    <p className="introductionp"> 为了更加便捷的服务于水土保持与与荒漠化防治专业三年级综合实习中植物分类学、植物资源学所需要的野外沙生植物识别与查询，以及实习过程中快速认识和了解沙地植物的形态特征、生态习性、分布范围和相关用途等方面的学习与实践教学，特制作本APP来辅助教学。就方便性而言，该APP实现了磴口沙地植物32科127属、147种植物全方位的快速查询。在软件设定方面，具体包括综合实习识别软件设计首页1个，植物识别和识别结果界面500余个，帮助页面1个、植物名称简单查询界面1个。其中极具价值的是植物形态图片，目前已涵盖400余张植物具体形态图。就创新性而言，该软件异于同类软件，具有极高的专一性和准确性，除此之外该软件是目前已知基于二岐检索方法的植物识别手机应用软件，其优越性不言而喻。就实用性而言，在识别过程中，该软件采用图片+简练文字的描述方法，其内容生动直观，专业性更强。从可操作性上讲，此款软件查询快速，使用简单方便，安卓手机即可下载使用。其优点在于无需网络，即装即用，非常适合野外使用。就适用性而言，在该APP的基础上，可开发我校植物学、植物分类学、树木学、园林树木学、花卉学、植物资源学、城乡绿化植物及配置等课程的各类植物识别软件。在信息化教学时代下，我们要利用先进的技术手段整合并丰富教学资源，为教研发展助力。在软件编写过程中感谢新芽计算机协会（马秀东、廉泽昆、马嘉航、赵文健、侯佳、张鹏琦、刘欣悦、吴威、李国浩和周宇金）、白鹤、吴学敏、李峥、任红阳和张博同学给予的帮助。</p>
                    <p className="introduction-zzc">项目主要成员：</p>
                    <p className="introduction-zzc">{data.one}</p>
                    <p className="introduction-zzc">{data.two}</p>
                    <p className="introduction-zzc">{data.three}</p>
                    <p className="introduction-zzc">{data.four}</p>
                    <p className="introduction-zzc">{data.five}</p>
                    <p className="introduction-zzc">{data.six}</p>
                    <p className="introduction-zzc">{data.seven}</p>
                    <p className="introduction-zzc">{data.eight}</p>
                    <p className="introduction-zzc">{data.nine}</p>
                    <p className="introductionm">免责声明</p>
                    <p className="introductionp">（1）一切移动客户端用户在下载并浏览本APP软件时均被视为已经仔细阅本条款并完全同意。凡以任何方式登录本APP，或直接、间接使用本APP资料者，均视为自愿接受本网站相关声明和用户服务协议的约束。</p>
                    <p className="introductionp">2）用户明确并同意其使用APP网络服务所存在的风险将完全由其本人承担；因其使用APP网络服务而产生的一切后果也由其本人承担，手机APP对此不承担任何责任。</p>
                </div>
            </div>
        )
    }
}

export default Introduction