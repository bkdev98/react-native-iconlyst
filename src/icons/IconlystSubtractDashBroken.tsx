import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtractDashBroken = ({
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
      d="M6.422 21C4.312 21 3 19.512 3 17.404v-5.687C3 9.61 4.32 8.121 6.422 8.121h6.035c2.11 0 3.422 1.489 3.422 3.596v5.687c0 2.108-1.312 3.596-3.423 3.596H9.927M21 10.453V8.367M18.129 15.894c1.623-.048 2.688-1.115 2.871-2.665M13.518 3h2.086M10.992 3c-1.623.048-2.688 1.114-2.87 2.665M18.129 3c1.623.048 2.688 1.114 2.871 2.665"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.121 10.543v1.741c0 2.108 1.313 3.596 3.422 3.596h4.337"
    />
  </Svg>
);
export default IconlystSubtractDashBroken;
