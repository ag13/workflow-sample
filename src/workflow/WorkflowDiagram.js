import React, { useState, useCallback, useEffect } from 'react';
import {
  DiagramComponent
} from "@syncfusion/ej2-react-diagrams"


export const WorkflowDiagram = ({onNodeClick}) => {

    const [clickedNodeId, setClickedNodeId] = useState('')

  let diagramInstance

  const sequentialWorkflow = {
      nodes: [
        {
          id: "node1",
          height: 100,
          width: 100,
          offsetX: 200,
          offsetY: 100,
          annotations: [
            {
              content: "Step 1 - Document Selection"
            }
          ]
        //   shape: {
        //     type: 'HTML',
        //   }
        },
        {
          id: "node2",
          height: 100,
          width: 100,
          offsetX: 400,
          offsetY: 300,
          annotations: [
            {
              content: "Step 2 - Document Review"
            }
          ]
        }
      ],
      connectors: [
        {
          id: "connector1",
          sourceID: "node1",
          targetID: "node2"
        }
      ]
  }

  useEffect(() => {
      if(clickedNodeId){
        onNodeClick && onNodeClick(clickedNodeId)
      }
  }, [clickedNodeId, onNodeClick])


  const setTemplate = useCallback((props) => {
    if(props.id === 'node1'){
      return (<button onClick={() => alert('test')}>Test</button>)
    }
  }, [])
  

  return (
        <DiagramComponent id="diagram" width={"100%"} height={"550px"} 
            ref={diagram => (diagramInstance = diagram)}
            nodeTemplate={setTemplate}
            created={(args) => {
                sequentialWorkflow.nodes.forEach(node => {
                    diagramInstance.add(node)
                })
                sequentialWorkflow.connectors.forEach(connector => {
                    diagramInstance.add(connector)
                })
            }}
            click={(args) => {
                if(args){
                    const clickedObj = args.actualObject
                    const clickedObjId = clickedObj.properties.id
                    setClickedNodeId(clickedObjId)
                }
            }}
       />
  );
}
