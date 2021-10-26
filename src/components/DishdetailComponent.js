import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const styles = {
  title: {
    width: '100%',
    fontWeight: 600,
    fontSize: 28,
  },
  cardContainer: {
    textAlign: 'left',
  },
  dishContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: '2px red solid',
  },
  comment: {
    fontSize: 28,
    fontWeight: 600,
  },
};

// const DishDetail = ({ menu, selectedDish }) => {
//   const renderDish = (dish) => {
//     if (dish != null)
//       return (
//         <>
//           <div className="col-12 col-md-5 m-1">
//             <Card style={styles.cardContainer}>
//               <CardImg top src={dish.image} alt={dish.name} />
//               <CardBody>
//                 <CardTitle style={styles.title}>{dish.name}</CardTitle>
//                 <CardText>{dish.description}</CardText>
//               </CardBody>
//             </Card>
//           </div>
//         </>
//       );
//     else return null;
//   };

//   const renderComments = (dish) => {
//     if (dish != null) {
//       const comments = dish.comments;
//       return (
//         <div className="col-12 col-md-5 m-1" style={{ textAlign: 'left' }}>
//           <div style={styles.comment}>Comment</div>
//           {comments.map((comment) => {
//             return (
//               <div style={{ margin: '20px 0px' }}>
//                 {comment.comment}
//                 <br />
//                 {`-- ${comment.author}  ${new Intl.DateTimeFormat('en-US', {
//                   year: 'numeric',
//                   month: 'long',
//                   day: '2-digit',
//                 }).format(new Date(comment.date))}`}
//                 <br />
//               </div>
//             );
//           })}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="container">
//       <div className="row">{menu}</div>
//       <div className="row">
//         {renderDish(selectedDish)} {renderComments(selectedDish)}
//       </div>
//     </div>
//   );
// };

// export default DishDetail;

// import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DishDetail = (props) => {
  const { selectedDish, menu } = props;
  function renderDish(dish) {
    if (dish != null)
      return (
        <>
          <div className="col-12 col-md-5 m-1">
            <Card style={styles.cardContainer}>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle style={styles.title}>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        </>
      );
    else return null;
  }

  function renderComments(dish) {
    if (dish != null) {
      const comments = dish.comments;
      return (
        <div className="col-12 col-md-5 m-1" style={{ textAlign: 'left' }}>
          <div style={styles.comment}>Comment</div>
          {comments.map((comment) => {
            return (
              <div style={{ margin: '20px 0px' }}>
                {comment.comment}
                <br />
                {`-- ${comment.author}  ${new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                }).format(new Date(comment.date))}`}
                <br />
              </div>
            );
          })}
        </div>
      );
    }
  }
  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        {renderDish(selectedDish)} {renderComments(selectedDish)}
      </div>
    </div>
  );
};

export default DishDetail;
