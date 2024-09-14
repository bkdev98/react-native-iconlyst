import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKelvinDegreeCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.448 6.166a8.25 8.25 0 0 0-8.08-2.106.75.75 0 1 1-.408-1.444 9.75 9.75 0 0 1 9.548 2.49c3.808 3.807 3.808 9.98 0 13.788s-9.98 3.808-13.788 0A9.75 9.75 0 0 1 3.307 9.09a.75.75 0 1 1 1.432.447 8.25 8.25 0 1 0 13.71-3.37"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.36 4.69a.962.962 0 1 0 0 1.924.962.962 0 0 0 0-1.924m-2.462.962a2.462 2.462 0 1 1 4.925 0 2.462 2.462 0 0 1-4.925 0M10.075 7.511a.75.75 0 0 1 .75.75v7.478a.75.75 0 0 1-1.5 0V8.26a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.713 7.764a.75.75 0 0 1-.065 1.059l-5.068 4.483a.75.75 0 1 1-.994-1.124l5.068-4.483a.75.75 0 0 1 1.059.065"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.63 16.317a.75.75 0 0 0 .102-1.056L12.2 10.983a.75.75 0 0 0-1.157.955l3.532 4.278a.75.75 0 0 0 1.056.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKelvinDegreeCircleOutline;
