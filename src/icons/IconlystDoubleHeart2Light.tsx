import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart2Light = ({
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
      d="M13.905 14.383c.631-1.968-.102-4.227-2.165-4.892a3.5 3.5 0 0 0-1.652-.117c-.553.094-1.075.475-1.524.812-.45-.334-.972-.713-1.523-.807a3.56 3.56 0 0 0-1.652.112c-2.062.67-2.802 2.924-2.17 4.892.974 3.123 5.345 5.165 5.345 5.165s4.307-2.005 5.34-5.165"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.658 9.34c-.05-2.042.988-4.001 3.078-4.675a4.56 4.56 0 0 1 2.132-.14c.708.114 1.383.609 1.959 1.037.585-.437 1.251-.923 1.967-1.046a4.6 4.6 0 0 1 2.132.149c2.66.855 3.606 3.769 2.79 6.312-1.333 4.075-6.89 6.66-6.89 6.66s-.768-.398-1.467-.81"
    />
  </Svg>
);
export default IconlystDoubleHeart2Light;
