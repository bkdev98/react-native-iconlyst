import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnLeftCircleBold = ({
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
      d="M12.395 17.496h-1.587a.75.75 0 0 1 0-1.5h1.587a2.59 2.59 0 0 0 2.589-2.59 2.59 2.59 0 0 0-2.589-2.59h-2.32l1.028 1.028a.751.751 0 0 1-1.06 1.062l-2.309-2.31a.77.77 0 0 1-.22-.53q.001-.153.059-.289a.7.7 0 0 1 .126-.19c.014-.016.02-.037.035-.052l2.309-2.308a.749.749 0 1 1 1.06 1.061l-1.028 1.028h2.32a4.095 4.095 0 0 1 4.089 4.09 4.094 4.094 0 0 1-4.089 4.09M12 2.75c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnLeftCircleBold;
