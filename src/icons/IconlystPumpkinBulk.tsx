import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPumpkinBulk = ({
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
      d="M5.603 19.198c1.301 1.447 3.17 2.134 5.076 1.603.541.313 1.15.48 1.817.48.666 0 1.294-.167 1.836-.48 1.905.531 3.775-.156 5.077-1.603 1.468-1.646 2.374-3.842 2.634-6.019.25-2.061-.093-4.602-1.76-6.039a3.96 3.96 0 0 0-4.362-.51c-.22.115-.49.26-.645.469a3.36 3.36 0 0 0-2.77-1.437 3.42 3.42 0 0 0-2.78 1.426c-.156-.197-.417-.343-.636-.458-1.426-.718-3.155-.531-4.372.51-1.666 1.437-2.01 3.978-1.76 6.039.27 2.177 1.177 4.373 2.645 6.019"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.63 3.946h-.003l-.036.012a2.213 2.213 0 0 0-.692.392c-.357.301-.743.828-.72 1.794a.75.75 0 1 1-1.5.036c-.035-1.47.587-2.415 1.253-2.976a3.7 3.7 0 0 1 1.19-.671l.127-.038.011-.003h.004l.002-.001h.001l.179.728-.178-.729a.75.75 0 0 1 .362 1.456"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPumpkinBulk;
