import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBroken = ({
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
      d="M15.716 16.223h-7.22M15.716 12.037h-7.22M11.251 7.86H8.496M12.5 21.158l3.445-.001c2.76-.017 4.47-1.834 4.47-4.604V7.357c0-2.784-1.723-4.607-4.506-4.607l-7.69.004C5.46 2.77 3.75 4.587 3.75 7.357v9.196c0 2.784 1.722 4.607 4.506 4.607H9"
    />
  </Svg>
);
export default IconlystDocumentBroken;
