import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJourneyBold = ({
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
      d="m19.13 16.075-.007-.01a8.2 8.2 0 0 0 1.079-4.052c-.015-3.336-2.081-6.232-4.992-7.478l.26-1.11a.74.74 0 0 0-.25-.75.78.78 0 0 0-.79-.11l-2.72 1.23c-.21.09-.36.27-.42.49s-.01.46.12.64l1.86 2.49c.14.19.37.3.6.3.05 0 .1 0 .16-.02.28-.06.51-.27.57-.56l.26-1.11v-.002c2.252 1.069 3.83 3.363 3.842 5.994a6.7 6.7 0 0 1-.748 3.053 2.34 2.34 0 0 0-2.494.535c-.92.91-.92 2.4 0 3.31a2.33 2.33 0 0 0 3.31 0c.78-.77.9-1.94.36-2.83zM10.71 16.585a.73.73 0 0 0-.75-.29c-.29.06-.51.28-.58.56l-.28 1.189c-2.234-1.078-3.793-3.36-3.801-5.977a6.54 6.54 0 0 1 .675-2.928c.266.106.55.156.836.156.6 0 1.2-.23 1.66-.68.91-.92.91-2.4 0-3.32a2.34 2.34 0 0 0-3.32 0 2.35 2.35 0 0 0-.36 2.84l.007.01a8.07 8.07 0 0 0-.998 3.93c.009 3.319 2.057 6.207 4.953 7.463l-.002.007-.24 1.03c-.06.27.04.56.26.74.13.12.3.18.47.18.11 0 .21-.03.31-.07l2.73-1.22c.2-.09.36-.28.42-.5.05-.22.01-.45-.13-.63z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystJourneyBold;
