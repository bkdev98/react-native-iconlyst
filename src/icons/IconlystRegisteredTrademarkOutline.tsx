import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRegisteredTrademarkOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.643 13.39v1.918a.75.75 0 0 1-1.5 0V8.194a.75.75 0 0 1 .75-.75h2.863a2.974 2.974 0 0 1 1.288 5.653l.805 1.921a.751.751 0 0 1-1.384.579l-.924-2.207zm2.25-1.506a1.475 1.475 0 0 0 1.338-1.467c-.001-.813-.661-1.473-1.475-1.473h-2.113v2.946h2.113q.069 0 .136-.006"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2a9.75 9.75 0 0 1 9.75 9.75c0 5.384-4.365 9.75-9.75 9.75s-9.75-4.366-9.75-9.75A9.75 9.75 0 0 1 12 2m8.25 9.75A8.25 8.25 0 0 0 12 3.5a8.25 8.25 0 1 0 8.25 8.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRegisteredTrademarkOutline;
