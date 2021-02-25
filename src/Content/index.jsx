import React,{useState, useEffect, createRef, useCallback} from "react"
import styled from "styled-components"
import { InputNumber, Button, Input} from 'antd';
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 40px);
  background-color: black;
  border : 4px solid black;
  border-right : none;
  gap : 4px;
  ${props=>props.num===1 ? `border-left : 14px solid black;` : null}
  
`

const TitleArea = styled.div`
  width : 40%;
  margin-bottom: 2rem;
  display : flex;
  justify-content: center;
`

const Cell = styled.div`
  background-color : white;

`

const EditorTouchArea = styled.div`
  width :100%;
  display : grid;
  position : absolute;
  grid-template-columns: repeat(4, 1fr);
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
  &:hover {
    background-color : rgba(0,0,0,0.3)
  }
`

const Circle = styled.div`
  ${props=>props.view==true ? `display : block;` : `display : none;`}
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 22.125px;
  background-color : black;
`

const UpCircle = styled.div`
  ${props=>props.view==true ? `display : block;` : `display : none;`}
  height: 3rem;
  width: 2.5rem;
  border-top-left-radius: 22.125px;
  border-top-right-radius: 22.125px;
  background-color : black;
`

const DownCircle = styled.div`
  ${props=>props.view==true ? `display : block;` : `display : none;`}
  height: 3rem;
  width: 2.5rem;
  border-bottom-left-radius: 22.125px;
  border-bottom-right-radius: 22.125px;
  background-color : black;
