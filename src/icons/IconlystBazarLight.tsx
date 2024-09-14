import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBazarLight = ({
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
      d="M12 20.9c-5.5 0-8.338-4.202-8.994-11.681a1.48 1.48 0 0 1 1.02-1.528c.885-.293 2.016-.547 4.808-.84 2.1-.218 4.231-.218 6.332 0 2.792.293 3.923.547 4.808.84.65.215 1.08.846 1.02 1.528-.656 7.48-3.494 11.682-8.994 11.682"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.923 8.592c-1.722-7.445-6.149-7.224-7.849.09"
    />
  </Svg>
);
export default IconlystBazarLight;
