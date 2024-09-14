import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTriangle2TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.022 17.234-1.467 1.475 1.467 1.46M8.898 11.864l-.527-2.012-2.002.523M15.623 10.914l2.007.553.549-1.994"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.055 6.837.978-1.647c.688-1.164 2.385-1.145 3.053.032l3.543 6.238M8.162 18.727l-1.915-.022c-1.353-.012-2.186-1.489-1.503-2.657l3.623-6.193M19.31 14.39l.954 1.662c.675 1.171-.175 2.64-1.528 2.643l-7.176.017"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRefreshTriangle2TwoTone;
