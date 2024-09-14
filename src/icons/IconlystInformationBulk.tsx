import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInformationBulk = ({
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
      d="M16.4 3.4H7.6c-2.955 0-5.1 2.314-5.1 5.5v6.2c0 3.135 2.192 5.5 5.1 5.5h8.8c2.955 0 5.1-2.314 5.1-5.5V8.9c0-3.136-2.193-5.5-5.1-5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.128 10.383a.8.8 0 0 0 .022-.182v-2c0-.77-.58-1.351-1.35-1.351h-2.5c-.769 0-1.35.58-1.35 1.35v2c0 .77.581 1.35 1.35 1.35h2.5c.244 0 1.057-.083 1.328-1.167M6.7 16.65H13a.75.75 0 0 0 0-1.5H6.7a.75.75 0 0 0 0 1.5m2.7-4.4H6.7a.75.75 0 0 0 0 1.5h2.7a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInformationBulk;
