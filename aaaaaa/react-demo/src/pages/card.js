import React from "react";
import 'antd/dist/antd.css';
import './card.css';
import { Tag } from 'antd';
import { Divider } from 'antd';
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import DashOutlined from "@ant-design/icons/lib/icons/DashOutlined";
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { Input, Button } from 'antd';
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import LikeOutlined from "@ant-design/icons/lib/icons/LikeOutlined";
import ShareAltOutlined from "@ant-design/icons/lib/icons/ShareAltOutlined";

export default class Card extends React.Component {
    actions;
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className={'top1'}/>
                <div className={'top2'}>
                    <div className={'tu1'}><LeftOutlined/></div>
                    <div className={'tu2'}><DashOutlined/></div>
                </div>
                <div className={'top3'}>
                    <p className={'p1'}>震惊！中华文化博大精深</p>
                </div>
                <div className={'top4'}>
                    <div className={'tu3'}>
                        <Avatar icon={<UserOutlined />} />
                    </div>
                    <div>
                        <div className={'font1'}>17 岁</div>
                        <div className={'font1'}>昨天</div>
                    </div>
                    <div className={'tu4'}>
                        <button>+关注</button>
                    </div>
                </div>
                <div className={'top5'}>
                    <p className={'p2'}>向世界表达中国文化</p>
                </div>
                <div className={'top6'}>
                    <img src={[require("./img/zhogguo.png")]} width={'100%'} height={'100%'}/>
                </div>
                <div className={'top7'}>
                    <div>
                        <div>
                            <Tag color="magenta">magenta</Tag>
                            <Tag color="red">red</Tag>
                            <Tag color="volcano">volcano</Tag>
                        </div>
                    </div>
                </div>
                <div className={'top10'}>
                    <div className={'like'}>
                        <LikeOutlined />
                    </div>
                    <div className={'like'}>
                        <HeartOutlined />
                    </div>
                    <div className={'like'}>
                        <ShareAltOutlined />
                    </div>
                </div>
                <Divider/>
                <div className={'top8'}>
                    <Comment
                        actions={this.actions}
                        author={<a>Han Solo</a>}
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <p>
                                We supply a series of design principles, practical patterns and high quality design
                                resources (Sketch and Axure), to help people create their product prototypes beautifully
                                and efficiently.
                            </p>
                        }
                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                    />
                </div>
                <div className={'top9'}>
                    <Input placeholder="点击评论" />
                </div>
            </div>
        )
    }
}