import type { NextPage } from 'next'
import { db, storage, _db, _storage } from '../config/firebase'
import { useEffect, useRef, useState } from 'react'
import withAuth from '../middleware/withAuth'
import * as htmlToImage from "html-to-image"
import { useDispatch, useSelector } from 'react-redux'
import { setBles, setLinks, setNodes, setRooms } from '../redux/slices/roomSlice'
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
  const links = useSelector((state:any)=>state.rooms.links);

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
  const [showLink, setShowLink] = useState(false);
  const [isDeleteNode, setIsDeleteNode] = useState(false);

  // ?????? ????????? ?????? ??????
  // ?????? ?????? ?????? ??????
  // ?????? ?????? ?????? ?????? ??????
  // ?????? ???????????? ?????? ??????
  let positionArr = [2];    // ?????? ?????? ??? ????????? ?????? ?????? ??????
  let withVal = "";         // ????????? ????????? ?????? ?????? ????????? ??????????????? ?????? ????????? ??? ???????????? ?????? 
  let redirect = [3];       // ??????????????? ?????? ????????? ???????????? ?????? 

  let resultTemplate;       // ?????? ???????????? ??? ?????? ?????? ???????????? ??????

  let count = 0;            // ?????? ???????????? ?????? ????????? ???????????? ?????? ??????

  const saveRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(()=>{
    if(floor!=="") {
      _storage.getDownloadURL(_storage.ref(storage, `floor${floor}/${floor}??? ?????? ??????(??????x).png`)).then((url)=>setFB(url));
      _storage.getDownloadURL(_storage.ref(storage, `floor${floor}/${floor}??? ?????? ??????(??????x)(?????????).png`)).then((url)=>setMB(url));

      const unsubscribe = _db.onValue(_db.ref(db, floor),
        (snapshot)=>{
          const lst : any = [];
          if(snapshot.exists()) {
            snapshot.forEach((dat)=>{
              const pos = dat.val()['position_key'];
              if(pos) lst.push({id:dat.key, ...dat.val()});
            })
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
          const lst2 : any = [];
          if(snapshot.exists()) {
            snapshot.forEach((dat)=>{
              lst2.push({id:dat.key, ...dat.val(),links:dat.val().links || []});
            })
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
          const lst : any = [];
          if(snapshot.exists()) {
            snapshot.forEach((dat)=>{
              const data = dat.val();
              lst.push({id:dat.key, x:data.x * 1180/1837, y:data.y * 1180/1837});
            })
          }
          dispatch(setBles(lst));
      })
      return unsubscribe;
    }
  }, [floor])

  useEffect(()=>{
    if(floor!=="") {
      const unsubscribe = _db.onValue(_db.ref(db,`links/${floor}`),
        (snapshot)=>{
          const lst : any = [];
          if(snapshot.exists()) {
            snapshot.forEach((dat)=>{
              const data = dat.val();
              lst.push({id:dat.key, ...data}); 
            })
          }
          dispatch(setLinks(lst));
      })
      return unsubscribe;
    }
  }, [floor])

  // useEffect(()=>{
  //   const drawLink = async () => {
  //     const nodes = (await _db.get(_db.ref(db, `nodes/${floor}`))).val();
  //     const ctx = canvasRef.current?.getContext("2d");
  //     if(ctx) {
  //       ctx!.lineWidth = 200;
  //       ctx!.strokeStyle = "blue";
  //     }
  //     ctx?.clearRect(0,0,517,1180);
  //     links.forEach((data:any)=>{
  //       ctx?.save();
  //       ctx?.beginPath();
  //       ctx?.moveTo(nodes[data.node1]?.x, nodes[data.node1]?.y);
  //       ctx?.lineTo(nodes[data.node2]?.x, nodes[data.node2]?.y);
  //       ctx?.closePath();
  //       ctx?.stroke();
  //       ctx?.restore();
  //     })
  //   }

  //   drawLink();
  // },[floor, showLink])

  const RoomButton = ({data, key}:any) => {
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
           -translate-x-[74px] translate-y-3
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
    /* document ???????????? ????????? mycavas2??? ????????? ??? ?????? ????????? ????????? */
    const canvas = saveRef.current;
    if (canvas) {
      /* canvas??? 2d Context??? ????????? */
      var ctx = canvas.getContext('2d');
      console.log("save path");
      /* url??? ?????? ????????? ????????? object??? 2??? ?????? (???, ??????)
      ?????? crossOrigin ????????? ???????????? ?????? anonymous??? ??????*/
      const imageObj = document.createElement("img");
      const pathObj = document.createElement("img");
      pathObj.setAttribute("crossOrigin", "anonymous");
      imageObj.setAttribute("crossOrigin", "anonymous");

      /* image url??? load?????? ???????????? Context??? ????????? ?????????
      path url??? load?????? ???????????? Context??? ????????? ??????
      ????????? map??? load??? ???, path??? load????????? path ????????? ????????? ??????*/
      imageObj.onload = async () => {
        pathObj.onload = async () => {

          /* ????????? url??? ?????????(???, ?????? ?????????)??? canvas??? ?????? */
          canvas.width=517;
          canvas.height=1180;
          ctx?.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
          ctx?.drawImage(pathObj, 0, 0, canvas.width, canvas.height);

          /* ????????? ?????? ????????? ?????? ????????? ?????? ????????? ???????????? ????????? ?????? ?????? */
          
          canvas.toBlob(async (blob)=>{
            await _storage.uploadBytes(_storage.ref(storage, `result/floor${floor}/${roomNum}.png`),blob as Blob);
            console.log(`save map ${roomNum}}`);
          })
          /* ????????? ???????????? ????????? ?????? Context??? ????????? */
          ctx?.clearRect(0, 0, canvas.width, canvas.height);
        }
        /* ????????? ????????? path url??? load??? (?????? ?????? ?????? ??????) */
        pathObj.src = await _storage.getDownloadURL(_storage.ref(storage, `path/floor${floorNum}/${roomNum}.png`));
      };
      /* ????????? ????????? map url??? load??? (?????? ?????? ?????? ??????) */
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

  // const deleteNode = async (node:NodeInfo) => {
  //   const nodeData  = (await _db.get(_db.ref(db, `nodes/${floor}`))).val();
  //   const linkData = (await _db.get(_db.ref(db, `links/${floor}`))).val();
  //   const nodeEntries = Object.entries(nodeData);
  //   const linkEntries = Object.values(linkData);
  //   const id = node.id;
  //   console.log(nodeEntries);
  //   const filterList = nodeEntries.filter((v:any)=> v[0]!==id);
  //   let newNode = {};
  //   // filterList.map((v,i)=>newNode[`${i}`]=)
  //   // await _db.set(_db.ref(db, `nodes/${floor}`),filterList);
  //   console.log(id);
  //   console.log(filterList);
  //   setIsDeleteNode(false);
  // }

  const handleNode = async (node:NodeInfo) => {
    if(isAddLink) await addLink(node);
    if(isSetNode) await setDestNode(node);
    // if(isDeleteNode) await deleteNode(node);
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
          <div className='flex flex-col justify-center items-center'>
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
          Specific
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
