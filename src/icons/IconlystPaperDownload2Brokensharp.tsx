import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperDownload2Brokensharp = ({
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
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M8.864 21.389h11.061V8.207l-5.107-5.318H4.575v18.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M14.342 5.442v3.346h5.107M11.113 17.672V9.826M8.526 15.085c1.33 0 2.587 1.17 2.587 2.587M13.7 15.085c-1.33 0-2.587 1.17-2.587 2.587"
    />
  </Svg>
);
export default IconlystPaperDownload2Brokensharp;
