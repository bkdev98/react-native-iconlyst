import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEggplantTwoTone = ({
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
      d="M19.549 12.052C16.775 17.378 8.979 23.573 3.9 18.783c-2.33-2.198-1.777-7.382 2.568-8.653 3.593-1.05 5.267-.82 7.927-3.135"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.81 16.564c.341.303 1.578.887 3.074 0M19.619 6.678c.54-.595 1.492-2.11.973-3.407M18.452 10.154c.158.704.494 1.335.978 1.838a.62.62 0 0 0 .57.152.81.81 0 0 0 .523-.384c.877-1.51.555-3.61-.89-5.054-1.444-1.445-3.543-1.767-5.054-.89a.8.8 0 0 0-.384.523.62.62 0 0 0 .152.57c.503.484 1.134.82 1.838.978m2.267 2.267-.002-.007m.002.007c-.723.483-2.164-.103-2.164-.103s-.586-1.441-.103-2.164m0 0 .007.002"
    />
  </Svg>
);
export default IconlystEggplantTwoTone;
