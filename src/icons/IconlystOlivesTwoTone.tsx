import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOlivesTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.992 6.734c-3.668 4.255-3.697 9.726-.377 12.587 3.319 2.862 8.729 2.03 12.397-2.225s3.689-9.462.37-12.323-8.722-2.295-12.39 1.96"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.794 11.742c-.305.852-.308 1.948-.031 2.521M16.487 7.364c-1.376-1.375-2.81-1.851-3.66-1.003-.848.849-.485 2.286.89 3.662s2.968 1.958 3.816 1.11c.849-.849.329-2.393-1.047-3.769"
    />
  </Svg>
);
export default IconlystOlivesTwoTone;
