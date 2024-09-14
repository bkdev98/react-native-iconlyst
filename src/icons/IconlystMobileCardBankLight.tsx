import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMobileCardBankLight = ({
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
      d="M15.572 14.911v2.47A3.62 3.62 0 0 1 11.953 21H7.338a3.617 3.617 0 0 1-3.617-3.617L3.72 6.618A3.62 3.62 0 0 1 7.337 3h4.616a3.62 3.62 0 0 1 3.617 3.618v1.147"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.38 7.766h-4.994c-1.168 0-1.9.826-1.9 1.995v3.156c0 1.17.728 1.995 1.9 1.995h4.995c1.17 0 1.9-.826 1.9-1.996V9.762c0-1.17-.73-1.995-1.9-1.995"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.486 10.299h8.794M9.583 17.398v.046m.184-.036a.185.185 0 1 1-.37 0 .185.185 0 0 1 .37 0"
    />
  </Svg>
);
export default IconlystMobileCardBankLight;
