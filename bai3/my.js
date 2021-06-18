var arr=[];
let i,j,t;
for(i=1;i<=10;i++)
{
    arr[i]=+prompt("Nhap phan tu thu "+i+" cua mang : ")
}
document.getElementById('arr').innerHTML="Mang gom : "+arr+"<br>";
for(i=1;i<=arr.length;i++)
{
    for(j=1;j<=arr.length;j++)
    {
if(arr[i]>arr[j])
{
    t=arr[i];
    arr[i]=arr[j];
    arr[j]=t;
}
}
}
document.getElementById('output').innerHTML="Mang sau khi sap xep giam dan : "+arr;