import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarGiftBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.703 16.142a3.34 3.34 0 0 0-2.224 2.224.5.5 0 0 1-.957 0 3.33 3.33 0 0 0-2.224-2.224.501.501 0 0 1 0-.957 3.34 3.34 0 0 0 2.224-2.225c.13-.422.828-.422.957 0a3.34 3.34 0 0 0 2.224 2.225.5.5 0 0 1 0 .957M8.396 4.275c1.45 0 2.245 1.595 2.612 2.641H8.396c-.69 0-1.252-.59-1.252-1.319s.562-1.322 1.252-1.322m4.622 4.141c.276.805.755 1.73 1.496 2.038a.75.75 0 0 1-.577 1.384c-1.118-.465-1.79-1.562-2.182-2.529l-1.34 2.224a.75.75 0 1 1-1.286-.774l1.412-2.343zm2.583-4.14c.69 0 1.251.592 1.251 1.321 0 .728-.56 1.32-1.25 1.32h-2.607c.372-1.047 1.173-2.642 2.606-2.642m2.324 2.815c.267-.435.427-.944.427-1.494 0-1.557-1.234-2.822-2.75-2.822-1.855 0-2.968 1.37-3.603 2.638-.634-1.269-1.748-2.638-3.603-2.638-1.517 0-2.752 1.265-2.752 2.822 0 .55.161 1.061.428 1.495-1.784.447-2.93 2.026-2.93 4.228v6.118c0 2.614 1.601 4.371 3.986 4.371h9.746c2.384 0 3.985-1.757 3.985-4.37V11.32c0-2.204-1.147-3.784-2.934-4.229"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarGiftBold;
