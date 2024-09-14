import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangingOutline = ({
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
      d="M7.76 17.35a.75.75 0 0 1-.75.752H5.54l.001 1.484a.75.75 0 0 1-1.5.001l-.002-2.233a.75.75 0 0 1 .75-.75l2.22-.002a.75.75 0 0 1 .75.749M20.077 4.662a.75.75 0 0 1 .75.75l.003 2.233a.75.75 0 0 1-.75.75l-2.22.002a.75.75 0 1 1-.001-1.5l1.47-.001-.001-1.483a.75.75 0 0 1 .75-.75M10.356 9.307a2.94 2.94 0 0 1 4.156 0l1.171 1.172a2.94 2.94 0 0 1 0 4.157l-1.171 1.17a2.94 2.94 0 0 1-4.156 0l-1.171-1.17a2.94 2.94 0 0 1 0-4.156zm1.06 1.062-1.17 1.17a1.44 1.44 0 0 0 0 2.036l1.17 1.17a1.44 1.44 0 0 0 2.035.001l1.172-1.17a1.44 1.44 0 0 0 0-2.036l-1.172-1.172a1.44 1.44 0 0 0-2.035 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.472 12.228a.75.75 0 0 1 .713.786 9.65 9.65 0 0 1-4.56 7.745l-.396-.637.396.637c-4.48 2.778-10.343 1.453-13.201-2.946a.75.75 0 1 1 1.258-.817 8.166 8.166 0 0 0 11.152 2.488 8.15 8.15 0 0 0 3.852-6.544.75.75 0 0 1 .786-.713M7.247 4.24c4.479-2.778 10.343-1.453 13.2 2.946a.75.75 0 1 1-1.258.817A8.167 8.167 0 0 0 8.037 5.516a8.15 8.15 0 0 0-3.852 6.544.75.75 0 1 1-1.499-.074 9.65 9.65 0 0 1 4.56-7.745"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChangingOutline;
