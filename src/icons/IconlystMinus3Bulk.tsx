import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMinus3Bulk = ({
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
      d="M10.533 2.892a2.94 2.94 0 0 1 2.934 0l5.686 3.283a2.94 2.94 0 0 1 1.468 2.543v6.565c0 1.048-.56 2.017-1.468 2.54l-5.686 3.284a2.93 2.93 0 0 1-2.934 0l-5.686-3.283a2.94 2.94 0 0 1-1.468-2.542V8.719c0-1.05.56-2.018 1.468-2.543z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.941 11.252a.75.75 0 1 0 0 1.5h6.118a.75.75 0 0 0 0-1.5z"
    />
  </Svg>
);
export default IconlystMinus3Bulk;
