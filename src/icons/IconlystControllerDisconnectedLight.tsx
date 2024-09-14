import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystControllerDisconnectedLight = ({
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
      d="M16.024 16.06c.208.27.405.532.73.774.674.504 1.48.738 2.73.27 1.324-.54 1.548-1.962 1.512-3.276.01-.297-.233-7.076-3.032-8.542-.576-.253-2.206-1.144-4.114.054-1.63 1.016-2.241.864-3.7 0-1.99-1.188-3.538-.307-4.114-.054-2.79 1.466-3.042 8.245-3.033 8.542-.036 1.314.19 2.736 1.513 3.276 1.26.468 2.062.234 2.738-.27.342-.252.504-.504.702-.774M16.01 11.652v-.01M14.574 10.217v-.01M17.443 10.217v-.01M16.01 8.781v-.01M8.003 8.771v2.87m1.436-1.434h-2.87M13.078 16.847l-2.424 2.423m2.424 0-2.424-2.423"
    />
  </Svg>
);
export default IconlystControllerDisconnectedLight;
