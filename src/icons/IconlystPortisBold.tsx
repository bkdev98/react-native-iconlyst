import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPortisBold = ({
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
      d="M16.327 17.523a5 5 0 0 1-1.321 1.483 5.1 5.1 0 0 1-1.337-1.503 5 5 0 0 1-.63-1.9l3.786-1.893a5 5 0 0 1-.498 3.813m-5.325 2.37c.381-.391.716-.826.998-1.296.282.47.616.905.997 1.295a5.1 5.1 0 0 1-1.995 0M7 15.022a5 5 0 0 1 .175-1.311l3.786 1.892a5 5 0 0 1-.63 1.9 5.1 5.1 0 0 1-1.337 1.503 5 5 0 0 1-1.321-1.483A5 5 0 0 1 7 15.022m6-4.501 2.893 1.239.08.14L13 13.386zM8.107 11.76 11 10.52v2.867L8.026 11.9zM11 8.345l-1.228.526L11 6.74zm2-1.603 1.227 2.129L13 8.345zm5.279 5.216c-.011-.027-.009-.055-.022-.081-.013-.025-.035-.04-.049-.063-.048-.092-.085-.188-.137-.278l-5.205-9.031c-.033-.057-.077-.104-.12-.151a.99.99 0 0 0-.746-.35.99.99 0 0 0-.746.35c-.043.047-.087.094-.12.15l-5.205 9.032c-.052.089-.089.184-.136.275-.015.024-.038.04-.051.066-.014.027-.012.057-.023.086A6.96 6.96 0 0 0 5 15.026a7 7 0 0 0 .942 3.499 7.07 7.07 0 0 0 2.567 2.559 7.1 7.1 0 0 0 3.491.93 7.1 7.1 0 0 0 3.499-.935 7.05 7.05 0 0 0 2.558-2.554 7 7 0 0 0 .943-3.5 7 7 0 0 0-.721-3.067"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPortisBold;
