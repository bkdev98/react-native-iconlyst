import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSaloonDogLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.013 7.744v.01M11.643 21.009c-1.154.038-2.171-.132-2.817-.327 1.496-2.454 1.751-5.586 1.181-7.337-.108.081-.718.19-3.584.516s-3.665-3.013-3.706-4.723l4.277-1.82c-.157-.987.226-3.293 3.013-3.478l2.139-.169c2.424-.208 4.973 1.025 6.037 4.923q.212.778.333 1.468"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.447 9.097c-.115.611-.228 1.418-.27 2.28M18.472 15.417a1.284 1.284 0 1 1 2.558-.227 1.284 1.284 0 0 1-2.558.227M18.972 16.368l-3.899 4.646M15.974 15.417a1.284 1.284 0 1 0-2.558-.227 1.284 1.284 0 0 0 2.558.227M15.474 16.368l3.899 4.646"
    />
  </Svg>
);
export default IconlystSaloonDogLight;
