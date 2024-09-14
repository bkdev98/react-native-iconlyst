import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXCircleOutline = ({
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
      d="M7.343 8.474a.969.969 0 0 1 .802-1.513h2.05c.431 0 .833.213 1.075.57l5.435 8.013a.969.969 0 0 1-.802 1.513h-2.05c-.43 0-.833-.213-1.074-.569zm1.804-.013 4.813 7.096h.942l-4.813-7.096z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.624 12.242a.75.75 0 0 1 .067 1.058L8.44 16.994a.75.75 0 1 1-1.126-.991l3.252-3.694a.75.75 0 0 1 1.058-.067M16.297 6.937a.75.75 0 0 1 .067 1.059l-3.058 3.473a.75.75 0 1 1-1.126-.991l3.058-3.474a.75.75 0 0 1 1.059-.067"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystXCircleOutline;
