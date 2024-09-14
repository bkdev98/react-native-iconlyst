import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowCircleBrokenUpRightOutline = ({
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
      d="M14.977 8.991a.75.75 0 0 1 .22.532l-.01 4.277a.75.75 0 1 1-1.5-.003l.005-2.46-7.5 7.5a.75.75 0 1 1-1.061-1.06l7.501-7.502-2.464.004a.75.75 0 0 1-.002-1.5l4.279-.008c.2 0 .39.08.532.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.081 5.096c3.808-3.808 9.981-3.808 13.789 0s3.807 9.981 0 13.788a9.74 9.74 0 0 1-8.965 2.635.75.75 0 0 1 .318-1.466 8.25 8.25 0 1 0-6.31-6.31.75.75 0 1 1-1.466.317A9.74 9.74 0 0 1 5.08 5.096"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowCircleBrokenUpRightOutline;
