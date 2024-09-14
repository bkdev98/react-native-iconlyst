import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailPrivacyBroken = ({
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
      d="M11.86 19.843H7.554C4.833 19.85 3 17.616 3 14.869V8.728c0-2.745 1.833-4.98 4.553-4.98h.89M20.883 10.4V8.73c0-2.745-1.833-4.98-4.552-4.98h-4.39"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.22 8.98-3.973 3.23a2.056 2.056 0 0 1-2.557 0L6.684 8.98M20.977 17.136c0 2.287-2.74 3.115-2.74 3.115s-2.738-.829-2.738-3.115-.1-2.215.12-2.435 2.26-.931 2.619-.931 2.618.93 2.618.93"
    />
  </Svg>
);
export default IconlystEmailPrivacyBroken;
