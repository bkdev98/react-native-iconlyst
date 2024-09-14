import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHashtagAngleCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.55 6.776a.75.75 0 0 1 1.024.275l.514.89.89-.514a.75.75 0 0 1 .75 1.299l-.89.514 1.472 2.55.89-.514a.75.75 0 0 1 .75 1.299l-.89.514.514.89a.75.75 0 1 1-1.299.75l-.514-.89-2.55 1.472.514.89a.75.75 0 1 1-1.299.75l-.514-.89-.89.514a.75.75 0 0 1-.75-1.299l.89-.514-1.472-2.55-.89.514a.75.75 0 0 1-.75-1.299l.89-.514-.514-.89a.75.75 0 1 1 1.3-.75l.513.89 2.55-1.472-.514-.89a.75.75 0 0 1 .275-1.025m.989 3.214-2.55 1.472 1.472 2.55 2.55-1.472z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHashtagAngleCircleOutline;
