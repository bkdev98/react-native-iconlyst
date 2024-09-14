import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayLeftOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.945 3.787c-.931-.66-2.103-.668-3.359-.26l-.049.017c-2.875 1.159-6.62 3.564-8.714 5.458-1.002.881-1.64 1.882-1.64 3 0 1.12.638 2.12 1.64 3.001 2.094 1.895 5.84 4.3 8.715 5.458l.053.02c1.251.397 2.424.39 3.356-.264.909-.638 1.392-1.76 1.604-3.126l.005-.031c.183-1.632.269-3.322.262-5.058a44 44 0 0 0-.267-5.092c-.22-1.358-.701-2.482-1.606-3.123m.122 3.344c.175 1.565.258 3.192.251 4.868v.006a42 42 0 0 1-.251 4.871c-.187 1.19-.564 1.82-.982 2.114-.394.276-1.01.382-2.014.07-2.703-1.096-6.285-3.397-8.245-5.173l-.009-.007c-.848-.745-1.134-1.37-1.134-1.877s.286-1.133 1.134-1.878l.009-.008c1.96-1.775 5.544-4.077 8.248-5.171 1.002-.32 1.613-.212 2.004.065.419.297.795.932.989 2.12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayLeftOutline;
