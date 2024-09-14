import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudsBroken = ({
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
      d="M12.247 18.576h4.897c.457 0 1.062-.09 1.674-.335a4.14 4.14 0 0 0 2.432-3.779c0-2.596-1.833-4.12-4.102-4.14 0-1.632-1.281-4.898-4.898-4.898S7.353 8.69 7.353 10.322c-2.269.02-4.103 1.544-4.103 4.14 0 1.68 1 3.125 2.436 3.774.605.246 1.207.34 1.664.34h.647"
    />
  </Svg>
);
export default IconlystCloudsBroken;
