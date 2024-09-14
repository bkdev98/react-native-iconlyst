import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletCloseBroken = ({
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
      d="M18.65 14.405h-1.208a2.532 2.532 0 0 1 0-5.062h3.807M17.247 11.817h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.314 3.688a4.936 4.936 0 0 1 4.936 4.935v6.75a4.936 4.936 0 0 1-4.936 4.936h-3.426M3.25 10.67V8.624a4.936 4.936 0 0 1 4.936-4.935h5.28M7.64 15.922 3.25 20.31M7.64 20.311l-4.39-4.39"
    />
  </Svg>
);
export default IconlystWalletCloseBroken;
