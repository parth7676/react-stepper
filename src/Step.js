import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

/* eslint-disable */
export default class Step extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    const {
      activeColor, completeColor, defaultColor, circleFontColor,
      activeTitleColor, completeTitleColor, defaultTitleColor,
      size, circleFontSize, titleFontSize,
      circleTop, titleTop, width, completeOpacity, activeOpacity, defaultOpacity,
      completeTitleOpacity, activeTitleOpacity, defaultTitleOpacity, barStyle, defaultBarColor,
      completeBarColor, defaultBorderColor, completeBorderColor, activeBorderColor,
      defaultBorderStyle, completeBorderStyle, activeBorderStyle, barHeight,
    } = this.props;

    return {
      step: {
        width: `${width}%`,
        display: 'table-cell',
        position: 'relative',
        paddingTop: circleTop,
      },
      circle: {
        width: size,
        height: size,
        margin: '0 auto',
        backgroundColor: defaultColor,
        borderRadius: '50%',
        textAlign: 'center',
        padding: 1,
        fontSize: circleFontSize,
        color: circleFontColor,
        display: 'block',
        opacity: defaultOpacity,
        borderWidth: (defaultBorderColor ? 3 : 0),
        borderColor: defaultBorderColor,
        borderStyle: defaultBorderStyle,
        zIndex: 2,
        position: 'relative',
      },
      activeCircle: {
        backgroundColor: activeColor,
        opacity: activeOpacity,
        borderWidth: (activeBorderColor ? 3 : 0),
        borderColor: activeBorderColor,
        borderStyle: activeBorderStyle,
        zIndex: 2,
        position: 'relative',
      },
      completedCircle: {
        backgroundColor: completeColor,
        opacity: completeOpacity,
        borderWidth: (completeBorderColor ? 3 : 0),
        borderColor: completeBorderColor,
        borderStyle: completeBorderStyle,
        zIndex: 2,
        position: 'relative',
      },
      index: {
        lineHeight: `${((size + circleFontSize) / 4)}px`,
        color: circleFontColor,
      },
      title: {
        marginTop: titleTop,
        fontSize: titleFontSize,
        fontWeight: '500',
        textAlign: 'center',
        display: 'block',
        color: defaultTitleColor,
        opacity: defaultTitleOpacity,
      },
      activeTitle: {
        color: activeTitleColor,
        opacity: activeTitleOpacity,
      },
      completedTitle: {
        color: completeTitleColor,
        opacity: completeTitleOpacity,
      },
      leftBar: {
        position: 'absolute',
        top: circleTop + size / 2,
        height: 1,
        borderTopStyle: barStyle,
        borderTopWidth: barHeight,
        borderTopColor: defaultBarColor,
        left: 0,
        right: '50%',
        marginRight: size / 2 + 4,
        opacity: defaultOpacity,
      },
      rightBar: {
        position: 'absolute',
        top: circleTop + size / 2,
        height: 1,
        borderTopStyle: barStyle,
        borderTopWidth: barHeight,
        borderTopColor: defaultBarColor,
        right: 0,
        left: '50%',
        marginLeft: size / 2 + 4,
        opacity: defaultOpacity,
      },
      completedBar: {
        borderTopStyle: barStyle,
        borderTopWidth: barHeight,
        borderTopColor: completeBarColor,
        opacity: completeOpacity,
      },
    };
  }

  render() {
    const { title, index, active, completed, first, isLast, href, onClick, showStepNumber } = this.props;

    const styles = this.getStyles();
    const circleStyle = Object.assign(
      styles.circle,
      completed ? styles.completedCircle : {},
      active ? styles.activeCircle : {},
    );
    const titleStyle = Object.assign(
      styles.title,
      completed ? styles.completedTitle : {},
      active ? styles.activeTitle : {},
    );
    const leftStyle = Object.assign(styles.leftBar, (active || completed) ? styles.completedBar : {});
    const rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});

    return (
      <div style={styles.step}>
        <div
          style={circleStyle}
          onClick={active || completed ? () => onClick(index) : () => { }}
          onMouseOver={active || completed ? () => onClick(index) : () => { }}
        >
          {active || completed ? (
            <a href={href} style={styles.index}>{showStepNumber ? (index + 1) : ''}</a>
          ) : (
              <span style={styles.index}>{showStepNumber ? (index + 1) : ''}</span>
            )}
        </div>
        {active || completed ? (
          <a href={href} onClick={() => onClick(index)} style={titleStyle}>{title}</a>
        ) : (
            <div style={titleStyle}>{title}</div>
          )}
        {!first && <div style={leftStyle}></div>}
        {!isLast && <div style={rightStyle}></div>}
      </div>
    );
  }
}

Step.defaultProps = {
  activeColor: '#5096FF',
  completeColor: '#5096FF',
  defaultColor: '#E0E0E0',
  activeTitleColor: '#000',
  completeTitleColor: '#000',
  defaultTitleColor: '#757575',
  circleFontColor: '#FFF',
  size: 32,
  circleFontSize: 16,
  titleFontSize: 16,
  circleTop: 24,
  titleTop: 8,
  defaultBarColor: '#E0E0E0',
  barStyle: 'solid',
  borderStyle: 'solid',
  showStepNumber: false,
  barHeight: 1,
};

Step.propTypes = {
  width: PropTypes.number.isRequired,
  activeColor: PropTypes.string,
  completeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  activeTitleColor: PropTypes.string,
  completeTitleColor: PropTypes.string,
  defaultTitleColor: PropTypes.string,
  circleFontColor: PropTypes.string,
  size: PropTypes.number,
  circleFontSize: PropTypes.number,
  titleFontSize: PropTypes.number,
  circleTop: PropTypes.number,
  titleTop: PropTypes.number,
  title: PropTypes.string,
  index: PropTypes.number,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  first: PropTypes.bool,
  isLast: PropTypes.bool,
  completeOpacity: PropTypes.string,
  activeOpacity: PropTypes.string,
  defaultOpacity: PropTypes.string,
  completeTitleOpacity: PropTypes.string,
  activeTitleOpacity: PropTypes.string,
  defaultTitleOpacity: PropTypes.string,
  barStyle: PropTypes.string,
  defaultBarColor: PropTypes.string,
  completeBarColor: PropTypes.string,
  defaultBorderColor: PropTypes.string,
  completeBorderColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  defaultBorderStyle: PropTypes.string,
  completeBorderStyle: PropTypes.string,
  activeBorderStyle: PropTypes.string,
  showStepNumber: PropTypes.bool,
  barHeight: PropTypes.number,
};
