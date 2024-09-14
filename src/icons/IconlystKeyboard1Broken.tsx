import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard1Broken = ({
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
      d="M12.002 20.25h-3.74c-2.946 0-4.772-1.644-4.762-4.663V8.422c0-3.02 1.824-4.672 4.77-4.672h8.459c2.937 0 4.771 1.681 4.771 4.748v7.09c0 3.018-1.834 4.662-4.771 4.662h-1.532M14.948 16.14H10.05"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.496 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M12.496 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M8.049 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M8.049 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M16.95 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M16.95 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226"
    />
  </Svg>
);
export default IconlystKeyboard1Broken;
