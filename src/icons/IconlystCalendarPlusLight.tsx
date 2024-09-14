import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarPlusLight = ({
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
      d="M4.488 9.664h16.041M16.143 3v2.962M8.872 3v2.962"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.318 4.422h-7.62c-2.644 0-4.294 1.472-4.294 4.178v8.146c0 2.748 1.65 4.254 4.294 4.254h7.613c2.651 0 4.293-1.48 4.293-4.186V8.6c.008-2.706-1.634-4.178-4.286-4.178"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.504 12.827v4.5M14.753 15.076h-4.5"
    />
  </Svg>
);
export default IconlystCalendarPlusLight;
