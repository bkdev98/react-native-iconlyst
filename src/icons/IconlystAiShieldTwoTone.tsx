import * as React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiShieldTwoTone = ({
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
      d="M12.5 21s7.324-2.217 7.324-8.33c0-6.114.266-6.588-.322-7.18C18.912 4.896 13.46 3 12.5 3S6.087 4.901 5.498 5.49c-.588.588-.321 1.065-.321 7.18C5.177 18.783 12.5 21 12.5 21"
      clipRule="evenodd"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Circle
        cx={12.556}
        cy={17.961}
        r={0.75}
        transform="rotate(-90 12.556 17.96)"
      />
      <Path d="M12.556 17.21v-2.157h6.757" />
      <Circle
        cx={9.556}
        cy={11.834}
        r={0.75}
        transform="rotate(90 9.556 11.834)"
      />
      <Path d="M9.556 12.584v1.703H5.43" />
      <Circle
        cx={0.75}
        cy={0.75}
        r={0.75}
        transform="matrix(1 0 0 -1 13.306 11.498)"
      />
      <Path d="M14.806 10.748h2.158V4.407" />
      <Circle
        cx={11.056}
        cy={7.678}
        r={0.75}
        transform="rotate(180 11.056 7.678)"
      />
      <Path d="M10.306 7.678H8.148V4.354" />
    </G>
  </Svg>
);
export default IconlystAiShieldTwoTone;
