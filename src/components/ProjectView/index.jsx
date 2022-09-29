import React from 'react';
import { Input } from '../Input';
import { Text } from '../Text';
import {
  Container,
  Header,
} from "./styles";


export const ProjectView = ({ props }) => {

    return (
      <Container>
        <Header>
          <Input
            onChange={() => {}}
            height={30}
            width="250px"
            type="search"
            placeholder="Search..."
          />
          <div
            style={{
              display: "flex",
            }}
          >
            <Text
              content="My Customer / "
              type="text"
              size="16px"
            />
            <Text
              content=" My Project"
              type="title"
              size="16px"
            />
          </div>
        </Header>
      </Container>
    );
}