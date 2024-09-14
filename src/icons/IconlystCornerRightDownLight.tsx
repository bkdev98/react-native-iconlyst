import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCornerRightDownLight = ({
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
      d="M3 5.975a2 2 0 0 1 4 0v2.981a3.626 3.626 0 0 0 3.626 3.626h3.545l-.029-.029a2 2 0 0 1 2.829-2.828l3.443 3.443a2 2 0 0 1 0 2.828L16.97 19.44a2 2 0 0 1-2.829-2.828l.03-.029h-3.546A7.626 7.626 0 0 1 3 8.956z"
    />
  </Svg>
);
export default IconlystCornerRightDownLight;
