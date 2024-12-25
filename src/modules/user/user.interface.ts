type Tuser = {
name:string,
email:string,
password:string,
age:number,
photo?:string,
role:["Traveller","Admin"],
status:["Active","Inactive"],
createdAt:Date,
updatedAt:Date
}
export default Tuser;