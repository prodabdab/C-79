var name_array=[];

function Register() {

    var array_name1=document.getElementById("name_1").value;
    var array_name2=document.getElementById("name_2").value;
    var array_name3=document.getElementById("name_3").value;
    var array_name4=document.getElementById("name_4").value;

    name_array.push(array_name1);
    name_array.push(array_name2);
    name_array.push(array_name3);
    name_array.push(array_name4);

    document.getElementById("output").innerHTML=name_array;
    document.getElementById("Register").style.display="none";
    document.getElementById("Sort").style.display="inline-block";
}

function Sort() {
    name_array.sort();
    document.getElementById("output").innerHTML=name_array;
}