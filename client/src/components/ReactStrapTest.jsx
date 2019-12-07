/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
/* eslint-disables */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import moment from 'moment';
import '../styles.css';
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const ReactStrapTest = props => {
  const {
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  const { reviews } = props;
  return (
    <div>
      <div className="reviewButton" onClick={toggle}>+ Read All {reviews.length} Reviews</div>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        {/* <ModalHeader className="reviewsModalTitle">Reviews</ModalHeader> */}
        <ModalBody>
          <div className="reviewsModalTitle">Reviews</div>
          {reviews.map(review => (
            <div key={review._id}>
              <StarRatingComponent className="stars" name="rate1" starCount={review.rating} editing={false} value={5} />
              <div className="reviewTitle">{review.reviewTitle.charAt(0).toUpperCase() + review.reviewTitle.slice(1)}</div>
              <div className="reviewAuthor">by {review.reviewAuthor} on {moment(review.reviewDate).format('LL')}</div>
              <div className="reviewBody">
                { review.reviewBody }
              </div>
            </div>
          ))}

        </ModalBody>
      </Modal>
    </div>
  );
};

export default ReactStrapTest;
