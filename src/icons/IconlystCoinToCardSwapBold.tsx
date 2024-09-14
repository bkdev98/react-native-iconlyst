import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinToCardSwapBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.026 14.568a.19.19 0 0 1-.194.208H2.72a.19.19 0 0 1-.194-.208c.144-1.397 1.164-2.352 2.576-2.352h5.35c1.41 0 2.43.955 2.575 2.352M12.85 16.276c.11 0 .2.09.2.2v1.95c0 1.6-1.07 2.71-2.6 2.71H5.1c-1.53 0-2.6-1.11-2.6-2.71v-1.95c0-.11.09-.2.2-.2zM21 7.16a3.8 3.8 0 1 0-7.6 0 3.8 3.8 0 0 0 7.6 0M21 14.781a.75.75 0 0 0-.75.75 4.37 4.37 0 0 1-2.32 3.853l-.904-.904a.75.75 0 0 0-1.233.269l-.606 1.63a.75.75 0 0 0 .703 1.011 5.867 5.867 0 0 0 5.86-5.859.75.75 0 0 0-.75-.75M3.75 8.47c0-1.668.941-3.119 2.321-3.853l.903.903a.748.748 0 0 0 1.233-.269l.606-1.629a.748.748 0 0 0-.702-1.01 5.867 5.867 0 0 0-5.86 5.858.75.75 0 0 0 1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinToCardSwapBold;
