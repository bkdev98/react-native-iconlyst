import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadLockTwoTone = ({
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
      d="M4.257 19.245a1.966 1.966 0 1 0 3.932 0 1.966 1.966 0 0 0-3.932 0M16.898 6.612a1.966 1.966 0 1 0 3.932 0 1.966 1.966 0 0 0-3.932 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.499 12.954a8.995 8.995 0 0 1 9.004-8.987 8.93 8.93 0 0 1 4.826 1.408M21.5 12.967c0 4.973-4.023 9.004-8.995 9.004a8.93 8.93 0 0 1-4.826-1.407"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.744 13.297c.518-.383.859-.993.859-1.687a2.103 2.103 0 1 0-4.205 0c0 .694.339 1.304.858 1.687l-.651 1.959a.892.892 0 0 0 .845 1.173h2.099a.892.892 0 0 0 .845-1.173z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReloadLockTwoTone;
