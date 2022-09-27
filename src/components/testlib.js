import React, { useEffect, useState, useRef } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
// import "./styles.scss";
const Testlib = () => {
  const excalidrawRef = useRef();
  useEffect(() => {
    const onHashChange = () => {
      const hash = new URLSearchParams(window.location.hash.slice(1));
      const libraryUrl = hash.get('addLibrary');
      //   if (libraryUrl) {
      //     excalidrawRef.current!.updateLibrary(libraryUrl, hash.get("token"));
      //   }
    };
    window.addEventListener('hashchange', onHashChange, false);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);
  return (
    <div className="App">
      <div style={{height: "800px", margin: "50px"}}>
        <Excalidraw
          ref={excalidrawRef}
          //   initialData={InitialData}
          onChange={(elements, state) =>
            console.log('Elements :', elements, 'State : ', state)
          }
          onPointerUpdate={(payload) => console.log(payload)}
          onCollabButtonClick={() =>
            window.alert('You clicked on collab button')
          }
          //   viewModeEnabled={viewModeEnabled}
          //   zenModeEnabled={zenModeEnabled}
          //   gridModeEnabled={gridModeEnabled}
          //   theme={theme}
          name='Custom name of drawing'
          //   renderFooter={renderFooter}
          //   renderTopRightUI={renderTopRightUI}
        />
      </div>
    </div>
  );
};

export default Testlib;
