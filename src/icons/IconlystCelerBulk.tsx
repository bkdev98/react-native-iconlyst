import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelerBulk = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.28 19.719a9.43 9.43 0 0 0 5.537 1.781c2.538 0 4.924-.99 6.719-2.787a.5.5 0 0 0 0-.708l-2.635-2.63a.5.5 0 0 0-.707 0 4.74 4.74 0 0 1-3.376 1.399 4.76 4.76 0 0 1-2.107-.488zm3.43-12.004a4.78 4.78 0 0 1 5.484.908.5.5 0 0 0 .707 0l2.635-2.63a.5.5 0 0 0 0-.707 9.43 9.43 0 0 0-6.72-2.786 9.42 9.42 0 0 0-5.54 1.782z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.711 16.286 8.28 19.718q-.624-.45-1.18-1.005a9.43 9.43 0 0 1-2.781-6.714A9.43 9.43 0 0 1 7.1 5.286q.553-.555 1.177-1.004l3.432 3.433a4.78 4.78 0 0 0 .002 8.572"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCelerBulk;
