import { promises as fs } from 'fs'
//
const buildCommon = {
  /**
  * 
  * @param
  *
  * @return
  */  
  getEntryItems: async function(directoryPath: string): Promise<any>
  {
    try {
      const targetFiles: any[] = [];
      const targetObj: any= {};
      const files = await fs.readdir(directoryPath);
      files.forEach(file => {
        const vEnd = file.endsWith(".tsx");
        //console.log("vEnd=", vEnd);
        if(vEnd) {
          let tmpName = directoryPath + "/" + file;
          let nameNoneExt = file.replace(".tsx", '');
          //          console.log("nameNoneExt=", nameNoneExt);
          let myObj = new Object();
          myObj[nameNoneExt] = tmpName;
          Object.assign(targetObj, myObj);
        }
      });
      return targetObj;
    } catch (error) {
      console.error('Error getEntryItems:', error);
    }
  },
}
export default buildCommon;
