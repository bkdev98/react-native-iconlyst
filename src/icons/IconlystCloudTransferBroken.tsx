import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudTransferBroken = ({
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
      d="M6.831 10.577c-.262 0-.607-.055-.953-.195A2.38 2.38 0 0 1 4.48 8.218c0-1.489 1.052-2.363 2.353-2.374 0-.936.735-2.809 2.808-2.809s2.808 1.873 2.808 2.809c1.3.011 2.352.885 2.352 2.374 0 .962-.571 1.794-1.395 2.166-.35.14-.697.192-.96.192h-2.6M11.526 20.998c-.262 0-.608-.054-.954-.194a2.38 2.38 0 0 1-1.397-2.164c0-1.489 1.052-2.363 2.352-2.374 0-.936.735-2.809 2.809-2.809 2.073 0 2.807 1.873 2.807 2.809 1.301.01 2.352.885 2.352 2.374 0 .962-.57 1.794-1.394 2.166-.351.14-.698.192-.96.192H15.06"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.48 14.41v3.328c0 1.05.852 1.902 1.902 1.902h3.014M19.519 12.034V8.706c0-1.05-.851-1.901-1.901-1.901h-3.202"
    />
  </Svg>
);
export default IconlystCloudTransferBroken;
