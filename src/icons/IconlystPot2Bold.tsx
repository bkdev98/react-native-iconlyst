import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot2Bold = ({
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
      d="M12.994 3.8a.9.9 0 0 0-1.8 0v1.11c-2.77.277-5.11 1.97-6.215 4.382a.5.5 0 0 0 .455.708h13.134a.5.5 0 0 0 .454-.708c-1.08-2.357-3.34-4.028-6.028-4.362zM4.3 12.75H3a.75.75 0 0 1 0-1.5h18a.75.75 0 1 1 0 1.5h-1.299l.008 3.788c0 1.282-.4 2.418-1.163 3.237-.767.824-1.862 1.287-3.165 1.287H8.628c-1.303 0-2.399-.463-3.165-1.287C4.7 18.955 4.3 17.82 4.3 16.538z"
    />
  </Svg>
);
export default IconlystPot2Bold;
