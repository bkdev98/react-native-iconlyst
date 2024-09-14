import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonBulk = ({
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
      d="M21.776 13.874a.62.62 0 0 0-.596-.038c-2.985 1.587-6.745 1.023-9.142-1.373-2.4-2.398-2.967-6.157-1.375-9.152a.56.56 0 0 0-.054-.594.61.61 0 0 0-.598-.2c-4.127 1.181-7.009 5.005-7.009 9.3 0 5.338 4.341 9.68 9.677 9.68 4.296 0 8.121-2.888 9.302-7.023a.61.61 0 0 0-.205-.6"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMoonBulk;
