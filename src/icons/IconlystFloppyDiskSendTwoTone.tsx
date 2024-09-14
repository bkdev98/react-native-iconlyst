import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSendTwoTone = ({
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
      d="M3.627 6.738C4.091 4.493 5.794 3 8.283 3h6.322c.66 0 1.29.27 1.746.744l4.475 4.662c.433.45.674 1.05.674 1.675v5.893C21.5 18.92 19.666 21 16.717 21H8.283C5.335 21 3.5 18.92 3.5 15.974"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.555 21v-3.324c0-1.013.82-1.834 1.833-1.834h4.222c1.012 0 1.833.821 1.833 1.834V21M8.555 3v2.657"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.468 13.207 3.5 11.238 5.468 9.27M3.5 11.238h7.22"
    />
  </Svg>
);
export default IconlystFloppyDiskSendTwoTone;
