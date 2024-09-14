import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSockTwoTone = ({
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
      d="m17.05 8.039.747 5.076a4.28 4.28 0 0 1-.785 3.158l-2.762 3.455a4.51 4.51 0 0 1-7.298-5.3l1.538-1.845-.317-3.012"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.481 12.557c.414.357 1.553 1.06 2.797 1.021"
      opacity={0.4}
    />
    <Ellipse
      cx={11.897}
      cy={4.921}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={5.217}
      ry={1.23}
      transform="rotate(-6.965 11.897 4.921)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.062 4.197.448 2.614c.094.546-.167 1.09-.673 1.316-.926.414-2.536 1.026-4.361 1.25a13.8 13.8 0 0 1-4.404-.198c-.474-.1-.817-.49-.902-.968l-.45-2.517"
    />
  </Svg>
);
export default IconlystSockTwoTone;
