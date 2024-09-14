import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchPokerBulk = ({
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
      d="M11.126 2.499c-4.65 0-8.41 3.77-8.41 8.42s3.76 8.42 8.41 8.42a8.42 8.42 0 0 0 0-16.84"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.99 19.793-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.746 11.35a.749.749 0 1 1-.01-1.5h.01a.749.749 0 1 1 0 1.5M12.856 15.03h-3.43c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h3.43a.749.749 0 1 1 0 1.5M14.546 11.35a.751.751 0 0 1-.02-1.5h.02a.749.749 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystSearchPokerBulk;
