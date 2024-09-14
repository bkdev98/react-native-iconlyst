import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12.615c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75a9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75M12 4.365a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 7.365a.75.75 0 0 1 .586.283l3.383 4.243a.75.75 0 0 1-.586 1.217h-.638l.797 1.38a.75.75 0 0 1-.65 1.125H9.108a.75.75 0 0 1-.65-1.125l.797-1.38h-.638a.75.75 0 0 1-.586-1.218l3.383-4.242A.75.75 0 0 1 12 7.365m-1.826 4.243h.38a.75.75 0 0 1 .65 1.125l-.797 1.38h3.186l-.796-1.38a.75.75 0 0 1 .649-1.125h.38L12 9.318z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 14.113a.75.75 0 0 1 .75.75v2.252a.75.75 0 0 1-1.5 0v-2.252a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreeCircleOutline;
