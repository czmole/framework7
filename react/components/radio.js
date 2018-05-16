import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentDispatchEvent from '../runtime-helpers/react-component-dispatch-event.js';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';
class F7Radio extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  onChange(event) {
    this.dispatchEvent('change', event);
  }
  get classes() {
    const self = this;
    return Utils.classNames(self.props.className, {
      radio: true,
      disabled: self.props.disabled
    }, Mixins.colorClasses(self));
  }
  render() {
    const self = this;
    const {name, value, disabled, readonly, checked, defaultChecked, id, style} = self.props;
    const inputEl = React.createElement('input', {
      type: 'radio',
      name: name,
      value: value,
      disabled: disabled,
      readOnly: readonly,
      checked: checked,
      defaultChecked: defaultChecked,
      onChange: self.onChange.bind(self)
    });
    const iconEl = React.createElement('i', { className: 'icon-radio' });
    return React.createElement('label', {
      id: id,
      style: style,
      className: self.classes
    }, inputEl, iconEl, this.slots['default']);
  }
  get slots() {
    return __reactComponentSlots(this.props);
  }
  dispatchEvent(events, ...args) {
    return __reactComponentDispatchEvent(this, events, ...args);
  }
}
__reactComponentSetProps(F7Radio, {
  id: [
    String,
    Number
  ],
  checked: Boolean,
  name: [
    Number,
    String
  ],
  value: [
    Number,
    String,
    Boolean
  ],
  disabled: Boolean,
  readonly: Boolean,
  defaultChecked: Boolean,
  ...Mixins.colorProps
});
export default F7Radio;