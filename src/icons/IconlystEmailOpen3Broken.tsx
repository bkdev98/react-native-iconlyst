import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen3Broken = ({
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
      d="M12 20.761H7.582C4.845 20.768 3 19.135 3 16.37v-5.845c0-1.002.49-1.94 1.312-2.513l6.16-4.292a2.67 2.67 0 0 1 3.057 0l6.16 4.292A3.06 3.06 0 0 1 21 10.525v5.845c0 2.765-1.845 4.398-4.582 4.391h-.723"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.385 9.041 6.543 5.274a3.38 3.38 0 0 0 4.193 0L20.62 9.04"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.076 12.043c0-1.587 1.067-2.512 2.628-2.512h1.778M14.276 9.531c1.58 0 2.646.925 2.646 2.512"
    />
  </Svg>
);
export default IconlystEmailOpen3Broken;