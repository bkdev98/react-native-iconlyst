import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCornerLeftUpLight = ({
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
      d="M21 18.025a2 2 0 1 1-4 0v-2.981a3.626 3.626 0 0 0-3.626-3.626H9.828l.03.029a2 2 0 0 1-2.83 2.828l-3.442-3.443a2 2 0 0 1 0-2.828L7.029 4.56a2 2 0 1 1 2.828 2.828l-.029.029h3.546A7.626 7.626 0 0 1 21 15.044z"
    />
  </Svg>
);
export default IconlystCornerLeftUpLight;
