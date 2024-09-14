import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarGlobeLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.13 9.726a3.94 3.94 0 0 0 2.62 2.62 3.94 3.94 0 0 0-2.62 2.619 3.94 3.94 0 0 0-2.618-2.62 3.94 3.94 0 0 0 2.619-2.619M15.736 13.95l.01.01M9.513 6.501l.01.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 3.365a7.839 7.839 0 0 1 3.644 14.78H8.354A7.839 7.839 0 0 1 12 3.366M8.374 18.18l-.793 1.237c-.505.79-.758 1.184-.738 1.51a1 1 0 0 0 .408.745c.263.193.732.193 1.669.193h6.164c.937 0 1.405 0 1.669-.193a1 1 0 0 0 .408-.745c.02-.326-.233-.72-.738-1.51l-.797-1.243"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.496 8.422a1.66 1.66 0 0 0-1.067 1.066 1.66 1.66 0 0 0-1.066-1.066 1.66 1.66 0 0 0 1.066-1.067c.165.506.56.903 1.067 1.067"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarGlobeLight;
