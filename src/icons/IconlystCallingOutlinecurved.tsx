import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallingOutlinecurved = ({
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
      d="M21.704 10.54a.75.75 0 0 1-.744-.667 7.184 7.184 0 0 0-6.38-6.37.75.75 0 0 1-.661-.829.74.74 0 0 1 .828-.662 8.67 8.67 0 0 1 7.703 7.693.75.75 0 0 1-.746.834"
    />
    <Path
      fill={props.color}
      d="M18.163 10.55a.75.75 0 0 1-.736-.606 3.66 3.66 0 0 0-2.906-2.908.75.75 0 1 1 .285-1.472A5.15 5.15 0 0 1 18.9 9.656a.75.75 0 0 1-.737.894"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.482 16.836c4.713 4.714 7.851 5.95 9.833 5.95.978 0 1.676-.3 2.141-.635.021-.012 2.173-1.328 2.55-3.32.178-.935-.082-1.86-.75-2.676-2.752-3.34-4.154-3.029-5.702-2.276-.95.466-1.702.828-3.823-1.29-2.12-2.122-1.754-2.873-1.291-3.823.754-1.548 1.064-2.95-2.278-5.705-.814-.665-1.733-.925-2.667-.75-1.963.367-3.287 2.484-3.285 2.484C1.158 6.272.444 9.8 7.482 16.836M5.802 3.78q.13-.021.26-.022c.392 0 .77.153 1.147.463 2.695 2.22 2.354 2.92 1.882 3.89-.709 1.456-1.08 2.878 1.58 5.54 2.661 2.66 4.084 2.29 5.54 1.578l.002-.001c.967-.47 1.667-.81 3.884 1.881.38.462.524.924.442 1.411-.189 1.12-1.49 2.123-1.885 2.367-1.41 1.006-4.808.193-10.112-5.11-5.302-5.303-6.116-8.7-5.074-10.165.208-.339 1.215-1.643 2.333-1.832"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallingOutlinecurved;
