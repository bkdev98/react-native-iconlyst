import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefresh1TwoTone = ({
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
      d="m4.5 8.344 1.608 3.804 3.784-1.6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.33 12.055c.097-3.821 3.231-6.89 7.085-6.89a7.09 7.09 0 0 1 7.085 7.084 7.083 7.083 0 0 1-7.085 7.085 7.1 7.1 0 0 1-5.84-3.062"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRefresh1TwoTone;
