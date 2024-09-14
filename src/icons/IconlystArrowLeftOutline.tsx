import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M20 12.274a.75.75 0 0 1-.648.743l-.102.007H6.066l4.763 4.743a.75.75 0 0 1-.974 1.136l-.084-.073-6.05-6.024a.75.75 0 0 1-.22-.503l-.001-.029v-.029l.003-.044-.003.073a.75.75 0 0 1 .148-.447l.006-.008a1 1 0 0 1 .066-.075l6.05-6.026a.75.75 0 0 1 1.132.98l-.073.083-4.761 4.743H19.25a.75.75 0 0 1 .75.75"
    />
  </Svg>
);
export default IconlystArrowLeftOutline;
