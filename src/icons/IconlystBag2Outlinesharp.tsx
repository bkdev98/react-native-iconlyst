import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Outlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 5.073a4 4 0 0 0-3.999 4v1.861h-1.5V9.072a5.5 5.5 0 0 1 10.999 0v1.862h-1.5V9.072a4 4 0 0 0-4-3.999"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.188 7.644h20.124L21.13 22.496H3.37zm2.568 13.352h14.988l.944-11.852H3.812z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag2Outlinesharp;
