import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpOpenOutline = ({
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
      d="M5 21.75a.75.75 0 0 1-.75-.75V5a.75.75 0 1 1 1.5 0v16a.75.75 0 0 1-.75.75M8.47 6.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V21a.75.75 0 0 1-1.5 0V4.81L9.53 6.53a.75.75 0 0 1-1.06 0M19 21.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v16a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpOpenOutline;
