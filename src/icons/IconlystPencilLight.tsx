import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPencilLight = ({
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
      strokeWidth={1.5}
      d="M4.725 21h15.088M11.02 6.613l4.75 3.451M12.461 4.676a2.1 2.1 0 0 1 2.944-.409l1.427 1.08c.926.699 1.109 2.017.409 2.942l-5.824 7.704a3.82 3.82 0 0 1-2.275 1.438l-1.335.276a1.528 1.528 0 0 1-1.834-1.386l-.098-1.36a3.82 3.82 0 0 1 .762-2.581z"
    />
  </Svg>
);
export default IconlystPencilLight;
