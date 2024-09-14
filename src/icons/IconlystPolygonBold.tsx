import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygonBold = ({
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
      d="M16.5 20.8a1 1 0 0 1-.5-.134l-4.5-2.6a1 1 0 0 1-.5-.866v-1.7a1 1 0 0 1 2 0v1.122l3.5 2.023 3.5-2.023v-4.046l-3.5-2.021-8.5 4.91a1 1 0 0 1-1 0l-4.5-2.6A1 1 0 0 1 2 12V6.8a1 1 0 0 1 .5-.866l4.5-2.6a1 1 0 0 1 1 0l4.5 2.6a1 1 0 0 1 .5.866v1.6a1 1 0 0 1-2 0V7.376L7.5 5.354 4 7.376v4.046l3.5 2.022 8.5-4.91a1 1 0 0 1 1 0l4.5 2.6a1 1 0 0 1 .5.865v5.2a1 1 0 0 1-.5.866l-4.5 2.6a1 1 0 0 1-.5.134"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolygonBold;
