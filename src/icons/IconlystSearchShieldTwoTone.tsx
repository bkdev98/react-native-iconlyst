import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchShieldTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.862 17.868 3.423 3.415zM12.138 3.283a8.423 8.423 0 1 1-.001 16.846 8.423 8.423 0 0 1 0-16.846"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.224 15.632s3.14-.95 3.14-3.57.113-2.536-.139-2.79c-.252-.255-2.589-1.067-3-1.067s-2.749.814-3 1.066c-.253.252-.139.17-.139 2.79s3.138 3.571 3.138 3.571"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchShieldTwoTone;
