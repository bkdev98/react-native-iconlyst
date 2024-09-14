import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBusTwoTone = ({
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
      d="M8.851 17.847a2.3 2.3 0 0 1-.07.53 2 2 0 0 1-1.867 1.407 1.93 1.93 0 0 1-1.857-1.407 1.9 1.9 0 0 1-.08-.53 1.938 1.938 0 0 1 3.874 0M19.576 17.918a2.2 2.2 0 0 1-.07.511 1.87 1.87 0 0 1-.696.978 2 2 0 0 1-1.166.377c-.42 0-.83-.132-1.166-.377a1.87 1.87 0 0 1-.696-.978 1.8 1.8 0 0 1-.07-.51c-.02-.257.017-.515.105-.757a1.9 1.9 0 0 1 .41-.652c.18-.188.4-.338.644-.44a2 2 0 0 1 2.191.44c.182.188.321.41.41.652s.123.5.104.756M15.711 17.847h-6.86"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.716 17.907h-.31A2.157 2.157 0 0 1 2.25 15.75V8.142a2.157 2.157 0 0 1 2.157-2.156h12.98a1.88 1.88 0 0 1 1.538.808l2.995 4.293c.218.321.333.702.33 1.09l-.05 3.573a2.15 2.15 0 0 1-2.147 2.157h-.33"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M2.25 11.158h12.344M6.325 5.986v5.172M10.519 5.986v5.172M22.22 13.625h-6.626a1 1 0 0 1-1-1v-6.58" />
    </G>
  </Svg>
);
export default IconlystBusTwoTone;
