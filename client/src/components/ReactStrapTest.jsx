/* eslint-disable no-underscore-dangle */
/* eslint-disables */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import moment from "moment";
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const ReactStrapTest = props => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  const { reviews } = props;
  return (
    <div>
      <div className="reviewButton" onClick={toggle}>Read All Reviews</div>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader className="reviewsModalTitle">Reviews</ModalHeader>
        <ModalBody>
          <br />
          {reviews.map(review => (
            <div key={review._id}>
              <div className="rating">Rating: {review.rating}</div>
              <div className="reviewTitle">{review.reviewTitle.charAt(0).toUpperCase() + review.reviewTitle.slice(1)}</div>
              <div className="reviewAuthor">by {review.reviewAuthor} on {moment(review.reviewDate).format('LL')}</div>
              <br />
              <div className="reviewBody">
                { review.reviewBody }
                <br />
                <br />
              </div>
            </div>
          ))}

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>
          {' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ReactStrapTest;
