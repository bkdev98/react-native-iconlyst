import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftSquareBold = ({
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
      d="M16.09 2C19.62 2 22 4.271 22 7.66v8.67c0 3.39-2.38 5.67-5.91 5.67H7.92C4.38 22 2 19.72 2 16.33V7.66C2 4.271 4.38 2 7.92 2Zm-3.88 5.72a.754.754 0 0 0-1.06 0l-3.77 3.75c-.28.28-.28.78 0 1.06l3.77 3.75c.29.29.77.29 1.06 0 .29-.3.29-.77 0-1.07l-2.48-2.46h6.35c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75H9.73l2.48-2.47c.14-.14.22-.34.22-.53 0-.189-.08-.38-.22-.53"
    />
  </Svg>
);
export default IconlystArrowLeftSquareBold;
