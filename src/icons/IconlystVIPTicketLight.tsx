import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVIPTicketLight = ({
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
      d="M10.393 9.82 8.8 14.181l-1.592-4.36M12.67 9.82v4.361M15.24 12.468V9.82h1.532a1.324 1.324 0 0 1 0 2.648zm0 0v1.619"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.961 11.998a1.88 1.88 0 0 0-1.019-1.681c-.412-.216-.619-.324-.674-.369-.192-.154-.206-.178-.254-.42C3 9.458 3 9.342 3 9.109c0-1.084 0-1.627.128-2.07a3.24 3.24 0 0 1 2.208-2.207c.443-.129.985-.129 2.07-.129h9.187c1.082 0 1.624 0 2.065.128a3.24 3.24 0 0 1 2.212 2.213c.127.442.127.984.126 2.066-.008 1.945.004 3.859.004 5.788 0 1.079 0 1.619-.127 2.06a3.24 3.24 0 0 1-2.214 2.213c-.44.127-.98.127-2.06.127H7.406c-1.084 0-1.626 0-2.069-.128a3.24 3.24 0 0 1-2.208-2.21C3 16.519 3 15.977 3.001 14.893c0-.233 0-.349.013-.418.048-.242.062-.265.254-.42.055-.045.261-.153.674-.371a1.89 1.89 0 0 0 1.019-1.685M12.67 6.974v-2.27M12.67 19.299v-2.272"
    />
  </Svg>
);
export default IconlystVIPTicketLight;
