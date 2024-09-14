import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFarenheitDegreeHomeOutline = ({
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
      d="M11.217 4.247a2.214 2.214 0 0 1 2.795 0zm0 0-5.574 4.54a2.22 2.22 0 0 0-.816 1.717v7.174A2.57 2.57 0 0 0 7.4 20.25H17.83a2.57 2.57 0 0 0 2.572-2.572v-7.174c0-.665-.3-1.295-.816-1.716l-5.574-4.541M10.27 3.084a3.714 3.714 0 0 1 4.69 0l5.575 4.54a3.72 3.72 0 0 1 1.368 2.88v7.174a4.07 4.07 0 0 1-4.072 4.072H7.4a4.07 4.07 0 0 1-4.072-4.072v-7.174c0-1.116.502-2.173 1.368-2.879z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.545 9.927a.946.946 0 1 1 1.891 0 .946.946 0 0 1-1.891 0M11.584 11.26c0-.69.56-1.25 1.25-1.25h3.1a.75.75 0 0 1 0 1.5h-2.85v6.13a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.584 14.492a.75.75 0 0 1 .75-.75h3.6a.75.75 0 0 1 0 1.5h-3.6a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFarenheitDegreeHomeOutline;
