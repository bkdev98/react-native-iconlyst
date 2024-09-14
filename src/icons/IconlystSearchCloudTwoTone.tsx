import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCloudTwoTone = ({
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
      d="M19.41 13.86a7.99 7.99 0 0 1-7.748 6.034A7.988 7.988 0 0 1 9.235 4.292"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.1 17.757 20.35 21"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.153 5.529c-1.171.01-2.118.797-2.118 2.137 0 .867.517 1.612 1.258 1.948.312.126.623.175.858.175h5.056c.236 0 .547-.047.863-.173a2.14 2.14 0 0 0 1.257-1.95c0-1.34-.947-2.127-2.119-2.137 0-.843-.66-2.529-2.527-2.529s-2.528 1.686-2.528 2.529"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchCloudTwoTone;
