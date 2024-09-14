import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownGraphCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.75 12.119a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75c0 5.384-4.365 9.75-9.75 9.75s-9.75-4.366-9.75-9.75m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.196 11.129a.75.75 0 0 1 .59.881l-.65 3.28a.75.75 0 0 1-.881.59l-3.279-.65a.75.75 0 0 1 .292-1.472l2.543.504.504-2.543a.75.75 0 0 1 .881-.59"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.581 6.54a.75.75 0 0 1 1.05.157l2.511 3.396 2.68-1.793a.75.75 0 0 1 1.04.207l4.162 6.219a.75.75 0 1 1-1.247.834l-3.745-5.596-2.65 1.774a.75.75 0 0 1-1.02-.178L4.424 7.59a.75.75 0 0 1 .157-1.05"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownGraphCircleOutline;
