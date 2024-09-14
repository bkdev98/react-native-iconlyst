import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftLineBold = ({
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
      d="M12.936 18.006a1.12 1.12 0 0 1-.794-.328l-4.847-4.829a1.12 1.12 0 0 1-.382-.847v-.003c0-.3.119-.587.33-.797l4.9-4.877a1.124 1.124 0 1 1 1.586 1.594l-2.971 2.958h9.117a1.125 1.125 0 1 1 0 2.25h-9.112l2.967 2.958a1.124 1.124 0 0 1-.794 1.921M4.125 19.046A1.125 1.125 0 0 1 3 17.92V6.08a1.124 1.124 0 1 1 2.25 0v11.84c0 .62-.503 1.125-1.125 1.125"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftLineBold;
