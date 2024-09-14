import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoopRightOutline = ({
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
      d="M8.47 3.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H7a2.25 2.25 0 0 0-2.25 2.25v6A2.25 2.25 0 0 0 7 18.75h10a2.25 2.25 0 0 0 2.25-2.25v-6A2.25 2.25 0 0 0 17 8.25h-1a.75.75 0 0 1 0-1.5h1a3.75 3.75 0 0 1 3.75 3.75v6A3.75 3.75 0 0 1 17 20.25H7a3.75 3.75 0 0 1-3.75-3.75v-6A3.75 3.75 0 0 1 7 6.75h3.19L8.47 5.03a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoopRightOutline;
