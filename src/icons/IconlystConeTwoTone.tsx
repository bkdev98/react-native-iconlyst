import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConeTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.004 16.093 13.62 3.717c-.493-.956-1.746-.956-2.24 0L4.997 16.093"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.38 17.28c0 2.054-3.528 3.72-7.88 3.72s-7.88-1.666-7.88-3.72c0-2.053 3.528-3.719 7.88-3.719s7.88 1.666 7.88 3.72"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConeTwoTone;
