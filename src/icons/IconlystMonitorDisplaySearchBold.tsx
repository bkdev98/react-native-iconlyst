import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplaySearchBold = ({
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
      d="m10.13 20.225.43-2.67h2.87l.44 2.67zm6.84-17.18h-6.294c-.156 0-.253.172-.181.311.359.697.555 1.486.555 2.32 0 .53-.08 1.04-.23 1.52.96.98.96 2.55-.01 3.52-.49.49-1.13.73-1.77.73s-1.28-.24-1.77-.73l-.06-.06a5.084 5.084 0 0 1-4.365-.848c-.138-.104-.345-.01-.345.163v3.054c0 2.5 2.03 4.53 4.53 4.53h2.01l-.43 2.67H7.05c-.41 0-.75.34-.75.75s.34.75.75.75h9.89c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.55l-.44-2.67h2.02c2.5 0 4.53-2.03 4.53-4.53v-5.45c0-2.5-2.03-4.53-4.53-4.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.903 3.775a1.903 1.903 0 0 0-1.9 1.9c0 1.048.852 1.9 1.9 1.9 1.047 0 1.9-.852 1.9-1.9 0-1.047-.853-1.9-1.9-1.9M9.04 9.697a.75.75 0 0 1-.53-.219l-.878-.876c-.507.3-1.098.473-1.729.473a3.404 3.404 0 0 1-3.4-3.4c0-1.875 1.525-3.4 3.4-3.4s3.4 1.525 3.4 3.4c0 .702-.214 1.354-.579 1.896l.846.845a.75.75 0 0 1-.53 1.281"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplaySearchBold;
