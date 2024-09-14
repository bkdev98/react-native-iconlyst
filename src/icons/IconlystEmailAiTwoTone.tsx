import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailAiTwoTone = ({
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
      d="M21 10.663V8.08c0-2.763-1.845-5.012-4.582-5.012H7.582C4.845 3.069 3 5.319 3 8.08v6.182c0 2.765 1.845 5.012 4.582 5.006h5.147"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.312 8.577-3.999 3.252a2.07 2.07 0 0 1-2.573 0L6.707 8.577M18.148 19.269l.11-.3a4.14 4.14 0 0 1 2.442-2.446l.3-.11-.3-.112a4.14 4.14 0 0 1-2.441-2.445l-.111-.3-.111.3a4.14 4.14 0 0 1-2.442 2.445l-.3.111.3.111a4.14 4.14 0 0 1 2.442 2.445z"
    />
  </Svg>
);
export default IconlystEmailAiTwoTone;
