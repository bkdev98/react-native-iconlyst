import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceAddPlusBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.765 13.342a18.3 18.3 0 0 0-3.28.003 2.49 2.49 0 0 0-2.371 2.204 15 15 0 0 0-.002 3.656c.123 1.237 1.151 2.193 2.359 2.221a18.3 18.3 0 0 0 3.263.002 2.465 2.465 0 0 0 2.39-2.21c.151-1.218.151-2.45.002-3.653-.118-1.243-1.147-2.2-2.361-2.223M8.766 2.575a18 18 0 0 0-3.281-.001A2.486 2.486 0 0 0 3.114 4.78a14.9 14.9 0 0 0-.001 3.657c.124 1.234 1.152 2.187 2.357 2.215a18.3 18.3 0 0 0 3.264.002 2.465 2.465 0 0 0 2.39-2.205c.151-1.218.151-2.451.002-3.654-.118-1.242-1.147-2.2-2.36-2.221M21.888 4.795c-.117-1.242-1.146-2.198-2.358-2.22a18.4 18.4 0 0 0-3.282-.002 2.49 2.49 0 0 0-2.372 2.207 15 15 0 0 0 0 3.658c.123 1.233 1.152 2.186 2.358 2.214q.826.076 1.652.077c.543 0 1.083-.025 1.611-.074a2.46 2.46 0 0 0 2.39-2.206c.15-1.216.15-2.452.001-3.654" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.04 16.634h-2.408v-2.405a.75.75 0 0 0-1.5 0v2.405h-2.405a.75.75 0 1 0 0 1.5h2.405v2.407a.75.75 0 0 0 1.5 0v-2.407h2.407a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceAddPlusBulk;
