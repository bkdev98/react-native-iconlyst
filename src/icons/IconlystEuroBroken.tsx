import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEuroBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.749 18.058a6.26 6.26 0 0 1-5.682-3.155 6 6 0 0 1-.441-.985M15.748 6.067a6.26 6.26 0 0 0-5.682 3.155 6 6 0 0 0-.453 1.023M8.252 13.824h6.996M8.252 10.305h6.996"
    />
  </Svg>
);
export default IconlystEuroBroken;
