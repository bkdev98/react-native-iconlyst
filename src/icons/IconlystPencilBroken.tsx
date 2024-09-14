import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPencilBroken = ({
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
      d="m11.426 6.975 3.435 2.524M9.64 9.445l3.23-4.48a2.35 2.35 0 0 1 3.283-.515l1.733 1.264a2.35 2.35 0 0 1 .516 3.284l-6.39 8.859a4.1 4.1 0 0 1-2.211 1.58l-1.667.486a1.92 1.92 0 0 1-2.454-1.825l-.016-1.776a4.1 4.1 0 0 1 .746-2.398l1.016-1.408"
    />
  </Svg>
);
export default IconlystPencilBroken;
