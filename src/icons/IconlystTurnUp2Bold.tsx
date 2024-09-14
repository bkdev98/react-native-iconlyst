import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUp2Bold = ({
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
      d="m19.377 6.595-3.054-3.052a1.001 1.001 0 0 0-1.416 0l-3.052 3.052A1 1 0 1 0 13.27 8.01l1.346-1.347v8.443a4.147 4.147 0 0 1-4.142 4.143 4.15 4.15 0 0 1-4.144-4.143v-2.79a1 1 0 1 0-2 0v2.79a6.15 6.15 0 0 0 6.144 6.143 6.15 6.15 0 0 0 6.142-6.143V6.662l1.348 1.347a.999.999 0 1 0 1.414-1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnUp2Bold;
