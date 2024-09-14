import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneChargeBroken = ({
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
      d="m12.24 15.829 1.468-2.695H10.79l1.466-2.697M8.079 18.177c.219.918-.491 1.814-1.434 1.773a3.528 3.528 0 0 1-3.275-2.616 3.56 3.56 0 0 1 1.659-4.01c.827-.48 1.885-.012 2.107.917l.367 1.532M17.363 14.24c.222-.928 1.28-1.396 2.107-.917a3.56 3.56 0 0 1 1.66 4.01 3.53 3.53 0 0 1-3.276 2.617c-.942.04-1.652-.855-1.433-1.773l.375-1.568"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.874 13.593v-1.92A7.624 7.624 0 0 0 12.25 4.05M4.625 13.592v-1.92A7.63 7.63 0 0 1 9.349 4.62"
    />
  </Svg>
);
export default IconlystHeadphoneChargeBroken;
