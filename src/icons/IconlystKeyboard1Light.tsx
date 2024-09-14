import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard1Light = ({
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
      d="M16.229 20.25H7.762c-2.946 0-4.772-1.644-4.762-4.663V8.422C3 5.402 4.824 3.75 7.77 3.75h8.459C19.166 3.75 21 5.431 21 8.498v7.09c0 3.018-1.834 4.662-4.771 4.662M14.448 16.14H9.55"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.996 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M11.996 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M7.549 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M7.549 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M16.45 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M16.45 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226"
    />
  </Svg>
);
export default IconlystKeyboard1Light;
