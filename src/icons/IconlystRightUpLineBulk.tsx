import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightUpLineBulk = ({
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
      d="M7.297 14.656c.288 0 .576-.11.796-.33l7.479-7.477-.01 5.045a1.124 1.124 0 1 0 2.25.003l.014-7.72a1.12 1.12 0 0 0-.325-.842l-.004-.005A1.13 1.13 0 0 0 16.7 3H16.7l-7.767.016a1.125 1.125 0 0 0 .002 2.25h.002l5.046-.01-7.48 7.48a1.124 1.124 0 0 0 .795 1.92"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.652 21H5.348a1.125 1.125 0 0 1 0-2.25h13.304a1.125 1.125 0 0 1 0 2.25"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRightUpLineBulk;
