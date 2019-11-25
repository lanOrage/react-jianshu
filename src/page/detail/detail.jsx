import React,{Component}from 'react'
import {DetailWrapper,DetailHeader,DetailItem,Author,AuthorIcon,AuthorName,AuthorFollow} from './style'
import {withRouter} from 'react-router-dom'
import icon from "../home/img/logo.png"
import content from './swim.gif'

class Detail extends Component{
    componentDidMount(){
        // console.log(this.props.match.params.id)
        // 所以在这里后端即可根据传递过来的id去异步加载对应的文章
        // 通过action，把id传递给异步action中的axios函数路径中
    }
    render(){
        return (
            <DetailWrapper>
                <DetailHeader>编写python高质量python代码的59个有效方法</DetailHeader>
                <Author>
                    <AuthorIcon>
                        <img src={icon} alt="icon"/>
                    </AuthorIcon>
                    <AuthorName>作者名字</AuthorName>
                    <AuthorFollow>关注</AuthorFollow>
                    <p>
                        <span className="iconfont" style={{fontSize:16,color:'#ec7259'}}>&nbsp;&#xe64a;&nbsp;</span>
                        <span style={{color:'#ec7259',marginRight:10}}>4.12</span>
                        2019.11.24 08:59:39
                        字数 2,559
                        阅读 216</p>
                </Author>
                <DetailItem>
                    <img src={content} alt="content"/>
                    第1条:确认自己的python版本
                    <br/>
                    第2条:遵循PEP8的风格
                    <br/>
                    1.空格
                    <br/>
                    对于 占据多行的长表达式来说, 除了首行之外的其余各行都应该在通常的缩进级别上再加4个空格。
                    每行字符数不应该超过79。
                    2.命名
                    <br/>
                    受保护的实例属性命名， 应该以单个下划线开头， 例如：_leading_underscore。
                    私有属性的命名， 应该以双下划线开头，例如： __leading_underscore。
                    模块级别的常量，应该全部采用大写字母来拼写，各单词之间以下划线相连，例如：ALL_CAPS。
                    3.表达式和语句
                    <br/>
                    采用内联形式的否定词，而不是要把否定词放在整个表达式的前面，例如，应该写if a is not b 而不是 if not a is b。
                    不要通过检测长度的办法（如 if len(somelist) == 0) 来判断 somelist 是否为 [] 或 " 等空值， 而是应该采用 if not somelist 这种写法来判断， 它会假定：空值将自动评估为False。
                    检测 somelist 是否为[1]或'hi'等非空值时，也应该如此，if somelist 语句默认会把非空的值判断为True。
                    不要编写单行的 if 语句、for 循环、while 循环及 except 复合语句，而是应该把这些语句分成多行来书写，以示清晰。
                    import 语句应该总是放在文件开头。
                    引入模块的时候，总是应该使用绝对名称，而不应该根据当前模块的路径来使用相对名称。例如，引入bar包中的foo模块时，应该完整地写出from bar import foo，而不应该简写为import foo。
                    如果一定要以相对名称来编写import语句，那就采用明确的写法：from.import foo。
                    文件中那些import语句应该按顺序划分为三个部分，分别表示标准库模块、第三方模块以及自用模块。在每一部分之中，各import语句应该按模块的字母顺序来排列
                </DetailItem>
                <div style={{width:'75%',marginTop:35,textAlign:'center'}}>
                    <p>"小礼物走一走，来简书关注我"</p>
                    <div style={zhichi}>赞赏支持</div>
                    <p>还没有人赞赏，支持一下</p>
                </div>
            </DetailWrapper>
        )
    }
}
export default withRouter(Detail)

const zhichi={
    display:"inline-block",
    padding:"8px",
    color:"#fff",
    background:"#ec7259",
    borderRadius:"15px",
    margin:"20px 0"
}