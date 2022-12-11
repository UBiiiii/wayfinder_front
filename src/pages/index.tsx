import type { NextPage } from 'next'
import { db, storage, _db, _storage } from '../config/firebase'
import { useEffect, useRef, useState } from 'react'
import withAuth from '../middleware/withAuth'
import * as htmlToImage from "html-to-image"
import { useDispatch, useSelector } from 'react-redux'
import { setBles, setNodes, setRooms } from '../redux/slices/roomSlice'
import { LinkInfo, NodeInfo, RoomInfo } from '../config/interface'
import Header from '../component/Header'
import Image from 'next/image'

interface room {
  name: string,
  charge: string,
  phone: string,
  position_key: {
    x: number,
    y: number,
  },
  specific: string,
  with: string,
}

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const rooms : RoomInfo[] = useSelector((state:any)=>state.rooms.datas);
  const nodes = useSelector((state:any)=>state.rooms.nodes);
  const bles = useSelector((state:any)=>state.rooms.bles)

  const userViewRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLInputElement>(null);

  const [floor, setFloor] = useState("");
  const [floorBackground, setFB] = useState('');
  const [mobileBackground, setMB] = useState('');

  const [room, setRoom] = useState({});
  const [showFloor, setShowFloor] = useState(false);
  const [roomNumber, setRM] = useState('');
  const [roomName, setRN] = useState('');
  const [roomCharge, setRC] = useState('');
  const [roomTell, setRT] = useState('');
  const [roomDetail, setRD] = useState('');
  const [roomWith, setRW] = useState('');
  const [selectedNode, setSelectedNode] = useState<NodeInfo>();

  const [isMapUpdate, setIsMapUpdate] = useState(false);
  const [isPathUpdate, setIsPathUpdate] = useState(false);
  const [isAddNode, setIsAddNode] = useState(false);
  const [isAddLink, setIsAddLink] = useState(false);
  const [isSetNode, setIsSetNode] = useState(false);

  const [showNode, setShowNode] = useState(false);
  const [showBLE, setShowBLE] = useState(false);
  const [isDeleteNode, setIsDeleteNode] = useState(false);

  // 호실 담당자 참조 변수
  // 호실 이름 참조 변수
  // 호실 대표 번호 참조 변수
  // 호실 세부사항 참조 변수
  let positionArr = [2];    // 지도 상의 각 호실의 좌표 담는 배열
  let withVal = "";         // 합쳐진 호실의 호실 정보 수정을 리디렉션을 통해 구현할 때 사용되는 변수 
  let redirect = [3];       // 리디렉트할 호실 번호를 저장하는 배열 

  let resultTemplate;       // 새로 업데이트 된 경로 지도 저장하는 변수

  let count = 0;            // 정보 업데이트 완료 여부를 판단하는 제어 변수

  const saveRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(()=>{
    if(floor!=="") {
      _storage.getDownloadURL(_storage.ref(storage, `floor${floor}/${floor}층 기본 지도(명칭x).png`)).then((url)=>setFB(url));
      _storage.getDownloadURL(_storage.ref(storage, `floor${floor}/${floor}층 기본 지도(명칭x)(모바일).png`)).then((url)=>setMB(url));

      const unsubscribe = _db.onValue(_db.ref(db, floor),
        (snapshot)=>{
        let lst : any = [];
          if(snapshot.exists()) {
            snapshot.forEach((dat)=>{
              const pos = dat.val()['position_key'];
              if(pos) lst.push({id:dat.key, ...dat.val()});
            })
            console.log(`check useEffect nodes ${lst}`);
          }
          dispatch(setRooms(lst));
      })

      return unsubscribe;
    }
  }, [floor])

  useEffect(()=>{
    if(floor!=="") {
      const unsubscribe = _db.onValue(_db.ref(db,`nodes/${floor}`),
        (snapshot)=>{
          let lst2 : any = [];
          if(snapshot.exists()) {
            snapshot.forEach((dat)=>{
              lst2.push({id:dat.key, ...dat.val(),links:dat.val().links || []});
            })
            console.log(`check useEffect nodes ${lst2}`);
          }
          dispatch(setNodes(lst2));
      })

      return unsubscribe;
    }
  }, [floor])

  useEffect(()=>{
    if(floor!=="") {
      const unsubscribe = _db.onValue(_db.ref(db,`bles/${floor}`),
        (snapshot)=>{
          let lst : any = [];
          if(snapshot.exists()) {
            snapshot.forEach((dat)=>{
              lst.push({id:dat.key, ...dat.val()});
            })
            console.log(`check useEffect bles ${lst}`);
          }
          dispatch(setBles(lst));
      })

      return unsubscribe;
    }
  }, [floor])

  const RoomButton = ({data, key}:any) => {
    const x = data.position_key.x;
    const y = data.position_key.y;
    
    return (
      <button key={key}
        className={`
         text-black bg-gray-400
          top-3 px-2 py-1 rounded-md
        `}
        onClick={()=>{selectRoom(data)}}
      >
        {data.id}
      </button>
    )
  }

  const selectRoom = (data:any) => {
    setRoom(data);
    setRC(data.charge);
    setRD(data.specific);
    setRN(data.name);
    setRT(data.phone);
    setRM(data.id);
    setRW(data.with);
  }

  const RoomPrint = ({data, key, pos}:any) => {
    const x = data.position_key.x;
    const y = data.position_key.y;

    const eng = "abcdefghijklmnopqrstuvwxyz"

    const name = data.name.split(" ");
    const print:string[] = [];
    name.forEach((str:string)=>{
      print.push(str);
    })
    
    return (
      <div key={key}
        className={`
          absolute top-3 w-24
          ${pos==="mirror" ? "text-white" : "text-black"}
        `}
        style={{
          top:`${y-(print.length * 15)}px`,
          left:`${x-45}px`,
        }}
      >
        {print.map((row,key)=>(
          <span key={key} className='block'>{row}</span>  
        ))}
      </div>
    )
  }

  const NodePrint = ({data, key}:any) => {
    const x = data.x;
    const y = data.y;
    
    return (
      <div key={key}
        className={`absolute z-30 w-5 h-5 rounded-full text-sm cursor-pointer
          ${selectedNode === data ? 'bg-red-600' : 'bg-green-400'}
          ${showNode ? "block" : "hidden"}
        `}
        style={{
          top:`${y-10}px`,
          left:`${x-10}px`,
        }}
        onClick={()=>handleNode(data)}
      >
        {data.id}
      </div>
    )
  }

  const BLEPrint = ({data, key}:any) => {
    const x = data.x;
    const y = data.y;
    
    return (
      <div key={key}
        className={`absolute z-30 w-5 h-5 rounded-full text-sm cursor-pointer bg-blue-600 text-white
          ${showBLE ? "block" : "hidden"}
        `}
        style={{
          top:`${y-10}px`,
          left:`${x-10}px`,
        }}
        onClick={()=>handleNode(data)}
      >
        {data.id}
      </div>
    )
  }

  const floorChange = (floor:any) => {
    setFloor(floor);
    setRM('');
    setRN('');
    setRC('');
    setRD('');
    setRT('');
    setRW('');
    console.log(floor);
    setShowFloor(false);
  }

  const floors = ["3", "4"];

  const saveMap = () => {
    setIsPathUpdate(true);
    setShowNode(false);
    setShowBLE(false);
    htmlToImage.toBlob(document.getElementById("userView") as HTMLElement)
      .then(async (blob)=>{
        const unsubscribe = _storage.uploadBytesResumable(_storage.ref(storage, `map/floor${floor}.png`), blob as Blob);
        
        unsubscribe.on('state_changed',
          (snapshot)=>{
            console.log(snapshot.bytesTransferred/snapshot.totalBytes);
          },
          (err)=>{console.log(err)},
          ()=>{
            console.log('save complete');
            rooms.forEach((el:any)=>{
              setCanvas2(floor, el.id);
            });
            setIsPathUpdate(false);
          }
        )
      })

    htmlToImage.toBlob(document.getElementById("mobileView") as HTMLElement)
    .then(async (blob)=>{
      const unsubscribe = _storage.uploadBytesResumable(_storage.ref(storage, `map/floor${floor}_mobile.png`), blob as Blob);
      
      unsubscribe.on('state_changed',
        (snapshot)=>{
          console.log(snapshot.bytesTransferred/snapshot.totalBytes);
        },
        (err)=>{console.log(err)},
        ()=>{
          console.log('save mobile complete');
        }
      )
    })
  }

  const changeApply = async () => {
    if(roomNumber) {
      _db.update(_db.ref(db,`${floor}/${roomNumber}`), {
        name:roomName,
        phone:roomTell,
        charge:roomCharge,
        specific:roomDetail,
      }) 

      console.log(roomWith);

      if(roomWith) {
        _db.update(_db.ref(db,`${floor}/${roomWith}`), {
          name:roomName,
          phone:roomTell,
          charge:roomCharge,
          specific:roomDetail,
        })
      } 
    }
  }

  const setCanvas2 = async (floorNum:string, roomNum:string) => {
    /* document 상에서는 숨겨진 mycavas2를 불러와 그 위에 그림을 그린다 */
    const canvas = saveRef.current;
    if (canvas) {
      /* canvas의 2d Context를 받아옴 */
      var ctx = canvas.getContext('2d');
      console.log("save path");
      /* url을 통해 불러올 이미지 object를 2개 생성 (맵, 경로)
      이때 crossOrigin 문제를 해결하기 위해 anonymous로 설정*/
      const imageObj = document.createElement("img");
      const pathObj = document.createElement("img");
      pathObj.setAttribute("crossOrigin", "anonymous");
      imageObj.setAttribute("crossOrigin", "anonymous");

      /* image url이 load되면 이미지를 Context에 그리는 함수와
      path url이 load되면 이미지를 Context에 그리는 함수
      순서는 map이 load된 뒤, path가 load되도록 path 함수를 안쪽에 구성*/
      imageObj.onload = async () => {
        pathObj.onload = async () => {

          /* 받아온 url의 이미지(층, 경로 이미지)를 canvas에 그림 */
          canvas.width=517;
          canvas.height=1180;
          ctx?.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
          ctx?.drawImage(pathObj, 0, 0, canvas.width, canvas.height);

          /* 받아온 이름 정보를 같이 받아온 위치 정보를 사용하여 이미지 위에 표시 */
          
          canvas.toBlob(async (blob)=>{
            await _storage.uploadBytes(_storage.ref(storage, `result/floor${floor}/${roomNum}.png`),blob as Blob);
            console.log(`save map ${roomNum}}`);
          })
          /* 새로운 이미지를 그리기 위해 Context를 초기화 */
          ctx?.clearRect(0, 0, canvas.width, canvas.height);
        }
        /* 이미지 객체에 path url를 load함 (이때 위의 함수 실행) */
        pathObj.src = await _storage.getDownloadURL(_storage.ref(storage, `path/floor${floorNum}/${roomNum}.png`));
      };
      /* 이미지 객체에 map url를 load함 (이때 위의 함수 실행) */
      imageObj.src = await _storage.getDownloadURL(_storage.ref(storage, `map/floor${floorNum}.png`));
    };
  };

  const addNode = async (e:any) => {
    if(isAddNode) {
      console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      const nodes = (await _db.get(_db.ref(db,`nodes/${floor}`)));
      const len = nodes.exists() ? nodes.val().length : 0;
      _db.set(_db.ref(db, `nodes/${floor}/${len}`),{
        x:e.nativeEvent.offsetX,
        y:e.nativeEvent.offsetY,
      })
    }

    setIsAddNode(false);
  }

  const addLink = async (node:NodeInfo) => {

    if(!selectedNode) {
      setSelectedNode(node);
      return;
    } else {
      const preNode = selectedNode;
      if(preNode.id !== node.id) {
        const links = (await _db.get(_db.ref(db,`links/${floor}`)));
        const len = links.exists() ? links.val().length : 0;
        const link:LinkInfo = {
          id:len,
          node1:preNode?.id,
          node2:node?.id,
          mass:Math.sqrt(Math.pow(preNode.x - node.x,2) + Math.pow(preNode.y - node.y,2)),
        };

        await _db.set(_db.ref(db, `links/${floor}/${len}`), link);
        
        const linkLst1 = (await _db.get(_db.ref(db,`nodes/${floor}/${preNode.id}/links`))).val() || [];
        const linkLst2 = await (await _db.get(_db.ref(db, `nodes/${floor}/${node.id}/links`))).val() || [];

        linkLst1.push(link);
        linkLst2.push(link);

        console.log(preNode.id, node.id);

        await _db.update(_db.ref(db, `nodes/${floor}/${preNode.id}`), {links:linkLst1});
        await _db.update(_db.ref(db, `nodes/${floor}/${node.id}`), {links:linkLst2});

        console.log("add link");
      } else console.log("same node");
      setSelectedNode(undefined);
      setIsAddLink(false);
    }
  }

  const setDestNode = async (node:NodeInfo) => {
    const dest = (await _db.get(_db.ref(db,`nodes/${floor}/${node.id}/dest`))).val() || [];
    if(!dest.includes(node.id)) {
      dest.push(roomNumber);
      console.log(dest);
      await _db.set(_db.ref(db,`nodes/${floor}/${node.id}/dest`),dest);
    }
    setIsSetNode(false);
  }

  const deleteNode = async (node:NodeInfo) => {
    const nodeData  = (await _db.get(_db.ref(db, `nodes/${floor}`))).val();
    const linkData = (await _db.get(_db.ref(db, `links/${floor}`))).val();
    const nodeEntries = Object.values(nodeData);
    const linkEntries = Object.values(linkData);
    const id = node.id;
    console.log(nodeEntries);
    const filterList = nodeEntries.filter((v,i)=>i!==id).map((v,i)=>(v as NodeInfo).id = i);
    // await _db.set(_db.ref(db, `nodes/${floor}`),filterList);
    console.log(id);
    console.log(filterList);
  }

  const handleNode = async (node:NodeInfo) => {
    if(isAddLink) await addLink(node);
    if(isSetNode) await setDestNode(node);
    if(isDeleteNode) await deleteNode(node);
  }

  return (
    <div className='relative flex flex-col w-full h-full'>
      <Header />
      {isMapUpdate &&
        <div className='absolute z-50 flex justify-center items-center w-screen h-screen bg-gray-500 bg-opacity-80 backdrop-blur-xl text-4xl gap-5'>
          <svg
            className='animate-spin'
            width={220}
            height={220}
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M10 110C10 170 58 210 110 210C162 210 210 166 210 110C210 54 162 10 110 10"
              stroke="#AE71C4"
              strokeWidth={20}
            />
          </svg>
          Save Map Data...
        </div>
      }
      {isPathUpdate &&
        <div className='absolute z-50 flex justify-center items-center w-screen h-screen bg-gray-500 bg-opacity-80 backdrop-blur-xl text-4xl gap-5'>
          <svg
            className='animate-spin'
            width={220}
            height={220}
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M10 110C10 170 58 210 110 210C162 210 210 166 210 110C210 54 162 10 110 10"
              stroke="#AE71C4"
              strokeWidth={20}
            />
          </svg>

          Save Path Data...
        </div>
      }
      <div id="dataField" className='w-full px-40 z-30'>
        <div id="choice" className='px-4 py-4 h-20 justify-between flex'>
          <div id="floor" className='overflow-visible relative'>
            <button
              className='px-2 py-1 border-2 rounded-md bg-black text-white'
              onClick={()=>setShowFloor(!showFloor)}
            >
              Floor
            </button>
            {showFloor && (
              <div className='border-2 bg-white absolute w-full'>
              {floors.map((floor, key)=>(
                <div 
                  key={key}
                  className="cursor-pointer"
                  onClick={()=>(floorChange(floor))}
                >
                  {floor}
                </div>
              ))} 
              </div>
            )}
          </div>
          <div>
            <div>
              <button
                className={`
                  h-min px-2 py-1 border-2 rounded-md text-white
                  ${isAddNode ? "bg-green-500" : "bg-black"}
                `}
                onClick={()=>{setIsAddNode(!isAddNode)}}
              >
                Add Node
              </button>
              <button
                className={`
                  h-min px-2 py-1 border-2 rounded-md text-white
                  ${isAddLink ? "bg-green-500" : "bg-black"}
                `}
                onClick={()=>{setIsAddLink(!isAddLink)}}
              >
                Add Link
              </button>
              <button
                className={`
                  h-min px-2 py-1 border-2 rounded-md text-white
                  ${isDeleteNode ? "bg-green-500" : "bg-black"}
                `}
                onClick={()=>{setIsDeleteNode(!isDeleteNode)}}
              >
                Delete Node
              </button>
            </div>
            <div className='flex gap-3'>
              <div className='flex items-start gap-3' onClick={()=>{setShowNode(!showNode)}}>
                {showNode ? 
                  <div className="flex-grow-0 flex-shrink-0 w-[24px] h-[24px] rounded-sm bg-[#49454f]">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="white" />
                    </svg>
                  </div>
                : 
                  <div className="flex-grow-0 flex-shrink-0 w-[24px] h-[24px] rounded-sm border-2 border-[#49454f]" />
                }
                  Show node
              </div>
              <div className='flex items-start gap-3' onClick={()=>{setShowBLE(!showBLE)}}>
                {showBLE ? 
                  <div className="flex-grow-0 flex-shrink-0 w-[24px] h-[24px] rounded-sm bg-[#49454f]">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="white" />
                    </svg>
                  </div>
                : 
                  <div className="flex-grow-0 flex-shrink-0 w-[24px] h-[24px] rounded-sm border-2 border-[#49454f]" />
                }
                  Show BLE
              </div>
            </div>
          </div>

          <div className='flex'>
            <button
              className='h-min px-2 py-1 border-2 rounded-md bg-black text-white'
              onClick={saveMap}
            >
              Save Map
            </button>

            <button
              className={`
                h-min px-2 py-1 border-2 rounded-md text-white
                ${isSetNode ? "bg-green-500" : "bg-black"}
              `}
              onClick={()=>{setIsSetNode(!isSetNode)}}
            >
              Set Node
            </button>

            <button
              className='h-min px-2 py-1 border-2 rounded-md bg-black text-white'
              onClick={changeApply}
            >
              Change Apply
            </button>
          </div>
        </div>

        <div id='room_data' className='w-full flex flex-col gap-3 z-0'>
          <table className="table-fixed border-2 w-full bg-white">
            <thead>
              <tr className="border-b-2">
                <th> Num</th>
                <th> Name</th>
                <th> Charge</th>
                <th> Tel.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" value={roomNumber} className="w-full border-none h-10 text-center" readOnly/>
                </td>
                <td>
                  <input type="text" value={roomName} className="w-full border-none h-10 text-center" onChange={e=>{setRN(e.target.value)}}/>
                </td>
                <td>
                  <input type="text" value={roomCharge} className="w-full border-none h-10 text-center" onChange={e=>{setRC(e.target.value)}}/>
                </td>
                <td>
                  <input type="text" value={roomTell} className="w-full border-none h-10 text-center" onChange={e=>{setRT(e.target.value)}}/>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
          Detail
          <textarea
            className='w-full h-30 resize-none cursor-text'
            value={roomDetail}
            onChange={(e)=>{
              setRD(e.target.value);
            }}
          />
          </div>
        </div>
      </div>

      <div className='flex'>
        <div id="mapField"
          className={`w-fit items-center justify-center grid grid-cols-2 px-10 py-10 ${floor ? 'flex' : 'hidden'}`}
        >
          <div className='w-[537px] flex flex-col gap-3 text-center justify-center'>
            Mobile Zone
            <div
              id="mobileView"
              className="relative w-[517px] h-[1180px]"
            >
                <Image id=""
                  src={mobileBackground}
                  className="flex w-full h-full object-cover"
                  layout='fill'
                />
                {rooms?.length && rooms?.filter((el:RoomInfo)=>el["position_key"]!==undefined).map((v:RoomInfo, i:number)=>(
                <RoomPrint data={v} key={i} pos={"mobile"}/>
              ))}
            </div>
          </div>

          <div className='w-[537px] flex flex-col gap-3 text-center justify-center'>
            User view
            <div
              id="userView"
              ref={userViewRef}
              className="relative w-[517px] h-[1180px] bg-no-repeat bg-center bg-cover bg-white dark:bg-black"
              onMouseDown={(e)=>addNode(e)}
            >
              <Image
                src={floorBackground}
                className="flex w-full h-full object-cover"
                layout='fill'
              />
              {rooms?.length && rooms?.filter((el:RoomInfo)=>el["position_key"]!==undefined).map((data:RoomInfo, key:number)=>(
                <RoomPrint data={data} key={key} pos={"mirror"}/>
              ))}
              {nodes?.length && nodes?.map((data:any, key:number)=>(
                <NodePrint data={data} key={key}/>
              ))}
              {bles?.length && bles?.map((data:any, key:number)=>(
                <BLEPrint data={data} key={key}/>
              ))}
            </div>
          </div>

          <canvas hidden id="mycanvas2" ref={saveRef}></canvas>
        </div>

        <div className={`${floor ? 'flex flex-col' : 'hidden'} w-fit px-10 py-10 gap-3`}>
          Room List
          {rooms?.map((data:RoomInfo,key:number)=>(
            <RoomButton data={data} key={key}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withAuth(Home);
