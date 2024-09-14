import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoapOutline = ({
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
      d="M14.688 2.78c.41.06.69.44.626.85l-.828 5.32a.755.755 0 0 1-.856.63.756.756 0 0 1-.626-.86l.828-5.32a.74.74 0 0 1 .856-.62M19.234 3.99A.75.75 0 0 1 19.557 5l-2.16 4.18a.74.74 0 0 1-.469.38.749.749 0 0 1-.864-1.069l2.16-4.18a.747.747 0 0 1 1.01-.32"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.479 15.147a10.2 10.2 0 0 1-4.657 5.503c-.713.4-1.513.58-2.304.58H9.985c-.794 0-1.596-.18-2.31-.58a10.19 10.19 0 0 1-5.162-7.68 1.78 1.78 0 0 1 1.764-1.98h15.948c1.057 0 1.89.93 1.763 1.98a10 10 0 0 1-.376 1.773.74.74 0 0 1-.133.403m-16.703.323a8.7 8.7 0 0 0 3.628 3.87c.47.26 1.016.39 1.58.39h4.534a3.24 3.24 0 0 0 1.575-.39 8.7 8.7 0 0 0 3.632-3.87zm15.498-1.5q.152-.572.225-1.17a.28.28 0 0 0-.274-.31H4.277a.276.276 0 0 0-.274.3q.072.605.225 1.18z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSoapOutline;
