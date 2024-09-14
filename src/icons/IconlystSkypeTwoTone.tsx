import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSkypeTwoTone = ({
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
      d="M10.53 3.659c-1.65-.957-3.843-.861-5.393.258a5.05 5.05 0 0 0-2.025 3.058c-.26 1.2-.063 2.49.547 3.557a8.57 8.57 0 0 0 .412 4.44 8.5 8.5 0 0 0 4.11 4.585c1.616.825 3.5 1.09 5.287.783 1.604.93 3.72.871 5.26-.165a5.05 5.05 0 0 0 2.173-3.214 5.08 5.08 0 0 0-.561-3.493 8.54 8.54 0 0 0-.332-4.22 8.5 8.5 0 0 0-3.987-4.7c-1.66-.905-3.63-1.211-5.49-.89"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.606 14.436c.258.88 1.276 1.54 2.497 1.54 1.71 0 2.563-.885 2.563-1.976v.024c0-.879-.543-1.63-1.285-1.774l-2.557-.5c-.741-.144-1.285-.894-1.285-1.774C9.54 8.884 10.393 8 12.103 8c1.22 0 2.238.66 2.496 1.54"
    />
  </Svg>
);
export default IconlystSkypeTwoTone;
