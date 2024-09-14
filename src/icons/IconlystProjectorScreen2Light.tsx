import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.751 8.137h.63C19.993 8.137 21 9.27 21 10.89v3.456c0 1.611-1.008 2.764-2.618 2.764L5.628 17.1C4.008 17.1 3 15.967 3 14.347V10.89c0-1.61 1.018-2.753 2.628-2.753h4.474M6.4 17.104l-.9 1.384M17.543 17.104l.9 1.384M6.2 14.065h3.384M6.2 11.459h1.415"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.003 5.512a3.991 3.991 0 1 1 0 7.982 3.991 3.991 0 0 1 0-7.982"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.37 9.503a1.368 1.368 0 1 0-2.735 0 1.368 1.368 0 0 0 2.736 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProjectorScreen2Light;
