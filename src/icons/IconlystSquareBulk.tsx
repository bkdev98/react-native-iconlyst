import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M2.5 8.18c0-3.307 2.123-5.53 5.282-5.53h4.217v19H7.782c-3.159 0-5.282-2.223-5.282-5.53z"
    />
    <Path
      fill={props.color}
      d="M21.499 8.18c0-3.307-2.123-5.53-5.282-5.53H12v19h4.217c3.159 0 5.282-2.223 5.282-5.53z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSquareBulk;
