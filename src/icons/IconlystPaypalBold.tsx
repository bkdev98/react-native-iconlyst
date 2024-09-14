import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaypalBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.982 7.707a6 6 0 0 0-.796-.763c-.202-.16-.476.025-.464.283.01.22.02.43.01.65a6.963 6.963 0 0 1-6.99 6.86h-1.503a.3.3 0 0 0-.297.254l-.46 2.956c-.16 1-.75 1.83-1.56 2.31a2.8 2.8 0 0 1-.555.27q-.005 0-.01.002-.15.062-.305.103a.33.33 0 0 0-.245.258l-.025.157c-.07.43.05.87.34 1.2.28.34.7.53 1.14.53h2c.9 0 1.65-.64 1.79-1.53l.62-3.91c.05-.32.32-.56.65-.56h2.48c2.72 0 5.01-1.95 5.43-4.64.25-1.59-.21-3.21-1.25-4.43"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m7.997 17.71.617-3.913a.654.654 0 0 1 .65-.556h2.476a5.47 5.47 0 0 0 5.432-4.64 5.5 5.5 0 0 0-5.432-6.36H7.623a2.91 2.91 0 0 0-2.884 2.462l-2.02 12.81c-.068.43.056.868.34 1.202.287.334.703.526 1.142.526h2c.9 0 1.656-.644 1.796-1.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaypalBold;
