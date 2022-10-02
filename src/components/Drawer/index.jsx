import React from 'react';
import { Text } from '../Text';
import {
  Avatar,
  Container,
  ProfileContainer,
} from "./styles";
import { FaChevronDown } from 'react-icons/fa'

import { NavigationComponent } from '../Navigation';


export const Drawer = ({ props }) => {

  //uncomment this line to build
  const productionList = props.productionList

    return (
      <Container>
        <Text
          content="ES Desktop"
          type="title"
          color="#FFB800"
          mb="30px"
          size="30px"
        />
        <ProfileContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Avatar />
            <Text
              content={
                // "Joao Marcos Teste"
                props.usrInfo === undefined
                  ? "Joao Marcos Teste"
                  : `${props.usrInfo["User/Properties/user/firstname"]} ${props.usrInfo["User/Properties/user/lastname"]}` //first name and last name
              }
              type="title"
            />
          </div>
          <FaChevronDown size={18} />
        </ProfileContainer>

        <NavigationComponent result={productionList} />
        {/* <NavigationComponent /> */}
      </Container>
    );
}