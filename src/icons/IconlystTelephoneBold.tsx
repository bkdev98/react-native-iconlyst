import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelephoneBold = ({
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
      d="M12.498 18.17a2.515 2.515 0 1 1 0-5.032 2.517 2.517 0 1 1 0 5.032m7.34-6.145a.156.156 0 0 0-.155-.124q-.372-.001-.74-.012c-.29-.007-.603-.015-.941-.015-2.707 0-3.52-1.86-3.911-2.753-.314-.715-.362-.826-1.593-.826s-1.277.11-1.589.825c-.391.893-1.203 2.754-3.91 2.754-.335 0-.644.008-.93.014q-.31.01-.623.01a.32.32 0 0 0-.311.246l-.08.336-.784 4.042c-.168 1.266.175 2.46.965 3.362.858.98 2.186 1.542 3.643 1.542h7.23c1.533 0 2.963-.624 3.826-1.67.746-.905 1.028-2.064.796-3.267z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.498 2.574C2.286 2.574 3.045 6.237 3 6.65 3 10.3 4.117 9.763 6.998 9.763c2.988 0 .806-3.579 5.5-3.579 4.695 0 2.515 3.579 5.504 3.579 2.881 0 3.998.548 3.998-3.114-.045-.412.71-4.075-9.502-4.075"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelephoneBold;
