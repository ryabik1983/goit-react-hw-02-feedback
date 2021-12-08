// export class Feedback extends React.Component {
//     static defaultProps ={
//         initialValue: 0;
//     };
//     static Ppoptypes = {

//     };
//     constructor () {
//         super ();
//         this.state = {
//             good: 0,
//             neutral: 0,
//             bad: 0
//         }

//     }
//     countTotalFeedback = () => {
//     this.setState ((prevState) => {
// return {
//     good: prevState.good + 1,
// }
//     });
// };

// };
//     countPositiveFeedbackPercentage = () => {};

//     render() {
//         return (
//             <div className = "Feedback">
//                 <h1 className ="Feedback__title">Plaese leave feedback</h1>
//                 <button type="button" className="Feedback__button" onClick = {this.toggle}>Good</button>
//                 <button type="button" className="Feedback__button" onClick = {this.toggle}>Neutral</button>
//                 <button type="button" className="Feedback__button" onClick = {this.toggle}>Bad</button>
//             </div>

//         )
//     }

// }
