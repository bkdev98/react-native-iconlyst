import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruck2Bold = ({
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
      d="M18.6 13.16h1.65v1.94c0 .74-.6 1.33-1.33 1.33h-.17c-.25-.86-.93-1.55-1.8-1.8V9.16l2.34 1.03c.58.25.96.83.96 1.47H18.6c-.42 0-.75.34-.75.75 0 .42.33.75.75.75m-2.4 5.19c-.55 0-1-.37-1.13-.87-.03-.1-.04-.2-.04-.3 0-.36.16-.68.42-.89.2-.17.46-.27.75-.27s.55.1.75.28a1.163 1.163 0 0 1-.75 2.05M8.96 8.22H5.39a.749.749 0 1 1 0-1.5h3.57a.749.749 0 1 1 0 1.5m-.74 8.97c0 .03 0 .05-.01.08-.04.61-.54 1.08-1.16 1.08-.63 0-1.15-.51-1.16-1.15v-.02c0-.64.52-1.16 1.16-1.16.65 0 1.17.52 1.17 1.16zm11.67-8.37-2.94-1.3v-.54c0-1.56-1.27-2.83-2.83-2.83H5.05c-1.55 0-2.8 1.26-2.8 2.8v2.128c0 .167.134.301.3.3.864-.005 3.353-.018 4.29-.018a.749.749 0 1 1 0 1.5c-1.137 0-3.462-.007-4.29-.01a.3.3 0 0 0-.3.3v3.95c0 1.35.96 2.49 2.23 2.76a2.661 2.661 0 0 0 5.13.07h4.03a2.67 2.67 0 0 0 2.56 1.92c1.21 0 2.23-.81 2.55-1.92h.17c1.56 0 2.83-1.27 2.83-2.83v-3.44c0-1.24-.73-2.36-1.86-2.84"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruck2Bold;
