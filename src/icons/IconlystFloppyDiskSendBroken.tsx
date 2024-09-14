import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSendBroken = ({
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
      d="M3.128 6.738C3.59 4.493 5.295 3 7.784 3h6.322c.66 0 1.289.27 1.745.744l1.28 1.333M3 15.973C3 18.92 4.835 21 7.783 21h8.434C19.166 21 21 18.92 21 15.973v-5.892c0-.625-.241-1.225-.674-1.675l-1.189-1.238"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.055 21v-3.324c0-1.013.82-1.834 1.833-1.834h1.476M14.11 15.842c1.012 0 1.833.821 1.833 1.834V21M8.055 3v2.657M4.968 13.207 3 11.238 4.968 9.27M3 11.238h7.22"
    />
  </Svg>
);
export default IconlystFloppyDiskSendBroken;
