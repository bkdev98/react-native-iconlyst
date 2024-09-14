import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoteLockBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.73 21.325H8.14a4.12 4.12 0 0 1-4.12-4.12v-6.396M4.02 7.443a4.12 4.12 0 0 1 4.119-4.119h7.096a4.12 4.12 0 0 1 4.12 4.12v3.364M14.23 9.969H9.147m2.653 4.436H9.146M16.26 21.324c-.772 0-1.399-.626-1.399-1.4v-1.583a1.4 1.4 0 0 1 1.4-1.4h2.82c.773 0 1.4.628 1.4 1.4v1.583a1.4 1.4 0 0 1-1.4 1.4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.355 16.967v-1.042a1.684 1.684 0 0 0-3.367-.008v1.05"
    />
  </Svg>
);
export default IconlystNoteLockBroken;
