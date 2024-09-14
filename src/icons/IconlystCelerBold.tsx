import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelerBold = ({
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
      d="M17.401 15.375a.5.5 0 0 0-.707 0 4.74 4.74 0 0 1-3.376 1.399 4.75 4.75 0 0 1-3.376-1.399 4.78 4.78 0 0 1 0-6.752 4.78 4.78 0 0 1 6.752 0 .5.5 0 0 0 .707 0l2.635-2.63a.5.5 0 0 0 0-.707A9.43 9.43 0 0 0 13.317 2.5 9.43 9.43 0 0 0 6.6 5.286a9.43 9.43 0 0 0-2.782 6.713c0 2.537.988 4.922 2.782 6.714a9.43 9.43 0 0 0 6.717 2.787h.001c2.537 0 4.923-.99 6.718-2.787a.5.5 0 0 0 0-.708z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCelerBold;
