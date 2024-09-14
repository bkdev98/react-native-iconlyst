import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMentionOutline = ({
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
      d="M12.249 21.75a9.75 9.75 0 0 1 0-19.5A9.646 9.646 0 0 1 22 12c0 2.643-1.354 4.35-3.45 4.35a3.454 3.454 0 0 1-3.45-3.45V8.642a.75.75 0 1 1 1.5 0V12.9a1.953 1.953 0 0 0 1.95 1.95c1.809 0 1.95-2.181 1.95-2.85a8.163 8.163 0 0 0-8.251-8.25 8.25 8.25 0 1 0 4.652 15.065.75.75 0 1 1 .848 1.239 9.7 9.7 0 0 1-5.5 1.697"
    />
    <Path
      fill={props.color}
      d="M12.248 16.348a4.35 4.35 0 1 1 .002-8.698 4.35 4.35 0 0 1-.002 8.698m0-7.2a2.85 2.85 0 1 0 .003 5.7 2.85 2.85 0 0 0-.003-5.7"
    />
  </Svg>
);
export default IconlystMentionOutline;
