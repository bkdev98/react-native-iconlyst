import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntenna2Bulk = ({
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
      d="M13.63 6.909h3.35a4.53 4.53 0 0 1 4.52 4.53v5.46c0 2.49-2.03 4.52-4.52 4.52H7.03c-2.49 0-4.53-2.03-4.53-4.52v-5.46c0-2.5 2.04-4.53 4.53-4.53h6.6"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.89 11.288c0 .41.34.74.75.74s.75-.34.75-.75a.749.749 0 1 0-1.5 0zM17.89 14.178c0 .41.34.74.75.74s.75-.34.75-.75a.749.749 0 1 0-1.5 0zM17.89 17.068c0 .41.34.74.75.74s.75-.34.75-.75a.749.749 0 1 0-1.5 0zM14.01 18.778c.98 0 1.78-.8 1.78-1.78v-5.66c0-.98-.8-1.79-1.78-1.79H6.4c-.98 0-1.78.81-1.78 1.79v5.66c0 .98.8 1.78 1.78 1.78zM17.051 3.89l-3.37 3.016h-3.336L7.054 3.884a.749.749 0 1 1 1.014-1.105l3.936 3.615 4.047-3.622a.75.75 0 1 1 1 1.118"
    />
  </Svg>
);
export default IconlystOldTvAntenna2Bulk;
