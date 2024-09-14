import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHealthClipboardBroken = ({
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
      d="M8.885 7.45a1.335 1.335 0 0 1 0-2.67h.17a.45.45 0 0 0 .398-.247A2.77 2.77 0 0 1 11.935 3h.13c1.05 0 2.011.594 2.481 1.533.076.151.23.247.398.247h.17a1.335 1.335 0 1 1 0 2.67H12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.55 6.068c-1.663.356-2.67 1.754-2.67 3.622v7.599c0 2.171 1.353 3.71 3.534 3.71h3.581M16.449 6.07c1.664.356 2.67 1.754 2.67 3.622v7.599c0 2.171-1.362 3.71-3.542 3.71M8.885 17.21h6.229M12 10.73v3.204m-1.602-1.604h3.204"
    />
  </Svg>
);
export default IconlystHealthClipboardBroken;
