import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightUpLineOutline = ({
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
      d="m15.426 6.816-.008 5.09a.75.75 0 0 0 1.5.002l.011-6.86a.75.75 0 0 0-.751-.798l-6.905.014a.75.75 0 0 0 .003 1.5l5.091-.01L7.29 12.83a.75.75 0 1 0 1.06 1.06zM5.338 19a.75.75 0 0 1 .75-.75h11.826a.75.75 0 0 1 0 1.5H6.088a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightUpLineOutline;
