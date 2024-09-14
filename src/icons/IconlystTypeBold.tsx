import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTypeBold = ({
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
      d="M9.292 19.388a1 1 0 0 1-1-1V6.61H3a1 1 0 0 1 0-2h12.706a1 1 0 1 1 0 2h-5.414v11.78a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.786 19.388a1 1 0 0 1-1-1v-5.41h-2.154a1 1 0 1 1 0-2H21a1 1 0 1 1 0 2h-2.214v5.41a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTypeBold;
