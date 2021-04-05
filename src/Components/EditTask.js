import React, {useState} from 'react';
import {connect} from 'react-redux';
import {edittask} from './Redux/Action/actionType'
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const EditTask = ({Ptask, edittask}) => {
    const [text, setText] = useState(Ptask.text) ;
    const HandleSubmit = (e) => {
        e.preventDefault() ;
        const newtask = {
            ...Ptask, text : text 
        }
        edittask(newtask)
    }


        var subtitle;
        const [modalIsOpen,setIsOpen] = React.useState(false);
        function openModal() {
          setIsOpen(true);
        }
       
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
          subtitle.style.color = '#f00';
        }
       
        function closeModal(){
          setIsOpen(false);
        }

    return (
        <div>
            <div>
        <button onClick={openModal}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Edit Your Task</h2>
          
          <div>Current Task</div>
          <form>
            <input type="text" placeholder="Enter your new task ..." value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={HandleSubmit}>Edit</button><button onClick={closeModal}>Close</button>
          </form>
        </Modal>
      </div>
        </div>
    )
}

export default connect (null, {edittask}) (EditTask)
