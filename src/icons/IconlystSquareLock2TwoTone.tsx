import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLock2TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.282 3.967h8.435c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.946-1.835 5.027-4.784 5.027H8.282c-2.948 0-4.782-2.081-4.782-5.027V8.993c0-2.945 1.843-5.026 4.782-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.733 13.295a2.07 2.07 0 0 0 .851-1.673 2.084 2.084 0 1 0-4.17 0c0 .69.338 1.294.853 1.673l-.646 1.943a.884.884 0 0 0 .838 1.163h2.081a.883.883 0 0 0 .838-1.163z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.501 16.399v5.568M12.5 9.535l.001-5.568z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSquareLock2TwoTone;