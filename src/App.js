import React from 'react'
import './App.css';
import {Album, StickyFooter, SignIn, CustomModal} from "../node_modules/designops/dist/index.js"

function App() {
  const [openModal, setOpenModal] = React.useState(false);
  const openModalHandler=()=>setOpenModal(true)
  const handleSuccess=()=>setOpenModal(false)
  const handleClose=()=>setOpenModal(false)
  return (
    <div>
      {/* component 1 */}
      <Album Heading="Photo Album" SubContent="Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely." />
      {/* component 2*/}

      <button class="btn success" onClick={openModalHandler}>
        Show Modal
      </button>
       <CustomModal isOpen={openModal} size="sm" handleSuccess={handleSuccess} handleClose={handleClose}
        title="Modal Header!!">
        <p>Some text in the modal.</p>
      </CustomModal>

      {/* component 3*/}
      <SignIn/>

      {/* component 4 */}
      <StickyFooter/>

    </div>
  );
}

export default App;
