import Styled from '@emotion/styled';

export const Form = Styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Label = Styled.label`
    margin-bottom: 5px;
    color: #1f76c1;

`;

export const Input = Styled.input`
    display: block;
    width: 350px;
    height: 30px;
    margin-bottom: 15px;
    border: none;
    border-bottom: 2px solid #1f76c1;
    color: #1f76c1;

&:focus{
    outline:none;
	border: 1px solid #1f76c1;
    border-radius:5px;
   
}

 &::placeholder {
    font: inherit;
    font-size: 16px;
    color:#1f76c1;
  }
`;

export const Button = Styled.button`
display: inline-block;
    height: 28px;
    background-color: white;
    color: #1f76c1;
    border: 1px solid #1f76c1;
    border-radius: 3px;
    cursor: pointer;
    outline: none;

&:focus,&:hover{
	background-color: #1f76c1;
    color: white;
	
}
`;
