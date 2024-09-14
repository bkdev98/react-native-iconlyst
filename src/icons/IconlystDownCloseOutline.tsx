import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownCloseOutline = ({
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
      d="M5 19.75a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v16a.75.75 0 0 1-.75.75m3.47-2.28a.75.75 0 0 1 1.06 0l1.72 1.72V3a.75.75 0 1 1 1.5 0v16.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06M19 19.75a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v16a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownCloseOutline;
