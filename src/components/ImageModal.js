import React, { Component } from 'react'
import ReactModal from 'react-modal'
import html2canvas from 'html2canvas'

class ImageModal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
    this.renderImage();
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  renderImage(event) {
    const messageList = document.querySelector('.phone-inner-container')
    function setpixelated(context) {
      context['imageSmoothingEnabled'] = false
      context['mozImageSmoothingEnabled'] = false
      context['oImageSmoothingEnabled'] = false
      context['webkitImageSmoothingEnabled'] = false
      context['msImageSmoothingEnabled'] = false
      }
    html2canvas(messageList, {
      onrendered: function (canvas) {
        setpixelated(canvas.getContext('2d')); // For More Clear Images in all browsers
        const modalBody = document.querySelector('.image-modal-canvas-container')
        var image = new Image()
        image.id = "pic"
        image.src = canvas.toDataURL('image/png', 1.0)
        image.setAttribute('crossOrigin','anonymous')
        modalBody.appendChild(image)
      }
    })
  }

  render () {
    return (
      <div>
        <button 
          className="btn btn-primary"
          onClick={this.handleOpenModal}>
          Generate Image
        </button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="image-modal"
           overlayClassName="image-modal-overlay"
        >
          <div 
            className="image-modal-close"
            onClick={this.handleCloseModal}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div className="image-modal-canvas-container"></div>
        </ReactModal>
      </div>
    );
  }
}

export default ImageModal