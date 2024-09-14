import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBadgeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.256 21.815c-.56 0-1.116-.11-1.635-.324l-2.142-.875a1.04 1.04 0 0 0-.836.026l-.761.364a1.952 1.952 0 0 1-2.8-1.765l.01-12.255c0-2.882 1.73-4.673 4.516-4.673h7.3c2.772 0 4.493 1.79 4.493 4.674l.017 12.252a1.954 1.954 0 0 1-2.8 1.764l-.754-.36a1.03 1.03 0 0 0-.836-.027l-2.147.877a4.3 4.3 0 0 1-1.625.322M8.088 19.04c.328 0 .654.064.958.188l2.143.875a2.8 2.8 0 0 0 2.132 0l2.147-.876a2.54 2.54 0 0 1 2.053.06l.753.36a.453.453 0 0 0 .648-.409l-.017-12.253c0-1.449-.519-3.174-2.993-3.174h-7.3c-1.945 0-3.016 1.127-3.016 3.174l-.01 12.256a.452.452 0 0 0 .648.409l.76-.364a2.54 2.54 0 0 1 1.096-.246z"
    />
    <Path
      fill={props.color}
      d="M12.982 14.948h-2.357a.75.75 0 1 1 0-1.5h2.357a.52.52 0 0 0 0-1.038h-1.45a2.02 2.02 0 0 1 0-4.039h2.357a.75.75 0 0 1 0 1.5h-2.357a.52.52 0 0 0 0 1.04h1.45a2.02 2.02 0 0 1 0 4.037"
    />
    <Path
      fill={props.color}
      d="M12.256 16.011a.75.75 0 0 1-.75-.75v-1.066a.75.75 0 1 1 1.5 0v1.071a.75.75 0 0 1-.75.745M12.256 9.872a.75.75 0 0 1-.75-.75V8.047a.75.75 0 1 1 1.5 0v1.075a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystDollarBadgeOutline;
