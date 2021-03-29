import React,{useState, useEffect, createRef} from "react"
import styled from "styled-components"
import { InputNumber, Button, Input} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import {saveSvgAsPng} from "save-svg-as-png"
import {CloseOutlined} from "@ant-design/icons"

const Header = styled.div`
  width : 100%;
  height : 6rem;
  display : flex;
  justify-content: center;
  align-items: center;
  box-shadow : 4px 4px 2px grey;
`

const Logo = styled.span`
  font-weight: bold;
  font-size : 2.5rem;
  color : black;
`

const Container = styled.div`
  width : 50%;
  display : flex;
  align-items: center;
  flex-direction: column;
  margin : 0 auto;
  margin-top: 2rem;
  @media(max-width: 1500px){ width : 65%; }
  @media(max-width: 1300px){ width : 80%; }
  @media(max-width: 768px){ width : 95%; }
  
`

const EditorWrapper = styled.div`
  width : 100%;
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
  grid-template-rows: repeat(6, 44px);
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
  cursor : pointer;
  &:hover {
    background-color : rgba(0,0,0,0.3)
  }
`

const Circle = styled.div`
  ${props=>props.view===true ? `display : block;` : `display : none;`}
  height: 36px;
  width: 36px;
  border-radius: 22.125px;
  background-color : black;
`

const UpCircle = styled.div`
  ${props=>props.view===true ? `display : block;` : `display : none;`}
  height: 100%;
  width: 36px;
  border-top-left-radius: 22.125px;
  border-top-right-radius: 22.125px;
  background-color : black;
`

const DownCircle = styled.div`
  ${props=>props.view===true ? `display : block;` : `display : none;`}
  height: 100%;
  width: 36px;
  border-bottom-left-radius: 22.125px;
  border-bottom-right-radius: 22.125px;
  background-color : black;
`

const Rectangle = styled.div`
  ${props=>props.view===true ? `display : block;` : `display : none;`}
  height: 100%;
  width: 36px;
  background-color : black;
`

//result
const ResultWrapper = styled.div`
  width : 100%;
  height : auto;
  padding : 2rem;
  display : flex;
  justify-content: center;
  align-items: center;

`

const Result = styled.svg.attrs({ version: '1.1' , xmlns:"http://www.w3.org/2000/svg"})`
  width : 80%;
  min-height : 330px;
  
`

const Rect = styled.rect`
  x : calc(${props=>props.x} - 20px)
`

const Line = styled.line`
  
`

const SvgCircle = styled.circle`

`

const Text = styled.text`

`


const CircleWrapper = styled.div`
  display : flex;
  flex-direction: column;
  height : 264px;
  position : absolute;
  top : -23.5px;
  left : -70px;
`

