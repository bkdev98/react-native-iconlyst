import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockPasswordBold = ({
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
      d="M15.445 16.305c-.557 0-1.011-.453-1.011-1.01s.454-1.01 1.01-1.01a1.011 1.011 0 0 1 0 2.021m-3.443 0a1.011 1.011 0 1 1 .002-2.022 1.011 1.011 0 0 1-.002 2.022m-3.444 0a1.01 1.01 0 0 1-1.011-1.01c0-.556.454-1.01 1.01-1.01.558 0 1.012.454 1.012 1.01 0 .557-.454 1.01-1.011 1.01m-.253-8.817a3.68 3.68 0 0 1 3.653-3.633h.046c2.019 0 3.673 1.628 3.698 3.64V9.1c-.3-.004-.63-.005-1.006-.005H9.304c-.373 0-.7.001-1 .004zm11.255 3.588a3.48 3.48 0 0 0-1.636-1.63 2.9 2.9 0 0 0-.722-.232V7.487c-.035-2.866-2.393-5.138-5.263-5.132a5.177 5.177 0 0 0-5.134 5.12v1.737a3 3 0 0 0-.723.231 3.5 3.5 0 0 0-1.643 1.636c-.345.723-.345 1.56-.345 3.226v2.13c0 1.675 0 2.517.345 3.225.338.71.919 1.293 1.643 1.648.717.337 1.554.337 3.222.337h5.392c1.668 0 2.505 0 3.228-.34a3.53 3.53 0 0 0 1.636-1.642c.346-.712.346-1.553.346-3.227v-2.13c0-1.666 0-2.503-.346-3.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockPasswordBold;
