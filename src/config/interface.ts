export interface RoomInfo {
  name:string,
  charge:string,
  phone:string,
  position_key:{
    x:number,
    y:number,
  },
  specific:string,
  with:string,
}

export interface imageInfo {
  index:number,
  loc:object,
  backUrl:string,
  pathUrl:string,
}

export interface NodeInfo {
  id:number,
  x:number,
  y:number,
  links:LinkInfo[],
  dest:string[],
}

export interface LinkInfo {
  id:number,
  node1:number,
  node2:number,
  mass:number,
}