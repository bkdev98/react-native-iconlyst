import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoffeeBeansTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M3.394 4.695c.52-.903 1.49-1.467 2.727-1.587 1.193-.115 2.503.198 3.688.882 1.186.685 2.112 1.663 2.609 2.754.514 1.132.512 2.251-.01 3.155-.413.715-1.107 1.217-1.993 1.455q-.361.095-.734.13c-1.194.116-2.504-.197-3.69-.881C4.807 9.918 3.88 8.94 3.384 7.849c-.514-1.131-.51-2.253.01-3.154" />
      <Path d="M3.615 4.51a5.5 5.5 0 0 1 1.735.42c1.133.488 2.016 1.357 2.621 2.582 1.108 2.241 3.03 2.593 4.214 2.572" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 11.645c-.827-.829-2.043-1.159-3.421-.93-1.329.223-2.66.944-3.748 2.031s-1.809 2.42-2.03 3.748c-.23 1.378.098 2.593.928 3.421.657.657 1.556 1 2.586 1q.421-.001.836-.071c1.329-.222 2.66-.943 3.747-2.03 1.088-1.088 1.81-2.42 2.03-3.748.23-1.378-.1-2.594-.928-3.421"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.706 11.508a6.2 6.2 0 0 0-1.761.96c-1.089.86-1.794 2.06-2.095 3.567-.55 2.755-2.534 3.696-3.826 4.017"
    />
  </Svg>
);
export default IconlystCoffeeBeansTwoTone;
