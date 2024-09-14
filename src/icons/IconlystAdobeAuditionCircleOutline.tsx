import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeAuditionCircleOutline = ({
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
      d="M9.174 8.25a.75.75 0 0 1 .693.465l2.468 5.996a.75.75 0 0 1-1.387.571l-1.774-4.31-1.773 4.31a.75.75 0 1 1-1.387-.57L8.48 8.715a.75.75 0 0 1 .694-.465"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.839 12.86a.75.75 0 0 1 .75-.75h3.17a.75.75 0 0 1 0 1.5h-3.17a.75.75 0 0 1-.75-.75M14.157 10.348a.75.75 0 0 1 .75.75v2.335a.818.818 0 0 0 1.636 0v-2.335a.75.75 0 1 1 1.5 0v2.335a2.318 2.318 0 0 1-4.636 0v-2.335a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeAuditionCircleOutline;
