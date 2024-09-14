import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeSearchBold = ({
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
      d="M11.714 11.194c-.484 0-.969.184-1.337.553a1.9 1.9 0 0 0 0 2.678 1.893 1.893 0 0 0 2.671.002q.003 0 .004-.003a1.904 1.904 0 0 0-.005-2.68 1.88 1.88 0 0 0-1.333-.55"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.542 16.916a.75.75 0 0 1-1.06 0l-.96-.959a3.4 3.4 0 0 1-4.206-.47 3.405 3.405 0 0 1-.002-4.8 3.397 3.397 0 0 1 4.796-.002 3.416 3.416 0 0 1 .472 4.211l.96.96a.75.75 0 0 1 0 1.06m6.078-7.614L14.092 3.34a3.376 3.376 0 0 0-4.187.002L2.38 9.302a1 1 0 0 0-.164 1.405c.344.433.973.504 1.405.163l.126-.1v6.806a3.816 3.816 0 0 0 3.814 3.81h8.88a3.816 3.816 0 0 0 3.813-3.81V10.77l.126.1a1 1 0 1 0 1.241-1.568"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeSearchBold;
