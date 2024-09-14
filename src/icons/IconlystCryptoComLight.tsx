import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryptoComLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.009 4h7.982c.364 0 .7.194.881.509l3.992 6.915c.181.315.181.703 0 1.017l-3.992 6.912a1.02 1.02 0 0 1-.88.508H8.008c-.364 0-.7-.194-.881-.508L3.136 12.44a1.02 1.02 0 0 1 0-1.017l3.992-6.915c.181-.315.517-.509.88-.509"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.467 13.645 1.63-1.213 1.438.915v1.645l1.087 1.042v.492l-1.05.977h-.885zM13.4 16.537v-.492l1.084-1.042V13.36l1.423-.927 1.626 1.224-2.21 3.847h-.873zM11.487 12.217l-1.012-1.301h3.052l-1.058 1.301.149 1.461h-1.16l-.124.004zM8.703 8.861l.61-2.304h5.339l.645 2.304z"
    />
  </Svg>
);
export default IconlystCryptoComLight;
