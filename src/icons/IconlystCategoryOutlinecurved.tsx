import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoryOutlinecurved = ({
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
      d="M17.577 3.75a2.923 2.923 0 1 0 0 5.847 2.923 2.923 0 0 0 0-5.847m-4.423 2.924a4.423 4.423 0 1 1 8.847 0 4.423 4.423 0 0 1-8.847 0M6.923 3.75a2.924 2.924 0 1 0 .002 5.848 2.924 2.924 0 0 0-.002-5.848M2.5 6.674a4.424 4.424 0 1 1 8.848 0 4.424 4.424 0 0 1-8.848 0M17.577 14.338a2.924 2.924 0 1 0 0 5.847 2.924 2.924 0 0 0 0-5.847m-4.423 2.924a4.424 4.424 0 1 1 8.847 0 4.424 4.424 0 0 1-8.847 0M6.923 14.338a2.924 2.924 0 1 0 .002 5.848 2.924 2.924 0 0 0-.002-5.848M2.5 17.262a4.424 4.424 0 1 1 8.848 0 4.424 4.424 0 0 1-8.848 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCategoryOutlinecurved;
