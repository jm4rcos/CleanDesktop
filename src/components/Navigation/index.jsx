import React, { useState, useEffect } from 'react';
import { BiBuildings } from "react-icons/bi";
import { RiArchiveDrawerLine } from "react-icons/ri";
import {
  Navigation,
  NavigationItem,
} from "./styles";
import { Text } from "../Text";
import { ProjectNavigation } from '../ProjectNavigation'

const staticList = {
  result: {
    objectList: [
      {
        ID: "709",
        class: "Customer",
        description: "",
        name: "My Customer",
      },
      {
        ID: "3016",
        class: "Folder",
        description: "",
        category: "FSFolder",
        name: "/DAM",
      },
      {
        ID: "3016",
        class: "Folder",
        description: "",
        category: "Folder",
        name: "/Teste",
      },
    ],
  },
};

export const NavigationComponent = (result) => {
    const [selected, setSelected] = useState(0);
    const [data, setData] = useState(null);
    console.log("Navigation Props: ", result);

    function changeData (){
      setData(result.result.result)
      console.log(data);
    }

    useEffect(() => {
      changeData();
    }, [result])

    if(data !== null) {
        return (
          <Navigation>
            {data.objectList.map((item, index) => {
              if (item.class === "Customer" || item.category === "FSFolder") {
                return (
                  <>
                    <NavigationItem
                      key={item.ID}
                      selectedItem={selected === index ? true : false}
                      onClick={() => setSelected(index)}
                    >
                      {item.category === "FSFolder" ? (
                        <RiArchiveDrawerLine
                          size={24}
                          color={selected === index ? "#1E49DC" : "#d9d9d9"}
                        />
                      ) : (
                        <BiBuildings
                          size={24}
                          color={selected === index ? "#1E49DC" : "#d9d9d9"}
                        />
                      )}

                      <Text
                        content={item.name}
                        size="16px"
                        type="title"
                        color={selected === index ? "#1E49DC" : "#d9d9d9"}
                      />
                    </NavigationItem>
                    {selected === index && (
                      <ProjectNavigation
                        id={item.ID}
                        name={item.name}
                        itemClass={item.class}
                      />
                    )}
                  </>
                );
              }
            })}
          </Navigation>
        );
    } else {
        return (
          <Navigation>
            {staticList.result.objectList.map((item, index) => {
              if (item.class === "Customer" || item.category === "FSFolder") {
                return (
                  <>
                    <NavigationItem
                      key={item.ID}
                      selectedItem={selected === index ? true : false}
                      onClick={() => setSelected(index)}
                    >
                      {item.category === "FSFolder" ? (
                        <RiArchiveDrawerLine
                          size={24}
                          color={selected === index ? "#1E49DC" : "#d9d9d9"}
                        />
                      ) : (
                        <BiBuildings
                          size={24}
                          color={selected === index ? "#1E49DC" : "#d9d9d9"}
                        />
                      )}

                      <Text
                        content={item.name}
                        size="16px"
                        type="title"
                        color={selected === index ? "#1E49DC" : "#d9d9d9"}
                      />
                    </NavigationItem>
                    {selected === index && (
                      <ProjectNavigation id={item.ID} name={item.name} itemClass={item.class}/>
                    )}
                  </>
                );
              }
            })}
          </Navigation>
        );
    }
}