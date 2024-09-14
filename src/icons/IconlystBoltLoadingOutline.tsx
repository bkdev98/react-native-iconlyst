import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoltLoadingOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.62 4.735a.75.75 0 0 1-.088 1.057Q6.78 6.426 6.2 7.215a.75.75 0 1 1-1.209-.889 9.8 9.8 0 0 1 1.573-1.68.75.75 0 0 1 1.057.089M18.969 18.76a.75.75 0 0 1-.128 1.053 9.7 9.7 0 0 1-5.285 2.045 9.8 9.8 0 0 1-2.864-.21.75.75 0 0 1 .327-1.463c.777.174 1.591.24 2.425.177a8.2 8.2 0 0 0 4.472-1.73.75.75 0 0 1 1.053.128M4.244 15.029a.75.75 0 0 1 .99.383 8.27 8.27 0 0 0 2.858 3.468.75.75 0 0 1-.853 1.234 9.77 9.77 0 0 1-3.378-4.097.75.75 0 0 1 .383-.988M4.34 8.956c.399.11.634.522.525.921a8.2 8.2 0 0 0-.275 2.78.75.75 0 1 1-1.495.112 9.7 9.7 0 0 1 .323-3.287.75.75 0 0 1 .921-.526M12.43 2.394c5.386-.207 9.92 3.991 10.126 9.378a9.67 9.67 0 0 1-1.457 5.484.75.75 0 1 1-1.274-.79 8.17 8.17 0 0 0 1.233-4.637 8.26 8.26 0 0 0-8.57-7.936.75.75 0 0 1-.058-1.499M13.235 7.507a.75.75 0 0 1 .223 1.037l-1.837 2.844h3.766a.75.75 0 0 1 .63 1.157l-2.587 4a.75.75 0 0 1-1.26-.816l1.838-2.841h-3.764a.75.75 0 0 1-.63-1.157l2.584-4.001a.75.75 0 0 1 1.037-.223"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoltLoadingOutline;
