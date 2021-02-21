import React from 'react';
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import tw from "twin.macro";
import styled from "styled-components";

const Button = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;


export const SubmitButtton = ({ onSubmit }) => {
    return (
        <Button onClick={onSubmit}>
            <SignUpIcon className="icon" />
            <span className="text">{'Zarejestruj się'}</span>
        </Button>
    )
}