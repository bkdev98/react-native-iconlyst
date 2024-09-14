import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownCircleLoadLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 15.87V8.13m0 7.742 3.02-3.031m-3.02 3.03L8.98 12.84M4.777 6.632a9 9 0 0 1 1.452-1.553M3.327 9.546a9 9 0 0 0-.299 3.034M6.852 19.361a9 9 0 0 1-3.12-3.782M19.645 16.724a8.9 8.9 0 0 0 1.345-5.06 9.01 9.01 0 0 0-9.35-8.657"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.024 20.785c2.655.566 5.292 0 7.54-1.7"
    />
  </Svg>
);
export default IconlystDownCircleLoadLight;
