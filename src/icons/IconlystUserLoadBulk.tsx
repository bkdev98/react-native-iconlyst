import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoadBulk = ({
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
      d="M11.961 21.674c-5.332 0-9.67-4.34-9.67-9.674s4.338-9.674 9.67-9.674c1.214 0 2.398.222 3.522.66a.75.75 0 0 1 .427.97.747.747 0 0 1-.971.427 8.2 8.2 0 0 0-2.978-.557c-4.505 0-8.17 3.667-8.17 8.174s3.665 8.174 8.17 8.174c4.511 0 8.18-3.667 8.18-8.174 0-1.21-.264-2.386-.764-3.456l-.9.559a.751.751 0 0 1-1.141-.726l.345-2.892a.752.752 0 0 1 .977-.624l2.835.92c.278.09.477.333.512.623s-.1.574-.348.727l-.997.618c.642 1.309.981 2.757.981 4.251 0 5.334-4.343 9.674-9.68 9.674"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.055 14.52a3.334 3.334 0 0 0 3.33-3.332 3.334 3.334 0 0 0-3.33-3.33 3.334 3.334 0 0 0-3.33 3.33 3.334 3.334 0 0 0 3.33 3.331m0 1.16c2.832 0 4.449 1.213 5.028 2.69a8.15 8.15 0 0 1-5.122 1.804 8.13 8.13 0 0 1-4.973-1.693c.544-1.527 2.17-2.801 5.067-2.801"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserLoadBulk;
