import React, { Component } from 'react';
import './HomePage.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import PropTypes from 'prop-types';

import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';

import saleBg from '../../assets/home_page/Sale.png';
import slideOne from '../../assets/home_page/slide_1.jpg';
import slideTwo from '../../assets/home_page/slide_2.jpg';
import slideThree from '../../assets/home_page/slide_3.jpg';
import slideFour from '../../assets/home_page/slide_4.jpg';
import slideFive from '../../assets/home_page/slide_5.jpg';

const slides = [];
slides.push(slideOne, slideTwo, slideThree, slideFour, slideFive);

class HomePage extends Component {
  closeModal = () => {
    this.props.purchaseInit();
    this.props.closeModal();
  };

  render() {
    return (
      <>
        <ScrollToTopOnMount />
        <Modal
          modalType="small"
          showModal={this.props.purchased}
          showBackdrop={this.props.purchased}
          closeModal={this.closeModal}>
          <p>Order completed successfully.</p>
          <Button clicked={this.closeModal} btnType="dark">Got it</Button>
        </Modal>
        <div className="home-container">
          <div className="showcase">
            <h3 className="main-title">SwiftShop</h3>
            <p className="main-info">One stop solution for your everyday need.</p>
          </div>
          <div style={{ backgroundImage: `url(${saleBg})` }} className="sale">
            <h1 className="title">Sale</h1>
            <p className="subtitle">Upto 60% off on groceries. Hurry up and grab the farm fresh products.</p>
          </div>
          <div className="slider">
            {slides.map(slide => (
              <div key={slide} style={{ backgroundImage: `url('${slide}')` }} className="slide">
                <h3 className="title">New Collection</h3>
                <h3 className="subtitle">Upto 50% off on various brands. Free delivery on first order!!!!</h3>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
};

HomePage.propTypes = {
  purchased: PropTypes.bool.isRequired,
  purchaseInit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    purchased: state.order.purchased
  };
};

const mapDispatchToProps = dispatch => {
  return {
    purchaseInit: () => dispatch(actions.purchaseInit()),
    closeModal: () => dispatch(actions.closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);