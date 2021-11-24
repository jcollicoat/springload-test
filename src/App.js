import { useState } from "react";
import styled from "styled-components";

import "./App.css";

const Wrapper = styled.div`
  margin: 5rem auto;
  max-width: 45rem;
  padding: 0 3em 5rem 3em;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 1em;
`;

const Form = styled.form`
  width: 100%;
`;

const Group = styled.div`
  margin-bottom: 1.5em;
  text-align: ${(props) => props.centered && "center"};
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5em;
`;

const Sublabel = styled.span`
  display: block;
  font-size: 0.75em;
  margin: -0.5rem 0 0.5rem 0;
  opacity: 0.75;
`;

const Input = styled.input`
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 0.25em;
  display: block;
  outline: none;
  padding: 0.5em;
  width: 100%;

  &:focus {
    border-color: rgba(0, 0, 0, 0.75);
  }

  &:invalid {
    border-color: ${(props) => props.hasData && `rgba(255, 100, 100, 1)`};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const MultiName = styled.p`
  font-weight: 500;
  margin-bottom: 0.5em;
`;

const OptionGroup = styled.div`
  margin-bottom: 0.5em;
  width: 100%;
`;

const Radio = styled.input`
  margin-right: 0.5em;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Check = styled.input`
  margin-right: 0.5em;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Submit = styled.input`
  background-color: black;
  border: none;
  border-radius: 0.25em;
  color: white;
  cursor: pointer;
  font-weight: 600;
  height: 3em;
  line-height: 1;
  margin: 2em 0 1em 0;
  min-width: 10rem;
  padding: 0.75em 3em;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #333333;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background-color: black;
    }
  }
