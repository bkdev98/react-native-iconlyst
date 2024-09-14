import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitchLight = ({
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
      d="M5.64 3.5c-1.086 0-1.966.88-1.966 1.966v9.599c0 1.086.88 1.966 1.966 1.966h.174c.543 0 .983.44.983.983v1.994c0 .437.53.657.84.347l2.748-2.748a1.97 1.97 0 0 1 1.39-.576h4.92c.52 0 1.02-.207 1.39-.576l1.666-1.666c.369-.369.576-.869.576-1.39V5.466c0-1.086-.88-1.966-1.966-1.966z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.164 8.191v3.636M12.001 8.19v3.636"
    />
  </Svg>
);
export default IconlystTwitchLight;
