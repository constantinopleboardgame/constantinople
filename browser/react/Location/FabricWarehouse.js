import React from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal/Modal';

import { loadModal, hideModal } from '../../redux/action-creators/modals';

class FabricWarehouse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal>
        <div id="location-modal-container">
          <img src={`images/locations/fabric_warehouse.png`} id="img-location" />
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(hideModal()),
  openModal: (modalType, payload) => dispatch(loadModal(modalType, payload))
});

export default connect(null, mapDispatchToProps)(FabricWarehouse);
