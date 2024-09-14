import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallBasketballOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.12 5.12a.75.75 0 0 1 1.06 0l12.7 12.7a.75.75 0 1 1-1.06 1.06L5.12 6.18a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.88 5.12a.75.75 0 0 1 0 1.06l-12.7 12.7a.75.75 0 0 1-1.06-1.06l12.7-12.7a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75A8.25 8.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5c-5.385 0-9.75-4.365-9.75-9.75a.75.75 0 0 1 .75-.75M2.25 12a.75.75 0 0 1 .75-.75c5.385 0 9.75 4.365 9.75 9.75a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 3 12.75a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallBasketballOutline;
