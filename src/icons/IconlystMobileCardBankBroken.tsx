import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMobileCardBankBroken = ({
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
      d="M15.82 7.765V6.618A3.62 3.62 0 0 0 12.203 3H7.587A3.62 3.62 0 0 0 3.97 6.618v2.874M15.822 14.911v2.47A3.62 3.62 0 0 1 12.203 21H7.588a3.617 3.617 0 0 1-3.617-3.618v-4.66"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.63 7.766h-4.995c-1.167 0-1.899.826-1.899 1.995v3.156c0 1.17.728 1.995 1.9 1.995h4.995c1.17 0 1.899-.826 1.899-1.996V9.762c0-1.17-.729-1.995-1.9-1.995"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.736 10.3h6.235M9.832 17.4v.046m.185-.036a.185.185 0 1 1-.37 0 .185.185 0 0 1 .37 0"
    />
  </Svg>
);
export default IconlystMobileCardBankBroken;
