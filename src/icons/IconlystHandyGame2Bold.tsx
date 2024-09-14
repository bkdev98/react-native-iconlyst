import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandyGame2Bold = ({
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
      d="M15.3 2.5H8.7c-2.512 0-4.2 1.768-4.2 4.4v10.2c0 2.632 1.688 4.4 4.2 4.4h6.6c2.512 0 4.2-1.768 4.2-4.4V6.9c0-2.632-1.688-4.4-4.2-4.4m.3 15.703a.75.75 0 1 0 0-1.498.75.75 0 0 0 0 1.498m-1.5-2.1a.75.75 0 1 0 0-1.498.75.75 0 0 0 0 1.498m-3.65.9H11a.75.75 0 0 0 0-1.5h-.55v-.55a.75.75 0 0 0-1.5 0v.55H8.4a.75.75 0 0 0 0 1.5h.55v.55a.75.75 0 0 0 1.5 0zm6.6-7.795c0 1.384-1.007 2.35-2.45 2.35H9.4c-1.442 0-2.45-.966-2.45-2.35v-1.8c0-1.384 1.008-2.35 2.45-2.35h5.3c1.362 0 2.35.988 2.35 2.35z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHandyGame2Bold;
