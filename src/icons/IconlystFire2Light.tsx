import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire2Light = ({
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
      d="M12.728 21a6.45 6.45 0 0 0 6.343-6.614 10.65 10.65 0 0 0-2.316-6.789A17.26 17.26 0 0 0 10.242 3s.512 1.142.599 1.349a5.8 5.8 0 0 1-.374 4.919c-.627 1.02-2.159 2.946-2.188 4.265-.427-.216-1.263-3.637-1.37-4.885a8.13 8.13 0 0 0-1.978 5.643 7.07 7.07 0 0 0 2.759 5.255 7.6 7.6 0 0 0 4.197 1.411q.42.049.84.042"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.623 18.832s-1.426-4.623 4.452-6.852c-1.732 2.954-.906 4.55.082 5.502.438.419 1.331 1.162 1.805 1.711"
    />
  </Svg>
);
export default IconlystFire2Light;
