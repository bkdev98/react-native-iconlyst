import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingAddBulk = ({
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
      fillRule="evenodd"
      d="M14.342 3.445v-.067a.31.31 0 0 0-.304-.323H8.002c-3.2 0-5.3 2.2-5.3 5.5v7.9c0 3.2 2.2 5.5 5.3 5.5h8.4c3.2 0 5.3-2.2 5.3-5.5v-5.82a.297.297 0 0 0-.32-.295 2 2 0 0 1-.14.005c-3.81 0-6.9-3.09-6.9-6.9"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.822 15.313c-.89 1.15-2.18 1.81-3.55 1.81s-2.67-.66-3.55-1.81c-.26-.33-.2-.8.13-1.05.33-.26.8-.19 1.05.13.61.78 1.47 1.23 2.37 1.23s1.76-.45 2.36-1.23c.25-.32.72-.39 1.05-.13.33.25.39.72.14 1.05M21.498 4.35h-1.3v-1.5c0-.5-.3-.8-.8-.8s-.8.4-.8.8v1.5h-1.5c-.5 0-.8.3-.8.8s.4.8.8.8h1.5v1.4c0 .5.4.8.8.8.5 0 .8-.3.8-.8v-1.4h1.3c.5 0 .8-.3.8-.8s-.4-.8-.8-.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmilingAddBulk;
