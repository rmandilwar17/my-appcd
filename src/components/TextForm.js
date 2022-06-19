import React, {useState} from 'react'





export default function TextForm(props) {

    const handleUpClick =()=>{





        console.log("Upper Case was clicked"+ text);
        let  newtext=text.toUpperCase();

        setText(newtext);
        props.showAlert("converted to uppercase!", "success");
    }

    const handleLoClick =()=>{


       console.log("LoweCase was clicked"+text);
       let newtext= text.toLowerCase();

       setText(newtext);
       props.showAlert("converted to lowercase!", "success");


    }

    

   /* const handleUpClick =()=>{

        console.log("UpperCase was clicked");




    }*/

    const handleOnChange =(event)=>{



        console.log(" onchange");
        setText(event.target.value);
    }


    const handleCopy=()=>{

      console.log("I am copy");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);

      props.showAlert("Copied To Clipboard!", "success");







    }

    const handleExtraSpaces=()=>{

     let newText=text.split(/[ ] +/);
     setText(newText.join(" "))
     props.showAlert("Extra Space Removed!", "success");




    }
    const [text, setText]= useState ('');
   // text="new text";
    //setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#342d2d'}}>   
  <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#342d2d'}} id="myBox"  rows="8"></textarea>
</div>  

<button className="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>CopyText</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#342d2d'}}>

     <h1> Your text Summary</h1>
     <p> {text.split(" ").length} words and {text.length} characters</p>
     <p> {0.008* text.split(" ").length} Minutes of Reading</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something to preview it here"}</p>

    </div>

    </>
  )
}
