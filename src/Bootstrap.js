import React from "react"


class Bootstrap extends React.Component{
   
    constructor()   {
        super()
       
        this.state = {
        kind : ""
        } 
    }
    
    render(){

                const editName = (oldName, name, arr) =>
    arr.map(item => {
        if (item.name === oldName) {
            console.log("this is ...item", ...item)
            return {
            ...item,
            name
            };
            } else {
        return item;
        }
    });
     let schools = [
                    { name: "Yorktown" },
                    { name: "Stratford" },
                    { name: "Washington & Liberty" },
                    { name: "Wakefield" }
                   ];
    let updatedSchools = editName("Stratford", "HB Woodlawn", schools);
        return(
            <div>
                <button type="button" className="btn">Basic</button>
                <button type="button" className="btn btn-default">Default</button>
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-link">Link</button>     
                <br />

                <label>
                <input type="checkbox"  value="vanil" checked={this.state.type}/>
                vanil</label>
                <br />

                <label>
                <input type="checkbox" value="chocolate"  checked={this.state.type}/>
                chocolate</label>
            </div>
        )
    }
}

export default Bootstrap