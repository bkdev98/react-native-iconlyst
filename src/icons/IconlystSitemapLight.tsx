import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSitemapLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M3.5 18.215a2.092 2.092 0 1 1 4.184 0 2.092 2.092 0 0 1-4.184 0ZM10.408 18.215a2.092 2.092 0 1 1 4.184 0 2.092 2.092 0 0 1-4.184 0ZM10.408 6.023a2.092 2.092 0 1 1 4.184 0 2.092 2.092 0 0 1-4.184 0ZM17.316 18.215a2.092 2.092 0 1 1 4.184 0 2.092 2.092 0 0 1-4.184 0Z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M5.591 16.117v-1.935c0-1.156.937-2.092 2.092-2.092h9.633c1.155 0 2.092.936 2.092 2.092v1.935M12.5 8.115v8.002"
    />
  </Svg>
);
export default IconlystSitemapLight;
