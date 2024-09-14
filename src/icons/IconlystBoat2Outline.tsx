import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoat2Outline = ({
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
      d="M2.624 15.774a.75.75 0 0 1 .626-.336h18a.75.75 0 0 1 .638 1.144l-2.49 4.029a2.51 2.51 0 0 1-2.135 1.188H6.49a2.51 2.51 0 0 1-2.308-1.523L2.56 16.482a.75.75 0 0 1 .064-.708m1.762 1.164 1.176 2.748c.158.371.524.613.928.613h10.773c.35 0 .675-.181.86-.479l1.782-2.883zM10.593 2.732l-.226.715zh.001l.003.001.007.002.022.008.077.026q.098.034.273.101a13.673 13.673 0 0 1 3.74 2.219c2.025 1.703 4.004 4.488 3.677 8.684a.75.75 0 0 1-.762.692l-7.819-.148a.75.75 0 0 1-.673-1.05c1.115-2.549 1.338-5.786.495-9.66a.75.75 0 0 1 .959-.875m.771 1.95c.491 3.054.338 5.795-.454 8.156l6.018.113c.025-3.192-1.53-5.33-3.177-6.714a12 12 0 0 0-2.387-1.555"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoat2Outline;
