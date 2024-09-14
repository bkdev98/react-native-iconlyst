import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageBlockBroken = ({
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
      d="M20.763 11.843V7.894C20.763 5.026 18.977 3 16.107 3H7.894C5.03 3 3.237 5.026 3.237 7.894v3.87M3.236 15.633c0 2.867 1.786 4.894 4.657 4.894h1.705M6.495 6.457h-.056m2.477 0h-.055m2.476 0h-.055M17.79 9.32H3.237"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.43 14.866a3.608 3.608 0 1 1-5.154 5.052"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.43 14.866a3.61 3.61 0 0 0-5.154 5.052"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.429 14.865-5.154 5.052"
    />
  </Svg>
);
export default IconlystWebPageBlockBroken;
