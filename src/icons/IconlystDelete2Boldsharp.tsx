import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelete2Boldsharp = ({
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
      d="m8.58 6.215.806-2.451h5.73l.807 2.45zm2.922 11.135h1.5v-6.473h-1.5zm6-11.135-1.3-3.951H8.3L7 6.214H3.82l1.514 15.8h13.835l1.512-15.8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelete2Boldsharp;
