import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.889 4.02a3.37 3.37 0 0 0-3.37 3.37v9.76a3.37 3.37 0 0 0 3.37 3.37h2.592a.75.75 0 0 1 0 1.5H7.889a4.87 4.87 0 0 1-4.87-4.87V7.39a4.87 4.87 0 0 1 4.87-4.87h7.096a4.87 4.87 0 0 1 4.87 4.87v3.365a.75.75 0 0 1-1.5 0V7.389a3.37 3.37 0 0 0-3.37-3.368z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.01 17.638a.65.65 0 0 0-.649.65v1.583c0 .36.291.65.65.65h2.82a.65.65 0 0 0 .65-.65v-1.583a.65.65 0 0 0-.65-.65zm-2.149.65a2.15 2.15 0 0 1 2.15-2.15h2.82c1.187 0 2.15.964 2.15 2.15v1.583a2.15 2.15 0 0 1-2.15 2.15h-2.82a2.15 2.15 0 0 1-2.15-2.15z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.392 13.458a2.434 2.434 0 0 1 2.463 2.404v1.051a.75.75 0 0 1-1.5 0v-1.037a.934.934 0 0 0-1.867-.005v1.042a.75.75 0 0 1-1.5 0V15.85a2.435 2.435 0 0 1 2.403-2.392zM8.58 8.89a1.052 1.052 0 1 1 0 .004zm1.053-2.552A2.55 2.55 0 0 0 7.08 8.89v.006a2.552 2.552 0 1 0 2.552-2.558"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.635 9.99a.75.75 0 0 0-.75.75v5.677c0 .414.336.75.75.75h1.802a.75.75 0 0 0 0-1.5h-1.052V10.74a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.885 13.665c0 .414.336.75.75.75h1.802a.75.75 0 0 0 0-1.5H9.635a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyOutline;
