import { css, StyleSheet } from 'aphrodite/no-important';
import React from 'react';

class Loader extends React.Component {
  public render() {
    return (
      <div className={css( styles.container )} >
        <svg
          className={css( styles.svgLoader )}
          viewBox='0 0 128 128'
          xmlns='http://www.w3.org/2000/svg'
        >

          <path
            d='M 16 128 V 0'
            className={css([ styles.equilizerPath, styles.line1 ])}
          />

          <path
            d='M 48 128 V 0'
            className={css([ styles.equilizerPath, styles.line2 ])}
          />

          <path
            d='M 80 128 V 0'
            className={css([ styles.equilizerPath, styles.line3 ])}
          />

          <path
            d='M 112 128 V 0'
            className={css([ styles.equilizerPath, styles.line4 ])}
          />
        </svg>
      </div>
    );
  }
}

const keyframeEqualize = {
  '0%': {
    strokeDashoffset: '128',
    strokeWidth: '8',
  },
  '50%': {
    strokeDashoffset: '0',
    strokeWidth: '24',
  },
  '100%': {
    strokeDashoffset: '128',
    strokeWidth: '8',
  },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba( 0, 0, 0, .5 )',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10,
  },

  line1: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: keyframeEqualize,
    animationTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  },

  line2: {
    animationDuration: '3s',
    animationIterationCount: 'infinite',
    animationName: keyframeEqualize,
    animationTimingFunction: 'cubic-bezier(0.23, 1, 0.320, 1)',
  },

  line3: {
    animationDuration: '2.5s',
    animationIterationCount: 'infinite',
    animationName: keyframeEqualize,
    animationTimingFunction: 'cubic-bezier(0.23, 1, 0.320, 1)',
  },

  line4: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: keyframeEqualize,
    animationTimingFunction: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  },

  svgLoader: {
    height: 64,
    width: 64,
  },

  equilizerPath: {
    stroke: 'red',
    strokeDasharray: 128,
    strokeDashoffset: 128,
    strokeLinecap: 'butt',
    strokeWidth: 16,
  },
});

export default Loader;
