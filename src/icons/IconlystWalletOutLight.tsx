import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletOutLight = ({
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
      d="M20.998 14.406h-3.807a2.53 2.53 0 0 1 0-5.062h3.807M16.995 11.819h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 11.611V8.623a4.936 4.936 0 0 1 4.936-4.935h8.128A4.936 4.936 0 0 1 21 8.622v6.75a4.936 4.936 0 0 1-4.936 4.936h-3.426M3 20.307l4.666-4.666M6.757 20.304 3 20.31l.008-3.756"
    />
  </Svg>
);
export default IconlystWalletOutLight;
