import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightDownLineBold = ({
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
      d="M16.698 21h-.002l-7.767-.017a1.126 1.126 0 0 1 .002-2.25h.002l5.046.011-7.48-7.48a1.124 1.124 0 1 1 1.59-1.591l7.48 7.478-.01-5.046a1.125 1.125 0 0 1 2.25-.003l.014 7.708A1.13 1.13 0 0 1 16.698 21M18.652 5.25H5.348a1.125 1.125 0 0 1 0-2.25h13.304a1.126 1.126 0 0 1 0 2.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightDownLineBold;
