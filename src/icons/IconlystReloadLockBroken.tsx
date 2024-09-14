import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadLockBroken = ({
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
      d="M4.007 18.286a1.966 1.966 0 1 0 3.932 0 1.966 1.966 0 0 0-3.932 0M16.648 5.654a1.966 1.966 0 1 0 3.932 0 1.966 1.966 0 0 0-3.932 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.253 3.008a8.93 8.93 0 0 1 4.826 1.408M3.249 11.996a9 9 0 0 1 5.183-8.14M12.255 21.013a8.93 8.93 0 0 1-4.826-1.408M21.25 12.008c0 3.66-2.179 6.81-5.312 8.218"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.494 12.338c.518-.383.859-.993.859-1.687a2.103 2.103 0 1 0-4.205 0c0 .694.339 1.304.858 1.687l-.651 1.959a.892.892 0 0 0 .845 1.173H13.3a.892.892 0 0 0 .845-1.173z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReloadLockBroken;
