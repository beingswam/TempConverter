function ctof()
{   
    let celcius=document.getElementById("conv").value;
    let f=celcius*1.8 + 32
    document.getElementById("fahr").value=f;
}

function ftoc()
{   
    let fahren=document.getElementById("fahr").value;
    let c=(fahren - 32) / 1.8
    document.getElementById("conv").value=c;
}

function btnc()
{
    if(document.getElementById("conv").value)
    {
        ctof()
    }
    else
    {
        ftoc();
    }
}

