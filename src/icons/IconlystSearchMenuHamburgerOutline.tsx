import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMenuHamburgerOutline = ({
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
      d="M14.301 5.917a5.642 5.642 0 1 0 3.808 9.802l.01-.01.053-.048a5.642 5.642 0 0 0-3.87-9.744m5.401 10.312a7.142 7.142 0 1 0-1.096 1.026l2.114 2.11a.75.75 0 1 0 1.06-1.063zM2.5 7.211a.75.75 0 0 1 .75-.75h2.873a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m0 4.762a.75.75 0 0 1 .75-.75h1.428a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m0 4.796a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchMenuHamburgerOutline;
