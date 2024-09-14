import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowRightUpLight = ({
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
      fill={props.color}
      d="m19.492 5.503-.748-.044zm-.542 9.214.749.044zm-.803.305-.53.53zm-2.587-2.588.53-.53a.75.75 0 0 0-1.06 0zM11.594 16.4l.53.53zm-1.332 0 .53-.53zM7.6 13.737l-.53.53zm0-1.331.53.53zm3.966-3.966.53.53a.75.75 0 0 0 0-1.06zM8.978 5.852l.53-.53zm.305-.802.044.748zm9.214-.542-.044-.75zm.247.95-.542 9.215 1.497.088.542-9.214zm-.066 9.034-2.588-2.588-1.06 1.06 2.587 2.588zm-3.648-2.588-3.966 3.966 1.06 1.06 3.966-3.965zm-4.237 3.966L8.13 13.207l-1.06 1.06 2.662 2.664zM8.13 12.936l3.966-3.966-1.061-1.06-3.966 3.966zm3.966-5.026L9.508 5.322l-1.06 1.06 2.587 2.588zM9.327 5.798l9.214-.542-.088-1.497L9.24 4.3zm.181-.476a.28.28 0 0 1-.18.476l-.089-1.497c-1.051.062-1.536 1.337-.791 2.082zM8.13 13.207a.19.19 0 0 1 0-.27l-1.06-1.061c-.661.66-.661 1.731 0 2.392zm2.934 2.663a.19.19 0 0 1-.271 0l-1.06 1.06c.66.661 1.73.661 2.391 0zm7.138-1.197a.28.28 0 0 1 .476-.181l-1.06 1.06c.744.745 2.02.26 2.081-.791zm2.039-9.126a1.69 1.69 0 0 0-1.788-1.788l.088 1.497a.19.19 0 0 1 .203.203z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m8.475 19.494-3.97-3.97"
    />
  </Svg>
);
export default IconlystArrowsBigArrowRightUpLight;
