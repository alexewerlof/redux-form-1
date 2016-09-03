import React from 'react'
import { Field } from 'redux-form'

export function Child({name, age}) {
  return (
    <div>
      <label>Name</label>
      <Field name={`${name}.name`} component="input" type="text" placeholder="Child Name"/>
      <label>Age</label>
      <Field name={`${name}.age`} component="input" type="text" placeholder="Age"/>
    </div>
  )
}

export function Children({fields}) {
  return (
    <ul>
      {fields.map((child, index) =>
        <li key={index}>
          <Field name={`${child}`}
                 component={Child}
                 age={`${child}.age`} />
        </li>
        )}
        <li>
          <button type="button" onClick={() => fields.push({})}>Add Child</button>
        </li>
      </ul>
    );
};
