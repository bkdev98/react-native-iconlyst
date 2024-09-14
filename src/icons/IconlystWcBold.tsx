import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWcBold = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
      d="M15.231 13.027a1.447 1.447 0 0 0 2.034-.003.75.75 0 0 1 1.058 1.065 2.94 2.94 0 0 1-2.076.852 2.94 2.94 0 0 1-2.077-.852 2.956 2.956 0 0 1-.002-4.162 2.95 2.95 0 0 1 4.155-.002.75.75 0 1 1-1.058 1.063 1.447 1.447 0 0 0-2.037 0 1.45 1.45 0 0 0 .003 2.039m-2.396-2.853-1.386 4.14a.75.75 0 0 1-.696.512c-.348-.003-.604-.188-.716-.484l-.872-2.294-.872 2.294a.75.75 0 0 1-.701.484h-.015a.75.75 0 0 1-.697-.512l-1.384-4.14a.749.749 0 1 1 1.422-.476l.719 2.148.827-2.176a.751.751 0 0 1 1.402 0l.827 2.176.719-2.148a.75.75 0 0 1 1.423.476m5.098-6.498H6.067c-2.732 0-4.567 1.92-4.567 4.78v7.1c0 2.853 1.835 4.77 4.567 4.77h11.865c2.733 0 4.568-1.917 4.568-4.77v-7.1c0-2.86-1.835-4.78-4.567-4.78"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWcBold;
