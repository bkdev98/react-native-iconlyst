import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLikePostCardBulk = ({
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
      d="M16.05 2.5H8.904C6.486 2.5 4.86 4.196 4.86 6.721v10.558c0 2.525 1.625 4.221 4.043 4.221h7.145c2.419 0 4.044-1.696 4.044-4.221V6.721c0-2.525-1.625-4.221-4.043-4.221"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.557 15.29h5.838a.75.75 0 0 0 0-1.5H9.557a.75.75 0 0 0 0 1.5m1.156 2.729h3.525a.75.75 0 1 0 0-1.5h-3.525a.75.75 0 0 0 0 1.5M15.705 7.319a2.11 2.11 0 0 0-1.328-1.24 2.2 2.2 0 0 0-1.046-.075c-.321.053-.612.246-.856.424-.236-.17-.534-.366-.857-.42a2.26 2.26 0 0 0-1.045.07c-1.341.434-1.754 1.901-1.38 3.068.585 1.873 3.099 3.064 3.206 3.114a.18.18 0 0 0 .152 0c.105-.049 2.582-1.22 3.2-3.112a2.7 2.7 0 0 0-.046-1.829"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLikePostCardBulk;
