import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHalloweenPumpkinBulk = ({
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
      d="M5.602 19.198c1.302 1.447 3.17 2.134 5.076 1.603.542.313 1.151.48 1.817.48.667 0 1.295-.167 1.836-.48 1.906.531 3.776-.156 5.078-1.603 1.467-1.646 2.374-3.842 2.634-6.019.25-2.061-.094-4.602-1.76-6.039a3.96 3.96 0 0 0-4.362-.51c-.22.115-.49.26-.646.469a3.36 3.36 0 0 0-2.77-1.437 3.42 3.42 0 0 0-2.78 1.426c-.156-.197-.417-.343-.635-.458-1.426-.718-3.155-.531-4.372.51-1.667 1.437-2.01 3.978-1.76 6.039.27 2.177 1.176 4.373 2.644 6.019"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.63 3.946a.75.75 0 0 0-.362-1.456l.178.729-.178-.729h-.002l-.002.001-.004.001-.011.003a2 2 0 0 0-.126.038 3.714 3.714 0 0 0-1.19.67c-.667.562-1.29 1.507-1.254 2.977a.75.75 0 1 0 1.5-.036c-.023-.966.363-1.493.72-1.794a2.2 2.2 0 0 1 .728-.403zM7.827 10.986a.75.75 0 0 1 .95-.47l1.324.448a.75.75 0 0 1-.48 1.42l-1.324-.447a.75.75 0 0 1-.47-.95M16.704 11.937a.75.75 0 1 0-.48-1.42l-1.324.447a.75.75 0 0 0 .481 1.42zM9.973 14.562a.75.75 0 0 0-.93 1.177l1.376 1.086a.75.75 0 0 0 .88.035l1.2-.799 1.202.8a.75.75 0 0 0 .88-.036l1.376-1.086a.75.75 0 1 0-.93-1.177l-.948.748-1.164-.774a.75.75 0 0 0-.83 0l-1.164.774z"
    />
  </Svg>
);
export default IconlystHalloweenPumpkinBulk;
