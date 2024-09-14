import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoteShieldLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.544 21.283H7.952a4.12 4.12 0 0 1-4.119-4.12v-9.76a4.12 4.12 0 0 1 4.12-4.12h7.096a4.12 4.12 0 0 1 4.12 4.12v3.364"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.388 21.25s2.756-.835 2.756-3.136c0-2.299.1-2.226-.121-2.449s-2.273-.936-2.635-.936-2.413.715-2.634.937c-.221.22-.12.149-.12 2.448s2.754 3.136 2.754 3.136"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.612 14.365H8.958m5.084-4.437H8.96z"
    />
  </Svg>
);
export default IconlystNoteShieldLight;
