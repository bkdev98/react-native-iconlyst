import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowDownRightLight = ({
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
      fill={props.color}
      d="m19.492 18.498-.748.044zm-.542-9.214.749-.044zm-.803-.306-.53-.53zm-2.587 2.588-.53.53a.75.75 0 0 0 1.06 0zM11.594 7.6l.53-.53zm-1.332 0 .53.53zM7.6 10.263l-.53-.53zm0 1.331.53-.53zm3.966 3.966.53.53a.75.75 0 0 0 0-1.06zm-2.587 2.588.53.53zm.305.803.044-.749zm9.214.542-.044.749zm1.744-1.04-.542-9.213-1.497.088.542 9.214zM17.617 8.449l-2.587 2.588 1.06 1.06 2.588-2.587zm-1.527 2.588L12.124 7.07l-1.06 1.06 3.966 3.966zM9.732 7.07 7.07 9.733l1.06 1.06 2.664-2.663zM7.07 12.125l3.966 3.966 1.06-1.06-3.965-3.967zm3.966 2.905-2.587 2.588 1.06 1.06 2.588-2.587zM9.239 19.7l9.214.541.088-1.497-9.214-.542zm-.791-2.082c-.745.744-.26 2.02.791 2.081l.088-1.497a.28.28 0 0 1 .181.476zM7.069 9.733c-.66.66-.66 1.731 0 2.392l1.06-1.06a.19.19 0 0 1 0-.272zm5.055-2.663a1.69 1.69 0 0 0-2.392 0l1.06 1.06a.19.19 0 0 1 .272 0zM19.7 9.24c-.062-1.052-1.337-1.537-2.082-.792l1.06 1.06a.28.28 0 0 1-.475-.18zm-.955 9.302a.192.192 0 0 1-.203.202l-.088 1.497a1.69 1.69 0 0 0 1.788-1.787z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m8.475 4.506-3.97 3.97"
    />
  </Svg>
);
export default IconlystArrowsBigArrowDownRightLight;
