import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetRefreshBold = ({
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
      d="M20.423 9.933a.753.753 0 0 1 .875.6c.108.578.163 1.17.163 1.758 0 5.217-4.245 9.461-9.46 9.461-5.218 0-9.462-4.244-9.462-9.46C2.54 7.073 6.783 2.83 12 2.83a9.5 9.5 0 0 1 3.761.786l.516-.97a.76.76 0 0 1 .687-.398.75.75 0 0 1 .66.443l1.243 2.773a.75.75 0 0 1-.575 1.048l-2.948.436a.746.746 0 0 1-.722-.31.75.75 0 0 1-.05-.784l.485-.912A7.9 7.9 0 0 0 12 4.33c-4.39 0-7.96 3.571-7.96 7.961s3.57 7.961 7.96 7.961 7.961-3.572 7.961-7.96c0-.497-.047-.996-.138-1.484a.75.75 0 0 1 .6-.875"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.942 12.288c0-2.79 2.27-5.06 5.06-5.06s5.06 2.27 5.06 5.06-2.27 5.06-5.06 5.06-5.06-2.27-5.06-5.06m3.79 0c0 .7.57 1.27 1.27 1.27s1.27-.57 1.27-1.27-.57-1.27-1.27-1.27-1.27.57-1.27 1.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTargetRefreshBold;
