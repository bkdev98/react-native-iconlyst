import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarDay17Broken = ({
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
      d="M9.505 10.893v5.355M14.14 16.248l1.663-5.355h-3.378M16.069 3v2.962M8.8 3v2.962"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.244 4.422c2.651 0 4.294 1.472 4.286 4.178v8.214c0 2.706-1.642 4.186-4.294 4.186H8.624C5.98 21 4.33 19.494 4.33 16.746V8.6c0-1.731.675-2.957 1.854-3.616M8.805 4.422h4.706"
    />
  </Svg>
);
export default IconlystCalendarDay17Broken;
