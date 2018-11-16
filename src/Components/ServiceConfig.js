let ServiceConfig = {
    安监局:SafetySupervision,
    工商局:[],
    环保局:Environmental,
    交通局:Traffic,
    民政局:CivilAffairs,
    气象局:Weather,
    水利局:WaterControl,
    消防支队:[],
};
let SafetySupervision =[
    {
        chineseName:'获取储罐信息',
        name:'GetStorageTankInfo',
        service:'SafetySupervisionService.svc/GetStorageTankInfo?region={region}',
        example:'SafetySupervisionService.svc/GetStorageTankInfo?region=常熟市',
    },
];
let Environmental=[
    {
        chineseName:'获取地区信息',
        name:'GetRegionInfo',
        service:'EnvironmentalService.svc/GetRegionInfo',
        example:'EnvironmentalService.svc/GetRegionInfo',
    },
    {
        chineseName:'按日获取AQI数据',
        name:'GetDayAQI',
        service:'EnvironmentalService.svc/GetDayAQI?portId={portId}&dateTime={dateTime}',
        example:'EnvironmentalService.svc/GetDayAQI?portId=88&dateTime=2018-09-28',
    },
    {
        chineseName:'按小时获取AQI数据',
        name:'GetHourAQI',
        service:'EnvironmentalService.svc/GetHourAQI?portId={portId}&dateTime={dateTime}',
        example:'EnvironmentalService.svc/GetHourAQI?portId=88&dateTime=2018-09-28 11:00',
    },
];
let Traffic=[];
let CivilAffairs=[];
let Weather=[];
let WaterControl=[];
export default ServiceConfig;