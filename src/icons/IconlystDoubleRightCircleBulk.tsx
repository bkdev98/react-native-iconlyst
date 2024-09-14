import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleRightCircleBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 21.75c-5.239 0-9.5-4.261-9.5-9.5s4.261-9.5 9.5-9.5 9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.028 12.781-3 2.999a.746.746 0 0 1-1.061 0 .75.75 0 0 1 0-1.061l2.47-2.468-2.47-2.471a.75.75 0 1 1 1.061-1.061l3 3.001a.75.75 0 0 1 0 1.061m-5.248 0-3 2.999a.746.746 0 0 1-1.061 0 .75.75 0 0 1 0-1.061l2.47-2.468-2.47-2.471A.75.75 0 1 1 8.78 8.719l3 3.001a.75.75 0 0 1 0 1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleRightCircleBulk;
