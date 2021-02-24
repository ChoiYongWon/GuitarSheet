import React,{useState, useEffect, createRef} from "react"
import styled from "styled-components"
import { InputNumber, Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import {saveSvgAsPng} from "save-svg-as-png"

const EditorWrapper = styled.div`
  width : 40%;
  height : auto;
  padding : 2rem;
  border : 3px solid black;
  border-radius : 10px;
  display : flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Editor = styled.div`
  width : 80%;
  height : auto;
  display : grid;
  position: relative;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 40px);
  background-color: black;
  border : 4px solid black;
  gap : 4px;
  border-left : 14px solid black;
`

const Cell = styled.div`
  background-color : white;
`

const EditorTouchArea = styled.div`
  width :100%;
  display : grid;
  position : absolute;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 40px);
  gap : 4px;
  top : -23.5px;
`

const EditorNumArea = styled.div`
  width : 80%;
  display : flex;
  margin-top : 1.5rem;
  justify-content: space-between;
`

const EditorButtonArea = styled.div`
  width : 80%;
  display : flex;
  justify-content: center;
  margin-top : 1rem;
`

const TouchCell = styled.div`
  background-color : transparent;
  display : flex;
  justify-content: center;
  align-items: center;
  
`

const Circle = styled.div`
  ${props=>props.view==true ? `display : block;` : `display : none;`}
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 22.125px;
  background-color : black;
`
//result
const ResultWrapper = styled.div`
  width : 40%;
  height : auto;
  padding : 2rem;
  border : 3px solid black;
  border-radius : 10px;
  display : flex;
  justify-content: center;
  align-items: center;
`

const Result = styled.svg.attrs({ version: '1.1' , xmlns:"http://www.w3.org/2000/svg"})`
  width : 82%;
  min-height : 330px;
`

const Rect = styled.rect`

`

const Line = styled.line`
  
`

const SvgCircle = styled.circle`

`

const Text = styled.text`

`

const Content = () => {

    const svgRef = createRef()

    const [editState, setEditState] = useState({
        circleState : new Array(36).fill(false),
        num : 1
    })

    const onNumChange = (e) => {
        console.log(e)
        setEditState((state)=>{
            return {
                circleState : [...state.circleState],
                num : e
            }
        })
    }

    const onDownloadClick = (e)=>{
        saveSvgAsPng(svgRef.current, "GuitarSheet.png")
    }

    useEffect(()=>{

    }, [editState])

    return (
        <>
            <EditorWrapper>
                <Editor>
                    {
                        new Array(30).fill(0).map((i, index)=>{
                            return <Cell key={index}></Cell>
                        })
                    }
                    <EditorTouchArea>
                        {
                            new Array(36).fill(0).map((i, index)=>{
                                return <TouchCell key={index} onClick={(e)=>{
                                    setEditState((state)=>{
                                        const circleState = [...state.circleState]
                                        circleState[index] = (circleState[index]) ? false : true
                                        return {
                                            ...state,
                                            circleState : circleState
                                        }
                                    })
                                }
                                }><Circle key={index} view={editState.circleState[index]}></Circle></TouchCell>
                            })
                        }
                    </EditorTouchArea>

                </Editor>
                <EditorNumArea>
                    <InputNumber size="large" min={1} max={17} defaultValue={1} onChange={onNumChange} />
                    <InputNumber size="large" min={1} max={17} value={editState?.num+1} disabled={true}/>
                    <InputNumber size="large" min={1} max={17} value={editState?.num+2} disabled={true}/>
                    <InputNumber size="large" min={1} max={17} value={editState?.num+3} disabled={true}/>
                </EditorNumArea>
                <EditorButtonArea>
                    <Button icon={<DownloadOutlined />} size={"large"} onClick={onDownloadClick}>
                        Download
                    </Button>
                </EditorButtonArea>
            </EditorWrapper>
            <ResultWrapper>
                <Result ref={svgRef}>
                    <Line x1={"0"} y1={"10%"} x2={"0"} y2={"80%"} stroke={"black"} strokeWidth={"25"}></Line>
                    <Line x1={"16.66%"} y1={"10%"} x2={"16.66%"} y2={"80%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"33.32%"} y1={"10%"} x2={"33.32%"} y2={"80%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"49.98%"} y1={"10%"} x2={"49.98%"} y2={"80%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"66.64%"} y1={"10%"} x2={"66.64%"} y2={"80%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"83.3%"} y1={"10%"} x2={"83.3%"} y2={"80%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"100%"} y1={"10%"} x2={"100%"} y2={"80%"} stroke={"black"} strokeWidth={"6"}></Line>
                    <Line x1={"0"} y1={"10%"} x2={"100%"} y2={"10%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"0"} y1={"24%"} x2={"100%"} y2={"24%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"0"} y1={"38%"} x2={"100%"} y2={"38%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"0"} y1={"52%"} x2={"100%"} y2={"52%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"0"} y1={"66%"} x2={"100%"} y2={"66%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"0"} y1={"80%"} x2={"100%"} y2={"80%"} stroke={"black"} strokeWidth={"3"}></Line>
                    {
                        editState.circleState.map((i, index)=>{
                            if(i==true){
                                return <SvgCircle key={index} cx={(index%6)*16.6666+8.33+"%"} cy={Math.floor((index/6))*14+10+"%"} r={"4%"} color={"black"}></SvgCircle>
                            }return null
                        })
                    }
                    <Text x={"20%"} y={"95%"} fontSize={"2rem"}>{editState.num}</Text>
                    <Text x={"40%"} y={"95%"} fontSize={"2rem"}>{editState.num+1}</Text>
                    <Text x={"60%"} y={"95%"} fontSize={"2rem"}>{editState.num+2}</Text>
                    <Text x={"80%"} y={"95%"} fontSize={"2rem"}>{editState.num+3}</Text>
                </Result>
            </ResultWrapper>
        </>
    )
}

export default Content