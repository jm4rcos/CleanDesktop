import React from 'react';
// import { BiBuildings } from "react-icons/bi";
// import { RiArchiveDrawerLine } from "react-icons/ri";
import {
  Container,
  NavigationItem
} from "./styles";

import useFetch from '../../hooks/useFetch';

// const staticList = {
//   result: {
//     objectList: [
//       {
//         ID: "709",
//         class: "Customer",
//         description: "",
//         name: "My Customer",
//       },
//       {
//         ID: "3016",
//         class: "Folder",
//         description: "",
//         category: "FSFolder",
//         name: "/DAM",
//       },
//       {
//         ID: "3016",
//         class: "Folder",
//         description: "",
//         category: "Folder",
//         name: "/Teste",
//       },
//     ],
//   },
// };

export const ProjectNavigation = ({ ID, name, itemClass }) => {
    // const [selected, setSelected] = useState(0);

    const { data } = useFetch({
      apiMethod: "production.executeSQL",
      apiParams: {
        sql: "SELECT job.name, job.ID FROM job, customer WHERE customer.ID = '709'",
      },
    });

    
    return <Container>
      {/* <NavigationItem> */}
        <button onClick={() => console.log("data: ", data)}>api</button>
      {/* </NavigationItem> */}
    </Container>
    
}