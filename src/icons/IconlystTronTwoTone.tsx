import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTronTwoTone = ({
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
      d="m12.16 20.7 8.874-11.288a.79.79 0 0 0-.083-1.064l-3.143-2.912-13.08-2.422a.787.787 0 0 0-.868 1.08l6.956 16.425a.787.787 0 0 0 1.344.18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.586 21 .914-10.05-8.498-7.542M17.809 5.436 12.5 10.949l8.703-2.089"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTronTwoTone;
