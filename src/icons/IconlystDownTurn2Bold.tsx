import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownTurn2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.526 3.25a6.15 6.15 0 0 0-6.143 6.143v8.441l-1.345-1.346a.999.999 0 1 0-1.414 1.414l3.05 3.051a1 1 0 0 0 .329.22c.079.032.162.038.245.05.046.006.087.027.135.027s.088-.021.134-.027c.083-.011.167-.017.246-.05a1 1 0 0 0 .329-.218l3.053-3.053a1 1 0 1 0-1.414-1.414l-1.348 1.347V9.393a4.15 4.15 0 0 1 4.143-4.143 4.15 4.15 0 0 1 4.144 4.143v2.79a1 1 0 1 0 2 0v-2.79a6.15 6.15 0 0 0-6.144-6.143"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownTurn2Bold;
