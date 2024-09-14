import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperPlusTwoTone = ({
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
      <Path d="M14.736 2.762H8.084C6.025 2.762 4.25 4.43 4.25 6.49V17.34c0 2.176 1.658 3.775 3.834 3.775h7.988c2.06 0 3.73-1.715 3.73-3.775V8.038z" />
      <Path d="M14.474 2.75v2.91a2.575 2.575 0 0 0 2.569 2.574c1.316.003 2.663.004 2.754-.002" />
      <Path d="M14.294 12.914h-4.9m2.45 2.451v-4.9" opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystPaperPlusTwoTone;