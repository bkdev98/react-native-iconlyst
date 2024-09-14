import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFemaleBroken = ({
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
      d="M14.09 14.413c-.52-1.25-.78-1.87-1.1-2.13-.57-.46-1.38-.46-1.96 0-.32.25-.58.88-1.11 2.12l-1.45 3.47c-.35.83-.53 1.25-.52 1.59.02.61.38 1.15.93 1.4.31.14.76.14 1.67.14h2.9c.9 0 1.36 0 1.67-.14.55-.25.91-.79.93-1.39 0-.34-.17-.76-.51-1.59M9.46 4.67A2.78 2.78 0 1 0 12.01 3"
    />
  </Svg>
);
export default IconlystFemaleBroken;
