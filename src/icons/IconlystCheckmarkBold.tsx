import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckmarkBold = ({
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
      d="M8.721 18.144a1 1 0 0 1-.859-.488 16.4 16.4 0 0 0-3.508-4.116 1.001 1.001 0 0 1 1.291-1.528 18.5 18.5 0 0 1 3.017 3.232c1.637-2.647 4.855-6.844 9.902-9.289a1 1 0 0 1 .872 1.8c-5.576 2.701-8.734 7.794-9.832 9.86-.17.317-.498.52-.859.53z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCheckmarkBold;
