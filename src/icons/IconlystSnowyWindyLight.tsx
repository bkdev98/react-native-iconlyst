import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowyWindyLight = ({
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
      strokeWidth={1.5}
      d="M16.09 18.668a1.405 1.405 0 1 0-2.798.26c.067.73.703 1.275 1.42 1.275 1.125-.028 1.824-1.144 1.425-2.276-1.27-2.992-4.994-1.117-6.52-.367M3.863 10.543c4.156-3.135 9.786.209 11.95.798 6.327 1.722 6.909-6.44 2.18-6.44-1.194 0-2.245.975-2.245 2.17 0 .936.698 1.74 1.622 1.871.32.046.753-.013 1.125-.32"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.64 6.42.01.05M3.114 14.024l.009.05M4.994 6.765l1.285-.742V4.538l-1.285-.742-1.286.742v1.485zM19.829 17.495l1.285-.742v-1.485l-1.286-.742-1.285.742v1.485zM5.003 20.203l1.636-.944v-1.89l-1.636-.944-1.636.945v1.889zM8.365 14.877l1.285-.742V12.65l-1.285-.742-1.286.742v1.485z"
    />
  </Svg>
);
export default IconlystSnowyWindyLight;
