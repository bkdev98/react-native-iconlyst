import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMenu2Outline = ({
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
      d="M13.906 5.362a4.892 4.892 0 1 0 0 9.785 4.892 4.892 0 0 0 0-9.785m4.888 9.014a6.392 6.392 0 1 0-11.28-4.121 6.392 6.392 0 0 0 10.184 5.147l3.022 3.018a.75.75 0 0 0 1.06-1.062zM2.5 9.213a.75.75 0 0 1 .75-.75h1.59a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m0 5.037a.75.75 0 0 1 .75-.75h2.598a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m0 5.138a.75.75 0 0 1 .75-.75h8.084a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchMenu2Outline;
