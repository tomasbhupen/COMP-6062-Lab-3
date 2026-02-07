//Area of a triangle
function triangleArea(base,height)
{
    let area=(base*height)/2;
    console.log(area.toFixed(1));
}

triangleArea(3,4);
triangleArea(5,7);

//Volume of a sphere
function volumeSphere(radius)
{
    let volume=(4/3)*Math.PI*(radius**3);
    console.log(volume.toFixed(1));
}

volumeSphere(3);
volumeSphere(5);

//Converting other distance units to meters
function convertToMeters(dist,unit)
{
    //Short Circuit
    if(dist==0 || unit == 'm')
    {
        console.log(dist.toFixed(2));
        return;
    }

    let meters;
    switch(unit)
    {
        case 'km':
            meters=dist*1000;
            break;
        case 'y':
            meters=dist*0.9144;
            break;
        case 'mi':
            meters=dist*1609.34;
            break;
        default:
            meters=dist;
            break;
    }
    console.log(meters.toFixed(2));
}

convertToMeters(50,'m');
convertToMeters(100,'y');
convertToMeters(1,'mi');
convertToMeters(1.234,'km');

//Time string to seconds
function timeToSeconds(time)
{
    let parts=time.split(':').map(Number);
    let seconds=0;

    if(parts.length==3) //HH:MM:SS
    {
        seconds=(parts[0]*3600)+(parts[1]*60)+parts[2];
    }
    else if(parts.length==2) //MM:SS
    {
        seconds=(parts[0]*60)+(parts[1]);
    }
    else //SS
    {
        seconds=parts[0];
    }
    console.log(seconds);
}

timeToSeconds('02:33:21');
timeToSeconds('00:04:51');
timeToSeconds('04:51');
timeToSeconds('00:13');
timeToSeconds('13');
