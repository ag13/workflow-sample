import React, { useCallback } from 'react';
import {
  DiagramComponent
} from "@syncfusion/ej2-react-diagrams"


export const WorkflowDiagram = ({ workflowType, onNodeClick }) => {

  let diagramInstance

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
        console.log('nodes created ere')
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
