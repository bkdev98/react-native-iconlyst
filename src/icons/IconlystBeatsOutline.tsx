import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeatsOutline = ({
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
      d="M4.44 3a.75.75 0 0 1 .75-.75h5.564a6.019 6.019 0 0 1 0 12.038H5.189a.75.75 0 0 1-.75-.75zm1.5.75v9.038h4.814a4.519 4.519 0 0 0 0-9.038z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.695 11.822a.75.75 0 0 1 .637.29 5.987 5.987 0 0 1-4.747 9.635H5.179a.75.75 0 0 1-.75-.749v-4.74a.75.75 0 0 1 .75-.75h6.04a6.85 6.85 0 0 0 5.876-3.324.75.75 0 0 1 .6-.362m-.008 2.119a8.34 8.34 0 0 1-6.468 3.067H5.93v3.24h7.656a4.487 4.487 0 0 0 4.102-6.307"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBeatsOutline;
