import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPalmBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.643 10.44c0-.602-.49-1.091-1.091-1.091a1.86 1.86 0 0 0-1.86 1.859v1.504a.42.42 0 0 1-.424.424c-.864 0-1.725.365-2.362 1.002-.638.652-.99 1.489-.99 2.36a.424.424 0 0 1-.848 0c0-1.106.444-2.159 1.248-2.963a4.23 4.23 0 0 1 2.406-1.203l.123-.016V5.144c-.027-.76-.683-1.38-1.465-1.38-.746 0-1.389.588-1.464 1.352v4.115a.425.425 0 0 1-.848 0V3.63c-.024-.761-.681-1.38-1.463-1.38A1.47 1.47 0 0 0 9.14 3.657v6.331a.42.42 0 0 1-.424.424.42.42 0 0 1-.424-.424V6.665c0-.801-.67-1.476-1.463-1.476-.383 0-.761.16-1.04.437a1.44 1.44 0 0 0-.436 1.039v7.946c0 1.911.74 3.705 2.088 5.05a7.09 7.09 0 0 0 5.05 2.089 7.2 7.2 0 0 0 5.052-2.089c1.666-1.676 1.985-3.712 2.075-5.483v-.001c.026-.565.034-1.928.023-3.737"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPalmBulk;
