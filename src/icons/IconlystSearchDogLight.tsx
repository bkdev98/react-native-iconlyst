import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDogLight = ({
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
      d="M13.447 9.097c-.168.895-.332 2.21-.277 3.505M20.018 17.24a3.115 3.115 0 1 0-6.23 0 3.115 3.115 0 0 0 6.23 0M19.023 19.521l1.792 1.788"
    />
  </Svg>
);
export default IconlystSearchDogLight;
