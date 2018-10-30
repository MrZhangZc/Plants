import React from 'react'

import './introduction.sass'

import Header from '@components/ContentHeader/content-header'
import inimg from '@images/img.jpg'

class Introduction extends React.Component{
    render(){
        return(
            <div className="introduction">
                <Header title="简介" />
                <div className="in-middle">
                    <div className="inimage" style={{ backgroundImage: `url(${inimg})` }}></div>
                    <p className="author introduction-zzc">作者：<span className="span">张智超</span></p>
                    <p className="jishu introduction-zzc">技术栈：<span className="span">typescript react antd</span></p>
                    <p className="github introduction-zzc">GITHUB: <span className="span"><a href="https://github.com/MrZhangZc/plaantsTS">github</a></span></p>
                    <p className="blog introduction-zzc">BLOG: <span className="span"><a href="http://blog.lihailezzc.com">博客</a></span></p>
                </div>
            </div>
        )
    }
}

export default Introduction