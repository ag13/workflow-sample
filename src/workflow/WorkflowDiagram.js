import React, { useState, useCallback, useEffect } from 'react';
import {
  DiagramComponent
} from "@syncfusion/ej2-react-diagrams"


export const WorkflowDiagram = ({type, onNodeClick}) => {

  let diagramInstance

  const [workflowType, setWorkflowType] = useState({})

  useEffect(() => {
    if(type && type === 'sequential'){
      const sequential = {
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
              },
              {
                stepType: "documentUpload"
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
            offsetY: 100,
            annotations: [
              {
                content: "Step 2 - Document Review"
              },
              {
                stepType: "singleReview"
              }
            ]
          },
          {
            id: "node3",
            height: 100,
            width: 100,
            offsetX: 600,
            offsetY: 100,
            annotations: [
              {
                content: "Step 3 - Document Review"
              },
              {
                stepType: "singleReview"
              }
            ]
          },
          {
            id: "node4",
            height: 100,
            width: 100,
            offsetX: 800,
            offsetY: 100,
            annotations: [
              {
                content: "Step 4 - Document Review"
              },
              {
                stepType: "singleReview"
              }
            ]
          }
        ],
        connectors: [
          {
            id: "connector1",
            sourceID: "node1",
            targetID: "node2"
          },
          {
            id: "connector2",
            sourceID: "node2",
            targetID: "node3"
          },
          {
            id: "connector3",
            sourceID: "node3",
            targetID: "node4"
          }
        ]
      }
      setWorkflowType(sequential)
    }else if(type === 'parallel'){
      const parallel = {
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
              },
              {
                stepType: "documentUpload"
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
            offsetY: 100,
            annotations: [
              {
                content: "Step 2 - Document Review"
              },
              {
                stepType: "multiReview"
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
      setWorkflowType(parallel)
    }
  }, [type])

  

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
                workflowType.nodes.forEach(node => {
                    diagramInstance.add(node)
                })
                workflowType.connectors.forEach(connector => {
                    diagramInstance.add(connector)
                })
            }}
            click={(args) => {
                if(args){
                    const clickedObj = args.actualObject
                    if(clickedObj){
                      const clickedObjType = clickedObj.properties.annotations[1].stepType
                      onNodeClick && onNodeClick(clickedObjType)
                    }
                }
            }}
       />
  );
}
