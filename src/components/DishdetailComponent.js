import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle> {dish.name}</CardTitle>
            <CardText> {dish.description} </CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments, onClickButton, isShowModal, handleSubmit }) {
  if (comments == null) {
    return <div></div>;
  }
  const cmnts = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, &nbsp;
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
          }).format(new Date(comment.date))}
        </p>
      </li>
    );
  });
  return (
    <div className="col-12 col-md-5 m-1">
      <h4> Comments </h4>
      <ul className="list-unstyled">{cmnts}</ul>
      <Button
        onClick={() => {
          onClickButton(!isShowModal);
        }}
      >
        Submit Comment
      </Button>
    </div>
  );
}

const CommentForm = ({
  isShowModal,
  onToggle,
  onChangeRating,
  onChangeUsername,
  onChangeComment,
  handleSubmit,
}) => {
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  return (
    <Modal isOpen={isShowModal} toggle={onToggle}>
      <ModalHeader toggle={onToggle}>Submit Comment</ModalHeader>
      <ModalBody>
        <LocalForm onSubmit={(values) => handleSubmit(values)}>
          <FormGroup>
            <Label htmlFor="Rating">Rating</Label>
            <Input
              type="select"
              id="Rating"
              name="Rating"
              onChange={(event) => {
                onChangeRating(event.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="username">Your Name</Label>
            <Control.text
              model=".username"
              id="username"
              name="username"
              placeholder="username"
              className="form-control"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15),
              }}
              onChange={(event) => {
                onChangeUsername(event.target.value);
              }}
            />
            <Errors
              className="text-danger"
              model=".username"
              show="touched"
              messages={{
                required: 'Required',
                minLength: 'Must be greater than 2 characters',
                maxLength: 'Must be 15 characters or less',
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Comment">Comment</Label>
            <Input
              type="textarea"
              id="Comment"
              name="Comment"
              onChange={(event) => {
                onChangeComment(event.target.value);
              }}
            />
          </FormGroup>
          <Button type="submit" value="submit" color="primary">
            Submit
          </Button>
        </LocalForm>
      </ModalBody>
    </Modal>
  );
};
const DishDetail = (props) => {
  const dish = props.dish;
  const [isShowModal, setIsShowModal] = useState(false);
  const [rating, setRating] = useState('1');
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  if (dish == null) {
    return <div></div>;
  }

  const handleSubmit = (values) => {
    alert('your submit is: ' + JSON.stringify({ rating, ...values, comment }));
  };

  return (
    <div className="container">
      {rating}
      {username}
      {comment}
      <CommentForm
        isShowModal={isShowModal}
        onToggle={() => {
          setIsShowModal(false);
        }}
        onChangeRating={setRating}
        onChangeUsername={setUsername}
        onChangeComment={setComment}
        handleSubmit={handleSubmit}
      />
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>

        <div className="col-12">
          <h3> {props.dish.menu}</h3>
          <hr />
        </div>
      </div>

      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments
          comments={props.comments}
          isShowModal={isShowModal}
          onClickButton={setIsShowModal}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default DishDetail;
