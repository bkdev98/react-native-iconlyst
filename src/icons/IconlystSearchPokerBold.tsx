import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchPokerBold = ({
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
      d="M14.546 11.349a.751.751 0 0 1-.02-1.5h.02a.749.749 0 1 1 0 1.5m-1.69 3.68h-3.43c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h3.43a.749.749 0 1 1 0 1.5m-5.11-3.68a.749.749 0 1 1-.01-1.5h.01a.749.749 0 1 1 0 1.5m3.38-8.85c-4.65 0-8.41 3.77-8.41 8.42s3.76 8.42 8.41 8.42a8.42 8.42 0 0 0 0-16.84M20.99 19.793l-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchPokerBold;
