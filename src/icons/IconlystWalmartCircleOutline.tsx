import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalmartCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 13.781a.75.75 0 0 1 .75.75V16.9a.75.75 0 0 1-1.5 0V14.53a.75.75 0 0 1 .75-.75M10.469 12.913a.75.75 0 0 1-.261 1.028l-2.035 1.211a.75.75 0 0 1-.767-1.289l2.035-1.21a.75.75 0 0 1 1.028.26M13.531 12.913a.75.75 0 0 1 1.028-.26l2.035 1.21a.75.75 0 1 1-.767 1.29l-2.035-1.212a.75.75 0 0 1-.26-1.028M7.145 9.113a.75.75 0 0 1 1.028-.261l2.035 1.21a.75.75 0 1 1-.767 1.29L7.406 10.14a.75.75 0 0 1-.261-1.028M12 6.352a.75.75 0 0 1 .75.75v2.367a.75.75 0 0 1-1.5 0V7.102a.75.75 0 0 1 .75-.75M16.855 9.109a.75.75 0 0 1-.26 1.028l-2.036 1.21a.75.75 0 1 1-.767-1.289l2.035-1.21a.75.75 0 0 1 1.028.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalmartCircleOutline;