`

const Rectangle = styled.div`
  ${props=>props.view==true ? `display : block;` : `display : none;`}
  height: 3rem;
  width: 2.5rem;
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
        circleState : new Array(24).fill(false),
        longState : new Array(24).fill(0), //0 : 아무것도 없는상태 1 : UP 2: DOWN 3 : 직사각형
        longCoord : {},
        dragStartIndex : null,
        code : "",
        num : 1,
    })

    const onNumChange = (e) => {
        console.log(e)
        setEditState((state)=>{
            return {
                ...state,
                circleState : [...state.circleState],
                longState : [...state.longState],
                longCoord : {...state.longCoord},
                num : e,

            }
        })
    }

    const onDownloadClick = (e)=>{
        saveSvgAsPng(svgRef.current, "GuitarSheet.png")
    }
    const onTitleChange = (e) => {
        console.log(e.target.value)
        setEditState((state)=>{
            return {
                ...state,
                circleState : [...state.circleState],
                longState : [...state.longState],
                longCoord : {...state.longCoord},
                code : e.target.value
            }
        })
    }
    const onDragStart = (e, index) => { //드래그 시작지점만 알면됨
        setEditState(state=>{
            const circleState = [...state.circleState]
            const longState = [...state.longState]
            if(circleState[index]===true){
                circleState[index] = false
            }

            return {
                ...state,
                circleState : [...circleState],
                longState : [...longState],
                longCoord : {...state.longCoord},
                dragStartIndex : index
            }
        })
    }

    const onDragEnd = (e, index) => {
        console.log("dragEnd : ", index)
        setEditState(state=>{
            const circleState = [...state.circleState]
            const longState = [...state.longState]
            const longCoord = {...state.longCoord}

            let n = 0
            if(longState[index]===1){
                while(true){
                    n += 1
                    if(longState[index+4*n]===2){
                        break
                    }
                }
                longCoord[index] = n + 1
            }else if(longState[index]===2){
                while(true){
                    n += 1
                    if(longState[index-4*n]===1){
                        break
                    }
                }
                longCoord[index-4*n] = n + 1
            }else{

            }


            return {
                ...state,
                circleState : [...circleState],
                longState : [...longState],
                longCoord : {...longCoord},
            }
        })
    }


    const onDragEnter = (e, index) => { //드래그하는 곳에따라 원 모양 배치
        setEditState(state=>{
            const circleState = [...state.circleState]
            const longState = [...state.longState]

            if(circleState[index]===true){
                circleState[index] = false
            }

            if(state.dragStartIndex%4===index%4) { //같은 줄 인식
                if (state.dragStartIndex > index) {//밑으로
                    if (longState[state.dragStartIndex + 4] == 2) {
                        longState[state.dragStartIndex + 4] = 0
                    }
                    if (longState[index] == 3) {
                        longState[index - 4] = 0
                        longState[index] = 1
                    } else {
                        longState[state.dragStartIndex] = 2
                        longState[index] = 1
                    }

                } else if (state.dragStartIndex < index) {//위로
                    if (longState[state.dragStartIndex - 4] == 1) {
                        longState[state.dragStartIndex - 4] = 0
                    }
                    if (longState[index] == 3) {
                        longState[index + 4] = 0
                        longState[index] = 2

                    } else {
                        longState[state.dragStartIndex] = 1
                        longState[index] = 2
                    }

                }


                for (let i = 1; i < Math.abs(Math.floor(index / 4) - Math.floor(state.dragStartIndex / 4)); i++) {
                    if (index > state.dragStartIndex) {
                        longState[state.dragStartIndex + 4 * i] = 3
                    } else {
                        longState[state.dragStartIndex - 4 * i] = 3
                    }
                }
            }




            return {
                ...state,
                circleState : [...circleState],
                longState : [...longState],
                longCoord : {...state.longCoord},
            }
        })
    }
    const deleteLong = (index) => {
        for(let i=0;i<Object.keys(editState.longCoord).length;i++){
            const longIndex = Object.keys(editState.longCoord)[i] // Key값
            if(index >= Number(longIndex) && index <=Number(longIndex) + (editState.longCoord[longIndex]-1)*4 && index%4 == Number(longIndex)%4){//존재
                console.log(index,longIndex, Number(longIndex) + editState.longCoord[longIndex]*4)
                setEditState(state=>{
                    const longState = [...state.longState]
                    const longCoord = {...state.longCoord}

                    for(let j=0;j<longCoord[longIndex];j++){
                        console.log("지움 ",Number(longIndex)+4*j)
                        longState[Number(longIndex)+4*j] = 0
                    }
                    delete longCoord[longIndex] //value
                    return {
                        ...state,
                        circleState : [...state.circleState],
                        longState : [...longState],
                        longCoord : {...longCoord},
                    }
                    }
                )
                break
            }
        }
    }

    useEffect(()=>{
        console.log(editState.longCoord)
    }, [editState])

    return (
        <>
            <EditorWrapper>
                <TitleArea>
                    <Input placeholder="Code" onChange={onTitleChange}/>
                </TitleArea>
                <Editor num={editState.num}>
                    {
                        new Array(20).fill(0).map((i, index)=>{
                            return <Cell key={index}></Cell>
                        })
                    }
                    <EditorTouchArea>
                        {
                            new Array(24).fill(0).map((i, index)=>{
                                return <TouchCell key={index} onDragStart={(e)=>onDragStart(e, index)} onDragEnter={(e)=>onDragEnter(e, index)} onDragEnd={(e)=>onDragEnd(e, index)}onClick={(e)=>{
                                    setEditState((state)=>{
                                        const circleState = [...state.circleState]
                                        circleState[index] = (circleState[index]) ? false : true
                                        deleteLong(index)
                                        return {
                                            ...state,
                                            circleState : circleState,
                                            longState : [...state.longState],
                                            longCoord : {...state.longCoord},
                                        }
                                    })
                                }
                                }
                                >
                                    <Circle key={index} view={editState.circleState[index]}></Circle>
                                    <UpCircle key={24+index} view={editState.longState[index]===1}></UpCircle>
                                    <DownCircle key={48+index} view={editState.longState[index]===2}></DownCircle>
                                    <Rectangle key={72+index} view={editState.longState[index]===3}></Rectangle>

                                </TouchCell>
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
                    {
                        editState.num===1 ? <Line x1={"0"} y1={"10%"} x2={"0"} y2={"80%"} stroke={"black"} strokeWidth={"25"}></Line> : <Line x1={"0"} y1={"10%"} x2={"0"} y2={"80%"} stroke={"black"} strokeWidth={"6"}></Line>
                    }

                    <Line x1={"25%"} y1={"10%"} x2={"25%"} y2={"80%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"50%"} y1={"10%"} x2={"50%"} y2={"80%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"75%"} y1={"10%"} x2={"75%"} y2={"80%"} stroke={"black"} strokeWidth={"3"}></Line>


                    <Line x1={"0"} y1={"10%"} x2={"100%"} y2={"10%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"0"} y1={"24%"} x2={"100%"} y2={"24%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"0"} y1={"38%"} x2={"100%"} y2={"38%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"0"} y1={"52%"} x2={"100%"} y2={"52%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"0"} y1={"66%"} x2={"100%"} y2={"66%"} stroke={"black"} strokeWidth={"3"}></Line>
                    <Line x1={"0"} y1={"80%"} x2={"100%"} y2={"80%"} stroke={"black"} strokeWidth={"3"}></Line>
                    {
                        editState.circleState.map((i, index)=>{
                            if(i==true){
                                return <SvgCircle key={index} cx={(index%4)*25+12.5+"%"} cy={Math.floor((index/4))*14+10+"%"} r={"4.3%"} color={"black"}></SvgCircle>
                            }return null
                        })
                    }
                    {
                        Object.keys(editState.longCoord).map((i,index)=>{
                            return <Rect key={index} x={(i%4)*25+12.5-3.5+"%"} y={Math.floor((i/4))*14+10-6+"%"} width={"7%"} height={13*editState.longCoord[i]+"%"}rx={"7%"} ry={"7%"} color={"black"}></Rect>
                        })
                    }
                    <Text x={"11%"} y={"97%"} fontSize={"2rem"}>{editState.num}</Text>
                    <Text x={"36%"} y={"97%"} fontSize={"2rem"}>{editState.num+1}</Text>
                    <Text x={"61%"} y={"97%"} fontSize={"2rem"}>{editState.num+2}</Text>
                    <Text x={"86%"} y={"97%"} fontSize={"2rem"}>{editState.num+3}</Text>
                    //코드명
                    <Text x={"0%"} y={"6%"} fontSize={"1.5rem"} fontWeight={"bold"}>{editState.code}</Text>
                </Result>
            </ResultWrapper>
        </>
    )
}

export default Content