import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeetLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.224 18.857c-3.477 3.477-8.71.233-11.092 1.008.781-2.194-2.468-7.615 1.008-11.092 2.228-2.227 6.291-1.776 9.076 1.009 2.784 2.784 3.236 6.847 1.008 9.075"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.933 12.421c.115-1.386 1.496-2.159 2.55-1.876M14.22 9.777c1.71.234 4.413 2.41 5.776 1.048 1.106-1.106.266-3.043-1.26-3.042a1.8 1.8 0 0 0 0-2.521 1.783 1.783 0 0 0-2.522 0c.002-1.566-1.963-2.34-3.042-1.26-1.362 1.362 1.006 4.038 1.044 5.78"
    />
  </Svg>
);
export default IconlystBeetLight;
