import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldTimeLight = ({
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
      d="M20.974 17.371a3.63 3.63 0 1 1-7.258-.001 3.63 3.63 0 0 1 7.258.001"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.472 18.317-1.148-.686v-1.475M11 20.34a8.683 8.683 0 0 1-7.975-8.66C3.025 6.892 6.91 3 11.705 3c4.434 0 8.083 3.323 8.606 7.614"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.919 10.794a20 20 0 0 0-.19-2.131C14.277 5.357 13.094 3 11.703 3 10.322 3 9.13 5.357 8.678 8.663a21 21 0 0 0-.207 3.016c0 1.066.072 2.086.207 3.026.316 2.293 1.291 4.506 2.32 5.635M3.025 11.69h8.288"
    />
  </Svg>
);
export default IconlystWorldTimeLight;
