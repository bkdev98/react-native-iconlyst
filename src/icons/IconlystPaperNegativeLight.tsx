import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperNegativeLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M14.737 2.762H8.084A3.82 3.82 0 0 0 4.25 6.49V17.34a3.714 3.714 0 0 0 3.65 3.777q.091 0 .184-.002h7.988a3.77 3.77 0 0 0 3.73-3.775v-9.3z" />
      <Path d="M14.473 2.75v2.91a2.575 2.575 0 0 0 2.57 2.574h2.753M14.293 13.747h-4.9" />
    </G>
  </Svg>
);
export default IconlystPaperNegativeLight;
