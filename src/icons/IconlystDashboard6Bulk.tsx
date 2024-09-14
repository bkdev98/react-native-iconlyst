import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard6Bulk = ({
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
      fill={props.color}
      d="M8.762 21.5h8.435c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526H8.762C5.603 2.5 3.48 4.721 3.48 8.026v7.948c0 3.305 2.123 5.526 5.282 5.526"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.584 7.674h8.794a.75.75 0 0 0 0-1.5H8.584a.75.75 0 0 0 0 1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.845 17.827h6.27c1.488 0 2.528-1.077 2.528-2.62v-2.958c0-1.542-1.04-2.62-2.528-2.62h-6.27c-1.489 0-2.529 1.078-2.529 2.62v2.958c0 1.543 1.04 2.62 2.53 2.62m-1.029-5.578c0-.337.1-1.12 1.03-1.12h6.27c.926 0 1.027.783 1.027 1.12v2.958c0 .337-.1 1.12-1.028 1.12h-6.27c-.929 0-1.029-.783-1.029-1.12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard6Bulk;
