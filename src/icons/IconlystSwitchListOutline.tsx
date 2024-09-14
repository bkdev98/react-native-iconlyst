import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwitchListOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.538 15.24a.75.75 0 0 1-.002 1.061l-1.473 1.466 1.473 1.465a.75.75 0 1 1-1.059 1.063l-2.006-1.997a.75.75 0 0 1 0-1.063l2.006-1.997a.75.75 0 0 1 1.061.003"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.75 11.766a.75.75 0 0 1 .75-.75h13a3.75 3.75 0 1 1 0 7.5H13a.75.75 0 0 1 0-1.5h4.5a2.25 2.25 0 1 0 0-4.5h-13a.75.75 0 0 1-.75-.75M3.75 5.766a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75M3.75 17.766a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwitchListOutline;
