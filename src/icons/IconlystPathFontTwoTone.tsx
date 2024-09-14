import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathFontTwoTone = ({
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
      d="M17.189 4.195v2.107c0 .734.52 1.195 1.256 1.195h1.985c.735 0 1.256-.458 1.256-1.195V4.195c0-.737-.521-1.195-1.256-1.195h-1.985c-.737 0-1.256.458-1.256 1.195M3.686 4.195v2.107c0 .734.52 1.195 1.256 1.195h1.984c.736 0 1.256-.458 1.256-1.195V4.195C8.182 3.458 7.662 3 6.926 3H4.942c-.737 0-1.256.458-1.256 1.195M17.189 17.697v2.107c0 .734.52 1.195 1.256 1.195h1.985c.735 0 1.256-.458 1.256-1.195v-2.107c0-.737-.521-1.195-1.256-1.195h-1.985c-.737 0-1.256.458-1.256 1.195M3.686 17.697v2.107c0 .734.52 1.195 1.256 1.195h1.984c.736 0 1.256-.458 1.256-1.195v-2.107c0-.737-.52-1.195-1.256-1.195H4.942c-.737 0-1.256.458-1.256 1.195"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.89 14.505 2.81-5.562 2.81 5.562M10.592 13.129h4.221"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.202 5.23h8.993M8.202 18.75h8.993M5.97 7.498v9.006m13.467-9.006v9.006"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPathFontTwoTone;
