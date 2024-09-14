import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarMagicTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.246 5.193 3.741 1.391c.37.137.782.084 1.105-.142l3.314-2.306a1.184 1.184 0 0 1 1.868 1.026l-.219 4.001c-.023.392.151.77.464 1.005l3.175 2.4a1.201 1.201 0 0 1-.424 2.107l-3.873 1.082a1.22 1.22 0 0 0-.819.764l-1.349 3.791a1.201 1.201 0 0 1-2.13.277l-2.174-3.334a1.18 1.18 0 0 0-.97-.533l-4.009-.056a1.183 1.183 0 0 1-.895-1.934l2.53-3.148c.248-.306.33-.714.22-1.092L5.673 6.661a1.212 1.212 0 0 1 1.573-1.468"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.684 19.198 2.535 2.718"
    />
  </Svg>
);
export default IconlystStarMagicTwoTone;
