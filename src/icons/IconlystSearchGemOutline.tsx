import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGemOutline = ({
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
      d="M11.503 2.908a.75.75 0 0 1-.652.836 7.698 7.698 0 1 0 6.167 13.308l.01-.01.053-.049a7.68 7.68 0 0 0 2.362-4.605.75.75 0 0 1 1.487.194 9.17 9.17 0 0 1-2.312 4.986l2.908 2.901a.75.75 0 1 1-1.059 1.062l-2.945-2.938a9.198 9.198 0 1 1-6.855-16.338.75.75 0 0 1 .836.653m3.83-.151a.75.75 0 0 1 .654-.383h4.12a.75.75 0 0 1 .655.383l1.03 1.836a.75.75 0 0 1-.097.868l-3.09 3.434a.75.75 0 0 1-1.115 0L14.4 5.461a.75.75 0 0 1-.097-.868zm1.093 1.117-.551.984 2.173 2.414 2.173-2.414-.553-.984z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchGemOutline;