`;

function App() {
  // Initial data object
  const [data, setData] = useState({
    email: "",
    password: "",
    color: "",
    animals: [],
    tiger: "",
  });

  // Form status
  const [status, setStatus] = useState("initial");

  // Handle input changes
  const handleChange = (e) => {
    // Match input name to data key
    const key = e.target.name.toLowerCase();
    // Update data
    setData({
      ...data,
      [key]: e.target.value,
    });
  };

  // Handle animal input changes (in array)
  const handleAnimalChange = (e) => {
    // Check for animal existing in array
    !data.animals.includes(e.target.value)
      ? // Add animal to array
        setData({
          ...data,
          animals: [...data.animals, e.target.value],
        })
      : // Remove animal from array
        setData({
          ...data,
          animals: data.animals.filter((animal) => animal !== e.target.value),
        });
    // Reset Type of Tiger field when Tiger is unchecked
    e.target.value === "tiger" &&
      data.animals.includes("tiger") &&
      setData({
        ...data,
        tiger: "",
        animals: data.animals.filter((animal) => animal !== e.target.value),
      });
  };

  // Dummy submission function
  const handleSubmit = (e) => {
    // Disable default submission so we can pipe data off elsewhere
    e.preventDefault();

    // Set form status to submitting
    setStatus("submitting");

    // Log data to console as an example
    console.log(data);

    //
    //
    // Do whatever with form data here (send off to API etc)
    //
    //

    // Set form status to submitted
    // Add a delay of 2 seconds for the sake of showing the example
    setTimeout(() => {
      setStatus("submitted");
    }, 3000);
  };

  // Log data to console during development
  //console.log(data);

  // Log status to console during development
  //console.log(status);

  return (
    <Wrapper>
      <Title>Contact Form</Title>
      <Form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
        <Group>
          <Label htmlFor="email">Email Address:</Label>
          <Sublabel>Required</Sublabel>
          <Input
            disabled={status !== "initial"}
            hasData={data.email !== ""}
            id="email"
            name="email"
            onChange={handleChange}
            pattern="[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            title="Please enter a valid email address."
            type="email"
            value={data.email}
          ></Input>
        </Group>
        <Group>
          <Label htmlFor="password">Password:</Label>
          <Sublabel>Must be longer than 8 characters</Sublabel>
          <Input
            disabled={status !== "initial"}
            hasData={data.password !== ""}
            id="password"
            minLength="9"
            name="password"
            onChange={handleChange}
            type="password"
            value={data.password}
          ></Input>
        </Group>
        <Group>
          <MultiName>Colour:</MultiName>
          <OptionGroup>
            <Radio
              checked={data.color === "blue"}
              disabled={status !== "initial"}
              onChange={handleChange}
              id="blue"
              name="color"
              type="radio"
              value="blue"
            />
            <label htmlFor="blue">Blue</label>
          </OptionGroup>
          <OptionGroup>
            <Radio
              checked={data.color === "green"}
              disabled={status !== "initial"}
              onChange={handleChange}
              id="green"
              name="color"
              type="radio"
              value="green"
            />
            <label htmlFor="green">Green</label>
          </OptionGroup>
          <OptionGroup>
            <Radio
              checked={data.color === "red"}
              disabled={status !== "initial"}
              onChange={handleChange}
              id="red"
              name="color"
              type="radio"
              value="red"
            />
            <label htmlFor="red">Red</label>
          </OptionGroup>
          <OptionGroup>
            <Radio
              checked={data.color === "black"}
              disabled={status !== "initial"}
              onChange={handleChange}
              id="black"
              name="color"
              type="radio"
              value="black"
            />
            <label htmlFor="black">Black</label>
          </OptionGroup>
          <OptionGroup>
            <Radio
              checked={data.color === "brown"}
              disabled={status !== "initial"}
              onChange={handleChange}
              id="brown"
              name="color"
              type="radio"
              value="brown"
            />
            <label htmlFor="brown">Brown</label>
          </OptionGroup>
        </Group>
        <Group>
          <MultiName>Animals:</MultiName>
          <OptionGroup>
            <Check
              checked={data.animals.includes("bear")}
              disabled={status !== "initial"}
              onChange={handleAnimalChange}
              id="bear"
              name="animals"
              type="checkbox"
              value="bear"
            />
            <label htmlFor="bear">Bear</label>
          </OptionGroup>
          <OptionGroup>
            <Check
              checked={data.animals.includes("tiger")}
              disabled={status !== "initial"}
              onChange={handleAnimalChange}
              id="tiger"
              name="animals"
              type="checkbox"
              value="tiger"
            />
            <label htmlFor="tiger">Tiger</label>
          </OptionGroup>
          <OptionGroup>
            <Check
              checked={data.animals.includes("snake")}
              disabled={status !== "initial"}
              onChange={handleAnimalChange}
              id="snake"
              name="animals"
              type="checkbox"
              value="snake"
            />
            <label htmlFor="snake">Snake</label>
          </OptionGroup>
          <OptionGroup>
            <Check
              checked={data.animals.includes("donkey")}
              disabled={status !== "initial"}
              onChange={handleAnimalChange}
              id="donkey"
              name="animals"
              type="checkbox"
              value="donkey"
            />
            <label htmlFor="donkey">Donkey</label>
          </OptionGroup>
        </Group>
        {data.animals.includes("tiger") && (
          <Group>
            <Label htmlFor="email">Type of Tiger:</Label>
            <Sublabel>Required</Sublabel>
            <Input
              disabled={status !== "initial"}
              hasData={data.tiger !== ""}
              id="tiger"
              name="tiger"
              onChange={handleChange}
              required
              type="text"
              value={data.tiger}
            ></Input>
          </Group>
        )}
        <Group centered>
          <Submit
            disabled={status !== "initial"}
            type="submit"
            value={
              status === "initial"
                ? "Submit"
                : status === "submitting"
                ? "Submitting..."
                : "Submitted"
            }
          />
          {status === "submitted" && (
            <p>Thanks for submitting our contact form!</p>
          )}
        </Group>
      </Form>
    </Wrapper>
  );
}

export default App;
