import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTyphoonTwoTone = ({
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
      d="M9.237 13.789c-.532-.874.193-2.286 1.62-3.155 1.426-.87 3.013-.866 3.546.008.532.873-.193 2.286-1.62 3.155-1.426.869-3.013.865-3.546-.008"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.114 5.589c-1.605-2.635-6.93-2.759-11.457 0s-6.896 7.13-5.291 9.765c1.175 1.928 4.154 2.391 7.443 1.419"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.114 18.298c1.542 2.672 6.863 2.922 11.454.27 4.591-2.65 7.062-6.965 5.52-9.636-1.13-1.956-4.097-2.49-7.407-1.595"
    />
  </Svg>
);
export default IconlystTyphoonTwoTone;
