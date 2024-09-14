import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightLineBulk = ({
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
      d="M11.064 18.006c.287 0 .575-.11.794-.329l4.847-4.828c.235-.207.382-.51.382-.848v-.003c0-.3-.119-.586-.33-.796l-4.9-4.877a1.124 1.124 0 1 0-1.586 1.594l2.971 2.957H4.125a1.125 1.125 0 1 0 0 2.25h9.113l-2.968 2.958a1.124 1.124 0 0 0 .794 1.922"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.875 19.046c.622 0 1.125-.504 1.125-1.125V6.08a1.124 1.124 0 1 0-2.25 0v11.84c0 .62.503 1.125 1.125 1.125"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRightLineBulk;
