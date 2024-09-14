import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeansTwoTone = ({
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
      d="M19.976 9.165c1.682 1.42.92 4.009.328 5.126-1.572 2.748-4.77 6.241-8.318 5.944-1.678-.141-2.813-1.475-2.728-3.126.064-1.262 1.065-2.403 2.04-2.818 1.95-.831 2.567-1.301 3.635-3.33.989-1.88 3.085-3.447 5.043-1.796"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.125 10.856c.44.427.989 1.194.94 1.704-.08.827-1.101 1.974-1.857 2.2-.584.174-1.591-.248-2.104-.673"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M16.926 8.774a3.05 3.05 0 0 0-.506-1.683c-.687-1.06-2.124-1.548-3.177-1.42-2.104.256-2.873.157-4.813-1.067-1.795-1.133-4.395-1.442-5.264.967-.747 2.07 1.207 3.931 2.278 4.603 2.291 1.335 5.831 2.552 8.639 1.719" />
      <Path d="M8.212 4.61c-.167.59-.176 1.544.121 1.962.482.676 1.94 1.158 2.708.976.593-.14 1.171-1.026 1.403-1.651" />
    </G>
  </Svg>
);
export default IconlystBeansTwoTone;
