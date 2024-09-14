import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrobeTwoTone = ({
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
      d="M21.91 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.22 13.814-.706-.712M14.342 16.621a2.013 2.013 0 0 1-2.735.79M18.06 14.688l-.546.84M14.342 5.805l.547.841M17.92 10.578a1.652 1.652 0 1 0-3.304 0 1.652 1.652 0 0 0 3.303 0M9.929 9.41a2.01 2.01 0 0 1 1.278-2.543M7.848 11.84c.786.786.786 2.06 0 2.847"
    />
  </Svg>
);
export default IconlystMicrobeTwoTone;
