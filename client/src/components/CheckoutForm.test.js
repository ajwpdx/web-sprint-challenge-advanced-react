import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(
        <CheckoutForm/>
    )
    
    expect(screen.getByText(/Checkout Form/i)).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm/>)
    //first name
    const fName = screen.getByLabelText(/first name:/i)
    fireEvent.change(fName, {target: {value: 'Alex'}})
    //last name
    const lName = screen.getByLabelText(/last name:/i)
    fireEvent.change(lName, {target: {value: 'Williams'}})
    //Address
    const address = screen.getByLabelText(/address:/i)
    fireEvent.change(address, {target: {value: '1234 5th St.'}})
    //City
    const city = screen.getByLabelText(/city:/i)
    fireEvent.change(city, {target: {value: 'Portland'}})
    //State
    const state = screen.getByLabelText(/state:/i)
    fireEvent.change(state, {target: {value: 'OR'}})
    //Zip
    const zip = screen.getByLabelText(/zip:/i)
    fireEvent.change(zip, {target: {value: '97204'}})
    //submit form
    const submit = screen.getByRole('button', {name: /checkout/i})
    fireEvent.click(submit)

    expect(screen.getByText(/Your new green friends will be shipped to:/i)).toBeInTheDocument()
    expect(screen.getByText(/Alex Williams/i)).toBeInTheDocument()
});
