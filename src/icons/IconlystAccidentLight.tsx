import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAccidentLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.742 19.316q-.003.247.064.486a1.797 1.797 0 0 0 2.82.947 1.8 1.8 0 0 0 .644-.947q.071-.239.072-.486a1.8 1.8 0 0 0-1.8-1.8 1.8 1.8 0 0 0-1.8 1.8M21.25 9.641h-.82a1.1 1.1 0 0 0-.962.576l-2.034 3.78M19.576 19.316h1.674"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 14.042h-5.517a2.01 2.01 0 0 0-2.006 2.006v1.558a2.007 2.007 0 0 0 2.006 2.006v0M8.758 19.316q0 .248-.072.486a1.8 1.8 0 0 1-3.465 0 1.7 1.7 0 0 1-.063-.486 1.8 1.8 0 0 1 1.8-1.8 1.8 1.8 0 0 1 1.8 1.8M3.25 9.641h.81a1.1 1.1 0 0 1 .963.576l2.043 3.78M4.924 19.316H3.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 14.042h5.517a2.01 2.01 0 0 1 2.007 2.006v1.558a2.007 2.007 0 0 1-2.007 2.006v0M9.882 11.315 7.533 9.82l1.9-.82L8.405 6.24l2.655 1.476 1.548-2.862 1.053 3.303 3.186-.504-1.81 4.005M12.394 12.34l-.171-2.051"
    />
  </Svg>
);
export default IconlystAccidentLight;
