import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesPlusTwoTone = ({
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
      d="M13.629 18.994c4.257-.513 7.74-3.571 7.29-8.163-.373-3.782-3.396-6.908-7.161-7.332-4.961-.56-8.88 3.3-9.105 8.126-.221 4.742 3.622 8.652 7.877 9.862.322.092.64-.166.64-.501v-1.487c0-.262.199-.474.459-.505"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.18 11.484h-4.756m2.377 2.392v-4.78"
    />
  </Svg>
);
export default IconlystMessagesPlusTwoTone;
