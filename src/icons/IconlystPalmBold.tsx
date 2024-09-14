import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPalmBold = ({
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
      d="M19.142 10.44c0-.602-.489-1.091-1.09-1.091a1.86 1.86 0 0 0-1.86 1.859v1.504a.42.42 0 0 1-.424.424c-.864 0-1.725.365-2.362 1.002-.638.652-.99 1.489-.99 2.36a.424.424 0 0 1-.848 0c0-1.106.443-2.159 1.247-2.963a4.23 4.23 0 0 1 2.406-1.203l.123-.016V5.144c-.026-.76-.682-1.38-1.464-1.38-.746 0-1.389.588-1.464 1.352v4.115a.425.425 0 0 1-.848 0V3.63c-.025-.761-.682-1.38-1.464-1.38A1.47 1.47 0 0 0 8.64 3.657v6.331a.42.42 0 0 1-.424.424.42.42 0 0 1-.424-.424V6.665c0-.801-.67-1.476-1.463-1.476-.383 0-.76.16-1.039.437a1.44 1.44 0 0 0-.437 1.039v7.946c0 1.911.741 3.705 2.088 5.05a7.09 7.09 0 0 0 5.051 2.089 7.2 7.2 0 0 0 5.052-2.089c1.666-1.676 1.984-3.712 2.075-5.483v-.001c.025-.565.033-1.928.023-3.737"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPalmBold;
