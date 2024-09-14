import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLampshadeBroken = ({
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
      d="M9.852 4.314a1.614 1.614 0 0 1 1.553-1.177h2.693c.722 0 1.355.48 1.552 1.173l1.43 5.063a1.134 1.134 0 0 1-1.097 1.442l-6.452-.029a1.135 1.135 0 0 1-1.088-1.44l.487-1.738M9.71 21.137h6.113M12.767 10.848v10.265M15.59 13.987v-3.163"
    />
  </Svg>
);
export default IconlystLampshadeBroken;
