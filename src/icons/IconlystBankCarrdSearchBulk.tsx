import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdSearchBulk = ({
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
      d="M20.993 11.916c.214.136.513-.009.513-.262V9.956a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3v4.4c0 2.79 1.79 4.67 4.46 4.67h5.836c.225 0 .371-.24.286-.448a5.5 5.5 0 0 1-.412-2.082c0-1.45.56-2.81 1.59-3.83a5.42 5.42 0 0 1 6.727-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.504 7.78c0-2.794-1.794-4.67-4.464-4.67H6.97c-2.67 0-4.464 1.876-4.464 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3zM16.559 18.033a2.16 2.16 0 0 1-.636-1.535 2.167 2.167 0 0 1 2.172-2.169c.556 0 1.112.212 1.536.636.41.41.636.953.636 1.533s-.226 1.125-.636 1.535a2.176 2.176 0 0 1-3.072 0m5.715 1.58-1.108-1.107c.39-.592.6-1.284.6-2.009 0-.98-.381-1.902-1.075-2.594a3.675 3.675 0 0 0-5.192 0 3.64 3.64 0 0 0-1.076 2.595 3.67 3.67 0 0 0 3.672 3.668c.702 0 1.403-.2 2.01-.598l1.11 1.107a.75.75 0 0 0 1.059-1.063"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdSearchBulk;
