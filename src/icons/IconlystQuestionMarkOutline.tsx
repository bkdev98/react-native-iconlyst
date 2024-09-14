import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionMarkOutline = ({
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
      d="M11.842 18.179a.75.75 0 0 1 .75.75v.07a.75.75 0 0 1-1.5 0v-.07a.75.75 0 0 1 .75-.75M7.512 8.988A4.726 4.726 0 0 1 12.25 4.25a4.734 4.734 0 0 1 4.738 4.738c0 1.827-1.036 3.125-2.44 3.902l-.252.142c-.447.25-.844.473-1.168.764-.348.313-.543.65-.537 1.122a.75.75 0 0 1-1.5.019c-.013-1.016.459-1.738 1.034-2.256.46-.414 1.03-.731 1.471-.977l.215-.12.008-.005c1.046-.578 1.67-1.431 1.67-2.591a3.234 3.234 0 0 0-3.24-3.238 3.226 3.226 0 0 0-3.238 3.238.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuestionMarkOutline;
