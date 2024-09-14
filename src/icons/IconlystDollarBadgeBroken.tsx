import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBadgeBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.41 13.113.008 6.127a1.203 1.203 0 0 1-1.723 1.087l-.754-.361a1.78 1.78 0 0 0-1.444-.043l-2.146.876a3.58 3.58 0 0 1-2.7-.002l-2.143-.874a1.78 1.78 0 0 0-1.444.042l-.76.363a1.203 1.203 0 0 1-1.722-1.085l.01-12.256c0-2.423 1.348-3.924 3.766-3.924h7.3c2.425 0 3.743 1.5 3.743 3.924l.004 3.063"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.632 9.123h-2.357a1.27 1.27 0 0 0 0 2.539h1.45a1.27 1.27 0 1 1 0 2.538h-2.357M12 14.2v1.065M12 8.05v1.076"
    />
  </Svg>
);
export default IconlystDollarBadgeBroken;
