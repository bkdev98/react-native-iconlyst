import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVanLight = ({
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
      d="M8.851 16.963a2.3 2.3 0 0 1-.07.53 2 2 0 0 1-1.867 1.406 1.93 1.93 0 0 1-1.857-1.407 1.9 1.9 0 0 1-.08-.53 1.938 1.938 0 0 1 3.874 0M19.576 17.033a2.2 2.2 0 0 1-.07.511 1.87 1.87 0 0 1-.696.979 2 2 0 0 1-1.166.376c-.42 0-.83-.132-1.166-.376a1.87 1.87 0 0 1-.696-.979 1.8 1.8 0 0 1-.07-.51c-.02-.257.017-.514.105-.757a1.9 1.9 0 0 1 .41-.652c.18-.188.4-.338.644-.44a2 2 0 0 1 1.546 0c.244.102.464.252.645.44.182.188.321.41.41.652s.123.5.104.756M15.711 16.963h-6.86"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.716 17.022h-.31a2.157 2.157 0 0 1-2.156-2.157V7.258A2.157 2.157 0 0 1 4.407 5.1h12.98a1.88 1.88 0 0 1 1.538.808l2.995 4.294c.218.32.333.7.33 1.089l-.05 3.573a2.15 2.15 0 0 1-2.147 2.157h-.33M13.594 11.74h8.627M5.475 11.74h5.192M13.594 5.16v11.802"
    />
  </Svg>
);
export default IconlystVanLight;
