import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallBaseball2Outline = ({
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
      d="M18.894 5.106c-3.807-3.808-9.98-3.808-13.788 0a9.75 9.75 0 1 0 13.788 0M6.166 6.166a8.25 8.25 0 1 1 11.668 11.668A8.25 8.25 0 0 1 6.166 6.166"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.546 2.27a.75.75 0 0 0-.79.709 9.75 9.75 0 0 0 10.265 10.264.75.75 0 1 0-.081-1.497 8.25 8.25 0 0 1-8.686-8.686.75.75 0 0 0-.708-.79M10.402 13.598a9.75 9.75 0 0 0-7.423-2.841.75.75 0 1 0 .081 1.497 8.25 8.25 0 0 1 8.686 8.686.75.75 0 0 0 1.497.081 9.75 9.75 0 0 0-2.84-7.423"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.53 8.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06M11.53 12.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06M13.67 6.665a.75.75 0 0 0-1.006-.336l-2 1a.75.75 0 0 0 .671 1.342l2-1a.75.75 0 0 0 .336-1.006M17.335 10.33a.75.75 0 0 0-1.006.335l-1 2a.75.75 0 0 0 1.342.67l1-2a.75.75 0 0 0-.336-1.006M8.335 10.33a.75.75 0 0 0-1.006.335l-1 2a.75.75 0 0 0 1.342.67l1-2a.75.75 0 0 0-.336-1.006M13.67 15.665a.75.75 0 0 0-1.006-.336l-2 1a.75.75 0 0 0 .671 1.342l2-1a.75.75 0 0 0 .336-1.006"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallBaseball2Outline;
