import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.483 9.88A18.4 18.4 0 0 0 16.1 6.472c-1.738-.69-3.193.172-3.407 1.9-.26 2.549-.255 4.989 0 7.266.233 1.796 1.836 2.558 3.407 1.892 2.011-.832 3.814-1.96 5.383-3.41 1.34-1.225 1.372-2.966 0-4.238"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.483 9.88A18.4 18.4 0 0 0 6.1 6.472c-1.738-.69-3.193.172-3.407 1.9-.26 2.549-.254 4.989 0 7.266.233 1.796 1.836 2.558 3.407 1.892 2.011-.832 3.814-1.96 5.383-3.41 1.34-1.225 1.372-2.966 0-4.238"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystForwardTwoTone;
