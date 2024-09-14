import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudTransferLight = ({
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
      d="M11.528 16.267c-1.301.012-2.353.886-2.353 2.374 0 .963.574 1.792 1.397 2.164.346.14.691.195.954.195h5.615c.262 0 .608-.052.96-.192a2.38 2.38 0 0 0 1.394-2.167c0-1.488-1.05-2.362-2.352-2.373 0-.937-.734-2.81-2.808-2.81s-2.808 1.874-2.808 2.81M6.833 5.809c-1.3.01-2.353.885-2.353 2.374 0 .962.574 1.791 1.398 2.164.346.14.691.194.953.194h5.616c.262 0 .608-.051.96-.192A2.38 2.38 0 0 0 14.8 8.183c0-1.489-1.051-2.363-2.352-2.374C12.45 4.873 11.715 3 9.641 3S6.833 4.873 6.833 5.809"
      clipRule="evenodd"
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
export default IconlystCloudTransferLight;
