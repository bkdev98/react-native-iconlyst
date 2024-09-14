import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMotorBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.415 18.649a3.16 3.16 0 1 0 0-6.32 3.16 3.16 0 0 0 0 6.32M13.687 10.578 5.343 7.31a1.44 1.44 0 0 0-1.359.231l-.71.577a.72.72 0 0 0 .018 1.145l1.26.941"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.788 15.489h7.625s1.634-3.302 5.78-4.554c.882-.266 1.001-1.263.55-2.354M16.11 9.23c.15-.754 0-1.89-.17-2.778a.938.938 0 0 1 1.181-1.065c.88.25 1.645.72 2.257 1.285M10.232 9.222c-.222-.675.977-3.507 5.584-1.687M17.583 15.649l-1.562-2.024"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17.316 12.338c.089-.018.177-.018.266-.018a3.17 3.17 0 0 1 3.17 3.16c0 1.749-1.421 3.17-3.17 3.17a3.163 3.163 0 0 1-3.16-3.17"
    />
  </Svg>
);
export default IconlystMotorBroken;
