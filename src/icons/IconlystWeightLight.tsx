import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeightLight = ({
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
      d="M17.54 15.991c-.729 1.575-1.886 2.596-3.18 2.596-1.633 0-3.042-1.595-3.665-3.87a10.1 10.1 0 0 1-.36-2.722c0-.962.126-1.885.36-2.722.623-2.275 2.032-3.86 3.665-3.86 1.303 0 2.46 1.011 3.19 2.596M6.389 13.195h-2.19a1.196 1.196 0 1 1 0-2.391h2.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.357 5.415h-4.021c-2.222 0-4.022 2.948-4.022 6.585s1.8 6.584 4.022 6.584h4.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.34 12c0-.657.533-1.19 1.19-1.19h4.274c.66 0 1.196.534 1.196 1.186 0 .66-.535 1.195-1.196 1.195h-4.273a1.19 1.19 0 0 1-1.191-1.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWeightLight;
