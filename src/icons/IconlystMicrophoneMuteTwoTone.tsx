import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneMuteTwoTone = ({
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
      d="m8.309 11.887-4.258 5.2c-1.776 2.168 1.128 5.014 3.257 3.209l5.093-4.318M21.5 20.164 5.8 4.464"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.527 9.198a5.32 5.32 0 0 1 1.51-4.503 5.345 5.345 0 1 1 7.556 7.564 5.31 5.31 0 0 1-4.494 1.512"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.125 18.344.697 1.04c.687 1.02 2.08 1.285 3.13.588l.941-.627c.197-.128.422-.206.638-.236"
    />
  </Svg>
);
export default IconlystMicrophoneMuteTwoTone;
