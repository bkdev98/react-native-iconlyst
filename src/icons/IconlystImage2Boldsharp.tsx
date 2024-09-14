import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImage2Boldsharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.287 20.803H4.368l-.197-.403 3.67-4.744.357-.04 2.491 2.084 3.825-5.37.41.003 5.569 8.078zM8.896 6.874a2.31 2.31 0 0 1 2.307 2.305 2.31 2.31 0 0 1-2.307 2.306 2.31 2.31 0 0 1-2.304-2.306 2.307 2.307 0 0 1 2.304-2.305M2.5 22.354H22v-19.5H2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImage2Boldsharp;
