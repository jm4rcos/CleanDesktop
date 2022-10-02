import React, { useEffect, useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import { Input } from '../Input';
import { Text } from '../Text';
import {
  Container,
  Header,
  Content,
  View,
  Card,
} from "./styles";
import NavigationContext, {
} from "../../contexts/NavigationContext";

export const ProjectView = (props) => {
  const { projectData, forceUpdate, setForceUpdate } = useContext(NavigationContext);

  const { data, loading, update } = useFetch({
    apiMethod: "production.executeSQL",
    apiParams: {
      sql: `SELECT document.name, document.ID FROM document, job WHERE job.ID = '${projectData[1]}'`,
    },
    update: forceUpdate
  });

  function getData(){
    setForceUpdate(forceUpdate);
    console.log("projectView", projectData);
    console.log("data: ", data);
  }

  useEffect(() => {
    getData();
  }, [projectData]);

  if(projectData !== null && projectData.length > 0) {
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
              marginTop: "30px",
            }}
          >
            <Text content="My Customer / " type="text" size="16px" />
            <Text content=" My Project" type="title" size="16px" />
          </div>
        </Header>

        <Content>

          {data !== null &&
            data.result.objectList.map((item, index) => {
              return (
                <Card key={item[1]}>
                  <View
                    src={`${window.location.origin}/Esprit/public/Interface/preview/${item[1]}`}
                    alt={item[0]}
                  />
                  <Text content={item[0]} type="text" size="16px" />
                </Card>
              );
            })
          }
        </Content>
      </Container>
    );
  }

  return <div></div>
}