import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletCheckBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 9.345h-3.808a2.532 2.532 0 1 0 0 5.062h1.361M17.247 11.82h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.314 3.69a4.936 4.936 0 0 1 4.936 4.935v6.75a4.936 4.936 0 0 1-4.936 4.936h-4.367M3.25 11.611V8.623a4.936 4.936 0 0 1 4.936-4.935h4.41M3.282 17.57l2.22 2.224 4.575-4.577"
    />
  </Svg>
);
export default IconlystWalletCheckBroken;
