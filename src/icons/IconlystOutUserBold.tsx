import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOutUserBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.815 14.921a1 1 0 0 1-.705-1.709l.168-.167h-2.254a1 1 0 1 1 0-2h2.256l-.17-.168a1 1 0 1 1 1.41-1.419l1.89 1.877a1 1 0 0 1 .267.476l.006.027.001.003v.003q.002 0 .001.003a1 1 0 0 1-.303.933l-1.862 1.85a1 1 0 0 1-.705.291M9.804 14.516c-4.979 0-7.209 2.754-7.209 5.484a.75.75 0 0 0 .75.75l12.919-.018a.75.75 0 0 0 .749-.75c0-2.721-2.23-5.466-7.209-5.466M9.804 13.001a4.88 4.88 0 0 0 4.875-4.876A4.88 4.88 0 0 0 9.804 3.25 4.88 4.88 0 0 0 4.93 8.125a4.88 4.88 0 0 0 4.875 4.876"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOutUserBold;
