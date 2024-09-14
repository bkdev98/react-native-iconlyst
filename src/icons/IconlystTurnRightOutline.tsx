import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnRightOutline = ({
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
      d="M16.415 12.03a.75.75 0 0 1 1.06 0l3.054 3.054a.75.75 0 0 1 0 1.06l-3.053 3.054a.75.75 0 1 1-1.061-1.06l1.16-1.16 1.363-1.364-2.523-2.523a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.143 6.078a4.393 4.393 0 0 0 0 8.786H20a.75.75 0 0 1 0 1.5H9.143a5.893 5.893 0 0 1 0-11.786h8.437a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnRightOutline;
