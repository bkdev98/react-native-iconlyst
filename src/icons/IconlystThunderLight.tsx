import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThunderLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.698 9.786a.995.995 0 0 1 .805 1.58l-6.695 9.22c-.566.782-1.8.38-1.8-.583v-5.79H5.53a.995.995 0 0 1-.805-1.58l6.695-9.22c.566-.78 1.8-.38 1.8.584v5.79z"
    />
  </Svg>
);
export default IconlystThunderLight;
