import * as React from 'react';
import Svg, { G, Ellipse, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero" transform="translate(2 2)">
      <Ellipse cx={8.599} cy={8.653} rx={8.599} ry={8.653} />
      <Path
        d="M18.675 19.955a1.32 1.32 0 0 1-.89-.385l-2.036-2.38a1.09 1.09 0 0 1-.08-1.521.975.975 0 0 1 1.387 0l2.561 2.05c.37.377.483.937.29 1.43a1.34 1.34 0 0 1-1.179.851z"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystSearchBulk;