const EmptyCircle = styled.div`
  width : 40px;
  height : 40px;
  background-color : transparent;
  border : solid 2px black;
  border-radius: 100%;
  margin : 2px 0;
  ${(props=> props.transparant ? `opacity : 0;` : null)}
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
        isDragging : false,
        isEmpty : [true, true, true, true, true, true],
        isXed : [false, false, false, false, false, false],
        currentIndex : 0
    })

    const onNumChange = (e) => {
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
        if(e.button===0){
            e.preventDefault()
            deleteLong(index)
            setEditState(state=>{
                return {
                    ...state,
                    dragStartIndex : index,
                    isDragging : true,
                    currentIndex : index
                }
            })
        }

    }

    const onDragEnd = (e, index) => {
        if(e.button===0) {
            if (editState.isDragging) {
                setEditState(state => {
                    let tempIndex = state.dragStartIndex + (Math.floor(state.dragStartIndex / 4) < Math.floor(index / 4) ? 1 : -1) * (Math.abs((Math.floor(index / 4) - Math.floor(state.dragStartIndex / 4)) * 4)) //시작 지점으로부터 경로 이탈시 제대로된 index 제공
                    if (index === editState.dragStartIndex) {
                        const circleState = [...state.circleState]
                        circleState[index] = (circleState[index] === true) ? false : true
                        return {
                            ...state,
                            circleState: [...circleState],
                            isDragging: false
                        }
                    }
                    const longState = [...state.longState]
                    const longCoord = {...state.longCoord}

                    let n = 0
                    if (longState[tempIndex] === 1) {
                        while (true) {
                            n += 1
                            if (longState[tempIndex + 4 * n] === 2) {
                                break
                            }
                        }
                        longCoord[tempIndex] = n + 1
                    } else if (longState[tempIndex] === 2) {
                        while (true) {
                            n += 1
                            if (longState[tempIndex - 4 * n] === 1) {
                                break
                            }
                        }
                        longCoord[tempIndex - 4 * n] = n + 1
                    } else {

                    }


                    return {
                        ...state,
                        longState: [...longState],
                        longCoord: {...longCoord},
                        isDragging: false
                    }
                })
            }
        }
    }


    const onDragEnter = (e, index) => { //드래그하는 곳에따라 원 모양 배치
        if(e.button===0) {
            if (editState.isDragging) {
                setEditState(state => {
                    const circleState = [...state.circleState]
                    const longState = [...state.longState]
                    let tempIndex;

                    if (circleState[state.dragStartIndex] === true) {
                        circleState[state.dragStartIndex] = false
                    }
                    if (circleState[index] === true) {
                        circleState[index] = false
                    }


                    if (Math.floor(state.dragStartIndex / 4) > Math.floor(index / 4)) {//아래에서 위로 드래그
                        tempIndex = state.dragStartIndex - ((Math.floor(state.dragStartIndex / 4) - Math.floor(index / 4)) * 4) //시작 지점으로부터 경로 이탈시 제대로된 index 제공
                        if (longState[tempIndex] === 2) {
                            deleteLong(tempIndex, 1)

                        }
                        if (longState[state.dragStartIndex] !== 2) {
                            longState[state.dragStartIndex] = 2
                        }
                        if (longState[tempIndex] === 1) { //직사각형 추가
                            longState[state.currentIndex] = 3
                        } else if (longState[tempIndex] === 3) { // 축소 알고리즘
                            longState[state.currentIndex] = 0
                            longState[tempIndex] = 1
                        }

                        longState[tempIndex] = 1
                        circleState[tempIndex] = false

                    } else if (Math.floor(state.dragStartIndex / 4) < Math.floor(index / 4)) {//위에서 아래로 드래그
                        tempIndex = state.dragStartIndex + ((Math.floor(index / 4) - Math.floor(state.dragStartIndex / 4)) * 4) //시작 지점으로부터 경로 이탈시 제대로된 index 제공
                        if (longState[tempIndex] === 1) {
                            deleteLong(tempIndex, 2)
                        }
                        if (longState[state.dragStartIndex] !== 1) {
                            longState[state.dragStartIndex] = 1
                        }
                        if (longState[tempIndex] === 2) { //직사각형 추가
                            longState[state.currentIndex] = 3
                        } else if (longState[tempIndex] === 3) { // 축소 알고리즘
                            longState[state.currentIndex] = 0
                            longState[tempIndex] = 2
                        }

                        longState[tempIndex] = 2
                        circleState[tempIndex] = false

                    } else if (Math.floor(state.dragStartIndex / 4) === Math.floor(index / 4)) {
                        tempIndex = state.dragStartIndex + (Math.floor(state.dragStartIndex / 4) < Math.floor(index / 4) ? 1 : -1) * (Math.abs((Math.floor(index / 4) - Math.floor(state.dragStartIndex / 4)) * 4)) //시작 지점으로부터 경로 이탈시 제대로된 index 제공
                        longState[state.currentIndex] = 0 //이전
                        longState[tempIndex] = 0 //현재
                    }


                    for (let i = 1; i < Math.abs(Math.floor(index / 4) - Math.floor(state.dragStartIndex / 4)); i++) {
                        if (index > state.dragStartIndex) {
                            longState[state.dragStartIndex + 4 * i] = 3
                        } else {
                            longState[state.dragStartIndex - 4 * i] = 3
                        }
                    }

                    return {
                        ...state,
                        circleState: [...circleState],
                        longState: [...longState],
                        longCoord: {...state.longCoord},
                        currentIndex: tempIndex
                    }
                })
            }
        }
    }
    const deleteLong = (index, option) => {
        for(let i=0;i<Object.keys(editState.longCoord).length;i++){
            const longIndex = Object.keys(editState.longCoord)[i] // Key값
            if(index >= Number(longIndex) && index <=Number(longIndex) + (editState.longCoord[longIndex]-1)*4 && index%4 === Number(longIndex)%4){//존재
                setEditState(state=>{
                    const longState = [...state.longState]
                    const longCoord = {...state.longCoord}

                    for(let j=0;j<longCoord[longIndex];j++){
                        longState[Number(longIndex)+4*j] = 0
                    }
                    longState[index] = (option) ? (option===1) ? 1 : 2 : 0
                    delete longCoord[longIndex] //value
                    return {
                        ...state,
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
        let isEmpty = [true, true, true, true, true, true]
        for(let i=0;i<24;i++){
            if(editState.circleState[i]===true || editState.longState[i]!==0){
                isEmpty[Math.floor(i/4)] = false

            }
        }
        setEditState((state)=>{
            return {
                ...state,
                isEmpty : [...isEmpty]
            }
        })
    }, [editState.circleState, editState.longState])

    return (
        <>
            <Header>
                <Logo>GuitarSheet</Logo>
            </Header>
            <Container>
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
                        <CircleWrapper>
                            {
                                editState.isEmpty.map((i,index)=>{
                                    return (editState.isXed[index]===false) ? <EmptyCircle key={index} transparant={i===true ? false : true} onClick={()=>{
                                        setEditState(state=>{
                                            const isXed = state.isXed
                                            isXed[index] = true
                                            return {
                                                ...state,
                                                isXed: [...isXed]
                                            }
                                        })
                                    }
                                    }/> : <CloseOutlined key={index} style={{
                                        fontSize : "44px",
                                        opacity : i===true ? 1 : 0
                                    }}
                                    onClick={() => {
                                        setEditState(state=>{
                                            const isXed = state.isXed
                                            isXed[index] = false
                                            return {
                                                ...state,
                                                isXed: [...isXed]
                                            }
                                        })
                                    }
                                    }
                                    />
                                })
                            }

                        </CircleWrapper>
                        <EditorTouchArea onMouseLeave={(e)=>onDragEnd(e, editState.currentIndex)}>
                            {
                                new Array(24).fill(0).map((i, index)=>{
                                    return <TouchCell key={index} onMouseDown={(e)=>onDragStart(e, index)} onMouseEnter={(e)=>onDragEnter(e, index)} onMouseUp={(e)=>onDragEnd(e, index)} onDragStart={()=>{
                                        return false
                                    }}>
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
                            editState.isEmpty.map((i, index)=>{
                                if(i===true){
                                    return  (editState.isXed[index]===false) ? <SvgCircle key={index} cx={"4%"} cy={Math.floor((index%6))*14+15+"%"} r={"20px"} stroke="black" strokeWidth="2" fill={"none"}></SvgCircle> : (
                                        <>
                                            <Line x1={"2%"} y1 ={Math.floor(index%6) * 14 + 10.5+"%"} x2={"6%"} y2={Math.floor(index%6) * 14 + 19.5+"%"} stroke={"black"} strokeWidth={"3"}></Line>
                                            <Line x1={"2%"} y1={Math.floor(index%6) * 14 + 19.5+"%"} x2={"6%"} y2={Math.floor(index%6) * 14 + 10.5+"%"} stroke={"black"} strokeWidth={"3"}></Line>
                                        </>
                                    )
                                }return null

                            })
                        }


                        {
                            editState.num===1 ? <Line x1={"10%"} y1={"14.5%"} x2={"10%"} y2={"85.5%"} stroke={"black"} strokeWidth={"15"}></Line> : <Line x1={"10%"} y1={"14.5%"} x2={"10%"} y2={"85.5%"} stroke={"black"} strokeWidth={"6"}></Line>
                        }

                        <Line x1={"32.5%"} y1 ={"15%"} x2={"32.5%"} y2={"85%"} stroke={"black"} strokeWidth={"3"}></Line>
                        <Line x1={"56%"} y1={"15%"} x2={"56%"} y2={"85%"} stroke={"black"} strokeWidth={"3"}></Line>
                        <Line x1={"78.5%"} y1={"15%"} x2={"78.5%"} y2={"85%"} stroke={"black"} strokeWidth={"3"}></Line>


                        <Line x1={"10%"} y1={"15%"} x2={"100%"} y2={"15%"} stroke={"black"} strokeWidth={"3"}></Line>
                        <Line x1={"10%"} y1={"29%"} x2={"100%"} y2={"29%"} stroke={"black"} strokeWidth={"3"}></Line>
                        <Line x1={"10%"} y1={"43%"} x2={"100%"} y2={"43%"} stroke={"black"} strokeWidth={"3"}></Line>
                        <Line x1={"10%"} y1={"57%"} x2={"100%"} y2={"57%"} stroke={"black"} strokeWidth={"3"}></Line>
                        <Line x1={"10%"} y1={"71%"} x2={"100%"} y2={"71%"} stroke={"black"} strokeWidth={"3"}></Line>
                        <Line x1={"10%"} y1={"85%"} x2={"100%"} y2={"85%"} stroke={"black"} strokeWidth={"3"}></Line>
                        {
                            editState.circleState.map((i, index)=>{
                                if(i===true){
                                    return  <SvgCircle key={index} cx={(index%4)*22.5+12.5+10+"%"} cy={Math.floor((index/4))*14+15+"%"} r={"20px"} color={"black"}></SvgCircle>
                                }return null
                            })
                        }
                        {
                            Object.keys(editState.longCoord).map((i,index)=>{
                                return <Rect key={index} x={(i%4)*22.5+12.5+10+"%"} y={Math.floor((i/4))*14+15-7+"%"} width={"40px"} height={14*editState.longCoord[i]+"%"}rx={"5%"} ry={"5%"} color={"black"}></Rect>
                            })
                        }
                        <Text x={"21.25%"} y={"100%"} fontSize={"2rem"}>{editState.num}</Text>
                        <Text x={"43.75%"} y={"100%"} fontSize={"2rem"}>{editState.num+1}</Text>
                        <Text x={"66.25%"} y={"100%"} fontSize={"2rem"}>{editState.num+2}</Text>
                        <Text x={"88.75%"} y={"100%"} fontSize={"2rem"}>{editState.num+3}</Text>
                        <Text x={"10%"} y={"7%"} fontSize={"2rem"} fontWeight={"bold"}>{editState.code}</Text>


                    </Result>
                </ResultWrapper>
            </Container>

        </>
    )
}

export default Content