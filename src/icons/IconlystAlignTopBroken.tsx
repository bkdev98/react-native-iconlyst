import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignTopBroken = ({
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
      d="M3.5 11V5.198C3.5 3.984 4.484 3 5.698 3h2.604c1.214 0 2.198.984 2.198 2.198v13.604A2.2 2.2 0 0 1 8.302 21H5.698A2.2 2.2 0 0 1 3.5 18.802v-3.401M21.5 5.198A2.2 2.2 0 0 0 19.302 3h-2.604A2.2 2.2 0 0 0 14.5 5.198v6.604c0 1.214.984 2.198 2.198 2.198h2.604a2.2 2.2 0 0 0 2.198-2.198V8.5"
    />
  </Svg>
);
export default IconlystAlignTopBroken;
