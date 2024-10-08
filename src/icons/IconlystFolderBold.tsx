import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M9.05 2c.93-.01 1.8.42 2.37 1.15l.88 1.17c.28.35.7.56 1.15.56h3.07c3.69 0 5.49 1.97 5.48 6.01v4.87c0 3.86-2.38 6.24-6.25 6.24H8.24C4.39 22 2 19.62 2 15.75V8.24C2 4.1 3.84 2 7.47 2Zm7.58 11.79H7.37c-.42 0-.75.33-.75.75 0 .41.33.75.75.75h9.26c.41 0 .74-.34.74-.75a.74.74 0 0 0-.74-.75"
    />
  </Svg>
);
export default IconlystFolderBold;
