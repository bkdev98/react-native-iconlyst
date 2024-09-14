import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaSideBold = ({
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
      d="M15.27 16.509c0 1.92-1.26 3.25-3.19 3.25H7.41c-1.93 0-3.19-1.33-3.19-3.25v-4.69c0-1.92 1.26-3.24 3.19-3.24h4.67c1.93 0 3.19 1.32 3.19 3.24zm1.7-9.6h-5.46l2.14-3.15c.24-.35.15-.81-.19-1.05a.765.765 0 0 0-1.05.2l-2.14 3.15-2.08-3.14a.755.755 0 0 0-1.04-.21c-.35.23-.44.69-.21 1.04l2.09 3.16h-2c-2.5 0-4.53 2.03-4.53 4.53v5.46a4.53 4.53 0 0 0 4.53 4.52h9.94c2.5 0 4.53-2.03 4.53-4.52v-5.46c0-2.5-2.03-4.53-4.53-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOldTvAntennaSideBold;
