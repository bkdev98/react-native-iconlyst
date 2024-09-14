import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBoard2Broken = ({
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
      d="M19.548 12v5.476A3.525 3.525 0 0 1 16.024 21H7.975a3.524 3.524 0 0 1-3.524-3.524V6.524A3.524 3.524 0 0 1 7.975 3h8.049a3.525 3.525 0 0 1 3.524 3.524v2.394M7.377 15.602h12.17M9.083 7.367h3.1m-3.1 3.784h5.833"
    />
  </Svg>
);
export default IconlystDocumentBoard2Broken;
