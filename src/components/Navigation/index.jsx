import React, { useState, useEffect } from 'react';
import { BiBuildings } from "react-icons/bi";
import { RiArchiveDrawerLine } from "react-icons/ri";
import {
  Navigation,
  NavigationItem,
} from "./styles";
import { Text } from "../Text";
import { ProjectNavigation } from '../ProjectNavigation'

export const NavigationComponent = (result) => {
    const [selected, setSelected] = useState(0);
    const [data, setData] = useState(null);

    //Uncomment to get ES data
    function changeData (){
      setData(result.result.result)
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
                          color={selected === index ? "#fff" : "#d9d9d9"}
                        />
                      ) : (
                        <BiBuildings
                          size={24}
                          color={selected === index ? "#fff" : "#d9d9d9"}
                        />
                      )}

                      <Text
                        content={item.name}
                        size="16px"
                        type="title"
                        color={selected === index ? "#fff" : "#d9d9d9"}
                      />
                    </NavigationItem>
                    {selected === index && (
                      <ProjectNavigation
                        ID={item.ID}
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
    }
}