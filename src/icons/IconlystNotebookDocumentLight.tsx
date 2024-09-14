import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookDocumentLight = ({
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
      d="M20.684 17.164V6.834A3.81 3.81 0 0 0 17.027 3l-8.493.001a3.75 3.75 0 0 0-3.67 3.834v10.508A3.747 3.747 0 0 0 8.624 21l8.39-.001a3.755 3.755 0 0 0 3.67-3.835M10.15 15.8h6.24m-6.24-3.801h6.24m-6.24-3.8h3.01M3.314 16.697H6.64m-3.325-4.699H6.64M3.314 7.301H6.64"
    />
  </Svg>
);
export default IconlystNotebookDocumentLight;
