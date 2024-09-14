import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallPhoneOutline = ({
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
      d="M17.283 21.75c-2.372 0-5.46-1.885-9.177-5.6-3.733-3.733-5.62-6.831-5.605-9.207a3.57 3.57 0 0 1 1.15-2.692c.017-.021.07-.072.089-.091 1.365-1.368 2.265-1.91 3.21-1.91 1.076.014 1.834.812 2.795 1.821.235.248.49.517.776.8a2.9 2.9 0 0 1 .56 3.595c-.411 1.053-.766 1.961.989 3.716 1.756 1.755 2.663 1.4 3.715.985a2.9 2.9 0 0 1 3.594.56q.422.418.79.766c1.016.965 1.817 1.728 1.83 2.8.012.916-.54 1.847-1.905 3.212l-.093.089a3.57 3.57 0 0 1-2.692 1.15zM4.803 5.216s-.045.049-.106.109a2.1 2.1 0 0 0-.7 1.627c-.008 1.348.882 3.853 5.166 8.136 4.262 4.261 6.764 5.162 8.115 5.162h.018a2.1 2.1 0 0 0 1.629-.7q.078-.082.166-.156c.932-.938 1.41-1.636 1.406-2.078s-.575-.987-1.363-1.737c-.254-.241-.53-.5-.82-.792-.72-.721-1.116-.564-1.984-.224-1.215.477-2.875 1.126-5.323-1.321-2.45-2.448-1.8-4.11-1.325-5.323.34-.87.5-1.267-.225-1.988a36 36 0 0 1-.8-.828c-.745-.783-1.283-1.35-1.726-1.355s-1.14.476-2.135 1.47z"
    />
  </Svg>
);
export default IconlystCallPhoneOutline;
