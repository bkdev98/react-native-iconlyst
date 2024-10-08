import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDurianOutline = ({
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
      d="M9.056 4.743a.75.75 0 0 1 .701-.322L12 4.667l2.242-.246a.75.75 0 0 1 .702.322l.875 1.282 1.832.578a.75.75 0 0 1 .524.716v1.8l1.416 1.385a.75.75 0 0 1 .186.777l-.58 1.708.59 1.998a.75.75 0 0 1-.19.742l-1.04 1.04-.394 2.107a.75.75 0 0 1-.552.589l-1.376.35-.724 1.51a.75.75 0 0 1-.852.404l-2.71-.655-2.601.653a.75.75 0 0 1-.86-.402l-.724-1.51-1.375-.35a.75.75 0 0 1-.552-.589l-.395-2.107-1.04-1.04a.75.75 0 0 1-.189-.742l.59-1.998-.58-1.708a.75.75 0 0 1 .185-.777l1.416-1.385v-1.8a.75.75 0 0 1 .525-.716l1.832-.578zm.985 1.218-.768 1.124a.75.75 0 0 1-.393.292l-1.556.491v1.567a.75.75 0 0 1-.225.536l-1.304 1.275.505 1.486a.75.75 0 0 1 .009.454l-.53 1.798.888.889a.75.75 0 0 1 .207.392l.35 1.865 1.25.32a.75.75 0 0 1 .491.401l.61 1.272 2.187-.55a.75.75 0 0 1 .36 0l2.3.555.613-1.277a.75.75 0 0 1 .49-.402l1.251-.32.35-1.864a.75.75 0 0 1 .207-.392l.889-.89-.53-1.797a.75.75 0 0 1 .008-.454l.505-1.486-1.304-1.275a.75.75 0 0 1-.226-.536V7.868l-1.555-.49a.75.75 0 0 1-.393-.293l-.768-1.124-1.877.206a.8.8 0 0 1-.164 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.01 2.451a.75.75 0 0 1 1.06.038c.485.521.898 1.501.71 2.974a.75.75 0 0 1-1.488-.19c.141-1.109-.188-1.62-.32-1.762a.75.75 0 0 1 .038-1.06M13.203 9.574a.75.75 0 0 1 1.056-.103l1.056.87a.75.75 0 0 1 .203.899l-.349.741.637.846a.75.75 0 0 1-.063.977l-.579.59.38 1.043a.75.75 0 0 1-.28.873l-1.056.73a.75.75 0 1 1-.852-1.234l.58-.4-.343-.945a.75.75 0 0 1 .17-.781l.457-.466-.521-.691a.75.75 0 0 1-.08-.77l.293-.624-.607-.5a.75.75 0 0 1-.102-1.055M10.797 9.574A.75.75 0 0 0 9.74 9.47l-1.057.87a.75.75 0 0 0-.202.899l.349.741-.638.846a.75.75 0 0 0 .064.977l.579.59-.38 1.043a.75.75 0 0 0 .279.873l1.057.73a.75.75 0 1 0 .852-1.234l-.58-.4.343-.945a.75.75 0 0 0-.17-.781l-.457-.466.52-.691a.75.75 0 0 0 .08-.77l-.292-.624.607-.5a.75.75 0 0 0 .102-1.055"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDurianOutline;
