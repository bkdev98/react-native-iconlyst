import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftDownLineBold = ({
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
      d="M7.3 21a1.13 1.13 0 0 1-1.125-1.208l.012-7.69a1.125 1.125 0 0 1 2.25.003L8.43 17.15l7.478-7.477a1.126 1.126 0 0 1 1.59 1.59l-7.48 7.481 5.047-.011h.003a1.125 1.125 0 0 1 .002 2.25L7.302 21zM18.652 5.25H5.348a1.125 1.125 0 0 1 0-2.25h13.304a1.126 1.126 0 0 1 0 2.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftDownLineBold;
