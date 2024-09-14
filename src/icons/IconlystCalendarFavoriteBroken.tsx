import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarFavoriteBroken = ({
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
      d="M4.568 9.664h13.12M16.225 3v2.962M8.954 3v2.962"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.808 15.03c-.326-1.019.055-2.185 1.125-2.53a1.83 1.83 0 0 1 1.652.28 1.84 1.84 0 0 1 1.649-.28c1.07.345 1.455 1.511 1.128 2.53-.508 1.616-2.777 2.86-2.777 2.86s-2.252-1.226-2.777-2.86"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.398 4.422c2.651 0 4.294 1.472 4.286 4.178v8.214c0 2.706-1.642 4.186-4.294 4.186H8.778c-2.644 0-4.294-1.506-4.294-4.254V8.6c0-1.731.675-2.957 1.854-3.616M8.959 4.422h4.706"
    />
  </Svg>
);
export default IconlystCalendarFavoriteBroken;
