import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystController2Outline = ({
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
      d="M9.59 8.53A5.59 5.59 0 0 0 4 14.12v.052a5.59 5.59 0 0 0 5.59 5.59h5.32a5.59 5.59 0 0 0 5.59-5.59v-.053a5.59 5.59 0 0 0-5.59-5.59zM2.5 14.12a7.09 7.09 0 0 1 7.09-7.09h5.32A7.09 7.09 0 0 1 22 14.12v.052a7.09 7.09 0 0 1-7.09 7.09H9.59a7.09 7.09 0 0 1-7.09-7.09z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.031 15.513a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M14.393 12.283a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M9.349 11.43a.75.75 0 0 1 .75.75v.942h.975a.75.75 0 0 1 0 1.5h-.976v.943a.75.75 0 0 1-1.5 0v-.943h-.977a.75.75 0 1 1 0-1.5h.977v-.942a.75.75 0 0 1 .75-.75M8.377 2.737a.75.75 0 0 1 .75.75c0 .24.203.462.487.462h.957c1.452.005 2.653 1.162 2.658 2.62v1.059a.75.75 0 0 1-1.5 0V6.573c-.003-.605-.508-1.121-1.162-1.124h-.953c-1.083 0-1.987-.863-1.987-1.962a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystController2Outline;
