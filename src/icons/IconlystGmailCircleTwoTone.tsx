import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGmailCircleTwoTone = ({
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
      d="M9.138 16.263V11.52l2.864 2.268 2.895-2.267v4.74s.958.023 1.228.023c.625 0 1.132-.506 1.132-1.13V8.855a1.13 1.13 0 0 0-.312-.788 1.13 1.13 0 0 0-1.598-.042l-3.345 2.612-3.35-2.612a1.13 1.13 0 0 0-1.597.042c-.211.222-.315.506-.312.79v6.296c0 .625.507 1.131 1.132 1.131.27 0 1.263-.022 1.263-.022"
    />
  </Svg>
);
export default IconlystGmailCircleTwoTone;
