import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletDoublleTwoTone = ({
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
      d="M21.015 16.286h-3.602a2.395 2.395 0 1 1 0-4.79h3.602"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.203 13.838H17.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.622 6.163 7.692-.034a4.67 4.67 0 0 1 4.69 4.65l.025 5.498a4.67 4.67 0 0 1-4.65 4.69l-7.692.034a4.67 4.67 0 0 1-4.69-4.65l-.025-5.497a4.67 4.67 0 0 1 4.65-4.691"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.02 10.182h4.805"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.3 7.569c-.018-1.78.805-3.267 2.61-3.534l6.94-.996c1.975-.293 3.265 1.113 3.558 3.097l.072.437"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWalletDoublleTwoTone;
