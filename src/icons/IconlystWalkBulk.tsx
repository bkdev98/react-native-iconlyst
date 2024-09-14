import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalkBulk = ({
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
      d="M17.219 12.42c-.452-.113-.874-.428-1.29-.963-.193-.252-.37-.512-.545-.77-.58-.85-1.236-1.811-2.424-2.385-1.58-.76-3.361-.644-4.65.307-1.862 1.376-2.218 3.942-2.283 4.696a1 1 0 0 0 .91 1.08c.539.058 1.035-.36 1.082-.91.092-1.066.534-2.56 1.478-3.257.237-.174.522-.272.82-.336l-.51 2.078a5.3 5.3 0 0 0 .954 4.534l3.78 4.87a1 1 0 1 0 1.58-1.227l-3.782-4.871a3.3 3.3 0 0 1-.591-2.822l.543-2.213c.586.358.99.925 1.44 1.584.198.29.398.582.618.866.7.905 1.482 1.454 2.387 1.679a1 1 0 1 0 .483-1.94"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12.224 7.18a2.47 2.47 0 0 0 2.465-2.466 2.47 2.47 0 0 0-2.465-2.464A2.467 2.467 0 0 0 9.76 4.714a2.467 2.467 0 0 0 2.464 2.466M8.706 17.465l-2.011 2.686a1 1 0 0 0 1.602 1.198l2.01-2.686a1.001 1.001 0 0 0-1.601-1.198" />
    </G>
  </Svg>
);
export default IconlystWalkBulk;
