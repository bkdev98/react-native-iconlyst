import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanLocationTwoTone = ({
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
      d="M21.5 8.469V6.892A3.89 3.89 0 0 0 17.607 3H16.35M3.5 8.469V6.892A3.89 3.89 0 0 1 7.393 3h1.289M3.5 15.531v1.577A3.89 3.89 0 0 0 7.393 21H8.65M21.5 15.531v1.577A3.89 3.89 0 0 1 17.607 21h-1.289"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.482 16.749c-.635 0-3.972-2.701-3.972-5.527a3.972 3.972 0 1 1 7.944 0c0 2.826-3.337 5.527-3.972 5.527"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.484 10.967v.048m.194-.038a.196.196 0 1 1-.391 0 .196.196 0 0 1 .391 0"
    />
  </Svg>
);
export default IconlystScanLocationTwoTone;
