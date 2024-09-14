import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSave2Light = ({
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
      d="M15.85 3.743A2.42 2.42 0 0 0 14.106 3H7.782C4.842 3 3 5.08 3 8.026v7.948C3 18.918 4.834 21 7.782 21h8.435C19.166 21 21 18.919 21 15.974V10.08c0-.624-.241-1.225-.674-1.675z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.057 21v-3.324c0-1.013.82-1.834 1.833-1.834h4.222c1.012 0 1.833.821 1.833 1.834V21M8.057 3v4.65"
    />
  </Svg>
);
export default IconlystFloppyDiskSave2Light;
