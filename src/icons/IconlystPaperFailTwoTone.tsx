import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperFailTwoTone = ({
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
      <Path d="M14.737 2.762H7.979a3.73 3.73 0 0 0-3.73 3.729V17.34c0 2.176 1.765 3.775 3.94 3.775h7.884c2.06 0 3.729-1.715 3.729-3.775V8.038z" />
      <Path d="M14.474 2.75v2.91a2.574 2.574 0 0 0 2.568 2.574c1.317.003 2.664.004 2.755-.002" />
      <Path d="m13.576 14.648-3.466-3.466m0 3.466 3.467-3.466" opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystPaperFailTwoTone;
