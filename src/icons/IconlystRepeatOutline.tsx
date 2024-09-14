import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeatOutline = ({
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
      d="M2.25 10.69a6.364 6.364 0 0 1 6.364-6.366h6.771a6.365 6.365 0 0 1 4.88 10.45.75.75 0 0 1-1.149-.963 4.865 4.865 0 0 0-3.731-7.986H8.614a4.864 4.864 0 0 0 0 9.728h6.771a.75.75 0 0 1 0 1.5H8.614A6.363 6.363 0 0 1 2.25 10.69"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.235 13.15a.75.75 0 0 1 1.061 0l2.623 2.622a.75.75 0 0 1 0 1.06l-2.623 2.625a.75.75 0 1 1-1.06-1.06l2.092-2.094-2.093-2.093a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRepeatOutline;
