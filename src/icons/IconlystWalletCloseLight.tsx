import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletCloseLight = ({
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
      d="M21 14.406h-3.808a2.532 2.532 0 0 1 0-5.062h3.807M16.997 11.819h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 10.67V8.624a4.936 4.936 0 0 1 4.936-4.935h8.128A4.936 4.936 0 0 1 21 8.622v6.75a4.936 4.936 0 0 1-4.936 4.936h-3.426M7.39 15.922 3 20.31M7.39 20.311 3 15.921"
    />
  </Svg>
);
export default IconlystWalletCloseLight;