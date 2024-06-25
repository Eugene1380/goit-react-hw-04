import css from './Loader.module.css';

import { ProgressBar } from 'react-loader-spinner';
//import { BaseProps, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
//import { SVG_NAMESPACE } from '../shared/constants'

export default function Loader() {
    return (
        <div className={css.loader}>
            <ProgressBar
                visible={true}
                height = '120'
                width = '720'
                wrapperClass = ''
                wrapperStyle = {{}}
                ariaLabel = 'progress-bar-loading'
                borderColor = '#F4442E'
                barColor = '#51E5FF'
            />
        </div>
    );
}
            
//             => {
//   return !visible ? null : (
//     <svg
//       width={width}
//       height={height}
//       xmlns={SVG_NAMESPACE}
//       viewBox="0 0 100 100"
//       preserveAspectRatio="xMidYMid"
//       className={wrapperClass}
//       style={wrapperStyle}
//       aria-label={ariaLabel}
//       data-testid="progress-bar-svg"
//       {...DEFAULT_WAI_ARIA_ATTRIBUTE}
//     ></svg>




// import { Audio } from 'react-loader-spinner';
// <Audio
//   height="80"
//   width="80"
//   radius="9"
//   color="green"
//   ariaLabel="loading"
//   wrapperStyle
//   wrapperClass
// />