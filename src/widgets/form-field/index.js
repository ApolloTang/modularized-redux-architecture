import _ from 'lodash';
import React from 'react';
import classnames from 'classnames';

export default React.createClass({
  propTypes: {
      label: React.PropTypes.string,
      description: React.PropTypes.string,
      tooltip: React.PropTypes.object,
      errors: React.PropTypes.array,
      showErrors: React.PropTypes.bool,
      isRequired: React.PropTypes.bool,
      className: React.PropTypes.string,
  },

  render() {
    const {
      label,
      isRequired,
      showErrors,
      description,
      tooltip,
    } = this.props;

    const requiredAsterix = this.props.isRequired ? '*' : '';

    const errors = showErrors ? [].concat(this.props.errors) : [];

    return (
      <div className={classnames('ef3-formField', this.props.className)}>
        {
          label ?
          <span className="ef3-formField_label">
            {label}
            <span className="ef3-formField_label_asterix">{requiredAsterix}</span>
          </span>:
          null
        }
        <div className="ef3-formField_child">
          {this.props.children}
          {(!!description || !!errors.length) &&
            <div className={classnames(
              'ef3-formField_description',
              { 'is-error': this.props.showErrors }
            )}>
            <div className="ef3-formField_description_description">{description}</div>
              {errors.map((error, i) => (
                <div key={i}>{error}</div>
              ))}
            </div>
          }
        </div>
      </div>
    );
  }
});
