import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMentionBulk = ({
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
      d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2c5.607 0 10 4.393 10 10 0 2.794-1.453 4.6-3.7 4.6-2.04 0-3.7-1.66-3.7-3.7V8.6a1 1 0 1 1 2 0v4.3c0 .954.747 1.7 1.7 1.7 1.534 0 1.7-1.819 1.7-2.6 0-4.486-3.514-8-8-8-4.411 0-8 3.589-8 8s3.589 8 8 8c1.546 0 3.161-.509 4.545-1.432a1.001 1.001 0 0 1 1.11 1.664C15.945 21.372 13.937 22 12 22"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 9.4A2.57 2.57 0 0 0 9.4 12a2.57 2.57 0 0 0 2.6 2.6c1.458 0 2.6-1.142 2.6-2.6S13.458 9.4 12 9.4m0 7.2A4.604 4.604 0 0 1 7.4 12c0-2.537 2.063-4.6 4.6-4.6s4.6 2.063 4.6 4.6a4.604 4.604 0 0 1-4.6 4.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMentionBulk;
