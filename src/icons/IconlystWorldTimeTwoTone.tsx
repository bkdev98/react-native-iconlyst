import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldTimeTwoTone = ({
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
      d="M21.474 17.371a3.63 3.63 0 1 1-7.258-.001 3.63 3.63 0 0 1 7.258.001"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.972 18.317-1.148-.686v-1.475"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 20.34a8.683 8.683 0 0 1-7.975-8.66C3.525 6.892 7.41 3 12.205 3c4.434 0 8.083 3.323 8.606 7.614"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.419 10.794a20 20 0 0 0-.19-2.131C14.777 5.357 13.594 3 12.203 3 10.822 3 9.63 5.357 9.178 8.663a21 21 0 0 0-.207 3.016c0 1.066.072 2.086.207 3.026.316 2.293 1.291 4.506 2.32 5.635M3.525 11.69h8.288"
    />
  </Svg>
);
export default IconlystWorldTimeTwoTone;
