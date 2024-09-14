import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFarenheitDegreeCircleOutline = ({
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
      d="M6.36 4.69a.962.962 0 1 0 0 1.924.962.962 0 0 0 0-1.924m-2.462.962a2.462 2.462 0 1 1 4.925 0 2.462 2.462 0 0 1-4.925 0M10.005 8.65c0-.753.61-1.364 1.364-1.364h3.811a.75.75 0 0 1 0 1.5h-3.675v7.708a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.005 12.623a.75.75 0 0 1 .75-.75h4.425a.75.75 0 1 1 0 1.5h-4.425a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFarenheitDegreeCircleOutline;
