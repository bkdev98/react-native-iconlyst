import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBagLike2Broken = ({
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
      d="M12.476 20.57H7.27c-2.339 0-3.794-1.65-3.794-3.988v-6.306c0-2.338 1.462-3.989 3.794-3.989h10.41c2.339 0 3.796 1.651 3.796 3.99v6.305c0 2.337-1.457 3.988-3.797 3.988h-1.821M15.837 6.272v-.623c0-1.226-.994-2.22-2.22-2.22h-2.28c-1.226 0-2.22.994-2.22 2.22v.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.52 16.682s2.481-1.156 3.078-2.977c.363-1.135-.06-2.436-1.248-2.82a2 2 0 0 0-.952-.067c-.319.054-.62.274-.878.468-.26-.192-.56-.411-.879-.465a2.04 2.04 0 0 0-.951.065c-1.19.386-1.615 1.684-1.251 2.82.183.588.576 1.11 1.022 1.546M17.502 17.901a1.89 1.89 0 0 1 1.349-1.409M7.452 17.901a1.89 1.89 0 0 0-1.348-1.409M7.452 8.72a1.89 1.89 0 0 1-1.348 1.41M17.502 8.72c.141.671.685 1.24 1.349 1.41"
    />
  </Svg>
);
export default IconlystHeartBagLike2Broken;
