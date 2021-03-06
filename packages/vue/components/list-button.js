import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentTransformJSXProps from '../runtime-helpers/vue-component-transform-jsx-props.js';
import __vueComponentDispatchEvent from '../runtime-helpers/vue-component-dispatch-event.js';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
export default {
  name: 'f7-list-button',
  props: Object.assign({
    id: [String, Number],
    noFastclick: Boolean,
    noFastClick: Boolean,
    title: [String, Number],
    text: [String, Number],
    tabLink: [Boolean, String],
    tabLinkActive: Boolean,
    link: [Boolean, String],
    href: [Boolean, String],
    target: String
  }, Mixins.colorProps, Mixins.linkRouterProps, Mixins.linkActionsProps),

  render() {
    const _h = this.$createElement;
    const self = this;
    const props = this.props;
    const {
      className,
      id,
      style,
      title,
      text
    } = props;
    return _h('li', {
      style: style,
      class: className,
      attrs: {
        id: id
      }
    }, [_h('a', __vueComponentTransformJSXProps(Object.assign({
      class: self.classes
    }, self.attrs, {
      on: {
        click: self.onClick.bind(self)
      }
    })), [this.$slots['default'] || [title || text]])]);
  },

  computed: {
    attrs() {
      const self = this;
      const props = self.props;
      const {
        link,
        href,
        target,
        tabLink
      } = props;
      return Utils.extend({
        href: typeof link === 'boolean' && typeof href === 'boolean' ? '#' : link || href,
        target,
        'data-tab': Utils.isStringProp(tabLink) && tabLink
      }, Mixins.linkRouterAttrs(props), Mixins.linkActionsAttrs(props));
    },

    classes() {
      const self = this;
      const props = self.props;
      const {
        noFastclick,
        noFastClick,
        tabLink,
        tabLinkActive
      } = props;
      return Utils.classNames({
        'item-link': true,
        'list-button': true,
        'tab-link': tabLink || tabLink === '',
        'tab-link-active': tabLinkActive,
        'no-fastclick': noFastclick || noFastClick
      }, Mixins.colorClasses(props), Mixins.linkRouterClasses(props), Mixins.linkActionsClasses(props));
    },

    props() {
      return __vueComponentProps(this);
    }

  },
  methods: {
    onClick(event) {
      this.dispatchEvent('click', event);
    },

    dispatchEvent(events, ...args) {
      __vueComponentDispatchEvent(this, events, ...args);
    }

  }
};