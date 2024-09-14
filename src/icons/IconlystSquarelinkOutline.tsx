import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquarelinkOutline = ({
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
      d="M2.5 3a.75.75 0 0 1 .75-.75h15A3.75 3.75 0 0 1 22 6v12a3.75 3.75 0 0 1-3.75 3.75h-12A3.75 3.75 0 0 1 2.5 18zm1.5.75V18a2.25 2.25 0 0 0 2.25 2.25h12A2.25 2.25 0 0 0 20.5 18V6a2.25 2.25 0 0 0-2.25-2.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.75 9.75a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-1.5 0V10.5a2.25 2.25 0 0 1 2.25-2.25h4.5a.75.75 0 0 1 0 1.5zM9.25 2.25A.75.75 0 0 1 10 3v10.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquarelinkOutline;
