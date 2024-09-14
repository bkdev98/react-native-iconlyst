import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallMissedBroken = ({
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
      d="m21.315 3.75-6 6M15.315 3.75l6 6M4 11.553c.858 1.22 2.051 2.634 3.684 4.267 8.677 8.674 11.146 4.917 11.535 4.605 3.103-3.102 1.695-3.592-.754-6.04-1.184-1.184-2.013-.812-2.965-.483"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.344 8.5c-1.02-2.907.534-3.972.73-4.216 3.11-3.11 3.593-1.695 6.041.753 2.54 2.54-2.072 3.447 1.916 7.435.441.44.844.776 1.215 1.028"
    />
  </Svg>
);
export default IconlystCallMissedBroken;
