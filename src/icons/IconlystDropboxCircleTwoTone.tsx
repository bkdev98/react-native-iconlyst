import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropboxCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.605 14.236c.341.217.777.217 1.118 0l7.258-4.62a.52.52 0 0 0 0-.877l-1.587-1.01a1.04 1.04 0 0 0-1.118 0l-7.258 4.62a.52.52 0 0 0 0 .877z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.981 13.226a.52.52 0 0 0 0-.878L9.723 7.73a1.04 1.04 0 0 0-1.118 0l-1.587 1.01a.52.52 0 0 0 0 .878l7.258 4.62c.341.216.777.216 1.118 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.902 14.398-.013 1.036a1 1 0 0 1-.546.876l-1.893.961a1 1 0 0 1-.902 0l-1.88-.955a1 1 0 0 1-.546-.902l.014-1.016"
    />
  </Svg>
);
export default IconlystDropboxCircleTwoTone;
