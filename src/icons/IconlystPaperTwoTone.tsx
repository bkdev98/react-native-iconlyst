import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperTwoTone = ({
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
      <Path d="M14.737 2.762H8.084c-2.06 0-3.834 1.669-3.834 3.729v10.713c0 2.176 1.659 3.91 3.834 3.91h7.989c2.06 0 3.729-1.85 3.729-3.91V8.038z" />
      <Path d="M14.474 2.75v2.91a2.574 2.574 0 0 0 2.568 2.574c1.317.003 2.664.004 2.755-.002" />
      <Path d="M14.284 15.558H8.887M12.242 10.606H8.886" opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystPaperTwoTone;
