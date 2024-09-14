import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnect3Bulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path
        fillRule="evenodd"
        d="M16.85 2.186h-9.7a3.41 3.41 0 0 0-3.4 3.4 3.4 3.4 0 0 0 1.395 2.749.3.3 0 0 0 .303.021c.134-.064.268-.12.412-.17.32-.11.65-.19 1-.21h.01c.09-.01.19-.01.28-.01h9.7c.09 0 .19 0 .28.01h.01c.34.03.68.1.99.22h.01q.211.063.409.157c.1.047.22.045.31-.02a3.4 3.4 0 0 0 1.391-2.747c0-1.87-1.53-3.4-3.4-3.4"
        clipRule="evenodd"
      />
      <Path d="M16.85 15.865c.75 0 1.44-.24 2-.66a3.39 3.39 0 0 0-.26-5.66c-.51-.31-1.1-.48-1.74-.48h-9.7c-.64 0-1.23.17-1.74.48a3.39 3.39 0 0 0-.26 5.66c.56.42 1.25.66 2 .66h9.7" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.3 15.865v1.37c-.71.23-1.25.77-1.48 1.48H5.85c-.41 0-.75.34-.75.75s.34.75.75.75h3.97c.3.94 1.17 1.6 2.23 1.6s1.93-.66 2.23-1.6h3.97c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.97c-.23-.71-.77-1.25-1.48-1.48v-1.37zm.75 4.45c.48 0 .85-.37.85-.85s-.37-.85-.85-.85-.85.37-.85.85.37.85.85.85M10.08 6.235c-.41 0-.75-.34-.75-.75s.33-.75.74-.75h.01c.41 0 .75.34.75.75s-.34.75-.75.75m-2.43 0a.749.749 0 1 1-.01-1.5h.01c.41 0 .75.34.75.75s-.34.75-.75.75M10.08 13.225c-.41 0-.75-.34-.75-.75s.33-.75.74-.75h.01c.41 0 .75.34.75.75s-.34.75-.75.75m-2.43 0a.749.749 0 1 1-.01-1.5h.01c.41 0 .75.34.75.75s-.34.75-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServersConnect3Bulk;
