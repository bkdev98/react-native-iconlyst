import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareDownTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.718 3.25H8.283C5.336 3.25 3.5 5.331 3.5 8.276v7.947c0 2.945 1.836 5.026 4.784 5.026h8.434c2.947 0 4.782-2.081 4.782-5.026V8.276c0-2.945-1.844-5.026-4.782-5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.617 12.408c0-2.377.822-4.217 3.07-5.235 0 0-6.169-.88-6.169 5.235l-1.692.001a.516.516 0 0 0-.392.85l3.324 3.924a.514.514 0 0 0 .775.014c.78-.861 2.53-2.8 3.551-3.929a.515.515 0 0 0-.385-.86z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareDownTwoTone;
