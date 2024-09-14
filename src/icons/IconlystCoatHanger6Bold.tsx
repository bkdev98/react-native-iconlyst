import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger6Bold = ({
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
      d="M5.41 19.583h13.178a3.253 3.253 0 0 0 3.248-3.25 3.24 3.24 0 0 0-2.006-3.004l-6.724-2.778a.3.3 0 0 1 .072-.04 3.14 3.14 0 0 0 1.843-1.949H21a1 1 0 1 0 0-2h-5.985a3.13 3.13 0 0 0-2.15-2.037 3.18 3.18 0 0 0-2.767.547 3.14 3.14 0 0 0-1.23 2.5 1 1 0 1 0 2 0c0-.361.165-.695.452-.916a1.16 1.16 0 0 1 1.03-.198c.363.098.676.405.775.762.2.717-.217 1.246-.676 1.429a2.21 2.21 0 0 0-1.374 1.559l-6.93 3.053c-1.205.509-1.985 1.682-1.985 3.072a3.254 3.254 0 0 0 3.25 3.25m-.473-4.485 6.744-2.972 7.384 3.05a1.25 1.25 0 0 1-.477 2.406H5.41c-.689 0-1.25-.56-1.25-1.33 0-.502.3-.953.777-1.154"
      clipRule="evenodd"
    />
    <Path fill={props.color} d="M3 8.562h4.312a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2" />
  </Svg>
);
export default IconlystCoatHanger6Bold;
