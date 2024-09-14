import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalExpandOutline = ({
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
      d="M6.908 10.016a2.55 2.55 0 0 0-2.55 2.55v4.525a2.55 2.55 0 0 0 2.55 2.55h4.526a2.55 2.55 0 0 0 1.284-4.753l2.17-2.17a2.549 2.549 0 0 0 4.753-1.284V6.91a2.55 2.55 0 0 0-2.55-2.55h-4.526a2.55 2.55 0 0 0-1.284 4.753l-2.17 2.17a2.55 2.55 0 0 0-2.203-1.266m-1.05 2.55a1.05 1.05 0 0 1 2.1 0v.18a.75.75 0 0 0 1.28.53l4.037-4.037a.75.75 0 0 0-.53-1.28h-.18a1.05 1.05 0 0 1 0-2.1h4.526c.58 0 1.05.47 1.05 1.05v4.525a1.05 1.05 0 1 1-2.1 0v-.18a.75.75 0 0 0-1.28-.53l-4.037 4.037a.75.75 0 0 0 .53 1.28h.18a1.05 1.05 0 1 1 0 2.1H6.908c-.58 0-1.05-.47-1.05-1.05z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsDiagonalExpandOutline;
