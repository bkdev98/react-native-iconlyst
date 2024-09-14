import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarFavoriteLight = ({
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
      d="M4.488 9.664h16.041M16.145 3v2.962M8.874 3v2.962"
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
      d="M9.728 15.03c-.326-1.019.056-2.185 1.125-2.53a1.83 1.83 0 0 1 1.652.28 1.84 1.84 0 0 1 1.65-.28c1.07.345 1.454 1.511 1.127 2.53-.508 1.616-2.777 2.86-2.777 2.86s-2.251-1.226-2.777-2.86"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarFavoriteLight;
