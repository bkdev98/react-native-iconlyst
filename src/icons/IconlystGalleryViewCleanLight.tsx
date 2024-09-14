import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewCleanLight = ({
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
      d="M10.623 20.034H7.392C4.687 20.034 3 18.133 3 15.428V8.134C3 5.43 4.687 3.52 7.392 3.52h7.73c2.714 0 4.392 1.91 4.392 4.614v1.938M3.002 9.027h16.512M3 14.572h8.365M14.044 11.892V3.527m-5.548.005v16.502"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.054 12.816 1.56 1.56c.544.545.5 1.27-.045 1.813l-3.859 3.859c-.545.545-1.269.59-1.815.045l-1.56-1.56c-.544-.545-.498-1.269.046-1.814l3.86-3.858c.544-.544 1.269-.589 1.813-.045M15.404 14.693l3.33 3.33"
    />
  </Svg>
);
export default IconlystGalleryViewCleanLight;
