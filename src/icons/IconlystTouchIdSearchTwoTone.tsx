import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSearchTwoTone = ({
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
      d="M4.806 16.143a7 7 0 0 1-.054-.847V10.61a6.645 6.645 0 0 1 13.289 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.396 7.662A3.44 3.44 0 0 0 7.959 11.1v.937M7.959 14.834a3.43 3.43 0 0 0 1.329 2.714M11.397 12.915v-1.91M14.83 11.102a3.42 3.42 0 0 0-.91-2.33M11.398 21.968a6.64 6.64 0 0 1-5.638-3.126"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.671 19.671 1.577 1.574zm-2.133-5.43a3.134 3.134 0 1 1 0 6.267 3.134 3.134 0 0 1 0-6.268"
    />
  </Svg>
);
export default IconlystTouchIdSearchTwoTone;
