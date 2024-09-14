import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVennDiagramOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.24 7.276a4.99 4.99 0 1 0 0 9.98 4.99 4.99 0 0 0 0-9.98m-6.49 4.99a6.49 6.49 0 1 1 12.98 0 6.49 6.49 0 0 1-12.98 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.76 7.276a4.99 4.99 0 1 0 0 9.98 4.99 4.99 0 0 0 0-9.98m-6.49 4.99a6.49 6.49 0 1 1 12.98 0 6.49 6.49 0 0 1-12.98 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVennDiagramOutline;
