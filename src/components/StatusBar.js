import React from 'react'
import {FormControl, FormGroup, Radio} from 'react-bootstrap'
// battery percent, battery image, signal, time, carrier,
/**
 time - am/pm
 
 
 */
const StatusBar = (props) => {
  return (
    <div>
      <FormControl
        type="text"
        name="phoneTime"
        label="Enter a Time"
        placeholder="Enter Time"
        value={props.value.phoneTime}
        onChange={props.onChange}
      />
      <FormGroup>
      <Radio name="AmPm"
                inline
                value="AM"
                onChange={props.onChange}>
        AM
      </Radio>
      {' '}
      <Radio name="AmPm"
                inline
                value="PM"
                onChange={props.onChange}>
        PM
      </Radio>
    </FormGroup>
    <FormControl
      type="text"
      name="phoneServiceProvider"
      label="Enter you Carrier"
      placeholder="Verizon, AT&T, etc"
      value={props.value.phoneServiceProvider}
      onChange={props.onChange}
    />
    <FormControl
      type="text"
      name="phoneBatteryPercent"
      label="Enter Battery Life"
      placeholder="Change Battery Life"
      value={props.value.phoneBatteryPercent}
      onChange={props.onChange}
    />
    </div>
  )
};

export default StatusBar;