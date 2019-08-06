import React from 'react';

class Calc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.noOfChocolates = this.noOfChocolates.bind(this);
        
    }


    handleClick() {
        var myInput=this.state.input;
        var wrappersToGetOneChocolateFree = 3;
        var totalNoofChocs=myInput*4;
        var initialWrappers=myInput*4;
        if (this.state.input !== '' && !isNaN(this.state.input) ){
            // alert("Input is " + this.state.input);
            this.noOfChocolates(initialWrappers,totalNoofChocs,wrappersToGetOneChocolateFree);


        }
        else
        {
            alert("Please provide a numeric input");
        }
    }

    
    noOfChocolates( wrappers,  totalChocolates,  wrappersToGetOneChocolateFree) {

        if (wrappers < wrappersToGetOneChocolateFree) {
            console.log("Total Number of chocolates are " +totalChocolates) 
            alert("Total Number of chocolates are " +totalChocolates)  ;
			return;
        }
        var chocolatesFromWrapper = parseInt(wrappers / wrappersToGetOneChocolateFree);
		totalChocolates = totalChocolates + chocolatesFromWrapper;
		
        var wrapperFromChocolates = chocolatesFromWrapper;
        var leftOverWrappers = wrappers % wrappersToGetOneChocolateFree;
        wrappers = wrapperFromChocolates + leftOverWrappers;
        this.noOfChocolates(wrappers, totalChocolates,wrappersToGetOneChocolateFree);
        }
    
        
    handleChange(e) {
        this.setState({ input: e.target.value });
      }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <p> A shop was selling 4 chocolates for ₹1 and if you return three wrappers you get 1 chocolate free. If so, how many chocolates can you get for Rs. N. Write a program with input as N which will be entered.</p>
                <h2>Welcome to Chocolate Calculator.</h2>
                <div>Enter the amount: <input type="text" onChange={ this.handleChange } /></div>
        <input
          type="button"
          value="Get Chocs"
          onClick={this.handleClick}
        />
              
            </div>
        );
    }
}

export default Calc;