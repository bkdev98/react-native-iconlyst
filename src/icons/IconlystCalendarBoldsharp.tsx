import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarBoldsharp = ({
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
      d="M16.985 4.38V2.66h-1.5v4.55h-1V4.38h-4.97V2.66h-1.5v4.55h-1V4.38h-3.59v5.13h17.65V4.38zM8.895 16.72v1.5h-1.5l-.01-1.5zm0-3.59v1.5h-1.5l-.01-1.5zm4.11 3.59v1.5h-1.5l-.01-1.5zm0-3.59v1.5h-1.5l-.01-1.5zm4.11 3.59v1.5h-1.5l-.01-1.5zm0-3.59v1.5h-1.5l-.01-1.5zm-13.69 9.28h17.65v-11.4H3.425z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarBoldsharp;
