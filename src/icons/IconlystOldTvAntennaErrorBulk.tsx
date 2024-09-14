import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaErrorBulk = ({
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
      d="M13.63 6.909h3.34c2.5 0 4.53 2.03 4.53 4.53v5.46a4.53 4.53 0 0 1-4.53 4.52H7.03a4.53 4.53 0 0 1-4.53-4.52v-5.46c0-2.5 2.03-4.53 4.53-4.53h6.6"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12 15.189c.41 0 .75-.33.75-.75v-3.21c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.21c0 .42.34.75.75.75M12 17.809c.41 0 .75-.34.75-.75v-.01a.749.749 0 1 0-1.5.01c0 .41.34.75.75.75M17.051 3.89l-3.37 3.016h-3.336L7.054 3.884a.749.749 0 1 1 1.014-1.105l3.936 3.615 4.047-3.622a.75.75 0 1 1 1 1.118"
    />
  </Svg>
);
export default IconlystOldTvAntennaErrorBulk;
