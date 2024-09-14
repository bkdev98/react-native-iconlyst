import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCloudBulk = ({
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
      d="M11.135 2.5a8.42 8.42 0 0 0 0 16.84c4.64 0 8.41-3.77 8.41-8.42s-3.77-8.42-8.41-8.42"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.99 19.79-1.984-1.978a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416M13.287 14.161c.32 0 .67-.07 1.03-.21.9-.42 1.48-1.32 1.48-2.3 0-1.22-.74-2.17-1.84-2.45-.28-1.04-1.17-2.18-2.76-2.18s-2.48 1.14-2.76 2.18c-1.1.28-1.84 1.23-1.84 2.45 0 .99.58 1.89 1.5 2.3.32.13.67.21 1 .21zm.46-1.6c.32-.15.55-.51.55-.91 0-.75-.52-1.02-1.01-1.03-.41 0-.74-.34-.74-.75 0-.26-.24-1.35-1.35-1.35s-1.35 1.09-1.35 1.35c0 .41-.33.75-.74.75-.24 0-1.01.08-1.01 1.03a1 1 0 0 0 1 1.01h4.19c.05 0 .23-.01.46-.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCloudBulk;
