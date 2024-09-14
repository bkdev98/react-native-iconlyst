import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashRemoveOutline = ({
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
      fillRule="evenodd"
      d="M8.764 8.288a.75.75 0 0 1 .166 1.047l-2.512 3.46a.219.219 0 0 0 .173.351h5.325a.75.75 0 0 1 .75.75v5.628c0 .209.266.302.394.129v-.001l2.292-3.157a.75.75 0 1 1 1.214.88l-2.293 3.16-.002.003c-.978 1.336-3.105.657-3.105-1.014v-4.878H6.591c-1.415 0-2.199-1.593-1.392-2.724l.003-.005 2.515-3.463a.75.75 0 0 1 1.047-.166M12.929 3.843l-1.445 1.988a.75.75 0 1 1-1.214-.882l1.448-1.991c.977-1.338 3.106-.657 3.106 1.013v2.982a.75.75 0 0 1-1.5 0V3.971a.2.2 0 0 0-.04-.133.23.23 0 0 0-.11-.075.23.23 0 0 0-.134-.004.2.2 0 0 0-.111.084M15.697 9.594a.75.75 0 0 1 .75-.75h2.949c1.414 0 2.2 1.592 1.394 2.724l-.004.005-1.668 2.294a.75.75 0 0 1-1.213-.882l1.665-2.29a.22.22 0 0 0-.174-.351h-2.949a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.62 3.932a.75.75 0 0 1 1.06.028l15.674 16.526a.75.75 0 1 1-1.089 1.032L3.593 4.993a.75.75 0 0 1 .028-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashRemoveOutline;
