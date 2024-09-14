import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboardOpenUpBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.178 4.52 12.495 3l2.328 1.528M16.614 20.993c2.858 0 4.642-1.598 4.642-4.535v-4.67c0-2.983-1.784-4.618-4.642-4.618H8.387c-2.866 0-4.64 1.607-4.64 4.545v4.743c-.01 2.938 1.765 4.535 4.631 4.535h4.118M15.245 17.383H9.754"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.51 11.029v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M14.156 11.029v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M10.834 11.029v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M17.48 11.029v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M12.496 13.831v-.021m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M9.172 13.831v-.021m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M15.818 13.831v-.021m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226"
    />
  </Svg>
);
export default IconlystKeyboardOpenUpBroken;
