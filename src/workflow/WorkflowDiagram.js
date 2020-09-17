import React, { useState, useCallback, useEffect } from 'react';
import {
  DiagramComponent
} from "@syncfusion/ej2-react-diagrams"
import { useLocalStorage } from '../common'


export const WorkflowDiagram = ({ type, workflowId, onNodeClick }) => {

  let diagramInstance

  const [workflowType, setWorkflowType] = useState({})
  const [workflows] = useLocalStorage('ws:workflows', [])
  const green = '#61FF33' // color code for completed
  const grey = '#E5ECE2'  // color code for In progress
  const red = '#FA2116'   // color code for rejected

  useEffect(() => {
    if (type && type.toLowerCase() === 'sequential') {
      const sequential = {
        nodes: [
          {
            id: "node1",
            height: 100,
            width: 100,
            offsetX: 200,
            offsetY: 100,
            style: {
              fill: green,
            },
            annotations: [
              {
                content: "Step 1 - Document Selection"
              },
              {
                stepType: "documentUpload",
                stepNumber: "one"
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
            style: {
              fill: grey,
            },
            annotations: [
              {
                content: "Step 2 - Document Review"
              },
              {
                stepType: "singleReview",
                stepNumber: "two"
              }
            ]
          },
          {
            id: "node3",
            height: 100,
            width: 100,
            offsetX: 600,
            offsetY: 100,
            style: {
              fill: grey,
            },
            annotations: [
              {
                content: "Step 3 - Document Review"
              },
              {
                stepType: "singleReview",
                stepNumber: "three"
              }
            ]
          },
          {
            id: "node4",
            height: 100,
            width: 100,
            offsetX: 800,
            offsetY: 100,
            style: {
              fill: grey,
            },
            annotations: [
              {
                content: "Step 4 - Document Review"
              },
              {
                stepType: "singleReview",
                stepNumber: "four"
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
    } else if (type.toLowerCase() === 'parallel') {
      const parallel = {
        nodes: [
          {
            id: "node1",
            height: 100,
            width: 100,
            offsetX: 200,
            offsetY: 100,
            style: {
              fill: green,
            },
            annotations: [
              {
                content: "Step 1 - Document Selection"
              },
              {
                stepType: "documentUpload",
                stepNumber: "one"
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
            style: {
              fill: grey,
            },
            annotations: [
              {
                content: "Step 2 - Document Review"
              },
              {
                stepType: "multiReview",
                stepNumber: "two"
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

  useEffect(() => {
    // We might change the color of the steps of selected workflow
    // in this useeffect. Though we might also take another way.

    const selectedWorkflow = workflows.filter(item => item.id !== workflowId)
    console.log(selectedWorkflow.workflowId)
  }, [workflowId])

  const setTemplate = useCallback((props) => {
    if (props.id === 'node1') {
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
        if (args) {
          const clickedObj = args.actualObject
          if (clickedObj) {
            const clickedObjAnnotation = clickedObj.properties.annotations[1]
            onNodeClick && onNodeClick(clickedObjAnnotation)
          }
        }
      }}
    />
  );
}
