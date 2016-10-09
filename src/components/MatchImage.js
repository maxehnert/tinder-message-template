import React from 'react'
import girl_1 from '../images/pexels-photo-2.jpeg'
import girl_2 from '../images/girl-2.jpeg'
import guy_1 from '../images/guy-1.jpeg'
import guy_2 from '../images/guy-2.jpg'

const MatchImage = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="matchImageSelect">Select Match Image</label>
      <select id="matchImageSelect" className="form-control" name="matchImage" defaultValue={girl_1} onChange={props.onChange}>
        <option value={girl_1}> girl 1 </option>
        <option value={girl_2}>girl 2</option>
        <option value={guy_1}>guy 1</option>
        <option value={guy_2}>guy 2</option>
      </select>

      {/* <ul class="list-group">
        <li class="list-group-item" value={girl_1}> girl 1</li>
        <li class="list-group-item" value={girl_2}>girl 2</li>
        <li class="list-group-item" value={guy_1}>guy 1</li>
        <li class="list-group-item" value={guy_2}>guy 2</li>
      </ul> */}
    </div>
  )
}

export default MatchImage

///////////////////////////////
//
//
// const MatchImage = (props) => {
//   return (
//     <div className="form-group">
//       <label htmlFor="matchImageSelect">Select Match Image</label>
//       <select id="matchImageSelect" className="form-control" name="matchImage" defaultValue={girl_1} onChange={props.onChange}>
//         <option value={girl_1}> girl 1 </option>
//         <option value={girl_2}>girl 2</option>
//         <option value={guy_1}>guy 1</option>
//         <option value={guy_2}>guy 2</option>
//       </select>
//     </div>
//   )
// }
//
// export default MatchImage
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // reducer.js
//
// // Your Store is made of two reducers:
// // 'dropdowns' manages the current state of your three dropdown;
// // 'options' manages the list of available options.
//
// const dropdowns = (state = [null, null, null], action = {}) => {
//     switch (action.type) {
//         case 'CHANGE_DROPDOWN_VALUE':
//             return state.map((v, i) => i === action.index ? action.value : v);
//         default:
//             return state;
//     }
// };
//
// export const options = (state = [], action = {}) => {
//   return state
//     // reducer code for option list omitted for sake of simplicity
// };
//
// // actionCreators.js
//
// export const changeDropdownValue = (index, value) => ({
//     type: 'CHANGE_DROPDOWN_VALUE',
//     index,
//     value
// });
//
// // helpers.js
//
// export const selectOptionsForDropdown = (state, index) => {
//     return state.options.map(({value, label}) => {
//         const selectedIndex = state.dropdowns.indexOf(value);
//         const disabled = selectedIndex >= 0 && selectedIndex !== index;
//         return {value, label, disabled};
//     });
// };
//
// // components.js
//
// const Select = ({ value, options, children}) => {
// console.log('Select')
// console.log('value', value, ' options ', options, ' children ', children)
//   return (
//     <div> words </div>
//   )
// }
//
// import React from 'react';
// import { connect } from 'react-redux';
// // import { changeDropdownValue } from './actionCreators';
// // import { selectOptionsForDropdown } from './helpers';
// // import { Select } from './myOtherComponents';
//
// const mapStateToProps = (state, ownProps) => ({
//     value: state.dropdowns[ownProps.index],
//     options: selectOptionsForDropdown(state, ownProps.index)
// });
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     onChange: value => dispatch(changeDropdownValue(ownProps.index, value))
// });
//
// const ConnectedSelect = connect(mapStateToProps, mapDispatchToProps)(Select);
//
// export const Example = () => (
//     <div>
//       <ConnectedSelect index={0} />
//       <ConnectedSelect index={1} />
//       <ConnectedSelect index={2} />
//     </div>
// );
