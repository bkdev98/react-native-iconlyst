import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFlashBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.215 11.554a8.418 8.418 0 1 0 .487-2.828M17.361 17.719l3.425 3.417"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.078 15.556v-2.895H8.34a.497.497 0 0 1-.402-.79l3.347-4.61c.283-.39.9-.19.9.292v2.895h2.739c.406 0 .641.461.402.79l-1.673 2.305"
    />
  </Svg>
);
export default IconlystSearchFlashBroken;
