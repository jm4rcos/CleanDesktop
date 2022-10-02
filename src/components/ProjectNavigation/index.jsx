import React, { useState, useEffect, useContext } from "react";
import { Container, NavigationItem } from "./styles";
import { BiFolder } from "react-icons/bi";
import useFetch from "../../hooks/useFetch";
import { Text } from "../Text";
import NavigationContext from "../../contexts/NavigationContext";

export const ProjectNavigation = ({ ID, name, itemClass }) => {
  const [selected, setSelected] = useState(0);
  const { setProjectData, setForceUpdate, forceUpdate } = useContext(NavigationContext);

  const { data, loading } = useFetch({
    apiMethod: "production.executeSQL",
    apiParams: {
      sql: `SELECT job.name, job.ID FROM job, customer WHERE customer.ID = '${ID}'`,
    },
    update: forceUpdate
  });


  function setData(dataItem, selected) {
    setForceUpdate(!forceUpdate);
    setProjectData(dataItem);
    setSelected(selected);
    console.log(dataItem, selected);
  }

  return (
    <Container>
      {loading && <p>Loading...</p>}
      {data !== null &&
        data.result.objectList.map((item, index) => {
          return (
            <NavigationItem
              key={index}
              selectedItem={selected === index ? true : false}
              onClick={() => setData(item, index)}
              style={{
              transition: 'all .5s'
              }}
            >
              <BiFolder
              size={24}
              color={selected === index ? "#1E49DC" : "#82839A"}
            />
            <Text
              content={item[0]}
              size="16px"
              type="title"
              color={selected === index ? "#1E49DC" : "#82839A"}
            />
            </NavigationItem>
          );
        })}
    </Container>
  );
};
