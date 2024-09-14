import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionMarkBulk = ({
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
      d="M11.592 17.95a1 1 0 0 0-1 1v.07c0 .552.448.964 1 .964s1-.482 1-1.035a1 1 0 0 0-1-1"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 4.018a4.994 4.994 0 0 0-4.989 4.988 1 1 0 1 0 2 0 2.99 2.99 0 0 1 2.99-2.988 2.99 2.99 0 0 1 2.988 2.988c0 1.01-.519 1.808-1.552 2.379l-.227.128c-1.053.588-2.644 1.476-2.619 3.445.009.548.455.988 1 .988h.014a1 1 0 0 0 .986-1.013c-.008-.727.597-1.117 1.594-1.674l.23-.13c1.66-.916 2.573-2.381 2.573-4.123a4.994 4.994 0 0 0-4.987-4.988"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuestionMarkBulk;
