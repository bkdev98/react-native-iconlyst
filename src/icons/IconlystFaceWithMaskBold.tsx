import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceWithMaskBold = ({
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
      fillRule="evenodd"
      d="M5.775 13.2a.2.2 0 0 1-.158-.024L2.64 11.327a.2.2 0 0 1-.093-.185C2.984 6.305 7.052 2.5 12 2.5c4.949 0 9.018 3.807 9.453 8.645a.2.2 0 0 1-.093.185l-2.942 1.84a.2.2 0 0 1-.162.022c-1.236-.362-2.64-.89-4.198-1.583a4.8 4.8 0 0 0-3.878.001 30 30 0 0 1-4.405 1.59m10.642-4.747c-.835-1.085-2.534-1.083-3.364.001a.75.75 0 0 0 1.189.914c.077-.1.242-.267.493-.267.25 0 .417.168.495.268a.75.75 0 0 0 1.187-.916m-5.47 0c-.833-1.083-2.53-1.084-3.363 0a.75.75 0 0 0 1.187.916c.078-.1.245-.268.495-.268s.418.168.495.268a.75.75 0 0 0 1.052.136.75.75 0 0 0 .135-1.052M4.891 14.578a.2.2 0 0 0-.093-.145L2.91 13.26a.193.193 0 0 0-.295.191 9.47 9.47 0 0 0 2.432 5.006c.129.138.35.029.325-.158z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.89 20.021.712-5.285a.2.2 0 0 0-.14-.219 37 37 0 0 1-4.012-1.537 3.3 3.3 0 0 0-2.66.001 32 32 0 0 1-4.22 1.55.2.2 0 0 0-.143.219l.682 5.277c.007.06.024.117.077.148a9.4 9.4 0 0 0 4.813 1.325 9.4 9.4 0 0 0 4.809-1.321c.055-.033.074-.094.082-.158M19.229 14.431a.2.2 0 0 0-.092.143l-.5 3.714c-.026.187.195.297.324.159a9.46 9.46 0 0 0 2.423-4.988.193.193 0 0 0-.296-.19z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceWithMaskBold;
