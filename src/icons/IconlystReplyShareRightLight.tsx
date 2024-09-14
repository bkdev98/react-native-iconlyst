import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareRightLight = ({
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
      d="M12.16 10.881c-2.377 0-4.217-.822-5.235-3.07 0 0-.88 6.169 5.235 6.169l.001 1.691c0 .44.515.677.85.393l3.924-3.324a.514.514 0 0 0 .014-.774L13.02 8.414a.515.515 0 0 0-.86.385z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareRightLight;
