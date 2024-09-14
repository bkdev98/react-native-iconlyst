import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSendLight = ({
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
      d="M3.127 6.738C3.591 4.493 5.294 3 7.783 3h6.322c.66 0 1.29.27 1.746.744l4.475 4.662c.433.45.674 1.05.674 1.675v5.893C21 18.92 19.166 21 16.217 21H7.783C4.835 21 3 18.92 3 15.974"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.055 21v-3.324c0-1.013.82-1.834 1.833-1.834h4.222c1.012 0 1.833.821 1.833 1.834V21M8.055 3v2.657M4.968 13.207 3 11.238 4.968 9.27M3 11.238h7.22"
    />
  </Svg>
);
export default IconlystFloppyDiskSendLight;
