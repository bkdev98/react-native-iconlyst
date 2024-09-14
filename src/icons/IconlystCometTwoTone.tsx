import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCometTwoTone = ({
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
      d="M15.725 6.327 17.062 9a.9.9 0 0 0 .678.485l2.99.43a.886.886 0 0 1 .5 1.516l-2.164 2.078a.88.88 0 0 0-.259.787l.512 2.934a.898.898 0 0 1-1.307.936l-2.672-1.386a.91.91 0 0 0-.839 0l-2.673 1.386a.898.898 0 0 1-1.307-.936l.512-2.934a.88.88 0 0 0-.259-.786L8.609 11.43a.886.886 0 0 1 .499-1.516l2.99-.43a.9.9 0 0 0 .679-.486l1.339-2.672a.906.906 0 0 1 1.61 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.426 15.623c-.981-.075-1.998.152-2.939.514M3.5 12.548c.686-.312 1.43-.569 2.185-.698M4.81 8.032c1.654-1.001 3.596-1.6 5.62-1.544"
    />
  </Svg>
);
export default IconlystCometTwoTone;
