import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSave3Bold = ({
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
      fillRule="evenodd"
      d="M13.86 8.229H6.974a.75.75 0 0 1 0-1.5h6.886a.75.75 0 0 1 0 1.5m-5.164 9.328a2.474 2.474 0 0 1-2.472-2.471 2.475 2.475 0 0 1 2.472-2.471 2.474 2.474 0 0 1 2.471 2.471 2.474 2.474 0 0 1-2.471 2.471m11.99-9.498-4.475-4.662a2.94 2.94 0 0 0-2.105-.897H7.782C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.282 5.526h8.434c3.161 0 5.284-2.221 5.284-5.526V10.08a2.9 2.9 0 0 0-.814-2.021"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.696 14.115a.973.973 0 0 0-.972.971.973.973 0 0 0 1.943 0 .973.973 0 0 0-.971-.97"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFloppyDiskSave3Bold;
