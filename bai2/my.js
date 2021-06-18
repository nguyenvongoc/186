var arr=[];
for(let i=1;i<=10;i++)
{
    arr[i]=+prompt("Nhap phan tu thu "+i+" cua mang : ")
}
function play()
{
   check=0;
    document.getElementById('arr').innerHTML="Mang gom : "+arr+"<br>";
    let number=+document.getElementById('number').value;
    for(let i=1;i<=arr.length;i++)
    {
        if(arr[i]==number)
        {
            check=1;
        }
    }
    console.log(check)
    if(check==0)
    {
        document.getElementById('output').innerHTML="Khong ton tai "+number+" trong mang !"
    }
    else 
    {
    for(let j=i=1;i<=arr.length;i++)
    {
    if(arr[i]!=number)
    {
       arr[j]=arr[i];
       j++;
    }
    }
        document.getElementById('output').innerHTML="Mang sau khi xoa "+number+" la :"+arr;
    }
}