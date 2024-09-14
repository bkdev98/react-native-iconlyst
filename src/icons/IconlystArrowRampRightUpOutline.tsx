import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRampRightUpOutline = ({
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
      d="M5.97 2.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06L7.25 4.81v6.897a.75.75 0 0 1-1.5 0V4.811L3.53 7.03A.75.75 0 0 1 2.47 5.97zM16.97 5.97a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06L19.94 10l-2.97-2.97a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18 10.75c-5.66 0-10.25 4.59-10.25 10.25a.75.75 0 0 1-1.5 0c0-6.49 5.26-11.75 11.75-11.75h3a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRampRightUpOutline;
