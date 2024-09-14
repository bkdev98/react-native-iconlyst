import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp3Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M6.59 11.859c.126.234.366.38.627.38h4.066v8.027c0 .405.321.734.717.734a.726.726 0 0 0 .717-.734v-8.028h4.066a.71.71 0 0 0 .627-.38.75.75 0 0 0-.02-.746l-4.783-7.77A.71.71 0 0 0 12 3a.71.71 0 0 0-.607.343l-4.783 7.77a.76.76 0 0 0-.02.746"
    />
  </Svg>
);
export default IconlystArrowUp3Bold;
