import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferUpDownOutline = ({
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
      d="M9.813 2.25a.75.75 0 0 1 .595.295l4.813 6.3a.75.75 0 0 1-.596 1.205H12.75v4.65a.75.75 0 0 1-.75.75h-1.108l3.296 4.315 3.295-4.315h-1.108a.75.75 0 0 1-.75-.75v-3.6a.75.75 0 0 1 1.5 0v2.85H19a.75.75 0 0 1 .596 1.205l-4.812 6.3a.75.75 0 0 1-1.193 0l-4.812-6.3a.75.75 0 0 1 .596-1.205h1.875V9.3a.75.75 0 0 1 .75-.75h1.108L9.813 4.235 6.517 8.55h1.108a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-1.5 0v-2.85H5a.75.75 0 0 1-.596-1.205l4.813-6.3a.75.75 0 0 1 .596-.295"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferUpDownOutline;
