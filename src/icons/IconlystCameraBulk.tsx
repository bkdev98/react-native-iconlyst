import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraBulk = ({
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
      d="M17.957 6.852a1.38 1.38 0 0 1-.944-.42c-.044-.05-.222-.27-.637-1.049a2.73 2.73 0 0 0-2.411-1.445h-3.912c-.994 0-1.911.54-2.391 1.41-.437.792-.618 1.024-.667 1.079a1.39 1.39 0 0 1-.933.43A3.567 3.567 0 0 0 2.5 10.415v5.642a4.61 4.61 0 0 0 4.606 4.607h9.788a4.61 4.61 0 0 0 4.606-4.608v-5.644c0-1.964-1.598-3.56-3.543-3.56"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.999 17.249a3.847 3.847 0 0 1-3.843-3.843 3.847 3.847 0 0 1 3.843-3.844 3.847 3.847 0 0 1 3.843 3.844 3.847 3.847 0 0 1-3.843 3.842m-2.343-3.843A2.346 2.346 0 0 1 12 11.062a2.346 2.346 0 0 1 2.343 2.344A2.346 2.346 0 0 1 12 15.748a2.346 2.346 0 0 1-2.343-2.342"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraBulk;
