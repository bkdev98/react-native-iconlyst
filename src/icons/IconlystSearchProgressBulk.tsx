import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchProgressBulk = ({
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
      d="M11.134 2.498a8.42 8.42 0 1 0 0 16.84 8.42 8.42 0 0 0 0-16.84"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.992 19.794-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.203 14.787h-.37a.749.749 0 1 1 0-1.5h.37a.749.749 0 1 1 0 1.5M11.643 14.787h-3.23a.749.749 0 1 1 0-1.5h3.23a.749.749 0 1 1 0 1.5M15.343 11.787h-8.07c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h8.07c.42 0 .75.34.75.75 0 .42-.33.75-.75.75M8.423 7.287h.37c.42 0 .75.34.75.75 0 .42-.33.75-.75.75h-.37c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75M10.993 7.287h3.21a.749.749 0 1 1 0 1.5h-3.21a.749.749 0 1 1 0-1.5"
    />
  </Svg>
);
export default IconlystSearchProgressBulk;
