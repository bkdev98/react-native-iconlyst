import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasEmailBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="m18.668 5.948.007 6.486a.744.744 0 0 1 .473 1.37l-5.679 3.636a2.73 2.73 0 0 1-2.938 0l-5.678-3.636a.743.743 0 0 1 .471-1.37V5.945c-1.72.84-2.824 2.68-2.824 4.9v6.047c0 1.583.557 3.01 1.568 4.017.904.901 2.077 1.376 3.392 1.376h9.072c1.319 0 2.493-.476 3.399-1.379 1.011-1.009 1.569-2.434 1.569-4.014v-6.048c0-2.217-1.107-4.055-2.832-4.896"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.702 9.56a3.34 3.34 0 0 0-2.224 2.224.499.499 0 0 1-.957 0A3.34 3.34 0 0 0 9.297 9.56a.5.5 0 0 1 0-.957 3.34 3.34 0 0 0 2.224-2.224.502.502 0 0 1 .957 0 3.34 3.34 0 0 0 2.224 2.224.499.499 0 0 1 0 .957m2.428-4.867a1.763 1.763 0 0 0-1.757-1.748H8.615c-.968 0-1.756.787-1.756 1.756v8.608l4.48 2.868c.4.257.92.257 1.32 0l4.481-2.868z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasEmailBulk;
