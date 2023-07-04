import Styled from '@emotion/styled';

export const ContactList = Styled.ul`
width: 350px;
list-style: none;
padding: 0;
margin-top: 0;
margin-left: auto;
margin-right: auto;
border: 1px solid #1f76c1;
border-radius: 5px;
padding: 5px;
box-shadow: rgb(26 25 24 / 50%) 2px 2px 5px 2px;

`;

export const ContactListItem = Styled.li`
display: flex;
align-items: center;
margin-bottom: 8px;
`;

export const Text = Styled.p`
margin: 0;
color: #1f76c1;
`;

export const Button = Styled.button`
display: inline-block;
height: 28px;
margin-left:10px;
background-color: white;

color: #1f76c1;
border: 1px solid #1f76c1;
border-radius: 3px;
cursor: pointer;
outline: none;

&:focus,&:hover{
	background-color: #1f76c1;
    color: white;

`;
