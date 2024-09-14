import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStrawberrysLight = ({
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
      d="M18.173 19.194C19.927 17.439 21 15.17 21 12.66c0-1.84-1.54-3.39-3.39-3.39h-4.258c-1.851 0-3.392 1.55-3.39 3.39 0 2.51 1.073 4.777 2.827 6.531 1.465 1.468 3.917 1.47 5.384.003"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.913 14.627.092.341M18.392 12.6l.091.341M15.435 12.6l.091.341M12.478 12.6l.091.341M13.957 14.627l.09.341M15.435 16.582l.091.34M15.48 4.28c-1.295.954-1.32 2.114-1.171 2.575-.201-.337-1.062-.962-2.898-.767 0 1.141.945 3.182 4.07 3.182 3.029 0 4.069-2.04 4.07-3.182-1.837-.195-2.698.43-2.898.767.149-.46.124-1.621-1.172-2.575"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.549 6.99a3.3 3.3 0 0 0-1.59.443l-3.687 2.13c-1.604.924-2.162 3.038-1.241 4.63 1.254 2.173 3.318 3.6 5.714 4.243.431.116.868.15 1.293.112M9.363 10.939l.25.249M7.257 12.6l.25.25M9.317 14.673l.25.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.62 4.177c-.645 1.473-.087 2.491.273 2.816-.342-.192-1.4-.303-2.893.784.571.988 2.41 2.283 5.115.72 2.624-1.514 2.504-3.8 1.934-4.79-1.688.75-2.12 1.722-2.126 2.114-.101-.474-.703-1.466-2.302-1.644"
    />
  </Svg>
);
export default IconlystStrawberrysLight;
