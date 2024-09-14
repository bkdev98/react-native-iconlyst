import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareUpLight = ({
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
      d="M16.218 3H7.783C4.836 3 3 5.081 3 8.026v7.947c0 2.945 1.836 5.026 4.784 5.026h8.434c2.947 0 4.782-2.081 4.782-5.026V8.026C21 5.081 19.156 3 16.218 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.881 11.838c0 2.377-.822 4.217-3.07 5.235 0 0 6.169.88 6.169-5.235l1.691-.001a.516.516 0 0 0 .393-.85L12.74 7.063a.514.514 0 0 0-.774-.014l-3.552 3.929c-.3.332-.063.86.385.86z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareUpLight;
