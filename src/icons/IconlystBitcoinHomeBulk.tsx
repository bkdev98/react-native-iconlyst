import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinHomeBulk = ({
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
      d="M22.134 10.143 14.44 3.82a3.084 3.084 0 0 0-3.884.003l-7.69 6.32a1 1 0 0 0 1.268 1.545l.375-.308 1.14 6.78a3.23 3.23 0 0 0 3.196 2.705h7.307a3.23 3.23 0 0 0 3.198-2.706l1.14-6.78.375.31c.186.152.41.226.634.226a.999.999 0 0 0 .635-1.772"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.375 15.787a2.15 2.15 0 0 0 .545-1.644 2.06 2.06 0 0 0-.512-1.157 2.12 2.12 0 0 0 .512-1.592c-.094-.997-.914-1.785-1.917-1.906v-.084a.75.75 0 1 0-1.5 0v.06h-.686a.75.75 0 0 0-.75.75v5.52c0 .414.336.75.75.75h.686v.06a.75.75 0 0 0 1.5 0v-.08a2.13 2.13 0 0 0 1.372-.677m-2.807-4.822v1.26h1.235a.62.62 0 0 0 .466-.206.62.62 0 0 0 .158-.482c-.03-.322-.33-.572-.683-.572zm0 2.76h1.176c.347 0 .653.251.683.561a.63.63 0 0 1-.624.698h-1.235z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinHomeBulk;
