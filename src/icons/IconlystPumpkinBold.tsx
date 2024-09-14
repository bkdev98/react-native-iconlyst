import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPumpkinBold = ({
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
      d="M14.63 3.946a.75.75 0 0 0-.362-1.456h-.002l-.002.001-.004.001-.011.003a2 2 0 0 0-.126.038 3.714 3.714 0 0 0-1.19.67c-.601.507-1.166 1.325-1.246 2.558A3.44 3.44 0 0 0 9.726 7.09c-.156-.198-.417-.343-.636-.459-1.426-.718-3.155-.53-4.372.51-1.666 1.437-2.01 3.978-1.76 6.04.27 2.176 1.177 4.373 2.645 6.018 1.301 1.447 3.17 2.135 5.076 1.603.541.313 1.15.48 1.817.48.666 0 1.294-.167 1.836-.48 1.905.532 3.775-.155 5.077-1.603 1.468-1.645 2.374-3.842 2.634-6.018.25-2.062-.093-4.603-1.76-6.04a3.96 3.96 0 0 0-4.362-.51c-.22.116-.49.261-.645.47a3.34 3.34 0 0 0-2.08-1.368c.077-.71.4-1.126.703-1.382a2.2 2.2 0 0 1 .728-.403z"
    />
  </Svg>
);
export default IconlystPumpkinBold;
