import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle1Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.603 2.16a1 1 0 0 0-.961 1.038c.02.552.504 1.019 1.037.96 4.402-.141 8.142 3.28 8.312 7.69a7.9 7.9 0 0 1-1.195 4.494 1 1 0 1 0 1.698 1.056 9.9 9.9 0 0 0 1.495-5.627c-.212-5.511-4.897-9.808-10.386-9.61"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M4.776 7.78c.307 0 .61-.14.806-.407.37-.502.805-.967 1.293-1.38a1 1 0 0 0-1.293-1.526 10 10 0 0 0-1.61 1.72 1 1 0 0 0 .804 1.593M3.101 13.728a1 1 0 0 0 .923-1.071 8 8 0 0 1 .267-2.692 1 1 0 0 0-1.929-.53 10 10 0 0 0-.332 3.37 1 1 0 0 0 1.071.923M4.647 15.327a1 1 0 1 0-1.83.807 10.04 10.04 0 0 0 3.465 4.198 1.002 1.002 0 0 0 1.14-1.643 8 8 0 0 1-2.775-3.362M16.947 18.452a7.9 7.9 0 0 1-4.339 1.671 8 8 0 0 1-2.349-.168.999.999 0 1 0-.437 1.951 10 10 0 0 0 2.933.211 9.9 9.9 0 0 0 5.423-2.089 1 1 0 1 0-1.23-1.576" />
    </G>
  </Svg>
);
export default IconlystLoadingCircle1Bulk;
