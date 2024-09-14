import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLastFmSquareOutline = ({
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
      d="M18.751 6.242c1.353.221 2.716 1.123 2.99 2.8a.75.75 0 0 1-1.481.241c-.14-.861-.834-1.41-1.752-1.561-.944-.155-1.86.162-2.282.751-.563.788-.29 1.913.479 2.266.335.154.755.252 1.268.352l.242.046c.427.08.907.172 1.343.309.53.166 1.095.427 1.524.913q.666.753.668 1.98c0 .746-.178 1.386-.515 1.91a3.13 3.13 0 0 1-1.31 1.132c-.994.474-2.19.502-3.147.35-2.278-.363-3.474-2.149-4.345-3.884a38 38 0 0 1-.699-1.488c-.18-.395-.354-.78-.535-1.153-.41-.844-.824-1.573-1.32-2.126-.647-.723-1.723-1.21-2.71-1.21-1.87 0-3.419 1.744-3.419 4.153 0 2.428 1.374 4.01 3.229 4.01.836 0 2.08-.21 2.954-1.007a.75.75 0 0 1 1.01 1.109c-1.274 1.16-2.964 1.398-3.964 1.398-2.96 0-4.729-2.559-4.729-5.51 0-2.969 1.975-5.653 4.918-5.653 1.418 0 2.9.67 3.829 1.71.64.713 1.127 1.595 1.552 2.472.19.391.373.794.55 1.187l.068.147c.201.444.399.875.606 1.288.847 1.686 1.745 2.837 3.24 3.075.786.125 1.643.075 2.266-.222.3-.144.533-.337.694-.588s.277-.599.277-1.1c0-.53-.138-.812-.293-.988-.17-.192-.438-.346-.848-.474-.345-.108-.721-.18-1.148-.261l-.274-.053c-.51-.099-1.092-.224-1.608-.46-1.772-.813-2.088-3.084-1.072-4.503.849-1.186 2.418-1.576 3.744-1.358"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLastFmSquareOutline;
