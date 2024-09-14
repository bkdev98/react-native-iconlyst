import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBoard2Outline = ({
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
      d="M8.225 3.75a2.774 2.774 0 0 0-2.774 2.774v10.952a2.774 2.774 0 0 0 2.774 2.774h8.049a2.775 2.775 0 0 0 2.774-2.774V6.524a2.775 2.775 0 0 0-2.774-2.774zM3.951 6.524A4.274 4.274 0 0 1 8.225 2.25h8.049a4.275 4.275 0 0 1 4.274 4.274v10.952a4.275 4.275 0 0 1-4.274 4.274H8.225a4.274 4.274 0 0 1-4.274-4.274z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.951 15.602a.75.75 0 0 1 .75-.75h15.097a.75.75 0 1 1 0 1.5H4.7a.75.75 0 0 1-.75-.75M8.582 7.367a.75.75 0 0 1 .75-.75h3.1a.75.75 0 0 1 0 1.5h-3.1a.75.75 0 0 1-.75-.75m0 3.784a.75.75 0 0 1 .75-.75h5.833a.75.75 0 1 1 0 1.5H9.332a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentBoard2Outline;
