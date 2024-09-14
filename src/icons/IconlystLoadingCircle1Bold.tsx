import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle1Bold = ({
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
      d="M4.776 8.501c.307 0 .61-.141.806-.407.37-.502.805-.967 1.293-1.38a1 1 0 0 0-1.293-1.526 10 10 0 0 0-1.61 1.72 1 1 0 0 0 .804 1.593M3.101 14.449a1 1 0 0 0 .923-1.072 8 8 0 0 1 .267-2.692 1 1 0 0 0-1.929-.529 10 10 0 0 0-.332 3.37 1 1 0 0 0 1.071.922M4.647 16.048a1 1 0 1 0-1.83.807 10.04 10.04 0 0 0 3.465 4.198 1.002 1.002 0 0 0 1.14-1.643 8 8 0 0 1-2.775-3.362M16.947 19.173a7.9 7.9 0 0 1-4.339 1.67 8 8 0 0 1-2.349-.167.999.999 0 1 0-.437 1.951 10 10 0 0 0 2.933.21 9.9 9.9 0 0 0 5.423-2.088 1 1 0 1 0-1.23-1.576M11.603 2.882a1 1 0 0 0-.961 1.037c.02.552.504 1.02 1.037.961 4.402-.142 8.142 3.28 8.312 7.69a7.9 7.9 0 0 1-1.195 4.493 1 1 0 1 0 1.698 1.056 9.9 9.9 0 0 0 1.495-5.627c-.212-5.51-4.897-9.808-10.386-9.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingCircle1Bold;
