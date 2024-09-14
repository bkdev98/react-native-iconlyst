import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegramSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.85 8.747-8.207 3.216.205.082.094.038c.355.143.702.281.996.391.473.161.952.12 1.231-.055l2.78-1.838a.75.75 0 1 1 .827 1.251L11.27 13.49l.032.03q.134.124.317.26c.54.385 1.082.777 1.621 1.167l1.175.848.011.008 1.572-6.971q.016-.071.025-.12a.6.6 0 0 0-.173.036m-6.024 5.315a3.4 3.4 0 0 1-1.387-.173l-.018-.006a50 50 0 0 1-1.038-.408l-.092-.037a61 61 0 0 0-.915-.362c-.495-.186-.707-.69-.71-1.081-.004-.495.284-.955.813-1.186l.027-.012 8.812-3.452.027-.01c.375-.13.72-.155 1.03-.088.306.066.52.207.649.307.333.256.474.598.504.92.026.279-.033.542-.07.698l-1.646 7.302-.014.055c-.083.27-.242.524-.503.694-.256.167-.53.2-.75.184-.408-.029-.774-.232-.996-.388l-.006-.004-1.19-.86c-.536-.388-1.07-.774-1.611-1.16l-.012-.009c-.266-.198-.642-.496-.867-.86z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelegramSquareOutline;
